import React, { useState } from "react";
import { User } from "../interface/User";

interface List {
  list: User[];
  setList: React.Dispatch<React.SetStateAction<User[]>>;
}

export default function CreateUserList({ list, setList }: List) {
  const [name, setName] = useState("");
  const [age, setAge] = useState(Number);
  const [address, setAddress] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newUser: User = {
      name,
      age,
      address,
    };

    setList([...list, newUser]);
    setName("");
    setAge(0);
    setAddress("");
  };
  return (
    <form action="" onSubmit={handleSubmit}>
      <label htmlFor="">Name</label>
      <input
        placeholder="Name"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label htmlFor="">Age</label>
      <input
        placeholder="Age"
        type="number"
        value={age}
        onChange={(e) => setAge(Number(e.target.value))}
      />
      <label htmlFor="">Address</label>
      <input
        placeholder="Address"
        type="text"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />
      <button type="submit">Add User</button>
    </form>
  );
}
