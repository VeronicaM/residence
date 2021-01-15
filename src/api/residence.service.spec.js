import ResidenceService from "./residence.service";
import EndpointService from "../core/services/endpoint.service";

import { mockResidences } from "../../db.json";

const testUrl = EndpointService.buildURL(EndpointService.constants.RESIDENCES);

const testResourceURI = "http://localhost:3000/residences";

const mockFormData = {
  noResidents: "4",
  latitude: "45.4268",
  longitude: "27.1025",
  number: "29",
  zipCode: "00000",
};

beforeEach(() => {
  fetch = jest.fn(() =>
    Promise.resolve({
      json: () => mockResidences,
    })
  );
});

afterEach(() => {
  jest.resetAllMocks();
});

test("I can get the residences data", () => {
  ResidenceService.getResidences();
  expect(fetch).toHaveBeenCalledTimes(1);
  expect(fetch).toHaveBeenCalledWith(testUrl, { method: "GET" });
});

test("I can add a new residence with formData", () => {
  ResidenceService.addResidence(mockFormData);
  expect(fetch).toHaveBeenCalledTimes(1);
  expect(fetch).toHaveBeenCalledWith(testResourceURI, {
    method: "POST",
    body: JSON.stringify(mockFormData),
  });
});
