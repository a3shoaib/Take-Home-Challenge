const express = require("express");
const app = express();
const uuid = require('uuid');



const admin = require("firebase-admin");
const credentials = require("../../serviceAccountKey.json");

admin.initializeApp({
   credential: admin.credential.cert(credentials)
});

app.use(express.json());

app.use(express.urlencoded({extended: true}));

let db = admin.firestore();

const genAPIKey = () => {
   //create a base-36 string that contains 30 chars in a-z,0-9
   return [...Array(30)]
     .map((e) => ((Math.random() * 36) | 0).toString(36))
     .join('');
 };


function getCurrentTimestamp () {
   return Date.now()
 }

let throttler = new Map() // Maps the API key to the queue for throttling
const REQUEST_LIMIT = 100
const MINUTES_TO_MILLISECONDS = 60000
const THROTTLING_TIME_MILLISECONDS = 5 * MINUTES_TO_MILLISECONDS // 5 minutes

app.get('/task-2-api/retrievePostsBySlug', async (req, res) =>{
   // Get api key, if api key is not in map, add it 
   const api_key = req.query["api_key"]
   if (!throttler.has(api_key)) {
      console.log("SETTING")
      throttler.set(api_key, []);
   }
   const throttling_queue = throttler.get(api_key)

   const current_time = getCurrentTimestamp()
   console.log("Current time:", current_time)

   // Eliminate all timestamps in the queue that are not in the current throttling window (of 5 minutes)
   while(throttling_queue.length != 0 && current_time - throttling_queue[0] > THROTTLING_TIME_MILLISECONDS) {
      throttling_queue.shift();
   }

   // Determine if the request needs to be throttled/dropped.
   if (throttling_queue.length < REQUEST_LIMIT) {
      // No need to throttle, good to go
      throttling_queue.push(current_time)
   } else {
      // Drop the request
      res.send("Dropped the request due to throttling")
   }


   db = admin.firestore();
   
   // let collections = await db.listCollections();

   try {
      // Collection gets documents - from documentation
      const response = db.collection("feed") //collections[1]
      var response_arr = []

      // Do Listdocuments - returns array of document references 
      const documents = await response.listDocuments();

      for(let i = 0; i < documents.length; i++) {
         // Get element of array
         const doc_snapshot = await documents[i].get()
         // Push the data of that element
         response_arr.push(doc_snapshot.data());

         // const data = doc_snapshot.data();
      }

      res.send(response_arr);
   } catch(error){
      res.send(error);
   }
})

// Give user a unique api key 
app.get('/task-2-api/getAPIkey', async (req, res) =>{
   const api_key = uuid.v4()
   try {
      res.send(api_key)
   }
   catch (error){
      res.send(error)
   }
})  


// 8080 auto takes free port
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
   console.log(`Server is running on PORT ${PORT}.`);
})

