import React from "react";

const UserTable = props => (
  <div className='tab'>
  <table>
    <thead>
      <tr>
      
        <th>Name</th>
        <th>manufacturer</th>
        <th>price </th>
        <th>stock</th>
        <th>discount</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {props.users.length > 0 ? (
        props.users.map(user => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.manufacturer}</td>
            <td>{user.price}</td>
            <td>{user.stock}</td>
            <td>{user.discount}</td>
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
);

export default UserTable;
/*

// const handleselect=event=>{
//   const{name,value}=event.target;
//   console.log(value)
//    setmedname(value)
//  console.log(props.medicine?.filter(item=>item.name==value))
//  var x=((props.medicine?.filter(item=>item.name==value))[0].price)
//  setitemm(x)
// }
// const handlequant=e=>{
//   const {name,value}=e.target;
//   setquant(value);
// }
// useEffect(() => {
  
  
//  var p1=parseInt(quant)*parseInt(itemm)
//  setcost(p1);
// }, [quant])
// useEffect(() => {
  
//   console.log(cost)
// }, [cost])
// useEffect(() => {
//   console.log(itemm)
//   //var current=props.medicine?.filter(item=>item.name=itemm)
//   //console.log(current)
// //setcost(current.price)
// }, [itemm])*/