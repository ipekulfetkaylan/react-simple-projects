import React from "react";

const Comments = ({ confirm, setFormArray}) => {
  return (
    <div className="comment-section mt-5">
      <h4 className="fw-medium">Comments</h4>
      <div className="comment-container">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Name Surname</th>
              <th scope="col">Email</th>
              <th scope="col">Messages</th>
            </tr>
          </thead>
          <tbody>
            {confirm &&
              confirm.map((item, index) => {
                return (
                  <tr key={index+1}>
                    <td>{item.nameSurname}</td>
                    <td>{item.mail}</td>
                    <td>{item.messages}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Comments;
