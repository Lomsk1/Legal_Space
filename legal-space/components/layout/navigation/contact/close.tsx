'use client'

import CloseButton from "@/components/buttons/close";
import useContactSidebarStore from "@/store/client/layout/contact";

function ContactClose() {
  /* Store */
  const { setContactIsOpen } = useContactSidebarStore((state) => state);

  return (
    <CloseButton
      styles="top-10 right-10"
      close={() => setContactIsOpen(false)}
    />
  );
}

export default ContactClose;
