import { Injectable } from '@nestjs/common';
import 'dotenv/config';
import { sql } from 'drizzle-orm';
import { drizzle } from 'drizzle-orm/node-postgres';
import { RegionSchema } from 'src/db/schema';


let db = drizzle(process.env.DATABASE_URL!);
@Injectable()
export class RegionsService {
  

  findAll() {
    const regions = db.select().from(RegionSchema);
    return regions
  }

  findRegionsReport() {
    const regions = db.select({
      region: RegionSchema.region,
      subscribers: sql<number>`cast(sum(${RegionSchema.subscribers}) as int)`
    }).from(RegionSchema).groupBy(RegionSchema.region);
    return regions
  }

  findCountryReport() {
    const regions = db.select({
      total: sql<number>`cast(sum(${RegionSchema.subscribers}) as int)`
    }).from(RegionSchema);
    return regions
  }

}
