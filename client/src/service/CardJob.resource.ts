export const CardJobResource = {
  getCardJob: async () => {
    const response = await fetch("http://localhost:5173/data/MockJobs.json");
    const { data } = await response.json();
    return data;
  },
};
