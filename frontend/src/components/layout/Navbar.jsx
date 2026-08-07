// //import { Link } from "react-router-dom";

// function Navbar() {
//   return (
//     <nav className="w-full flex justify-between items-center px-10 py-6 bg-white shadow-sm">

//       <h1 className="text-3xl font-bold text-blue-600">
//         Sarkari-DocuMitra 🚀
//       </h1>

//       <div className="flex gap-8 text-gray-700 font-medium">

//         <a href="#">Home</a>

//         <a href="#">Features</a>

//         <a href="#">How it Works</a>

//        <a href="#">
//   Upload
// </a>

//       </div>

//       <button className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition">
//         Get Started
//       </button>

//     </nav>
//   );
// }

// export default Navbar;

function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-6 shadow-sm">
      <h1 className="text-3xl font-bold text-blue-600">
        Sarkari-DocuMitra 🚀
      </h1>

      <button className="bg-blue-600 text-white px-6 py-3 rounded-xl">
        Get Started
      </button>
    </nav>
  );
}

export default Navbar;