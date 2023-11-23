const db = require('../database/connect')

class Entry {
    constructor({entry_id, category, content, date_created, time_created}){
        this.entry_id = entry_id
        this.category = category
        this.content = content
        this.date_created = date_created
        this.time_created = time_created
    }

    static async getAll(){
        const response = await db.query('SELECT * FROM entries ORDER BY time_created DESC;');
        if (response.rows.length === 0) throw new Error('No entries available')

        return response.rows.map(en => new Entry(en))
    }

    static async create(data){
        const { category, content, date_created, time_created } = data;
        let response = await db.query('INSERT INTO entries \
            (category, content, date_created, time_created) \
            VALUES ($1, $2, $3, $4) \
            RETURNING *;', [category, content, date_created, time_created])
        return new Entry(response.rows[0])
    }

    static async getOneById(id){
        const response = await db.query("SELECT * FROM entries WHERE entry_id= $1", [entry_id])

        if (response.rows.length != 1) {
            throw new Error('Unable to locate entry')
          }
      
          return new Entry(response.rows[0])
    }

    
    async destroy(){
        let response = await db.query('DELETE FROM entries \
            WHERE entry_id = $1', [this.category])
        return new Entry(response.rows[0])
    }

}

module.exports =  Entry