function DashboardCards() {
  const cards = [
    { title: "Total Users", value: 150 },  //static data for the dashboard cards
    { title: "Orders", value: 82 },
    { title: "Revenue", value: "₹1,25,000" },
    { title: "Pending", value: 15 },
  ];

  return (
    <div className="grid grid-cols-4 gap-4 mb-8">
      {cards.map((card, index) => (
        <div key={index} className="bg-white rounded-lg shadow p-5">
          <h3 className="text-gray-600">{card.title}</h3>
          <p className="text-3xl font-bold mt-2">{card.value}</p>
        </div>
      ))}
    </div>
  );
}

export default DashboardCards;