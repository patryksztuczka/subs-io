import { useState } from "react";
import { invoke } from "@tauri-apps/api/core";
import { open } from "@tauri-apps/plugin-dialog";

function App() {
  const [greetMsg, setGreetMsg] = useState("");
  const [name, setName] = useState("");
  const [filePath, setFilePath] = useState<string | null>(null);

  async function greet() {
    // Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
    setGreetMsg(await invoke("greet", { name }));
  }

  async function hello() {
    setGreetMsg(await invoke("hello"));
  }

  async function warn() {
    const filePath = await open({
      multiple: false,
      directory: false,
    });
    setFilePath(filePath);
    await invoke("extract_audio", { file_path: filePath });
  }

  return (
    <main>
      <h1>Welcome to Tauri + React</h1>

      <form
        className="row"
        onSubmit={(e) => {
          e.preventDefault();
          greet();
        }}
      >
        <input
          id="greet-input"
          onChange={(e) => setName(e.currentTarget.value)}
          placeholder="Enter a name..."
        />
        <button type="submit">Greet</button>
        <button type="button" onClick={hello}>
          Hello
        </button>
      </form>
      <p>{greetMsg}</p>
      <button type="button" onClick={warn}>
        Pick file
      </button>
      {filePath && <div>{filePath}</div>}
    </main>
  );
}

export default App;
