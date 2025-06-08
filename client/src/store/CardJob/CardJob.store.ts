import { create } from "zustand";

export const useCardJobStore = create((set) => ({
  idCardJobFocus: "",
  setIdCardJobFocus: (id: string) => set(() => ({ idCardJobFocus: id })),
}));
