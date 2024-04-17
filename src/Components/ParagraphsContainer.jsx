import React from "react";
import Paragraph from "./Paragraph";

const ParagraphsContainer = ({ viewedPara, errorMessage }) => {
  return (
    <div className="paragraphs-container">
      {viewedPara.map((para) => {
        return <Paragraph paragraph={para} key={para} />;
      })}
      <p className="error-message">{errorMessage}</p>
    </div>
  );
};

export default ParagraphsContainer;
