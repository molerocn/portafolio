import Link from "next/link";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card";
import { LINKEDIN_PROFILE } from "@/lib/constants";
import Image from "next/image";

interface Props {
  link: string;
  photo: string;
  label: string;
  description: string;
  type: "linkedin" | "github";
}

const SocialLink = (props: Props) => {
  const { link, photo, label, type, description } = props;
  return (
    <div className="space-x-2 flex mr-8">
      <Image
        width={0}
        height={0}
        sizes="100vw"
        src={photo}
        alt={"photo_me"}
        className="h-6 w-6 rounded-full"
      />
      <HoverCard>
        <HoverCardTrigger asChild>
          <Link target="_blank" href={link}>
            {label}
          </Link>
        </HoverCardTrigger>
        <HoverCardContent className="w-80 p-0">
          <div className="relative">
            <Image
              src={`/assets/images/portada_${type}.webp`}
              alt={`portada_${type}`}
              width={0}
              sizes="100vw"
              height={0}
              className="w-full h-32 object-cover rounded-t-md"
            />
            <Image
              width={0}
              height={0}
              sizes="100vw"
              src={photo}
              alt="profile_photo"
              className="h-12 w-12 rounded-full absolute bottom-0 left-4 -mb-5 border-2 border-white"
            />
          </div>
          <div className="flex space-x-4 p-4 pt-8">
            <div>
              <p className="font-bold mb-1">@juancamr</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {description}
              </p>
            </div>
          </div>
        </HoverCardContent>
      </HoverCard>
    </div>
  );
};

export default SocialLink;
