CREATE TABLE IF NOT EXISTS "posts" (
	"id" serial PRIMARY KEY NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"test_item" text NOT NULL,
	"site_name" text NOT NULL,
	"site_description" text NOT NULL,
	"site_url" text NOT NULL,
	"post_title" text,
	"post_words" integer NOT NULL,
	"post_cta" text,
	"post_content" text,
	"post_outline" text[]
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "users" (
	"id" serial PRIMARY KEY NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"given_name" text,
	"family_name" text,
	"picture" text,
	"email" varchar(256)
);
