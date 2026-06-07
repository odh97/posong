import { create, StateCreator } from 'zustand';
import { devtools } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

export const baseStore = <T extends object>(
  initializer: StateCreator<T, [['zustand/immer', never]], [['zustand/devtools', never]]>
) => {
  return create<T>()(devtools(immer(initializer)));
};
