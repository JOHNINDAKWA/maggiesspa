import React, { useState } from "react";
import "./FaqsForm.css";

const FaqsForm = () => {
  // FAQ Toggle Logic
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
// Sample FAQs
const faqs = [
    { 
      question: "Is this service safe during pregnancy?", 
      answer: "Yes, our specialists use safe and tailored techniques for expectant mothers." 
    },
    { 
      question: "Do I need to book an appointment?", 
      answer: "Yes, we recommend booking in advance to secure your preferred time slot." 
    },
    { 
      question: "How long does each session take?", 
      answer: "Sessions typically last between 45 to 90 minutes, depending on the service." 
    },
    { 
      question: "What should I bring to my appointment?", 
      answer: "We recommend wearing comfortable clothing. If needed, we provide all necessary equipment and materials." 
    },
    { 
      question: "Can I cancel or reschedule my appointment?", 
      answer: "Yes, you can cancel or reschedule your appointment up to 24 hours in advance without any charges." 
    },
    { 
      question: "Are there any side effects after the session?", 
      answer: "Most clients feel relaxed and rejuvenated. However, some may experience mild soreness, which subsides quickly." 
    },
    { 
      question: "Do you offer gift cards or packages?", 
      answer: "Yes! We offer gift cards and special packages for multiple sessions at a discounted rate." 
    },
    { 
      question: "Is there a loyalty program or membership option?", 
      answer: "Yes, we have a loyalty program where frequent clients receive discounts and exclusive offers." 
    },
    { 
      question: "Do you use organic or hypoallergenic products?", 
      answer: "Yes, we prioritize using organic, hypoallergenic, and high-quality products to ensure a safe experience for all clients." 
    },
    { 
      question: "How can I prepare for my session?", 
      answer: "Stay hydrated, wear loose clothing, and arrive a few minutes early to relax before your session." 
    }
  ];
  

  return (
    <div className="faqs-form-container">
      {/* Left: Service Enquiry Form */}
      <div className="service-enquiry">
        <h3 className="form-title">Service Enquiry</h3>
        <form>
          <input type="text" name="name" placeholder="Full Name" required />
          <input type="email" name="email" placeholder="Email Address" required />
          <input type="tel" name="phone" placeholder="Phone Number" required />
          <textarea name="message" placeholder="Your Message" rows="4" required></textarea>
          <button type="submit">Submit Enquiry</button>
        </form>
      </div>

      {/* Right: FAQs Section */}
      <div className="faqs-section">
        <h3 className="faqs-title">Frequently Asked Questions</h3>
        <div className="faqs-list">
          {faqs.map((faq, index) => (
            <div key={index} className={`faq-item ${openIndex === index ? "open" : ""}`}>
              <div className="faq-question" onClick={() => toggleFAQ(index)}>
                {faq.question}
                <span className="faq-toggle">{openIndex === index ? "−" : "+"}</span>
              </div>
              {openIndex === index && <p className="faq-answer">{faq.answer}</p>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FaqsForm;
