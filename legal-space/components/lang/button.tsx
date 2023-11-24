function LangButton() {
  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input className="sr-only peer" value="" type="checkbox" />
      <div
        className={`w-20 h-8 rounded-full ring-0 peer duration-500 outline-none bg-main-green-dark overflow-hidden before:flex before:items-center before:justify-center after:flex after:items-center after:justify-center before:content-['ge'] before:text-black before:text-xs before:font-bold before:absolute before:h-6 before:w-6 before:top-1/2 before:bg-white before:rounded-full before:left-1 before:-translate-y-1/2 before:transition-all before:duration-700 peer-checked:before:opacity-0 peer-checked:before:rotate-90 peer-checked:before:-translate-y-full shadow-lg peer-checked:shadow-lg after:content-['en'] after:absolute after:bg-[#1d1d1d] after:rounded-full after:text-xs after:rotate-90 after:top-[4px] after:right-1 after:translate-y-full after:w-6 after:h-6 after:opacity-0 after:z-[-1] peer-checked:after:z-30 after:transition-all after:duration-700 peer-checked:after:opacity-100 peer-checked:after:rotate-0 peer-checked:after:translate-y-0`}
      ></div>
    </label>
  );
}
// peer-checked:shadow-gray-700 peer-checked:bg-[#383838] shadow-gray-400

export default LangButton;
