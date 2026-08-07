function Checklist({ items = [] }) {
  return (
    <div className="bg-slate-900 rounded-3xl p-8">

      <h2 className="text-3xl font-bold text-violet-400">

        Required Documents

      </h2>

      <div className="mt-6 space-y-4">

        {items.map((item, index) => (

          <div
            key={index}
            className="bg-slate-800 rounded-xl p-4"
          >
            ✅ {item}
          </div>

        ))}

      </div>

    </div>
  );
}

export default Checklist;