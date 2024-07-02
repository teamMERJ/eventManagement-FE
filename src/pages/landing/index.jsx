import { heroVid } from "../../assets"



const Landing = () => {
  return (
    <div>
      <div>
      <h3>merj</h3>

      <h1>Delightful <br /> events </h1>
      <h1>start here</h1>

      <p>Set up an event page, invite friends and sell tickets. Host a memorable event today.</p>

      <button>Create Your First Event</button>
      </div>

      <div>
        <video autoPlay src={heroVid}></video>
      </div>

    </div>
  )
}

export default Landing