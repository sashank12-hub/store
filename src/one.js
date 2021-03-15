import React, { useState, Fragment ,useEffect} from "react";
import AddUserForm from "./forms/AddUserForm";
import EditUserForm from "./forms/EditUserForm";
import UserTable from "./tables/UserTable";
import {useHistory} from 'react-router-dom';
import { isAuthadmin,isAuthuser } from './Routes/auth';   

const One = () => {
  

  const usersData = [
    {
      id: 1,
      name: "Zinka Clear Zinc Oxide Sunscreen",
      manufacturer: "floppydiskette",
      price: 30,
      stock: 600,
      discount: 2,
      count:0
    },
    {
      id: 2,
      name: "O-Cal FA multivitamin",
      manufacturer: "siliconeidolon",
      price: 60,
      stock: 400,
      discount: 5,
      count:0
    },
    {
      id: 3,
      name: "Lip Balm SPF 15",
      manufacturer: "benisphere",
      price: 90,
      stock: 250,
      discount: 10,
      count:0
    }
  ];
  const [users, setUsers] = useState(usersData);
  const [display, setdisplay] = useState(false)
  useEffect(() => {
    var productList = window.localStorage.getItem('medicine_list')
 productList = productList === null || productList === '' ? [] : productList;
  productList = productList.length > 0 ? JSON.parse(productList) : [];
  productList=[...usersData];
  window.localStorage.setItem('medicine_list', JSON.stringify(productList))
  
  }, [])
 

  const initialFormState = { id: null, name: "", manufacturer: "" };

  // Setting state
  
  const [currentUser, setCurrentUser] = useState(initialFormState);
  const [editing, setEditing] = useState(false);

  // CRUD operations
  useEffect(() => {
    console.log(users);
    window.localStorage.removeItem('medicine_list');
    
    window.localStorage.setItem('medicine_list', JSON.stringify(users))
    
  }, [users])
  const addUser = user => {
    user.id = users.length + 1;
    setUsers([...users, user]);



    
   // window.localStorage.setItem('medicine_list', JSON.stringify(pt))
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
      manufacturer: user.manufacturer,
      price: user.price,
      stock: user.stock,
      discount: user.discount
    });
  };
  const classchange=()=>{
    setdisplay(prev=>!prev);
  }
let history=useHistory();
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
        <h2 style={{margin:"10px",textAlign:'center',color:'gold'}}>MEDICINES</h2>
        <UserTable users={users} editRow={editRow} deleteUser={deleteUser} />
      </div>
    </div>
  </div>
   
  );
};

export default One;
