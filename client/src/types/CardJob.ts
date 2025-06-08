export interface JobOffer {
  id: number;
  jobTitle: string;
  isVerified: boolean;
  companyName: string;
  location: string;
  workMode: string;
  isPromoted: boolean;
  isActivelyEvaluating: boolean;
  easyApply: boolean;
  postedAt: string;
  companyLogoUrl: string;
}
