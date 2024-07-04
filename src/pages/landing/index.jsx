import { heroVid } from "../../assets"

const Landing = () => {
  return (

    <div className="h-screen bg-[rgba(231,234,238,0.83)] px-24 flex items-center justify-between">
      <div className="flex-1 pl-24 -mt-10">
        <h3 className="text-lg text-gray-600 mb-2">merj</h3>
        <h1 className="text-6xl font-semibold text-gray-900 leading-tight">
          Delightful <br />
          events <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-orange-500"> <br />start here.</span>
        </h1>
        <p className="text-lg text-gray-600 mt-4">
          Set up an event page, invite friends and <br />sell tickets. Host a memorable event <br />today.
        </p>
        <button className="mt-6 px-6 py-3 bg-black text-white rounded-lg shadow-md hover:bg-gray-800 transition duration-300">
          <a href="/events/create">Create Your First Event</a>
        </button>
      </div>

      <div className="flex-1 flex items-center justify-center">
        <div className="relative w-full max-w-2xl aspect-square rounded-full overflow-hidden">
          <video className="w-full h-full object-cover" autoPlay loop muted src={heroVid}></video>
        </div>
      </div>
    </div>

  )
}

export default Landing