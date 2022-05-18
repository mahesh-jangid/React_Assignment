import React from "react";

// *************************************** 1st way **************************************

const Mobiles = (props) => {
  return (
    <div>
      <h2>{props.heading}</h2>
      <ul>
        {props.items.map((e) => {
          return <li>{e}</li>;
        })}
      </ul>
    </div>
  );
};

// *************************************** 2nd way **************************************
// const Mobiles = (props) => {
//   console.log(props);
//   return (
//     <div>
//       {props.Data.map((item) => {
//         return (
//           <>
//             <h2 className="heading">{item.heading}</h2>
//             <ul>
//               {item.items.map((list) => {
//                 return (
//                   <>
//                     <li>{list}</li>
//                   </>
//                 );
//               })}
//             </ul>
//           </>
//         );
//       })}
//     </div>
//   );
// };
export default Mobiles;
