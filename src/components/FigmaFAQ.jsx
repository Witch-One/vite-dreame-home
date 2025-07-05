import React, { useState, useEffect } from "react";

export default function FigmaFAQ() {
  const [openIndex, setOpenIndex] = useState(0); // 默认第一个FAQ展开
  const [isMobile, setIsMobile] = useState(false);

  // 检测屏幕尺寸
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const faqData = [
    {
      question: "How does Airstyle Pro protect my hair from heat damage?",
      answer: "It features JetAirflow™ technology, which delivers high-velocity airflow for fast styling with precise temperature control to prevent overheating and hair damage."
    },
    {
      question: "What makes JetAirflow™ technology special?",
      answer: "JetAirflow™ provides high-speed airflow to style hair quickly while maintaining consistent temperature, reducing frizz, and preventing heat damage."
    },
    {
      question: "Does Airstyle Pro work on all hair types?",
      answer: "Yes! Airstyle Pro is designed to work on straight, wavy, curly, and coily hair, with attachments tailored for different textures and styling needs."
    },
    {
      question: "Where can I find tutorials on how to use the different nozzles?",
      answer: "Click here for step-by-step tutorials on using each nozzle to achieve your desired hairstyle."
    },
    {
      question: "How do I switch between attachments?",
      answer: "The attachments use a magnetic design, allowing them to easily click into place for seamless switching."
    },
    {
      question: "Can I use Airstyle Pro on wet hair?",
      answer: "Yes, Airstyle Pro can be used on damp hair, but for best results, blow-dry your hair until it is half-dry first using the fast dryer nozzle before styling."
    },
    {
      question: "Does Airstyle Pro have a cool shot feature?",
      answer: "Yes, the cool shot function helps set your style in place for long-lasting results."
    },
    {
      question: "Is Airstyle Pro dual voltage?",
      answer: "No, Airstyle Pro operates at 120V and is designed for use in the U.S. only."
    },
    {
      question: "How do I clean the attachments?",
      answer: "Simply detach the attachments and wipe them clean with a dry or slightly damp cloth. Avoid submerging them in water."
    },
    {
      question: "How do I maintain the filter?",
      answer: "The filter should be cleaned regularly to ensure optimal performance. Use a soft brush to remove dust and debris from the filter area."
    },
    {
      question: "Where can I buy Airstyle Pro?",
      answer: "Airstyle Pro is available for purchase on Amazon and our official website."
    },
    {
      question: "Does Airstyle Pro come with a warranty?",
      answer: "Yes, it comes with a 2-year limited warranty. Please check our warranty policy for details."
    },
    {
      question: "What's included in the box?",
      answer: "The package includes the Airstyle Pro main unit, 7 magnetic styling attachments, a storage case, a cleaning brush and a user manual."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  // SVG 箭头图标
  const ArrowIcon = ({ isOpen }) => (
    <svg 
      width="12" 
      height="8" 
      viewBox="0 0 12 8" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={`faq-arrow ${isOpen ? 'rotated' : ''}`}
    >
      <path 
        d="M1 1L6 6L11 1" 
        stroke="#666666" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </svg>
  );

  return (
    <div className="figma-faq-container">
      {/* FAQ 标题 - 响应式 */}
      <div className="faq-main-title">
        <h2>
        Frequently Asked Questions
        </h2>
      </div>
      
      {/* FAQ 副标题 */}
      <div className="faq-main-subtitle">
        <p>
        If you already own a ONE R, take advantage of the action cam's modular design to upgrade your lenses and mods at your own pace.
        </p>
      </div>

      {/* FAQ 列表 */}
      <div className="faq-list">
        {faqData.map((faq, index) => (
          <div key={index} className={`faq-item ${openIndex === index ? 'expanded' : ''}`}>
            <div className="faq-question" onClick={() => toggleFAQ(index)}>
              <span className="faq-question-text">
                {isMobile ? `Q${index + 1}: ${faq.question}` : faq.question}
              </span>
              <div className="faq-toggle-btn">
                <ArrowIcon isOpen={openIndex === index} />
              </div>
            </div>
            
            {openIndex === index && faq.answer && (
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            )}
            
            <div className="faq-divider"></div>
          </div>
        ))}
      </div>
    </div>
  );
} 