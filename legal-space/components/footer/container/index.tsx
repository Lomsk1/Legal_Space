interface PropTypes {
  title: string;
  description: string[];
}

function FooterInfoContainer({ title, description }: PropTypes) {
  return (
    <aside className="flex flex-col gap-6 duration-500 hover:duration-500 border border-transparent hover:border-main-green-light p-2 rounded-md">
      <h3 className="text-xl">{title}</h3>

      {/* Info */}
      <div className="flex flex-col gap-2">
        {description.map((des, i) => (
          <p key={i} className="text-sm font-semibold tracking-wider">
            {des}
          </p>
        ))}
      </div>
    </aside>
  );
}

export default FooterInfoContainer;
