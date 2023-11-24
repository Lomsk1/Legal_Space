import { IoMdClose } from "react-icons/io";

interface PropTypes {
  styles?: string;
  close: () => void;
}

const CloseButton: React.FC<PropTypes> = ({ styles, close }) => {
  return (
    <button
      className={`absolute duration-300 hover:duration-300 hover:scale-110 ${styles}`}
      onClick={close}
    >
      <IoMdClose className="text-2xl" />
    </button>
  );
};

export default CloseButton;
