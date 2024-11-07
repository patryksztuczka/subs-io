import { Button } from "./button";
import { HelpCircleIcon, HomeIcon, SettingsIcon } from "lucide-react";

const Sidebar = () => {
  return (
    <div className="w-48 min-w-48 bg-white shadow-md">
      <div className="p-4">
        <h2 className="text-2xl font-bold text-gray-800">Subs.io</h2>
      </div>
      <nav className="mt-6">
        <Button variant="ghost" className="w-full justify-start p-4">
          <HomeIcon className="mr-4 h-5 w-5" />
          Home
        </Button>
        <Button variant="ghost" className="w-full justify-start p-4">
          <SettingsIcon className="mr-4 h-5 w-5" />
          Settings
        </Button>
        <Button variant="ghost" className="w-full justify-start p-4">
          <HelpCircleIcon className="mr-4 h-5 w-5" />
          Help
        </Button>
      </nav>
    </div>
  );
};

export default Sidebar;
