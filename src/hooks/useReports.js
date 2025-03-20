import { useEffect, useState } from "react";
import { GET } from "../services/requestHTTP";
import { data_reports } from "../../reports";

const useReports = () => {
  const [reports, setReports] = useState([]);

  const findAllReports = async () => {
    console.log("[REPORT] >>> loading..");

    const res = await GET("/report");
    console.log("response: ", res.data.reports);
    setReports(data_reports);
  };

  useEffect(() => {
    findAllReports();
  }, []);

  return { reports, setReports };
};

export default useReports;
