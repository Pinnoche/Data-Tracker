function FeederButton({ feeder, onClick, diagramId }) {
  return (
    <div className="w-full flex justify-center">
      <div
        onClick={() => onClick(feeder)}
        className={`bg-white max-w-xs px-6 py-2 rounded-md uppercase border text-sm text-center drop-shadow-md cursor-pointer mb-4 ${diagramId && "mb-0"}`}
      >
        {feeder}
      </div>
    </div>
  );
}

export default FeederButton;
