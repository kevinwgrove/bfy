import { isMobile } from "react-device-detect";

export const createBfyStore = () => {
  return {
    mobileDevice: isMobile,
  };
};
