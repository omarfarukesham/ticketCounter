import React, { useState } from 'react';
import Queue from './Queue';
const Customer = () => {
    const [userNum, setUserNum] = useState([])
   

    const ticketGenerate = () => {
    
        const arrOne = Array(8).fill().map((element, index) => index + 5)
        setUserNum(arrOne);

        // let arrOne = []
        // let a = Math.floor(Math.random() * (20 - 1)) + 1;
        // arrOne.push(a)
        //  setUserNum(arrOne, ...arrOne)
        // console.log(arrOne);
        // // setUserNum(a)
    }

    console.log(userNum)


    return (
        <div>
            <div class="card w-96 bg-base-100 shadow-xl m-5">
                <div class="card-body">
                    <h2 class="card-title text-center justify-center">Create Ticket Number</h2>
                    <p className='text-center'>Please wait in queue</p>
                    <div class="card-actions justify-center">
                        <button onClick={ticketGenerate} class="btn btn-primary text-white">Ticket</button>
                    </div>
                </div>
            </div>

            <div className='grid lg:grid-cols-3'>
                <div class="card w-96 bg-base-100 shadow-xl">
                    <div class="card-body">
                        <h2 class="card-title justify-center">Counter-1</h2>
                        <Queue></Queue>
                        <p>Ticket  </p>
                        <div class="card-actions justify-center">
                            <button class="btn btn-secondary text-white">Ticket</button>
                        </div>
                    </div>
                </div>


                <div class="card w-96 bg-base-100 shadow-xl">
                    <div class="card-body">
                        <h2 class="card-title justify-center">Counter-2</h2>
                        <Queue></Queue>
                        <p>Ticket </p>
                        <div class="card-actions justify-center">
                            <button class="btn btn-secondary text-white"></button>
                        </div>
                    </div>
                </div>
                <div class="card w-96 bg-base-100 shadow-xl">
                    <div class="card-body">
                        <h2 class="card-title justify-center">Counter-3</h2>
                        <Queue></Queue>
                        <p>Ticket  </p>
                        <div class="card-actions justify-center">
                            <button class="btn btn-secondary text-white"></button>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Customer;