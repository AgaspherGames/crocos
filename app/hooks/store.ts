import { create } from 'zustand'
import { ICity } from '../types/interfaces';

interface StoreState {
    cities: ICity[]
}
interface StoreActions {
  setCities: (cities: StoreState['cities'])=>void
}

export const useStore = create<StoreState & StoreActions>()((set) => ({
  cities: [],
  setCities: (cities: ICity[]) => set(() => ({ cities: cities })),
}))
