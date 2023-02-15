const ThirdSection = () => {
  return (
    <section className="md:h-screen bg-[url('/thirdsection-background2.jpg')] bg-no-repeat bg-fixed bg-center bg-cover">
        <div className="max-w-[800px] sm:h-full p-6 mx-auto flex flex-col justify-center align-middle items-center gap-7">
            <h2 className="text-4xl font-semibold">Frequently Asked Questions 🤔</h2>
            <div>
                <h5 className="text-xl font-semibold">💬 "What is a digitizer?"</h5>
                <h5 className="text-xl font-semibold">"If your device fails to respond to touch, it's time for a new digitizer. The digitizer is an electrical mechanism that is fused with the glass screen; so if you need to replace the digitizer, you'll have to replace the glass, too, and vice versa."</h5>
            </div>
            <div>
                <h5 className="text-xl font-semibold">💬 "Is Rice Effective for Water Damaged Phones?"</h5>
                <h5 className="text-xl font-semibold">"Despite what you’ve heard, putting your phone in rice actually does more harm than good. Dust, starch and small grains of uncooked rice can get lodged in the mechanisms of your phone."</h5>
            </div>
            <div>
                <h5 className="text-xl font-semibold">💬 "When should a phone's battery be replaced?"</h5>
                <h5 className="text-xl font-semibold">"The typical cell phone battery begins to deteriorate after 400 charging cycles. The average user will reach this point after 1-2 years of regular usage."</h5>
            </div>
        </div>
    </section>
  )
}

export default ThirdSection