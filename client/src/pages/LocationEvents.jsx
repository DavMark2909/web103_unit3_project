import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react'
import Event from '../components/Event'
import EventsAPI from '../services/EventsAPI'
import '../css/LocationEvents.css'

const LocationEvents = () => { //check how to pass forward location data from Locations.jsx to here
    const { locationName } = useParams();
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
            <header>
                <div className='location-image'>
                    <img src={location.image} alt='cool pic'/>
                </div>

                <div className='location-info'>
                    <h2>{location.name}</h2>
                    <p>Number of attendees:{location.attendees}</p>
                </div>
            </header>

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
        </div>
    );
}

export default LocationEvents