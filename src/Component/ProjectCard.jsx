import React from "react";

const ProjectCard = ({ title, main, languages, demo, code }) => {
  return (
    <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 w-full max-w-sm shadow-xl hover:shadow-[#6c7cff]/40 transition-all duration-500 hover:-translate-y-3">

      <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>

      <p className="text-gray-300 text-sm leading-relaxed mb-4">
        {main}
      </p>

      <p className="text-sm text-[#9fb0ff] mb-6">
        🚀 <span className="font-semibold">Tech:</span> {languages}
      </p>

      <div className="flex gap-4">
        {demo && (
          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center py-2 rounded-full bg-gradient-to-r from-[#6c7cff] to-[#465697] text-white font-semibold hover:opacity-90 transition"
          >
            Live Demo
          </a>
        )}

        {code && (
          <a
            href={code}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center py-2 rounded-full border border-[#6c7cff] text-[#6c7cff] font-semibold hover:bg-[#6c7cff] hover:text-white transition"
          >
            Source Code
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
