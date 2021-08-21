const useSwipePower = (offset: number, velocity: number, threshold = 1000) => {
  return Math.abs(offset) * velocity;
};

export default useSwipePower;
