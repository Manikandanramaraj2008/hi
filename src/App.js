//  import React,{Fragment} from 'react';

// import './App.css';
// import Ele,{Sample} from './components/Ele'


// Day 02 &&& Day  03 TASKS

// Task 1******************

// Task 1******************

// export default function App(){
//   return(
//     <Fragment>
//     <div>Hello World</div>
    
//     <Ele/>
//     <Sample/> 
   

//      </Fragment>

//  )
// }

// Task 2 ******************

// import React from "react";

// export default function App(){
//     return(
//         <div>Hello World
//             <p>Hi Welcome</p>
//             <h4>I am Manikandan</h4>
//         </div>
       
//     )
// }


// Task 3 ******************


// import React from "react";

// export default function App(){
//     return(
//         <div className ="App">
//             <Welcome name ="Raja...!!!! Welcome to REACT"/>
//             <Welcome name ="Mani...!!!! Pls join with Mr. Raja and Welcome to REACT"/>
//         </div>
//            )
// }

// function Welcome({name}){ 
//     return(
//         <div className="Welcome">
//             <h3>Hello...🌹🎉👌{name}</h3>
//         </div>
//     )
// }


// Task 4 ******************

// import React from "react";

// export default function App(){
//     return(
//         <div className ="App">
//             <Welcome 
//             name ="Raja"
//             profile= "https://cdn.britannica.com/84/73184-004-E5A450B5/Sunflower-field-Fargo-North-Dakota.jpg"
//             />
//             <Welcome
//              name ="Mani"
//              profile ="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/daisy-flower-1532449822.jpg?crop=0.752xw:1.00xh;0.125xw,0&resize=640:*"
//              />
//         </div>
//            )
// }

// function Welcome({name,profile}){ 
//     return(
//         <div className="Welcome">
//          <h3>Hello...🌹🎉👌{name}</h3>
//          <img className="user-profile-pic" src ={profile} alt = "profile-pic"/>

//         </div>
//     )
// }

// Task 5 ******************

// import React from "react";

// export default function App(){
   
//     const names =["mani","ram","yes","no","why","saras"]
//     return(
// <div className="App">
//     {names.map((nm)=>
//     <Msg name={nm}/>)}    
// </div>
//     );
// }


        
// function Msg({name}){ 
    
//     return(
//         <div className="Msg">
//          <h3>Hello...🌹🎉👌{name}</h3>
//         </div>
//     )
// }


// Task 6 ******************

// import React from "react";

// export default function App(){
   
//     const users =[
//         {
//             name:"Raja",
//             profile: "https://cdn.britannica.com/84/73184-004-E5A450B5/Sunflower-field-Fargo-North-Dakota.jpg"
//         },

//         {
//             name :"Mani",
//              profile :"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/daisy-flower-1532449822.jpg?crop=0.752xw:1.00xh;0.125xw,0&resize=640:*"

//         },
        
//     ]
//     return(
// <div className="App">
//     {users.map((usr)=>
//     (<Welcome 
//     name={usr.name}
//     profile={usr.profile}
//     />))}    
// </div>
//     );
// }

        
// function Welcome({name,profile}){ 
    
//     return(
//                                <div className="Welcome">
//                      <h3>Hello...🌹🎉👌{name}</h3>
//                      <img className="user-profile-pic" src ={profile} alt = "profile-pic"/>
            
//                     </div>
//     )
// }

