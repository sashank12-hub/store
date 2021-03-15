import React, { useState, useEffect } from "react";

const EditUserForm = props => {
  const [user, setUser] = useState(props.currentUser);

  useEffect(() => {
    setUser(props.currentUser);
  }, [props]);
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
    <div classname="section"><button  className="btn btn-secondary" style={{width:'200px',marginRight:'-20%'}}>SAVE</button>
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
