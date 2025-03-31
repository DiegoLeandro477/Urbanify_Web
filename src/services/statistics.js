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

export const getUsersServed = (users) => {
  if (users.length === 0) return 0; // Retorna 0 se a lista estiver vazia

  const counter = users.reduce((acc, user) => {
    if (user.service_counter !== 0) acc++;
    return acc;
  }, 0);

  console.log(users);
  return counter;
};

export const getUsersNotServed = (users) => {
  if (users.length === 0) return 0; // Retorna 0 se a lista estiver vazia

  const counter = users.reduce((acc, user) => {
    if (user.service_counter == 0) acc++;
    return acc;
  }, 0);

  return counter;
};
