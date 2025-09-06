import { Input } from "@/components/ui/input";
import { FaArrowUp } from "react-icons/fa";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8">
      <div className="text-center space-y-8">
        <h1 className="text-4xl font-bold tracking-tight">Welcome</h1>
        <div className="w-full max-w-md relative">
          <Input 
            type="text" 
            placeholder="Search..." 
            className="w-full pr-12"
          />
          <button className="absolute right-3 top-1/2 transform -translate-y-1/2 p-1 hover:bg-gray-100 rounded">
            <FaArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
