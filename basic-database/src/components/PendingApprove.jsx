

const PendingApprove = ({ formArray, setFormArray,setConfirm}) => {
  const saveItem = (id) => {
    const confirmedItem = formArray.find(item => item.id === id);
    setConfirm((prevItems)=>([...prevItems,confirmedItem]));
    setFormArray(formArray.filter(item => item.id !== id))
  };
  
  

  const removeItem = (id) => {
    setFormArray((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  return (
    <div className="approve-container" style={{ flex: "" }}>
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
          {formArray &&
            formArray.map((item, index) => {
              return (
                <tr key={index+1}>
                  <td>{item.nameSurname}</td>
                  <td>{item.mail}</td>
                  <td>{item.messages}</td>
                  <td>
                    <span
                      className="ms-2 me-5"
                      onClick={()=> saveItem(item.id)}
                      style={{ cursor: "pointer" }}
                    >
                      <i className="fa-solid fa-check"></i>
                    </span>
                    <span
                      className="ms-4"
                      onClick={() => removeItem(item.id)}
                      style={{ cursor: "pointer" }}
                    >
                      <i className="fa-solid fa-xmark"></i>
                    </span>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default PendingApprove;
