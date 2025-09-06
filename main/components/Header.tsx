import Image from "next/image";

export default function Header() {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 border-b border-gray-200 pb-4 sm:pb-6 mb-4 sm:mb-6">
      <div className="w-24 h-24 sm:w-32 sm:h-32 flex-shrink-0 mx-auto sm:mx-0">
        <Image
          src="/headshot.png"
          alt="Profile headshot"
          width={128}
          height={128}
          className="w-full h-full object-cover rounded-full border-2 sm:border-4 border-gray-200"
          priority
        />
      </div>
      <div className="flex-1 text-center sm:text-left">
        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight mb-3 sm:mb-4">
          hello! i&apos;m jacob fu <span className="ml-2 sm:ml-4">:{" )"}</span>
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 sm:gap-x-8 gap-y-1 sm:gap-y-2 text-xs sm:text-sm">
          <div>• incoming @hubspot</div>
          <div>• cs & finance @uwaterloo &apos;29</div>
          <div>• looking for internships W&apos;26, S&apos;26</div>
          <div>• waterloo, on</div>
        </div>
      </div>
    </div>
  );
}
