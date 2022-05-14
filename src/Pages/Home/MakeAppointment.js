import React from 'react';
import doctor from '../../assets/images/doctor.png';
import appointment from '../../assets/images/appointment.png';
import PrimaryButton from '../Shared/PrimaryButton';

const MakeAppointment = () => {
    return (
        <section style={{
            background:`url(${appointment})`
        }} 
        className='flex justify-center items-center'>
            <div className='flex-1 hidden lg:block'>
                <img className='mt-[-100px]' src={doctor} alt="" />
            </div>
            <div className='flex-1 px-5 '>
                <h3 className='text-xl text-primary font-bold'>Appointment</h3>
                <h3 className='text-3xl text-white py-5'>Make an Appointment Today</h3>
                <p className='text-white pb-5'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla ipsum porro est, saepe eveniet laudantium velit quaerat exercitationem at nisi soluta alias odio autem maiores animi iusto ducimus nemo facilis, odit, earum tempora veniam accusantium illum. Perferendis beatae cum repellat.</p>
                <PrimaryButton>Get started</PrimaryButton>
            </div>
            

        </section>
    );
};

export default MakeAppointment;