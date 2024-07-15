import { CSSProperties, useState } from "react";

function App() {
   const [ image, setImage ] = useState(null);

   const handleFileChange = (e: any) => {
      setImage(e.target.files[0]);
   };

   return(
      <>
         <div style={divStyle}>

            <form action="" style={formStyle}>

               <label htmlFor="" style={{ padding: '20px' }}>
                  Image:
               </label>
               <input 
                  onChange={handleFileChange} 
                  type="file" 
                  accept="image/**" 
                  name="" 
                  id="" 
               />

            </form>

         </div>
      </>
   )
}

const divStyle: CSSProperties = {
   display: 'flex',
   width: '100%',
   height: '100vh',
   justifyContent: 'center',
   alignItems: 'center'
};

const formStyle: CSSProperties = {
   display: 'flex',
   flexDirection: 'column'
};

export default App;


