function Assistance({ name, style, ref }) {
  return (
    <div
      className="box w-[300px] h-[300px] bg-[#ab1] rounded-md"
      ref={ref}
      style={style}
    >
      {name}
    </div>
  );
}

export default Assistance;
