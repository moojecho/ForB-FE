// import logo from "./logo.svg";
// import "./App.css";
// import { useLocation, Link } from "react-router-dom";
// import { useState } from "react";
// import useInput from "./hooks/useInput";
// function App() {
//   const GOOGLE_LOGIN_URL = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${"794171343937-g70piel9elaem7vqkg74ro3acq7hibsc.apps.googleusercontent.com"}&redirect_uri=${"http://localhost:3000"}&response_type=code&scope=https://www.googleapis.com/auth/userinfo.email`;
//   const location = useLocation();
//   const searchParams = new URLSearchParams(location.search);
//   const authorizationCode = searchParams.get("code");
//   console.log(authorizationCode);

//   const [inputs, onChange] = useInput();
//   return (
//     <div className="App">
//       <a href={GOOGLE_LOGIN_URL}>구글</a>
//       <input onChange={onChange} />
//       {inputs}
//     </div>
//   );
// }

// export default App;
