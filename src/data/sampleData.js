// src/data/sampleData.js
import catfood from '../assets/cat_food1.png';
import dogfood from '../assets/dog_food1.png';
import groomserv from '../assets/grooming_service.png';
import vetcheck from '../assets/vet_checkup_service.png';
import dogtreat from '../assets/dog_treat1.png';



export const productsAndServicesData = [
    {
      id: 1,
      name: "Salmon & Whitefish Paté (Premium Cat Food)",
      description: "Grain-free, high-protein wet food for adult cats. Supports healthy digestion and shiny coat.",
      price: 450,
      image: catfood, // Replace with actual path to your image
      type: "product", // Crucial for filtering
    },
    {
      id: 2,
      name: "Free-Range Chicken Dry Food (Dog)",
      description: "Hypoallergenic kibble with ancient grains. Ideal for sensitive stomachs.",
      price: 350,
      image: dogfood, // Replace with actual path
      type: "product",
    },
    {
      id: 3,
      name: "Complete Pet Grooming Package",
      description: "Includes bath, de-shedding, nail trimming, ear cleaning, and paw wax. Suitable for all dog breeds.",
      price: 900,
      image: groomserv, // Replace with actual path
      type: "service", // Crucial for filtering
    },
    {
      id: 4,
      name: "Veterinary Wellness Check-up",
      description: "Annual comprehensive health examination, vaccination review, and nutritional advice for cats and dogs.",
      price: 999,
      image: vetcheck, // Replace with actual path
      type: "service",
    },
    {
      id: 5,
      name: "Organic Dental Chews (Dog Treat)",
      description: "All-natural dental chews to promote oral health and fresh breath.",
      price: 80,
      image: dogtreat, // Replace with actual path
      type: "product",
    },
    // Add more products and services as needed
  ];