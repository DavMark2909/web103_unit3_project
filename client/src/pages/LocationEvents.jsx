import { useParams, useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react'
import Event from '../components/Event'
import EventsAPI from '../services/EventsAPI'
import '../css/LocationEvents.css'

const LocationEvents = () => { //check how to pass forward location data from Locations.jsx to here
    const { locationName } = useParams();
    const navigate = useNavigate();
    const [events, setEvents] = useState([]) 

    useEffect(() => {
        (async () => {
            try {
                const eventsData = await EventsAPI.getEventsByLocation(locationName);
                console.log(eventsData)
                setEvents(eventsData)

                setListeners()
            }
            catch (error) {
                throw error
            }
        }) ()
    }, [locationName]);

    // return (
    //     <div>
    //         <h1>Events at {locationName}</h1>
    //         {/* Render your events here */}
    //     </div>
    // );

    return (
        <div className='location-events'>
        
            <div>
                <h1>Events at {locationName}</h1>
            </div>

            <main>
                {
                    events && events.length > 0 ? events.map((event, index) =>
                        <Event
                            key={event.id}
                            id={event.id}
                            title={event.title}
                            date={event.date}
                            description={event.description}
                            image={event.image}
                        />
                    ) : <h2><i className="fa-regular fa-calendar-xmark fa-shake"></i> {'No events scheduled at this location yet!'}</h2>
                }
            </main>

            <button onClick={() => navigate('/allLocations')} className='back-button' style={{ width: '200px', margin: '2rem auto', display: 'block' }}>
                Back
            </button>


        </div>
    );
}

export default LocationEvents