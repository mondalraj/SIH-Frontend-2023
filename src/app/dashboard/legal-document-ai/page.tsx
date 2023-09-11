"use client";

import { storage } from "@/config/Firebase";
import { ref, uploadBytes } from "firebase/storage";
import { Notify } from "notiflix/build/notiflix-notify-aio";
import { useEffect, useState } from "react";

const LegalDocumentAI = () => {
  const [uploading, setUploading] = useState(false);
  const [file, setFile] = useState<File | null>(null);

  useEffect(() => {
    if (!file) return;
    if (file.type !== "application/pdf") {
      Notify.warning("Please upload a PDF file");
      return;
    }

    const storageRef = ref(storage, `legal-documents/${file.name}`);

    uploadBytes(storageRef, file)
      .then((snapshot) => {
        console.log(
          "Legal Document File URL: ",
          `https://firebasestorage.googleapis.com/v0/b/${
            snapshot.metadata.bucket
          }/o/legal-documents%2F${encodeURI(snapshot.metadata.name)}?alt=media`
        );
        Notify.success("File uploaded successfully");
        setUploading(false);
        setFile(null);
      })

      .catch((error) => {
        console.log(error);
        Notify.failure("Something went wrong, please try again");
        setUploading(false);
        setFile(null);
      });
  }, [file]);
  return (
    <div className="w-full h-full">
      <label className="flex justify-center w-full h-full px-4 transition  border-2 border-gray-300 border-dashed rounded-xl appearance-none cursor-pointer hover:border-gray-400 hover:bg-black focus:outline-none">
        <span className="flex items-center space-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 text-gray-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
            />
          </svg>
          {file?.name ? (
            <span className="font-medium text-gray-400 w-80 truncate">
              {file.name}{" "}
              <div>
                {uploading ? (
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full bg-blue-600 animate-pulse"></div>
                    <span className="text-blue-600">Uploading...</span>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </span>
          ) : (
            <span className="font-medium text-gray-300">
              Click to Upload any Legal Document
            </span>
          )}
        </span>
        <input
          type="file"
          name="file_upload"
          className="hidden"
          accept="application/pdf"
          onChange={(e) => {
            setUploading(true);
            setFile(e.target.files?.[0] ?? null);
          }}
        />
      </label>
    </div>
  );
};

export default LegalDocumentAI;
