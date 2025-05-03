import Image from "next/image";
import Link from "next/link";

interface SimpleImageCardProps {
  image: string;
  link: string;
  alt?: string;
}

export function SimpleImageCard({
  image,
  link,
  alt = "Resource image",
}: SimpleImageCardProps) {
  return (
    <Link
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="block w-full group"
    >
      <div className="relative w-full aspect-square rounded-[32px] overflow-hidden transition-transform duration-300 hover:scale-[1.03] hover:shadow-md">
        <Image
          src={image || "/placeholder.svg"}
          alt={alt}
          fill
          className="object-cover"
        />
      </div>
    </Link>
  );
}
