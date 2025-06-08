import { useCallback, useState } from "react";
import { CardJobResource } from "../service/CardJob.resource";
import { type JobOffer } from "../types/CardJob";

export const useCardJobInfo = () => {
  const [cardsJob, setCardJob] = useState<JobOffer[]>([]);

  const getCardsJob = useCallback(async () => {
    const data = await CardJobResource.getCardJob();
    setCardJob(data);
  }, []);

  return { cardsJob, getCardsJob };
};
