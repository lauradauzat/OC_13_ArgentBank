import React, { useState, useEffect } from "react";
import Service from "../service";
import { useDispatch, useSelector } from "react-redux";



function User() {

const userAuth = useSelector(state => state.userAuth);
console.log ("userAuth", userAuth); 

//start working on edit firstName and lastName
const dispatch = useDispatch();

const [firstName, setFirstName] = useState('');
const [lastName, setLastName] = useState('');

const [editingMode, setEditingMode] = useState(false);

const handleEdit = () => {
  !editingMode ? setEditingMode(true) : setEditingMode(false);
  console.log("editingMode", editingMode);
};

useEffect(() => {
  const service = new Service();
  service.fetchData()
    .then(() => {
      setFirstName(service.firstName);
      setLastName(service.lastName);
    })
    .catch(error => {
      console.error(error);
    });
}, []);

  return (
    <div>
      <main className="main bg-dark">
        <div className="header">
          { !editingMode ? (
            <>
              <h1>
                Welcome back
              <br />
                {userAuth.firstName} {userAuth.lastName}
              </h1>
              <button className="edit-button" onClick={handleEdit}>Edit Name</button>
            </>
          ) : (
            <>
              <h1> Welcome back </h1>
              <form className="form" onSubmit={handleEdit}>
              
                <input
                  type="text" id="firstName" name="firstName"
                  value={firstName}
                  onChange={e => setFirstName(e.target.value)}
                />
       
                <input 
                  type="text" id="lastName" name="lastName"
                  value={lastName}
                  onChange={e => setLastName(e.target.value)}
                /><br></br>
                <button className="save-button" type="submit">Save</button>
                <button className="cancel-button" onClick={handleEdit}>Cancel</button>
              </form>
            </> 
          )}


          
        </div>
        <h2 className="sr-only">Accounts</h2>
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Checking (x8349)</h3>
            <p className="account-amount">$2,082.79</p>
            <p className="account-amount-description">Available Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Savings (x6712)</h3>
            <p className="account-amount">$10,928.42</p>
            <p className="account-amount-description">Available Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
            <p className="account-amount">$184.30</p>
            <p className="account-amount-description">Current Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
      </main>

    </div>
  );
}

export default User;