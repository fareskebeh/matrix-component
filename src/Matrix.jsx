import React, { useEffect, useState } from "react";
import "../styles/matrix.css"

const Matrix = () => {
  const [matrix, setMatrix] = useState([]);

  const createMatrix = (rows, cols) => {
    return Array.from({ length: rows }, () =>
      Array.from({ length: cols }, () => (Math.random() < 0.5 ? "1" : "0"))
    );
  };

  const updateMatrix = () => {
    setMatrix((prevMatrix) => {
      const updatedMatrix = prevMatrix.map((row, rowIndex) =>
        row.map((value, colIndex) => {
          if (rowIndex === colIndex) return "1";
          if (Math.random() < 0.1) return Math.random() < 0.5 ? "1" : "0";
          return value;
        })
      );
      return updatedMatrix;
    });
  };

  useEffect(() => {
    setMatrix(createMatrix(30, 50));
  }, []);

  useEffect(() => {
    const interval = setInterval(updateMatrix, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="matrix">
      {matrix.map((row, rowIndex) =>
        row.map((value, colIndex) => (
          <p
            key={`${rowIndex}-${colIndex}`}
            className={
              value === "1"
                ? "diagonal"
                : value === " "
                ? "invisible"
                : ""
            }
          >
            {value}
          </p>
        ))
      )}
    </div>
  );
};

export default Matrix;
