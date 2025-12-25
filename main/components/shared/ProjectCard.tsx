import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import Image from "next/image";

interface Project {
  title: string;
  description: string;
  award?: string;
  technologies: string[];
  highlights?: string[];
  githubUrl?: string;
  liveUrl?: string;
  image?: string;
}

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="flex gap-3 p-2 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
      {/* Image + Links - Square container */}
      {project.image && (
        <div className="flex-shrink-0 w-28 h-28 flex flex-col bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 overflow-hidden">
          <div className="flex-1 overflow-hidden">
            <Image
              src={project.image}
              alt={project.title}
              width={112}
              height={112}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex items-center justify-center gap-3 p-1 border-t border-gray-200 dark:border-gray-700">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors"
                aria-label="GitHub"
              >
                <FaGithub className="w-4 h-4" />
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors"
                aria-label="Live Demo"
              >
                <FaExternalLinkAlt className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>
      )}

      {/* Content */}
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-2 mb-1">
          <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
            {project.title}
          </h3>
          {project.award && (
            <p className="text-xs text-orange-600 font-medium mt-0.5">
              {project.award}
            </p>
          )}
        </div>

        <p className="text-xs text-gray-700 dark:text-gray-300 mb-2 leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="px-1.5 py-0.5 text-xs bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-700"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
