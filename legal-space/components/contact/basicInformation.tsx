interface PropTypes {
  className?: string;
  title: string;
  text: string[];
}

const ContactBasicInfo: React.FC<PropTypes> = ({ className, title, text }) => {
  return (
    <div
      className={`flex flex-col gap-5 ${className} max-w-[250px] p-2`}
    >
      <h4 className=" text-xs tracking-wider text-main text-main-green-medium underline">{title}</h4>

      <div className=" flex flex-col gap-2">
        {text.map((txt, i) => (
          <p key={i} className="break-words font-light">{txt}</p>
        ))}
      </div>
    </div>
  );
};

export default ContactBasicInfo;
