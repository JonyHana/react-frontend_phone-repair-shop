const FourthSection = () => {
  return (
    <section className="py-16 bg-neutral-900">
        <div className="py-8 px-4 mx-auto max-w-screen-md">
            <h3 className="mb-6 text-3xl tracking-tight font-bold text-center text-white">Have any questions? Need a repair? Let us know!</h3>
            <form action="#" className="space-y-8">
                <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-white">Your Email</label>
                    <input type="email" id="email" className="text-sm rounded-sm block w-full p-2.5 bg-gray-700 text-white" placeholder="example@mail.com" required />
                </div>
                <div>
                    <label htmlFor="subject" className="block mb-2 text-sm font-medium text-white">Subject</label>
                    <input type="text" id="subject" className="text-sm rounded-sm block w-full p-2.5 bg-gray-700 text-white" placeholder="Let us know how we can help you" required />
                </div>
                <div>
                    <label htmlFor="message" className="block mb-2 text-sm font-medium text-white">Your Message</label>
                    <textarea id="message" rows={6} className="text-sm rounded-sm block w-full p-2.5 bg-gray-700 text-white" placeholder="Leave a comment..."></textarea>
                </div>
                <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-green-700 sm:w-fit hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Send message</button>
            </form>
        </div>
    </section>
  )
}

export default FourthSection