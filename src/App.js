import { createUserWithEmailAndPassword, getAuth, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import app from "./firebase.init";
import { useState } from "react";

const auth = getAuth(app);
function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [validated, setValidated] = useState(false);
  const [error, setError] = useState('');
  const [registered, setRegistered] = useState(false)

  const handleEmailBlur = event => {
    setEmail(event.target.value)
  }
  const handlePasswordBlur = event => {
    setPassword(event.target.value)
  }
  const handleRegisteredChange = event => {
    setRegistered(event.target.checked);
  }

  const handleSubmitBtn = event => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
      return;
    }
    if (!/(?=.*[!@#$&*])/.test(password)) {
      setError('Password Should contain al least one special character');
      return;
    }
    setValidated(true);
    setError('');
    if (registered) {
      signInWithEmailAndPassword(auth, email, password)
        .then(result => {
          const user = result.user;
          console.log(user)
        })
        .catch(error => {
          setError(error.message)
        })

    }
    else {
      createUserWithEmailAndPassword(auth, email, password)
        .then(result => {
          const user = result.user;
          console.log(user);
          setEmail('');
          setPassword('');
          emailVerification();
        })
        .catch(error => {
          setError(error.message);
        })
    }
    event.preventDefault();
  };

  const emailVerification = () => {
    sendEmailVerification(auth.currentUser)
      .then(() => {
        console.log('Email verification sent')
      })
  };

  const resetPassword = () => {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        console.log('email sent')
      })
  };
  return (
    <div>

      <div className="registration w-50 mx-auto">
        <h1 className="text-center">Please {registered ? 'Login' : 'Register'}</h1>

        <Form noValidate validated={validated} onSubmit={handleSubmitBtn}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control onBlur={handleEmailBlur} type="email" placeholder="Enter email" required />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
            <Form.Control.Feedback type="invalid">
              Please Provide a valid Email
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control onBlur={handlePasswordBlur} type="password" placeholder="Password" required />

            <Form.Control.Feedback type="invalid">
              Please Provide a valid Password
            </Form.Control.Feedback>
            <p className="text-danger">{error}</p>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check onChange={handleRegisteredChange} type="checkbox" label="Already Registered?" />
          </Form.Group>
          <Button onClick={resetPassword} variant="link">Forget Password?</Button><br />
          <Button variant="primary" type="submit">
            {registered ? 'Login' : 'Register'}
          </Button>
        </Form>
      </div>

    </div>
  );
}

export default App;
