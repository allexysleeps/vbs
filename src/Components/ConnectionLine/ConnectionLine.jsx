import React from 'react';

const getDistance = (a, b) => {
  return Math.sqrt(Math.pow(a.centerX - b.centerX, 2) + Math.pow(a.centerY - b.centerY, 2))
};

const ConnectionLine = ({start, end}) => {
  const length = getDistance(start, end);
  const chordLength = getDistance({...start, centerX: start.centerX + length}, end);
  const angle = 180 - 2 * (Math.acos(chordLength / (2 * length)) * 180 / Math.PI) ;
  return (
    <div
      style={{
        width: `${length}px`,
        height: "3px",
        position: "absolute",
        left: `${start.centerX}px`,
        top: `${start.centerY}px`,
        transformOrigin: "0% 0%",
        transform: `rotate(${angle}deg)`,
        background: "#fff",
        zIndex: "-1"
      }}
      className="ConnectionLine"/>
  )
};

export default ConnectionLine;
