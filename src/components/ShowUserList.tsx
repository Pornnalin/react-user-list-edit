import { User } from "../interface/User";
import EditUser from "./EditUser";

interface ShowUserListProps {
  list: User[];
  editByIndex: number | null;
  switchEdit: (index: number) => void;
  saveChanges: (newUser: User, index: number) => void;
}

export default function ShowUserList({
  list,
  editByIndex,
  switchEdit,
  saveChanges,
}: ShowUserListProps) {
  return (
    <div>
      <ol>
        {list.length > 0 &&
          list?.map((item, index) => (
            <li key={index}>
              <p>Name:{item.name}</p>
              <p>Age:{item.age}</p>
              <p>Address:{item.address}</p>
              {editByIndex !== index && (
                <button type="button" onClick={() => switchEdit(index)}>
                  Edit
                </button>
              )}
              {editByIndex === index && (
                <EditUser
                  user={item}
                  saveChanges={(update) => saveChanges(update, index)}
                  switchEdit={() => switchEdit(index)}
                />
              )}
            </li>
          ))}
      </ol>
    </div>
  );
}
