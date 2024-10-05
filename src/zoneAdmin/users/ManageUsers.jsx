import { React } from "react";
import { Eye, Pencil, Trash, TriangleAlert } from "lucide-react";
import { useDispatch } from "react-redux";
import { getUsers, deleteUser } from "../../features/user/userSlice";
import { useEffect, useState } from "react";
import CreateUser from "./CreateUser";
import UpdateUser from "./UpdateUser";

const ManageUsers = () => {
  const [visibleCreate, setVisibleCreate] = useState(false);
  const [visibleEdit, setVisibleEdit] = useState(false);
  const [visibledelete, setVisibledelete] = useState(false);
  const [actionType, setactionType] = useState("editer");
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const handleGetUsers = (data) => {
    setLoading(true);
    dispatch(getUsers(data))
      .then((res) => {
        // console.log(res);

        if (res.payload.message) {
          console.log(res.payload.message);
        } else {
          setUsers(res.payload.users);
          //  notifyError("Error network");
        }
        setLoading(false);
      })
      .catch((err) => console.log(err));
  };
  const handleSearch = (e) => {
    e.preventDefault();
    const data = e.target.search.value;
    handleGetUsers(data);
  };

  const handleDelete = (id) => {
    console.log(id);
    dispatch(deleteUser(id))
      .then((res) => {
        console.log(res.payload.message);
        // notifySuccess("deletion with success");
        setVisibledelete(false);
        handleGetUsers();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const createprops = {
    setVisibleCreate,
    handleGetUsers,
  };

  const editprops = {
    setVisibleEdit,
    handleGetUsers,
    user,
    actionType,
  };

  useEffect(() => {
    handleGetUsers();
  }, []);
  return (
    <div className="px-3">
      <h1 className="text-2xl pt-2">Gestion des Utilisateurs</h1>
      <div id="search" className="flex justify-between items-center mt-2">
        <form onSubmit={handleSearch}>
          <input
            name="search"
            type="search"
            placeholder="recherche un utilisateur "
            className="w-[16rem]  border border-gray-500 rounded  px-2 p-1"
          />
        </form>
        <button
          onClick={() => setVisibleCreate(true)}
          className="bg-blue-600 text-white px-2 p-1 rounded hover:bg-blue-800"
        >
          Créer
        </button>
      </div>
      {loading ? (
        <div className="absolute top-[30%] right-[50%]">
          <div className="loader"> </div>
        </div>
      ) : (
        <div id="list-product" className="mt-4">
          <table className="w-full">
            <thead className="bg-gray-300 h-10">
              <tr>
                <th className="border border-gray-600 w-12 px-2" width="8%">
                  ID
                </th>
                <th className="border border-gray-600">Photo</th>

                <th className="border border-gray-600 ">Name</th>
                <th className="border border-gray-600 ">Role</th>
                <th className="border border-gray-600 text-center">Email</th>
                <th className="border border-gray-600 text-center">Phone</th>
                <th className="border border-gray-600">Adresse</th>
                <th className="border border-gray-600" width="8%">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {users &&
                users.map((v) => (
                  <tr key={v._id} className="h-8">
                    <td className="border border-gray-600 text-center">
                      {v._id.slice(-10)}
                    </td>

                    <td className="border border-gray-600 text-center">
                      <img
                        className=" h-16 inline-block"
                        src={import.meta.env.VITE_SERVER_URL + v.imgUrl}
                      />
                    </td>

                    <td className="border border-gray-600 pl-1 ">{v.name}</td>
                    <td className="border border-gray-600 pl-1 text-center">
                      {v.role}
                    </td>
                    <td className="border border-gray-600 text-center ">
                      {v.email}
                    </td>
                    <td className="border border-gray-600 text-center ">
                      {v.phone}
                    </td>
                    <td className="border border-gray-600 text-center">
                      {v.adresse}
                    </td>
                    <td className="border border-gray-600 text-center space-x-2">
                      <button
                        onClick={() => {
                          setVisibleEdit(true);
                          setUser(v);
                          setactionType("voir");
                        }}
                        title="voir detail"
                      >
                        <Eye color="#5951ea" size={18} />
                      </button>
                      <button
                        onClick={() => {
                          setVisibleEdit(true);
                          setUser(v);
                          setactionType("editer");
                        }}
                        title="Modifier Produit"
                      >
                        <Pencil color="orange" size={18} />
                      </button>
                      <div className="inline-block relative">
                        <button
                          onClick={() => setVisibledelete(v._id)}
                          title="Supprimer Produit"
                        >
                          <Trash color="red" size={18} />
                        </button>{" "}
                        {visibledelete == v._id && (
                          <div
                            id="delete-panel "
                            className="absolute  z-10 rounded  -top-2 -right-3 w-[18rem]  bg-white border border-slate-500 p-2 space-y-4 shadow-xl"
                          >
                            <div className="text-md mb-2 flex justify-start items-center gap-1">
                              <TriangleAlert color="red" />
                              <span className="text-sm">
                                voulez-vous effectuer la suppression ?
                              </span>
                            </div>
                            <div className="flex justify-end items-center gap-2">
                              <button
                                onClick={() => setVisibledelete(false)}
                                className="bg-white border border-gray-200 px-2 p-1 rounded hover:bg-gray-100 text-xs"
                              >
                                Non
                              </button>{" "}
                              <button
                                onClick={() => handleDelete(v._id)}
                                className=" bg-red-600 text-white border border-red-800 px-2 p-1 rounded hover:bg-red-500 text-xs"
                              >
                                Oui
                              </button>
                            </div>
                          </div>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      )}

      {visibleCreate && <CreateUser {...createprops} />}
      {visibleEdit && <UpdateUser {...editprops} />}
    </div>
  );
};

export default ManageUsers;
