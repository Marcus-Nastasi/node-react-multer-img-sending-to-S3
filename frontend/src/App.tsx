import { CSSProperties, useState } from "react";

function App() {
   const [ image, setImage ] = useState<File | null>();
   const [ status, setStatus ] = useState<string>();
   const [ hover, setHover ] = useState<boolean>();

   const handleFileChange = (e: any) => setImage(e.target.files[0]);

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

         if (response.status !== 202) {
            setStatus('error uploading');
            return
         }

         const data = await response.json();
         setStatus(data.url);
         
         return
      } catch (error) {
         console.error('Error uploading file:', error);
         setStatus('Error uploading file');
      }
   };

   return(
      <main style={mainStyle}>

         <div style={divStyle}>
            <form style={formStyle}>

               <div>
                  <label htmlFor="" style={{ paddingBottom: '20px', fontSize: '40px', paddingRight: "1rem" }}>
                     Image:
                  </label>
                  <input 
                     onChange={handleFileChange} 
                     type="file" 
                     accept="image/**" 
                  />
               </div>

               <button 
                  style={{ ...buttonStyle, backgroundColor: hover ? 'rgba(59, 110, 255, 1)' : 'rgba(59, 130, 247, 1)' }} 
                  onClick={handleUpload}
                  onMouseOver={() => setHover(true)}
                  onMouseLeave={() => setHover(false)}
               >
                  send
               </button>

            </form>
         </div>

         { status ? <img src={status} alt="" /> : '' }
         
      </main>
   )
}

const mainStyle: CSSProperties = {
   display: "flex",
   flexDirection: "column",
   justifyContent: "center",
   alignItems: "center",
   width: "100vw",
   minHeight: "100vh",
   maxHeight: "fit-content",
   backgroundImage: "url(assets/img/bg-red.png)",
};

const divStyle: CSSProperties = {
   display: 'flex',
   alignItems: 'center',
   padding: "9rem",
   borderRadius: "2rem",
   backgroundColor: "rgba(128, 128, 128, 0.3)",
   backdropFilter: "blur(10px)",
   WebkitBackdropFilter: "blur(10px)",
   border: "2px solid rgba(128, 128, 128, 0.6)"
};

const formStyle: CSSProperties = {
   display: 'flex',
   flexDirection: 'column',
   alignItems: "center"
};

const buttonStyle: CSSProperties = {
   color: 'white',
   fontWeight: 'bold',
   width: "fit-content", 
   padding: '10px', 
   paddingRight: "3rem", 
   paddingLeft: "3rem", 
   marginTop: '50px',
   fontSize: "1.1rem",
   borderRadius: "0.2rem",
   cursor: 'pointer',
   border: 'none'
};

export default App;


