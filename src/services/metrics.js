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

export const attendedsUsersXnotAttendeds = async (users) => {
  const counterUserAttendeds = users.reduce((acc, user) => {
    if (user.service_counter !== 0) acc++;
    return acc;
  }, 0);

  const counterUserNotAttendeds = users.length - counterUserAttendeds;

  return [counterUserAttendeds, counterUserNotAttendeds];
};

export const fixedsXnotFixedes = async ({ reports, resolvedReports }) => {
  const getDistrictStats = (reports) => {
    const bairrosSet = new Set();
    const bairrosCount = {};

    reports.forEach((report) => {
      bairrosSet.add(report.district);
      bairrosCount[report.district] = (bairrosCount[report.district] || 0) + 1;
    });

    return {
      bairros: Array.from(bairrosSet),
      bairrosCount,
    };
  };

  const { bairros: bairrosNotAttendeds } = getDistrictStats(reports);
  const { bairros: bairrosAttendeds } = getDistrictStats(resolvedReports);

  console.log(bairrosAttendeds);
  console.log(bairrosNotAttendeds);

  const difference = bairrosNotAttendeds.filter(
    (item) => !bairrosAttendeds.includes(item)
  ).length;

  return [difference, bairrosAttendeds.length];
};
