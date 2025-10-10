import dotenv from "./dotenv.js"; 
import { pool } from "./database.js";
import eventsData from "../data/events.js";

const createEventsTable = async () => {
    const createTableQuery = `
        DROP TABLE IF EXISTS events;

        CREATE TABLE IF NOT EXISTS events (
            id SERIAL PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            description TEXT NOT NULL,
            date VARCHAR(10) NOT NULL,
            location VARCHAR(255) NOT NULL,
            image TEXT NOT NULL,
            attendees INTEGER NOT NULL
        )
    `

    try {
        const res = await pool.query(createTableQuery)
        console.log('🎉 events table created successfully')
    }
    catch (err) {
        console.error('⚠️ error creating events table', err)
    }
};

const seedEventsTable = async () => {
    await createEventsTable();

    eventsData.forEach((event) => {
        const insertQuery = `
            INSERT INTO events (name, description, date, location, image, attendees)
            VALUES ($1, $2, $3, $4, $5, $6)
        `;
        const values = [
            event.name,
            event.description,
            event.date,
            event.location,
            event.image,
            event.attendees
        ];

        pool.query(insertQuery, values, (err, res) => {
            if (err) {
                console.error('⚠️ error inserting event', err)
                return
            }
            console.log(`✅ ${event.name} added successfully`)
        });
    });
};

seedEventsTable();