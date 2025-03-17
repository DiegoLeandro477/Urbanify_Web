import fs from "fs";

const reportLiberdade = {
  district: "Liberdade",
  status: 0,
  subregion: "São Luís",
  childrens: [
    {
      severity: 1,
    },
  ],
  id: "laJ3UaUxUHtE5f8O",
  coordinates: {
    latitude: "-2.5325999611122065",
    longitude: "-44.284021668688126",
  },
  street: "Rua Machado De Assis",
};

const reportMonteCastelo = {
  district: "Monte Castelo",
  status: 1,
  subregion: "São Luís",
  childrens: [
    {
      severity: 1,
    },
  ],
  id: "laJ3UaUxUHtE5f8O",
  coordinates: {
    latitude: "-2.5325999611122065",
    longitude: "-44.284021668688126",
  },
  street: "Rua Paulo Fontin",
};

const reportCentro = {
  district: "Centro",
  status: 0,
  subregion: "São Luís",
  childrens: [
    {
      severity: 1,
    },
  ],
  id: "laJ3UaUxUHtE5f8O",
  coordinates: {
    latitude: "-2.5325999611122065",
    longitude: "-44.284021668688126",
  },
  street: "Rua Da Paz",
};

const reportRibamar = {
  district: "Ribamar",
  status: 0,
  subregion: "São Luís",
  childrens: [
    {
      severity: 1,
    },
  ],
  id: "laJ3UaUxUHtE5f8O",
  coordinates: {
    latitude: "-2.5325999611122065",
    longitude: "-44.284021668688126",
  },
  street: "Estrada De Ribamar",
};

function randomDigit() {
  return Math.floor(Math.random() * 100000000).toString();
}

function randomLetter() {
  return String.fromCharCode(97 + Math.floor(Math.random() * 26));
}

function randomChildrens() {
  let childrens = [];
  const lenght = Math.floor(Math.random() * 100);

  for (let i = 0; i <= lenght; i++) {
    childrens.push({ severity: Math.floor(Math.random() * 2) });
  }

  return childrens;
}

let reports = [];

for (let i = 0; i <= 1000; i++) {
  const report = {
    ...reportLiberdade,
    geohash: `7p8${randomDigit()}${randomLetter()}${randomDigit()}${randomLetter()}`,
    coordinates: {
      latitude: `-2.${randomDigit()}"`,
      longitude: `-44.${randomDigit()}"`,
    },
    childrens: randomChildrens(),
  };

  reports.push(report);
}

for (let i = 0; i <= 1000; i++) {
  const report = {
    ...reportMonteCastelo,
    geohash: `7p8${randomDigit()}${randomLetter()}${randomDigit()}${randomLetter()}`,
    coordinates: {
      latitude: `-2.${randomDigit()}"`,
      longitude: `-44.${randomDigit()}"`,
    },
    childrens: randomChildrens(),
  };

  reports.push(report);
}

for (let i = 0; i <= 1000; i++) {
  const report = {
    ...reportCentro,
    geohash: `7p8${randomDigit()}${randomLetter()}${randomDigit()}${randomLetter()}`,
    coordinates: {
      latitude: `-2.${randomDigit()}"`,
      longitude: `-44.${randomDigit()}"`,
    },
    childrens: randomChildrens(),
  };

  reports.push(report);
}

for (let i = 0; i <= 1000; i++) {
  const report = {
    ...reportRibamar,
    geohash: `7p8${randomDigit()}${randomLetter()}${randomDigit()}${randomLetter()}`,
    coordinates: {
      latitude: `-2.${randomDigit()}"`,
      longitude: `-44.${randomDigit()}"`,
    },
    childrens: randomChildrens(),
  };

  reports.push(report);
}

fs.writeFile(
  "reports.js",
  `export const reports = ${JSON.stringify(reports)}`,
  "utf8",
  (err) => {
    if (err) {
      console.error("Erro ao escrever o arquivo:", err);
      return;
    }
    console.log("Arquivo criado com sucesso!");
  }
);
