import React from 'react';

const queue = () => {
    return (
        <div>
            <div class="avatar-group -space-x-6 justify-center">
                <div class="avatar online">
                    <div class="w-12">
                        <img src="https://placeimg.com/192/192/people" />
                    </div>
                </div>
                <div class="avatar">
                    <div class="w-12">
                        <img src="https://placeimg.com/192/192/people" />
                    </div>
                </div>
                <div class="avatar">
                    <div class="w-12">
                        <img src="https://placeimg.com/192/192/people" />
                    </div>
                </div>
                <div class="avatar placeholder">
                    <div class="w-12 bg-neutral-focus text-neutral-content">
                        <span>+6</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default queue;