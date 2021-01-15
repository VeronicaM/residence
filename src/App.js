import React, { useEffect } from "react";

// Services
import useGetResidences from "./hooks/get-residences";
import ResidenceService from "./api/residence.service";

// Components
import ResidenceForm from "./components/ResidenceForm/ResidenceForm";

import "./App.scss";

const filename = "App.js";

function App() {
  const { residences, loading, error, setState } = useGetResidences(filename);

  const onAddResidence = (newResidence) => {
    const onSuccess = () => {
      setState({
        residences: [...residences, newResidence],
        loading: false,
        error: false,
      });
    };

    const onError = () => {
      setState({ residences, loading: false, error: true });
    };

    setState({ residences, loading: true, error: false });
    ResidenceService.addResidence(newResidence).then(onSuccess).catch(onError);
  };

  if (error) {
    return (
      <div data-testid="app-error-msg" className="c-error">
        Something went wrong, please try again later!
      </div>
    );
  }

  if (loading) {
    return (
      <div className="loader__container">
        <div data-testid="app-loader" className="c-spinner c-spinner--l" />{" "}
      </div>
    );
  }

  return (
    <div className="app__container">
      <header>
        <h1> Residence App </h1>
      </header>
      <main>
        <ResidenceForm onAddResidence={onAddResidence} />
      </main>
      <footer>Created by @Veronica Mihai 2021 with ☕ and 🎵</footer>
    </div>
  );
}

export default App;
