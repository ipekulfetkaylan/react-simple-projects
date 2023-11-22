import React from "react";

const JobBtn = ({ jobs, setValue, value }) => {
  return (
    <div className="btn-container">
      {jobs.map((job, i) => {
        return (
          <button
            className={`job-btn ${value === i && "active-btn"}`}
            key={i}
            onClick={() => setValue(i)}
          >
            {job.company}
          </button>
        );
      })}
    </div>
  );
};

export default JobBtn;
