import { render, screen, waitFor } from "@testing-library/react";
import App from "./App";

test("renders header text", async () => {
  render(<App />);

  await waitFor(() =>
    expect(screen.getByText(/Residence App/i)).toBeInTheDocument()
  );
});
