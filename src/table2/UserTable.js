import React from "react";

const UserTable = props => (
  <div className='tab'>
  <table>
    <thead>
      <tr>
     
        <th> FirstName</th>
        <th>LastName</th>
        <th>Gender</th>
        <th>Experience</th>
        <th>Dob</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {props.users.length > 0 ? (
        props.users.map(user => (
          <tr key={user.id}>
            <td>{user.FirstName}</td>
            <td>{user.LastName}</td>
            <td>{user.Gender}</td>
            <td>{user.Experience}</td>
            <td>{user.Dob}</td>
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
