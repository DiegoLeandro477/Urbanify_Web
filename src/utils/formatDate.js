export const formatDate = (isoString) => {
  // Garante que mês e dia tenham dois dígitos
  const correctedIsoString = isoString.replace(
    /^(\d{4})-(\d{1,2})-(\d{1,2})/,
    (_, year, month, day) =>
      `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`
  );

  const date = new Date(correctedIsoString);
  return date.toLocaleDateString("pt-BR", { timeZone: "UTC" });
};
