import Link from "next/link";

const LinkedinLink = () => {
  return (
    <div className="space-x-2 flex mr-8">
      <img
        src={
          "https://media.licdn.com/dms/image/D4E03AQEJDWY4QYYN2A/profile-displayphoto-shrink_800_800/0/1679555424374?e=1698883200&v=beta&t=3fIOmXqhOJTJW3lEH8iGY_HqQIeor2LU7OO-g5q-8r0"
        }
        alt={"photo_me"}
        className="h-6 w-6 rounded-full"
      />
      <Link target="_blank" href={"https://github.com/juancamr"}>
        @github/juancamr
      </Link>
    </div>
  );
};

export default LinkedinLink;
