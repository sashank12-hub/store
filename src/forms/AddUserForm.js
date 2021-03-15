import React, { useState } from "react";

const AddUserForm = props => {
  
  
  const initialFormState = { id: null, name: "", manufacturer: "",stock:'',price:'',discount:'' };
  const [user, setUser] = useState(initialFormState);

  const handleInputChange = event => {
    const { name, value } = event.target;

    setUser({ ...user, [name]: value });
  };

  return (
    <form className="addform" style={{marginTop:"70px"}}
      onSubmit={event => {
        event.preventDefault();
        if (!user.name || !user.manufacturer) return;

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
      <label>manufacturer</label>
      <input
        type="text"
        name="manufacturer"
        value={user.manufacturer}
        onChange={handleInputChange}
      />
      <label>Price</label>
      <input
        type="text"
        name="price"
        value={user.price}
        onChange={handleInputChange}
      />
      <label>Stock</label>
      <input
        type="text"
        name="stock"
        value={user.stock}
        onChange={handleInputChange}
      />
      <label>discount in %</label>
      <input
        type="text"
        name="discount" 
       pattern="[0-9]+"
       maxLength="2"
        value={user.discount}
        onChange={handleInputChange}
      />
      <button  className="btn btn-success" style={{width:'200px'}}>ADD</button>
    </form>
  );
};

export default AddUserForm;
