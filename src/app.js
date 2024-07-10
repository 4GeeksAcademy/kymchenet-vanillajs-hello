/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#the-excuse").innerHTML = generateExcuse();
  });
  console.log("Hello Rigo From the console!");
};

let generateExcuse = () => {
  let pronoun = ["Un", "El"];
  let subject = ["gato", "vecino", "niño", "taxista", "robot", "perro"];
  let action = ["se llevó mi", "rompió mi", "se comió mi", "escondió mi"];
  let posesion = ["bicicleta", "movil", "coche", "zapato"];
  let where = ["en la calle", "en la cocina", "en el jardin", "en la escuela"];

  let pronounIndex = Math.floor(Math.random() * pronoun.length);
  let subjectIndex = Math.floor(Math.random() * subject.length);
  let actionIndex = Math.floor(Math.random() * action.length);
  let posesionIndex = Math.floor(Math.random() * posesion.length);
  let whereIndex = Math.floor(Math.random() * where.length);

  return (
    pronoun[pronounIndex] +
    " " +
    subject[subjectIndex] +
    " " +
    action[actionIndex] +
    " " +
    posesion[posesionIndex] +
    " " +
    where[whereIndex]
  );
};
