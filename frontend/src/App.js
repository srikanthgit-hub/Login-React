import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"


function App() {
  const navigate = useNavigate()
  const [user, setuser] = useState("")
  const [pass, setpass] = useState("")

  function handleuser(event) {
    setuser(event.target.value)
  }

  function handlepass(event) {
    setpass(event.target.value)
  }


  function check() {
    var logindetails = axios.get(`http://localhost:5000/login?username=${user} & password=${pass}`)
    logindetails.then(function (data) {
      if(data.data === true)
        {
          navigate("/success")
        }
        else{
      navigate("/fail")
        }
    })
  }
  return (
    <div>
      <input onChange={handleuser} name="username" placeholder="username"></input>
      <input onChange={handlepass} name="password" placeholder="password"></input>
      <button onClick={check}>Login</button>
    </div>


  )
}

export default App