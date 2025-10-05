export default function AdminCategories() {
  return (
    <div className="min-h-screen bg-white-50 flex">
      {/* Main Content */}
      <main className="flex-1 p-8">
        <h2 className="text-2xl font-bold mb-4">Welcome, Admin!</h2>
        <div className="bg-white rounded shadow p-6">
          <p className="text-gray-600 mb-2">
            This is the admin dashboard. Only accessible by admins.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            <div className="bg-blue-50 border border-blue-200 rounded p-4 text-center">
              <h3 className="font-bold text-lg text-blue-700 mb-2">Products</h3>
              <p className="text-2xl font-bold">120</p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded p-4 text-center">
              <h3 className="font-bold text-lg text-green-700 mb-2">Orders</h3>
              <p className="text-2xl font-bold">45</p>
            </div>
            <div className="bg-yellow-50 border border-yellow-200 rounded p-4 text-center">
              <h3 className="font-bold text-lg text-yellow-700 mb-2">Users</h3>
              <p className="text-2xl font-bold">32</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
