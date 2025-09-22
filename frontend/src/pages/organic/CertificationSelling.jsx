import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function CertificationSelling() {
  const [open, setOpen] = useState({
    intro: true,
    benefits: false,
    process: false,
    tips: false,
  });

  const toggle = (key) => setOpen((p) => ({ ...p, [key]: !p[key] }));

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-orange-100 p-8">
      <div className="max-w-4xl mx-auto">
        {/* Top bar */}
        <div className="flex items-center justify-between mb-6">
          <Link
            to="/organic"
            className="inline-block bg-white text-orange-800 font-bold px-4 py-2 rounded-full shadow"
          >
            ← Back
          </Link>
        </div>

        {/* Header */}
        <h1 className="text-4xl sm:text-5xl font-extrabold text-orange-900 mb-4">
          Certification & Direct Selling – Earn More
        </h1>
        <p className="text-lg text-orange-800 mb-6">
          Learn how to get your rice certified as organic and sell directly to
          customers to earn better prices.
        </p>

        {/* Main card */}
        <div className="bg-white rounded-3xl p-6 shadow-2xl space-y-6">
          {/* Intro */}
          <button
            onClick={() => toggle("intro")}
            className="w-full text-left p-4 rounded-xl bg-orange-50 flex justify-between items-center"
            aria-expanded={open.intro}
          >
            <div>
              <div className="text-xl font-bold text-orange-800">
                Why Certification & Direct Selling?
              </div>
            </div>
            <div className="text-2xl">{open.intro ? "−" : "+"}</div>
          </button>
          {open.intro && (
            <div className="p-4 text-lg text-gray-700 rounded-lg">
              Certification proves your rice is organic. Selling directly to
              customers or markets increases your income because there are no
              middlemen taking a share.
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
              <div>• Get better prices for your organic rice.</div>
              <div>• Certification builds trust with buyers.</div>
              <div>• Join farmer groups for shared support and guidance.</div>
            </div>
          )}

          {/* Process */}
          <button
            onClick={() => toggle("process")}
            className="w-full text-left p-4 rounded-xl bg-lime-50 flex justify-between items-center"
            aria-expanded={open.process}
          >
            <div>
              <div className="text-xl font-bold text-lime-800">
                🛠️ Step-by-Step Process
              </div>
            </div>
            <div className="text-2xl">{open.process ? "−" : "+"}</div>
          </button>
          {open.process && (
            <div className="p-4 text-lg text-gray-700 rounded-lg space-y-2">
              <div className="font-semibold">Step 1 — Join a PGS Group</div>
              <div>
                • PGS (Participatory Guarantee System) is a local farmer group
                that helps each other get organic certification.
              </div>

              <div className="font-semibold mt-2">
                Step 2 — Prepare your Farm
              </div>
              <div>
                • Follow organic practices on your field. Keep records of
                compost, organic sprays, and pest control methods.
              </div>

              <div className="font-semibold mt-2">Step 3 — Inspection</div>
              <div>
                • The PGS group members inspect each other’s farms to ensure
                rules are followed. This is simpler than government
                certification.
              </div>

              <div className="font-semibold mt-2">Step 4 — Certification</div>
              <div>
                • Once approved, you get an official PGS certificate showing
                your rice is organic.
              </div>

              <div className="font-semibold mt-2">
                Step 5 — Selling Directly
              </div>
              <div>
                • Sell rice at local organic markets, online platforms, or
                directly to shops and customers. You keep most of the profit.
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
              <div className="text-xl font-bold text-blue-800"> Tips</div>
            </div>
            <div className="text-2xl">{open.tips ? "−" : "+"}</div>
          </button>
          {open.tips && (
            <div className="p-4 text-lg text-gray-700 rounded-lg space-y-2">
              <div>• Keep simple records of your organic practices.</div>
              <div>• Join farmer networks to share buyers and knowledge.</div>
              <div>
                • Promote your rice as healthy & chemical-free to attract
                customers.
              </div>
            </div>
          )}
        </div>

        {/* Bottom note */}
        <div className="mt-6 text-center text-gray-700">
          <div className="font-semibold mb-1">Need more help?</div>
          <div>
            Contact your local Krishi Vigyan Kendra (KVK) or the Maharashtra
            agriculture helpline <strong>020-2612 3648</strong> for guidance.
          </div>
        </div>
      </div>
    </div>
  );
}
