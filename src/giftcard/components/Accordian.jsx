import React, { useState } from 'react';
import "./components.scss"
// Define the FAQ component
const FAQ = () => {
  // State to manage the visibility of each panel
  const [openPanel, setOpenPanel] = useState(null);

  // Function to handle the toggle of panels
  const togglePanel = (panelId) => {
    setOpenPanel(openPanel === panelId ? null : panelId);
  };

  // FAQ data
  const faqs = [
    {
      id: 0,
      question: "Do Wayfair gift cards expire?",
      answer: "Wayfair gift cards never expire!",
    },
    {
      id: 1,
      question: "Where can I use a Wayfair gift card?",
      answer: (
        <>
          <p>You can use Wayfair gift cards across all Wayfair stores in the U.S., including Wayfair, AllModern, Birch Lane, Joss & Main and Perigold. You cannot use a Wayfair gift card on our international sites in Canada, Germany, or the UK.</p>
          
        </>
      ),
    },
    {
      id: 2,
      question: "Where can I purchase a Wayfair gift card?",
      answer: (
        <>
          <p>All Wayfair gift cards can be purchased directly from the Wayfair site. If you'd like to purchase a Wayfair gift card in person, you can visit one of the following retailers:</p>
          <ul>
            <li>ACME</li>
            <li>Albertsons</li>
            <li>CVS Pharmacy</li>
            <li>Dollar General</li>
            <li>Food Lion</li>
            <li>Giant-Carlisle</li>
            <li>Giant Eagle</li>
            <li>Hannaford</li>
            <li>Harris Teeter</li>
            <li>H-E-B</li>
            <li>Hy-Vee</li>
            <li>Jewel-Osco</li>
            <li>Kroger</li>
            <li>Meijer</li>
            <li>Office Depot</li>
            <li>Publix</li>
            <li>Rite Aid</li>
            <li>Safeway</li>
            <li>Sam's Club</li>
            <li>Shaw's</li>
            <li>Staples</li>
            <li>Star Market</li>
            <li>Stop & Shop</li>
            <li>United Supermarkets</li>
            <li>Vons</li>
            <li>Walgreens</li>
            
          </ul>
          <p>You can also find Wayfair Gift Cards online with other third-party sites, including:</p>
          <ul>
            <li>Bank of America</li>
            <li>Card Lab</li>
            <li>Citibank</li>
            <li>Giant Eagle</li>
            <li>GiftCards.com</li>
            <li>Gift Card Mail</li>
            <li>JP Morgan Chase Bank</li>
            <li>PayPal</li>
            <li>Samsung Pay</li>
            <li>Staples</li>
            <li>United Airlines</li>
            <li>Wells Fargo Bank</li>
          </ul>
        </>
      ),
    },
    {
      id: 3,
      question: "Can I purchase services with a Wayfair gift card?",
      answer: (
        <>
          <p>Yes, you can use a Wayfair gift card to purchase any program or service available on Wayfair. These include (but are not limited to):</p>
          <ul>
            <li>Assembly and installation services</li>
            <li>Delivery upgrades (Room of Choice, Full Service Delivery, etc.)</li>
          </ul>
        </>
      ),
    },
    {
      id: 4,
      question: "Should I buy in bulk?",
      answer: (
        <>
          <p>You can buy in bulk to build relationships with customers and reward your employees by <a href="https://wayfair-biz.cashstar.com/" target="_blank" rel="noopener noreferrer">visiting our site</a>.</p>
          <p>Benefits of buying in bulk:</p>
          <ul>
            <li>You can order 10 or more gift cards</li>
            <li>You can choose between digital eGifts or plastic cards</li>
            <li>Flexible dollar amounts available</li>
          </ul>
        </>
      ),
    },
  ];

  return (
    <div className="FAQs">
      <h2 className='title'>Frequently Asked Questions</h2>
      <ul className="Accordion">
        {faqs.map((faq) => (
          <li key={faq.id} className={`Accordion-item ${openPanel === faq.id ? 'open' : ''}`}>
            <h2>
              <button
                aria-controls={`CollapsePanel-${faq.id}`}
                aria-expanded={openPanel === faq.id}
                onClick={() => togglePanel(faq.id)}
                type="button"
                className="Accordion-button"
              >
                <div className="Accordion-question">{faq.question}</div>
                <div className="Accordion-icon">
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 16a.47.47 0 01-.35-.15l-5-5a.49.49 0 01.7-.7L12 14.79l4.65-4.64a.49.49 0 11.7.7l-5 5A.47.47 0 0112 16z"></path>
                  </svg>
                </div>
              </button>
            </h2>
            <div
              id={`CollapsePanel-${faq.id}`}
              aria-hidden={openPanel !== faq.id}
              className={`Accordion-content ${openPanel === faq.id ? 'open' : ''}`}
            >
              {faq.answer}
            </div>
          </li>
        ))}
      </ul>

      
    </div>
  );
};

export default FAQ;
