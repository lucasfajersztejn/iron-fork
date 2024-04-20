import { useEffect, useRef, useState } from "react";

function getCoordinates() {}

function Lalala() {
  const latitude = useRef();

  useEffect(() => {
    getCoordinates().then((lat) => {
      latitude.current = lat;
    });
  }, []);

  return <div>Hola!</div>;
}

//

function Lalala() {
  let latitude = null;

  useEffect(() => {
    getCoordinates().then((lat) => {
      latitude = lat;
    });
  }, []);

  return <div>Hola!</div>;
}
