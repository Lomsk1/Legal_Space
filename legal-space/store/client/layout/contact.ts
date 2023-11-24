import { create } from "zustand";

interface InitialTypes {
  contactIsOpen: boolean;
  setContactIsOpen: (bool: boolean) => void;
}

const useContactSidebarStore = create<InitialTypes>((set) => ({
  /* Initial States */
  contactIsOpen: false,

  /* Action to set the user data */
  setContactIsOpen: (bool) => set({ contactIsOpen: bool }),
}));

export default useContactSidebarStore;
