import './App.css'
import Home from "./pages/home";
import { AuthUserProvider } from './firebase/auth'


function App()
{

  return (
    <>
      <AuthUserProvider>
        <Home /> 
      </AuthUserProvider>
    </>
  )
}

export default App
