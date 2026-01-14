import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export interface CarouselImage {
  src: string;
  alt: string;
}

interface ImageCarouselProps {
  images: CarouselImage[];
  className?: string;
}

function ImageCarousel({ images, className = '' }: ImageCarouselProps) {
  const [current, setCurrent] = useState(0);

  if (!images.length) {
    return null;
  }

  const goTo = (index: number) => {
    const nextIndex = (index + images.length) % images.length;
    setCurrent(nextIndex);
  };

  const next = () => goTo(current + 1);
  const previous = () => goTo(current - 1);

  return (
    <div className={`relative ${className}`}>
      <div className="overflow-hidden rounded-3xl border border-emerald-100 shadow-2xl bg-emerald-50">
        <img
          src={images[current].src}
          alt={images[current].alt}
          className="w-full max-h-[440px] object-cover transition-opacity duration-500"
          loading="lazy"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-black/40 text-white text-sm md:text-base px-4 py-3">
          {images[current].alt}
        </div>
      </div>

      {images.length > 1 && (
        <>
          <button
            type="button"
            onClick={previous}
            className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/90 hover:bg-white text-emerald-700 rounded-full p-2 shadow-lg transition-all"
            aria-label="Image précédente"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={next}
            className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/90 hover:bg-white text-emerald-700 rounded-full p-2 shadow-lg transition-all"
            aria-label="Image suivante"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          <div className="mt-4 flex justify-center gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => goTo(index)}
                className={`h-2.5 w-2.5 rounded-full transition-all ${
                  current === index ? 'bg-emerald-600 w-6' : 'bg-emerald-200 hover:bg-emerald-400'
                }`}
                aria-label={`Aller à l'image ${index + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default ImageCarousel;

