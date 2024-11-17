import React, { useState } from "react";
import { User } from "./interface/User";
import ShowUserList from "./components/ShowUserList";
import CreateUserList from "./components/CreateUserList";
ShowUserList;

function App() {
  const [list, setList] = useState<User[]>([]);
  const [editIndex, setEditIndex] = useState<number | null>(null);

  const switchEdit = (index: number) => {
    setEditIndex(index === editIndex ? null : index);
  };

  function updateUser(newUser: User, index: number) {
    setList(list.map((item, i) => (i === index ? newUser : item)));
  }
  return (
    <div>
      <ShowUserList
        list={list}
        editByIndex={editIndex}
        switchEdit={switchEdit}
        saveChanges={updateUser}
      />
      <CreateUserList list={list} setList={setList} />
    </div>
  );
}

export default App;
