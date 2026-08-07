function SummaryCard({ summary }) {
  return (
    <div className="bg-slate-900 rounded-3xl p-8">

      <h2 className="text-3xl font-bold text-cyan-400">

        AI Summary

      </h2>

      <p className="mt-6 leading-8 text-slate-300">

        {summary}

      </p>

    </div>
  );
}

export default SummaryCard;