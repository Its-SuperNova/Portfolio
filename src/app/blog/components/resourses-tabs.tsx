import { ResourceCard } from "../components/resource-card";
import { resourceData } from "../data/resourse-data";
import { useInView } from "react-intersection-observer";
import SlideUpWord from "@/components/TextAnimations/SlideUpWord";

export function ResourcesContent() {
  const { ref: inViewRef, inView: titleInView } = useInView();

  return (
    <>
      <div className="mb-16">
        <div ref={inViewRef}>
          <SlideUpWord
            title={["Ashhh’s go-to resources for ", "Developing and Designing"]}
            isInView={titleInView}
          />
        </div>
      </div>

      {resourceData.map((category) => (
        <div key={category.categoryTitle} className="mb-12">
          <h1 className="text-3xl pb-5">{category.categoryTitle}</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {category.items.map((resource) => (
              <ResourceCard key={resource.id} resource={resource} />
            ))}
          </div>
        </div>
      ))}
    </>
  );
}
