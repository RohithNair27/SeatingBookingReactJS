import ReactRouters from "./navigation/ReactRouters";
import AuthProvider from "./contexts/AuthContext/AuthProvider";
import "./styles/Global.css";
function App() {
  return (
    <AuthProvider>
      <ReactRouters />;
    </AuthProvider>
  );
}

export default App;
