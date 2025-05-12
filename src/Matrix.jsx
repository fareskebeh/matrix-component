import React, { useEffect, useState } from "react";

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

  const styles = {
    matrix: {
      pointerEvents: "none",
      userSelect: "none",
      color: "white",
      display: "grid",
      gridTemplateColumns: "repeat(50, 1fr)",
      gridTemplateRows: "repeat(30, 1fr)",
      padding: 0,
      position: "fixed",
      zIndex: -20,
      opacity: 0.44,
      top: 0,
      right: 0,
      left: 0,
      bottom: 0,
      backgroundColor: "#101010",
    },
    p: {
      margin: 0,
      color: "#404040",
    },
    diagonal: {
      color: "#707070",
    },
    invisible: {
      visibility: "hidden",
    },
  };

  return (
    <div style={styles.matrix}>
      {matrix.map((row, rowIndex) =>
        row.map((value, colIndex) => (
          <p
            key={`${rowIndex}-${colIndex}`}
            style={
              value === "1"
                ? styles.diagonal
                : value === " "
                ? styles.invisible
                : styles.p
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
