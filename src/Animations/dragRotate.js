export const dragToRotate = {
  onDrag: (event, info, controls) => {
    const rotation = info.offset.x * 0.2;
    controls.set({ rotate: rotation });
  },
};
