import { useEffect, useState, useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate, useParams } from 'react-router-dom';
import { userContext } from './ContextComponents/UserContextComponent'

function Edituser() {
  let context = useContext(userContext);
  let { id } = useParams();
  let navigate = useNavigate();
  let [name, setName] = useState("");
  let [dob, setDob] = useState("");
  let [mobile, setMobile] = useState("");
  let [batch, setBatch] = useState("");
  let [timings, setTimings] = useState("");

  useEffect(() => {
    setName(context.users[id].name);
    setDob(context.users[id].dob);
    setMobile(context.users[id].mobile);
    setBatch(context.users[id].batch);
    setTimings(context.users[id].timings);
  }, [context.users, id])

  let handleSubmit = () => {
    let newData = { name, dob, mobile, batch, timings };
    let newArray = [...context.users];
    newArray.splice(id, 1, newData);
    context.setUsers(newArray);
    navigate('/dashboard');
  }
  return <div className='container-fluid'>
    <h1>Edit User</h1>
    <Form>
      <Form.Group className="mb-3">
        <Form.Label>Name</Form.Label>
        <Form.Control placeholder="Enter your Name" type="text" value={name} onChange={(e) => { setName(e.target.value); }} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Date Of Birth</Form.Label>
        <Form.Control placeholder="Enter your Date Of Birth" value={dob} type="number" onChange={(e) => { setDob(e.target.value); }} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Mobile</Form.Label>
        <Form.Control placeholder="Enter your Mobile Number" value={mobile} type="text" onChange={(e) => { setMobile(e.target.value); }} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Batch</Form.Label>
        <Form.Control placeholder="Enter your Batch Number" value={batch} type="text" onChange={(e) => { setBatch(e.target.value); }} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Batch Timings</Form.Label>
        <Form.Select defaultValue={timings} aria-label="Default select example" onChange={(e) => { setTimings(e.target.value); }}>
          <option value="0" disabled>Select Session Timing</option>
          <option value="10am to 12pm">10am to 12pm</option>
          <option value="12pm to 2pm">12pm to 2pm</option>
          <option value="2pm to 4pm">2pm to 4pm</option>
        </Form.Select>
        <br />
        <Button varient="success" onClick={() => { handleSubmit() }}>Submit</Button>
      </Form.Group>
    </Form>
  </div>
}

export default Edituser;