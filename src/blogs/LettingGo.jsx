import React from "react";
import styles from "./LettingGo.module.css";

const LettingGo = () => {
  return (
    <div className={styles.bigContainer}>
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>The Art of Letting Go</h1>
        <p className={styles.meta}>Rahul Dhingra • April 7, 2025</p>
      </header>

      <section className={styles.section}>
        <h2>Learning to Release Without Losing Yourself</h2>
        <p>
          Letting go isn’t poetic when you’re in the middle of it. It’s not graceful. It’s not peaceful. 
          It feels like you're losing a part of yourself — the part that once made you feel alive, seen, 
          loved, or safe. And yet, life keeps whispering: “Release. You don’t need to carry this anymore.”
        </p>
        <p>
          But how do you let go of something that once meant everything to you? How do you walk away 
          when your heart still lingers? How do you forgive when the wounds are still tender?
        </p>
        <p className={styles.highlight}>
          Sometimes holding on does more damage than letting go ever will.
        </p>
        <div className={styles.imagePlaceholder}>[ Image Placeholder ]</div>
      </section>

      <section className={styles.section}>
        <h2>Letting Go Is Not Erasure — It’s Liberation</h2>
        <p>
          We often think letting go means pretending it didn’t matter. But real letting go is sacred.
          It means: I’m choosing peace over resentment. I’m choosing my future over my past. 
          I’m choosing to breathe again.
        </p>
        <p>
          Sometimes we hold on because we think we still need what once comforted us. But the truth is:
          what comforted you in the past might be the very thing confining you now.
        </p>
        <div className={styles.quote}>
          Ask Yourself:
          <ul>
            <li>What pain am I still carrying that’s not mine to carry anymore?</li>
            <li>What would it feel like to finally put it down?</li>
            <li>Who could I become if I forgave myself for the things I didn’t know then?</li>
          </ul>
        </div>
      </section>

      <section className={styles.section}>
        <h2>Signs You're Ready (Even If It Doesn't Feel Like It)</h2>
        <ul>
          <li>You’re emotionally exhausted replaying the same memories.</li>
          <li>You don’t recognize yourself anymore.</li>
          <li>You’ve outgrown the space you keep shrinking to fit into.</li>
          <li>You crave peace more than closure.</li>
        </ul>
        <p>
          Letting go rarely feels like a decision. It’s often a quiet readiness. A soft whisper in your soul saying,
          <em>“There’s more waiting for you on the other side of this pain.”</em>
        </p>
        <div className={styles.imagePlaceholder}>[ Image Placeholder ]</div>
      </section>

      <section className={styles.section}>
        <h2>My Story: What I Had to Let Go Of</h2>
        <p>
          When I went through my heartbreak…It didn’t feel like “just” a breakup. It felt like my world cracked in places
          I didn’t know existed. There were so many layers collapsing all at once — financial stress, business struggles, 
          family far away, not knowing what direction to take in life… and then losing the one person who made me feel seen 
          in the chaos? It was like someone turned off the lights in my world, and I was still expected to keep walking.
        </p>
        <p>
          I didn’t talk about it much. Honestly, I felt ashamed. Ashamed of not having it together. Ashamed of feeling so lost.
        </p>
        <ul>
          <li>Are people going to judge me?</li>
          <li>Think I’m weak?</li>
          <li>Think I messed it all up?</li>
          <li>Don’t I deserve to be chosen? To be loved?</li>
        </ul>
        <p>
          But what I didn’t realize at the time was this — I wasn’t afraid of what others would say. I was afraid of me.
        </p>
      </section>

      <section className={styles.section}>
        <h2>You Don’t Need to Be Fully Healed to Begin Again</h2>
        <p>
          I’m not saying it’s easy. Letting go is messy, sacred work. Some days you'll miss what broke you.
          Some days you'll feel angry that you're the one doing the healing. But I promise you this:
        </p>
        <blockquote>
          One day, peace will feel louder than the pain.
          One day, you’ll realize letting go didn’t break you — it brought you home.
        </blockquote>
      </section>

      <section className={styles.section}>
        <h2>The Practice of Letting Go (It’s Not a One-Time Thing)</h2>
        <ul>
          <li><strong>Name it:</strong> What exactly are you holding on to? Be honest.</li>
          <li><strong>Feel it fully:</strong> You can't heal what you won’t feel.</li>
          <li><strong>Stop asking "why":</strong> Sometimes healing begins when we start accepting the lesson.</li>
          <li><strong>Talk to yourself kindly:</strong> “I did the best I could with what I knew.”</li>
          <li><strong>Reclaim your energy:</strong> The thoughts and emotions you’ve given away — they’re yours again.</li>
          <li><strong>Create new memories:</strong> Fill the space with joy. Music. Friends. Nature.</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2>Book Recommendation</h2>
        <p>
          <em>“Letting Go: The Pathway of Surrender” by Dr. David R. Hawkins</em><br />
          This book is like a soft nudge toward emotional freedom. It doesn’t force healing on you — it walks with you,
          page by page, until you’re ready to release.
        </p>
      </section>

      <section className={styles.final}>
        <h2>Final Words: You're Not Broken — You're Becoming</h2>
        <p>
          So, if you're standing on the edge of something you're afraid to release...
          Know this: you don’t have to do it all today.
        </p>
        <p>
          Start with one feeling. One memory. One belief. Let it go. Not because it didn’t matter — but because you do.
        </p>
        <p>
          You are not meant to carry the weight of who you used to be forever. You are meant to become someone lighter,
          stronger, and freer.
        </p>
      </section>
    </div>
    </div>

  );
};

export default LettingGo;
