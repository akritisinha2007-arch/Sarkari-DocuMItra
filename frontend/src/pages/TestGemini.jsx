import { useState } from "react";
import { analyzeDocument } from "../services/gemini";

function TestGemini() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const testAI = async () => {
    setLoading(true);

    try {
      const response = await analyzeDocument(`
Aadhaar Card

Name: Rahul Sharma

DOB: 12/04/2000

UID: 1234 5678 9012
      `);

      setData(response);
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Check the console.");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white p-10">

      <h1 className="text-5xl font-bold mb-8">
        AI Government Document Analyzer
      </h1>

      <button
        onClick={testAI}
        className="bg-violet-600 hover:bg-violet-700 px-8 py-4 rounded-xl font-semibold"
      >
        {loading ? "Analyzing..." : "Analyze Aadhaar"}
      </button>

      {data && (
        <div className="space-y-6 mt-10">

          {/* Document Type */}
          <div className="bg-slate-900 p-6 rounded-2xl">
            <h2 className="text-2xl font-bold text-cyan-400">
              📄 Document Type
            </h2>

            <p className="mt-3">
              {data.documentType}
            </p>
          </div>

          {/* English Summary */}
          <div className="bg-slate-900 p-6 rounded-2xl">
            <h2 className="text-2xl font-bold text-cyan-400">
              📝 English Summary
            </h2>

            <p className="mt-3 leading-8">
              {data.englishSummary}
            </p>
          </div>

          {/* Hindi Summary */}
          <div className="bg-slate-900 p-6 rounded-2xl">
            <h2 className="text-2xl font-bold text-green-400">
              🇮🇳 Hindi Summary
            </h2>

            <p className="mt-3 leading-8">
              {data.hindiSummary}
            </p>
          </div>

          {/* Important Dates */}
          <div className="bg-slate-900 p-6 rounded-2xl">
            <h2 className="text-2xl font-bold text-yellow-400">
              📅 Important Dates
            </h2>

            {data.importantDates.map((date, index) => (
              <div
                key={index}
                className="bg-slate-800 rounded-lg p-3 mt-3"
              >
                {date}
              </div>
            ))}
          </div>

          {/* Fees */}
          <div className="bg-slate-900 p-6 rounded-2xl">
            <h2 className="text-2xl font-bold text-orange-400">
              💰 Fees
            </h2>

            <p className="mt-3">
              {data.fees}
            </p>
          </div>

          {/* Eligibility */}
          <div className="bg-slate-900 p-6 rounded-2xl">
            <h2 className="text-2xl font-bold text-pink-400">
              ✅ Eligibility
            </h2>

            <p className="mt-3">
              {data.eligibility}
            </p>
          </div>

          {/* Required Documents */}
          <div className="bg-slate-900 p-6 rounded-2xl">
            <h2 className="text-2xl font-bold text-blue-400">
              📋 Required Documents
            </h2>

            {data.requiredDocuments.map((doc, index) => (
              <div
                key={index}
                className="bg-slate-800 rounded-lg p-3 mt-3"
              >
                ✅ {doc}
              </div>
            ))}
          </div>

          {/* Missing Documents */}
          <div className="bg-slate-900 p-6 rounded-2xl">
            <h2 className="text-2xl font-bold text-red-400">
              ⚠ Missing Documents
            </h2>

            {data.missingDocuments.map((doc, index) => (
              <div
                key={index}
                className="bg-red-500/10 border border-red-500 rounded-lg p-3 mt-3"
              >
                ❌ {doc}
              </div>
            ))}
          </div>

          {/* Next Steps */}
          <div className="bg-slate-900 p-6 rounded-2xl">
            <h2 className="text-2xl font-bold text-violet-400">
              🚀 Next Steps
            </h2>

            {data.nextSteps.map((step, index) => (
              <div
                key={index}
                className="bg-slate-800 rounded-lg p-3 mt-3"
              >
                {index + 1}. {step}
              </div>
            ))}
          </div>

          {/* FAQs */}
          <div className="bg-slate-900 p-6 rounded-2xl">
            <h2 className="text-2xl font-bold text-cyan-400">
              ❓ FAQs
            </h2>

            {data.faq.map((item, index) => (
              <div
                key={index}
                className="bg-slate-800 rounded-lg p-4 mt-4"
              >
                <h3 className="font-bold text-cyan-300">
                  {item.question}
                </h3>

                <p className="mt-2 text-slate-300">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>

        </div>
      )}

    </div>
  );
}

export default TestGemini;