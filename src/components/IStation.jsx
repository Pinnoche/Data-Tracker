function IStation({ substation, onClick }) {
  return (
    <div
      onClick={() => onClick(substation)}
      className="bg-gray-100 max-w-xs uppercase font-normal text-xs drop-shadow-lg text-center py-3 px-12 cursor-pointer"
    >
      {substation}
    </div>
  );
}

export default IStation;
