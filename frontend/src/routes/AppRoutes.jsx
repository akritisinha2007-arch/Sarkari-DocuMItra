// import { BrowserRouter, Routes, Route } from "react-router-dom";

// import Landing from "../pages/Landing";
// import Upload from "../pages/Upload/Upload";
// import Analysis from "../pages/Analysis";

// function AppRoutes() {
//   return (
//     <BrowserRouter>

//       <Routes>

//         <Route 
//           path="/" 
//           element={<Landing />} 
//         />

//         <Route 
//           path="/upload" 
//           element={<Upload />} 
//         />

//         <Route 
//           path="/analysis" 
//           element={<Analysis />} 
//         />

//       </Routes>

//     </BrowserRouter>
//   );
// }

// export default AppRoutes;

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Landing from "../pages/Landing";
import Upload from "../pages/Upload/Upload";
import Analysis from "../pages/Analysis";


function AppRoutes() {

  return (

    <BrowserRouter>

      <Routes>

        <Route 
          path="/" 
          element={<Landing />} 
        />

        <Route 
          path="/upload" 
          element={<Upload />} 
        />

        <Route 
          path="/analysis" 
          element={<Analysis />} 
        />

      </Routes>

    </BrowserRouter>

  );

}


export default AppRoutes;
