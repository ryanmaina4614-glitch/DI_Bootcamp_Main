import React from "react";

function App() {

  const postData = async () => {
    try {

      const response = await fetch(
        "YOUR_WEBHOOK_URL_HERE",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            key1: "myusername",
            email: "mymail@gmail.com",
            name: "Isaac",
            lastname: "Doe",
            age: 27,
          }),
        }
      );

      const data = await response.json();

      console.log(data);

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <button onClick={postData}>
        Send Data
      </button>
    </div>
  );
}

export default App;