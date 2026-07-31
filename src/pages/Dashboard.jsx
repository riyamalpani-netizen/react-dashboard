function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold mb-6">
        Dashboard
      </h1>

      <div className="grid grid-cols-4 gap-4">
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-lg font-semibold">
            Total Users
          </h2>
          <p className="text-3xl font-bold mt-2">150</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-lg font-semibold">
            Orders
          </h2>
          <p className="text-3xl font-bold mt-2">82</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-lg font-semibold">
            Revenue
          </h2>
          <p className="text-3xl font-bold mt-2">₹1,25,000</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-lg font-semibold">
            Pending
          </h2>
          <p className="text-3xl font-bold mt-2">15</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;