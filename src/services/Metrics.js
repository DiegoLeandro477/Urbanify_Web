export const reportByYear = async (reports) => {
  let months = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

  reports.forEach((report) => {
    const index = new Date(report.created_at).getMonth();

    months[index] += report.childrens.length;
  });

  console.log(months);

  return months;
};
