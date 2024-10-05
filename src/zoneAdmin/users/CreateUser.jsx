import React, { useState, useEffect } from "react";
import { createUser } from "../../features/user/userSlice";
import { useDispatch, useSelector } from "react-redux";

const CreateUser = (props) => {
  const dispatch = useDispatch();
  const { setVisibleCreate, handleGetUsers } = props;
  const { user } = useSelector((state) => state.auth);
  const [file, setFile] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    const fd = new FormData();
    fd.append("name", e.target.name.value);
    fd.append("email", e.target.email.value);
    fd.append("phone", e.target.phone.value);
    fd.append("adresse", e.target.adresse.value);
    fd.append("file", file);
    console.log([...fd]);

    dispatch(createUser(fd))
      .then((res) => {
        console.log(res);
        setVisibleCreate(false);
        handleGetUsers();
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    console.log(file);
  }, [file]);
  return (
    <div className=" shadow-lg bg-white h-screen w-96 p-1 absolute top-0 right-0">
      <div className="flex gap-2 items-baseline bg-slate-300 p-1 shadow border-b border-b-slate-950">
        <button
          onClick={() => setVisibleCreate(false)}
          title=" fermer "
          className=" mx-1 hover: text-red-800 "
        >
          X
        </button>
        <h1 className="text-lg">Créer Utilisateur </h1>
      </div>
      <div>
        <form onSubmit={handleSubmit} className="p-2  px-3 mt-4 space-y-2">
          <div className="space-y-1">
            <label className="block font-semibold ">Name </label>
            <input
              name="name"
              id="name"
              className=" rounded bg-slate-100 p-1 w-full border border-gray-500"
            />
          </div>
          <div className="space-y-1">
            <label className="block font-semibold ">Email </label>
            <input
              name="email"
              id="email"
              className=" rounded bg-slate-100 p-1 w-full border border-gray-500"
            />
          </div>
          <div className="space-y-1">
            <label className="block font-semibold ">Phone </label>
            <input
              name="phone"
              id="phone"
              className=" rounded bg-slate-100 p-1 w-full border border-gray-500"
            />
          </div>
          <div className="space-y-1">
            <label className="block font-semibold ">Adresse</label>
            <textarea
              name="adresse"
              rows={3}
              id="adresse"
              className=" rounded bg-slate-100 p-1 w-full border border-gray-500"
            />
          </div>
          <div>
            <input
              onChange={(e) => setFile(e.target.files[0])}
              type="file"
              name="file"
              required
            />
          </div>
          <div className=" flex justify-end gap-2 items-center mt-3 pt-3 ">
            <button
              type="reset"
              className="bg-white  hover:bg-slate-500 border px-2 p-1 rounded"
            >
              Annuler
            </button>
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-900 text-white rounded px-2 p-1 "
            >
              Enregistrer
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateUser;
