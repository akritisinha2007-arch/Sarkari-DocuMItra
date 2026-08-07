import { useState } from "react";

function ChatBox() {

  const [message, setMessage] = useState("");

  return (

    <div className="bg-slate-900 rounded-3xl p-8">

      <h2 className="text-3xl font-bold text-cyan-400">

        Ask AI

      </h2>

      <input
        className="mt-8 w-full bg-slate-800 p-4 rounded-xl"
        placeholder="Ask anything..."
        value={message}
        onChange={(e)=>setMessage(e.target.value)}
      />

    </div>

  );

}

export default ChatBox;