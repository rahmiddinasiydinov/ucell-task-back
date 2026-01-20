import { pgTable, serial, varchar, integer } from "drizzle-orm/pg-core";

export const RegionSchema = pgTable("regions", {
  id: serial("id").primaryKey(),
  region: varchar("region", { length: 256 }).notNull(),
  item: integer("item").notNull(),
  units: varchar("units", {length: 256}).notNull(),
  subscribers: integer("subscribers").notNull(),
});