import React from "react";

const PendingApprove = () => {
  return (
    <div className="approve-container" style={{flex:""}}>
      <h4 className="fw-medium">Pending approval</h4>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Name Surname</th>
            <th scope="col">Email</th>
            <th scope="col">Messages</th>
            <th scope="col">Approve / Reject</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>
              <span className="ms-2 me-5" style={{ cursor: "pointer" }}>
                <i className="fa-solid fa-check"></i>
              </span>
              <span className="ms-4" style={{ cursor: "pointer" }}>
                <i className="fa-solid fa-xmark"></i>
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default PendingApprove;
