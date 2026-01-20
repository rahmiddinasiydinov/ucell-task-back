import { pgTable, serial, varchar, integer } from "drizzle-orm/pg-core"
import { sql } from "drizzle-orm"



export const salesData = pgTable("sales_data", {
	id: serial().primaryKey().notNull(),
	region: varchar({ length: 256 }).notNull(),
	item: integer().notNull(),
	units: integer().notNull(),
	subscribers: integer().notNull(),
});
