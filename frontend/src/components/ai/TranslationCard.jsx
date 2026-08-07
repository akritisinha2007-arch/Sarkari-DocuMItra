function TranslationCard({ hindi }) {
  return (
    <div className="bg-slate-900 rounded-3xl p-8">

      <h2 className="text-3xl font-bold text-emerald-400">

        Hindi Translation

      </h2>

      <p className="mt-6 leading-8">

        {hindi}

      </p>

    </div>
  );
}

export default TranslationCard;