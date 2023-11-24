import { create } from "zustand";

interface InitialTypes {
  navIsOpen: boolean;
  setNavIsOpen: (bool: boolean) => void;
}

const useBurgerStore = create<InitialTypes>((set) => ({
  /* Initial States */
  navIsOpen: false,

  /* Action to set the user data */
  setNavIsOpen: (bool) => set({ navIsOpen: bool }),
}));

export default useBurgerStore;
