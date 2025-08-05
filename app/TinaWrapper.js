"use client";

import { TinaCMS, TinaProvider } from "tinacms";
import { useState, useEffect } from "react";
import { CustomMediaStore } from "@/lib/CustomMediaStore";

const cms = new TinaCMS({
  enabled: false,
  sidebar: true,
  toolbar: true,
  media: new CustomMediaStore(), // ✅ Correct media store config
});

export default function TinaWrapper({ children }) {
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    if (searchParams.has("edit")) enableTina();
  }, []);

  function enableTina() {
    cms.enable();
    setEditMode(true);
    updateUrl(true);
  }

  function disableTina() {
    cms.disable();
    setEditMode(false);
    updateUrl(false);
  }

  function updateUrl(enable) {
    const url = new URL(window.location.href);
    enable ? url.searchParams.set("edit", "true") : url.searchParams.delete("edit");
    window.history.replaceState({}, "", url);
  }

  return (
    <TinaProvider cms={cms}>
      {children}
      <button
        onClick={() => (editMode ? disableTina() : enableTina())}
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          zIndex: 9999,
          padding: "10px 16px",
          background: editMode ? "#E74C3C" : "#2C2E74",
          color: "#fff",
          border: "none",
          borderRadius: "8px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
          cursor: "pointer",
        }}
      >
        {editMode ? "Exit Edit Mode" : "Edit Mode"}
      </button>
    </TinaProvider>
  );
}
