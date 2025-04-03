export const ReportStatusEnum = Object.freeze({
  PENDENTE: 0,
  AVALIADO: 1,
  CONCLUIDO: 2,
});

export const filterSeverityEnum = Object.freeze({
  GRAVE: 0,
  MODERADO: 1,
  ALL: 2,
});

// Função para buscar a chave correspondente ao valor
export function getReportStatusName(value) {
  return (
    Object.keys(ReportStatusEnum).find(
      (key) => ReportStatusEnum[key] === value
    ) || "DESCONHECIDO"
  );
}

export const FilterTypeEnum = Object.freeze({
  MONTH: 0,
  YEAR: 1,
  NULL: 2,
});

export const ChartCardEnum = Object.freeze({
  REPORTS__YEAR: 0,
  REPORTS__MONTH: 1,

  ATTENDED__NOT_ATTENDED: 2,
  FIX__FIXED: 3,
  SEVERE__MODERATE: 4,

  ATTENDEDS__MONTH: 5,
  USERS__YEAR: 6,
});

export const ChartEnum = Object.freeze({
  REPORTS__YEAR: {
    type: ChartCardEnum.REPORTS__YEAR,
    title: "Relatos",
    subtitle: "N° de relatos por mês",
    filterType: FilterTypeEnum.YEAR,
  },
  REPORTS__MONTH: {
    type: ChartCardEnum.REPORTS__MONTH,
    title: "Ocorrências",
    subtitle: "N° de relatos por dia",
    filterType: FilterTypeEnum.MONTH,
  },

  ATTENDED__NOT_ATTENDED: {
    type: ChartCardEnum.ATTENDED__NOT_ATTENDED,
    title: "Usuarios",
    subtitle: "Atendidos x Não atendidos",
    filterType: FilterTypeEnum.NULL,
  },
  FIX__FIXED: {
    type: ChartCardEnum.FIX__FIXED,
    title: "Bairros",
    subtitle: "Reparados x Nunca reparados",
    filterType: FilterTypeEnum.NULL,
  },
  SEVERE__MODERATE: {
    type: ChartCardEnum.SEVERE__MODERATE,
    title: "Relatos",
    subtitle: "Graves x Moderados",
    filterType: FilterTypeEnum.MONTH,
  },

  ATTENDEDS__MONTH: {
    type: ChartCardEnum.ATTENDEDS__MONTH,
    title: "Usuários",
    subtitle: "Atendidos por mês",
    filterType: FilterTypeEnum.YEAR,
  },
  USERS__YEAR: {
    type: ChartCardEnum.USERS__YEAR,
    title: "Usuários",
    subtitle: "Cadastrado na plataforma",
    filterType: FilterTypeEnum.YEAR,
  },
});
