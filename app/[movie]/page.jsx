import { getData } from "./../service";
import Image from "next/image";

export default async function MovieDetail({ params }) {
  const movieParam = params.movie
    .replaceAll("-", " ")
    .replaceAll("%", "")
    .replaceAll("3A", ":");

  const movie = await getData().then((res) =>
    res.find((obj) => obj.Title === movieParam)
  );

  return (
    <div>
      <h2 className="text-2xl">{movie.Title}</h2>
      <h2 className="text-lg">{movie.Year}</h2>
      <h2 className="text-lg">Runtime: {movie.Runtime}</h2>
      <h2 className="text-sm bg-green-600 inline-block my-2 py-2 px-4 rounded-md">
        Released
      </h2>
      <Image
        className="my-12 w-full"
        src={movie.Poster}
        alt={movie.Title}
        width={1000}
        height={1000}
        priority
      />
    </div>
  );
}
