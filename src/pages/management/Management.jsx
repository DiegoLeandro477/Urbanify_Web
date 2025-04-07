import React from "react";
import style from "./style.module.css";
import Header from "../../components/header/Header";
import Filter from "../../components/filter/Filter";
import Table from "../../components/pages/management/table/Table";
import { ReportStatusEnum } from "../../utils/environment";
import useReports from "../../hooks/useReports";
import useResolvedReports from "../../hooks/useResolvedReports";
import { useParams } from "react-router-dom";
import Modal from "../../components/pages/management/modal/Modal";
import { getUrlsReport } from "../../services/getUrlsReport";
import { filterReports } from "../../services/dashboard";

function Management() {
  const { reports } = useReports();
  const { resolvedReports } = useResolvedReports();

  const [filter, setFilter] = React.useState({
    status: ReportStatusEnum.PENDENTE,
    severity: null,
    date: {
      start: null,
      end: null,
    },
  });
  const [filteredReports, setFilteredReports] = React.useState([]);

  React.useEffect(() => {
    const result = filterReports({ reports, resolvedReports, filter });

    setFilteredReports(result);
  }, [filter, reports]);
  const [modalData, setModalData] = React.useState({
    urls: [
      "https://cpv.ifsp.edu.br/images/phocagallery/galeria2/thumbs/phoca_thumb_l_image03_grd.png",
    ],
    subregion: "São Luís",
    district: "Liberdade",
    street: "Rua Machado De Assis",
    reports: 15,
    created_at: "2025-07-17T19:41:09.622Z",
  });
  const [modalOpen, setModalOpen] = React.useState(false);
  const { rep } = useParams(); // Pega o parâmetro da URL

  React.useEffect(() => {
    if (rep) {
      changeSeletectDistrict(JSON.parse(rep));
    }
  }, [rep]);

  const changeSeletectDistrict = async (rep) => {
    console.log(rep);
    const data = await getUrlsReport(rep);
    setModalData({ ...modalData, urls: data });

    setFilteredReports((filteredReports) => [rep, ...filteredReports]);

    if (rep) setModalOpen(true);
  };

  return (
    <>
      <Header
        title="Gestão de reparos"
        text="Gerenciamento e monitoramento de reparos. Acompanhe as ocorrências reportadas pelos cidadãos desde a abertura até a conclusão."
      />

      <main className={`bg-12 m-1-5 ${style.main}`}>
        <Filter filter={filter} setFilter={setFilter} />

        <div className={style.content}>
          <Table
            reports={filteredReports}
            onSelected={changeSeletectDistrict}
            setModalData={setModalData}
          />
        </div>

        {modalOpen && (
          <Modal
            modalData={modalData}
            setModalData={setModalData}
            setModalOpen={setModalOpen}
          />
        )}
      </main>
    </>
  );
}

export default Management;
