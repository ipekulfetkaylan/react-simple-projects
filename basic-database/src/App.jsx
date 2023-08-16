import { useState } from 'react';
import './App.css';
import Comments from './components/Comments';
import Form from './components/Form';
import PendingApprove from './components/PendingApprove';

function App() {
  const [formData, setFormData]= useState({
    nameSurname:"",
    mail:"",
    messages:"",
  })
  
  const [formArray, setFormArray]= useState([]);
  const [confirm, setConfirm]= useState([])
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-md-5 mt-5">
            <Form formData={formData} setFormData={setFormData} formArray={formArray} setFormArray={setFormArray} />
            <Comments confirm={confirm} setConfirm={setConfirm} setFormArray={setFormArray} />
          </div>
          <div className="col-md-7 mt-5">
            <PendingApprove formArray={formArray} setFormArray={setFormArray} setConfirm={setConfirm} />
          </div>
        </div>
        </div>
      </div>
  );
}

export default App;
