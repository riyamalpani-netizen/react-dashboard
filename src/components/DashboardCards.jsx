function DashboardCards({ cards, theme }) { //here it is recieving the cards through props from the parent component Dashboard.jsx
  return (
    <div className="dashboard-cards-grid">
      {cards.map((card, index) => (
        <div key={index} className="dashboard-card">
          <h3 className="dashboard-card-title">{card.title}</h3>
          <p className="dashboard-card-value">{card.value}</p>
        </div>
      ))}
    </div>
  );
}

export default DashboardCards;