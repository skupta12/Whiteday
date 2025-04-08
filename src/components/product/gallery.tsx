import Image from "next/image";

export function Gallery({
  images,
}: {
  images: { src: string; altText: string }[];
}) {

  return (
    <div className="flex flex-col gap-y-10">
      {images.map((image) => (
        <div key={image.src}>
          <Image
            className="w-full h-full"
            src={image.src}
            alt={image.altText}
            width={600}
            height={900}
            sizes="(min-width: 1024px) 33vw, 100vw"
            priority
          />
        </div>
      ))}
    </div>
  );
}
