// import React, { useState } from 'react';
import Queue from './Queue';
const Customer = ({ setArrayvaluer, result1, result2, result3, userNum }) => {


    return (
        <div>
            <div class="card w-96 bg-base-100 shadow-xl m-5">
                <div class="card-body">
                    <h2 class="card-title text-center justify-center">Create Ticket Number</h2>
                    <p className='text-center'>Please wait in queue</p>
                    <div class="card-actions justify-center">
                        <button onClick={() => setArrayvaluer(Math.floor(Math.random() * 11), userNum)} class="btn btn-primary text-white">Ticket</button>
                    </div>
                </div>
            </div>

            <div className='grid lg:grid-cols-3'>
                <div class="card w-96 bg-base-100 shadow-xl">
                    <div class="card-body">
                        <h2 class="card-title justify-center">Counter-1</h2>
                        <Queue></Queue>
                        <p>Ticket {result1}</p>
                        <div class="card-actions justify-center">
                            <button class="btn btn-secondary text-white">Ticket</button>
                        </div>
                    </div>
                </div>
                <div class="card w-96 bg-base-100 shadow-xl">
                    <div class="card-body">
                        <h2 class="card-title justify-center">Counter-2</h2>
                        <Queue></Queue>
                        <p>Ticket  {result2}</p>
                        <div class="card-actions justify-center">
                            <button class="btn btn-secondary text-white">Ticket</button>
                        </div>
                    </div>
                </div>
                <div class="card w-96 bg-base-100 shadow-xl">
                    <div class="card-body">
                        <h2 class="card-title justify-center">Counter-3</h2>
                        <Queue></Queue>
                        <p>Ticket {result3} </p>
                        <div class="card-actions justify-center">
                            <button class="btn btn-secondary text-white">Ticket</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* set  */}
        </div>
    );
};

export default Customer;