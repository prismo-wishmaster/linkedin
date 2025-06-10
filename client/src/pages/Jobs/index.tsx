import "./Jobs.css";
import { Header } from "../../components/Header/Header";
import { FilterBar } from "../../components/FilterBar/FilterBar";
import { useCardJobInfo } from "../../hooks/useCardJobInfo";
import { CardJob } from "../../components/CardJob/CardJob";
import { useEffect } from "react";
import { useCardJobStore } from "../../store/CardJob/CardJob.store";
import { Pagination } from "../../components/Pagination/Pagination";
import { Footer } from "../../components/Footer/Footer";
import { JobApplication } from "../../components/JobApplication/JobApplication";

export const Jobs = () => {
  const { cardsJob, getCardsJob } = useCardJobInfo();
  const setIdCardJobFocus = useCardJobStore((state) => state.setIdCardJobFocus);

  useEffect(() => {
    getCardsJob().catch(null);
  }, []);

  useEffect(() => {
    if (cardsJob.length > 0) {
      const firstCard = cardsJob[0];
      setIdCardJobFocus(firstCard.jobTitle + "-" + firstCard.companyName + 0);
    }
  }, [cardsJob]);

  return (
    <>
      <Header />
      <FilterBar />

      <div className="job">
        <div className="job-offers">
          {cardsJob.map((jobOffer, i) => {
            const id = jobOffer.jobTitle + "-" + jobOffer.companyName + i;

            return <CardJob key={id} jobOffer={jobOffer} idCard={id} />;
          })}
          <Pagination />
          <Footer />
        </div>
        <div className="job-application">
          <JobApplication />
        </div>
      </div>
    </>
  );
};
