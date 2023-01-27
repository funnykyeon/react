import logo from "./logo.svg";
import "./App.css";
import { Calendar } from "antd";
import { FacebookOutlined } from "@ant-design/icons";
import { Row, Col } from "antd";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <FacebookOutlined />
        </p>
        <Calendar fullscreen={false} />
      </header>
    </div>
  );
}

export default App;
