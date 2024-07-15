import { CSSProperties, useState } from "react";

function App() {
   const [ image, setImage ] = useState<File | null>();
   const [ status, setStatus ] = useState<string>();

   const handleFileChange = (e: any) => {
      setImage(e.target.files[0]);
   };

   const handleUpload = async (e: any) => {
      e.preventDefault();

      if(!image) {
         setStatus('Error: image not selected');
         return
      };

      const formData = new FormData();
      formData.append('file', image);

      try {
         const response: Response = await fetch('http://localhost:3030/upload', {
            method: 'POST',
            body: formData
         });

         if (response.status === 202) {
            const data = await response.json();
            setStatus(`File uploaded successfully: ${data.file.originalname}`);
            return
         }
      } catch (error) {
         console.error('Error uploading file:', error);
         setStatus('Error uploading file');
      }
   };

   return(
      <>
         <div style={divStyle}>

            <form style={formStyle}>

               <label htmlFor="" style={{ paddingBottom: '20px', fontSize: '40px' }}>
                  Image:
               </label>
               <input 
                  onChange={handleFileChange} 
                  type="file" 
                  accept="image/**" 
               />

               <button 
                  style={{ padding: '5px', margin: '20px' }} 
                  onClick={handleUpload}
               >
                  send
               </button>

            </form>

            <p>
               {status}
            </p>

         </div>
      </>
   )
}

const divStyle: CSSProperties = {
   display: 'flex',
   width: '100%',
   height: '90vh',
   justifyContent: 'center',
   alignItems: 'center'
};

const formStyle: CSSProperties = {
   display: 'flex',
   flexDirection: 'column'
};

export default App;


