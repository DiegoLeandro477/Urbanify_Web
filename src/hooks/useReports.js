import { useEffect, useState } from "react";
import { GET } from "../services/requestHTTP";
import { data } from "../../reports";

const useReports = () => {
  const [reports, setReports] = useState([]);

  const findAllReports = async () => {
    const res = await GET("/report");
    setReports(res.data.reports); // UTILIZA O REPORT VINDO DO BANCO DE DADOS
    // setReports(data_reports); // UTILIZA O REPORT VINDO DO ARQUIVO.JS
    // setReports(res.data.reports); // UTILIZA O REPORT VINDO DO BANCO DE DADOS
    setReports(data); // UTILIZA O REPORT VINDO DO ARQUIVO.JS
  };

  useEffect(() => {
    findAllReports();
  }, []);

  return { reports, setReports };
};

export default useReports;
