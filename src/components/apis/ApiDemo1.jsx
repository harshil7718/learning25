// import axios from "axios";
// import React, { useState } from "react";

// export const ApiDemo1 = () => {
//   const [message, setmessage] = useState("");
//   const [users, setusers] = useState([]);

//   const getUserData = async () => {
//     const res = await axios.get("https://node5.onrender.com/user/user");
//     console.log(res); //axios object...
//     console.log(res.data); //original response....
//     console.log(res.data.message);
//     setmessage(res.data.message); //""
//     console.log(res.data.data);
//     setusers(res.data.data); //[]
//   };

//   return (
//     <div style={{ textAlign: "center" }}>
//       <h1>API DEMO 1</h1>
//       <button
//         onClick={() => {
//           getUserData();
//         }}
//       >
//         get
//       </button>
//       {message}
//       {/* {users} */}
//       {/* {users?.map((user) => {
//         return (
//           <li>
//             {user.name} {user.age}
//           </li>
//         );
//       })} */}
//         {
//         <table className="table table-dark">
//           <thead>
//             <tr>
//               <th>id</th>
//               <th>Name</th>
//               <th>Email</th>
//               <th>Age</th>
//             </tr>
//           </thead>
//           <tbody>
//             {users.map((d) => {
//               return (
//                 <tr>
//                   <td>{d._id}</td>
//                   <td>{d.name}</td>
//                   <td>{d.email}</td>
//                   <td>{d.age}</td>
//                 </tr>
//               );
//             })}
//           </tbody>
//         </table>
//           }

//     </div>
//   );
// };

import axios from "axios";
import React, { useState } from "react";

export const ApiDemo1 = () => {
  const [message, setmessage] = useState("");
  const [users, setusers] = useState([]);

  const getUserData = async () => {
    try {
      const res = await axios.get("https://node5.onrender.com/user/user");
      console.log(res); //axios object...
      console.log(res.data); //original response....
      console.log(res.data.message);
      setmessage(res.data.message);
      console.log(res.data.data);
      setusers(res.data.data);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>API DEMO 1</h1>
      <button
        onClick={getUserData}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          marginBottom: "20px",
          cursor: "pointer",
        }}
      >
        Get Users
      </button>
      <h2>{message}</h2>
      {users.length > 0 ? (
        <table
          style={{
            width: "80%",
            margin: "auto",
            borderCollapse: "collapse",
            border: "1px solid black",
          }}
        >
          <thead>
            <tr style={{ background: "#f2f2f2" }}>
              <th style={tableHeaderStyle}>#</th>
              <th style={tableHeaderStyle}>Name</th>
              <th style={tableHeaderStyle}>Age</th>
              <th style={tableHeaderStyle}>Email</th>
              <th style={tableHeaderStyle}>Phone</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index} style={tableRowStyle}>
                <td style={tableCellStyle}>{index + 1}</td>
                <td style={tableCellStyle}>{user.name}</td>
                <td style={tableCellStyle}>{user.age}</td>
                <td style={tableCellStyle}>{user.email || "N/A"}</td>
                <td style={tableCellStyle}>{user.phone || "N/A"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No users found</p>
      )}
    </div>
  );
};

// Inline Styles for Table
const tableHeaderStyle = {
  padding: "10px",
  border: "1px solid black",
  textAlign: "left",
  fontWeight: "bold",
};

const tableCellStyle = {
  padding: "10px",
  border: "1px solid black",
  textAlign: "left",
};

const tableRowStyle = {
  background: "#fff",
};

export default ApiDemo1;