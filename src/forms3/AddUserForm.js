import React, { useState ,useEffect} from "react";

const AddUserForm = props => {
  const[med,setmed]=useState([])
 
  const initialFormState = { id: null, name: "", phone: "",quantity:'',order:'O-Cal FA multivitamin' };
 const [user,setUser]=useState(initialFormState)


  const handleInputChange = event => {
    const { name, value } = event.target;

    setUser({ ...user, [name]: value });
  };
  useEffect(() => {
    setmed(JSON.parse( window.localStorage.getItem('medicine_list')))
  
  }, [])
  return (
    <form className="addform" style={{marginTop:"70px"}}
      onSubmit={event => {
      
        event.preventDefault();
        if (!user.name ||!user.phone||!user.quantity||!user.order) return;

        props.addUser(user);
       
       
        setUser(initialFormState);
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

      <select id="order" name="order" onChange={handleInputChange}  value={user.order}> 
     
       {med?.map(item=>{return(<option value={item.name}>{item.name}</option> )})} </select>

       <label>quantitiy</label>
       <input
         type="text"
         name="quantity"
         value={user.quantity}
        onChange={handleInputChange}
      />
     

      
     
      
      
      <button  className="btn btn-success" style={{width:'200px'}}>ADD</button>
     
    </form>
  );
};

export default AddUserForm;
