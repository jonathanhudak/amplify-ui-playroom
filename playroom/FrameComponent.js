import React from "react";
import { ThemeProvider } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

export default function FrameComponent({ theme, children }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
