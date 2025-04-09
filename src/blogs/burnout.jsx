import styles from './burnout.module.css';

export default function BlogPage() {
  return (
    <div className={styles.container}>
    <div className={styles.blogWrapper}>
      <header className={styles.header}>
        <h1>From Burnout to Balance</h1>
        <p className={styles.meta}>By Rahul Dhingra | April 7, 2025</p>
      </header>

      <section className={styles.section}>
        <p>
          Burnout isn’t just about being tired - it’s a slow, creeping exhaustion that drains your passion, clarity, and even your sense of self.
          It sneaks in like a shadow, often disguised as “just being busy,” and before you know it, you're running on empty.
        </p>
        <p>
          But burnout isn’t an inevitable part of success. If you understand its signs, how it operates, and what to do when it strikes, you can
          shift from survival mode to a truly balanced life. Let’s dive in.
        </p>
      </section>

      <section className={styles.section}>
        <h2>How Burnout Creeps In</h2>
        <ul>
          <li>Overworking without rest – “I’ll relax once I finish this project.”</li>
          <li>Emotional exhaustion – supporting others but feeling empty.</li>
          <li>Lack of control – trapped in situations with no escape.</li>
          <li>Perfectionism – never feeling “good enough.”</li>
          <li>Neglecting self-care – skipping meals and sleep.</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2>What Burnout Looks Like</h2>
        <ul>
          <li>Feeling Overwhelmed – Small tasks feel like mountains.</li>
          <li>Brain Fog & Numbness – Zoning out, forgetfulness.</li>
          <li>Irritability & Cynicism – Resentment and snapping at others.</li>
          <li>Exhaustion Beyond Sleep – Rest doesn’t help.</li>
          <li>Loss of Joy – Things you loved now feel like chores.</li>
        </ul>
        <blockquote>Deep Question: When was the last time you felt genuinely excited about something?</blockquote>
      </section>

      <section className={styles.section}>
        <h2>Recognizing Early Burnout</h2>
        <ul>
          <li>Procrastination and lack of motivation.</li>
          <li>Social withdrawal and emotional detachment.</li>
          <li>“Just getting through the day” mindset.</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2>The Aftermath of Burnout</h2>
        <ul>
          <li>Emptiness – “I should feel happy, but I don’t.”</li>
          <li>Physical symptoms – Headaches, tension, digestive issues.</li>
          <li>Loss of confidence and desire to escape.</li>
        </ul>
        <blockquote>Fun Thought: If burnout had a sound, it would be a buffering symbol on bad Wi-Fi.</blockquote>
      </section>

      <section className={styles.section}>
        <h2>My Story: Rebuilding Balance</h2>
        <p>
          I was burned out — financially stressed, alone, lost in business, post-breakup. I didn’t talk about it. I was ashamed. But the moment I finally stopped
          and looked within, I realized: I’m not here just to survive. I’m here to experience life fully.
        </p>
        <ul>
          <li>Accepting where I was instead of fighting it.</li>
          <li>Being kind to myself instead of critical.</li>
          <li>Letting go of control and perfection.</li>
          <li>Rebuilding life one step at a time.</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2>How to Fix Burnout (And Never Go Back)</h2>
        <ul>
          <li><strong>Pause & Acknowledge:</strong> Say it: “I’m burnt out.”</li>
          <li><strong>Rest Without Guilt:</strong> Deep sleep, nature, stillness.</li>
          <li><strong>Set Boundaries:</strong> Say no. Protect your time.</li>
          <li><strong>Move Your Body:</strong> Even when you don’t feel like it.</li>
          <li><strong>Reconnect with Joy:</strong> Do fun things just because.</li>
          <li><strong>Get Support:</strong> You don’t have to do it alone.</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2>The Long-Term Fix: A Balanced Life</h2>
        <ul>
          <li>Work in cycles, not constant sprints.</li>
          <li>Schedule joy as often as responsibility.</li>
          <li>Make self-care non-negotiable: rest, movement, nutrition.</li>
          <li>Simplify. Focus only on what matters.</li>
        </ul>
        <blockquote>Deep Question: Is your energy bank constantly being withdrawn without deposits?</blockquote>
      </section>

      <section className={styles.section}>
        <h3>Book Recommendation</h3>
        <p>
          <em>"The Joy of Missing Out"</em> by Tanya Dalton – A refreshing take on productivity that prioritizes well-being over burnout.
        </p>
      </section>

      <section className={styles.section}>
        <h3>Final Thought</h3>
        <p>
          What’s one small step you can take today to restore your energy? Burnout doesn’t happen overnight—and neither does balance.
          Let’s stop glorifying exhaustion and start choosing what feels good to live.
        </p>
      </section>
    </div>
    </div>
  );
}
