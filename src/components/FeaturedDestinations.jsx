import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDestination } from "../context/DestinationContext";

const FeaturedDestinations = () => {
  // Helps us to go (programmtically) from one page to another
  const navigate = useNavigate();
  const { getFeaturedDestinations } = useDestination();

  // Get featured destination
  const featuredDestinations = getFeaturedDestinations();

  const handleCardClick = (destinationId) => {
    navigate(`/destination/${destinationId}`);
  };

  return (
    <section className="py-20 px-32 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div>
          <h2 className="font-bold text-4xl leading-8 mb-3">
            Featured Travel Destinations
          </h2>
          <p className="text-lg leading-6 text-[#7F7E83]">
            Check out some of the best places you can visit around the world.
          </p>
        </div>

        {/* Main grid */}
        <div className="mt-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-[100px]">
            {/* Large featured card - LEFT SIDE */}
            <div
              className="lg:col-span-8 relative rounded-2xl overflow-hidden cursor-pointer shadow-lg
            
            "
              onClick={() => handleCardClick(featuredDestinations[0].id)}
            >
              <img
                src={featuredDestinations[0].image}
                alt={featuredDestinations[0].name}
                className="w-full h-full object-cover hover:scale-105 transition-all duration-300"
              />
              <div className="absolute top-4 left-4 bg-white rounded-full px-3 py-1">
                {featuredDestinations[0].rating}
              </div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-2xl font-bold">
                  {featuredDestinations[0].name}
                </h3>
                <p>{featuredDestinations[0].activities} Activities</p>
              </div>
            </div>

            {/* Small cards - RIGHT SIDE */}
            <div className="lg:col-span-4 flex flex-col gap-4">
              {featuredDestinations.slice(1, 4).map((destination) => (
                <div
                  key={destination.id}
                  className="relative rounded-2xl overflow-hidden cursor-pointer shadow-lg flex-1"
                  onClick={() => handleCardClick(destination.id)}
                >
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-full object-cover hover:scale-105 transition-all duration-300"
                  />
                  <div className="absolute top-3 left-3 bg-white rounded-full px-2 py-1 text-sm">
                    {destination.rating}
                  </div>
                  <div className="absolute bottom-3 left-3 text-white">
                    <h4 className="font-bold">{destination.name}</h4>
                    <p className="text-sm">
                      {destination.activities} Activities
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedDestinations;
