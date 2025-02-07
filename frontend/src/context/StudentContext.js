// import React, { createContext, useState } from 'react';

// export const StudentContext = createContext();

// export const StudentProvider = ({ children }) => {
//   const [student, setStudent] = useState(null);

//   return (
//     <StudentContext.Provider value={{ student, setStudent }}>
//       {children}
//     </StudentContext.Provider>
//   );
// };


// src/context/StudentContext.js
import React, { createContext, useState } from 'react';

// Create the context
export const StudentContext = createContext();

// Create the provider
export const StudentProvider = ({ children }) => {
  const [student, setStudent] = useState(null);

  return (
    <StudentContext.Provider value={{ student, setStudent }}>
      {student}
    </StudentContext.Provider>
  );
};