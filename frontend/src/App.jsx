import { useState } from "react";
import "./App.css";
import axios from "axios";
function App() {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("/api/email", { email });

      console.log("sucessfully sended email", response);
    } catch (err) {
      console.log("error occured while axios");
    }
  };
  return (
    <div className="flex justify-center  items-center h-screen">
      <form
        onSubmit={handleSubmit}
      >
        <input
          type="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border-2 rounded py-1 px-2"
        />
        

        <button
          type="submit"
        >
          Send
        </button>
      </form>
    </div>
  );
}

export default App;
