import React, { useState } from "react";

const AddUserForm = props => {
  
  
  const initialFormState = { id: null, FirstName : "",LastName:"",  Gender:"M",Experience:"",Dob:''};
  const [user, setUser] = useState(initialFormState);

  const handleInputChange = event => {
    const { name, value } = event.target;

    setUser({ ...user, [name]: value });
  };

  return (
    <form className="addform" style={{marginTop:"70px"}}
      onSubmit={event => {
        event.preventDefault();
        if (!user.FirstName || !user.LastName || !user.Gender|| !user.Dob ||!user.Experience) return;

        props.addUser(user);
       
       
        setUser(initialFormState);
      }}
    >
      <label>FirstName</label>
      <input
        type="text"
        name="FirstName"
        value={user.FirstName}
        onChange={handleInputChange}
      />
      <label>LastName</label>
      <input
        type="text"
        name="LastName"
        value={user.LastName}
        onChange={handleInputChange}
      />
      
     
      <label htmlFor="cars">Gender</label>

      <select id="cars" name="Gender" onChange={handleInputChange} value={user.Gender} > <option value="M">MALE</option>
       <option value="F">FEMALE</option>
      </select>
       
       
        
     
      <label>DOB</label>
      <input 
      placeholder="enter dd/mm/yyyy"
        type="text"
        name="Dob"
        value={user.Dob}
        onChange={handleInputChange}
      />
      <label>Experience</label>
      <input
        type="text"
        name="Experience" 
       pattern="[0-9]+"
       maxLength="2"
        value={user.Experience}
        onChange={handleInputChange}
      />
      <button  className="btn btn-success" style={{width:'200px'}}>ADD</button>
    </form>
  );
};

export default AddUserForm;
