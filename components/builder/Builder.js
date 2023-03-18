import { useState } from 'react';
import Title from "./builder-components/Title"
import Text from "./builder-components/Text"
import Description from './builder-components/Description';
import InputLongText from './builder-components/InputLongText';
import Button from './builder-components/Button';

// Run with npm run dev
export default function Builder(config) {
   const title = config.config?.title
   const style = config.config?.style
   const description = config.config?.description
   const smallHeader = config.config.components[0]?.title

   // For inputlongtext
   const prop = config.config.components[0]

   // For button
   const prop2 = config.config.components[1]

   //console.log("long text is ", inputLongText)
   //console.log("text IS", text)
   const stringified_data = JSON.stringify(config)


   // States

   const stylingg = JSON.stringify(config.config.components[2])
   // TO-DO: Keep track of every input component's
   // values in a dictionary so that 
   // const [state, setState] = useState(...);

   return <div style={
      style
   }>
      {
      <>
         <p>{stringified_data}</p>
         <p>{stylingg}</p>
         
         <Title name={title}/>
         <Description description={description}/>
         <Text shortText = {smallHeader}/>
         <InputLongText prop = {prop} />
         <Button prop = {prop2} />
         
         
      </>
      /* <Builder config={Builder1} />
      <Builder config={Builder2} />
      <Builder config={Builder3} /> */}
   </div>
}