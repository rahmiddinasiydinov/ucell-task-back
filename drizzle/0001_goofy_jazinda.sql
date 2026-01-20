CREATE TABLE "regions" (
	"id" serial PRIMARY KEY NOT NULL,
	"region" varchar(256) NOT NULL,
	"item" integer NOT NULL,
	"units" varchar(256) NOT NULL,
	"subscribers" integer NOT NULL
);
--> statement-breakpoint
DROP TABLE "sales_data" CASCADE;