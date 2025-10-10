const LOCATION_URL = 'http://localhost:3000/events';

class EventsAPI {
    static async getAllEvents() {
        try {
            const response = await fetch(`${LOCATION_URL}/`);

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error fetching events:', error);
            throw error;
        }
    }

    static async getEventsByLocation(location) {
        try {
            const response = await fetch(`${LOCATION_URL}/location/${location}`);

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error fetching events by location:', error);
            throw error;
        }
    }

    static async getEventById(id) {
        try {
            const response = await fetch(`${LOCATION_URL}/id/${id}`);

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error fetching event by id:', error);
            throw error;
        }
    }
}

export default EventsAPI;