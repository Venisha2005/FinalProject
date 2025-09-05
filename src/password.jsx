import React, { useState } from "react";
import "./password.css";

const STORAGE_KEY = "app:guestAuthorized";
const DEMO_PASSWORD = "brington123";

export default function PasswordGate({ onSuccess = () => {} }) {
  const [enteredPassword, setEnteredPassword] = useState("");
  const [feedback, setFeedback] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();

    if (enteredPassword === DEMO_PASSWORD) {
      setFeedback("Access granted. Welcome!");
      setIsSuccess(true);
      localStorage.setItem(STORAGE_KEY, "true");
      onSuccess();
    } else {
      setFeedback("Incorrect password. Please try again.");
      setIsSuccess(false);
      setEnteredPassword("");
    }
  }

  return (
    <section className="pw-wrap">
      <div className="pw-card">
        <h1>Brington Inc</h1>
        <h2>Guest Area</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="password">Please enter the password below.</label>
          <input
            type="password"
            id="password"
            name="password"
            value={enteredPassword}
            onChange={(e) => setEnteredPassword(e.target.value)}
            required
          />
          <button type="submit">Go</button>
        </form>
        {feedback && (
          <div className={`message ${isSuccess ? "success" : "error"}`}>{feedback}</div>
        )}
      </div>
    </section>
  );
}
