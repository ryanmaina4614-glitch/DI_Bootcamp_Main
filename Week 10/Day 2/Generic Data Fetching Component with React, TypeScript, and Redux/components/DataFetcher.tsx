import { ReactNode, useEffect } from "react";

interface DataFetcherProps<T> {
  data: T[];
  loading: boolean;
  error: string | null;
  fetchData: () => void;
  renderItem: (item: T) => ReactNode;
}

function DataFetcher<T>({
  data,
  loading,
  error,
  fetchData,
  renderItem,
}: DataFetcherProps<T>) {
  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return <h2>Loading data...</h2>;
  }

  if (error) {
    return <h2>Error: {error}</h2>;
  }

  return (
    <div>
      {data.map((item, index) => (
        <div key={index}>
          {renderItem(item)}
        </div>
      ))}
    </div>
  );
}

export default DataFetcher;