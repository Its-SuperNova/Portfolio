"use client";

import { Card } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import type { LearningPath } from "../data/learningData";

interface LearningPathCardProps {
  learningPath: LearningPath;
}

export function LearningPathCard({ learningPath }: LearningPathCardProps) {
  const { id, title, imageUrl } = learningPath;

  return (
    <Link href={`/blog/learning/${id}`} className="group cursor-pointer">
      <div className="flex flex-col items-start space-y-2">
        <Card className="p-0 border-none shadow-none bg-transparent group-hover:scale-105 transition-transform duration-300">
          <div className="relative w-full h-[200px] aspect-square rounded-lg overflow-hidden">
            <Image
              src={imageUrl}
              alt={title}
              fill
              className="object-cover rounded-[24px] group-hover:brightness-110 transition-all duration-300"
              sizes="100vw"
            />
          </div>
        </Card>
        <h3 className="text-base font-medium text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
          {title}
        </h3>
      </div>
    </Link>
  );
}
