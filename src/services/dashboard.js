import { ReportStatusEnum } from "../utils/environment";
import { verifySeverityReport } from "../utils/verifySeverityReport";

export const filterReports = ({ reports, resolvedReports, filter }) => {
  if (reports.length === 0) return [];
  const startTarget = filter.date.start ? new Date(filter.date.start) : null;
  const endTarget = filter.date.start ? new Date(filter.date.end) : null;
  let reportsByStatus = [];

  // FILTER BY STATUS
  filter.status == ReportStatusEnum.CONCLUIDO
    ? (reportsByStatus = [...resolvedReports])
    : (reportsByStatus = [...reports]);

  // FILTER BY DATE
  const filteredReportsByDate = reportsByStatus.filter((report) => {
    const reportDate = new Date(report.created_at); // Converte para Date

    if (
      (reportDate >= startTarget && reportDate <= endTarget) ||
      (!startTarget && !endTarget)
    )
      return true;
  });

  const filteredReportsBySeverity = filteredReportsByDate.filter((report) => {
    if (filter.severity == null) return true;
    const reportSeverity = verifySeverityReport(report);

    return reportSeverity == filter.severity;
  });

  return filteredReportsBySeverity;
};

export const totalReports = (reports) => {
  if (reports.length === 0) return 0;

  return reports.reduce((acc, item) => acc + item.childrens.length, 0);
};

export const incrementReports = (reports) => {
  const now = new Date();
  const currentMonth = now.getMonth();
  const currentYear = now.getFullYear();

  // Definir o mês e ano do mês passado considerando a virada de ano
  const lastMonth = currentMonth === 0 ? 11 : currentMonth - 1; // Ajusta para dezembro se for janeiro
  const lastMonthYear = currentMonth === 0 ? currentYear - 1 : currentYear;

  let currentMonthCount = 0;
  let lastMonthCount = 0;

  reports.forEach((report) => {
    report.childrens.forEach((children) => {
      const createdAt = new Date(children.created_at);
      const childMonth = createdAt.getMonth();
      const childYear = createdAt.getFullYear();

      if (childYear === currentYear && childMonth === currentMonth) {
        currentMonthCount += 1; // Incrementa o contador do mês atual
      } else if (childYear === lastMonthYear && childMonth === lastMonth) {
        lastMonthCount += 1; // Incrementa o contador do mês passado
      }
    });
  });

  // Verifica se houve crescimento ou redução e calcula a porcentagem
  const result =
    lastMonthCount > 0
      ? ((currentMonthCount - lastMonthCount) / lastMonthCount) * 100
      : 0; // Evita divisão por zero

  return Math.round(result); // Retorna positivo para crescimento, negativo para redução
};

export const getDistricts = (reports) => {
  if (reports.length === 0) return { bairros: 0, rank: [] };

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

export const incrementDistrict = (reports) => {
  if (reports.length === 0) return 0;

  const districtFixeds = getDistricts(reports).bairros.length;
  const totalDistricts = 60; // Total de bairros possíveis (ajuste conforme necessário)

  const indice = ((totalDistricts - districtFixeds) / totalDistricts) * 100;

  return 100 - Math.round(indice);
};

export const getUsersServed = (users) => {
  if (users.length === 0) return 0; // Retorna 0 se a lista estiver vazia

  const counter = users.reduce((acc, user) => {
    if (user.service_counter !== 0) acc++;
    return acc;
  }, 0);

  return counter;
};

export const incrementUsersServed = (users) => {
  if (users.length === 0) return 0;

  const now = new Date();
  const currentMonth = now.getMonth();
  const currentYear = now.getFullYear();

  // Definir o mês e ano do mês passado considerando a virada de ano
  const lastMonth = currentMonth === 0 ? 11 : currentMonth - 1; // Ajusta para dezembro se for janeiro
  const lastMonthYear = currentMonth === 0 ? currentYear - 1 : currentYear;

  let currentMonthCount = 0;
  let lastMonthCount = 0;

  users.forEach((user) => {
    if (user.service_counter === 0) return; // Ignora usuários não atendidos

    const createdAt = new Date(user.created_at);
    const childMonth = createdAt.getMonth();
    const childYear = createdAt.getFullYear();

    if (childYear === currentYear && childMonth === currentMonth) {
      currentMonthCount += 1; // Incrementa o contador do mês atual
    } else if (childYear === lastMonthYear && childMonth === lastMonth) {
      lastMonthCount += 1; // Incrementa o contador do mês passado
    }
  });

  // Verifica se houve crescimento ou redução e calcula a porcentagem
  const result =
    lastMonthCount > 0
      ? ((currentMonthCount - lastMonthCount) / lastMonthCount) * 100
      : 0; // Evita divisão por zero

  return Math.round(result); // Retorna positivo para crescimento, negativo para redução
};

export const getUsersNotServed = (users) => {
  if (users.length === 0) return 0; // Retorna 0 se a lista estiver vazia

  const counter = users.reduce((acc, user) => {
    if (user.service_counter == 0) acc++;
    return acc;
  }, 0);

  return counter;
};

export const incrementUsersNotServed = (users) => {
  if (users.length === 0) return 0;

  const now = new Date();
  const currentMonth = now.getMonth();
  const currentYear = now.getFullYear();

  // Definir o mês e ano do mês passado considerando a virada de ano
  const lastMonth = currentMonth === 0 ? 11 : currentMonth - 1; // Ajusta para dezembro se for janeiro
  const lastMonthYear = currentMonth === 0 ? currentYear - 1 : currentYear;

  let currentMonthCount = 0;
  let lastMonthCount = 0;

  users.forEach((user) => {
    if (user.service_counter !== 0) return; // Ignora usuários não atendidos

    const createdAt = new Date(user.created_at);
    const childMonth = createdAt.getMonth();
    const childYear = createdAt.getFullYear();

    if (childYear === currentYear && childMonth === currentMonth) {
      currentMonthCount += 1; // Incrementa o contador do mês atual
    } else if (childYear === lastMonthYear && childMonth === lastMonth) {
      lastMonthCount += 1; // Incrementa o contador do mês passado
    }
  });

  // Verifica se houve crescimento ou redução e calcula a porcentagem
  const result =
    lastMonthCount > 0 ? ((lastMonth - currentMonth) / lastMonth) * 100 : 0; // Evita divisão por zero

  return Math.round(result); // Retorna positivo para crescimento, negativo para redução
};
