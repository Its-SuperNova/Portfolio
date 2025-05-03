import Image from "next/image";
import type { ResourceItem } from "../data/resourse-data";
import { FiArrowRight } from "react-icons/fi";
interface ResourceCardProps {
  resource: ResourceItem;
}

export function ResourceCard({ resource }: ResourceCardProps) {
  return (
    <div className="group cursor-pointer w-full">
      {/* Card with aspect ratio 380:450 (approximately 0.844) */}
      <div className="relative w-full aspect-[380/450] rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-lg">
        {/* Background Image - Fills entire card */}
        <Image
          src={resource.image || "/placeholder.svg"}
          alt={resource.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 380px"
        />

        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />

        {/* Content Overlay */}
        <div className="absolute inset-0 p-4 sm:p-6 flex flex-col justify-between text-white">
          {/* Badge at top */}
          <div className="flex justify-start">
            <span className="inline-block bg-white/20 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full font-medium border border-white/30">
              {resource.badge}
            </span>
          </div>

          {/* Title and subtitle at bottom */}
          <div className="space-y-2">
            <h3 className="text-lg sm:text-xl font-semibold drop-shadow-lg leading-tight">
              {resource.title}
            </h3>

            <div className="flex items-center group-hover:translate-x-1 transition-transform">
              <span className="text-sm drop-shadow-md">
                {resource.subtitle}
              </span>
              <FiArrowRight className="w-4 h-4 ml-1 flex-shrink-0" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
