import "./FAQ.css";

const faqs = [
  {
    question: "What is Soft Angel?",
    answer:
      "A lightweight hair mist designed to smooth, refine, and refresh hair with a soft signature scent.",
  },
  {
    question: "Is it a treatment?",
    answer:
      "No. Soft Angel is a finishing mist created for instant softness, shine, and everyday styling refinement.",
  },
  {
    question: "How does it feel on the hair?",
    answer:
      "Weightless, non-greasy, and fast-absorbing when used lightly on mid-lengths and ends.",
  },
  {
    question: "Does it help with frizz?",
    answer:
      "Yes. It helps control visible frizz and keeps hair looking smoother and more polished throughout the day, even in humidity.",
  },
  {
    question: "What does it smell like?",
    answer:
      "Delicately infused with the the comforting scent of warm vanilla cream, leaving your hair beautifully fragranced throughout the day.",
  },
  {
    question: "Can I use it daily?",
    answer:
      "Yes. It is designed for everyday use as part of your hair ritual.",
  },
  {
    question: "Who is it for?",
    answer:
      "Created for anyone who wants their hair to feel as beautiful  as it looks, soft, smooth, and effortlessly polished.",
  },
];

export default function Faq() {
  return (
    <section className="faq-section">

      {/* Header */}
      <div className="faq-header">
        <p className="faq-eyebrow">BY DARINE — SOFT ANGEL</p>

        <h2>
          Frequently
          <br />
          <em>Asked</em>
        </h2>

        <div className="faq-line"></div>

        
      </div>


      {/* Questions */}
      <div className="faq-list">

        {faqs.map((faq, index) => (
          <div className="faq-item" key={faq.question}>

            <div className="faq-number">
              {String(index + 1).padStart(2, "0")}
            </div>

            <div className="faq-content">
              <h3>{faq.question}</h3>
              <p>{faq.answer}</p>
            </div>

            <div className="faq-symbol">+</div>

          </div>
        ))}

      </div>


      {/* Philosophy */}
      <div className="faq-philosophy">

        <p className="philosophy-eyebrow">
          THE BY DARINE PHILOSOPHY
        </p>

        <div className="philosophy-line"></div>

        <h3>
          Hair is confidence.
        </h3>

        

        <span>— By Darine</span>

      </div>

    </section>
  );
}