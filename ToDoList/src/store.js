import { create } from "zustand";

export const listStore = create((set) => ({
  key: "name",
  increasePopulation: () => set((state) => ({ key: state.key + 1 })),
  removeAllBears: () => set({ bears: 0 }),
  updateBears: (newBears) => set({ key: newBears }),
}));
