import React, { useState, useEffect } from "react";
import Map from "./components/Map";
import Loader from "./components/Loader";
import Header from "./components/Header";

function App() {
  const [eventData, setEventData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    setLoading(true);
    const res = await fetch("https://eonet.sci.gsfc.nasa.gov/api/v2.1/events");
    const { events } = await res.json();

    setEventData(events);
    setLoading(false);
  };

  return (
    <div>
      <Header />
      {!loading ? (
        <Map eventData={eventData} />
      ) : (
        <h2>
          <Loader />
        </h2>
      )}
    </div>
  );
}
export default App;
