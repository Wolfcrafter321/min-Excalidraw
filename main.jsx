import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import { Excalidraw } from "@excalidraw/excalidraw";

// 事前に用意したExcalidrawファイルのパス
const EXCALIDRAW_FILE = "example.excalidraw";

function App() {
  const [scene, setScene] = useState(null);

  useEffect(() => {
    fetch(EXCALIDRAW_FILE)
      .then(res => res.json())
      .then(data => setScene(data))
      .catch(() => setScene(null));
  }, []);

  console.log(scene);

  return (
    <div style={{ height: "100vh" }}>
      {scene &&
        (<Excalidraw
        initialData={scene}
        viewModeEnabled={true}
        zenModeEnabled={true}
        gridModeEnabled={false}
        UIOptions={{
            canvasActions: {
                changeViewBackgroundColor: false,
                clearCanvas: false,
                export: false,
                exportSelection: false,
                saveToActiveFile: false,
                saveAsImage: false,
                saveAsScene: false,
                loadScene: false,
                toggleGridMode: false,
                toggleZenMode: false,

                canvasActions: false
            },
        }}
      />)
      }
    </div>
  );
}

const root = createRoot(document.getElementById("Excalidraw"));
root.render(<App />);