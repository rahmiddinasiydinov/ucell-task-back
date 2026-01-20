import 'dotenv/config';
import { drizzle } from 'drizzle-orm/node-postgres';
import { eq } from 'drizzle-orm';
import { RegionSchema } from './db/schema';
  
const db = drizzle(process.env.DATABASE_URL!);

async function main() {
  const user: typeof RegionSchema.$inferInsert = {
    region: 'Europe',
    item: 1,
    units: 'kg',
    subscribers: 1
  };

  await db.insert(RegionSchema).values(user);
  console.log('New user created!')

  const users = await db.select().from(RegionSchema);
  console.log('Getting all users from the database: ', users)
  /*
  const users: {
    id: number;
    name: string;
    age: number;
    email: string;
  }[]
  */
}

main();
