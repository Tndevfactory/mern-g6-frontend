import React from "react";
import { Facebook, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <div className="bg-gray-600 text-white">
      <div id="social_media" className="flex justify-center pt-8">
        <div className="flex gap-2">
          <a href="">
            <Facebook />
          </a>
          <a href="">
            <Instagram />
          </a>
          <a href="">
            <Linkedin />
          </a>
        </div>
      </div>

      <div id="informations" className="py-5">
        <div className="grid  grid-cols-1  md:grid-cols-4 place-items-center">
          <div className="p-2 text-sm">
            <h1 className=" font-medium mb-2">E-STORE</h1>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum
            reprehenderit facilis, voluptatem modi dolorem velit consequatur
            nulla animi, praesentium neque saepe alias quis qui vero possimus,
            dolore eligendi fuga tempore?
          </div>

          <div className=" hidden md:flex flex-col space-y-1 text-sm ">
            <a href=""> Consulter commandes</a>
            <a href=""> Consulter profil</a>
            <a href=""> Changer mot de passe</a>
          </div>

          <div className="hidden md:flex flex-col space-y-1 text-sm ">
            <a href=""> Consulter commandes</a>
            <a href=""> Consulter profil</a>
            <a href=""> Changer mot de passe</a>
          </div>

          <div className="hidden md:flex flex-col space-y-1 text-sm ">
            <a href=""> Consulter commandes</a>
            <a href=""> Consulter profil</a>
            <a href=""> Changer mot de passe</a>
          </div>
        </div>
      </div>

      <div id="copyright" className="text-center pb-1">
        &copy; Powered by
        <span className="text-orange-500 ml-1  ">Tndev-art</span>
      </div>
    </div>
  );
};

export default Footer;
