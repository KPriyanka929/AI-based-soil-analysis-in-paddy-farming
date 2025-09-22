import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function TrapCrops() {
  const [open, setOpen] = useState({
    intro: true,
    benefits: false,
    howTo: false,
    tips: false,
    cautions: false,
  });

  const toggle = (key) => setOpen((prev) => ({ ...prev, [key]: !prev[key] }));

  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-lime-50 to-lime-100 p-8">
      <div className="max-w-4xl mx-auto">
        {/* Top bar */}
        <div className="flex items-center justify-between mb-6">
          <button
            onClick={() => navigate(-1)}
            className="inline-block bg-white text-lime-800 font-bold px-4 py-2 rounded-full shadow"
          >
            ← Back
          </button>
        </div>

        {/* Header */}
        <h1 className="text-4xl sm:text-5xl font-extrabold text-lime-900 mb-2 text-center">
          Trap Crops & Companion Plants – Protect Paddy
        </h1>
        <p className="text-lg text-lime-800 mb-6 text-center">
          Plant special crops around your paddy fields to attract pests away
          from main rice crop and improve soil health.
        </p>

        {/* Main card */}
        <div className="bg-white rounded-3xl p-6 shadow-2xl space-y-6">
          {/* Intro */}
          <button
            onClick={() => toggle("intro")}
            className="w-full text-left p-4 rounded-xl bg-lime-50 flex justify-between items-center"
            aria-expanded={open.intro}
          >
            <div>
              <div className="text-xl font-bold text-lime-800">
                What are Trap Crops?
              </div>
            </div>
            <div className="text-2xl">{open.intro ? "−" : "+"}</div>
          </button>
          {open.intro && (
            <div className="p-4 text-lg text-gray-700 rounded-lg leading-relaxed">
              Trap crops are plants grown around or near the paddy field to
              **lure pests away** from the main crop. Companion plants can also
              repel certain insects naturally. This reduces pesticide use and
              keeps rice healthy.
            </div>
          )}

          {/* Benefits */}
          <button
            onClick={() => toggle("benefits")}
            className="w-full text-left p-4 rounded-xl bg-yellow-50 flex justify-between items-center"
            aria-expanded={open.benefits}
          >
            <div>
              <div className="text-xl font-bold text-yellow-800">Benefits</div>
            </div>
            <div className="text-2xl">{open.benefits ? "−" : "+"}</div>
          </button>
          {open.benefits && (
            <div className="p-4 text-lg text-gray-700 rounded-lg space-y-2">
              <div>• Attracts pests away from rice → fewer losses.</div>
              <div>• Companion plants repel insects naturally.</div>
              <div>• Reduces chemical sprays → safer for environment.</div>
              <div>
                • Some trap crops (like green gram) also improve soil nitrogen.
              </div>
              <div>
                • Extra crop yield or income from trap/companion plants.
              </div>
            </div>
          )}

          {/* How to do it */}
          <button
            onClick={() => toggle("howTo")}
            className="w-full text-left p-4 rounded-xl bg-lime-100 flex justify-between items-center"
            aria-expanded={open.howTo}
          >
            <div>
              <div className="text-xl font-bold text-lime-900">
                How to Use Trap & Companion Crops
              </div>
            </div>
            <div className="text-2xl">{open.howTo ? "−" : "+"}</div>
          </button>
          {open.howTo && (
            <div className="p-4 text-lg text-gray-700 rounded-lg space-y-3">
              <div>
                1️⃣ **Choose Trap Crops:** Plant sunn hemp, marigold, or green
                gram along field edges to attract pests.
              </div>
              <div>
                2️⃣ **Plant Companion Plants:** Crops like garlic, chili, or
                basil near paddy repel harmful insects.
              </div>
              <div>
                3️⃣ **Timing:** Sow trap/companion crops 1–2 weeks before rice
                transplanting to be effective.
              </div>
              <div>
                4️⃣ **Monitor:** Check trap crops regularly. Remove or treat
                pests collected on these crops to prevent them spreading back to
                rice.
              </div>
            </div>
          )}

          {/* Tips */}
          <button
            onClick={() => toggle("tips")}
            className="w-full text-left p-4 rounded-xl bg-blue-50 flex justify-between items-center"
            aria-expanded={open.tips}
          >
            <div>
              <div className="text-xl font-bold text-blue-800">
                Tips for Success
              </div>
            </div>
            <div className="text-2xl">{open.tips ? "−" : "+"}</div>
          </button>
          {open.tips && (
            <div className="p-4 text-lg text-gray-700 rounded-lg space-y-2">
              <div>• Choose local trap crops suited to your region.</div>
              <div>
                • Mix flowering plants to attract beneficial insects like
                ladybugs.
              </div>
              <div>
                • Keep field margins wider to allow space for trap crops.
              </div>
              <div>
                • Harvest trap crops carefully to avoid spreading pests.
              </div>
            </div>
          )}

          {/* Cautions */}
          <button
            onClick={() => toggle("cautions")}
            className="w-full text-left p-4 rounded-xl bg-orange-50 flex justify-between items-center"
            aria-expanded={open.cautions}
          >
            <div>
              <div className="text-xl font-bold text-orange-800">
                ⚠️ Cautions
              </div>
            </div>
            <div className="text-2xl">{open.cautions ? "−" : "+"}</div>
          </button>
          {open.cautions && (
            <div className="p-4 text-lg text-gray-700 rounded-lg space-y-2">
              <div>
                • Some trap crops may become hosts for other pests → monitor
                carefully.
              </div>
              <div>
                • Companion plants must not compete for nutrients or sunlight
                with rice.
              </div>
              <div>
                • Avoid planting too close to main crop to prevent accidental
                pest transfer.
              </div>
            </div>
          )}
        </div>

        {/* Bottom note */}
        <div className="mt-6 text-center text-gray-700">
          <div className="font-semibold mb-1">Need more help?</div>
          <div>
            Contact your local Krishi Vigyan Kendra (KVK) or agriculture
            extension office for guidance.
          </div>
        </div>
      </div>
    </div>
  );
}
