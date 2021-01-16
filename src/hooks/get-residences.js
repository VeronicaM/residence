import { useEffect, useState } from "react";
import LoggerService from "../core/services/logger.service.js";
import ResidenceService from "../api/residence.service";

const defaultState = {
  residences: [],
  loading: false,
  error: false,
};

export default function useGetResidences(filename) {
  const [state, setState] = useState(defaultState);

  useEffect(() => {
    const getResidencesAbortController = new AbortController();

    async function fetchResidences() {
      try {
        setState({ ...state, loading: true });

        const residences = await ResidenceService.getResidences({
          abortController: getResidencesAbortController,
        });

        setState({ ...state, residences, loading: false });
      } catch (err) {
        setState({ ...state, loading: false, error: true });

        LoggerService.log({
          message: JSON.stringify(err),
          type: LoggerService.MESSAGE_TYPES.WARNING,
          filename,
        });
      }
    }

    fetchResidences();

    return () => {
      getResidencesAbortController.abort();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { ...state, setState };
}
