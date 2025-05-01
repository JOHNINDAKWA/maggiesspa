import React from "react";
import { Link } from "react-router-dom"; // Ensure you're using React Router


const todos = [
  { title: "Freshen Up", description: "Take a warm shower or sponge bath." },
  { title: "Set Up the Room", description: "Choose a quiet, private space for the massage." },
  { title: "Prepare Clean Linen", description: "Have fresh sheets and towels ready." },
  { title: "Adjust Temperature", description: "Ensure a cozy, comfortable room temperature." },
  { title: "Use the Restroom", description: "Empty your bladder beforehand for comfort." },
  { title: "Wear Comfortable Clothing", description: "Opt for loose, easy-to-remove attire." },
  { title: "Minimize Distractions", description: "Silence your phone and inform family members." },
  { title: "Have a Support Pillow", description: "Keep one nearby for extra comfort." },
  { title: "Stay Hydrated", description: "Drink water before and after the session." },
  { title: "Eat Lightly", description: "Avoid heavy meals right before the massage." },
  { title: "Communicate Needs", description: "Share any aches or concerns for a personalized session." },
  { title: "Create a Relaxing Atmosphere", description: "Play soft music, dim lights, or light a candle." },
  { title: "Arrange Childcare", description: "Ensure someone looks after your kids for an uninterrupted session." }
];


const spaTodos = [
  { title: "Book in Advance", description: "Schedule your appointment ahead of time to secure your preferred slot." },
  { title: "Arrive Early", description: "Arrive at least 15 minutes before your appointment to relax and prepare." },
  { title: "Stay Hydrated", description: "Drink plenty of water before and after your treatment for better results." },
  { title: "Wear Comfortable Clothing", description: "Opt for loose, easy-to-remove attire to maximize comfort." },
  { title: "Avoid Heavy Meals", description: "Eat lightly before your session to avoid discomfort during the treatment." },
  { title: "Turn Off Your Phone", description: "Keep distractions away by silencing or switching off your phone." },
  { title: "Communicate Preferences", description: "Let your therapist know about pressure preferences or any sensitivities." },
  { title: "Enjoy the Experience", description: "Relax your mind and body—this is your time to unwind and recharge." }
];

const SuccessMessage = () => {

  return (
    <div className="wrapper">
      {/* Success Message Section */}
      <div className="success-container">
        <div className="success-msg">✅ Appointment Successfully Booked!</div>
        <p className="success-text">
          Thank you for booking with us! You will receive a confirmation email
          soon.
        </p>
        <Link to="/" className="home-btn">
          Go to Home
        </Link>
      </div>

      {/* To-Do List Section */}
      <div className="todo-container">
      <div className="overlay"></div> {/* Dark overlay */}
      <div className="todo-content">
        <h2>📝 To-Do List for a Pregnancy Massage Client (Home Service)</h2>
        <p>
          To ensure a smooth, relaxing, and effective prenatal massage session,
          please prepare the following before my arrival:
        </p>

        <div className="todo-grid">
          {todos.map((todo, index) => (
            <div className="todo-item" key={index}>
              <div className="todo-number">{index + 1}</div>
              <div className="todo-text">
                <strong>{todo.title}</strong>
                <p>{todo.description}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="footer-note">
          Looking forward to giving you a deeply relaxing and beneficial
          prenatal massage! 💆‍♀️
        </p>
      </div>
    </div>



    <div className="spa-todo-container">
      <div className="spa-todo-content">
        <h2>🌿 To-Do List Before & During Your Spa Treatment</h2>
        <p>
          Follow these simple steps to make the most of your spa experience.
        </p>

        <div className="spa-todo-grid">
          {spaTodos.map((todo, index) => (
            <div className="spa-todo-item" key={index}>
              <div className="spa-todo-number">{index + 1}</div>
              <div className="spa-todo-text">
                <strong>{todo.title}</strong>
                <p>{todo.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
};

export default SuccessMessage;
