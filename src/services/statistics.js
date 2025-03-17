export const totalOcorrencias = (reports) => {
  return reports.length;
};

export const quantBairros = (reports) => {
  let bairros = [];
  reports.forEach((report) => {
    console.log(JSON.stringify(bairros.includes(report.district), null, 2));
    if (!bairros.includes(report.district)) {
      bairros.push(report.district);
    }
  });
  return bairros.length;
};
