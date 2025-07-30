import React, { useState, useEffect } from 'react';
import './StickyCountdown.css';
import { FaCalendarAlt, FaDoorOpen } from 'react-icons/fa'; // Icons for the button

const StickyCountdown = ({ onOpenPopup }) => {
    const calculateTimeLeft = () => {
        const now = new Date();
        const targetDay = 1; // Monday is 1
        const targetHour = 9;
        const targetMinute = 0;

        const nextMonday = new Date(now);
        nextMonday.setDate(now.getDate() + (targetDay + 7 - now.getDay()) % 7);
        nextMonday.setHours(targetHour, targetMinute, 0, 0);

        // If today is Monday AND it's past 9 AM, set to next week's Monday
        if (now.getDay() === targetDay && now.getHours() >= targetHour && now.getMinutes() >= targetMinute) {
            nextMonday.setDate(nextMonday.getDate() + 7);
        }

        // The specific fixed Monday opening date for the "opened" state transition
        // Based on current date July 31, 2025 (Thursday), the next Monday is August 4, 2025.
        // Let's assume the grand opening was on Monday, August 4, 2025 at 9:00 AM EAT.
        const actualOpeningDate = new Date("2025-08-04T09:00:00+03:00"); // Monday, August 4, 2025, 9:00 AM EAT

        let isOpened = false;
        if (now.getTime() >= actualOpeningDate.getTime()) {
            isOpened = true;
        }

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
    }, []); // No dependencies needed for continuous update

    const { timeLeft, isOpened } = countdownState;

    // Determine the message and icon based on whether it's opened
    const displayMessage = isOpened ? "Nanyuki Now Open!" : "Opening This Monday!";
    const displayIcon = isOpened ? <FaDoorOpen size={22} /> : <FaCalendarAlt size={22} />;

    return (
        <div className="sticky-countdown-container">
            <div className="sticky-countdown-trigger" onClick={onOpenPopup} title="Click to learn more!">
                {displayIcon}
                <span className="sticky-countdown-text">{displayMessage}</span>
                {!isOpened && ( // Only show timer if not opened yet
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