import { GoogleGenAI } from "@google/genai";

 const ai = new GoogleGenAI({
       apiKey: import.meta.env.VITE_GEMINI_API_KEY,
 });

 export async function analyzeDocument(documentText) {
   const prompt = `
 You are an expert AI assistant for Indian Government Documents.

 Analyze the following document.

 Return ONLY valid JSON in this format:

 {
   "documentType":"",
   "englishSummary":"",
   "hindiSummary":"",
   "importantDates":[],
   "fees":"",
   "eligibility":"",
   "requiredDocuments":[],
   "missingDocuments":[],
   "nextSteps":[],
   "faq":[
       {
          "question":"",
          "answer":""
       }
   ]
 }

 Document:

 ${documentText}
 `;

   const response = await ai.models.generateContent({
     model: "gemini-3.6-flash",
                 contents: prompt,
   });

   let text = response.text ?? "";

 // Remove ```json ... ``` if present
 text = text.replace(/```json/g, "").replace(/```/g, "").trim();

 return JSON.parse(text);
 }

// import { GoogleGenAI } from "@google/genai";


// const ai = new GoogleGenAI({

//   apiKey: import.meta.env.VITE_GEMINI_API_KEY,

// });



// export async function analyzeDocument(documentText){


// const prompt = `

// Analyze this Indian government document.

// Return ONLY JSON.

// Format:

// {
// "documentType":"",
// "englishSummary":"",
// "hindiSummary":"",
// "importantDates":[],
// "fees":"",
// "eligibility":"",
// "requiredDocuments":[],
// "missingDocuments":[],
// "nextSteps":[],
// "faq":[]
// }


// Document:

// ${documentText}

// `;



// const response = await ai.models.generateContent({

// model:"gemini-3.6-flash",

// contents:prompt,

// });


// return JSON.parse(response.text);


// }