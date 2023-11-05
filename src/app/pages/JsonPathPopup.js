"use client";

const JsonPathPopup = ({ showPathPopup, setShowPathPopup }) => {
  return (
    <dialog className={`modal ${showPathPopup && "modal-open"}`}>
      <div className="modal-box">
        <h3 className="font-bold text-lg">Hello!</h3>
        <p className="py-4">Press ESC key or click the button below to close</p>
        <button onClick={() => setShowPathPopup(false)} className="btn">
          Close
        </button>
      </div>
    </dialog>
  );
};

export default JsonPathPopup;
