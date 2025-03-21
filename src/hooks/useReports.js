import { useEffect, useState } from "react";
import { GET } from "../services/requestHTTP";
import { data_reports } from "../../reports";

const useReports = () => {
  const [reports, setReports] = useState([]);

  const findAllReports = async () => {
    console.log("[REPORT] >>> loading..");

    const res = await GET("/report");
    console.log("response: ", res.data.reports);
    setReports(res.data.reports); // UTILIZA O REPORT VINDO DO BANCO DE DADOS
    // setReports(data_reports); // UTILIZA O REPORT VINDO DO ARQUIVO.JS
  };

  useEffect(() => {
    findAllReports();
  }, []);

  return { reports, setReports };
};

export default useReports;
