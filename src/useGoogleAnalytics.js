import ReactGA from "react-ga4";

export const useAnalyticsEventTracker = (category="Blog category") => {
  const eventTracker = (action = "test action") => {
    ReactGA.event({category, action});
  }
  return eventTracker;
}

export const useAnalyticsPageviewTracker = (hitType="pageview") => {
  const pageviewTracker = (page="/") => {
    ReactGA.send({hitType, page})
  }
  return pageviewTracker;
} 

