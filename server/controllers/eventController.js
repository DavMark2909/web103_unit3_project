import {pool} from '../config/database.js'

const getMusicEvents = async (req, res) => {
    try{
        const result = await pool.query('SELECT * FROM events;');
        res.status(200).json(result.rows);
    } catch (err){
        res.status(409).json({ error: err.message });
    }
}

const getMusicEventsByLocation = async (req, res) => {
    try{
        const {location} = req.params;
        const res = await pool.query('SELECT * FROM events WHERE location = $1', [location]);
        res.status(200).json(result.rows);
    } catch (err){
        res.status(409).json({ error: err.message });
    }
}

const getMusicEventsById = async (req, res) => {
    try{
        const {id} = req.params;
        const result = await pool.query('SELECT * FROM events WHERE id = $1', [id]);
        res.status(200).json(result.rows[0]);
    } catch (err){
        res.status(409).json({ error: err.message });
    }
}

export default {
    getMusicEvents,
    getMusicEventsByLocation,
    getMusicEventsById
}