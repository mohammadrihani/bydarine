import "./About.css";

export default function About() {
  return (
    <main className="about-page">

      {/* =========================================
          MISSION
      ========================================= */}

      <section className="mission-section">

        <div className="mission-label">
          <p>OUR MISSION</p>
        </div>

        <div className="mission-content">

          <p className="small-heading">
         
          </p>

          <div className="mission-text">

            <p>
              BY DARINE is on a mission to redefine everyday
              beauty for women living in real conditions from
              Beirut’s humidity to busy modern lifestyles by
              creating thoughtfully crafted hair essentials
              that keep hair looking healthy, beautiful, and
              effortlessly polished.
            </p>

            <p>
              Because beauty should never feel like a burden.
              It should feel effortless, lasting, and empowering
              giving you the confidence and elegance to walk into
              any room feeling your absolute best.
            </p>

          </div>

          <p className="mission-signature">
            BEAUTY, WITHOUT COMPROMISE.
          </p>

        </div>

      </section>


      {/* =========================================
          FOUNDER STORY
      ========================================= */}

      <section className="founder-section">

        <div className="founder-header">

          <p>THE FOUNDER STORY</p>

        </div>


        <div className="founder-title">

          <p>WHY I CREATED</p>

          <h2>
            Soft
            <br />
            <em>Angel.</em>
          </h2>

        </div>


        <div className="founder-story">

          <div className="founder-quote">

            <span></span>

            <p>
              "I wanted something lightweight
              that I could take anywhere."
            </p>

          </div>


          <div className="founder-text">

            <p>
              I’ve always struggled with frizzy hair.
              While traditional hair oils and serums
              helped, they never felt practical for
              everyday life.
            </p>

            <p>
              They were often heavy, inconvenient to
              carry, and not something I wanted to
              reapply throughout the day.
            </p>

            <p>
              That’s why I created Soft Angel.
            </p>

            <p>
              I wanted something lightweight that I
              could take anywhere something that
              instantly smoothed frizz, left my hair
              feeling soft, and never weighed it down.
            </p>

          </div>

        </div>

      </section>

    </main>
  );
}