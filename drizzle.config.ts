import { defineConfig } from 'drizzle-kit'
import dotenv from 'dotenv';

dotenv.config();

console.log(process.env.MIGRATION_DATABASE_URL!)

export default defineConfig({
    dialect: "postgresql",
    dbCredentials: {
        url: process.env.MIGRATION_DATABASE_URL!
    },
    schema: "./src/db/schema/*",
    out: "./drizzle",
})