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
    <div className="w-full max-w-md flex flex-col justify-center">
      <form
        action=""
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="flex flex-col gap-4">
          <div>
            <label
              htmlFor=""
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Name
            </label>
            <input
              placeholder="Name"
              type="text"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label
              htmlFor=""
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Age
            </label>
            <input
              placeholder="Age"
              type="number"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={age}
              onChange={(e) => setAge(Number(e.target.value))}
            />
          </div>
          <div>
            <label
              htmlFor=""
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Address
            </label>
            <input
              placeholder="Address"
              type="text"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <div className="flex justify-center mt-2">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Add User
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
