// Server Component -- no hooks used

import Image from "next/image";

interface PhotoStripProps {
  photos: { src: string; alt: string }[];
  reverse?: boolean;
}

/** Double the array at module scope to avoid re-creating on every render */
function doublePhotos(photos: { src: string; alt: string }[]) {
  return photos.concat(photos);
}

export default function PhotoStrip({ photos, reverse = false }: PhotoStripProps) {
  const doubled = doublePhotos(photos);

  return (
    <div className="overflow-hidden py-8" aria-hidden="true">
      <div
        className={`flex gap-4 w-max ${
          reverse
            ? "animate-[strip-scroll_40s_linear_infinite_reverse]"
            : "animate-[strip-scroll_40s_linear_infinite]"
        }`}
      >
        {doubled.map((photo, i) => (
          <div
            key={`${photo.src}-${i}`}
            className="relative w-[300px] h-[200px] flex-shrink-0 overflow-hidden rounded-md md:w-[400px] md:h-[260px]"
          >
            <Image
              src={photo.src}
              alt=""
              width={400}
              height={260}
              className="w-full h-full object-cover grayscale-[30%] brightness-[0.85]"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
