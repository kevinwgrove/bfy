import { isMobile } from "react-device-detect";

export const createBfyStore = () => {
  return {
    mobileDevice: isMobile,
    elementOne: 0,
    elementTwo: 0
  };
};
