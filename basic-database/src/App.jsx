import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-md-5 mt-5">
            <div className='form-floating mb-4'>
              <input type="text" class="form-control" id="form-control2" placeholder="User Name" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
              <label htmlFor="form-control2">Name Surname</label>
            </div>
            <div className='form-floating mb-4'>
              <input type="text" class="form-control" id="form-control" placeholder="E-mail" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
              <label htmlFor="form-control">Mail</label>
            </div>
            <div class="form-floating mb-4">
              <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{height:"100px"}}></textarea>
              <label htmlFor="floatingTextarea2">Comments</label>
            </div>
            <button className='btn btn-danger float-end'>Send</button>

            <div className="comment-section mt-5">
              <h4 className="fw-medium">Comments</h4>
              <div className="comment-container">
              <table class="table">
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
          </div>
          <div className="col-md-7 mt-5">
            <div className="approve-container">
              <h4 className="fw-medium">Pending approval</h4>
            <table class="table">
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
                      <span className='ms-2 me-5' style={{cursor:"pointer"}}><i class="fa-solid fa-check"></i></span>
                      <span className='ms-4' style={{cursor:"pointer"}}><i class="fa-solid fa-xmark"></i></span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

          </div>
        </div>
      </div>
      
      
    </div>
  );
}

export default App;
