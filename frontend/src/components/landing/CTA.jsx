import { Upload } from "lucide-react";

function CTA() {
  return (
    <section className="py-28 bg-gradient-to-r from-blue-700 to-cyan-600 text-white">

      <div className="max-w-5xl mx-auto text-center px-8">

        <h2 className="text-5xl font-bold">
          Ready to Simplify Government Documents?
        </h2>

        <p className="mt-8 text-xl text-blue-100">

          Upload your first document and let AI explain
          everything in seconds.

        </p>

        <button className="mt-12 bg-white text-blue-700 px-10 py-5 rounded-2xl font-bold flex items-center gap-3 mx-auto hover:scale-105 transition">

          <Upload />

          Upload Document

        </button>

      </div>

    </section>
  );
}

export default CTA;