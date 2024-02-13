const Button = ({ name, pointerEvents, opacity, onClick, children }) => {
  return (
    <button
      name={name}
      onClick={onClick}
      style={{
        pointerEvents: pointerEvents,
        opacity: opacity,
      }}
    >
      {children}
    </button>
  );
};

export default Button;
