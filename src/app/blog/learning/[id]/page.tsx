import { notFound } from "next/navigation";
import Link from "next/link";
import { learningPaths } from "../../data/learningData";
import { ArrowLeft } from "lucide-react";
import Cooking from "@/components/CookingCourse";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function LearningPathPage({ params }: PageProps) {
  const { id } = await params;
  const learningPath = learningPaths.find((path) => path.id === id);

  if (!learningPath) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Back Button */}
        <Link
          href="/blog/learningpath"
          className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Learning Paths
        </Link>

        {/* Cooking Component */}
        <Cooking />
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  return learningPaths.map((path) => ({
    id: path.id,
  }));
}
