import { ResourceCard } from "../components/resource-card";
import { resourceItems } from "../data/resourse-data";

export function ResourcesContent() {
  return (
    <>
      <div className="mb-16">
        <h1 className="text-4xl lg:text-5xl font-light text-gray-900 mb-4 tracking-tight">
          Resources
        </h1>
        <p className="text-lg text-gray-600 font-light max-w-2xl">
          Discover premium design resources, templates, and tools to enhance
          your creative projects.
        </p>
      </div>

      {/* Responsive grid with proper spacing */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
        {resourceItems.map((resource) => (
          <ResourceCard key={resource.id} resource={resource} />
        ))}
      </div>
    </>
  );
}
