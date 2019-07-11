import React from "react";

const CreateBtn = ({ onClick }) => {
  return (
    <button onClick={onClick} className="btn btn-primary">
      创建一条新的记账记录
    </button>
  );
};

export default CreateBtn;
