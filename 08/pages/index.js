import { useRef, useState } from "react";

function HomePage() {
  const [feedback, setFeedback] = useState([]);
  const emailInputRef = useRef();
  const feedbackInputRef = useRef();

  // useEffect(() => {}, []);

  const handleSendForm = async (event) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredFeedback = feedbackInputRef.current.value;

    const reqBody = { email: enteredEmail, text: enteredFeedback };
    //send auto
    const handleFetch = fetch("api/feedback", {
      method: "POST",
      body: JSON.stringify(reqBody),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const response = await handleFetch;
    const data = await response.json();

    console.log(data);
  };

  const handleLoadFeedback = async () => {
    const handleFetch = fetch("api/feedback", {
      method: "GET",
    });

    const response = await handleFetch;
    const data = await response.json();

    setFeedback(data.feedback);
  };

  return (
    <div>
      <h1>The Home Page</h1>
      <form onSubmit={handleSendForm}>
        <div>
          <label htmlFor="email">Your Email address</label>
          <input type="email" id="email" ref={emailInputRef} />
        </div>
        <div>
          <label htmlFor="feedback">Your Feedback</label>
          <textarea id="feedback" rows="5" ref={feedbackInputRef}></textarea>
        </div>
        <button type="submit">Send</button>
      </form>
      <hr />
      <button type="button" onClick={handleLoadFeedback}>
        Load feedback
      </button>
      <ul>
        {feedback.map((el) => (
          <li key={el.id}>
            {el.text} - {el.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HomePage;
