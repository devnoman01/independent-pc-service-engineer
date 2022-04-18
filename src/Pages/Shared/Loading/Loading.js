import React from "react";

const Loading = () => {
  return (
    <div className="mx-auto my-auto w-50 d-flex justify-content-center align-items-center">
      <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default Loading;
