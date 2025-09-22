import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AlternateWettingDrying() {
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 p-8">
      <div className="max-w-4xl mx-auto">
        {/* Top bar */}
        <div className="flex items-center justify-between mb-6">
          <button
            onClick={() => navigate(-1)}
            className="inline-block bg-white text-blue-800 font-bold px-4 py-2 rounded-full shadow"
          >
            ← Back
          </button>
        </div>

        {/* Header */}
        <h1 className="text-4xl sm:text-5xl font-extrabold text-blue-900 mb-2 text-center">
          Alternate Wetting & Drying – Reduce Pests
        </h1>
        <p className="text-lg text-blue-800 mb-6 text-center">
          Flood and dry paddy fields in cycles to naturally control pests like
          brown planthoppers and save water.
        </p>

        {/* Main card */}
        <div className="bg-white rounded-3xl p-6 shadow-2xl space-y-6">
          {/* Intro */}
          <button
            onClick={() => toggle("intro")}
            className="w-full text-left p-4 rounded-xl bg-blue-50 flex justify-between items-center"
            aria-expanded={open.intro}
          >
            <div>
              <div className="text-xl font-bold text-blue-800">
                What is Alternate Wetting & Drying?
              </div>
            </div>
            <div className="text-2xl">{open.intro ? "−" : "+"}</div>
          </button>
          {open.intro && (
            <div className="p-4 text-lg text-gray-700 rounded-lg leading-relaxed">
              Alternate Wetting and Drying (AWD) is a water-saving method where
              paddy fields are flooded and then allowed to dry for a few days.
              This cycle kills pests like brown planthoppers naturally and
              improves root health without harming the rice crop.
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
              <div>• Controls pests like brown planthoppers naturally.</div>
              <div>• Saves water compared to continuous flooding.</div>
              <div>• Improves soil aeration and root growth.</div>
              <div>• Reduces the need for chemical pesticides.</div>
              <div>• Increases yield by keeping plants healthier.</div>
            </div>
          )}

          {/* How to do it */}
          <button
            onClick={() => toggle("howTo")}
            className="w-full text-left p-4 rounded-xl bg-blue-100 flex justify-between items-center"
            aria-expanded={open.howTo}
          >
            <div>
              <div className="text-xl font-bold text-blue-900">
                How to Practice AWD
              </div>
            </div>
            <div className="text-2xl">{open.howTo ? "−" : "+"}</div>
          </button>
          {open.howTo && (
            <div className="p-4 text-lg text-gray-700 rounded-lg space-y-3">
              <div>1️⃣ Flood field to 5–7 cm depth after transplanting.</div>
              <div>
                2️⃣ Allow water to drop naturally for 3–5 days until soil surface
                cracks slightly.
              </div>
              <div>
                3️⃣ Re-flood field to maintain water as needed for crop growth.
              </div>
              <div>
                4️⃣ Repeat cycles every 5–7 days during active tillering and
                early panicle stage.
              </div>
              <div>
                5️⃣ Monitor plant health; do not let soil dry completely during
                flowering.
              </div>
            </div>
          )}

          {/* Tips */}
          <button
            onClick={() => toggle("tips")}
            className="w-full text-left p-4 rounded-xl bg-lime-50 flex justify-between items-center"
            aria-expanded={open.tips}
          >
            <div>
              <div className="text-xl font-bold text-lime-800">Tips</div>
            </div>
            <div className="text-2xl">{open.tips ? "−" : "+"}</div>
          </button>
          {open.tips && (
            <div className="p-4 text-lg text-gray-700 rounded-lg space-y-2">
              <div>
                • Use simple field markers or pipes to check water level.
              </div>
              <div>• Adjust cycles depending on rainfall and soil type.</div>
              <div>
                • Combine with other pest control methods for best results.
              </div>
              <div>
                • Maintain 1–2 cm water layer during reproductive stages if
                necessary.
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
                • Do not let soil dry completely during flowering or grain
                filling.
              </div>
              <div>
                • Avoid AWD in very light sandy soils, as roots may dry out.
              </div>
              <div>• Monitor pest population regularly even with AWD.</div>
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
