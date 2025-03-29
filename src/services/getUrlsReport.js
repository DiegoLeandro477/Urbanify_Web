import { GET } from "./requestHTTP";

export const getUrlsReport = async (report) => {
  if (!report) return;

  const response = await GET(
    `/report/address/${report.address}/geohash/${report.geohash}`
  );

  return response.data.data.urls;
};
