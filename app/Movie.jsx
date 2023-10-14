import Link from "next/link";
import Image from "next/image";

export default function Movie({ title, poster, year }) {
  const titleFormatted = title.replaceAll(" ", "-");

  return (
    <div>
      <h1 className="text-xl truncate">{title}</h1>
      <h2>{year}</h2>
      <Link
        href={{
          pathname: `/${titleFormatted}`,
        }}
      >
        <Image src={poster} alt={title} width={800} height={800} />
      </Link>
    </div>
  );
}
