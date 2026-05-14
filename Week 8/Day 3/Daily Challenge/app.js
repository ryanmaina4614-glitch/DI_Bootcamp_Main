import React, {
  createContext,
  useContext,
  useReducer,
  useRef,
  useState,
} from "react";

/* =========================
   CONTEXT
========================= */

const TaskContext = createContext();

/* =========================
   INITIAL STATE
========================= */

const initialState = {
  tasks: [],
  filter: "all",
};

/* =========================
   REDUCER
========================= */

function taskReducer(state, action) {
  switch (action.type) {

    // ADD TASK
    case "ADD_TASK":
      return {
        ...state,
        tasks: [
          ...state.tasks,
          {
            id: Date.now(),
            text: action.payload,
            completed: false,
          },
        ],
      };

    // TOGGLE TASK
    case "TOGGLE_TASK":
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload
            ? { ...task, completed: !task.completed }
            : task
        ),
      };

    // DELETE TASK
    case "DELETE_TASK":
      return {
        ...state,
        tasks: state.tasks.filter(
          (task) => task.id !== action.payload
        ),
      };

    // EDIT TASK
    case "EDIT_TASK":
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.id
            ? { ...task, text: action.payload.text }
            : task
        ),
      };

    // FILTER TASKS
    case "FILTER_TASKS":
      return {
        ...state,
        filter: action.payload,
      };

    default:
      return state;
  }
}

/* =========================
   TASK PROVIDER
========================= */

function TaskProvider({ children }) {
  const [state, dispatch] = useReducer(
    taskReducer,
    initialState
  );

  return (
    <TaskContext.Provider value={{ state, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
}

/* =========================
   TASK FORM
========================= */

function TaskForm() {
  const inputRef = useRef(null);

  const { dispatch } = useContext(TaskContext);

  const addTask = () => {
    const text = inputRef.current.value;

    if (text.trim() === "") return;

    dispatch({
      type: "ADD_TASK",
      payload: text,
    });

    inputRef.current.value = "";
  };

  return (
    <div style={{ marginBottom: "20px" }}>
      <input
        type="text"
        ref={inputRef}
        placeholder="Enter task..."
        style={{
          padding: "10px",
          width: "250px",
        }}
      />

      <button
        onClick={addTask}
        style={{
          marginLeft: "10px",
          padding: "10px",
        }}
      >
        Add Task
      </button>
    </div>
  );
}

/* =========================
   FILTER BUTTONS
========================= */

function FilterButtons() {
  const { dispatch } = useContext(TaskContext);

  return (
    <div style={{ marginBottom: "20px" }}>
      <button
        onClick={() =>
          dispatch({
            type: "FILTER_TASKS",
            payload: "all",
          })
        }
      >
        All
      </button>

      <button
        onClick={() =>
          dispatch({
            type: "FILTER_TASKS",
            payload: "completed",
          })
        }
        style={{ marginLeft: "10px" }}
      >
        Completed
      </button>

      <button
        onClick={() =>
          dispatch({
            type: "FILTER_TASKS",
            payload: "active",
          })
        }
        style={{ marginLeft: "10px" }}
      >
        Active
      </button>
    </div>
  );
}

/* =========================
   TASK LIST
========================= */

function TaskList() {
  const { state, dispatch } = useContext(TaskContext);

  const [editingId, setEditingId] = useState(null);

  const editRef = useRef(null);

  // FILTER TASKS
  const filteredTasks = state.tasks.filter((task) => {
    if (state.filter === "completed") {
      return task.completed;
    }

    if (state.filter === "active") {
      return !task.completed;
    }

    return true;
  });

  // SAVE EDIT
  const saveEdit = (id) => {
    dispatch({
      type: "EDIT_TASK",
      payload: {
        id,
        text: editRef.current.value,
      },
    });

    setEditingId(null);
  };

  return (
    <div>
      {filteredTasks.map((task) => (
        <div
          key={task.id}
          style={{
            border: "1px solid gray",
            padding: "10px",
            marginBottom: "10px",
            borderRadius: "5px",
          }}
        >

          {/* EDIT MODE */}
          {editingId === task.id ? (
            <>
              <input
                type="text"
                defaultValue={task.text}
                ref={editRef}
                style={{
                  padding: "5px",
                  width: "200px",
                }}
              />

              <button
                onClick={() => saveEdit(task.id)}
                style={{ marginLeft: "10px" }}
              >
                Save
              </button>
            </>
          ) : (
            <>
              <span
                onClick={() =>
                  dispatch({
                    type: "TOGGLE_TASK",
                    payload: task.id,
                  })
                }
                style={{
                  textDecoration: task.completed
                    ? "line-through"
                    : "none",
                  cursor: "pointer",
                  marginRight: "15px",
                }}
              >
                {task.text}
              </span>

              <button
                onClick={() =>
                  setEditingId(task.id)
                }
              >
                Edit
              </button>

              <button
                onClick={() =>
                  dispatch({
                    type: "DELETE_TASK",
                    payload: task.id,
                  })
                }
                style={{ marginLeft: "10px" }}
              >
                Delete
              </button>
            </>
          )}
        </div>
      ))}
    </div>
  );
}

/* =========================
   MAIN APP
========================= */

function App() {
  return (
    <TaskProvider>
      <div
        style={{
          fontFamily: "Arial",
          padding: "30px",
          maxWidth: "500px",
          margin: "auto",
        }}
      >
        <h1>Task Manager</h1>

        <TaskForm />

        <FilterButtons />

        <TaskList />
      </div>
    </TaskProvider>
  );
}

export default App;