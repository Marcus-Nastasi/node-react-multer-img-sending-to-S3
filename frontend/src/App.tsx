import { CSSProperties, useState } from "react";

function App() {
   const [ image, setImage ] = useState();
   const [ status, setStatus ] = useState<string>();

   const handleFileChange = (e: any) => {
      setImage(e.target.files[0]);
   };

   const handleUpload = async (e: any) => {
      e.preventDefault();

      if (image) {
        const formData = new FormData();
        formData.append('file', image);
  
        try {
          const response: Response = await fetch('http://localhost:3030/upload', {
            method: 'POST',
            body: formData,
          });
  
          if (response.status == 202) {
            const data = await response.json();
            setStatus(`File uploaded successfully: ${data.file.originalname}`);
          } else {
            setStatus('Error uploading file');
          }
        } catch (error) {
          console.error('Error uploading file:', error);
          setStatus('Error uploading file');
        }
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

               <button onClick={handleUpload}>send</button>

            </form>

            <p>
               {status}
            </p>

            <img src="https://library-app-images.s3.amazonaws.com/0dc614cb-abe6-48af-9467-907716cdc5e1-Captura+de+tela+de+2024-07-15+19-11-20.png" alt="" />

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


