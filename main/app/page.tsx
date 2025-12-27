"use client";

import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import SocialLinks from "@/components/SocialLinks";
import MiniChatInput from "@/components/MiniChatInput";
import Messages from "@/components/Messages";
import FakeMessages from "@/components/FakeMessages";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useChat } from "@/hooks/useChat";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const { messages, inputValue, isLoading, setInputValue, handleSubmit } =
    useChat();

  const [activeTab, setActiveTab] = useState("about");

  const handleChatSubmit = () => {
    handleSubmit();
    setActiveTab("chat with me");
  };

  return (
    <main>
      <div className="min-h-screen w-full bg-white dark:bg-gray-900 relative text-gray-800 dark:text-gray-200 flex flex-col items-center justify-start md:justify-center p-2 md:p-8">
        {/* Noise Texture (Darker Dots) Background */}

        {/* Content Box - center stage */}
        <div className="relative z-10 w-full max-w-xl flex-1 md:flex-none flex flex-col">
          <div className="h-full md:h-[520px] flex flex-col overflow-hidden">
            <Tabs
              value={activeTab}
              onValueChange={setActiveTab}
              className="h-full flex flex-col"
            >
              {/* Tab header with jacob fu */}
              <div className="flex-shrink-0 px-2 md:px-3 pt-3 md:pt-6">
                <div className="mb-3 md:mb-4 space-y-2 md:space-y-0 border-b border-gray-200 dark:border-gray-700 pb-3 md:pb-4">
                  <div className="flex justify-between mb-2 md:mb-3 items-center">
                    <h1 className="text-lg md:text-2xl font-bold text-gray-900 dark:text-white">
                      jacob fu{" "}
                    </h1>
                    <span className="dark:text-gray-400 text-gray-500 md:font-light text-sm md:text-lg italic">
                      figuring things out day by day
                    </span>
                  </div>
                  <div className="flex items-center justify-between gap-2">
                    <TabsList>
                      <TabsTrigger value="about" className="text-xs md:text-sm">
                        me
                      </TabsTrigger>
                      <TabsTrigger
                        value="projects"
                        className="text-xs md:text-sm"
                      >
                        stuff
                      </TabsTrigger>
                      <TabsTrigger
                        value="chat with me"
                        className="text-xs md:text-sm"
                      >
                        chat
                      </TabsTrigger>
                    </TabsList>
                    <SocialLinks />
                  </div>
                </div>
              </div>

              {/* Tab content */}
              <div className="flex-1 overflow-y-auto">
                <TabsContent
                  value="about"
                  className="mt-0 px-2 md:px-3 py-1 md:py-2 space-y-4 md:space-y-6"
                >
                  <About />
                </TabsContent>

                <TabsContent
                  value="projects"
                  className="mt-0 px-2 md:px-3 py-1 md:py-2 space-y-4 md:space-y-6"
                >
                  <Projects />
                </TabsContent>

                <TabsContent value="chat with me" className="mt-0 h-full">
                  <div className="h-full px-2 md:px-3 py-1 md:py-2">
                    {messages.length === 0 && <FakeMessages />}
                    <Messages
                      messages={messages}
                      isLoading={isLoading}
                      fullHeight={false}
                    />
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>

          {/* Mini chat input below content box */}
          <div className="w-full mt-1 md:mt-2">
            <MiniChatInput
              value={inputValue}
              onChange={setInputValue}
              onSubmit={handleChatSubmit}
              isLoading={isLoading}
            />
          </div>
        </div>

        {/* Charlie and Snoopy at bottom of screen */}
        <div className="fixed bottom-1 md:bottom-2 left-1/2 -translate-x-1/2 w-40 md:w-52 opacity-60 dark:hidden">
          <Image
            src="/charlie-and-snoopy.svg"
            alt="Charlie Brown and Snoopy"
            width={800}
            height={200}
            className="w-full h-auto"
            priority
          />
        </div>
      </div>
    </main>
  );
}
