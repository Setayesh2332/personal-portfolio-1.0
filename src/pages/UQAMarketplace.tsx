import "./UQAMarketplace.css";
import bg from "../assets/backgroundcasestudy.jpg";

import heroMockup from "../assets/casestudy1.png"; // Main hero showcase
import listingsBrowse from "../assets/case1-listingpage0.png"; // Listings page
import sellForm from "../assets/case1-SellingPage.png"; // Sell form screenshot
import messaging from "../assets/case1-messagepage.png"; // Messaging interface
import userProfile from "../assets/case1-userprofilepage.png"; // Profile page
import wireframeSketch from "../assets/portfolio.png"; // Your wireframes/sketches
import beforeAfter from "../assets/userflow.png"; // Design iteration example
import designSystem from "../assets/portfolio.png"; // Colors, typography, components

export default function UQAMarketplace() {
  return (
    <main className="csPage">
      {/* ================= HERO ================= */}
      <section
        className="caseHero"
        style={{ ["--case-bg" as any]: `url(${bg})` }}
      >
        <div className="caseHero__overlay" />

        <div className="caseHero__inner">
          <h1 className="caseHero__title">UQAMarketplace</h1>

          <p className="caseHero__desc">
            A trusted peer-to-peer marketplace built exclusively for UQAM students 
            to buy, sell, and exchange textbooks, electronics, and campus essentials. 
            This case study explores how thoughtful UX design transformed fragmented 
            student buying behaviors into a secure, intuitive platform.
          </p>

          {/* META ROW */}
          <div className="caseHero__metaBottom">
            <div className="metaItem">
              <div className="metaLabel">Timeline</div>
              <div className="metaValue">Fall 2025</div>
            </div>

            <div className="metaItem">
              <div className="metaLabel">Team</div>
              <div className="metaValue">5 students</div>
            </div>

            <div className="metaItem">
              <div className="metaLabel">Role</div>
              <div className="metaValue">UX Designer · Frontend Lead</div>
            </div>

            <div className="metaItem">
              <div className="metaLabel">Duration</div>
              <div className="metaValue">6 weeks</div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= HERO MOCKUP ================= */}
      <section className="csSection csSection--mockup">
        <div className="csSection__inner">
          <div className="csMockup">
            <img src={heroMockup} alt="UQAMarketplace interface showcase" className="csMockup__img" />
          </div>
        </div>
      </section>

      {/* ================= OVERVIEW ================= */}
      <section className="csSection csSection--overview">
        <div className="csSection__inner">
          <h2 className="csH2">Project Overview</h2>

          <p className="csBody">
            UQAM Marketplace was born from a simple observation: students were 
            wasting hours navigating through scattered Facebook groups, sketchy 
            Kijiji listings, and endless message threads just to buy a textbook 
            or sell last semester's furniture.
          </p>

          <p className="csBody">
            As the UX Designer and Frontend Lead, I spearheaded the design of a 
            centralized platform that addresses the unique needs of campus commerce 
            academic context, semester cycles, and most importantly, trust between 
            student buyers and sellers.
          </p>

          <div className="csCallout">
            <div className="csCallout__label">My Role</div>
            <div className="csCallout__content">
              <ul className="csCallout__list">
                <li>Led user research and synthesized findings into actionable insights</li>
                <li>Designed information architecture and user flows</li>
                <li>Created wireframes, prototypes, and final UI designs</li>
                <li>Conducted usability testing and iterated based on feedback</li>
                <li>Implemented frontend components and collaborated with backend team</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ================= PROBLEM ================= */}
      <section className="csSection csSection--alt">
        <div className="csSection__inner">
          <h2 className="csH2">The Problem</h2>

          <p className="csBody">
            UQAM students regularly buy and sell textbooks, electronics, and 
            everyday items especially at the start and end of each semester. 
            However, the current landscape is frustrating and inefficient.
          </p>

          <div className="csProblemGrid">
            <div className="csProblemCard">
              <div className="csProblemCard__icon">🔍</div>
              <h3 className="csH3">Fragmented Discovery</h3>
              <p className="csBody csBody--muted">
                Students juggle 5+ Facebook groups, Kijiji, and Messenger just 
                to find one textbook wasting hours on dead ends.
              </p>
            </div>

            <div className="csProblemCard">
              <div className="csProblemCard__icon">⚠️</div>
              <h3 className="csH3">Trust Issues</h3>
              <p className="csBody csBody--muted">
                No verification means dealing with strangers, potential scammers, 
                and uncertainty about whether sellers are even students.
              </p>
            </div>

            <div className="csProblemCard">
              <div className="csProblemCard__icon">📚</div>
              <h3 className="csH3">Missing Context</h3>
              <p className="csBody csBody--muted">
                Generic platforms don't understand academic needs no course codes, 
                program filters, or semester-aware search.
              </p>
            </div>

            <div className="csProblemCard">
              <div className="csProblemCard__icon">💬</div>
              <h3 className="csH3">Communication Chaos</h3>
              <p className="csBody csBody--muted">
                Messages get lost across platforms, conversations lack context, 
                and managing multiple inquiries becomes overwhelming.
              </p>
            </div>
          </div>

          <div className="csQuote">
            <div className="csQuote__text">
              "I spent three hours searching through different Facebook groups 
              trying to find my biology textbook. Half the posts were outdated, 
              and I had no way to verify if sellers were even real students."
            </div>
            <div className="csQuote__author">— Marie, 2nd-year Biology student</div>
          </div>
        </div>
      </section>

      {/* ================= RESEARCH ================= */}
      <section className="csSection">
        <div className="csSection__inner">
          <h2 className="csH2">Research & Discovery</h2>

          <p className="csBody">
            To validate the problem and understand student needs, I conducted 
            research across multiple channels combining qualitative and competitive 
            approaches.
          </p>

          <div className="csResearchMethods">
            <div className="csMethodCard">
              <h3 className="csH3">User Interviews</h3>
              <p className="csBody csBody--muted">
                Conducted 8 in-depth interviews with UQAM students across different 
                programs to understand their buying/selling behaviors and pain points.
              </p>
            </div>

            <div className="csMethodCard">
              <h3 className="csH3">Behavioral Observation</h3>
              <p className="csBody csBody--muted">
                Monitored student marketplace Facebook groups for 2 weeks, analyzing 
                post patterns, common issues, and communication breakdowns.
              </p>
            </div>

            <div className="csMethodCard">
              <h3 className="csH3">Competitive Analysis</h3>
              <p className="csBody csBody--muted">
                Evaluated Facebook Marketplace, Kijiji, and other university marketplace 
                apps to identify strengths, weaknesses, and opportunities.
              </p>
            </div>
          </div>

          <h3 className="csH3">Key Findings</h3>

          <div className="csFindingsGrid">
            <div className="csFinding">
              <div className="csFinding__stat">87%</div>
              <div className="csFinding__desc">
                of students said they wouldn't use a platform where they couldn't 
                verify other users were actual UQAM students
              </div>
            </div>

            <div className="csFinding">
              <div className="csFinding__stat">3-5 hrs</div>
              <div className="csFinding__desc">
                average time students spent searching for textbooks across 
                multiple platforms each semester
              </div>
            </div>

            <div className="csFinding">
              <div className="csFinding__stat">65%</div>
              <div className="csFinding__desc">
                reported giving up on selling items because listing on multiple 
                platforms was too time-consuming
              </div>
            </div>
          </div>

          <div className="csInsightBox">
            <h4 className="csH4">Critical Insight</h4>
            <p className="csBody">
              Students don't just want a marketplace they want a <strong>trusted community</strong>. 
              The UQAM email verification wasn't just a feature request; it was the 
              foundation of the entire platform's value proposition. Without it, 
              we'd just be building another Kijiji clone.
            </p>
          </div>
        </div>
      </section>

      {/* ================= USER PERSONAS ================= */}
      <section className="csSection csSection--alt">
        <div className="csSection__inner">
          <h2 className="csH2">Understanding Our Users</h2>

          <div className="csPersonas">
            <div className="csPersona">
              <div className="csPersona__header">
                <div className="csPersona__avatar">👤</div>
                <div className="csPersona__info">
                  <h3 className="csH3">The Budget-Conscious Buyer</h3>
                  <p className="csBody csBody--muted">Undergraduate student, 19-22 years old</p>
                </div>
              </div>
              <div className="csPersona__content">
                <h4 className="csH4">Goals</h4>
                <ul className="csPersona__list">
                  <li>Find affordable textbooks and course materials quickly</li>
                  <li>Verify sellers are trustworthy before meeting</li>
                  <li>Complete transactions efficiently between classes</li>
                </ul>
                <h4 className="csH4">Pain Points</h4>
                <ul className="csPersona__list">
                  <li>Limited budget makes new textbooks unaffordable</li>
                  <li>Wasted time on expired or fraudulent listings</li>
                  <li>Anxiety about meeting strangers from online platforms</li>
                </ul>
              </div>
            </div>

            <div className="csPersona">
              <div className="csPersona__header">
                <div className="csPersona__avatar">👤</div>
                <div className="csPersona__info">
                  <h3 className="csH3">The Graduating Seller</h3>
                  <p className="csBody csBody--muted">Senior student, 22-25 years old</p>
                </div>
              </div>
              <div className="csPersona__content">
                <h4 className="csH4">Goals</h4>
                <ul className="csPersona__list">
                  <li>Quickly sell accumulated textbooks and furniture</li>
                  <li>Manage multiple listings and buyer inquiries efficiently</li>
                  <li>Get fair prices without spending hours negotiating</li>
                </ul>
                <h4 className="csH4">Pain Points</h4>
                <ul className="csPersona__list">
                  <li>Overwhelmed by messages across different platforms</li>
                  <li>Frustrated with no-show buyers and tire-kickers</li>
                  <li>Needs to sell items fast before moving after graduation</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= DESIGN PROCESS ================= */}
      <section className="csSection">
        <div className="csSection__inner">
          <h2 className="csH2">Design Process</h2>

          <p className="csBody">
            Armed with research insights, I began translating student needs into 
            concrete design solutions through an iterative process of sketching, 
            prototyping, testing, and refining.
          </p>

          <h3 className="csH3">Information Architecture</h3>

          <p className="csBody csBody--muted">
            I structured the platform around four core student tasks, ensuring 
            each flow was optimized for speed and clarity:
          </p>

          <div className="csIAGrid">
            <div className="csIACard">
              <div className="csIACard__number">1</div>
              <h4 className="csH4">Search & Browse</h4>
              <p className="csBody csBody--muted">
                Discover items through filters, categories, and search
              </p>
            </div>

            <div className="csIACard">
              <div className="csIACard__number">2</div>
              <h4 className="csH4">Create Listing</h4>
              <p className="csBody csBody--muted">
                Post items with structured forms and clear guidance
              </p>
            </div>

            <div className="csIACard">
              <div className="csIACard__number">3</div>
              <h4 className="csH4">Communicate</h4>
              <p className="csBody csBody--muted">
                Message buyers/sellers with contextual information
              </p>
            </div>

            <div className="csIACard">
              <div className="csIACard__number">4</div>
              <h4 className="csH4">Manage Activity</h4>
              <p className="csBody csBody--muted">
                Track listings, favorites, and message threads
              </p>
            </div>
          </div>

          <div className="csImagePlaceholder">
            <img src={wireframeSketch} alt="Information architecture and user flow diagrams" className="csImagePlaceholder__img" />
            <p className="csImagePlaceholder__caption">
              User flow diagrams showing key pathways through the platform
            </p>
          </div>

          <h3 className="csH3">Wireframes & Early Iterations</h3>

          <p className="csBody csBody--muted">
            I started with low-fidelity wireframes to validate layout hierarchy 
            and information structure before investing in visual design. This 
            approach allowed for rapid iteration based on team feedback.
          </p>

          <div className="csImagePlaceholder">
            <img src={wireframeSketch} alt="Low-fidelity wireframes" className="csImagePlaceholder__img" />
            <p className="csImagePlaceholder__caption">
              Early wireframes focused on reducing cognitive load in forms and 
              maintaining consistency across pages
            </p>
          </div>
        </div>
      </section>

      {/* ================= DESIGN DECISIONS ================= */}
      <section className="csSection csSection--alt">
        <div className="csSection__inner">
          <h2 className="csH2">Key Design Decisions</h2>

          <p className="csBody">
            Every design choice was made to address specific user pain points 
            identified during research. Here are the most impactful decisions 
            and the reasoning behind them:
          </p>

          <div className="csDecisionList">
            <article className="csDecision">
              <div className="csDecision__tag">Trust & Safety</div>
              <h3 className="csH3">Mandatory UQAM Email Verification</h3>
              <p className="csBody">
                <strong>The Decision:</strong> We required @uqam.ca email addresses 
                during registration, limiting our potential user base to verified 
                UQAM students only.
              </p>
              <p className="csBody csBody--muted">
                <strong>Why it matters:</strong> Our research showed 87% of students 
                wouldn't use a platform without student verification. This decision 
                reduced our addressable market but significantly increased trust, 
                safety, and platform value. Users consistently told us, "I feel 
                safe because I know everyone here is a real UQAM student."
              </p>
            </article>

            <article className="csDecision">
              <div className="csDecision__tag">Usability</div>
              <h3 className="csH3">Structured Listing Forms</h3>
              <p className="csBody">
                <strong>The Decision:</strong> Instead of free-form text boxes, we 
                implemented structured forms with dropdowns, predefined categories, 
                and condition indicators.
              </p>
              <p className="csBody csBody--muted">
                <strong>Why it matters:</strong> Testing showed that 65% of students 
                abandoned listings on other platforms due to decision fatigue. Our 
                guided approach reduced listing creation time from ~8 minutes to 
                ~3 minutes while improving listing quality and searchability.
              </p>
            </article>

            <article className="csDecision">
              <div className="csDecision__tag">Context</div>
              <h3 className="csH3">Academic-Specific Fields</h3>
              <p className="csBody">
                <strong>The Decision:</strong> We added fields for program names, 
                course codes, and academic year to every listing type.
              </p>
              <p className="csBody csBody--muted">
                <strong>Why it matters:</strong> Generic marketplaces force students 
                to include this information in descriptions inconsistently. Making 
                these structured fields allowed for precise filtering students could 
                find "MAT6251 textbooks" in seconds instead of scrolling through 
                hundreds of generic "math book" listings.
              </p>
            </article>

            <article className="csDecision">
              <div className="csDecision__tag">Communication</div>
              <h3 className="csH3">Listing-Linked Messaging</h3>
              <p className="csBody">
                <strong>The Decision:</strong> Every conversation automatically 
                includes listing details and shows what item is being discussed.
              </p>
              <p className="csBody csBody--muted">
                <strong>Why it matters:</strong> Students managing multiple 
                inquiries often lost track of which conversation was about which 
                item. Contextual messaging eliminated confusion and made it easy 
                to jump back into old conversations. "What textbook were we talking 
                about again?" became a problem of the past.
              </p>
            </article>
          </div>

          <div className="csImagePlaceholder csImagePlaceholder--wide">
            <img src={beforeAfter} alt="Design iteration showing before and after" className="csImagePlaceholder__img" />
            <p className="csImagePlaceholder__caption">
              <strong>Iteration example:</strong> Version 1 profiles didn't show 
              "Member since" dates, and test users felt uncertain about sellers. 
              Adding this small visual signal significantly increased confidence.
            </p>
          </div>
        </div>
      </section>

      {/* ================= VISUAL DESIGN ================= */}
      <section className="csSection">
        <div className="csSection__inner">
          <h2 className="csH2">Visual Design System</h2>

          <p className="csBody">
            The visual language needed to feel trustworthy, professional, and 
            distinctly UQAM while remaining clean and minimal to keep focus on 
            the content (the actual listings).
          </p>

          <div className="csImagePlaceholder">
            <img src={designSystem} alt="Design system showing colors, typography, and components" className="csImagePlaceholder__img" />
            <p className="csImagePlaceholder__caption">
              Design system including color palette, typography scale, and reusable components
            </p>
          </div>

          <div className="csDesignGrid">
            <div className="csDesignCard">
              <h3 className="csH3">Color Palette</h3>
              <p className="csBody csBody--muted">
                Blue tones aligned with UQAM's brand identity to reinforce 
                legitimacy and trust. The turquoise accent adds energy while 
                maintaining professionalism.
              </p>
            </div>

            <div className="csDesignCard">
              <h3 className="csH3">Typography</h3>
              <p className="csBody csBody--muted">
                Clean, legible system fonts support rapid scanning of listings. 
                Generous line-height and spacing reduce eye strain during extended 
                browsing sessions.
              </p>
            </div>

            <div className="csDesignCard">
              <h3 className="csH3">Card-Based Layout</h3>
              <p className="csBody csBody--muted">
                Consistent card containers enhance visual hierarchy and make item 
                comparison effortless. Students can quickly scan prices, conditions, 
                and details.
              </p>
            </div>

            <div className="csDesignCard">
              <h3 className="csH3">Minimal Interface</h3>
              <p className="csBody csBody--muted">
                We deliberately avoided visual clutter. Every element serves a 
                purpose. This reduces cognitive load and keeps attention on the 
                actual marketplace content.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= KEY FEATURES ================= */}
      <section className="csSection csSection--alt">
        <div className="csSection__inner">
          <h2 className="csH2">Key Features</h2>

          <div className="csFeatureList">
            <article className="csFeature">
              <div className="csFeature__media">
                <img src={listingsBrowse} alt="Listings browsing interface" className="csFeature__img" />
              </div>
              <div className="csFeature__text">
                <h3 className="csH3">Intelligent Search & Discovery</h3>
                <p className="csBody">
                  Students can browse listings with powerful filters for price range, 
                  condition, category, and academic program. Search results are sorted 
                  by relevance and recency.
                </p>
                <p className="csBody csBody--muted">
                  The interface displays item condition badges prominently, helping 
                  buyers set appropriate expectations before even clicking through 
                  to a listing.
                </p>
                <ul className="csFeature__list">
                  <li><strong>Price range filtering</strong> for budget-conscious students</li>
                  <li><strong>Condition indicators</strong> (Neuf, Comme neuf, Acceptable)</li>
                  <li><strong>Sorting options</strong> (price, date, relevance)</li>
                  <li><strong>Category navigation</strong> for quick filtering</li>
                </ul>
              </div>
            </article>

            <article className="csFeature csFeature--reverse">
              <div className="csFeature__text">
                <h3 className="csH3">Frictionless Listing Creation</h3>
                <p className="csBody">
                  A streamlined, guided form walks sellers through creating comprehensive 
                  listings without overwhelming them. The interface progressively reveals 
                  fields based on category selection.
                </p>
                <p className="csBody csBody--muted">
                  Smart defaults and clear labels minimize decision fatigue, while 
                  character counters and inline validation prevent errors before 
                  submission.
                </p>
                <ul className="csFeature__list">
                  <li><strong>Step-by-step guidance</strong> through the listing process</li>
                  <li><strong>Academic context fields</strong> (program, course code)</li>
                  <li><strong>Photo upload</strong> with preview functionality</li>
                  <li><strong>Condition selection</strong> with helpful descriptions</li>
                </ul>
              </div>
              <div className="csFeature__media">
                <img src={sellForm} alt="Listing creation form interface" className="csFeature__img" />
              </div>
            </article>

            <article className="csFeature">
              <div className="csFeature__media">
                <img src={messaging} alt="Messaging interface" className="csFeature__img" />
              </div>
              <div className="csFeature__text">
                <h3 className="csH3">Contextual Messaging System</h3>
                <p className="csBody">
                  Every conversation is automatically linked to its listing, showing 
                  item details, price, and condition at a glance. No more "which item 
                  were we discussing?" confusion.
                </p>
                <p className="csBody csBody--muted">
                  The messaging interface keeps all buyer-seller communication secure 
                  and organized within the platform, eliminating the need to share 
                  personal contact information prematurely.
                </p>
                <ul className="csFeature__list">
                  <li><strong>Listing context</strong> visible in every conversation</li>
                  <li><strong>Real-time messaging</strong> for quick responses</li>
                  <li><strong>Message history</strong> preserved for reference</li>
                  <li><strong>Listing status updates</strong> when items sell</li>
                </ul>
              </div>
            </article>

            <article className="csFeature csFeature--reverse">
              <div className="csFeature__text">
                <h3 className="csH3">Trust-Building Profiles</h3>
                <p className="csBody">
                  User profiles display verified UQAM email, member-since date, 
                  contact preferences, and academic information building credibility 
                  at a glance.
                </p>
                <p className="csBody csBody--muted">
                  This transparency reassures buyers and helps sellers establish 
                  reputation within the campus community, addressing the core trust 
                  issue we identified in research.
                </p>
                <ul className="csFeature__list">
                  <li><strong>Verified student badge</strong> for all users</li>
                  <li><strong>Member since date</strong> establishes account age</li>
                  <li><strong>Program and year</strong> for academic context</li>
                  <li><strong>Contact preferences</strong> (phone, email)</li>
                </ul>
              </div>
              <div className="csFeature__media">
                <img src={userProfile} alt="User profile interface" className="csFeature__img" />
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* ================= CHALLENGES ================= */}
      <section className="csSection">
        <div className="csSection__inner">
          <h2 className="csH2">Challenges & Solutions</h2>

          <div className="csChallengeList">
            <article className="csChallenge">
              <div className="csChallenge__header">
                <span className="csChallenge__emoji">🔒</span>
                <h3 className="csH3">Challenge: Verifying Student Identity</h3>
              </div>
              <p className="csBody">
                <strong>The Problem:</strong> How do we ensure only real UQAM students 
                can access the platform without creating friction in the signup process?
              </p>
              <p className="csBody csBody--muted">
                <strong>The Solution:</strong> We implemented mandatory @uqam.ca email 
                verification with a confirmation link. While this adds one extra step, 
                testing showed students overwhelmingly preferred this minor inconvenience 
                over the alternative of an unverified marketplace. The verification 
                email became a feature, not a bug it signaled quality and safety.
              </p>
            </article>

            <article className="csChallenge">
              <div className="csChallenge__header">
                <span className="csChallenge__emoji">🤝</span>
                <h3 className="csH3">Challenge: Building Trust Between Strangers</h3>
              </div>
              <p className="csBody">
                <strong>The Problem:</strong> Even with verification, how do we make 
                students comfortable transacting with peers they've never met?
              </p>
              <p className="csBody csBody--muted">
                <strong>The Solution:</strong> We implemented multiple trust signals 
                working together: (1) User profiles showing "member since" dates, 
                (2) Verified student badges, (3) Listing ownership history visible 
                on profiles, and (4) Contextual messaging that keeps conversations 
                tied to specific items. These layered signals created psychological 
                safety without requiring a complex rating system.
              </p>
            </article>

            <article className="csChallenge">
              <div className="csChallenge__header">
                <span className="csChallenge__emoji">🌐</span>
                <h3 className="csH3">Challenge: Bilingual Interface (French/English)</h3>
              </div>
              <p className="csBody">
                <strong>The Problem:</strong> UQAM is a French university, but many 
                students are bilingual or English-speaking. How do we serve both 
                audiences without doubling development time?
              </p>
              <p className="csBody csBody--muted">
                <strong>The Solution:</strong> We launched with French as the primary 
                interface language since it aligned with UQAM's institutional language 
                and represented the majority of our target users. However, we designed 
                the component architecture to support internationalization from day 
                one, making a future English toggle feasible. This was a pragmatic 
                decision to ship faster while keeping options open.
              </p>
            </article>

            <article className="csChallenge">
              <div className="csChallenge__header">
                <span className="csChallenge__emoji">📱</span>
                <h3 className="csH3">Challenge: Mobile-First Reality</h3>
              </div>
              <p className="csBody">
                <strong>The Problem:</strong> Our research showed 73% of students 
                would browse listings primarily on mobile, but building native apps 
                was beyond our timeline and resources.
              </p>
              <p className="csBody csBody--muted">
                <strong>The Solution:</strong> I designed the interface mobile-first, 
                ensuring all core flows worked beautifully on small screens before 
                expanding to desktop. Touch targets were sized for thumbs, forms were 
                optimized for mobile keyboards, and navigation was simplified. The web 
                app became fully responsive, delivering a native-quality experience 
                without requiring app store downloads.
              </p>
            </article>

            <article className="csChallenge">
              <div className="csChallenge__header">
                <span className="csChallenge__emoji">⚖️</span>
                <h3 className="csH3">Challenge: Balancing Flexibility vs Structure</h3>
              </div>
              <p className="csBody">
                <strong>The Problem:</strong> Too much structure makes listings feel 
                restrictive; too little makes search impossible. Where's the balance?
              </p>
              <p className="csBody csBody--muted">
                <strong>The Solution:</strong> We made critical fields required 
                (category, condition, price) while keeping description fields flexible. 
                This gave us searchable, consistent data while allowing sellers to add 
                personality and detail. Dropdown menus were carefully curated based on 
                research not so many options that users felt overwhelmed, but enough 
                to cover 95% of use cases.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* ================= TESTING & ITERATION ================= */}
      <section className="csSection csSection--alt">
        <div className="csSection__inner">
          <h2 className="csH2">Usability Testing & Iteration</h2>

          <p className="csBody">
            Throughout development, I conducted multiple rounds of usability testing 
            with real UQAM students. Each session revealed insights that led to 
            meaningful improvements.
          </p>

          <div className="csTestingRound">
            <h3 className="csH3">Round 1: Prototype Testing (5 students)</h3>
            <p className="csBody csBody--muted">
              <strong>What we tested:</strong> Core flows (browse, create listing, message seller)
            </p>
            <div className="csTestingFindings">
              <div className="csFinding csFinding--negative">
                <strong>❌ Issue Found:</strong> Students got confused by the "Condition" 
                dropdown because terms like "Acceptable" were ambiguous acceptable to 
                whom? What does that mean for a textbook?
              </div>
              <div className="csFinding csFinding--positive">
                <strong>✅ Solution:</strong> Added tooltip descriptions for each 
                condition level with concrete examples: "Acceptable: Some highlighting 
                and notes, pages intact"
              </div>
            </div>

            <div className="csTestingFindings">
              <div className="csFinding csFinding--negative">
                <strong>❌ Issue Found:</strong> 4 out of 5 students didn't notice 
                their messages were linked to specific listings they kept asking 
                "which item is this about?"
              </div>
              <div className="csFinding csFinding--positive">
                <strong>✅ Solution:</strong> Made the listing preview card much more 
                prominent in the messaging interface, moving it from the sidebar to 
                the top of each conversation thread
              </div>
            </div>
          </div>

          <div className="csTestingRound">
            <h3 className="csH3">Round 2: Beta Launch (15 students)</h3>
            <p className="csBody csBody--muted">
              <strong>What we tested:</strong> Real usage over 2 weeks with actual listings
            </p>
            <div className="csTestingFindings">
              <div className="csFinding csFinding--negative">
                <strong>❌ Issue Found:</strong> Students wanted to edit their listings 
                after posting but the edit button was buried in the profile section
              </div>
              <div className="csFinding csFinding--positive">
                <strong>✅ Solution:</strong> Added "Edit" and "Delete" buttons directly 
                on each listing card when viewing your own items, reducing clicks from 
                4 to 1
              </div>
            </div>

            <div className="csTestingFindings">
              <div className="csFinding csFinding--negative">
                <strong>❌ Issue Found:</strong> Search results felt overwhelming when 
                students saw 20+ textbooks without clear differentiation
              </div>
              <div className="csFinding csFinding--positive">
                <strong>✅ Solution:</strong> Improved visual hierarchy with larger 
                images, more prominent pricing, and added "Posted X days ago" timestamps 
                to help students assess freshness
              </div>
            </div>
          </div>

          <div className="csQuote">
            <div className="csQuote__text">
              "After using this for a week, I don't know how I managed with Facebook 
              groups before. Everything is just... where it should be. I found my 
              calculus textbook in literally 2 minutes."
            </div>
            <div className="csQuote__author">— Testing participant, beta launch</div>
          </div>
        </div>
      </section>

      {/* ================= RESULTS ================= */}
      <section className="csSection">
        <div className="csSection__inner">
          <h2 className="csH2">Impact & Results</h2>

          <p className="csBody">
            While the platform is still in its early stages, initial metrics and 
            user feedback demonstrate strong product-market fit and validate our 
            design decisions.
          </p>

          <div className="csResultsGrid">
            <div className="csResult">
              <div className="csResult__number">~3 min</div>
              <div className="csResult__label">Avg. listing creation time</div>
              <div className="csResult__detail">
                Down from ~8 minutes on other platforms
              </div>
            </div>

            <div className="csResult">
              <div className="csResult__number">94%</div>
              <div className="csResult__label">Task completion rate</div>
              <div className="csResult__detail">
                For core flows in usability testing
              </div>
            </div>

            <div className="csResult">
              <div className="csResult__number">50+</div>
              <div className="csResult__label">Active beta users</div>
              <div className="csResult__detail">
                In first 2 weeks post-launch
              </div>
            </div>

            <div className="csResult">
              <div className="csResult__number">4.6/5</div>
              <div className="csResult__label">User satisfaction score</div>
              <div className="csResult__detail">
                From post-testing survey (n=15)
              </div>
            </div>
          </div>

          <h3 className="csH3">Qualitative Feedback</h3>

          <div className="csTestimonials">
            <div className="csTestimonial">
              <div className="csTestimonial__text">
                "Finally, a marketplace that actually understands student life. 
                The course code filtering is genius I found exactly the textbook 
                I needed for MAT6251 without scrolling through unrelated stuff."
              </div>
              <div className="csTestimonial__author">— Computer Science student</div>
            </div>

            <div className="csTestimonial">
              <div className="csTestimonial__text">
                "I trust this way more than Kijiji because everyone's a verified 
                UQAM student. Sold my bike in 2 days and the messaging system made 
                it super easy to coordinate pickup."
              </div>
              <div className="csTestimonial__author">— Business student</div>
            </div>

            <div className="csTestimonial">
              <div className="csTestimonial__text">
                "The interface is clean and doesn't waste my time. I can tell 
                someone actually designed this for students, not just copied 
                another marketplace template."
              </div>
              <div className="csTestimonial__author">— Design student</div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= LEARNINGS ================= */}
      <section className="csSection csSection--alt">
        <div className="csSection__inner">
          <h2 className="csH2">Key Learnings & Reflections</h2>

          <p className="csBody">
            This project taught me invaluable lessons about designing for trust, 
            managing constraints, and the importance of testing early and often.
          </p>

          <div className="csLearningsList">
            <article className="csLearning">
              <h3 className="csH3">Trust is Multi-Dimensional</h3>
              <p className="csBody">
                I initially thought verification would solve the trust problem 
                completely. Testing revealed trust is built through multiple small 
                signals working together verification, profiles, message context, 
                and transparent listing ownership all compound to create safety. 
                No single feature creates trust; it's the system.
              </p>
            </article>

            <article className="csLearning">
              <h3 className="csH3">Simplicity Requires Hard Decisions</h3>
              <p className="csBody">
                Every "simple" interface hides countless decisions about what NOT 
                to include. We constantly fought feature creep rating systems, 
                payment integration, delivery options all sounded good but would 
                have complicated the core experience. Learning to say "not now" 
                was crucial. Ship the essentials perfectly before adding complexity.
              </p>
            </article>

            <article className="csLearning">
              <h3 className="csH3">Users Don't Know What They Want Until They See It</h3>
              <p className="csBody">
                In early interviews, students said they wanted more customization 
                and freedom in listings. But when we tested an open-ended approach, 
                they got overwhelmed and created inconsistent listings. Sometimes 
                constraints (structured forms, required fields) feel restrictive 
                but actually deliver better outcomes. Don't just listen to what 
                users say watch what they do.
              </p>
            </article>

            <article className="csLearning">
              <h3 className="csH3">Small Details Have Outsized Impact</h3>
              <p className="csBody">
                The "Member since" date on profiles seemed trivial during design but 
                became one of the most mentioned features in feedback. Similarly, 
                showing "Posted X days ago" on listings dramatically improved trust. 
                These micro-interactions compound to create the overall feeling of 
                quality and care. Sweat the details.
              </p>
            </article>

            <article className="csLearning">
              <h3 className="csH3">Mobile-First Isn't Just Screen Size</h3>
              <p className="csBody">
                Designing mobile-first forced me to prioritize ruthlessly. When you 
                only have 375px width, every pixel matters. This constraint actually 
                improved the desktop experience too the information hierarchy we 
                developed for mobile made the desktop version cleaner and more focused. 
                Constraints breed creativity.
              </p>
            </article>
          </div>

          <div className="csReflection">
            <h3 className="csH3">What I'd Do Differently</h3>
            <p className="csBody">
              If I could restart this project, I would involve real users even 
              earlier before wireframes. We did research upfront, but I wish we'd 
              done co-design sessions where students could sketch their ideal 
              marketplace. Their insights would have saved us from wrong turns.
            </p>
            <p className="csBody">
              I'd also push harder for user testing infrastructure from day one. 
              We scrambled to recruit testers for each round. Having a standing 
              panel of student testers would have enabled faster iteration cycles.
            </p>
          </div>
        </div>
      </section>

      {/* ================= FUTURE IMPROVEMENTS ================= */}
      <section className="csSection">
        <div className="csSection__inner">
          <h2 className="csH2">Future Enhancements</h2>

          <p className="csBody">
            Based on user feedback and our product roadmap, here are the high-priority 
            features we're considering for future releases:
          </p>

          <div className="csFutureGrid">
            <div className="csFutureCard">
              <div className="csFutureCard__icon">⭐</div>
              <h3 className="csH3">Buyer/Seller Ratings</h3>
              <p className="csBody csBody--muted">
                Allow users to rate each other after transactions, building reputation 
                over time. This was intentionally excluded from V1 to reduce complexity, 
                but users are asking for it now that the platform has traction.
              </p>
            </div>

            <div className="csFutureCard">
              <div className="csFutureCard__icon">🔔</div>
              <h3 className="csH3">Push Notifications</h3>
              <p className="csBody csBody--muted">
                Notify users when they receive messages, when items matching their 
                saved searches are posted, or when their listings get views. This 
                would significantly improve engagement.
              </p>
            </div>

            <div className="csFutureCard">
              <div className="csFutureCard__icon">📚</div>
              <h3 className="csH3">Advanced Course Search</h3>
              <p className="csBody csBody--muted">
                Integrate with UQAM's course catalog to enable autocomplete for 
                course codes, and allow students to "follow" specific courses to 
                get alerts when textbooks are posted.
              </p>
            </div>

            <div className="csFutureCard">
              <div className="csFutureCard__icon">💳</div>
              <h3 className="csH3">In-App Payments</h3>
              <p className="csBody csBody--muted">
                Integrate secure payment processing to enable instant transactions. 
                This adds friction but could reduce no-shows and build additional 
                trust through escrow-style protection.
              </p>
            </div>

            <div className="csFutureCard">
              <div className="csFutureCard__icon">🌱</div>
              <h3 className="csH3">Sustainability Metrics</h3>
              <p className="csBody csBody--muted">
                Show users how many textbooks they've kept out of landfills, CO2 
                savings from buying used vs new, and community impact stats. Could 
                be powerful motivation for eco-conscious students.
              </p>
            </div>

            <div className="csFutureCard">
              <div className="csFutureCard__icon">🤖</div>
              <h3 className="csH3">Smart Price Suggestions</h3>
              <p className="csBody csBody--muted">
                Use ML to analyze historical sales data and suggest optimal pricing 
                based on item condition, demand, and time of semester. Help sellers 
                price competitively without undervaluing items.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CONCLUSION ================= */}
      <section className="csSection csSection--conclusion">
        <div className="csSection__inner">
          <h2 className="csH2">Conclusion</h2>

          <p className="csBody csBody--large">
            UQAM Marketplace demonstrates how thoughtful UX design can transform 
            fragmented, frustrating experiences into cohesive, delightful ones. 
            By deeply understanding student needs particularly around trust, context, 
            and efficiency we created a platform that doesn't just replicate existing 
            marketplaces, but reimagines them for campus life.
          </p>

          <p className="csBody csBody--large">
            This project reinforced that great UX isn't about flashy features or 
            complex interactions. It's about removing friction, building trust, 
            and respecting users' time. Every design decision was made in service 
            of those goals.
          </p>

          <p className="csBody csBody--large">
            Most importantly, I learned that the best solutions come from genuine 
            empathy with users. As a student myself, I experienced these pain points 
            firsthand but it wasn't until I systematically researched, tested, and 
            iterated that I could translate frustration into functional design.
          </p>

          <div className="csCallout csCallout--centered">
            <p className="csBody">
              <strong>Want to see more of my work or discuss this project?</strong>
            </p>
            <p className="csBody csBody--muted">
              I'm always happy to dive deeper into my design process, talk through 
              specific decisions, or explore new opportunities.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}