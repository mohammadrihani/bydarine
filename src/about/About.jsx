import "./About.css";

export default function About() {
  return (
    <main className="about-page">

      {/* =========================================
          INTRO
      ========================================= */}

      <section className="about-intro">

        <p className="about-eyebrow">
          THE BY DARINE STORY
        </p>

        <h1>
          Beauty,
          <br />
          <em>made real.</em>
        </h1>

        <div className="about-intro-line"></div>

       

      </section>


      {/* =========================================
          MISSION
      ========================================= */}

      <section className="mission-section">

        <div className="mission-side">

          <span className="section-number">
            01
          </span>

          <p className="vertical-label">
            OUR MISSION
          </p>

        </div>


        <div className="mission-content">

          <p className="small-heading">
            MISSION
          </p>

          <h2>
            Redefining
            <br />
            <em>everyday beauty.</em>
          </h2>

          <div className="mission-divider"></div>

          <p className="mission-text">
            BY DARINE is on a mission to redefine everyday
            beauty for women living in real conditions—from
            Beirut’s humidity to busy modern lifestyles—by
            creating thoughtfully crafted hair essentials
            that keep hair looking healthy, beautiful, and
            effortlessly polished.
          </p>

          <p className="mission-text">
            Because beauty should never feel like a burden.
            It should feel effortless, lasting, and empowering—
            giving you the confidence and elegance to walk into
            any room feeling your absolute best.
          </p>

          <div className="mission-signature">
            <span>BEAUTY, WITHOUT COMPROMISE.</span>
          </div>

        </div>

      </section>


      {/* =========================================
          FOUNDER STORY
      ========================================= */}

      <section className="founder-section">

        <div className="founder-top">

          <p className="about-eyebrow">
            THE FOUNDER STORY
          </p>

          <span className="founder-number">
            02
          </span>

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
            <span>“</span>

            <p>
              I wanted something lightweight
              that I could take anywhere.
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
              could take anywhere—something that
              instantly smoothed frizz, left my hair
              feeling soft, and never weighed it down.
            </p>

          </div>

        </div>


        {/* =========================================
            CLOSING STATEMENT
        ========================================= */}

        <div className="founder-closing">

          <p>
            Soft Angel isn’t just
            <br />
            a hair product.
          </p>

          <h3>
            It’s your everyday
            <br />
            <em>confidence, bottled.</em>
          </h3>

          <span>— By Darine</span>

        </div>

      </section>

    </main>
  );
}