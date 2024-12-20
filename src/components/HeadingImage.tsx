import { MediaRenderer } from "@thirdweb-dev/react";

interface HeadingImage {
  src: string;
  isLoading: boolean;
}

export const HeadingImage: React.FC<HeadingImage> = ({
  src,
  isLoading = true,
}) => {
  console.log("HeadingImage props:", { src, isLoading });

  return (
    <div className="self-start overflow-hidden rounded-xl xs:h-[180px] xs:w-[180px] lg:h-[300px] lg:w-full lg:max-w-[400px] lg:self-center">
      {isLoading ? (
        <div
          role="status"
          className="animate-pulse space-y-8 md:flex md:items-center md:space-x-8 md:space-y-0"
        >
          <div className="flex items-center justify-center xs:h-[180px] xs:w-[180px] lg:h-[300px] lg:w-full lg:max-w-[400px]">
            <svg
              className="h-full w-full p-12 text-gray-200 lg:p-24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 640 512"
            >
              <path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" />
            </svg>
          </div>
          <span className="sr-only">Loading...</span>
        </div>
      ) : (
        <div className="mx-auto h-full w-full">
          {src ? (
            <>
              {console.log("Rendering image with src:", src)}
              <img
                src={src}
                alt="Rainbow Cat NFT"
                className="h-full w-full object-contain"
              />
            </>
          ) : (
            <div className="flex h-full w-full items-center justify-center">
              <svg
                className="h-full w-full p-12 text-gray-200 lg:p-24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 640 512"
              >
                <path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" />
              </svg>
            </div>
          )}
        </div>
      )}
    </div>
  );
};