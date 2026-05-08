import React, { useState } from "react";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [queryType, setQueryType] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("First Name:", firstName);
    console.log("Last Name:", lastName);
    console.log("Email:", email);
    console.log("Query Type:", queryType);
    console.log("Message:", message);
  };

  return (
    <div>
      <h2 className="bg-red-700">Contact Us</h2>

      <form onSubmit={handleSubmit}>
        {/* First Name */}
        <input
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />

        <br /><br />

        {/* Last Name */}
        <input
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />

        <br /><br />

        {/* Email */}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <br /><br />

        {/* Query Type */}
        <h3>Query Type</h3>

        <label>
          <input
            type="radio"
            name="query"
            value="General Enquiry"
            onChange={(e) => setQueryType(e.target.value)}
          />
          General Enquiry
        </label>

        <label>
          <input
            type="radio"
            name="query"
            value="General Enquiry"
            onChange={(e) => setQueryType(e.target.value)}
          />
          General Enquiry
        </label>

        <br />

        <label>
          <input
            type="radio"
            name="query"
            value="Support Request"
            onChange={(e) => setQueryType(e.target.value)}
          />
          Support Request
        </label>

        <br /><br />

        {/* Message */}
        <h3>Message</h3>
        <textarea
          placeholder="Write your message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
   <p> I consent to being contacted by the team </p>
        <br /><br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;