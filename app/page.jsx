import { getData } from "./service";
import Movie from "./Movie";

export default async function Home() {
  const data = await getData();

  data.forEach((obj) => {
    if (obj.id) return;
    return (obj.id = Date.now() + Math.floor(Math.random() * 100));
  });

  return (
    <main>
      <div className="grid gap-16 grid-cols-fluid">
        {data.map((movie) => (
          <Movie
            key={movie.id}
            id={movie.id}
            title={movie.Title}
            poster={movie.Poster}
            year={movie.Year}
            runtime={movie.Runtime}
          />
        ))}
      </div>
    </main>
  );
}
