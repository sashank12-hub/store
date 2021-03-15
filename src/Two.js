import React, { useState, Fragment ,useEffect} from "react";
import AddUserForm from "./forms2/AddUserForm";
import EditUserForm from "./forms2/EditUserForm";
import UserTable from "./table2/UserTable";
const Two = () => {
   

  const usersData = [{
    "id": 1,
    "FirstName": "Florian",
    "LastName": "Kelway",
    "Dob": "26/08/1990",
    "Gender": "M",
    "Experience": 1
  }, {
    "id": 2,
    "FirstName": "Louie",
    "LastName": "Packington",
    "Dob": "06/01/2007",
    "Gender": "M",
    "Experience": 2
  }, {
    "id": 3,
    "FirstName": "Hermia",
    "LastName": "Wollen",
    "Dob": "16/02/2004",
    "Gender": "F",
    "Experience": 3
  }, {
    "id": 4,
    "FirstName": "Cyrus",
    "LastName": "Noar",
    "Dob": "02/02/1999",
    "Gender": "M",
    "Experience": 4
  }, {
    "id": 5,
    "FirstName": "Ellerey",
    "LastName": "Kift",
    "Dob": "20/05/1994",
    "Gender": "M",
    "Experience": 5
  }, {
    "id": 6,
    "FirstName": "Fanya",
    "LastName": "Rominov",
    "Dob": "27/01/1995",
    "Gender": "F",
    "Experience": 6
  }, {
    "id": 7,
    "FirstName": "Lane",
    "LastName": "Hegarty",
    "Dob": "17/03/1995",
    "Gender": "M",
    "Experience": 7
  }, {
    "id": 8,
    "FirstName": "Timmy",
    "LastName": "Menel",
    "Dob": "05/07/2008",
    "Gender": "M",
    "Experience": 8
  }, {
    "id": 9,
    "FirstName": "Friedrick",
    "LastName": "Shreenan",
    "Dob": "10/03/2004",
    "Gender": "M",
    "Experience": 9
  }, {
    "id": 10,
    "FirstName": "Amity",
    "LastName": "Petruk",
    "Dob": "18/08/2003",
    "Gender": "F",
    "Experience": 10
  }]
  const [users, setUsers] = useState(usersData);
  const [display, setdisplay] = useState(false)
  useEffect(() => {
    var productList = window.localStorage.getItem('user_list')
 productList = productList === null || productList === '' ? [] : productList;
  productList = productList.length > 0 ? JSON.parse(productList) : [];
  productList=[...usersData];
  window.localStorage.setItem('user_list', JSON.stringify(productList))
  
  }, [])
 

  const initialFormState = { id: null,FirstName : "",LastName:"",  Gender:"M",Experience:"",Dob:''};

  // Setting state
  
  const [currentUser, setCurrentUser] = useState(initialFormState);
  const [editing, setEditing] = useState(false);

  // CRUD operations
  useEffect(() => {
    console.log(users);
    window.localStorage.removeItem('user_list');
    
    window.localStorage.setItem('user_list', JSON.stringify(users))
    
  }, [users])
  const addUser = user => {
    user.id = users.length + 1;
    setUsers([...users, user]);
    console.log(user)



    
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
     FirstName :user.FirstName ,
      LastName:user.LastName ,
      Gender: user.Gender,
      Experience:user.Experience,
       Dob:user.Dob
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
          <h2 style={{margin:"10px",textAlign:'center',color:'gold'}}>Team</h2>
          <UserTable users={users} editRow={editRow} deleteUser={deleteUser} />
        </div>
      </div>
    </div>
  );
};

export default Two;
