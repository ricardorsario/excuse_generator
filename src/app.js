window.onload = function() {
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#the-excuse").innerHTML = generateExcuse();
  });
  console.log("This is your new domain!");
};

let generateExcuse = () => {
  let who = [
    "Carl's dog",
    "My grandma",
    "My counsin's brother-in-law",
    "A ghost",
    "Jessica from Bershka",
    "That guy who's always sleeping in the toilets",
    "Belén Esteban",
    'Juanita "la del barrio"',
    "The squirrel",
    "Selena Gomez & The Scene",
    "Aitana",
    "Zac Efron",
    "A demon",
    "God or Jesus (idk who)",
    "Santa Claus",
    "The holiday Armadillo"
  ];
  let action = [
    "ate",
    "peed on",
    "crushed",
    "broke",
    "took a crap on",
    "puked on",
    "made a salad with",
    "beat me up and took",
    "hid",
    "set fire to"
  ];
  let what = [
    "my homework",
    "my brand new Calvin Klein dress",
    "the car",
    "my legs",
    "my feelings",
    "my sense of fashion",
    "everything I've been working on",
    "my favorite shorts",
    "my arm"
  ];
  let when = [
    "before art class",
    "right after school",
    "when I had finished my project",
    "during lunch",
    "while I was praying",
    "after dance practice",
    "right in front of my mom",
    "during my presentation"
  ];

  let whoIndex = Math.floor(Math.random() * who.length);
  let actionIndex = Math.floor(Math.random() * action.length);
  let whatIndex = Math.floor(Math.random() * what.length);
  let whenIndex = Math.floor(Math.random() * when.length);

  return (
    who[whoIndex] +
    " " +
    action[actionIndex] +
    " " +
    what[whatIndex] +
    " " +
    when[whenIndex]
  );
};
