import Image from "next/image";

import nc from "next-connect";
import clientPromise from "@/backend/config/dbConnect";

async function getMovies() {
    const client = await clientPromise;
    const db = client.db("app_shop");
    const movies = await db
        .collection("categories")
        .find()
        .limit(15)
        .toArray();
    return movies;
}

const Home = async ({ searchParams: { id, page } }: SearchParamProps) => {
   const movies = await getMovies()
  return (
  <div>hommessd { movies.length }</div>
  );
}

export default Home;


