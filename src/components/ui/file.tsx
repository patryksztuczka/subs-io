import { FileAudio } from "lucide-react";

interface IProps {
  name: string;
  extension: string;
}

const File = ({ name, extension }: IProps) => {
  return (
    <div className="border-2 rounded-md border-pink-600 w-40 h-48 flex flex-col justify-around overflow-hidden px-3">
      <div className="h-24 bg-pink-600/20 p-2 rounded-md">
        <FileAudio className="w-full h-full stroke-pink-600" />
      </div>
      <span className="truncate font-medium">{name}</span>
    </div>
  );
};

export default File;
