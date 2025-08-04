import React, { useState, useEffect, useRef } from 'react';
import { FaTimes } from 'react-icons/fa'; // For the close icon
import './GrandOpeningPopup.css'; // Import the CSS file

import PregnantWoman from '../../assets/images/young-preg.jpg'
import { Link } from 'react-router-dom';

const GrandOpeningPopup = ({ isOpen, onClose }) => { // onClose prop is important here
    const popupRef = useRef(null);

    // Calculate countdown
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
        // Only update timer if popup is open or if we're tracking the 'opened' state
        if (!isOpen && !countdownState.isOpened) return;

        const timer = setInterval(() => {
            setCountdownState(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, [isOpen, countdownState.isOpened]); // Added isOpened to dependency array

    // Handle click outside to close
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (popupRef.current && !popupRef.current.contains(event.target)) {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    const { timeLeft, isOpened } = countdownState;

    const timerComponents = [];

    // Only render countdown items if not opened yet
    if (!isOpened) {
        Object.keys(timeLeft).forEach((interval) => {
            if (timeLeft[interval] > 0 || interval === 'seconds') {
                timerComponents.push(
                    <span key={interval} className="countdown-item">
                        {String(timeLeft[interval]).padStart(2, '0')} <small>{interval}</small>
                    </span>
                );
            }
        });
    }

    const popupTitle = isOpened ? "Now Open!" : "Grand Opening!";
    const popupSubtitle = isOpened ? "Your new tranquil oasis in Nanyuki is ready!" : "New Branch at Shop 14 restaurant, Nanyuki!";
    const countdownHeading = isOpened ? "Visit Us Today!" : "Opening This Monday!";
    const learnMoreText = isOpened ? "Learn More" : "Learn More";
    const descriptionText = isOpened
        ? "We are thrilled to welcome you to our new branch in Nanyuki! Experience tranquility and expert care for your pregnancy and postpartum journey. Book your session now!"
        : "Experience tranquility and expert care for your pregnancy and postpartum journey in Nanyuki. Get ready for our grand opening!";

    return (
        <div className="popup-overlay">
            <div ref={popupRef} className="popup-content">
                <button onClick={onClose} className="popup-close-btn" aria-label="Close popup">
                    <FaTimes size={20} />
                </button>

                {/* Top Section - Logo & Phone */}
                <div className="popup-header">
                    <img src="/maggies_white _logo.png" alt="Client Logo" className="popup-logo" />
                    <span className="popup-phone">Tel. +254796125105</span>
                </div>

                {/* Main Content Area */}
                <div className="popup-body">
                    <h2 className="popup-title">{popupTitle}</h2>
                    <p className="popup-subtitle">{popupSubtitle}</p>

                    {/* Image */}
                    <div className="popup-image-container">
                        <img
                            src={PregnantWoman}
                            alt="Pregnant woman"
                            className="popup-image"
                        />
                        <div className="popup-image-overlay"></div>
                    </div>

                    <h3 className="popup-countdown-heading">
                        {countdownHeading}
                    </h3>

                    {/* Countdown or Open Message */}
                    <div className="popup-countdown">
                        {isOpened ? (
                            <span className="countdown-message">Welcome to Nanyuki!</span>
                        ) : (
                            timerComponents.length ? timerComponents : <span className="countdown-message">Loading countdown...</span>
                        )}
                    </div>

                    <p className="popup-description">
                        {descriptionText}
                    </p>

                    {/*
                        THE CHANGE IS HERE: Add an onClick handler to the Link component
                        that calls the onClose prop.
                    */}
                    <Link to="articles/1" className="popup-learn-more-btn" onClick={onClose}>
                        {learnMoreText}
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default GrandOpeningPopup;