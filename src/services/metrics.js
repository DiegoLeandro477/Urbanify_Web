export const reportsByYear = async (reports) => {
  let months = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

  reports.forEach((report) => {
    const index = new Date(report.created_at).getMonth();

    months[index] += report.childrens.length;
  });

  return months;
};

export const reportsByMonth = async ({ reports, monthIndexSelected }) => {
  let days = Array(31).fill(0);

  reports.forEach((report) => {
    report.childrens.forEach((children) => {
      const dayIndex = new Date(children.created_at).getDate() - 1;
      const monthIndex = new Date(children.created_at).getMonth();

      monthIndex == monthIndexSelected && (days[dayIndex] += 1);
    });
  });

  return days;
};
