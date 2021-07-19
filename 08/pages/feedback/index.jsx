import { useState } from "react";
import { buildFeedbackPath, extractFeedback } from "../api/feedback";

const Feedback = (props) => {
  const [feedbackData, setFeedbackData] = useState([]);
  //enviar email quando for clicado

  const handleLoadFeedBack = async (id) => {
    const fetchData = fetch(`/api/${id}`);
    const response = await fetchData;
    const data = await response.json();
    //console.log(data.feedback);
    setFeedbackData(data.feedback);
  };

  return (
    <>
      {feedbackData && <p>{feedbackData.email}</p>}
      <ul>
        {props.feedbackItems.map((item) => (
          <li key={item.id}>
            {item.text}
            <button
              type="button"
              onClick={handleLoadFeedBack.bind(null, item.id)}
            >
              Show Details
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export const getStaticProps = () => {
  //na sua propria API vc nao usa Fetch()
  //pode mas desnecessario
  const filePath = buildFeedbackPath();
  const data = extractFeedback(filePath);
  console.log(data);

  return {
    props: {
      feedbackItems: data,
    },
  };
};

export default Feedback;
