import React, { useState } from 'react';

const Manager = ({ result1, result2, result3 }) => {

    const [buler, setbuler] = useState(false)
    const [done, donebuler] = useState(result1)

    const [buler1, setbuler1] = useState(false)
    const [done1, donebuler1] = useState(result2)

    const [buler2, setbuler2] = useState(false)
    const [done2, donebuler2] = useState(result3)


    return (
        <div >
            <div className='grid lg:grid-cols-3'>
                <div className={`card w-96 bg-base-100 shadow-xl ${buler ? 'opacity-10' : 'opacity-100'} `} >
                    <div class="card-body">
                        <h2 class="card-title justify-center">Counter-1</h2>
                        <p>Ticket {done}</p>
                        <div class="card-actions justify-center">
                            <button onClick={() => setbuler(!buler)} class="btn btn-secondary text-white">oflien</button>
                            <button onClick={() => donebuler(done + 1)} class="btn btn-secondary text-white">service done</button>
                            <button class="btn btn-secondary text-white">set</button>
                        </div>
                    </div>
                </div>
                <div  className={`card w-96 bg-base-100 shadow-xl ${buler1 ? 'opacity-10' : 'opacity-100'} `} >
                    <div class="card-body">
                        <h2 class="card-title justify-center">Counter-2</h2>
                        <p>Ticket {done1}</p>
                        <div class="card-actions justify-center">
                            <button onClick={() => setbuler1(!buler1)} class="btn btn-secondary text-white">oflien</button>
                            <button onClick={() => donebuler1(done1 + 1)} class="btn btn-secondary text-white">service done</button>
                            <button class="btn btn-secondary text-white">set</button>
                        </div>
                    </div>
                </div>
                <div  className={`card w-96 bg-base-100 shadow-xl ${buler2 ? 'opacity-10' : 'opacity-100'} `} >
                    <div class="card-body">
                        <h2 class="card-title justify-center">Counter-3</h2>
                        <p>Ticket {done2}</p>
                        <div class="card-actions justify-center">
                            <button onClick={() => setbuler2(!buler2)} class="btn btn-secondary text-white">oflien</button>
                            <button onClick={() => donebuler2(done2 + 1)} class="btn btn-secondary text-white">service done</button>
                            <button class="btn btn-secondary text-white">set</button>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Manager;