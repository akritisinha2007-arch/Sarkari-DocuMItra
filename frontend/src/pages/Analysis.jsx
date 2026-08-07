// function Analysis() {
//   return (
//     <div className="min-h-screen bg-slate-950 text-white">

//       <div className="max-w-7xl mx-auto p-10">

//         <h1 className="text-5xl font-bold">

//           AI Analysis

//         </h1>

//       </div>

//     </div>
//   );
// }

// export default Analysis;
import { useEffect, useState } from "react";


function Analysis(){

const [data,setData] = useState(null);


useEffect(()=>{

const saved = localStorage.getItem(
"analysisResult"
);


if(saved){
setData(JSON.parse(saved));
}


},[]);



if(!data){

return (

<div className="min-h-screen bg-slate-950 text-white flex items-center justify-center">

<h1 className="text-4xl">
No analysis found
</h1>

</div>

)

}



return (

<div className="min-h-screen bg-slate-950 text-white p-10">


<h1 className="text-5xl font-bold mb-8">
📄 {data.documentType}
</h1>



<div className="bg-slate-900 rounded-3xl p-8">

<h2 className="text-3xl text-cyan-400">
AI Summary
</h2>

<p className="mt-5 text-lg">
{data.englishSummary}
</p>


</div>



<div className="bg-slate-900 rounded-3xl p-8 mt-8">

<h2 className="text-3xl text-green-400">
✅ Next Steps
</h2>


{
data.nextSteps.map((step,index)=>(

<p 
key={index}
className="mt-4"
>

{index+1}. {step}

</p>

))

}


</div>



</div>

)

}


export default Analysis;