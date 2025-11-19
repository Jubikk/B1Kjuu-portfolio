import React, { useEffect, useState } from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  const [blockSize, setBlockSize] = useState(18);
  const [blockMargin, setBlockMargin] = useState(6);
  const [fontSize, setFontSize] = useState(14);

  useEffect(() => {
    function updateSizes() {
      const w = window.innerWidth;
      if (w < 420) {
        setBlockSize(10);
        setBlockMargin(4);
        setFontSize(10);
      } else if (w < 768) {
        setBlockSize(14);
        setBlockMargin(5);
        setFontSize(12);
      } else if (w < 1024) {
        setBlockSize(16);
        setBlockMargin(6);
        setFontSize(13);
      } else {
        setBlockSize(18);
        setBlockMargin(6);
        setFontSize(14);
      }
    }

    updateSizes();
    window.addEventListener("resize", updateSizes);
    return () => window.removeEventListener("resize", updateSizes);
  }, []);

  return (
    <Row
      style={{
        justifyContent: "center",
        paddingBottom: "10px",
        color: "white",
      }}
    >
      <h1 className="project-heading pb-4" style={{ paddingBottom: "20px" }}>
        Days I <strong className="purple">Code</strong>
      </h1>

      <div style={{ width: "100%", overflowX: "auto", padding: "0 12px" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <GitHubCalendar
            username="Jubikk"
            blockSize={blockSize}
            blockMargin={blockMargin}
            color="#c084f5"
            fontSize={fontSize}
          />
        </div>
      </div>
    </Row>
  );
}

export default Github;
