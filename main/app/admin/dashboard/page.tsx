"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import BackgroundPattern from "@/components/BackgroundPattern";

export default function AdminDashboard() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);
  const [pdfKey, setPdfKey] = useState(Date.now()); // Used to force refresh PDF viewer

  useEffect(() => {
    const auth = localStorage.getItem("jacob_fu_admin");
    if (auth !== "true") {
      router.push("/admin");
    } else {
      setIsAuthenticated(true);
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem("jacob_fu_admin");
    router.push("/admin");
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile && selectedFile.type === "application/pdf") {
      setFile(selectedFile);
      setMessage(null);
    } else {
      setMessage({ type: "error", text: "Please select a PDF file" });
      setFile(null);
    }
  };

  const handleUpload = async () => {
    if (!file) {
      setMessage({ type: "error", text: "Please select a file first" });
      return;
    }

    setUploading(true);
    setMessage(null);

    try {
      const formData = new FormData();
      formData.append("file", file);

      const response = await fetch("/api/upload-cv", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (response.ok) {
        setMessage({
          type: "success",
          text: `CV uploaded successfully! Available at ${data.url}`,
        });
        setFile(null);
        setPdfKey(Date.now()); // Force refresh the PDF viewer
        // Reset file input
        const fileInput = document.getElementById(
          "cv-upload"
        ) as HTMLInputElement;
        if (fileInput) fileInput.value = "";
      } else {
        setMessage({ type: "error", text: data.error || "Upload failed" });
      }
    } catch (error) {
      setMessage({ type: "error", text: "Upload failed. Please try again." });
      console.error("Upload error:", error);
    } finally {
      setUploading(false);
    }
  };

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="min-h-screen w-full bg-white relative p-4 md:p-8">
      <BackgroundPattern />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-200">
          <h1 className="text-2xl font-bold text-gray-900">CV Manager</h1>
          <button
            onClick={handleLogout}
            className="px-4 py-2 text-sm border border-gray-300 hover:bg-gray-50 transition-colors"
          >
            Logout
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Upload Section */}
          <div className="bg-white border border-gray-200 p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              Upload New CV
            </h2>
            <p className="text-sm text-gray-600 mb-4">
              Upload a PDF that will be accessible at{" "}
              <a
                href="https://cv.jacobfu.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                cv.jacobfu.com
              </a>
            </p>

            <div className="space-y-4">
              <div>
                <input
                  type="file"
                  id="cv-upload"
                  accept=".pdf"
                  onChange={handleFileChange}
                  className="block w-full text-sm text-gray-600
                    file:mr-4 file:py-2 file:px-4
                    file:border file:border-gray-300
                    file:text-sm file:font-medium
                    file:bg-white file:text-gray-700
                    hover:file:bg-gray-50
                    file:transition-colors"
                />
              </div>

              {file && (
                <div className="flex items-center justify-between p-3 bg-gray-50 border border-gray-200">
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-gray-600">Selected:</span>
                    <span className="font-medium text-gray-900">
                      {file.name}
                    </span>
                    <span className="text-gray-500">
                      ({(file.size / 1024 / 1024).toFixed(2)} MB)
                    </span>
                  </div>
                </div>
              )}

              {message && (
                <div
                  className={`p-3 border ${
                    message.type === "success"
                      ? "bg-green-50 border-green-200 text-green-800"
                      : "bg-red-50 border-red-200 text-red-800"
                  }`}
                >
                  <p className="text-sm">{message.text}</p>
                </div>
              )}

              <button
                onClick={handleUpload}
                disabled={!file || uploading}
                className="w-full px-6 py-2 bg-gray-900 text-white hover:bg-gray-800 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
              >
                {uploading ? "Uploading..." : "Upload CV"}
              </button>
            </div>
          </div>

          {/* PDF Viewer Section */}
          <div className="bg-white border border-gray-200 p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              Current CV Preview
            </h2>
            <div
              className="border border-gray-200 bg-gray-50 overflow-hidden"
              style={{ height: "600px" }}
            >
              <iframe
                key={pdfKey}
                src={`https://cdn.jacobfu.com/jacob-fu-resume.pdf?t=${pdfKey}`}
                className="w-full h-full"
                title="CV Preview"
              />
            </div>
            <p className="text-xs text-gray-500 mt-2">
              Showing: jacob-fu-resume.pdf
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
