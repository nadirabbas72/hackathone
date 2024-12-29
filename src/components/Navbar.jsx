// src/components/Navbar.jsx
// import React from 'react';

// const Navbar = () => {
//     return (
//         <nav className="bg-blue-600 p-4 shadow-md">
//             <div className="container mx-auto flex justify-between items-center">
//                 <h1 className="text-white text-2xl font-bold">Event Management</h1>
//                 <ul className="flex space-x-6">
//                     <li>
//                         <a href="/" className="text-white text-lg hover:text-gray-200 transition duration-200">Home</a>
//                     </li>
//                     <li>
//                         <a href="/login" className="text-white text-lg hover:text-gray-200 transition duration-200">Login</a>
//                     </li>
//                     <li>
//                         <a href="/events" className="text-white text-lg hover:text-gray-200 transition duration-200">Events</a>
//                     </li>
//                 </ul>
//             </div>
//         </nav>
//     );
// };

// export default Navbar;



import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="flex justify-between items-center">
        <Link to="/" className="text-white text-2xl font-semibold">EventApp</Link>
        <div>
          <Link to="/" className="text-white mx-4">Home</Link>
          <Link to="/login" className="text-white mx-4">Login</Link>
          <Link to="/signup" className="text-white mx-4">SignUp</Link>
          <Link to="/dashboard" className="text-white mx-4">Dashboard</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
