import Image from "next/image";
import { FaCalendarAlt } from "react-icons/fa";

export default function Header() {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 border-b border-gray-200 pb-4 sm:pb-6 mb-4 sm:mb-6 animate-in slide-in-from-top duration-700">
      <div className="w-24 h-24 rotate-230 sm:w-32 sm:h-32 flex-shrink-0 mx-auto sm:mx-0 animate-in zoom-in duration-500 delay-200">
        <Image
          src="/headshot.jpg"
          alt="Profile headshot"
          width={128}
          height={128}
          className="w-full h-full object-cover rounded-full border-2 sm:border-4 border-gray-200 hover:border-blue-300 transition-colors duration-300"
          priority
        />
      </div>
      <div className="flex-1 text-center sm:text-left animate-in slide-in-from-top duration-600 delay-300">
        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight mb-3 sm:mb-4">
          helloooo! i&apos;m{" "}
          <span className="underline" style={{ color: "#ff5c36" }}>
            jacob fu
          </span>
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 sm:gap-x-8 gap-y-1 sm:gap-y-2 text-xs sm:text-sm">
          <div className="flex items-center gap-1">
            • prev SWE @hubspot
            <Image
              src="/hubspot.png"
              alt="HubSpot"
              width={14}
              height={14}
              className="inline rounded-full"
            />
          </div>
          <div className="flex items-center gap-1">
            • cs & finance @uwaterloo &apos;29
            <Image
              src="/waterloo.png"
              alt="University of Waterloo"
              width={14}
              height={14}
              className="inline"
            />
          </div>
          <div>
            • looking for internships W&apos;26, S&apos;26
          </div>
          <div>
            • waterloo, ON, canada
          </div>
          <div>
            • interested in building things
          </div>
          <div className="flex items-center gap-1 animate-in fade-in duration-500 delay-1000">
            <a
              href="https://calendar.app.google/QCosZGTnWDNeiCuz6"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 px-2 py-1 border border-gray-300 rounded-full bg-white text-gray-700 hover:text-gray-900 hover:border-gray-400 hover:scale-105 hover:shadow-md transition-all duration-300"
            >
              <div className="w-3 h-3 flex items-center justify-center">
                <FaCalendarAlt />
              </div>
              <span className="text-xs">book a meeting with me</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
