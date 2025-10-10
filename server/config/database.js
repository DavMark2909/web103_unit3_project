import pg from 'pg'

const config = {
    user: "locations_db_lr68_user",
    password: "beS8MChPt6RVaLFPOz164uoOxih7y2uu",
    host: "dpg-d3irb5qdbo4c73fv4kn0-a.oregon-postgres.render.com",
    port: 5432,
    database: "locations_db_lr68",
    ssl: {
      rejectUnauthorized: false
    }
}

export const pool = new pg.Pool(config)