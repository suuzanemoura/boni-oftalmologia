import Image from "next/image";

export default function ServiceCard({ service }) {
  return (
    <div className="text-center w-[300px] h-[300px] 3xs:w-[336px] 3xs:h-[336px] snap-start">
      <div className="w-56 h-56 3xs:h-64 3xs:w-64">
        <Image
          src={service.imageUrl}
          alt={`Imagem de um olho com ${service.title}`}
          priority={`${service.title === "Catarata" ? true : false}`}
          className="w-full h-full aspect-square object-cover rounded-t-xl"
        />
        <h3 className="py-4 3xs:py-6 px-3 mx-auto text-2xl bg-sky-600 text-white rounded-b-xl uppercase font-bold">
          {service.title}
        </h3>
      </div>
    </div>
  );
}
