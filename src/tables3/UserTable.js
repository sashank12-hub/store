import React, { useState ,useEffect} from "react";

function UserTable(props) {
  const[med,setmed]=useState([])
  const[cost,setcost]=useState(0)
  

  const handlecost=(user)=>{
    var t=  (JSON.parse( window.localStorage.getItem('medicine_list'))).filter(item=>item.name==user.order)
    console.log(t[0].price)
    return (parseInt(user.quantity)*parseInt(t[0].price))

  }
  return (
    <div className='tab'>
  <table>
    <thead>
      <tr>
      <th>Customer Name</th>
      <th>phone</th>
      <th>medicine</th>
      <th>quantity</th>
      <th>Total cost</th>
      <th>time</th>
      <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {props.users.length > 0 ? (
        props.users.map(user => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.phone}</td>
            <td>{user.order}</td>
            <td>{user.quantity}</td>
            <td>{handlecost(user)}
            <td> {new Date().getTime}</td>
              
            
            </td>
            <td>
              <button
                onClick={() => {
                  props.editRow(user);
                }}
                className="btn btn-warning" style={{width:'100px',marginRight:'20px'}}
              >
                Edit
              </button>
              <button
                onClick={() => props.deleteUser(user.id)}
                className="btn btn-danger" style={{width:'100px',marginRight:'20px'}}
              >
                Delete
              </button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3}>No users</td>
        </tr>
      )}
    </tbody>
  </table>
  </div>
  )
}

export default UserTable
