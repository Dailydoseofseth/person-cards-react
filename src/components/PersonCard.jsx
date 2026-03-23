function PersonCard({ name, age, occupation, style, img }) {
  return (
    <div style={style}>
      <h2>
        <strong>
          <mark
            style={{
              background: "lightblue",
              color: "#FFF570",
              fontSize: "2rem",
            }}
          >
            {name}
          </mark>
        </strong>
      </h2>
      <p>Age: {age}</p>
      <p>Occupation: {occupation}</p>
      <img src={img} alt={name} />
    </div>
  );
}
export default PersonCard;
