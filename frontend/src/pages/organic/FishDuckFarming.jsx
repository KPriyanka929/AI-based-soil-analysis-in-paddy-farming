import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function FishDuckFarming() {
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
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-red-100 p-8">
      <div className="max-w-4xl mx-auto">
        {/* Top bar */}
        <div className="flex items-center justify-between mb-6">
          <button
            onClick={() => navigate(-1)}
            className="inline-block bg-white text-red-800 font-bold px-4 py-2 rounded-full shadow"
          >
            ← Back
          </button>
        </div>

        {/* Header */}
        <h1 className="text-4xl sm:text-5xl font-extrabold text-red-900 mb-2 text-center">
          Fish & Duck in Fields – Natural Pest Control
        </h1>
        <p className="text-lg text-red-800 mb-6 text-center">
          Raise fish and ducks in your paddy fields to naturally control pests,
          weeds, and improve soil health.
        </p>

        {/* Main card */}
        <div className="bg-white rounded-3xl p-6 shadow-2xl space-y-6">
          {/* Intro */}
          <button
            onClick={() => toggle("intro")}
            className="w-full text-left p-4 rounded-xl bg-red-50 flex justify-between items-center"
            aria-expanded={open.intro}
          >
            <div>
              <div className="text-xl font-bold text-red-800">
                What is Fish & Duck Farming?
              </div>
            </div>
            <div className="text-2xl">{open.intro ? "−" : "+"}</div>
          </button>
          {open.intro && (
            <div className="p-4 text-lg text-gray-700 rounded-lg leading-relaxed">
              This method involves introducing **fish or ducks** into flooded
              paddy fields. Fish eat larvae and pests, while ducks eat weeds and
              insects. Their droppings act as **natural fertilizer**, helping
              crops grow strong.
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
              <div>• Reduces pests naturally → less chemical spray needed.</div>
              <div>• Ducks eat weeds, reducing manual labor.</div>
              <div>• Fish and duck droppings improve soil fertility.</div>
              <div>• Extra income from fish or duck meat/eggs.</div>
              <div>• Encourages biodiversity → healthier farm ecosystem.</div>
            </div>
          )}

          {/* How to do it */}
          <button
            onClick={() => toggle("howTo")}
            className="w-full text-left p-4 rounded-xl bg-lime-50 flex justify-between items-center"
            aria-expanded={open.howTo}
          >
            <div>
              <div className="text-xl font-bold text-lime-800">
                🛠️ How to Implement
              </div>
            </div>
            <div className="text-2xl">{open.howTo ? "−" : "+"}</div>
          </button>
          {open.howTo && (
            <div className="p-4 text-lg text-gray-700 rounded-lg space-y-3">
              <div>
                1️⃣ **Field Preparation:** Ensure the field is properly leveled
                and flooded.
              </div>
              <div>
                2️⃣ **Introducing Fish:** Choose local species like carp or
                tilapia. Add 200–500 fish per acre depending on size.
              </div>
              <div>
                3️⃣ **Introducing Ducks:** Add 4–6 ducks per 100 sq. m. Wait
                until seedlings are 15–20 days old to avoid damage.
              </div>
              <div>
                4️⃣ **Feeding:** Ducks and fish usually feed on natural pests and
                weeds. Only minimal feed is needed.
              </div>
              <div>
                5️⃣ **Harvest:** Collect fish and ducks when rice matures. They
                provide additional income.
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
              <div className="text-xl font-bold text-blue-800">Tips</div>
            </div>
            <div className="text-2xl">{open.tips ? "−" : "+"}</div>
          </button>
          {open.tips && (
            <div className="p-4 text-lg text-gray-700 rounded-lg space-y-2">
              <div>• Use young seedlings for ducks to avoid damage.</div>
              <div>
                • Ensure water is at safe depth for both rice and animals.
              </div>
              <div>• Introduce ducks gradually to reduce stress on crops.</div>
              <div>
                • Rotate species between seasons to prevent disease buildup.
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
              <div>• Too many ducks can damage seedlings.</div>
              <div>• Fish may require proper oxygen levels in water.</div>
              <div>• Avoid overcrowding to prevent disease.</div>
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
