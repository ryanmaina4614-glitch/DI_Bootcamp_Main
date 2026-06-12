import { useDispatch, useSelector } from "react-redux";

import DataFetcher from "./components/DataFetcher";

import { getMeals } from "./features/dataSlice";

import type {
  RootState,
  AppDispatch,
} from "./store";

import { Meal } from "./types/types";

function App() {
  const dispatch =
    useDispatch<AppDispatch>();

  const { data, loading, error } =
    useSelector(
      (state: RootState) => state.data
    );

  return (
    <div
      style={{
        padding: "20px",
      }}
    >
      <h1>
        Generic Data Fetching with Redux
      </h1>

      <DataFetcher<Meal>
        data={data}
        loading={loading}
        error={error}
        fetchData={() =>
          dispatch(getMeals())
        }
        renderItem={(meal) => (
          <div
            style={{
              border: "1px solid #ddd",
              marginBottom: "15px",
              padding: "10px",
              borderRadius: "8px",
            }}
          >
            <h3>{meal.strMeal}</h3>

            <img
              src={meal.strMealThumb}
              alt={meal.strMeal}
              width="200"
            />
          </div>
        )}
      />
    </div>
  );
}

export default App;