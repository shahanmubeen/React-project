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
    <div className="flex justify-center items-center min-h-screen bg-green-100 p-4">
      
      <div className="bg-white w-full max-w-lg p-6 rounded-lg shadow-lg">

        <h2 className="text-3xl font-bold text-center mb-6">
          Contact Us
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">

          {/* First + Last Name */}
          <div className="flex gap-4">
            <input
              type="text"
              placeholder= "First Name *"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="w-1/2 h-12 border border-gray-400 rounded px-3"
            />

            <input
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="w-1/2 h-12 border border-gray-400 rounded px-3"
            />
          </div>

          {/* Email */}
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full h-12 border border-gray-400 rounded px-3"
          />

          {/* Query Type */}
          <h3 className="font-semibold">Query Type</h3>

          <div className="flex gap-4">

            <label className="flex items-center gap-2 border border-gray-400 px-4 py-2 rounded w-1/2">
              <input
                type="radio"
                name="query"
                value="General Enquiry"
                onChange={(e) => setQueryType(e.target.value)}
              />
              General Enquiry
            </label>

            <label className="flex items-center gap-2 border border-gray-400 px-4 py-2 rounded w-1/2">
              <input
                type="radio"
                name="query"
                value="Support Request"
                onChange={(e) => setQueryType(e.target.value)}
              />
              Support Request
            </label>

          </div>

          {/* Message */}
          <textarea
            placeholder="Write your message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full h-28 border border-gray-400 rounded px-3 py-2"
          />

          {/* Consent */}
          <p className="text-sm">
            I consent to being contacted by the team
          </p>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-green-500 text-white py-3 rounded hover:bg-green-600"
          >
            Submit
          </button>

        </form>
      </div>
    </div>
  );
}

export default App;