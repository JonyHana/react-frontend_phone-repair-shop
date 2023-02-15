import Navbar from "./Navbar"

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-[url('/herosection-background2.jpg')] lg:bg-[url('/herosection-background1.jpg')] bg-no-repeat bg-fixed bg-center bg-cover">
      <Navbar />
      <div className="max-w-[800px] mx-auto p-6 md:mt-48 bg-neutral-900 bg-opacity-50 border border-neutral-900 border-opacity-0 rounded-lg text-center">
        <h1 className="text-6xl font-semibold mx-auto w-fit">📱 Phone Repair at Its Best</h1>
        <p className="text-2xl mx-auto w-fit mt-4">All of our cell phone repair services actually face a rigorous 50-Point Inspection, which includes customer reviews, history, complaints, ratings, satisfaction, trust, cost and general excellence. You deserve only the best!</p>
      </div>
    </section>
  )
}

export default HeroSection