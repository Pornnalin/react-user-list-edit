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
    <div className="w-full max-w-md flex flex-col justify-center">
      <form action="" onSubmit={handleSave}>
        <p>
          <input
            placeholder="Name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </p>
        <p>
          <input
            placeholder="Age"
            type="number"
            value={age}
            onChange={(e) => setAge(Number(e.target.value))}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </p>
        <p>
          <input
            placeholder="Address"
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </p>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 mt-4"
        >
          Save
        </button>
      </form>
    </div>
  );
}
