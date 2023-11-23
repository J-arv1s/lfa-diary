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
    

    static async getOneById(entry_id){
        const response = await db.query("SELECT * FROM entries WHERE entry_id= $1", [entry_id])
        
        if (response.rows.length != 1) {
            throw new Error('Unable to locate entry')
        }
        
        return new Entry(response.rows[0])
    }
    
    static async findByCategory(category){
        let response = await db.query("SELECT * FROM entries \
        WHERE LOWER(category) = $1", [category])
        
        if (response.rows.length === 0) {
            throw new Error('Unable to locate entries')
        }
        return response.rows.map(entry => new Entry(entry))
    }
    
    
    
    static async create(data, date, time){
        const { category, content} = data;
        let response = await db.query('INSERT INTO entries \
        (category, content, date_created, time_created) \
        VALUES ($1, $2, $3, $4) \
        RETURNING *;', [category, content, date, time])
        return new Entry(response.rows[0])
    }

    async update(data){
        let response = await db.query('UPDATE entries \
        SET content = $1 \
        WHERE entry_id = $2 \
        RETURNING entry_id, content;', [data.content, this.entry_id])
        if (response.rows.length === 0){
            throw new Error('Unable to update your entry')
        }
        return new Entry(response.rows[0])
    }

    async destroy(){
        let response = await db.query('DELETE FROM entries \
            WHERE entry_id = $1 \
            RETURNING *;', [this.entry_id])
        return new Entry(response.rows[0])
    }


}

module.exports =  Entry