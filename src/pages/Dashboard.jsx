import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();
  const discos = [
    "Abuja Electricity Distribution Company",
    "Benin Electricity Distribution Company",
    "Eko Electricity Distribution Company",
    "Enugu Electricity Distribution Company",
    "Ibadan Electricity Distribution Company",
    "Ikeja Electricity Distribution Company",
    "Kaduna Electricity Distribution Company",
    "Kano Electricity Distribution Company",
    "P-H Electricity Distribution Company",
    "Yola Electricity Distribution Company",
    "ABA Power Plc",
  ];
  return (
    <div className="w-full h-full mx-auto p-8 text-[#026487] bg-white">
      <h1 className="text-2xl mb-6">Select A Disco:</h1>
      <ul className="w-full grid grid-cols-2 items-center justify-center">
        {" "}
        {discos.map((disco, index) => (
          <li
            className="p-2 flex items-center gap-4 space-y-2 cursor-pointer"
            key={index}
            onClick={() => navigate("/ts")}
          >
            <img src="/vector.png" alt="Bolt" className="w-4" />

            <p className="uppercase font-bold">{disco}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Dashboard;
