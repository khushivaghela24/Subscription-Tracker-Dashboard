export default function Dashboard({ subscriptions = [] }) {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-green-800 mb-6">
        Subscription Dashboard
      </h2>

      {subscriptions.length === 0 ? (
        <div className="flex justify-center items-center h-40">
          <a
            href="/add-subscription"
            className="px-6 py-3 bg-green-800 text-white rounded-md hover:bg-green-700 transition"
          >
            Add New Subscription
          </a>
        </div>
      ) : (
        <>
          <table className="w-full border border-gray-300 mb-6">
            <thead>
              <tr className="bg-green-100 text-left">
                <th className="p-3 border">Name</th>
                <th className="p-3 border">Cost</th>
                <th className="p-3 border">Renewal Date</th>
                <th className="p-3 border">Actions</th>
              </tr>
            </thead>
            <tbody>
              {subscriptions.map((sub) => (
                <tr key={sub.id} className="text-sm">
                  <td className="p-3 border">{sub.name}</td>
                  <td className="p-3 border">{sub.cost}</td>
                  <td className="p-3 border">{sub.renewalDate}</td>
                  <td className="p-3 border text-center">
                    <button className="px-3 py-1 bg-green-600 text-white rounded hover:bg-green-700">
                      View Details
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Button below table */}
          <div className="flex justify-center">
            <a
              href="/add-subscription"
              className="px-6 py-3 bg-green-800 text-white rounded-md hover:bg-green-700 transition"
            >
              Add New Subscription
            </a>
          </div>
        </>
      )}
    </div>
  );
}