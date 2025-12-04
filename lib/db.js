import Database from "better-sqlite3";
import path from "path";

const dbPath = path.join(process.cwd(), "data", "database.sqlite");
const db = new Database(dbPath);

// --- Universal column check function ---
function columnExists(tableName, columnName) {
  const stmt = db.prepare(`PRAGMA table_info(${tableName})`);
  const columns = stmt.all();
  return columns.some(col => col.name === columnName);
}

// Create metas table for dynamic SEO
db.prepare(`
  CREATE TABLE IF NOT EXISTS metas (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    route TEXT UNIQUE NOT NULL,
    title TEXT,
    description TEXT,
    keywords TEXT
  )
`).run();

// --- Add html_content column to metas table safely ---
if (!columnExists("metas", "html_content")) {
  db.prepare(`ALTER TABLE metas ADD COLUMN html_content TEXT`).run();
}

// --- Create tables (all schemas up front) ---
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

db.prepare(`
  CREATE TABLE IF NOT EXISTS services (
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

db.prepare(`
  CREATE TABLE IF NOT EXISTS investor_visa (
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
    image TEXT,
    addonHeading TEXT,
    addonDescription TEXT
  )
`).run();

// *** UPDATED MIGRATE TABLE WITH parentSlug ***
db.prepare(`
  CREATE TABLE IF NOT EXISTS migrate (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    parentSlug TEXT,
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
    image TEXT,
    addonHeading TEXT,
    addonDescription TEXT
  )
`).run();

db.prepare(`
  CREATE TABLE IF NOT EXISTS visitvisas (
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
    image TEXT,
    addonHeading TEXT,
    addonDescription TEXT
  )
`).run();

db.prepare(`
  CREATE TABLE IF NOT EXISTS tours (
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
    image TEXT,
    addonHeading TEXT,
    addonDescription TEXT
  )
`).run();

db.prepare(`
  CREATE TABLE IF NOT EXISTS resume (
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
    image TEXT,
    addonHeading TEXT,
    addonDescription TEXT
  )
`).run();

db.prepare(`
  CREATE TABLE IF NOT EXISTS study (
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
    image TEXT,
    addonHeading TEXT,
    addonDescription TEXT
  )
`).run();

db.prepare(`
  CREATE TABLE IF NOT EXISTS schengenvisas (
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
    image TEXT,
    addonHeading TEXT,
    addonDescription TEXT
  )
`).run();

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

// *** ADD parentSlug TO MIGRATE TABLE IF NOT EXISTS ***
if (!columnExists("migrate", "parentSlug")) {
  db.prepare(`ALTER TABLE migrate ADD COLUMN parentSlug TEXT`).run();
}

// --- Add columns safely to all tables ---
const tablesWithAddon = ["visas", "services", "investor_visa", "visitvisas", "tours", "resume", "study", "schengenvisas", "migrate"];

tablesWithAddon.forEach(table => {
  if (!columnExists(table, "addonHeading")) {
    db.prepare(`ALTER TABLE ${table} ADD COLUMN addonHeading TEXT`).run();
  }
  if (!columnExists(table, "addonDescription")) {
    db.prepare(`ALTER TABLE ${table} ADD COLUMN addonDescription TEXT`).run();
  }
});

// News table extra columns
if (!columnExists("news", "addonHeading")) {
  db.prepare(`ALTER TABLE news ADD COLUMN addonHeading TEXT`).run();
}
if (!columnExists("news", "addonDescription")) {
  db.prepare(`ALTER TABLE news ADD COLUMN addonDescription TEXT`).run();
}

export default db;
