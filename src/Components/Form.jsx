const Form = ({ paraNumber, setParaNumber, generateParagraphs }) => {
  return (
    <form action="" className="form-container">
      <label htmlFor="para-number">Paragraphs:</label>
      <input
        type="number"
        step="1"
        min="1"
        max="9"
        id="para-number"
        value={paraNumber}
        onChange={(e) => setParaNumber(e.target.value)}
      />
      <button
        type="submit"
        onClick={(e) => {
          e.preventDefault();
          generateParagraphs();
        }}
      >
        Generate
      </button>
    </form>
  );
};

export default Form;
