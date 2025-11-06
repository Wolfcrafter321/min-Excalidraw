import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import { Excalidraw } from "@excalidraw/excalidraw";

// 事前に用意したExcalidrawファイルのパス
// const EXCALIDRAW_FILE = "example.excalidraw";

function App({ fileUrl }) {
  const [scene, setScene] = useState(null);

  // useEffect(() => {
  //   fetch(EXCALIDRAW_FILE)
  //     .then(res => res.json())
  //     .then(data => setScene(data))
  //     .catch(() => setScene(null));
  // }, []);

    useEffect(() => {
    if (!fileUrl) return;

      fetch(fileUrl)
        .then(res => {
          if (!res.ok) throw new Error("Excalidraw file not found: " + fileUrl);
          return res.json();
        })
        .then(data => setScene(data))
        .catch(err => {
          console.error("Error loading file:", err);
          setScene(null);
        });
  }, [fileUrl]);


  return (
    <div style={{ height: "300px" }}>
      {scene &&
        (<Excalidraw

          initialData={
            scene
          }
          viewModeEnabled={true}
          zenModeEnabled={true}
          gridModeEnabled={true}
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

// const root = createRoot(document.getElementById("Excalidraw"));
// root.render(<App />);
// -------- 複数のdivを処理 --------
document.querySelectorAll(".Excalidraw").forEach(div => {
  const fileUrl = div.dataset.url;
  const root = createRoot(div);
  console.log(fileUrl);
  root.render(<App fileUrl={fileUrl} />);
});