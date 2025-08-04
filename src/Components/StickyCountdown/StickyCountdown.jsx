import React, { useState, useEffect } from 'react';
import { FaCalendarAlt, FaDoorOpen, FaBell } from 'react-icons/fa'; // Added FaBell icon
import './StickyCountdown.css';

const StickyCountdown = ({ onOpenPopup }) => {
    // State to track if the mouse is hovering over the component
    const [isHovering, setIsHovering] = useState(false);

    const calculateTimeLeft = () => {
        const now = new Date();
        const actualOpeningDate = new Date("2025-08-04T09:00:00+03:00");
        let isOpened = now.getTime() >= actualOpeningDate.getTime();
        const difference = actualOpeningDate.getTime() - now.getTime();
        
        let timeLeft = {};

        if (difference > 0 && !isOpened) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        } else {
            timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
        }
        return { timeLeft, isOpened };
    };

    const [countdownState, setCountdownState] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setCountdownState(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const { timeLeft, isOpened } = countdownState;
    const displayMessage = isOpened ? "Nanyuki Now Open!" : "Opening Soon!";
    const displayIcon = isOpened ? <FaBell size={22} /> : <FaBell size={22} />;

    return (
        <div 
            className={`sticky-countdown-container ${isHovering ? 'hovering' : ''}`} 
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            onClick={onOpenPopup} 
            title="Click to learn more!"
        >
            <div className="sticky-countdown-trigger">
                {displayIcon}
                <span className="sticky-countdown-text">
                    {displayMessage}
                </span>
                {!isOpened && (
                    <div className="sticky-countdown-timer">
                        {timeLeft.days > 0 && <span>{timeLeft.days}d </span>}
                        <span>{String(timeLeft.hours).padStart(2, '0')}h </span>
                        <span>{String(timeLeft.minutes).padStart(2, '0')}m </span>
                        <span>{String(timeLeft.seconds).padStart(2, '0')}s</span>
                    </div>
                )}
            </div>
        </div>
    );
};

export default StickyCountdown;
