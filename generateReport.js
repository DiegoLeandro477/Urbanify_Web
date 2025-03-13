import fs from "fs";

const reportLiberdade = {
  district: "Liberdade",
  created_at: "2025-03-07T11:45:46.338Z",
  falseId: "2025-03-07T11:45:46.338Z",
  status: 0,
  geohash: "7p8986c",
  subregion: "São Luís",
  childrens: [
    {
      severity: 1,
      created_at: "2025-03-07T11:45:46.338Z",
    },
  ],
  address: "São Luís_Liberdade",
  id: "laJ3UaUxUHtE5f8O",
  coordinates: {
    latitude: "-2.5325999611122065",
    longitude: "-44.284021668688126",
  },
  street: "Rua Machado De Assis",
};

const reportMonteCastelo = {
  district: "Monte Castelo",
  created_at: "2025-03-07T11:45:46.338Z",
  falseId: "2025-03-07T11:45:46.338Z",
  status: 0,
  geohash: "7p8986c",
  subregion: "São Luís",
  childrens: [
    {
      severity: 1,
      created_at: "2025-03-07T11:45:46.338Z",
    },
  ],
  address: "São Luís_Monte Castelo",
  id: "laJ3UaUxUHtE5f8O",
  coordinates: {
    latitude: "-2.5325999611122065",
    longitude: "-44.284021668688126",
  },
  street: "Rua Machado De Assis",
};

function randomDigit() {
  return Math.floor(Math.random() * 10).toString();
}

function randomLetter() {
  return String.fromCharCode(97 + Math.floor(Math.random() * 26));
}

let reports = [];

for (let i = 0; i <= 1000; i++) {
  const report = {
    ...reportLiberdade,
    geohash: `7p898${randomDigit()}${randomLetter()}`,
    coordinates: {
      latitude: `-2.5325999611122${randomDigit()}${randomDigit()}${randomDigit()}"`,
      longitude: `-44.284021668688${randomDigit()}${randomDigit()}${randomDigit()}"`,
    },
  };

  reports.push(report);
}

for (let i = 0; i < 1000; i++) {
  const report = {
    ...reportMonteCastelo,
    geohash: `7p898${randomDigit()}${randomLetter()}`,
    coordinates: {
      latitude: `-2.5325999611122${randomDigit()}${randomDigit()}${randomDigit()}"`,
      longitude: `-44.284021668688${randomDigit()}${randomDigit()}${randomDigit()}"`,
    },
  };

  reports.push(report);
}

fs.writeFile("arquivo.js", JSON.stringify(reports), "utf8", (err) => {
  if (err) {
    console.error("Erro ao escrever o arquivo:", err);
    return;
  }
  console.log("Arquivo criado com sucesso!");
});
