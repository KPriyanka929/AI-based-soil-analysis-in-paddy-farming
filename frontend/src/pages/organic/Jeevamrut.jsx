import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Jeevamrut() {
  // useState is used to open/close each section
  const [open, setOpen] = useState({
    intro: true,
    ingredients: false,
    preparation: false,
    usage: false,
    tips: false,
  });

  // toggle function toggles the section open/close
  const toggle = (key) => setOpen((prev) => ({ ...prev, [key]: !prev[key] }));

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100 p-8">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <div className="flex items-center justify-between mb-6">
          <Link
            to="/organic"
            className="inline-block bg-white text-green-800 font-bold px-4 py-2 rounded-full shadow"
          >
            ← Back
          </Link>
        </div>

        {/* Header */}
        <h1 className="text-4xl sm:text-5xl font-extrabold text-green-900 mb-4 text-center">
          Jeevamrut
        </h1>
        <p className="text-lg text-green-800 mb-6 text-center">
          Feed friendly microbes to the soil and make your paddy crop strong and
          healthy.
        </p>

        {/* Main Card */}
        <div className="bg-white rounded-3xl p-6 shadow-2xl space-y-6">
          {/* Intro */}
          <button
            onClick={() => toggle("intro")}
            className="w-full text-left p-4 rounded-xl bg-green-50 flex justify-between items-center"
            aria-expanded={open.intro}
          >
            <div>
              <div className="text-xl font-bold text-green-800">
                What is Jeevamrut?
              </div>
            </div>
            <div className="text-2xl">{open.intro ? "−" : "+"}</div>
          </button>
          {open.intro && (
            <div className="p-4 text-lg text-gray-700 rounded-lg leading-relaxed">
              Jeevamrut is a natural liquid made from cow dung, cow urine,
              jaggery, flour, and water. It is rich in friendly microbes that
              improve soil fertility, help paddy roots grow strong, and increase
              yield naturally. Think of it as a super drink for your soil!
            </div>
          )}

          {/* Ingredients */}
          <button
            onClick={() => toggle("ingredients")}
            className="w-full text-left p-4 rounded-xl bg-yellow-50 flex justify-between items-center"
            aria-expanded={open.ingredients}
          >
            <div>
              <div className="text-xl font-bold text-yellow-800">
                Ingredients Needed
              </div>
            </div>
            <div className="text-2xl">{open.ingredients ? "−" : "+"}</div>
          </button>
          {open.ingredients && (
            <div className="p-4 text-lg text-gray-700 rounded-lg space-y-2">
              <div>• 10 kg fresh cow dung</div>
              <div>• 10 liters fresh cow urine</div>
              <div>• 2 tablespoons jaggery</div>
              <div>• 2 tablespoons gram flour (besan) or wheat flour</div>
              <div>• 200 liters water</div>
            </div>
          )}

          {/* Preparation */}
          <button
            onClick={() => toggle("preparation")}
            className="w-full text-left p-4 rounded-xl bg-lime-50 flex justify-between items-center"
            aria-expanded={open.preparation}
          >
            <div>
              <div className="text-xl font-bold text-lime-800">
                How to Prepare Jeevamrut
              </div>
            </div>
            <div className="text-2xl">{open.preparation ? "−" : "+"}</div>
          </button>
          {open.preparation && (
            <div className="p-4 text-lg text-gray-700 rounded-lg space-y-2 leading-relaxed">
              <div>
                1️⃣ Mix cow dung, cow urine, jaggery, and flour in a drum.
              </div>
              <div>2️⃣ Add 200 liters of water and stir well.</div>
              <div>
                3️⃣ Cover the drum with a cloth to allow air to enter (do not
                seal tightly).
              </div>
              <div>
                4️⃣ Stir the mixture 2–3 times a day for 5–7 days. You will see
                bubbles forming — this shows microbes are active.
              </div>
              <div>
                5️⃣ The Jeevamrut is ready to use when it has a mild sour smell
                and lots of bubbles.
              </div>
            </div>
          )}

          {/* Usage */}
          <button
            onClick={() => toggle("usage")}
            className="w-full text-left p-4 rounded-xl bg-blue-50 flex justify-between items-center"
            aria-expanded={open.usage}
          >
            <div>
              <div className="text-xl font-bold text-blue-800">
                How to Use Jeevamrut
              </div>
            </div>
            <div className="text-2xl">{open.usage ? "−" : "+"}</div>
          </button>
          {open.usage && (
            <div className="p-4 text-lg text-gray-700 rounded-lg space-y-2 leading-relaxed">
              <div>• Dilute 1 liter of Jeevamrut in 20 liters of water.</div>
              <div>
                • Apply to soil at the base of paddy plants once every 15 days.
              </div>
              <div>
                • Can also be used as a foliar spray (sprayed on leaves) to
                strengthen plants.
              </div>
              <div>
                • Makes soil alive with microbes, improves root growth, and
                helps plants resist pests naturally.
              </div>
            </div>
          )}

          {/* Tips */}
          <button
            onClick={() => toggle("tips")}
            className="w-full text-left p-4 rounded-xl bg-orange-50 flex justify-between items-center"
            aria-expanded={open.tips}
          >
            <div>
              <div className="text-xl font-bold text-orange-800">Tips</div>
            </div>
            <div className="text-2xl">{open.tips ? "−" : "+"}</div>
          </button>
          {open.tips && (
            <div className="p-4 text-lg text-gray-700 rounded-lg space-y-2 leading-relaxed">
              <div>• Use fresh cow dung and urine for best results.</div>
              <div>• Always stir Jeevamrut gently — don’t shake too hard.</div>
              <div>
                • Make fresh batches every week for continuous soil health.
              </div>
              <div>
                • Avoid using Jeevamrut on very young seedlings — wait until
                they are 10–15 days old.
              </div>
              <div>
                • Combine with other organic practices like compost for best
                effect.
              </div>
            </div>
          )}
        </div>

        {/* Return to Home Button */}
        <div className="mt-6 text-center">
          <Link
            to="/organic"
            className="mt-10 bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold text-lg px-6 py-3 rounded-2xl shadow-md transition-transform transform hover:scale-105"
          >
            ← Back to Organic Practices
          </Link>
        </div>
      </div>
    </div>
  );
}
