import React from "react";

function SubmitJoke() {
  function handleChange(event) {
    console.log(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log("this button was clicked!");
  }

  return (
    <div>
      <h3>So, you think your're funny? 🤪</h3>
      <h4>Submit Your Own Joke Here!</h4>

      <section className="joke-submit">
        <h3>Add Joke</h3>
        <form>
          <label>
            Setup:
            <textarea
              type="text"
              name="setup"
              placeholder="Setup"
              rows={5}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Punchline:
            <textarea
              type="text"
              name="punchline"
              placeholder="Punchline"
              rows={5}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Category:
            <input type="text" name="category" onChange={handleChange} />
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
