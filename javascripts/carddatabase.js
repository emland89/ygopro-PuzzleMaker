let dbInstance = null;

// Function to initialize the database
async function initDatabase() {
    if (dbInstance) return dbInstance;

    const SQL = await initSqlJs({ locateFile: file => `https://cdnjs.cloudflare.com/ajax/libs/sql.js/1.6.2/${file}` });
    const response = await fetch('cards.sqlite');
    const buffer = await response.arrayBuffer();
    dbInstance = new SQL.Database(new Uint8Array(buffer));
    return dbInstance;
}
// Function to get card by name
async function cardByName(name) {
    try {
        const db = await initDatabase();
        const stmt = db.prepare(`
            SELECT datas.*, texts.name, texts.desc 
            FROM datas 
            JOIN texts ON datas.id = texts.id 
            WHERE texts.name LIKE ?
        `);
        stmt.bind([`%${name}%`]); // Use '%' for fuzzy search

        const cards = [];
        while (stmt.step()) {
            cards.push(stmt.getAsObject());
        }

        stmt.free();

        return cards;
    } catch (err) {
        console.error("Error fetching cards by name:", err);
        throw err;
    }
}

// Function to get cards by IDs
async function cardByIds(ids) {
    try {
        const db = await initDatabase();
        const cards = [];

        // Use a single query to fetch all card details and names/descriptions
        const idPlaceholders = ids.map(() => '?').join(',');
        const stmt = db.prepare(`
            SELECT datas.*, texts.name, texts.desc 
            FROM datas 
            JOIN texts ON datas.id = texts.id 
            WHERE datas.id IN (${idPlaceholders})
        `);
        stmt.bind(ids);

        while (stmt.step()) {
            cards.push(stmt.getAsObject());
        }

        stmt.free();

        console.log(`Card details: ${JSON.stringify(cards)}`);
        return cards;
    } catch (err) {
        console.error("Error fetching cards by IDs:", err);
        throw err;
    }
}
