import React, { useState, useEffect } from "react";
import "../App.css";
// import { db } from "../firebase";
import { db } from "../firebase";

const Contact = () => {
  // const value = db.collection('users');
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loader, setLoader] = useState(false);
  const [finalVal,setFinalVal] = useState([]);

  const value = db.collection('contacts').onSnapshot(snapshot => {
    const restaurantList = [];
    snapshot.forEach(doc => {
      // console.log('jk',doc.data());
            const obj = { ...doc.data() }
            restaurantList.push(obj);
    })
    setFinalVal(restaurantList);
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);

    db.collection("contacts")
      .add({
        name: name,
        email: email,
        message: message,
      })
      .then(() => {
        setLoader(false);
        alert("Your message has been submitted👍");
      })
      .catch((error) => {
        alert(error.message);
        setLoader(false);
      });

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <h1>Contact Us 🤳</h1>

        <label>Name</label>
        <input
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label>Email</label>
        <input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label>Message</label>
        <textarea
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>

        <button
          type="submit"
          style={{ background: loader ? "#ccc" : " rgb(2, 2, 110)" }}
        >
          Submit
        </button>
      </form>
      <div className="wrapper">
        {finalVal.map(val => (
          <div className="main-wrapper">
            <span>{`Name:  ${val.name}`}</span>
            <span>{`Message:  ${val.message}`}</span>
            <span>{`Email:  ${val.email}`}</span>
          </div>
        ))}
      </div>
    </>
  );
};

export default Contact;