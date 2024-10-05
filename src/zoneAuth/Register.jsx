import { Lock } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { register } from "../features/auth/authSlice";
import { useDispatch } from "react-redux";

const Register = () => {
  const dispatch = useDispatch();
  const [error, setError] = useState({});
  function validate(data) {
    //nouvelle syntaxe de fonction
    console.log(data);
    const re = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    const errors = {};

    /*if (data.name) {
      console.log("name exist");
    } else {
      console.log("name not exist");
    }*/
    if (!data.name) {
      console.log("name not exist"); //pour l'affichage dans la console
      errors.name = "name not exist"; //pour l'affichage dans l'interface
    }

    if (!data.email) {
      console.log("email not exist");
      errors.email = "email not exist";
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      errors.email = "Veuillez entrer un email valide";
    }

    if (!re.test(data.password)) {
      console.log("password not exist");
      errors.password =
        "Minimum 8 char, majsucule, minuscule, un nombre et un char speciale";
    }
    console.log(errors);
    //setError(validate(data)); //methode 1 d'appeler l'objet error

    return errors;
  }
  const handleRegister = (e) => {
    e.preventDefault();

    const data = {
      name: e.target.name.value,
      email: e.target.email.value,
      password: e.target.password.value,
    };

    let validationErrors = validate(data);
    setError(validationErrors);

    if (Object.keys(validationErrors).length == 0) {
      dispatch(register(data))
        .then((res) => {
          console.log(res);
        })
        .catch((err) => console.log(err));

      //  http.post("/auth/register", data);
    }
  };
  return (
    <div
      className="flex justify-center items-center
     h-screen bg-gray-100"
    >
      <div className="bg-white p-3 rounded shadow-lg">
        <div className="flex justify-center">
          <Lock />
        </div>
        <div className="flex justify-center mb-5 ">Inscription</div>
        <form onSubmit={handleRegister} className="w-72">
          <div>
            <label htmlFor="" className="block">
              Nom
            </label>
            <input name="name" type="text" className="w-full" />
          </div>
          <div>
            <label htmlFor="" className="block">
              Email
            </label>
            <input name="email" type="text" className="w-full" />
          </div>
          <div>
            <label htmlFor="" className="block mt-2 ">
              Password
            </label>
            <input name="password" type="password" className="w-full" />
          </div>
          <div className="flex justify-between items-center ">
            <span className="text-xs">
              Déja client,
              <Link to="/login">se connecter</Link>
            </span>
            <button
              className="bg-blue-500 text-sm
             text-white rounded-sm p-1 mt-3  "
            >
              S'inscrire
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
