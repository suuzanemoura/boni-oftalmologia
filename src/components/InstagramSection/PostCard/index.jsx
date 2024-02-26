import Image from "next/image";
import Link from "next/link";

export default function PostCard({ post }) {
  return (
    <Link
      href={post.permalink}
      target="_blank"
    >
      <div className="text-center w-[300px] h-[300px] snap-start">
        <div className="w-[300px] h-[300px] relative">
          <Image
            src={post.media_url}
            alt={`Publicação no perfil do Instagram do ${post.username}. Segue o link: ${post.permalink}`}
            className="w-full h-full object-cover rounded-xl absolute"
            fill={true}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </div>
    </Link>
  );
}
