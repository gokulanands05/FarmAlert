const marketStatus = {
  Erode: {
    Tomato: {
      demand: [
        "Erode Central Market",
        "Perundurai Vegetable Market"
      ],
      oversupply: [
        "Gobichettipalayam Market",
        "Sathyamangalam Market"
      ]
    },
    Onion: {
      demand: ["Erode Central Market"],
      oversupply: ["Bhavani Market"]
    },
    "Green Chilli": {
      demand: ["Sathyamangalam Market"],
      oversupply: ["Gobichettipalayam Market"]
    },
    Groundnut: {
      demand: ["Perundurai Market"],
      oversupply: ["Bhavani Market"]
    },
    Turmeric: {
      demand: [
        "Erode Turmeric Regulated Market",
        "Kodumudi Market"
      ],
      oversupply: []
    }
  },

  Nagapattinam: {
    Tomato: {
      demand: ["Nagapattinam Main Market"],
      oversupply: ["Vedaranyam Market"]
    },
    Onion: {
      demand: ["Kilvelur Market"],
      oversupply: ["Nagapattinam Main Market"]
    },
    "Green Chilli": {
      demand: ["Thirukkuvalai Market"],
      oversupply: []
    },
    Groundnut: {
      demand: ["Velankanni Market"],
      oversupply: ["Nagapattinam Market"]
    },
    Turmeric: {
      demand: ["Nagapattinam Market"],
      oversupply: []
    }
  }
};

export default marketStatus;
