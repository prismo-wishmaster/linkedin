import type { JobOffer } from "../../types/CardJob";
import "./CardJob.css";

interface CardJobProps {
  jobOffer: JobOffer;
  isSelect: boolean;
  onClick: () => void;
}

export const CardJob = ({ jobOffer, isSelect, onClick }: CardJobProps) => {
  return (
    <button
      onClick={onClick}
      className={`flex pt-3 pl-3 cursor-pointer focus:border-l-2 h1:underline border-l-2 ${
        isSelect ? "border-black bg-[#00000012]" : "border-white"
      }`}
    >
      <img
        src={jobOffer.companyLogoUrl}
        alt=""
        className="w-[3.5rem] h-[3.5rem]"
      />
      <div className="flex flex-col w-full border-b border-[#8c8c8c33] pb-3.5 pl-3.5 items-start">
        <h1 className="text-base font-semibold text-[#0a66c2]">
          {jobOffer.jobTitle}
        </h1>
        <h2 className="text-[0.85rem font-normal]">{jobOffer.companyName}</h2>
        <p className="text-[0.9rem] font-normal text-[#000000b3]">
          {jobOffer.location} ({jobOffer.workMode})
        </p>
        {jobOffer.isActivelyEvaluating && (
          <div className="flex items-center">
            <img
              className="my-0 mx-2.5 w-3.5 h-3.5"
              src="https://upload.wikimedia.org/wikipedia/commons/3/3b/Eo_circle_green_checkmark.svg"
              alt=""
            />
            <p className="text-[0.75rem font-normal text-[#000000b3]">
              Evaluando solicitudes de forma activa
            </p>
          </div>
        )}
        <div className="flex gap-2.5 items-center">
          {jobOffer.isPromoted && (
            <p className="text-[0.75rem font-normal text-[#000000b3]">
              Promocionado
            </p>
          )}
          {jobOffer.easyApply && (
            <p className="text-[0.75rem font-normal text-[#000000b3]">
              Solicitud sencilla
            </p>
          )}
        </div>
      </div>
    </button>
  );
};
