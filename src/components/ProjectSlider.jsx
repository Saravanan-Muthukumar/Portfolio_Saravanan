import React, { useState } from "react";

const ProjectSlider = ({
  slides = [],
  title = "",
  description = "",
  demoLink = "",
  codeLink = "",
}) => {
  const [current, setCurrent] = useState(0);

  if (!slides.length) return null;

  const next = () => setCurrent((p) => (p === slides.length - 1 ? 0 : p + 1));
  const prev = () => setCurrent((p) => (p === 0 ? slides.length - 1 : p - 1));

  return (
    <section className="bg-[#0a192f] text-gray-300 rounded-lg  p-5">
      {/* ✅ Content ABOVE the slide */}
      <div className="flex items-center justify-between flex-wrap gap-4 mb-6">
  {/* Title */}
  <h3 className="text-xl md:text-2xl font-bold text-white">
    {title}
  </h3>

  {/* Buttons */}
  <div className="flex gap-3">
    {demoLink && (
      <a href={demoLink} target="_blank" rel="noopener noreferrer">
        <button className="rounded-lg px-4 py-2 bg-white text-gray-800 font-bold">
          Demo
        </button>
      </a>
    )}

    {codeLink && (
      <a href={codeLink} target="_blank" rel="noopener noreferrer">
        <button className="rounded-lg px-4 py-2 bg-white text-gray-800 font-bold">
          Code
        </button>
      </a>
    )}
  </div>
</div>

{/* Description BELOW */}
{description && (
  <p className="text-gray-300 text-sm md:text-base mt-2 mb-6">
    {description}
  </p>
)}

      {/* ✅ Slider (image only) */}
      <div className="relative overflow-hidden rounded-md">
        {/* Track */}
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            width: `${slides.length * 100}%`,
            transform: `translateX(-${current * (100 / slides.length)}%)`,
          }}
        >
          {slides.map((src, idx) => (
            <div
              key={idx}
              className="shrink-0"
              style={{ width: `${100 / slides.length}%` }}
            >
              <img
                src={src}
                alt={`${title} slide ${idx + 1}`}
                className="w-full h-[320px] md:h-[600px] object-cover"
                draggable={false}
              />
            </div>
          ))}
        </div>

        {/* Arrows */}
        {slides.length > 1 && (
          <>
            <button
              type="button"
              onClick={prev}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-white text-4xl bg-black/30 hover:bg-black/50 rounded-full w-10 h-10 flex items-center justify-center"
              aria-label="Previous slide"
            >
              ‹
            </button>

            <button
              type="button"
              onClick={next}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-white text-4xl bg-black/30 hover:bg-black/50 rounded-full w-10 h-10 flex items-center justify-center"
              aria-label="Next slide"
            >
              ›
            </button>
          </>
        )}

        {/* Dots */}
        {slides.length > 1 && (
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
            {slides.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setCurrent(idx)}
                className={`w-2.5 h-2.5 rounded-full ${
                  idx === current ? "bg-white" : "bg-white/40"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectSlider;
