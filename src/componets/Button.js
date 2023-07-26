function Button({ text, color, bgColor, border, pd, radius, fon }) {
  return (
    <button className={`${color} ${border} ${pd} ${radius} ${fon} ${bgColor}`}>
      {text}
    </button>
  );
}

export default Button;
