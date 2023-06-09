import { pgTable, serial, text, varchar, integer, timestamp } from "drizzle-orm/pg-core"

export const users = pgTable('users', {
	id: serial('id').primaryKey(),
	created_at: timestamp('created_at', { withTimezone: true }).notNull().defaultNow(),
	given_name: text('given_name'),
	family_name: text('family_name'),
	picture: text('picture'),
	email: varchar('email', { length: 256, unique: true, notNull: true }),
})

export const posts = pgTable('posts', {
	id: serial('id').primaryKey(),
	created_at: timestamp('created_at', { withTimezone: true }).notNull().defaultNow(),
	test_item: text('test_item').notNull(),
	site_name: text('site_name').notNull(),
	site_description: text('site_description').notNull(),
	site_url: text('site_url').notNull(),
	post_title: text('post_title'),
	post_words: integer('post_words', {enum:[500, 1000, 1500, 2000]}).notNull(),
	post_cta: text('post_cta'),
	post_content: text('post_content'),
	post_outline: text('post_outline').array(),
	// created_by: integer('created_by').references(() => users.id), // inline foreign key
})