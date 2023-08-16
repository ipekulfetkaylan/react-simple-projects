 import React from 'react'
 
 const Comments = () => {
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
                  <tr>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                </tbody>
              </table>
            </div>
        </div>
   )
 }
 
 export default Comments
 