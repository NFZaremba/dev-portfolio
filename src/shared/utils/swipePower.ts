const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

export default swipePower;
