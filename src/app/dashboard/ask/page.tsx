"use client";

import { useState } from "react";
import { AiOutlineSend } from "react-icons/ai";

const AskContitution = () => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  const handleGetAnswer = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setAnswer("");
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setAnswer(
        "The Constitution of India (IAST: Bhāratīya Saṃvidhāna) is the supreme law of India.[1][2] The document lays down the framework demarcating fundamental political code, structure, procedures, powers, and duties of government institutions and sets out fundamental rights, directive principles, and the duties of citizens. It is the longest written constitution of any country on earth.[3][4][5] B. R. Ambedkar, chairman of the drafting committee, is widely considered to be its chief architect.[6][7][8] It imparts constitutional supremacy (not parliamentary supremacy, since it was created by a constituent assembly rather than Parliament) and was adopted by its people with a declaration in its preamble.[9] Parliament cannot override the constitution."
      );
    }, 2000);
  };
  return (
    <div>
      <div className="h-[93vh] overflow-y-scroll remove-scroll">
        <div className="text-2xl mt-5 text-white">
          Ask from Constitution of India 🇮🇳
        </div>
        <form
          className="mt-5 relative"
          autoComplete="off"
          onSubmit={(e) => handleGetAnswer(e)}
        >
          <input
            type="text"
            name="question"
            className="h-14 px-4 rounded-lg w-full bg-gray-800 text-white outline-none"
            placeholder="Enter your question"
            onChange={(e) => setQuestion(e.target.value)}
            value={question}
          />
          <button
            type="submit"
            className="absolute p-3  border-2 bg-black right-2 top-1 rounded-full"
          >
            <AiOutlineSend size={18} />
          </button>
        </form>
        {answer && (
          <div className="bg-slate-200 text-black text-lg p-5 rounded-lg mt-5 mx-20">
            <div className="text-blue-600 font-bold text-xl">
              Constitution of India says ...
            </div>
            <div className="mt-4">{answer}</div>
          </div>
        )}
        {loading && (
          <div className="bg-slate-200 text-black text-lg p-5 rounded-lg mt-5 mx-20">
            <div className="text-violet-600 font-bold text-xl animate-pulse">
              Fetching from Constitution of India ...
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AskContitution;
