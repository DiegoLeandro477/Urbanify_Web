export const totalReports = (reports) => {
  return reports.reduce((acc, item) => acc + item.childrens.length, 0);
};

export const getBairros = (reports) => {
  let bairrosSet = new Set();
  let cont_bairros = {};

  reports.forEach((report) => {
    bairrosSet.add(report.district);
    cont_bairros[report.district] = (cont_bairros[report.district] || 0) + 1;
  });

  // Convertendo Set para array
  let bairros = Array.from(bairrosSet);

  // Convertendo cont_bairros para um array de objetos
  const rank = Object.entries(cont_bairros).map(([bairro, quant]) => ({
    nome_bairro: bairro,
    quanti_registrada: quant,
  }));

  return { bairros, rank };
};

export const getUsersServed = (reports) => {
  let users = [];
  reports.forEach((report) => {
    if (report.status == 2) {
      report.childrens.forEach((user) => {
        users.push(user);
      });
    }
  });
  return users;
};

export const getUsersNotServed = (reports) => {
  let users = [];
  reports.forEach((report) => {
    if (report.status === 0) {
      report.childrens.forEach((user) => {
        users.push(user);
      });
    }
  });
  return users;
};
