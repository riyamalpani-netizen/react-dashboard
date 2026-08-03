function DashboardCards({ cards, theme }) { //here it is recieving the cards through props from the parent component Dashboard.jsx
  const isDark = theme === "dark";
  return (
    <div className="grid grid-cols-4 gap-4 mb-8">
      {cards.map((card, index) => (
        <div key={index} className={`rounded-lg shadow p-5 hover:shadow-xl transition duration-300 ${isDark ? "bg-slate-800 text-slate-100 hover:shadow-white/10" : "bg-white"}`}>
          <h3 className={isDark ? "text-slate-300" : "text-gray-600"}>{card.title}</h3>
          <p className={`text-3xl font-bold mt-2 ${isDark ? "text-cyan-300" : "text-blue-600"}`}>{card.value}</p>
        </div>
      ))}
    </div>
  );
}

export default DashboardCards;