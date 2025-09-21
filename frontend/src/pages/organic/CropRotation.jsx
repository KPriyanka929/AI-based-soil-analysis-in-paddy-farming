import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function CropRotation() {
  const [open, setOpen] = useState({
    intro: true,
    benefits: false,
    plan: false,
    examples: false,
    checklist: false,
    mistakes: false,
    tips: false,
  });

  const toggle = (key) => setOpen((p) => ({ ...p, [key]: !p[key] }));

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100 p-8">
      <div className="max-w-4xl mx-auto">
        {/* Top bar */}
        <div className="flex items-center justify-between mb-6">
          <Link
            to="/organic-farming"
            className="inline-block bg-white text-green-800 font-bold px-4 py-2 rounded-full shadow"
          >
            ← Back
          </Link>

          <div className="flex gap-3">
            <button
              onClick={() => window.print()}
              className="bg-green-700 text-white px-4 py-2 rounded-lg font-bold shadow"
            >
              🖨️ Print Checklist
            </button>
            <a
              href="tel:18001801551"
              className="bg-yellow-600 text-white px-4 py-2 rounded-lg font-bold shadow"
            >
              📞 Call Helpline
            </a>
          </div>
        </div>

        {/* Header */}
        <h1 className="text-4xl sm:text-5xl font-extrabold text-green-900 mb-2">
          🌱 Crop Rotation — Simple Practical Guide
        </h1>
        <p className="text-lg text-green-800 mb-6">
          Easy steps and examples for paddy farmers to keep the soil healthy, reduce pests,
          and get better yield over time.
        </p>

        {/* Main card */}
        <div className="bg-white rounded-3xl p-6 shadow-2xl space-y-6">
          {/* Intro */}
          <button
            onClick={() => toggle("intro")}
            className="w-full text-left p-4 rounded-xl bg-green-50 flex justify-between items-center"
            aria-expanded={open.intro}
          >
            <div>
              <div className="text-xl font-bold text-green-800">🟢 What is Crop Rotation?</div>
              <div className="text-sm text-green-700">Short and clear</div>
            </div>
            <div className="text-2xl">{open.intro ? "−" : "+"}</div>
          </button>
          {open.intro && (
            <div className="p-4 text-lg text-gray-700 leading-relaxed rounded-lg">
              <strong>Crop rotation</strong> means changing the crop you grow on the same field
              each season or year. Instead of sowing the same crop again and again (monocropping),
              you rotate between types (e.g., rice → pulse → oilseed or green manures). This gives
              the soil rest, returns nutrients, and breaks pest and disease cycles.
            </div>
          )}

          {/* Benefits */}
          <button
            onClick={() => toggle("benefits")}
            className="w-full text-left p-4 rounded-xl bg-yellow-50 flex justify-between items-center"
            aria-expanded={open.benefits}
          >
            <div>
              <div className="text-xl font-bold text-yellow-800">✅ Why it helps (Benefits)</div>
              <div className="text-sm text-yellow-700">Fast summary</div>
            </div>
            <div className="text-2xl">{open.benefits ? "−" : "+"}</div>
          </button>
          {open.benefits && (
            <div className="p-4 text-lg text-gray-700 rounded-lg space-y-3">
              <div>• 🌾 <strong>Better soil fertility</strong> — legumes add nitrogen naturally.</div>
              <div>• 🐛 <strong>Less pests & diseases</strong> — changing crops interrupts pest cycles.</div>
              <div>• 💸 <strong>Lower cost</strong> — less need for chemical fertilizer over time.</div>
              <div>• 🧱 <strong>Better soil structure</strong> — improves water holding and root growth.</div>
            </div>
          )}

          {/* How to plan */}
          <button
            onClick={() => toggle("plan")}
            className="w-full text-left p-4 rounded-xl bg-lime-50 flex justify-between items-center"
            aria-expanded={open.plan}
          >
            <div>
              <div className="text-xl font-bold text-lime-800">🛠️ How to plan (Step-by-step)</div>
              <div className="text-sm text-lime-700">Easy steps to start</div>
            </div>
            <div className="text-2xl">{open.plan ? "−" : "+"}</div>
          </button>
          {open.plan && (
            <div className="p-4 text-lg text-gray-700 rounded-lg space-y-3">
              <div className="font-semibold">Step 1 — Do a soil test</div>
              <div>• Get a simple soil test (N, P, K, pH) to know current soil health.</div>

              <div className="font-semibold mt-2">Step 2 — Choose crops by season & water</div>
              <div>• If you grow paddy in Kharif (rainy season), choose a <strong>legume</strong> or
                <strong> short-duration pulse</strong> for the next season (Rabi).</div>

              <div className="font-semibold mt-2">Step 3 — Add organic matter</div>
              <div>• Apply compost or farmyard manure before sowing the next crop. This helps soil
                fertility and gives better results than only chemicals.</div>

              <div className="font-semibold mt-2">Step 4 — Start small</div>
              <div>• Try rotation on a small field first (1–2 acres). See results, then expand.</div>

              <div className="font-semibold mt-2">Step 5 — Keep records</div>
              <div>• Record which crop was grown, fertilizer used, dates and yield. This helps learn
                what works for your land.</div>
            </div>
          )}

          {/* Examples */}
          <button
            onClick={() => toggle("examples")}
            className="w-full text-left p-4 rounded-xl bg-blue-50 flex justify-between items-center"
            aria-expanded={open.examples}
          >
            <div>
              <div className="text-xl font-bold text-blue-800">📋 Simple rotation examples</div>
              <div className="text-sm text-blue-700">Practical plans for paddy farmers</div>
            </div>
            <div className="text-2xl">{open.examples ? "−" : "+"}</div>
          </button>
          {open.examples && (
            <div className="p-4 text-lg text-gray-700 rounded-lg space-y-4">
              <div className="font-semibold">Example A — 1 year (fast cycle)</div>
              <div>• <strong>Kharif (Jun–Oct): Rice (paddy)</strong></div>
              <div>• <strong>Rabi (Nov–Mar): Mungbean / Blackgram (pulses)</strong> — adds nitrogen, quick crop</div>
              <div>• <strong>Summer (Apr–May): Sesame / Groundnut / Green manure</strong> or short vegetables</div>
              <div>• Then again Kharif: Rice</div>

              <div className="font-semibold mt-3">Example B — 2 year rotation (rest + vegetables)</div>
              <div>Year 1: Rice → Year 2: Legume → Year 3: Vegetables or oilseed → repeat</div>

              <div className="text-sm text-gray-600 mt-2">
                📌 <strong>Why pulses?</strong> Pulses (mung, pigeon pea, blackgram) keep the soil rich in N and
                are low-cost to grow. Green manures (sunhemp, sesbania) are valuable if you can plough them in.
              </div>

              {/* Quick calendar table */}
              <div className="overflow-x-auto mt-4">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr>
                      <th className="p-2 bg-gray-100 rounded-tl-lg">Season</th>
                      <th className="p-2 bg-gray-100">Crop (example)</th>
                      <th className="p-2 bg-gray-100 rounded-tr-lg">Months (approx.)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white">
                      <td className="p-2 border-t">Kharif</td>
                      <td className="p-2 border-t">Rice (paddy)</td>
                      <td className="p-2 border-t">Jun / Jul → Oct / Nov</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="p-2 border-t">Rabi</td>
                      <td className="p-2 border-t">Mung / Blackgram (pulses)</td>
                      <td className="p-2 border-t">Nov / Dec → Mar / Apr</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="p-2 border-t">Summer</td>
                      <td className="p-2 border-t">Sesame / Groundnut / Green manure</td>
                      <td className="p-2 border-t">Apr → May</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Checklist */}
          <button
            onClick={() => toggle("checklist")}
            className="w-full text-left p-4 rounded-xl bg-pink-50 flex justify-between items-center"
            aria-expanded={open.checklist}
          >
            <div>
              <div className="text-xl font-bold text-pink-700">🧾 Farmer Checklist (printable)</div>
              <div className="text-sm text-pink-600">Quick actions you can do today</div>
            </div>
            <div className="text-2xl">{open.checklist ? "−" : "+"}</div>
          </button>
          {open.checklist && (
            <div className="p-4 text-lg text-gray-700 rounded-lg space-y-2">
              <ul className="list-disc ml-5 space-y-1">
                <li>✔️ Take a small soil sample and do a soil test.</li>
                <li>✔️ Choose a small field for trial rotation (1–2 acres).</li>
                <li>✔️ After rice harvest, sow a legume (mung/blackgram).</li>
                <li>✔️ Apply 2–3 tonnes/acre of compost before planting the next crop.</li>
                <li>✔️ Keep simple records: date, crop, fertilizer, yield (in notebook).</li>
                <li>✔️ Talk to local extension worker for seed and market advice.</li>
              </ul>

              <div className="mt-4 flex gap-3">
                <button
                  onClick={() => window.print()}
                  className="bg-green-700 text-white px-4 py-2 rounded-lg font-bold"
                >
                  🖨️ Print / Save
                </button>
                <a
                  href="tel:18001801551"
                  className="bg-yellow-600 text-white px-4 py-2 rounded-lg font-bold"
                >
                  📞 Call for help
                </a>
              </div>
            </div>
          )}

          {/* Common mistakes */}
          <button
            onClick={() => toggle("mistakes")}
            className="w-full text-left p-4 rounded-xl bg-orange-50 flex justify-between items-center"
          >
            <div>
              <div className="text-xl font-bold text-orange-800">⚠️ Common mistakes to avoid</div>
              <div className="text-sm text-orange-700">Practical warnings</div>
            </div>
            <div className="text-2xl">{open.mistakes ? "−" : "+"}</div>
          </button>
          {open.mistakes && (
            <div className="p-4 text-lg text-gray-700 rounded-lg space-y-2">
              <div>• ❌ Don’t rotate to crops that need much more water if water is limited.</div>
              <div>• ❌ Don’t stop adding organic matter (compost) — rotation works best with it.</div>
              <div>• ❌ Don’t switch too many new crops at once — try a small area first.</div>
              <div>• ❌ Avoid planting same family of crops repeatedly (e.g., repeating legumes every season).</div>
            </div>
          )}

          {/* Quick Tips */}
          <button
            onClick={() => toggle("tips")}
            className="w-full text-left p-4 rounded-xl bg-indigo-50 flex justify-between items-center"
          >
            <div>
              <div className="text-xl font-bold text-indigo-800">💡 Quick tips & local notes</div>
              <div className="text-sm text-indigo-700">Short advice</div>
            </div>
            <div className="text-2xl">{open.tips ? "−" : "+"}</div>
          </button>
          {open.tips && (
            <div className="p-4 text-lg text-gray-700 rounded-lg space-y-2">
              <div>• 🔄 Rotate crops every season if possible (Kharif → Rabi → Summer).</div>
              <div>• 🌿 Use green manure (sunhemp, sesbania) if you can — plough it in 25–30 days before sowing next crop.</div>
              <div>• 🧪 Use soil test results to decide if you need phosphorus or potassium, then apply small doses as needed.</div>
              <div>• 📈 Keep records and learn — small improvements each year become large gains in 2–3 years.</div>
              <div className="text-sm text-gray-600 mt-2">
                If you want, we can prepare a custom rotation plan for your district — share your district
                and a photo of the field (use the Soil Analysis option).
              </div>
            </div>
          )}
        </div>

        {/* Bottom note */}
        <div className="mt-6 text-center text-gray-700">
          <div className="font-semibold mb-1">Need more help?</div>
          <div>
            Call the farmer helpline <strong>1800-180-1551</strong> or contact your nearest agriculture
            extension officer for seeds, subsidies and market info.
          </div>
        </div>
      </div>
    </div>
  );
}
