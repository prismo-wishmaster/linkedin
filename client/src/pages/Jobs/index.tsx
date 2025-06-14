import { Header } from "../../components/Header/Header";
import { FilterBar } from "../../components/FilterBar/FilterBar";
import { useCardJobInfo } from "../../hooks/useCardJobInfo";
import { CardJob } from "../../components/CardJob/CardJob";
import { useEffect, useState } from "react";
import { Pagination } from "../../components/Pagination/Pagination";
import { Footer } from "../../components/Footer/Footer";
import { JobApplication } from "../../components/JobApplication/JobApplication";

export const Jobs = () => {
  const { cardsJob, getCardsJob } = useCardJobInfo();
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    getCardsJob().catch(null);
  }, []);

  return (
    <>
      <Header />
      <FilterBar />

      <div className="flex justify-center w-full">
        <div className="flex flex-col bg-[#fff] border border-[#8c8c8c33] overflow-y-scroll w-[calc(1130px*43/100)] h-[calc(100vh-6.2rem)] max-[640px]:h-screen max-[1200px]:w-[calc(960px*43/100)] max-[992px]:w-[calc(770px*54/100)] max-[640px]:w-full">
          {cardsJob.map((jobOffer, i) => {
            const id = jobOffer.jobTitle + "-" + jobOffer.companyName + i;

            return (
              <CardJob
                key={id}
                jobOffer={jobOffer}
                isSelect={i == selectedIndex}
                onClick={() => setSelectedIndex(i)}
              />
            );
          })}
          <Pagination />
          <Footer />
        </div>
        <div className="flex bg-white border border-[#8c8c8c33] border-l-0 h-[calc(100vh-6.2rem)] overflow-y-auto w-[calc(1130px*57/100)] max-[640px]:h-screen max-[1200px]:w-[calc(960px*57/100)] max-[992px]:w-[calc(770px*46/100)] max-[640px]:hidden">
          <JobApplication />
        </div>
      </div>
    </>
  );
};
