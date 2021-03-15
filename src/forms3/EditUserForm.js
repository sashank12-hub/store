import React, { useState, useEffect } from "react";

const EditUserForm = props => {
  const [user, setUser] = useState(props.currentUser);
  const[med,setmed]=useState([])
  useEffect(() => {
    setUser(props.currentUser);
  }, [props]);
  useEffect(() => {
    setmed(JSON.parse( window.localStorage.getItem('medicine_list')))
  
  }, [])
  // You can tell React to skip applying an effect if certain values haven’t changed between re-renders. [ props ]
 
  const handleInputChange = event => {
    const { name, value } = event.target;

    setUser({ ...user, [name]: value });
  };

  return (
    <form className="editform" style={{marginTop:"70px"}}
      onSubmit={event => {
        event.preventDefault();

        props.updateUser(user.id, user);
      }}
    >
    <label>Name</label>
    <input
      type="text"
      name="name"
      value={user.name}
      onChange={handleInputChange}
    />
    <label>phone</label>
    <input
      type="tel"
      name="phone"
      pattern="[7-9]{1}[0-9]{9}"
      value={user.phone}
      onChange={handleInputChange}
    />
    <label>medicine</label>

    <select id="order" name="order" onChange={handleInputChange}  value={user.medicine}> 
   
     {med?.map(item=>{return(<option value={item.name}>{item.name}</option> )})} </select>

     <label>quantitiy</label>
     <input
       type="text"
       name="quantity"
       value={user.quantity}
      onChange={handleInputChange}
    />
      <div className="section"><button  className="btn btn-secondary" style={{width:'200px',marginRight:'-20%'}}>SAVE</button>
      <button
        onClick={() => props.setEditing(false)}
        className="btn btn-danger" style={{width:'200px'}}
      >
        Cancel
      </button></div>
      
    </form>
  );
};

export default EditUserForm;
