import {pool} from '../config/database.js'

const getMusicEvents = async (req, res) => {
    try{
        const result = await pool.query('SELECT DISTINCT location FROM event;');
        const locations = results.rows.map(row => row.location);
        res.status(200).json(locations);
    } catch (err){
        res.status(409).json({ error: err.message });
    }
}

export default {
    getLocations
}