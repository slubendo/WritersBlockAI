import { pgTable, text, varchar, timestamp, serial } from "drizzle-orm/pg-core"
import { sections } from "./sections"

export const posts = pgTable("posts", {
  id: serial("id").primaryKey(),
  title: varchar("title").notNull(),
  content: text("content").notNull(),
  sectionId: serial("section_id").notNull().references(() => sections.id),
  imageSrc: varchar("image_src").notNull(),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
})

export type Post = typeof posts.$inferSelect
