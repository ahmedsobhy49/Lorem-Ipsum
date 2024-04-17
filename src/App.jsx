import { useState } from "react";
import Form from "./Components/Form";
import Header from "./Components/Header";
import ParagraphsContainer from "./Components/ParagraphsContainer";
import text from "./data";

const App = () => {
  const [paraNumber, setParaNumber] = useState("");
  const [error, setError] = useState("");
  const [viewedPara, setViewedPara] = useState([]);

  function generateParagraphs() {
    if (paraNumber > 9) {
      setError("ops you have only 9 paragraphs");
      setViewedPara([]);
      return;
    } else if (paraNumber < 0) {
      setError("please enter a number grater than 0");
      setViewedPara([]);
      return;
    } else {
      setViewedPara(() => {
        return text.slice(0, paraNumber);
      });
      setError("");
    }
  }

  return (
    <div className="container">
      <Header />
      <Form
        paraNumber={paraNumber}
        setParaNumber={setParaNumber}
        generateParagraphs={generateParagraphs}
      />
      <ParagraphsContainer viewedPara={viewedPara} errorMessage={error} />
    </div>
  );
};
export default App;
