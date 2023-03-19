import { useState } from 'react';
import Title from "./builder-components/Title"
import Text from "./builder-components/Text"
import Description from './builder-components/Description';
import InputLongText from './builder-components/InputLongText';
import Button from './builder-components/Button';
import InputNum from './builder-components/InputNumber';

// Run with npm run dev
export default function MainBuilder(config) {

   // const style = config.config?.style
   const num = config.num
   
   // console.log("long text is ", inputLongText)
   // console.log("text IS", text)
   // const stringified_data = JSON.stringify(config)

   // <p>{stringified_data}</p>

   // const stylingg = JSON.stringify(config.config.components[0].placeholder)
   // TO-DO: Keep track of every input component's
   // values in a dictionary so that 
   // const [state, setState] = useState(...);

   

   if (num==1){
      
      return <div style={{ 
         backgroundImage:  `url("https://i.kinja-img.com/gawker-media/image/upload/c_fit,f_auto,g_center,q_60,w_645/af79c3451ddfb943aa68b7714e8f9796.jpg")`,
         width: "1300px",
         height: "100px"
      }}>
         <div
         style={
         {border: '4px dotted #90021f',
         backgroundColor: '#b1f2ff',
         borderStyle: 'dotted',
         color: 'black',
         }}>
         {
         <>
            <Builder1 config={config} />
         </>
         }
         </div>
      </div>
      
      
   }
   else if (num==2){
      return <div style={{ 
         backgroundImage:  `url("https://i.kinja-img.com/gawker-media/image/upload/c_fit,f_auto,g_center,q_60,w_645/af79c3451ddfb943aa68b7714e8f9796.jpg")`,
         width: "1300px",
         height: "500px"
      }}>
            <center><div style={
            {border: '4px dotted #90021f',
            borderStyle: 'dotted',
            backgroundColor: '#b1f2ff',
            color: 'black',
            width: '40vw',
            height: '30vw',
            }
            }>
            {
            <>
               <Builder2 config={config} />
            </>
            }
            </div>
            </center>
      </div>
   }
   else if (num==3){
      return <div style={{ 
         backgroundImage:  `url("https://i.kinja-img.com/gawker-media/image/upload/c_fit,f_auto,g_center,q_60,w_645/af79c3451ddfb943aa68b7714e8f9796.jpg")`,
         width: "1300px",
         height: "500px"
      }}>
            <center><div style={
            {border: '4px dotted #90021f',
            backgroundColor: '#b1f2ff',
            borderStyle: 'dotted',
            color: 'black',
            width: '40vw',
            height: '30vw',
            }
            }>
            {
            <> 
               <Builder3 config={config} />
            </>
            }
            </div>
            </center>
      </div>
   }


      
   
       

   
   


}

function Builder1(config) {

   const b1title = config.config.config.components[0].placeholder

   return <div>
      {
      <>
         <Text shortText={b1title}/>
      </>
      }
   </div>
}

function Builder2(config) {

   const b2title = config.config.config?.title
   const b2description = config.config.config?.description
   const b2smallHeader = config.config.config.components[0]?.title
   const b2smallHeader2 = config.config.config.components[1]?.title
   

   // For inputlongtext
   const b2prop = config.config.config.components
   // For button
   const b2prop2 = config.config.config.components[2]
   // For inputNum
   const b2prop3 = config.config.config.components[1]

   return <div>
      {
      <>
         <Title name={b2title}/>
         <Description description={b2description}/>
         <Text shortText = {b2smallHeader}/>
         <InputLongText prop = {b2prop} />
         <Text shortText = {b2smallHeader2}/>
         <InputNum defaultVal = {b2prop3}/>
         <Button prop = {b2prop2} />
      </>
      }
   </div>
}

function Builder3(config) {

   const b3title = config.config.config?.title
   const b3description = config.config.config?.description
   const b3smallHeader = config.config.config.components[0]?.title

   // For inputnumber
   const b3prop = config.config.config.components[0]
   // For button
   const b3prop2 = config.config.config.components[1]

   return <div>
      {
      <>
         <Title name={b3title}/>
         <Description description={b3description}/>
         <Text shortText = {b3smallHeader}/>
         <InputNum defaultVal = {b3prop}/>
         <Button prop = {b3prop2} />
      </>
      }
   </div>
}

