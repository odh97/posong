import { baseStore } from '@/store/store';

interface TestState {
  count: number;
  setIncrement: () => void;
  setDecrement: () => void;
  getCount: () => number;
  reset: () => void;
}

export const useTestStore = baseStore<TestState>((set, get) => ({
  count: 0,
  setIncrement: () =>
    set((state) => {
      state.count += 1;
    }),
  setDecrement: () =>
    set((state) => {
      state.count -= 1;
    }),
  getCount: () => get().count,
  reset: () =>
    set((state) => {
      state.count = 0;
    }),
}));
