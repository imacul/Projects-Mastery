import Image from "next/image";
import Link from "next/link";
import { FaShoppingCart } from "react-icons/fa";
import { Button } from "./ui/button";

interface Props {
  id: string;
  title: string;
  image: string;
  price: number;
  description: string;
  downloadNumber: number;
  downloadLink: string;
  type: string; // Add a 'type' prop to indicate free or premium
}

const ResourceCard = ({
  id,
  title,
  image,
  price,
  description,
  downloadNumber,
  downloadLink,
  type,
}: Props) => {
  return (
    <div className="px-4 py-3 max-w-fit rounded-xl bg-dark-1 sm:max-w-[356px]">
      <Link href={downloadLink} target="_blank">
        <div className="h-fit w-full">
          <Image
            src={image}
            className="h-full rounded-md object-cover"
            width={384}
            height={384}
            alt={title}
          />
        </div>
      </Link>

      <div className="flex-center flex-col gap-2.5 !p-0 mt-3 no-underline">
        <div className="text-white paragraph-semibold line-clamp-1 w-full text-left cursor-pointer hover:underline decoration-wavy decoration-blue-500">
          {title}
        </div>

        <div className="w-full text-white line-clamp-2 text-left cursor-pointer hover:underline decoration-wavy decoration-blue-500">
          {description}
        </div>

        {type === "free" ? (
          <div className="text-white text-start text-xl">Free</div>
        ) : (
          <div className="w-full text-white text-xl">Price: ${price}</div>
        )}
      </div>

      <div className="flex-between mt-4 p-0">
        {type === "free" ? (
          <Button className="text-white text-center">Get It Now!</Button>
        ) : (
          <Button className="flex-center body-medium gap-1 text-white">
            <span className="hidden md:block">Add to Cart</span>
            <FaShoppingCart className="text-purple-500" />
          </Button>
        )}

        <Link
          href={downloadLink}
          target="_blank"
          className="flex-center text-white body-semibold gap-1.5 bg-gradient_to_r from-purple-500 to-blue-500 py-2 px-4 rounded-md"
        >
          Live Preview
          <Image
            src="/images/arrow-blue.svg"
            width={13}
            height={10}
            alt="arrow"
          />
        </Link>
      </div>
    </div>
  );
};

export default ResourceCard;