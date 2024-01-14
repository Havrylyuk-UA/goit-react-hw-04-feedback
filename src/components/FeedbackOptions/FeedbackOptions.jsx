const FeedbackOptions = ({ options, onLeaveFeedback, handleReset }) => {
  return (
    <>
      <div className="feedback-btn">
        {Object.keys(options).map(option => (
          <button
            key={option}
            type="button"
            onClick={() => onLeaveFeedback(option)}
          >
            {option}
          </button>
        ))}
        <button type="button" onClick={() => handleReset()}>
          reset
        </button>
      </div>
    </>
  );
};

export default FeedbackOptions;
