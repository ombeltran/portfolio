"use client";

import { useEffect, useState } from "react";

export default function ProjectCard({ project }) {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    if (!project.images || project.images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentImage((prev) =>
        prev === project.images.length - 1 ? 0 : prev + 1,
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [project.images]);

  const images = project.images || [project.image];

  return (
    <article className="group overflow-hidden rounded-3xl border border-gray-800 bg-[#111827] transition-all duration-300 hover:-translate-y-2 hover:border-emerald-500/50">
      <div className="relative overflow-hidden">
        <img
          src={images[currentImage]}
          alt={project.title}
          className={`w-full transition-transform duration-500
            ${
              project.mobile
                ? "h-72 object-contain bg-black"
                : "h-72 object-cover group-hover:scale-105"
            }`}
        />

        {images.length > 1 && (
          <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImage(index)}
                className={`h-2.5 w-2.5 rounded-full transition-all ${
                  currentImage === index ? "bg-emerald-400 w-6" : "bg-white/40"
                }`}
              />
            ))}
          </div>
        )}
      </div>

      <div className="p-7">
        <span className="text-sm font-medium text-emerald-400">
          {project.category}
        </span>

        <h3 className="mt-3 text-2xl font-bold text-white">{project.title}</h3>

        <p className="mt-4 leading-relaxed text-gray-400">
          {project.description}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-gray-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
