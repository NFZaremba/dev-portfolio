const Overlay = ({ color }: { color: string }) => (
  <div className={`absolute inset-0 opacity-20 rounded-3xl ${color}`}></div>
);

export default Overlay;
