import "./Jobs.css";
import { Header } from "../../components/Header/Header";
import { FilterBar } from "../../components/FilterBar/FilterBar";
import { useCardJobInfo } from "../../hooks/useCardJobInfo";
import { CardJob } from "../../components/CardJob/CardJob";
import { useEffect } from "react";
import { useCardJobStore } from "../../store/CardJob/CardJob.store";

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
          <div className="pagination">
            <ul className="pages">
              <li className="pagination--font">1</li>
              <li className="pagination--font">2</li>
              <li className="pagination--font">3</li>
              <li className="pagination--font">...</li>
            </ul>
            <button className="pagination--font next-button">Siguiente</button>
          </div>
          <footer>
            <ul>
              <li className="font">Acerca de</li>
              <li className="font">Accesibilidad</li>
              <li className="font">Centro de ayuda</li>
              <li className="font">Privacidad y condiciones</li>
              <li className="font"> Opciones de publicidad</li>
              <li className="font">Publicidad</li>
              <li className="font">Servicios empresariales</li>
              <li className="font">Descargar la aplicación de LinkedIn</li>
              <li className="font">Más</li>
            </ul>
            <p className="font">LinkedIn Corporation © 2025</p>
          </footer>
        </div>
        <div className="job-application"></div>
      </div>
    </>
  );
};
