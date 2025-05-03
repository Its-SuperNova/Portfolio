import Image from "next/image";
import Link from "next/link";
import type { ResourceItem } from "../data/resourse-data";
import { FiArrowRight } from "react-icons/fi";

interface ResourceCardProps {
  resource: ResourceItem;
}

export function ResourceCard({ resource }: ResourceCardProps) {
  return (
    <Link
      href={resource.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group cursor-pointer w-full block"
    >
      <div className="relative w-full aspect-[380/500] rounded-[32px] overflow-hidden transition-all duration-300 hover:shadow-lg">
        {/* Background Image */}
        <Image
          src={resource.image || "/placeholder.svg"}
          alt={resource.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 380px"
        />

        {/* Content Overlay */}
        <div className="absolute inset-0 p-4 sm:p-6 flex flex-col text-white justify-end">
          <div className="space-y-2">
            <div className="flex justify-start">
              <span className="inline-block bg-black/20 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full font-medium">
                {resource.badge}
              </span>
            </div>

            <h3 className="text-lg sm:text-xl font-medium drop-shadow-lg leading-tight text-black">
              {resource.title}
            </h3>

            <div className="flex items-center group-hover:translate-x-1 transition-transform">
              <span className="text-sm drop-shadow-md text-black">
                {resource.subtitle}
              </span>
              <FiArrowRight className="w-4 h-4 ml-1 flex-shrink-0 text-black" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
