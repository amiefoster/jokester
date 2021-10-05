import React, { useState } from "react";

function SubmitJoke({sendNewJoke}) {

  const [formData, setFormData] = useState({
    "category": "",
     "setup": "",
     "delivery": "",
  })
  

  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
  fetch('http://localhost:8000/jokes',{
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      "setup": formData.setup,
      "delivery":formData.delivery,
      "category": formData.category
    })
  }).then(response => response.json())

    .then(newJoke => sendNewJoke(newJoke))
    setFormData({
      "category": "",
      "setup": "",
      "delivery": ""
    })

  }

  return (
    <div>
      <h3>So, you think your're funny? 🤪</h3>
      <h4>Submit Your Own Joke Here!</h4>

      <section className="joke-submit">
        <h3>Add Joke</h3>
        <form className="joke-form">
          <label>
            {"Setup:  "}
            <textarea
              type="text"
              name="setup"
              placeholder="Setup"
              rows={3}
              cols={40}
              value={formData.setup}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            {"Delivery:  "}
            <textarea
              type="text"
              name="delivery"
              placeholder="Delivery"
              rows={3}
              cols={40}
              value={formData.delivery}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            {"Category:  "}
            <input 
            type="text" 
            name="category" 
            value={formData.category}
            onChange={handleChange} />
          </label>
          <br />
          <button
            className="add-joke-button"
            type="submit"
            onClick={handleSubmit}
        
          >
            Add Joke
          </button>
        </form>
      </section>
    </div>
  );
}

export default SubmitJoke;
