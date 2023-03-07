import * as React from 'react';

export const useData = (url: string, query: string) => {
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(false);
  const [results, setResults] = React.useState([]);

  React.useEffect(() => {
    if (!url || !query) {
      return;
    }
    let isActive = false;
    async function fetchResults() {
      setLoading(true);
      try {
        fetch(`${url}${query}`)
          .then((data) => data.json())
          .then((response) => {
            if (!isActive) {
              setLoading(false);
              setResults(response);
            }
          });
      } catch (e) {
        setError(true);
      }
    }
    fetchResults();
    return () => {
      isActive = true;
    };
  }, [url, query]);
  return {
    loading,
    error,
    results,
  };
};
