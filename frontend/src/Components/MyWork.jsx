import { useState } from "react";
import projects from "../assets/projects";

function MyWork() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  return (
    <div className="w-full px-4 sm:px-10 py-12 space-y-20">
      {projects.map((project, index) => (
        <div
          key={project.name}
          className={`flex flex-col lg:flex-row items-center gap-6 ${
            index % 2 !== 0 ? "lg:flex-row-reverse" : ""
          }`}
        >
          {/* Details */}
          <div className="lg:w-1/2 space-y-4">
            <h3 className="text-2xl font-semibold text-gray-800">
              {project.name}
            </h3>
            <p className="text-gray-600">{project.description[0]}</p>
            <p className="text-gray-600">{project.description[1]}</p>
            <p className="text-gray-600">{project.description[2]}</p>
            <p className="text-gray-600">{project.description[3]}</p>
            <div className="flex gap-4 mt-4">
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800 transition cursor-pointer"
              >
                Live Preview
              </a>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900 transition"
              >
                GitHub
              </a>
            </div>
          </div>

          {/* Thumbnail */}
          <div className="lg:w-1/2 cursor-pointer">
            <img
              src={project.thumbnail}
              alt={`${project.name} thumbnail`}
              className="w-full h-auto max-h-[400px] object-cover rounded-lg shadow-md border"
              onClick={() => {
                setSelectedProject(project);
                setCurrentImgIndex(0);
              }}
            />
          </div>
        </div>
      ))}

      {/* Popup */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex justify-center items-center p-4">
          <div className="relative max-w-3xl w-full bg-white rounded-xl overflow-hidden shadow-lg">
            {/* Close */}
            <button
              className="absolute top-4 right-4 text-black text-xl font-bold z-10 cursor-pointer"
              onClick={() => {
                setSelectedProject(null);
                setCurrentImgIndex(0);
              }}
            >
              ✕
            </button>

            {/* Image */}
            <div className="w-full h-[70vh] flex flex-col justify-center items-center p-6">
              <img
                src={selectedProject.images[currentImgIndex]}
                alt={`Screenshot ${currentImgIndex + 1}`}
                className="w-full max-h-[60vh] object-contain rounded-lg"
              />

              {/* Navigation */}
              <div className="flex justify-between items-center w-full mt-4 px-6">
                <button
                  onClick={() =>
                    setCurrentImgIndex(
                      (prev) =>
                        (prev - 1 + selectedProject.images.length) %
                        selectedProject.images.length
                    )
                  }
                  className="text-blue-700 font-semibold px-4 py-2 hover:underline cursor-pointer"
                >
                  Previous
                </button>
                <span className="text-gray-600 text-sm">
                  {currentImgIndex + 1} / {selectedProject.images.length}
                </span>
                <button
                  onClick={() =>
                    setCurrentImgIndex(
                      (prev) => (prev + 1) % selectedProject.images.length
                    )
                  }
                  className="text-blue-700 font-semibold px-4 py-2 hover:underline cursor-pointer"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default MyWork;
