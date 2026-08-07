// import { useState } from "react";
// import UploadBox from "../../components/upload/UploadBox";
// import { extractTextFromPDF } from "../../services/pdf";
// import { analyzeDocument } from "../../services/gemini";

// function Upload() {

//   const [result, setResult] = useState(null);
//   const [loading, setLoading] = useState(false);


//   async function handleFile(file) {

//     try {

//       setLoading(true);

//       console.log("File:", file.name);

//       const text = await extractTextFromPDF(file);

//       console.log("Extracted text:", text);


//       const analysis = await analyzeDocument(text);

//       console.log("AI Result:", analysis);


//       setResult(analysis);


//     } catch(error) {

//       console.error(error);
//       alert("Something went wrong");

//     }

//     setLoading(false);

//   }


//   return (

//     <div className="min-h-screen bg-slate-950 text-white p-10">

//       <h1 className="text-5xl font-bold text-center mb-10">
//         Sarkari-DocuMitra AI
//       </h1>


//       {!result && (
//         <UploadBox 
//           onFileSelect={handleFile}
//         />
//       )}


//       {loading && (

//         <div className="text-center mt-10">

//           <h2 className="text-3xl">
//             🤖 AI is analysing your document...
//           </h2>

//           <p className="mt-3 text-gray-400">
//             Extracting information and generating insights
//           </p>

//         </div>

//       )}


//       {result && (

//         <div className="max-w-5xl mx-auto bg-slate-900 p-8 rounded-3xl">

//           <h2 className="text-4xl font-bold">
//             {result.documentType}
//           </h2>


//           <p className="mt-6 text-lg">
//             {result.englishSummary}
//           </p>


//         </div>

//       )}

//     </div>

//   );
// }


// export default Upload;

import { useState } from "react";
import UploadBox from "../../components/upload/UploadBox";

import { extractTextFromPDF } from "../../services/pdf";
import { analyzeDocument } from "../../services/gemini";

function Upload() {

  const [loading, setLoading] = useState(false);

  async function handleFile(file) {

    try {

      setLoading(true);

      // Extract text from PDF
      const text = await extractTextFromPDF(file);

      // Send to Gemini
      const result = await analyzeDocument(text);


      // Save temporarily
      localStorage.setItem(
        "analysisResult",
        JSON.stringify(result)
      );


      // Go to analysis page
      window.location.href = "/analysis";


    } catch(error) {

      console.error(error);

      alert("Unable to analyze document");

    }


    setLoading(false);

  }


  return (

    <div className="min-h-screen bg-slate-950 text-white p-10">

      <h1 className="text-5xl font-bold text-center mb-10">
        Upload Government Document
      </h1>


      <UploadBox 
        onFileSelect={handleFile}
      />


      {
        loading && (

          <div className="text-center mt-10">

            <h2 className="text-3xl">
              🤖 AI is understanding your document...
            </h2>

            <p className="mt-3">
              Extracting information and generating checklist
            </p>

          </div>

        )
      }


    </div>

  );

}


export default Upload;