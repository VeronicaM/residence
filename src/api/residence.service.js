// Services
import EndpointService from "../core/services/endpoint.service.js";

const filename = "residence.service.js";

export const getResidences = (
  { abortController } = {
    abortController: null,
  }
) => {
  // residences endpoint
  const URL = EndpointService.buildURL(EndpointService.constants.RESIDENCES);

  const params = {
    filename,
    endpoint: URL,
  };

  return EndpointService.fetchDataFromEndpoint(params, abortController);
};

export const addResidence = (formData, abortController = null) => {
  // residences endpoint
  const URL = EndpointService.buildURL(EndpointService.constants.RESIDENCES);

  const params = {
    endpoint: URL,
    config: {
      method: "POST",
      body: JSON.stringify(formData),
    },
    filename,
  };

  return EndpointService.fetchDataFromEndpoint(params, abortController);
};

const moduleExports = {
  getResidences,
  addResidence,
};

export default moduleExports;
