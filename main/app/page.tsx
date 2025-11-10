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
      <div className="min-h-screen w-full bg-white relative text-gray-800 flex flex-col items-center justify-center p-2 md:p-8">
        {/* Background Pattern */}
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            backgroundImage: `
              repeating-linear-gradient(0deg, transparent, transparent 20px, rgba(75, 85, 99, 0.08) 20px, rgba(75, 85, 99, 0.08) 21px),
              repeating-linear-gradient(90deg, transparent, transparent 30px, rgba(107, 114, 128, 0.06) 30px, rgba(107, 114, 128, 0.06) 31px),
              repeating-linear-gradient(60deg, transparent, transparent 40px, rgba(55, 65, 81, 0.05) 40px, rgba(55, 65, 81, 0.05) 41px),
              repeating-linear-gradient(150deg, transparent, transparent 35px, rgba(31, 41, 55, 0.04) 35px, rgba(31, 41, 55, 0.04) 36px)
            `,
          }}
        />

        {/* Content Box - center stage */}
        <div className="relative z-10 w-full max-w-xl">
          <div className="h-[500px] md:h-[520px] flex flex-col overflow-hidden">
            <Tabs
              value={activeTab}
              onValueChange={setActiveTab}
              className="h-full flex flex-col"
            >
              {/* Tab header with jacob fu */}
              <div className="flex-shrink-0 border-b border-gray-200 px-2 md:px-3 pt-3 md:pt-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3 md:mb-4 gap-2">
                  <div className="flex items-center gap-3 md:gap-6">
                    <div className="flex items-center">
                      <h1 className="text-lg md:text-2xl font-bold text-gray-900">
                        jacob fu
                      </h1>
                    </div>
                    <TabsList>
                      <TabsTrigger value="about" className="text-xs md:text-sm">
                        about
                      </TabsTrigger>
                      <TabsTrigger
                        value="projects"
                        className="text-xs md:text-sm"
                      >
                        projects
                      </TabsTrigger>
                      <TabsTrigger
                        value="chat with me"
                        className="text-xs md:text-sm"
                      >
                        chat with me
                      </TabsTrigger>
                    </TabsList>
                  </div>
                  <SocialLinks />
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
          <div className="w-full px-2 md:px-4 mt-1 md:mt-2">
            <MiniChatInput
              value={inputValue}
              onChange={setInputValue}
              onSubmit={handleChatSubmit}
              disabled={isLoading}
            />
          </div>
        </div>

        {/* Charlie and Snoopy at bottom of screen */}
        <div className="fixed bottom-1 md:bottom-2 left-1/2 -translate-x-1/2 w-full max-w-xl opacity-60 px-2 md:px-8">
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
