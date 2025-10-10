const LOCATION_URL = 'http://localhost:3000/events';

class LocationsAPI {
    static async getAllLocations() {
        try {
            const response = await fetch(`${LOCATION_URL}/allLocation`);
            
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
}

export default LocationsAPI;