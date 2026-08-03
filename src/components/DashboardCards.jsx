function DashboardCards({ cards }) { //here it is recieving the cards through props from the parent component Dashboard.jsx
  return (
    <div className="grid grid-cols-4 gap-4 mb-8">
      {cards.map((card, index) => (
        <div key={index} className="bg-white rounded-lg shadow p-5 hover:shadow-xl transition duration-300">
          <h3 className="text-gray-600">{card.title}</h3>
          <p className="text-3xl font-bold mt-2 text-blue-600">{card.value}</p>
        </div>
      ))}
    </div>
  );
}

export default DashboardCards;