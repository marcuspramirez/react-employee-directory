import React from "react";

const styles = {
  card: {
    margin: 20,
    background: "#2b9cd1"
  },
  heading: {
    background: "#2b9cd1",
    minHeight: 50,
    lineHeight: 3.5,
    fontSize: "1.2rem",
    color: "white",
    padding: "0 20px"
  }
};

function Navbar() {
  return (
    <div style={styles.card}>
      <div style={styles.heading}>Use the search tools to find one of our amazing associates!</div>
    </div>
  );
}

export default Navbar;
