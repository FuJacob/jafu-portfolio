"use client";

import { CardMedia } from "@/lib/types";
import Image from "next/image";

interface MediaDisplayProps {
  media: CardMedia;
}

export function MediaDisplay({ media }: MediaDisplayProps) {
  if (media.type === "youtube") {
    return (
      <div className="mt-3">
        <div className="relative w-full aspect-video rounded-md overflow-hidden bg-black">
          <iframe
            src={`https://www.youtube.com/embed/${media.src}`}
            title={media.caption || "Video"}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
          />
        </div>
        {media.caption && (
          <p className="text-[10px] text-muted-foreground mt-1.5 text-center italic">
            {media.caption}
          </p>
        )}
      </div>
    );
  }

  return (
    <div className="mt-3">
      <div className="relative w-full aspect-video rounded-md overflow-hidden bg-muted">
        <Image
          src={media.src}
          alt={media.caption || "Image"}
          fill
          className="object-cover"
        />
      </div>
      {media.caption && (
        <p className="text-[10px] text-muted-foreground mt-1.5 text-center italic">
          {media.caption}
        </p>
      )}
    </div>
  );
}
