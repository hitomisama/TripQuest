import React from "react";
import locations from "../Date/locationsData.json";

function NavigateButton({ location }) {
  const handleNavigate = () => {
    const { latitude, longitude } = location;
    const url = `https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`;
    window.open(url, "_blank");
  };

  return (
    <div className="NavigationItem">
      <h4 className="navigate-button" onClick={handleNavigate}>
        出発
      </h4>
    </div>
  );
}

function LocationList({ renderId }) {
  // 通过过滤只渲染指定的地点
  const filteredLocations = locations.filter(
    (location) => location.id === renderId
  );

  return (
    <section className="NavigationContent">
      {filteredLocations.map((location) => (
        <NavigateButton key={location.id} location={location} />
      ))}
    </section>
  );
}

export default LocationList;