export const Light = ({ id, color, name, light, onClick }) => {
  return (
    <button className="light-button" id={id} onClick={onClick}>
      <div
        className={`light ${light ? "light-on" : ""}`}
        style={{ backgroundColor: color }}
      />
      <span>Turn on {name}</span>
    </button>
  );
};
