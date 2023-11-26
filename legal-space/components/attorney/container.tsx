function AttorneyContainer() {
  return (
    <div className="bg-red-300 flex flex-col">
      {/* Image */}
      <header className="bg-blue-900 aspect-square w-full"></header>

      {/* Title */}
      <div className="bg-green-900 flex flex-col justify-center items-center">
        <p className="uppercase text-xs">LAWYER</p>
        <h4 className="capitalize text-xl">Ryan Walker</h4>
        <aside className="flex gap-3 items-center"></aside>
      </div>

      {/* Line */}
      <div className="h-1 w-16 bg-yellow-600" />

      {/* Description */}
      <footer className="">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium at
        voluptatibus quos. Iste iusto ducimus, doloribus beatae cumque
        distinctio incidunt fugit hic. Aperiam, dicta consequatur!
      </footer>
    </div>
  );
}

export default AttorneyContainer;
