const LOCATION_URL = 'http://localhost:3000';

export const getAllEvents = async () => {
    try {

        const response = await fetch(`${LOCATION_URL}/events`);

        if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            const data = await response.json();
            return data;
    } catch (error) {
        console.error('Error fetching locations:', error);
        throw error;
    }
}

export const getEventsByLocation = async (location) => {
    try {

        const response = await fetch(`${LOCATION_URL}/events/location/${location}`);

        if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            const data = await response.json();
            return data;
    } catch (error) {
        console.error('Error fetching locations:', error);
        throw error;
    }
}


export const getEventById = async (id) => {
    try {

        const response = await fetch(`${LOCATION_URL}/events/id/${id}`);

        if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            const data = await response.json();
            return data;
    } catch (error) {
        console.error('Error fetching locations:', error);
        throw error;
    }
}
