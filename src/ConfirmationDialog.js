import React from "react";
import "./App.css";
export default function ConfirmationDialog({
  message,
  onCancel,
  onConfirm,
  isOpen,
}) {
  if (!isOpen) return null;

  return (
    <div className="box">
      <div className="Confirmation">
        <p>Confirmation</p>
        <p>{message}</p>
        <div>
          <button onClick={onCancel}>Cancel</button>
          <button onClick={onConfirm}>Confirm</button>
        </div>
      </div>
    </div>
  );
}
