const Hero = () => {
  return (
    <section className="relative h-screen">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/hero.svg')" }}
      >
        {/* // Overlay of white */}
        <div className="absolute inset-0 bg-gradient-to-r from-white to-transparent"></div>

        <div className="max-w-7xl top-[25%] relative z-10  mx-auto p-0 md:p-14 lg:p-0">
          <div className="w-full lg:w-[45%] px-6 lg:px-0">
            <h1 className="text-5xl lg:text-7xl text-t_black font-bold mb-4 leading-tight">
              Plan Your Trip with Ease
            </h1>
            <p className="text-lg mb-10 leading-8">
              Customize your travel itinerary in minutes—pick your destination,
              set your preferences, and explore with confidence.
            </p>
            <button className="bg-t_blue text-white hover:bg-t_blue/90 text-lg shadow-lg hover:shadow-xl transform hover:scale-105 duration-300 ease-in-out px-10 py-5 rounded-lg min-w-full lg:min-w-[209px]">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
