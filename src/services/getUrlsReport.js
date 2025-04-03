import { GET } from "./requestHTTP";

export const getUrlsReport = async (arg) => {
  if (!arg) return;
  const response = await GET(
    `/report/address/${arg.address}/geohash/${arg.geohash}`
  );

  return response.data.data.urls;
};
