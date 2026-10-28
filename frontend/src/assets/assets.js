// Leadership images
import Chairperson from "./Chairperson.jpg";
import CampusChief from "./CampusChief.png";
import Administration from "./administration.jpg";

// Faculty BCA images
import HOD from "./HOD.jpg";
import Puneet_Ayer from "../assets/Punnet_Ayer.jpg";
import Yagya from "../assets/Yagya.png";
import Baburam_Rawat from "../assets/Baburam_Rawat.jpg";

export const assets = {
  // Leadership
  Chairperson,
  CampusChief,
  Administration,

  // Faculty
  HOD,
  Puneet_Ayer,
  Yagya,
  Baburam_Rawat,
};

// Faculty data
export const facultyData = {
  0: [
    {
      name: "Dilli Raj Joshi",
      role: "HOD",
      img: assets.HOD,
    },
  ],

  1: [
    {
      name: "Chef Manager",
      role: "HOD",
      img: assets.Chief,
    },
  ],

  2: [
    {
      name: "BBM Lead",
      role: "HOD",
      img: assets.Chairman,
    },
    {
      name: "BBM Expert",
      role: "FACULTY",
      img: assets.Chief,
    },
  ],

  // BCA
  3: [
    {
      name: "Dilli Raj Joshi",
      role: "HOD",
      img: assets.HOD,
    },
    {
      name: "Puneet Ayer",
      role: "lecturer",
      img: assets.Puneet_Ayer,
    },
    {
      name: "Yagya Raj Upadhyay",
      role: "lecturer",
      img: assets.Yagya,
    },
    {
      name: "Baburam Rawat",
      role: "FACULTY",
      img: assets.Baburam_Rawat,
    },
  ],

  //   BBS
  4: [
    {
      name: "Yagya Raj Upadhyay",
      role: "lecturer",
      img: assets.Yagya,
    },
    {
      name: "Baburam Rawat",
      role: "FACULTY",
      img: assets.Baburam_Rawat,
    },
  ],
};
