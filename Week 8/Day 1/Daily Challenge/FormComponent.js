import React from "react";

const FormComponent = ({ data, handleChange, handleSubmit }) => {
  return (
    <div>
      <h2>Sample form</h2>

      <form onSubmit={handleSubmit}>
        {/* First Name */}
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={data.firstName}
          onChange={handleChange}
        />
        <br /><br />

        {/* Last Name */}
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={data.lastName}
          onChange={handleChange}
        />
        <br /><br />

        {/* Age */}
        <input
          type="number"
          name="age"
          placeholder="Age"
          value={data.age}
          onChange={handleChange}
        />
        <br /><br />

        {/* Gender */}
        <label>
          <input
            type="radio"
            name="gender"
            value="male"
            checked={data.gender === "male"}
            onChange={handleChange}
          />
          Male
        </label>

        <label>
          <input
            type="radio"
            name="gender"
            value="female"
            checked={data.gender === "female"}
            onChange={handleChange}
          />
          Female
        </label>

        <br /><br />

        {/* Destination */}
        <select
          name="destination"
          value={data.destination}
          onChange={handleChange}
        >
          <option value="">-- Choose destination --</option>
          <option value="Japan">Japan</option>
          <option value="Kenya">Kenya</option>
          <option value="Brazil">Brazil</option>
        </select>

        <br /><br />

        {/* Dietary restrictions */}
        <h4>Dietary restrictions:</h4>

        <label>
          <input
            type="checkbox"
            name="nutsFree"
            checked={data.nutsFree}
            onChange={handleChange}
          />
          Nuts free
        </label>

        <br />

        <label>
          <input
            type="checkbox"
            name="lactoseFree"
            checked={data.lactoseFree}
            onChange={handleChange}
          />
          Lactose free
        </label>

        <br />

        <label>
          <input
            type="checkbox"
            name="vegan"
            checked={data.vegan}
            onChange={handleChange}
          />
          Vegan
        </label>

        <br /><br />

        <button type="submit">Submit</button>
      </form>

      {/* LIVE DISPLAY */}
      <hr />

      <h3>Entered information:</h3>
      <p>Your name: {data.firstName} {data.lastName}</p>
      <p>Your age: {data.age}</p>
      <p>Your gender: {data.gender}</p>
      <p>Your destination: {data.destination}</p>

      <p>Your dietary restrictions:</p>
      <p>Nuts free: {data.nutsFree ? "Yes" : "No"}</p>
      <p>Lactose free: {data.lactoseFree ? "Yes" : "No"}</p>
      <p>Vegan: {data.vegan ? "Yes" : "No"}</p>
    </div>
  );
};

export default FormComponent;