 import { useCallback } from "react";
 import { useDropzone } from "react-dropzone";

 function UploadBox({ onFileSelect }) {

   const onDrop = useCallback((acceptedFiles) => {

     if (acceptedFiles.length > 0)
       onFileSelect(acceptedFiles[0]);

   }, []);

   const { getRootProps, getInputProps } =
     useDropzone({

       multiple: false,

       accept: {

         "application/pdf": [".pdf"],

       },

       onDrop,

     });

   return (

     <div
       {...getRootProps()}
       className="border-2 border-dashed border-violet-500 p-20 rounded-3xl text-center cursor-pointer"
     >

       <input {...getInputProps()} />

       <h2 className="text-3xl font-bold">

         Upload Government PDF

       </h2>

      <p className="mt-5">

         Drag & Drop

       </p>

     </div>

   );

}

export default UploadBox;

