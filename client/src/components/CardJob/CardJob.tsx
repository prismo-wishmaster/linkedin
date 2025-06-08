import { useCardJobStore } from "../../store/CardJob/CardJob.store";
import type { JobOffer } from "../../types/CardJob";
import "./CardJob.css";

type JobOfferProps = {
  jobOffer: JobOffer;
  idCard: string;
};

export const CardJob = ({ jobOffer, idCard }: JobOfferProps) => {
  const idCardFocus = useCardJobStore((state) => state.idCardJobFocus);
  const setIdCardJobFocus = useCardJobStore((state) => state.setIdCardJobFocus);
  const idFocus = idCard == idCardFocus ? true : false;

  return (
    <article
      onClick={() => setIdCardJobFocus(idCard)}
      style={{
        borderLeft: idFocus ? "2px solid black" : "2px solid white",
        backgroundColor: idFocus ? "rgba(0, 0, 0, 0.07)" : "white",
      }}
    >
      <img src={jobOffer.companyLogoUrl} alt="" className="logo-image" />
      <div className="description">
        <h1 className="font font--job-title">{jobOffer.jobTitle}</h1>
        <h2 className="font font--company-title">{jobOffer.companyName}</h2>
        <p className="font font--location">
          {jobOffer.location} ({jobOffer.workMode})
        </p>
        {jobOffer.isActivelyEvaluating && (
          <div className="align-center">
            <img
              className="check-mark"
              src="https://upload.wikimedia.org/wikipedia/commons/3/3b/Eo_circle_green_checkmark.svg"
              alt=""
            />
            <p className="font font--small">
              Evaluando solicitudes de forma activa
            </p>
          </div>
        )}
        <div className="align-center properties">
          {jobOffer.isPromoted && (
            <p className="font font--small">Promocionado</p>
          )}
          {jobOffer.easyApply && (
            <p className="font font--small">Solicitud sencilla</p>
          )}
        </div>
      </div>
    </article>
  );
};
