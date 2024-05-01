// StatsCard Component for the card display
export default function StatsCard({ title, total, bgColor }) {
  return (
    <div className="w-72 max-w-xs mx-auto rounded-sm overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 transform hover:scale-100 cursor-pointer">
      <div className={`h-20 ${bgColor} flex items-center justify-between`}>
        <p className="mr-0 text-white text-lg pl-5">{title}</p>
      </div>
      <div className="flex justify-between px-5 pt-6 mb-2 text-sm text-gray-600">
        <p>TOTAL</p>
      </div>
      <p className="py-4 text-3xl ml-5">{total}</p>
    </div>
  );
}
