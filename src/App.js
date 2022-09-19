import { Route, Routes } from "react-router-dom";
import { Layout } from "./components";
import Mainpage from "./pages/Mainpage";
import Quizpage from "./pages/QuziPage";
import TestCodePage from "./pages/TestCodePage"

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Mainpage />} />
        <Route path="/quiz" element={<Quizpage />} />
        <Route path="/testcode" element={<TestCodePage />} />
      </Routes>
    </Layout>
  );
}

export default App;
