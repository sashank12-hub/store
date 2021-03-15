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
        value={user.discount}
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
