import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import StatesData from "./StatesData";

function States() {
  const [searchInput, setSearchInput] = useState("");
  const [filteredStates, setFilteredStates] = useState(StatesData);
  const navigate = useNavigate();

  const handleViewDetails = (stateName) => {
    navigate(`/state/${stateName}`);
  };

  const handleSearch = () => {
    const filtered = StatesData.filter((state) =>
      state.name.toLowerCase().includes(searchInput.toLowerCase())
    );
    setFilteredStates(filtered);
  };

  return (
    <div
      style={{ backgroundColor: "#f3f3f3", paddingTop: "75px" }}
      className="App"
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1
          style={{
            width: "350px",
            borderBottom: "4px solid #008375",
            padding: "0px 0 5px 0",
            textAlign: "center",
          }}
        >
          States in India
        </h1>
      </div>
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "25px",
          flexWrap: "wrap",
          gap: "10px",
        }}
      >
        <input
          style={{
            padding: "10px",
            width: "25vw",
            marginRight: "4px",
            border: "none",
            boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
            borderRadius: "5px",
            fontSize: "20px",
          }}
          type="text"
          value={searchInput}
          placeholder="Search State"
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <button
          style={{
            padding: "10px",
            width: "10vw",
            marginLeft: "4px",
            border: "none",
            boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
            borderRadius: "5px",
            fontSize: "20px",
            backgroundColor: "#1a9082",
            color: "white",
          }}
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
      <div
        className="container-xxl"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "30px",
        }}
      >
        {filteredStates.map((state) => (
          <div
            key={state.name}
            data-aos="fade-up"
            style={{
              borderRadius: "5px",
              padding: "15px",
              backgroundColor: "white",
              objectFit: "cover",
              boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
            }}
          >
            <img
              src={state.image_url}
              alt={state.name}
              style={{
                width: "375px",
                height: "175px",
                objectFit: "cover",
                borderRadius: "5px",
              }}
            />
            <h2
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "20px",
              }}
              data-aos="fade-left"
            >
              {state.name}
              <button
                data-aos="fade-start"
                style={{
                  backgroundColor: "#1a9082",
                  color: "white",
                  fontSize: "20px",
                  borderRadius: "5px",
                  paddingInline: "20px",
                  padding: "10px",
                }}
                onClick={() => handleViewDetails(state.name)}
              >
                View Details
              </button>
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default States;
