import type { NextApiRequest, NextApiResponse } from 'next';

export default async (req: NextApiRequest, res: NextApiResponse) => {
	try {
		const db = clientPromise.db("app_shop");
		const movies =  await db.collection("categories").find().toArray();
		//console.log('movies',movies)
		res.json(movies);
	} catch (e) {
		console.error(e);
	}
}

