import React, { useState } from "react";

function SubmitJoke({ sendNewJoke }) {
  const [formData, setFormData] = useState({
    category: "",
    setup: "",
    delivery: "",
  });

  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    fetch("http://localhost:8000/jokes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        setup: formData.setup,
        delivery: formData.delivery,
        category: formData.category,
      }),
    })
      .then((response) => response.json())

      .then((newJoke) => sendNewJoke(newJoke));
    setFormData({
      category: "",
      setup: "",
      delivery: "",
    });
  }

  return (
    <div>
      <h3>So, you think your're funny? 🤪</h3>
      <h4>Submit Your Own Joke Here!</h4>

      <section className="joke-submit">
        <form className="joke-form">
          <label>
            <h3>{"Setup:  "}</h3>
            <textarea
              type="text"
              name="setup"
              placeholder="Setup"
              rows={5}
              value={formData.setup}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            <h3>{"Delivery:  "}</h3>
            <textarea
              type="text"
              name="delivery"
              placeholder="Delivery"
              rows={5}
              value={formData.delivery}
              onChange={handleChange}
            />
          </label>
          <br />

          <label>
            <h3>{"Category:  "}</h3>
            <select name="category" value={formData.category}onChange={handleChange}>
              <option value=""></option>
              <option value="Dad Jokes">Dad Jokes</option>
              <option value="Yo Momma Jokes">Yo Momma Jokes</option>
              <option value="Knock-Knock Jokes">Knock-Knock Jokes</option>
              <option value="One Liners">One Liners</option>
              <option value="General">General</option>
            </select>
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
