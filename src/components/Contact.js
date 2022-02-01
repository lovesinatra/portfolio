import React, { useEffect, useState } from "react";
import { TextField, Button } from "@mui/material";
import axios from "axios";

import * as styles from "../styles/Contact.module.css";

import { ThemeProvider, makeStyles } from "@mui/styles";

import{ init } from '@emailjs/browser';

import emailjs from '@emailjs/browser'

init("user_xfuT8sFopNhHDqasgDnEu");

const useStyles = makeStyles((theme) => ({
  root: {
    color: "white",
  },
}));

const Contact = ({ location }) => {
  const [loading, setLoading] = useState(false);

  const [formValues, setFormValues] = useState({
    email: "",
    name: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailOptions = {
      from_name: formValues.name,
      from_email: formValues.email,
      message: formValues.message,
    };

    setFormValues({
      name: "",
      email: "",
      message: "",
    });

    setLoading(true);

    emailjs.send('template_mdprs69', 'service_6jd47cy', mailOptions).then(() => alert("Message received: I'll reach out to you as soon as possible.")).catch(err => console.log(err)).finally(() => setLoading(false))
  };

  return (
    <div id='contact' style={{minHeight: '100vh'}} className={styles.mainContainer} >
      <h1>Contact</h1>
      <form className={styles.container} onSubmit={handleSubmit}>
        <div className={styles.fields}>
          <TextField
            InputProps={{
              style: { color: "white" },
            }}
            style={{
              color: "white",
            }}
            InputProps={{
              style: { color: "white" },
            }}
            InputLabelProps={{
              style: { color: "#ff3232" },
            }}
            InputProps={{
              style: { color: "white" },
            }}
            value={formValues.name}
            onChange={handleChange}
            color="secondary"
            type="text"
            label="Name"
            name="name"
            required
          />
          <TextField
            InputProps={{
              style: { color: "white" },
            }}
            InputLabelProps={{
              style: { color: "#ff3232" },
            }}
            value={formValues.email}
            onChange={handleChange}
            color="secondary"
            type="email"
            label="Email"
            name="email"
            required
          />
          <TextField
            InputProps={{
              style: { color: "white" },
            }}
            InputLabelProps={{
              style: { color: "#ff3232" },
            }}
            multiline
            rows={8}
            value={formValues.message}
            onChange={handleChange}
            color="secondary"
            type="text"
            label="How can I make your life easier?"
            name="message"
            required
          />
          <Button
            style={{ color: "#ff3232", borderColor: "#ff3232" }}
            type="submit"
            color="secondary"
            variant="outlined"
          >
            { loading ? "Sending.. ." : 'Submit' }
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
