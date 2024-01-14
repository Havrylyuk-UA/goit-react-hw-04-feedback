const Section = ({ title, children }) => {
  return (
    <>
      <div className="feedback-section">
        <h1>{title}</h1>
        {children}
      </div>
    </>
  );
};

export default Section;
