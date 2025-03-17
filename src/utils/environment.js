export const ReportStatusEnum = Object.freeze({
  PENDENTE: 0,
  AVALIADO: 1,
  CONCLUIDO: 2,
});

export const FilterTypeEnum = Object.freeze({
  MONTH: 0,
  YEAR: 1,
});

export const ChartTypeEnum = Object.freeze({
  BAR: 0,
  LINE: 1,
  PIE: 2,
});

export const ChartEnum = Object.freeze({
  REPORTS_YEAR: {
    type: "REPORTS_YEAR",
    chartType: ChartTypeEnum.BAR,
    title: "Relatos",
    subtitle: "N° de relatos por mês",
    filterType: FilterTypeEnum.YEAR,
  },
});
