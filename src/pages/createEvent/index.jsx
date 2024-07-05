import { invite2Img } from "../../assets"


const CreateEvent = () => {
  return (
    <div className="mx-auto pt-5 px-40 bg-[#FEF0FE] text-white shadow-lg">
      <div className="flex">
        <div className="w-1/3 p-2">
          <div className="bg-[rgba(231,238,234,0.83)] rounded-lg overflow-hidden">
            <img src={invite2Img} alt="Flier" className="w-full h-full object-cover" />
          </div>
        </div>

        <div className="w-2/3 pl-8 pr-10 m-20 ">

          <label className="block text-lg text-black">Event Name</label>
          <input
            type="text"
            placeholder="Type the name of your event here"
            className="w-full border-[#8f3e3e] border-2 text-black px-4 py-2 mb-4 rounded-lg"
          />

          <div className="flex justify-between items-center mb-4">
            <div className="w-1/2 pr-2">
              <label className="block text-black">Date</label>
              <input
                type="datetime-local"
                className="w-full border-[#8f3e3e] border-2 text-black px-4 py-2 mb-4 rounded-lg"
              />
            </div>
            <div className="w-1/2 pl-2">
              <label className="block text-black">Price</label>
              <input
                type="text"
                placeholder="GHC"
                className="w-full border-[#8f3e3e] border-2 text-black px-4 py-2 mb-4 rounded-lg"
              />
            </div>
          </div>
          <label className="block text-lg text-black">Location</label>
          <input
            type="text"
            placeholder="Add Event Location"
            className="w-full border-[#8f3e3e] border-2 text-black px-4 py-2 mb-4 rounded-lg"
          />
          <textarea
            placeholder="Add Description"
            className="w-full  border-[#8f3e3e] border-2 text-black px-4 py-2 mb-4 rounded-lg"
          ></textarea>
          <div className="flex flex-col mb-4">
            {/* <div className="w-1/3 mb-8">
              <label className="block text-black">Price</label>
              <input
                type="text"
                placeholder="GHC"
                className="w-full  border-[#8f3e3e] border-2 text-black px-4 py-2 rounded-lg"
              />
            </div> */}
            <form class="flex items-center space-x-6">
              <div class="shrink-0">
                <img class="h-16 w-16 object-cover rounded-full" src="" alt="Current flyer" />
              </div>
              <label class="block">
                <span class="sr-only">Upload flyer</span>
                <input type="file" class="block w-full text-sm text-slate-500
      file:mr-4 file:py-2 file:px-4
      file:rounded-full file:border-0
      file:text-sm file:font-semibold
      file:bg-violet-50 file:text-violet-700
      hover:file:bg-violet-100
    "/>
              </label>
            </form>
          </div>
          <button
            className="w-1/2 bg-[#8f3e3e] text-white px-4 py-2 rounded-lg shadow-md hover:bg-[#c29b46] transition duration-300"
          >
            Create Event
          </button>

          <h5><Link >Manage Events</Link></h5>
        </div>
      </div>
    </div>
  )
}

export default CreateEvent