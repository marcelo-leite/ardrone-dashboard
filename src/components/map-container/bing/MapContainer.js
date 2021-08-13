import React from "react";
import BingMapsReact from "bingmaps-react";
const mapStyle ={
    elements: {
    area: { fillColor: "#b6e591" },
    water: { fillColor: "#75cff0" },
    tollRoad: { fillColor: "#a964f4", strokeColor: "#aa64f40" },
    arterialRoad: { fillColor: "#857cd1", strokeColor: "#7988ce0" },
    road: { fillColor: "#b6a7c2", strokeColor: "#ff9b4f0" },
    street: { fillColor: "#a09bbe", strokeColor: "#ffffff0" },
    transit: { fillColor: "#000000" }
    },
    settings: {
    landColor: "#332969"
    }
};
function MapBox() {
  return (
    <BingMapsReact
      bingMapsKey="Ai8iYSUggmsjjId2g_qRhkQOYxgryPB7mh5DL5vktyNtlUiFZFJoHHn26tIEELR7"
      
    //   height="500px"
      mapOptions={{
        navigationBarMode: "square",
        showTermsLink: false,
        backgroundColor: "#75cff0", // This property can only be set when using the Map constructor.
        customMapStyle: mapStyle
      }}
    //   width="500px"
      viewOptions={{
        center: { latitude: -5.491179, longitude: -47.495673 },
        mapTypeId: "grayscale",
      }}
      
    />
  );
}

export default MapBox;