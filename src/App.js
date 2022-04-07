import { getAuth } from "firebase/auth";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import app from "./firebase.init";

const auth = getAuth(app);
function App() {
  const handleEmailBlur = event => {
    console.log(event.target.value)
  }
  const handlePasswordBlur = event => {
    console.log(event.target.value)
  }
  const handleSubmitBtn = event => {
    event.preventDefault();
  }
  return (
    <div>

   <div className="registration w-50 mx-auto">
     <h1 className="text-center">Please Resister</h1>
   <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
   </div>

    </div>
  );
}

export default App;
