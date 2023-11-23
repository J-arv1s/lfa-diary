const db = require('../database/connect')

class Entry {
    constructor({entry_id, category, content}){
        this.entry_id = entry_id
        this.category = category
        this.content = content
    }

    static async getAll(){
        const response = await db.query('SELECT * FROM entries');
        return response.rows.map(en => new Entry(en))
    }

}

module.exports = { Entry }