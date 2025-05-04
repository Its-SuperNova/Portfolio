"use client";

import { Card } from "@/components/ui/card";
import Image from "next/image";
import type { LearningPath } from "../data/learningData";

interface LearningPathCardProps {
  learningPath: LearningPath;
}

export function LearningPathCard({ learningPath }: LearningPathCardProps) {
  const { title, imageUrl } = learningPath;

  return (
    <div className="flex flex-col items-start space-y-2">
      <Card className="p-0 border-none shadow-none bg-transparent">
        <div className="relative w-full h-48 aspect-video rounded-lg overflow-hidden">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover rounded-lg"
            sizes="100vw"
          />
        </div>
      </Card>
      <h3 className="text-base font-medium text-gray-900">{title}</h3>
    </div>
  );
}
