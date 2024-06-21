import SignUp from './SignUp.jsx';
import {Container} from 'react-bootstrap'
import {AuthProvider} from '../contexts/AuthContext'
import Dashboard from './Dashboard.jsx'
import LogIn from './LogIn.jsx'
import {createBrowserRouter,createRoutesFromElements,RouterProvider,Route} from 'react-router-dom'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/signup" element={<SignUp />} />
      <Route exact path="/" element={<Dashboard />} />
      <Route exact path="/login" element={<LogIn />} />
    </>
  )
);
const App=()=>{
  return(
      <Container
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "100vh" }}
      >
      <div className="w-100" style={{ maxWidth: "400px" }}>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
      </div>
      </Container>
  );
}

export default App