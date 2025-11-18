import Database from "better-sqlite3";
import path from "path";

const dbPath = path.join(process.cwd(), "data", "database.sqlite");
const db = new Database(dbPath);

// Create visas table if it doesn't exist
db.prepare(`
  CREATE TABLE IF NOT EXISTS visas (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    slug TEXT UNIQUE,
    description TEXT,
    descriptionImage TEXT,
    descriptionImageWidth TEXT,
    descriptionImageHeight TEXT,
    descriptionImagePosition TEXT,
    info TEXT,
    metaTitle TEXT,
    metaDescription TEXT,
    metaKeywords TEXT,
    image TEXT
  )
`).run();

// Function to check if a column exists in the 'visas' table
function columnExists(columnName) {
  const stmt = db.prepare(`PRAGMA table_info(visas)`);
  const columns = stmt.all();
  return columns.some(col => col.name === columnName);
}

// Add addonHeading column if not exists
if (!columnExists("addonHeading")) {
  db.prepare(`ALTER TABLE visas ADD COLUMN addonHeading TEXT`).run();
}

// Add addonDescription column if not exists
if (!columnExists("addonDescription")) {
  db.prepare(`ALTER TABLE visas ADD COLUMN addonDescription TEXT`).run();
}


// Create news table if it doesn't exist
db.prepare(`
  CREATE TABLE IF NOT EXISTS news (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT,
    slug TEXT UNIQUE,
    summary TEXT,
    image TEXT,
    tag TEXT,
    time TEXT,
    readTime TEXT,
    content TEXT
  )
`).run();

export default db;
