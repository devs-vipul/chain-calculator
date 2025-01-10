import React, { useEffect } from "react";

interface SnackbarProps {
  message: string;
  isVisible: boolean;
  onClose: () => void;
}

export function Snackbar({ message, isVisible, onClose }: SnackbarProps) {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50">
      <div className="bg-custom-orange text-white px-4 py-2 rounded-md shadow-lg flex items-center text-sm">
        <span>{message}</span>
        <button onClick={onClose} className="ml-4 focus:outline-none">
          X
        </button>
      </div>
    </div>
  );
}
