import React, { useState } from "react";
import './App.css'

const serviceGroups = {
  "Doctor's Procedures": [
    "Doll arms",
    "Mesolipotherapy",
    "HIKO Non - Surgical Noselift",
    "Alartox",
    "Vagifirm",
    "Non - Surgical Butt lift (BBL)",
    "Blepharoplasty",
    "Ultra V lift",
    "Vivre Lift protocol",
    "Time machine face lift (Cogs Facelift)",
    "Subcision Acne Scars",
    "TCA Cross",
    "Pimple Injection",
    "Intralesional Corticosteroid injection",
    "Keloid injection",
    "Sclerotherapy"
  ],
  "Laser Hair Removal": [
    "Underarms",
    "Half arms",
    "Full arms",
    "Fore arm",
    "Half legs",
    "Full legs",
    "Thigh",
    "Face",
    "Bikini",
    "Brazilian",
    "Chest",
    "Back",
    "Upper lip",
    "Chin",
    "Beard"
  ],
  "Dermal Fillers": [
    "Noselift",
    "Lip Augmentation",
    "Jawline Sculpting",
    "Nasolabial Folds",
    "Forehead Augmentation"
  ],
  "PRP & Hair Therapy": [
    "PRP (Platelet Rich Plasma)",
    "Hair Regrowth therapy",
    "Vampire Facial"
  ],
  "Botox & Neuromodulators": [
    "Botox Neuromodulators",
    "Wrinkle Management",
    "Sweatox",
    "Muscle Reduction",
    "Migraine Treatment",
    "Tear Through",
    "Deep wrinkles",
    "Eye bags",
    "Cheeks"
  ],
  "Thread Lift": [
    "Mono",
    "Double Twist/Tornado",
    "Cogs",
    "Happy Lift",
    "Fox Eye"
  ],
  "Peels & Facials": [
    "Clinical Chemical Peel",
    "Spanish peel",
    "Korean peel",
    "TCA body peel",
    "Underarm whitening peel",
    "Salicylic Acid peel",
    "V premier Resurfacing Facial",
    "V contura Facial",
    "Acnelan plus combo peel",
    "Madonna's black Carpet",
    "Diamond peel",
    "Korean Glow Micropeel",
    "Korean Glow Macropeel",
    "Oxygeneo korean glass skin"
  ],
  "Minor Skin Procedures": [
    "Syringoma",
    "Mole removal",
    "Warts",
    "Corns and Calluses",
    "Skin Tags",
    "Xanthelasma",
    "Milia"
  ],
  "IV Infusion Therapy": [
    "Porcelain Push (Glutathione IVP)",
    "Gold drip",
    "Titanium drip",
    "White gold drip",
    "Cinderella drip",
    "Energy booster",
    "L-carnatine",
    "Alpha Lipoic Acid"
  ],
  "Pico White Laser & Pigment": [
    "Pico White - laser",
    "Melasma",
    "Dark undereyes",
    "Full face rejuvenation",
    "Birthmark",
    "Dark Underarms",
    "Age spots/Freckles",
    "Tattoo Removal",
    "Lush Lips"
  ],
  "CO2 Laser": [
    "SMAXEL: The smartest CO2 laser",
    "Large pores",
    "Stretch marks",
    "Non-vaginal tightening and Rejuvenation"
  ],
  "Body Contouring & Skin Tightening": [
    "Refit Multipolar RF with Endermology",
    "Dermapoint - Collagen Induction Therapy",
    "PDT - Photo Dynamic Therapy",
    "BTL Elixis Skin tightening",
    "Weight Loss Management",
    "Sexy pen",
    "BTL Elixis - Skin tightening",
    "Viethera (HIFU) - Body Slimming",
    "Mesolipotherapy"
  ]
};

export default function ServiceDropdown() {
  const [selectedGroup, setSelectedGroup] = useState("");
  const [selectedService, setSelectedService] = useState("");

  const groupNames = Object.keys(serviceGroups);
  const services = selectedGroup ? serviceGroups[selectedGroup] : [];

  return (
    <div>
      <label style={{ display: "block", marginBottom: 8 , marginTop : 10 }}>
        Choose a category:
      </label>
      <select
        value={selectedGroup}
        onChange={e => {
          setSelectedGroup(e.target.value);
          setSelectedService(""); // Reset service when group changes
        }}
        style={{ padding: 10, width: "100%", marginBottom: 16 }}
      >
        <option value="">-- Select a category --</option>
        {groupNames.map(group => (
          <option key={group} value={group}>{group}</option>
        ))}
      </select>

      <label style={{ display: "block", marginBottom: 8 }}>
        Choose a service:
      </label>
      <select
        value={selectedService}
        onChange={e => setSelectedService(e.target.value)}
        style={{ padding: 8, width: "100%" }}
        disabled={!selectedGroup}
      >
        <option value="">-- Select a service --</option>
        {services.map(service => (
          <option key={service} value={service}>{service}</option>
        ))}
      </select>
    </div>
  );
}