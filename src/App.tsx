import { useState } from "react";
import { invoke } from "@tauri-apps/api/core";
import { open } from "@tauri-apps/plugin-dialog";
import RootLayout from "./components/layouts/root-layout";
import { getFileNameFromPath } from "./utils/functions/file-functions";
import File from "./components/ui/file";
import {
  DownloadIcon,
  FileAudioIcon,
  Folder,
  LoaderIcon,
  MusicIcon,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./components/ui/card";
import { Button } from "./components/ui/button";
import { Textarea } from "./components/ui/textarea";
import { Progress } from "@radix-ui/react-progress";

function App() {
  const [greetMsg, setGreetMsg] = useState("");
  const [name, setName] = useState("");
  const [filePath, setFilePath] = useState<string | null>(null);

  async function greet() {
    // Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
    setGreetMsg(await invoke("greet", { name }));
  }

  async function handlePickFile() {
    const filePath = await open({
      multiple: false,
      directory: false,
    });
    if (filePath) {
      setFilePath(filePath);
    }
    // await invoke("extract_audio", { file_path: filePath });
  }

  return (
    <RootLayout>
      {/* Main Content */}
      <div className="flex-1 overflow-auto p-8">
        <Card className="w-full max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-center">
              Generate Subtitles
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <label
                htmlFor="audio-file"
                className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"
              >
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <FileAudioIcon className="w-10 h-10 mb-3 text-gray-400" />
                  <p className="mb-2 text-sm text-gray-500">
                    <span className="font-semibold">Click to upload</span> or
                    drag and drop
                  </p>
                  <p className="text-xs text-gray-500">
                    MP3, WAV, or OGG (MAX. 800MB)
                  </p>
                </div>
                <input
                  id="audio-file"
                  type="file"
                  className="hidden"
                  onChange={handlePickFile}
                  accept="audio/*"
                />
              </label>
              {filePath && (
                <div className="text-sm text-gray-700 bg-gray-100 p-3 rounded-lg flex items-center">
                  <FileAudioIcon className="text-green-500 mr-2" />
                  Selected file: {getFileNameFromPath(filePath)}
                </div>
              )}
            </div>
            <Button
              // onClick={handleProcessing}
              // disabled={!file || isProcessing}
              className="w-full text-lg py-6"
            >
              {/* {isProcessing ? (
                <>
                  <LoaderIcon className="mr-2 h-6 w-6 animate-spin" />
                  Processing...
                </>
              ) : (
                <>
                  <MusicIcon className="mr-2 h-6 w-6" />
                  Generate Subtitles
                </>
              )} */}
              <MusicIcon className="mr-2 h-6 w-6" />
              Generate Subtitles
            </Button>
            {/* {isProcessing && <Progress value={progress} className="w-full" />} */}
          </CardContent>
        </Card>

        {/* Subtitles Preview */}
        <Card className="w-full max-w-4xl mx-auto mt-6">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">
              Subtitles Preview
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Textarea
              // value={result}
              readOnly
              placeholder="Generated subtitles will appear here..."
              className="w-full h-64 p-4 text-sm font-mono bg-gray-50"
            />
          </CardContent>
          <CardFooter>
            <Button
              // onClick={handleExport}
              // disabled={!result}
              className="w-full"
            >
              <DownloadIcon className="mr-2 h-4 w-4" />
              Export Subtitles
            </Button>
          </CardFooter>
        </Card>
      </div>
      {/* <div className="flex flex-col w-full h-full"> */}
      {/* <h1 className="text-2xl font-bold tracking-wider text-pink-600">
          subs.io
        </h1> */}
      {/* <form
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
        </form>
        <p>{greetMsg}</p> */}
      {/* <div className="flex-1 rounded-md bg-pink-600/10 flex justify-center items-center">
          {filePath && (
            <File name={getFileNameFromPath(filePath)} extension=".mp3" />
          )}
          <div className="flex flex-col items-center gap-6">
            <p>Pick an audio file to process</p>
            <button
              type="button"
              onClick={warn}
              className="border border-white flex gap-4 px-3 py-1"
            >
              <Folder />
              Pick file
            </button>
          </div>
        </div> */}
      {/* </div> */}
    </RootLayout>
  );
}

export default App;
