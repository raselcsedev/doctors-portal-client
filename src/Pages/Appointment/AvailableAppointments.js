import React, { useState, useEffect } from 'react';
import { format } from 'date-fns';
import Service from './Service';

const AvailableAppointments = ({ date }) => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <h4 className='text-xl text-secondary text-center my-12'>
                Available Appointments on {format(date, 'PP')}
            </h4>
            <div className=' grid grid-clos-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    services.map(service=> <Service
                    key={service._id}
                    service={service}
                    ></Service>)
                }
            </div>


        </div>
    );
};

export default AvailableAppointments;