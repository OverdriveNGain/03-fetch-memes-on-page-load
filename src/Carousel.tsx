import React, { type ReactElement, useState } from 'react';

export type CarouselItem = Readonly<{
  id: string
  url: string
}>;

function Carousel (props: Readonly<{ items: readonly CarouselItem[] }>): ReactElement {
  const [currentImage, setCurrentImage] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  if (props.items.length === 0) {
    return <div className="carousel">No images available</div>;
  }

  return (
    <div className="carousel">
      <div className="carousel-image-container">
        <div style={{ display: isLoading ? 'block' : 'none' }}> Loading... ✨ </div>
        <img
          style={{ display: isLoading ? 'none' : 'block' }}
          src={props.items[currentImage].url}
          onLoad={() => { setIsLoading(false); }}
        />
      </div>
      <div>
        <button
          disabled={currentImage === 0 || isLoading}
          onClick={() => {
            setCurrentImage((x) => x - 1);
            setIsLoading(true);
          }}
        >
          Previous
        </button>
        <span>{ currentImage + 1 } of { props.items.length }</span>
        <button
          disabled={currentImage === props.items.length || isLoading}
          onClick={() => {
            setCurrentImage((x) => x + 1);
            setIsLoading(true);
          }}>
            Next
        </button>
      </div>
    </div>
  );
}

export default Carousel;
