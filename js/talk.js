"use strict";

//Hecer hablar al navegador
let texto =
  "Hola mi nombre es Omar. Soy desarrollador web jr, ubicado en la CDMX";

const hablar = (texto) =>
  speechSynthesis.speak(new SpeechSynthesisUtterance(texto));

hablar(texto);
