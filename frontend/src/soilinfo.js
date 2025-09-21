// src/soilInfo.js

const soilInfo = {
  alluvial: {
    name: "Alluvial Soil",
    issues: [
      "Poor water retention if sandy",
      "Drainage issues if clayey",
    ],
    solutions: {
      sandy: {
        problem: "Too Sandy (poor water retention)",
        solution:
          "Add organic matter and compost to improve moisture-holding capacity.",
        recommendation: [
          "Kissan Organic Vermicompost",
          "Amrut Vermi Compost",
        ],
        action:
          "Apply 1–2 tons per acre before sowing and mix well into the soil.",
        irrigation:
          "For sandy soil, more frequent irrigation is required. Use drip irrigation systems (e.g., Netafim Drip Kits, Jain Irrigation Systems).",
      },
      clayey: {
        problem: "Too Clayey (poor drainage)",
        solution:
          "Improve drainage and prevent waterlogging by adding sand or organic matter to increase soil porosity.",
        recommendation: [
          "AgriBio Soil Conditioner",
          "Kisan Organic Sand",
        ],
        action:
          "Apply 1–1.5 tons per acre before sowing and mix well into the soil.",
      },
    },
  },

  black: {
    name: "Black Soil (Regur Soil)",
    issues: [
      "Poor aeration due to compaction",
      "Becomes too hard when dry",
      "Waterlogging due to excessive clay",
    ],
    solutions: {
      compaction: {
        problem: "Poor Aeration (Compaction)",
        solution:
          "Use organic matter or bio-enzyme products to break compacted soil.",
        recommendation: ["Biofix Soil Conditioner", "Agrozyme"],
        action:
          "Apply 500–700 ml per acre of bio-enzyme solution mixed with water, before planting.",
      },
      dry: {
        problem: "Too Hard When Dry",
        solution:
          "Add organic compost to improve soil structure and keep it loose.",
        recommendation: ["Amrut Compost", "Indo-Farm Organic Compost"],
        action:
          "Apply 2–3 tons per acre before sowing to increase fertility and moisture retention.",
      },
      waterlogging: {
        problem: "Waterlogging",
        solution:
          "Create drainage channels or install subsurface drainage tiles.",
        recommendation: ["Usha Drains", "Local drainage products"],
        action:
          "Lay drainage tiles 2 feet apart to prevent water stagnation.",
      },
    },
  },

  red: {
    name: "Red Soil",
    issues: ["Low water retention", "Low fertility"],
    solutions: {
      waterRetention: {
        problem: "Low Water Retention",
        solution: "Add organic matter to improve water-holding capacity.",
        recommendation: [
          "Kissan Organic Vermicompost",
          "Amrut Vermi Compost",
        ],
        action:
          "Apply 2–3 tons per acre before sowing and incorporate into soil.",
      },
      fertility: {
        problem: "Low Fertility",
        solution:
          "Add organic fertilizers and micronutrient supplements.",
        recommendation: [
          "Rallis India NPK (20-20-20)",
          "Coromandel NPK",
          "MicroMix micronutrient mix",
        ],
        action:
          "Apply 100–150 kg of NPK and 5–10 kg micronutrients per acre before sowing.",
      },
      moisture: {
        problem: "Moisture Loss",
        solution: "Use mulching to retain soil moisture.",
        recommendation: [
          "Kisan Plastic Mulch",
          "Jain Irrigation Mulching Sheets",
        ],
        action:
          "Spread mulch in the field after sowing to reduce water loss.",
      },
    },
  },

  clay: {
    name: "Clay Soil",
    issues: ["Waterlogging", "Poor aeration", "Root suffocation"],
    solutions: {
      drainage: {
        problem: "Poor Drainage & Waterlogging",
        solution:
          "Improve drainage by land prep and adding sand/compost.",
        recommendation: [
          "AgriBio Soil Conditioner",
          "Kisan Organic Sand",
        ],
        action:
          "Apply 1–1.5 tons per acre before planting, then till well.",
      },
      aeration: {
        problem: "Poor Aeration",
        solution:
          "Use bio-enzyme products to improve soil structure.",
        recommendation: ["Biofix Soil Conditioner", "Agrozyme"],
        action:
          "Spray 500–700 ml per acre mixed with water for root respiration.",
      },
      compaction: {
        problem: "Soil Compaction",
        solution:
          "Use a rotary tiller to break compacted layers and aerate soil.",
        recommendation: [
          "Shaktiman Rotary Tiller",
          "Mahindra Rotary Tiller",
        ],
        action:
          "Till field 2–3 times before planting to create a loose seedbed.",
      },
      waterManagement: {
        problem: "Water Management",
        solution:
          "Use efficient irrigation to prevent waterlogging.",
        recommendation: [
          "Netafim Drip Irrigation",
          "Jain Drip Irrigation",
        ],
        action:
          "Set up a drip irrigation system customized to your field.",
      },
    },
  },
};

export default soilInfo;
