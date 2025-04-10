"use client";

import Image from "next/image";
import { useProduct, useUpdateURL } from "../product-context";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
import { ProductCardItem } from "../product-card-item";

export function MobileGallery({
  images,
}: {
  images: { src: string; altText: string }[];
}) {

  const { state, updateImage } = useProduct();
  const updateURL = useUpdateURL();
  const imageIndex = state.image ? parseInt(state.image) : 0;

  const nextImageIndex = imageIndex + 1 < images.length ? imageIndex + 1 : 0;
  const previousImageIndex =
    imageIndex === 0 ? images.length - 1 : imageIndex - 1;

  const buttonClassName =
    "h-full px-6 transition-all ease-in-out hover:scale-110 hover:text-black flex items-center justify-center";

  return (
    <form>
      <div className="relative overflow-hidden">
        {images[imageIndex] && (
          <Image
            className="w-full aspect-[2/3] object-cover"
            width={600}
            height={900}
            sizes="(min-width: 1024px) 66vw, 100vw"
            alt={images[imageIndex]?.altText as string}
            src={images[imageIndex]?.src as string}
            priority={true}
          />
        )}

        {images.length > 1 ? (
          <div className="absolute bottom-[15%] flex w-full justify-center">
            <div
              className="mx-auto flex h-11 items-center rounded-full border
             border-white bg-neutral-50/80 text-neutral-500 backdrop-blur-sm"
            >
              <button
                formAction={() => {
                  const newState = updateImage(previousImageIndex.toString());
                  updateURL(newState);
                }}
                aria-label="Previous product image"
                className={buttonClassName}
              >
                <ArrowLeftIcon className="h-5" />
              </button>
              <div className="mx-1 h-6 w-px bg-neutral-500"></div>
              <button
                formAction={() => {
                  const newState = updateImage(nextImageIndex.toString());
                  updateURL(newState);
                }}
                aria-label="Next product image"
                className={buttonClassName}
              >
                <ArrowRightIcon className="h-5" />
              </button>
            </div>
          </div>
        ) : null}
      </div>

      {images.length > 1 ? (
        <ul className="flex items-center gap-3 mt-5">
          {images.map((image, index) => {
            return (
              <li key={image.src} className="aspect-square">
                <button
                  formAction={() => {
                    const newState = updateImage(index.toString());
                    updateURL(newState);
                  }}
                  aria-label="Select product image"
                  className="h-full w-full"
                >
                  <ProductCardItem
                    alt={image.altText}
                    src={image.src}
                    width={140}
                    height={120}
                  />
                </button>
              </li>
            );
          })}
        </ul>
      ) : null}
    </form>
  );
}
