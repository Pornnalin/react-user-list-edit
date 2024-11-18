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
    <div className="p-4 max-w-md mx-auto">
      <ol className="border max-w-md p-10">
        {list.length > 0 &&
          list?.map((item, index) => (
            <li key={index} className="">
              <div className="flex flex-col gap-2">
                <p>
                  <strong>Name:</strong>
                  <span>{item.name}</span>
                </p>
                <p>
                  <strong>Age:</strong>
                  <span>{item.age}</span>
                </p>
                <p>
                  <strong>Address:</strong>
                  <span>{item.address}</span>
                </p>
              </div>
              {editByIndex !== index && (
                <button
                  type="button"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 mt-3"
                  onClick={() => switchEdit(index)}
                >
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
