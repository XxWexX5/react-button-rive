import { useState } from "react";

import { useRive } from "@rive-app/react-canvas";

import { motion, AnimatePresence } from "framer-motion";

const STATE_MACHINE_NAME = "State Machine 1";
export function App() {
  const [isShowMessage, setIsShowMessage] = useState(false);

  const { RiveComponent } = useRive({
    src: "/button-red.riv",
    stateMachines: STATE_MACHINE_NAME,
    autoplay: true,
  });

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        backgroundColor: "#74F4DD",
      }}
    >
      <div style={{ position: "relative" }}>
        <AnimatePresence>
          {isShowMessage && (
            <motion.h2
              style={{
                color: "#FF6969",
                position: "absolute",
                top: -75,
                left: 0,
                right: 0,
                margin: "auto",
                textAlign: "center",
                fontSize: "1.8rem",
                width: "100%",
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
            >
              Hello World Rive!
            </motion.h2>
          )}
        </AnimatePresence>

        <div
          onClick={() => setIsShowMessage(!isShowMessage)}
          style={{ width: 250, height: 110, cursor: "pointer" }}
        >
          <RiveComponent />
        </div>
      </div>
    </div>
  );
}
