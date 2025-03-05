'use client';
import React, { useState, useRef } from "react";
import "../styles/dualSlider.css";

const DualSlider = () => {
    const [min, setMin] = useState(0);
    const [max, setMax] = useState(222);
    const trackRef = useRef(null);
    const thumbLeftRef = useRef(null);
    const thumbRightRef = useRef(null);

    const handleThumbMove = (thumbRef, isRightThumb) => (event) => {
        event.preventDefault(); // Prevent default behavior to avoid issues
    
        const track = trackRef.current;
        const trackRect = track.getBoundingClientRect();
        const thumb = thumbRef.current;
        const shiftX = event.clientX - thumb.getBoundingClientRect().left;
    
        const onPointerMove = (event) => {
            let newLeft = event.clientX - trackRect.left - shiftX;
            let trackWidth = trackRect.width;
    
            if (isRightThumb) {
                // Bottom thumb should not go past the top thumb
                const maxLeft = (max / 222) * trackWidth;
                newLeft = Math.max(0, Math.min(newLeft, maxLeft - thumb.offsetWidth));
                setMin(Math.round((newLeft / trackWidth) * 222));
            } else {
                // Top thumb should not go past the bottom thumb
                const minRight = (min / 222) * trackWidth;
                newLeft = Math.max(minRight + thumb.offsetWidth, Math.min(newLeft, trackWidth - thumb.offsetWidth));
                setMax(Math.round((newLeft / trackWidth) * 222));
            }
    
            thumb.style.left = `${(newLeft / trackWidth) * 100}%`;
        };
    
        const onPointerUp = () => {
            document.removeEventListener('pointermove', onPointerMove);
            document.removeEventListener('pointerup', onPointerUp);
            document.removeEventListener('pointercancel', onPointerUp);
        };
    
        document.addEventListener('pointermove', onPointerMove);
        document.addEventListener('pointerup', onPointerUp);
        document.addEventListener('pointercancel', onPointerUp);
    };
    

    return (
        <div className="dual-slider">
            <div className="slider" ref={trackRef}>
                <div className="slider__track">
                    <div
                        className="slider__thumb left"
                        ref={thumbLeftRef}
                        onMouseDown={handleThumbMove(thumbLeftRef, true)}
                        style={{ left: `0%` }}
                    ></div>
                    <div
                        className="slider__thumb right"
                        ref={thumbRightRef}
                        onMouseDown={handleThumbMove(thumbRightRef, false)}
                        style={{ right: `0%` }}
                    ></div>
                </div>
            </div>
        </div>
    );
};

export default DualSlider;
