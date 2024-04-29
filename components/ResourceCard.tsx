import Image from "next/image";
import Link from "next/link";

interface Props {
  id: string;
  title: string;
  image: string;
  downloadNumber: number;
}

const ResourceCard = ({
  id,
  title,
  image,
  downloadNumber,
}: Props) => {
  return (
    <div className="px-8 py-9 max-w-fit rounded-xl bg-dark-1 sm:max-w-[356px]">
      <Link href={`/resource/${id}`} target="_blank">
        <div className="flex-center flex-col gap-2.5 !p-0">
          <div className="h-fit w-full">
            <Image
              src={image}
              className="h-full rounded-md object-cover"
              width={384}
              height={384}
              alt={title}
            />
          </div>
          <div className="text-white paragraph-semibold line-clamp-1 w-full text-left">
            {title}
          </div>
        </div>
      </Link>
      <div className="flex-between mt-4 p-0">
        <div className="flex-center body-medium gap-1.5 text-white">
          <Image src="/images/downloads.svg" width={20} height={20} alt="download" />
          {downloadNumber}
        </div>
        <Link
          href={`/resource/${id}`}
          target="_blank"
          className="flex-center text-gradient_purple-blue body-semibold gap-1.5"
        >
          Download Now
          <Image src="/images/arrow-blue.svg" width={13} height={10} alt="arrow" />
        </Link>
      </div>
    </div>
  );
};

export default ResourceCard;
