import React, { useState } from "react";
import Input from "./input";
import Button from "./button";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !phone) {
      alert("Please fill all the fields");
      return;
    } else {
      alert(`Name:${name}
      Email:${email}
      Phone:${phone}`);
    }
    console.log(name, email, phone);
  };
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <Input
        placeholder={"Enter your name"}
        name="name"
        type={"text"}
        onChange={setName}
        value={name}
      />
      <Input
        placeholder={"Enter your Email"}
        name="email"
        type={"email"}
        onChange={setEmail}
        value={email}
      />
      <Input
        placeholder={"Enter Your Phone number"}
        name="number"
        type={"number"}
        onChange={setPhone}
        value={phone}
      />
      <Button type="submit" />
    </form>
  );
};
export default Form;
