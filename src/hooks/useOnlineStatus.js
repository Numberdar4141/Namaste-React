import { useEffect, useState } from "react";

export const useOnlineStatus = () => {
  const [onLineStatus, setOnLineStatus] = useState(true);
  useEffect(() => {
    window.addEventListener("online", () => {
      setOnLineStatus(true);
    });
    window.addEventListener("offline", () => {
      setOnLineStatus(false);
    });
  }, []);

  return onLineStatus;
};
