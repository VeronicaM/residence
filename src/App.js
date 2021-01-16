import React from "react";

// Services
import useGetResidences from "./hooks/get-residences";
import ResidenceService from "./api/residence.service";

// Components
import ResidenceForm from "./components/ResidenceForm/ResidenceForm";
import HeatMap from "./components/Heatmap/Heatmap";

import "./App.scss";

const filename = "App.js";

function App() {
  const { residences = [], loading, error, setState } = useGetResidences(
    filename
  );

  const onAddResidence = ({ latitude, longitude, noResidents }) => {
    const onSuccess = (response) => {
      setState({
        residences: [...residences, response],
        loading: false,
        error: false,
      });
    };

    const onError = () => {
      setState({ residences, loading: false, error: true });
    };

    setState({ residences, loading: true, error: false });

    ResidenceService.addResidence({
      lat: +latitude,
      lng: +longitude,
      weight: +noResidents,
    })
      .then(onSuccess)
      .catch(onError);
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
        <h1 className="app__title"> Residence App </h1>
      </header>
      <main className="main__container">
        <ResidenceForm onAddResidence={onAddResidence} />
        <HeatMap
          points={residences}
          center={residences[0]}
          cener={{ lat: 44.4268, lng: 26.1025 }}
        />
      </main>
      <footer>Created by @Veronica Mihai 2021 with ☕ and 🎵</footer>
    </div>
  );
}

export default App;
