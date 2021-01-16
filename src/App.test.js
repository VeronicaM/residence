import { render, screen, waitFor } from "@testing-library/react";
import App from "./App";

import { mockResidences } from "../db.json";

beforeEach(() => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => mockResidences,
    })
  );
});

afterEach(() => {
  jest.resetAllMocks();
});

test("renders header text", async () => {
  render(<App />);

  await waitFor(() =>
    expect(screen.getByText(/Residence App/i)).toBeInTheDocument()
  );
});
