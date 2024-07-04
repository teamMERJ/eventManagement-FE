import { useState } from "react";

const EventSearchBar = ({ onSearch }) => {
  const [eventName, setEventName] = useState('');
  const [price, setPrice] = useState('');
  const [location, setLocation] = useState('');

  const handleSearch = (event) => {
    event.preventDefault();
    onSearch({ eventName, price, location });
  };

  return (
    <form onSubmit={handleSearch} className="w-1/4 bg-white p-4 shadow-md rounded-lg grid grid-cols-2 gap-4">
      <div>
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Event Name:
          <input
            type="text"
            value={eventName}
            onChange={(event) => setEventName(event.target.value)}
            placeholder="Search by name"
            className="mt-1 p-2 border border-gray-300 rounded w-full"
          />
        </label>
      </div>
      <div>
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Price:
          <input
            type="number"
            value={price}
            onChange={(event) => setPrice(event.target.value)}
            placeholder="Search by price"
            className="mt-1 p-2 border border-gray-300 rounded w-full"
          />
        </label>
      </div>
      <div>
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Location:
          <input
            type="text"
            value={location}
            onChange={(event) => setLocation(event.target.value)}
            placeholder="Search by location"
            className="mt-1 p-2 border border-gray-300 rounded w-full"
          />
        </label>
      </div>
      <div className="flex items-end">
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full">
          Search
        </button>
      </div>
    </form>
  );
}

export default EventSearchBar;










// import { useState } from "react";

// const EventSearchBar = () => {
//   const [eventName, setEventName] = useState('');
//   const [price, setPrice] = useState('');
//   const [location, setLocation] = useState('');

//   const handleSearch = (event) => {
//     event.preventDefault();
    
//   };

//   return (
//     <form onSubmit={handleSearch}>
//       <div>
//         <label>
//           Event Name:
//           <input
//             type="text"
//             value={eventName}
//             onChange={(event) => setEventName(event.target.value)}
//             placeholder="Search by name"
//           />
//         </label>
//       </div>
//       <div>
//         <label>
//           Price:
//           <input
//             type="number"
//             value={price}
//             onChange={(event) => setPrice(event.target.value)}
//             placeholder="Search by price"
//           />
//         </label>
//       </div>
//       <div>
//         <label>
//           Location:
//           <input
//             type="text"
//             value={location}
//             onChange={(event) => setLocation(event.target.value)}
//             placeholder="Search by location"
//           />
//         </label>
//       </div>
//       <button type="submit">Search</button>
//     </form>
//   );
// }

// export default EventSearchBar


