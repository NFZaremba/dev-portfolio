const Overlay = ({ color }: { color: string }) => (
  <div className={`absolute inset-0 opacity-20 ${color}`}></div>
);

export default Overlay;
