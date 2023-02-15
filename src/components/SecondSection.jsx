const SecondSection = () => {
  return (
    <section id='about_us' className="py-16 bg-neutral-800">
      <div className="max-w-[800px] mx-auto p-6 text-center">
        <h1 className="text-6xl mx-auto w-fit">Why Trust Us?</h1>
        <div className="mt-8">
          <img className="mx-auto mb-4" src="/apple-logo-white.png" width={128}></img>
          <h3 className="text-3xl font-semibold mx-auto w-fit">Apple Authorized Independent Repair Provider</h3>
          <p className="text-xl mt-4">We're here to help. Apple-certified repairs are performed by trusted experts who use genuine Apple parts. Only Apple-certified repairs are backed by Apple. Whichever option you choose, you'll get your product back working exactly the way it should.</p>
        </div>
        <div className="mt-8">
          <img className="mx-auto mb-4" src="/android-logo-robot.png" width={128}></img>
          <h3 className="text-3xl font-semibold mx-auto w-fit">Top Rated Android Repair in the City</h3>
          <p className="text-xl mt-4">You heard that correctly. We've been awareded the best Android repair shop by the city of React. Awarded "Best Android Repair Shop 2022" by the mayor of React.</p>
        </div>
      </div>
    </section>
  )
}

export default SecondSection