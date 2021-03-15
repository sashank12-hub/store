import React, { useState, Fragment ,useEffect} from "react";
import AddUserForm from "./forms3/AddUserForm";
import EditUserForm from "./forms3/EditUserForm";
import UserTable from './tables3/UserTable';
const Customer = () => {
    const usersData = [
                {
                  id: 1,
                  name: "sashank",
                  order: "O-Cal FA multivitamin",
                  phone: 8639079799,
                  quantity: 6,
                  
                }
              ];
  
  const [users, setUsers] = useState(usersData);
  const [display, setdisplay] = useState(false)
  useEffect(() => {
 var productList = window.localStorage.getItem('customers_list')
 productList = productList === null || productList === '' ? [] : productList;
  productList = productList.length > 0 ? JSON.parse(productList) : [];
  productList=[...usersData];
  window.localStorage.setItem('customers_list', JSON.stringify(productList))
 
  }, [])
 
 
     const initialFormState = { id: null,  quantity:0,name:'',phone:'',amount:0 ,order:''};

  // Setting state
  
  const [currentUser, setCurrentUser] = useState(initialFormState);
  const [editing, setEditing] = useState(false);

  // CRUD operations
  useEffect(() => {
    console.log(users);
    window.localStorage.removeItem('customers_list');
    
    window.localStorage.setItem('customers_list', JSON.stringify(users))
    
  }, [users])
  const addUser = user => {
    user.id = users.length + 1;
    setUsers([...users, user]);
    console.log(user)



    
   
  };

  const deleteUser = id => {
    setEditing(false);

    setUsers(users.filter(user => user.id !== id));
  };

  const updateUser = (id, updatedUser) => {
    setEditing(false);

    setUsers(users.map(user => (user.id === id ? updatedUser : user)));
  };

  const editRow = user => {
    setEditing(true);

    setCurrentUser({
              id: user.id,
              name: user.name,
              phone: user.phone,
              medicine:user.order,
              quantity: user.quantity,
             
            });
  };
  const classchange=()=>{
    setdisplay(prev=>!prev);
  }

  return (
    <div className="container-fluid">
    
     
     
      <div className="flex-row oo">
      <div className="flex-large ">
        {editing ? (
          <Fragment>
            
            <EditUserForm
              editing={editing}
              setEditing={setEditing}
              currentUser={currentUser}
              updateUser={updateUser}
             
            />
          </Fragment>
        ) : (
          <Fragment>
           
            <AddUserForm addUser={addUser} />
          </Fragment>
        )}
      </div>
    </div>

      
      
      <div className="flex-row">
        <div className="flex-large">
          <h2 style={{margin:"10px",textAlign:'center',color:'gold'}}>Customers</h2>
          <UserTable users={users} editRow={editRow} deleteUser={deleteUser} />
        </div>
      </div>
    </div>
  );
};

export default Customer;















// import React ,{useEffect,useState,Fragment}from 'react'
// import AddUserForm from './forms3/AddUserForm'
// import EditUserForm from './forms3/EditUserForm'
// import UserTable from './tables3/UserTable'
// export default function Orders() {
//     const[med,setmed]=useState([])
//     const initialFormState = { id: null,  quantity:0,name:'',phone:'',amount:0 ,order:''};
//     const usersData = [
//         {
//           id: 1,
//           name: "sashank",
//           order: "O-Cal FA multivitamin",
//           phone: 8639079799,
//           quantity: 6,
          
//         }
//       ];
//     const [users, setUsers] = useState(usersData);
//     const [editing, setEditing] = useState(false);
    
//     const [current, setcurrent] = useState(initialFormState)
//     useEffect(() => {
//       
        
//       }, [])
//      useEffect(() => {
//          var productList = window.localStorage.getItem('customer_list')
//       productList = productList === null || productList === '' ? [] : productList;
//        productList = productList.length > 0 ? JSON.parse(productList) : [];
//        productList=[...usersData];
//        window.localStorage.setItem('customer_list', JSON.stringify(productList))
      
//        }, [])

//     useEffect(() => {
//         console.log(users);
//         window.localStorage.removeItem('customer_list');
        
//         window.localStorage.setItem('customer_list', JSON.stringify(users))
        
//       }, [users])
     
    
    
    
   

// useEffect(() => {
    
//     console.log(current)
// }, [current])




// const addUser = (user) => {
//     user.id = users.length + 1;
//     setUsers([...users, user]); };

//   const deleteUser = id => {
//     setEditing(false);

//     setUsers(users.filter(user => user.id !== id));
//   };

//   const updateUser = (id, updatedUser) => {
//     setEditing(false);

//     setUsers(users.map(user => (user.id === id ? updatedUser : user)));
//   };

//   const editRow = user => {
//     setEditing(true);

//     setcurrent({
//       id: user.id,
//       name: user.name,
//       phone: user.phone,
//       medicine:user.order,
//       quantity: user.quantity,
     
//     });
//   };
//     return (  
//         <div className="container-fluid">
    
    
   
//         <div className="flex-row oo">
//         <div className="flex-large ">
//           {editing ? (
//             <Fragment>
              
//               <EditUserForm
//                 editing={editing}
//                 setEditing={setEditing}
//                 currentUser={current}
//                 updateUser={updateUser}
//                 med={med}
//               />
//             </Fragment>
//           ) : (
//             <Fragment>
             
//               <AddUserForm addUser={addUser} med={med} />
//             </Fragment>
//           )}
//         </div>
//       </div>
    
        
        
        
//         <div className="flex-row">
//           <div className="flex-large">
//             <h2 style={{margin:"10px",textAlign:'center',color:'gold'}}>ORDERS</h2>
//             <UserTable users={users} editRow={editRow} deleteUser={deleteUser} />
//           </div>
//         </div>
//         </div>
        
  
//     )
// }