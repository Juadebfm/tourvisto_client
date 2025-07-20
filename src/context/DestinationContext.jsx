import { createContext, useContext, useEffect, useState } from "react";
import { featuredDestinations, handpickedTrips } from "../data/mockData";

const DestinationContext = createContext();

export const DestinationProvider = ({ children }) => {
  // Destination states
  const [destinations, setDestinations] = useState([]);

  // Searched destinations
  const [filteredDestinations, setFilteredDestinations] = useState([]);

  // Search Query
  const [searchQuery, setSearchQuery] = useState("");

  // Category
  const [selectedCategory, setSelectedCategory] = useState("");

  // Loading states
  const [isLoading, setIsLoading] = useState(false);

  // Favorites
  const [favorites, setFavorites] = useState([]);

  // Error
  //   const [error, setError] = useState(false); ***** ES15

  // Initialize destination on mount
  useEffect(() => {
    const allDestinations = [...featuredDestinations, ...handpickedTrips];

    setDestinations(allDestinations);

    setFilteredDestinations(allDestinations);
  }, []);

  // Get all destinations
  const getAllDestinations = () => {
    return destinations;
  };

  // Get featured destinations only
  const getFeaturedDestinations = () => {
    return featuredDestinations;
  };

  // Get handpicked trips
  const getHandpickedTrips = () => {
    return handpickedTrips;
  };

  //   const getDestinationById = (id) => {
  //   let foundDestination = null;

  //   destinations.forEach(destination => {
  //     if (destination.id == id) {
  //       foundDestination = destination;
  //     }
  //   });

  //   return foundDestination;
  // };

  //   const getDestinationById = (id) => {
  //   const numberId = parseInt(id);  // Make sure it's a number

  //   for (let i = 0; i < destinations.length; i++) {
  //     if (destinations[i].id === numberId) {
  //       return destinations[i];  // Found it!
  //     }
  //   }

  //   return null;  // Didn't find it
  // };

  // Get destinations by id
  const getDestinationById = (id) => {
    return destinations.find((dest) => dest.id === parseInt(id));
  };

  // Filter destinations by category
  const getDestinationsByCategory = (category) => {
    // if(!category) return destinations
    if (!category) {
      return destinations;
    }

    return destinations.filter(
      (dest) =>
        dest.categories?.includes(category) || dest.category === category
    );
  };

  const value = {
    // Data
    destinations,
    filteredDestinations,
    isLoading,
    selectedCategory,
    searchQuery,

    //setters
    setSearchQuery,
    setSelectedCategory,
    setIsLoading,

    // Core functions
    getAllDestinations,
    getFeaturedDestinations,
    getHandpickedTrips,
    getDestinationById,

    // Filter
    getDestinationsByCategory,
  };

  return (
    <DestinationContext.Provider value={value}>
      {children}
    </DestinationContext.Provider>
  );
};

export const useDestination = () => {
  const context = useContext(DestinationContext);
  if (!context) {
    throw new Error(
      "useDestination must be used within a Destination Provider"
    );
  }
  return context;
};
