import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function PaddyHuskAsh() {
  const [open, setOpen] = useState({
    intro: true,
    benefits: false,
    preparation: false,
    application: false,
    tips: false,
  });

  const toggle = (key) => setOpen((p) => ({ ...p, [key]: !p[key] }));

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-yellow-100 p-8">
      <div className="max-w-4xl mx-auto">
        {/* Top bar */}
        <div className="flex items-center justify-between mb-6">
          <Link
            to="/organic"
            className="inline-block bg-white text-yellow-800 font-bold px-4 py-2 rounded-full shadow"
          >
            ← Back
          </Link>
        </div>

        {/* Header */}
        <h1 className="text-4xl sm:text-5xl font-extrabold text-yellow-900 mb-4 text-center">
          Paddy-Husk Ash – Strengthen Plants
        </h1>
        <p className="text-lg text-yellow-800 mb-8 text-center">
          Use mineral-rich ash from paddy husks and stubble to make your plants
          stronger and more resistant to pests naturally.
        </p>

        {/* Main card */}
        <div className="bg-white rounded-3xl p-6 shadow-2xl space-y-6">
          {/* Intro */}
          <button
            onClick={() => toggle("intro")}
            className="w-full text-left p-4 rounded-xl bg-yellow-50 flex justify-between items-center"
            aria-expanded={open.intro}
          >
            <div>
              <div className="text-xl font-bold text-yellow-800">
                What is Paddy-Husk Ash?
              </div>
            </div>
            <div className="text-2xl">{open.intro ? "−" : "+"}</div>
          </button>
          {open.intro && (
            <div className="p-4 text-lg text-gray-700 rounded-lg leading-relaxed">
              <strong>Paddy-Husk Ash</strong> is what you get after burning
              paddy husks and leftover stubble. It contains minerals like
              silica, which make rice stems stronger and help protect crops from
              pests like stem borers naturally.
            </div>
          )}

          {/* Benefits */}
          <button
            onClick={() => toggle("benefits")}
            className="w-full text-left p-4 rounded-xl bg-green-50 flex justify-between items-center"
            aria-expanded={open.benefits}
          >
            <div>
              <div className="text-xl font-bold text-green-800">Benefits</div>
            </div>
            <div className="text-2xl">{open.benefits ? "−" : "+"}</div>
          </button>
          {open.benefits && (
            <div className="p-4 text-lg text-gray-700 rounded-lg space-y-2">
              <div>
                • Strengthens rice stems to reduce lodging (falling over).
              </div>
              <div>
                • Makes plants more resistant to pests like stem borers.
              </div>
              <div>• Adds minerals naturally without chemicals.</div>
              <div>• Uses farm residues, reducing waste.</div>
            </div>
          )}

          {/* Preparation */}
          <button
            onClick={() => toggle("preparation")}
            className="w-full text-left p-4 rounded-xl bg-blue-50 flex justify-between items-center"
            aria-expanded={open.preparation}
          >
            <div>
              <div className="text-xl font-bold text-blue-800">
                🛠️ How to Prepare Ash
              </div>
            </div>
            <div className="text-2xl">{open.preparation ? "−" : "+"}</div>
          </button>
          {open.preparation && (
            <div className="p-4 text-lg text-gray-700 rounded-lg space-y-2">
              <div>1️⃣ Collect dry paddy husks or leftover stubble.</div>
              <div>
                2️⃣ Burn them in a safe area until fully reduced to fine ash.
              </div>
              <div>3️⃣ Let the ash cool completely before using.</div>
              <div>
                4️⃣ Store in a dry container to prevent it from getting wet.
              </div>
            </div>
          )}

          {/* Application */}
          <button
            onClick={() => toggle("application")}
            className="w-full text-left p-4 rounded-xl bg-red-50 flex justify-between items-center"
            aria-expanded={open.application}
          >
            <div>
              <div className="text-xl font-bold text-red-800">
                How to Apply on Fields
              </div>
            </div>
            <div className="text-2xl">{open.application ? "−" : "+"}</div>
          </button>
          {open.application && (
            <div className="p-4 text-lg text-gray-700 rounded-lg space-y-2">
              <div>
                • Sprinkle 1–2 kg of ash per 10 square meters of field before
                transplanting or after harvest.
              </div>
              <div>• Mix lightly with soil to help plants absorb minerals.</div>
              <div>
                • Avoid spreading on very wet fields to prevent washing away.
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
                • ✅ Use dry husks only; wet husks produce smoke and uneven ash.
              </div>
              <div>
                • ✅ Apply after compost or Jeevamrut for better nutrient
                absorption.
              </div>
              <div>
                • ✅ Do not burn with chemicals or plastics; it can harm soil.
              </div>
              <div>• ✅ Store ash in a covered container to keep it dry.</div>
            </div>
          )}
        </div>

        {/* Bottom note */}
        <div className="mt-6 text-center text-gray-700">
          <div className="font-semibold mb-1">Need more help?</div>
          <div>
            Call the Maharashtra agriculture helpline{" "}
            <strong>020-2612 3648</strong> or contact your local Krishi Vigyan
            Kendra (KVK) for guidance.
          </div>
        </div>
      </div>
    </div>
  );
}
