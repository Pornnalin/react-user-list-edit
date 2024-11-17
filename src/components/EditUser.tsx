import React, { useState } from "react";
import { User } from "../interface/User";

interface EditUserProps {
  user: { name: string; age: number; address: string };
  saveChanges: (newUser: User) => void;
  switchEdit: () => void;
}

export default function EditUser({
  user,
  saveChanges,
  switchEdit,
}: EditUserProps) {
  const [name, setName] = useState(user.name);
  const [age, setAge] = useState(user.age);
  const [address, setAddress] = useState(user.address);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Save button clicked", { name, age, address });
    saveChanges({ name, age, address });
    switchEdit();
  };
  return (
    <div>
      <form action="" onSubmit={handleSave}>
        <p>
          <input
            placeholder="Name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </p>
        <p>
          <input
            placeholder="Age"
            type="number"
            value={age}
            onChange={(e) => setAge(Number(e.target.value))}
          />
        </p>
        <p>
          <input
            placeholder="Address"
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </p>
        <button type="submit">Save</button>
      </form>
    </div>
  );
}
