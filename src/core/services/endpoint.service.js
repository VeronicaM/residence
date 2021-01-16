// Services
import LoggerService from "./logger.service.js";

const apiBase = process.env.API_URL || "http://localhost:3000";

const endpointUrls = {
  residences: `${apiBase}/residences`,
};

const endpointNames = {
  RESIDENCES: "residences",
};

const buildURL = (endpointName = "", params = { offset: 20, limit: 20 }) => {
  // return empty string if no endpoint name passed
  if (endpointName === "" || !endpointUrls[endpointName]) {
    throw new Error("unknown endpoint!");
  }

  let urlWithParams = endpointUrls[endpointName];

  // replace params specified as :paramName in the endpoint URL with corresponding values
  Object.entries(params).forEach(([paramName, paramValue]) => {
    urlWithParams = urlWithParams.replace(`:${paramName}`, paramValue);
  });

  return urlWithParams;
};

const fetchDataFromEndpoint = (
  { endpoint = "", config = { method: "GET" }, filename = "N/A" },
  abortController
) => {
  const onError = (error) => {
    // Send error to logging monitoring system
    LoggerService.log({
      message: error,
      type: LoggerService.MESSAGE_TYPES.ERROR,
      filename,
    });
    throw new Error(error);
  };

  let requestConfig = {
    ...config,
    headers: {
      "Content-Type": "application/json"
    }
  };

  if (abortController && abortController.signal) {
    requestConfig = {
      ...config,
      signal: abortController.signal,
    };
  }

  return fetch(endpoint, requestConfig)
    .then((response) => response.json())
    .then((data) => data)
    .catch(onError);
};

const moduleExports = {
  buildURL,
  constants: endpointNames,
  fetchDataFromEndpoint,
};

export default moduleExports;
