import React from "react";
import styles from "./LettingGo.module.css";
import supabase from '../supabaseClient';
import { useEffect, useState } from 'react';

const LettingGo = () => {

  const [blogImages, setBlogImages] = useState([]);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const loadAssets = async () => {
      try {
        const [
          { data: banner },
          { data: quote },
          { data: rah },
          { data: book },
          { data: breakup },
          { data: balloon },
          { data: liberation },
          { data: mirrorMan },
          { data: mirrorHug },
          { data: heart },
          { data: vase},
          { data: logo },
        ] = await Promise.all([
          supabase.storage.from('letgo').getPublicUrl('topBanner.png'),
          supabase.storage.from('letgo').getPublicUrl('topQuote.png'),
          supabase.storage.from('asset').getPublicUrl('rah.webp'),
          supabase.storage.from('letgo').getPublicUrl('book.png'),
          supabase.storage.from('letgo').getPublicUrl('breakup3.jpeg'),
          supabase.storage.from('letgo').getPublicUrl('balloonGirl.png'),
          supabase.storage.from('letgo').getPublicUrl('liberation.png'),
          supabase.storage.from('letgo').getPublicUrl('mirrorMan.png'),
          supabase.storage.from('letgo').getPublicUrl('selfHug.png'),
          supabase.storage.from('letgo').getPublicUrl('healheart.png'),
          supabase.storage.from('letgo').getPublicUrl('flowerVase.png'),
          supabase.storage.from('asset').getPublicUrl('logo.webp'),
        ]);

        setBlogImages({
          banner: banner.publicUrl,
          quote: quote.publicUrl,
          rah: rah.publicUrl,
          breakup: breakup.publicUrl,
          book: book.publicUrl,
          balloon: balloon.publicUrl,
          liberation: liberation.publicUrl,
          mirrorMan: mirrorMan.publicUrl,
          vase: vase.publicUrl,
          logo: logo.publicUrl,
          heart: heart.publicUrl,
          mirrorHug: mirrorHug.publicUrl,
        });

        setIsReady(true);
      } catch (error) {
        console.error("Error loading images:", error);
      }
    };

    loadAssets();
  }, []);

  if (!isReady) {
    return <div>Loading...</div>;
  }

  
  return (
    <div className={styles.bigContainer}>
    <div className={styles.blogWrapper}>
      <header className={styles.header}>
        <img className={styles.banner} src={blogImages.banner} alt="Top Banner" />
        <h1>The Art of Letting Go: Learning to Release Without Losing Yourself</h1>

        <div className={styles.metaContainer}>
          <div className={styles.date}>
            <span className={styles.dateIcon}>📅</span>
            <span>April 7, 2025</span>
          </div>
          <div className={styles.authorSection}>
            <div className={styles.authorText}>
              <p className={styles.author}>Rahul Dhingra</p>
              <p className={styles.role}>Founder</p>
            </div>
            <img className={styles.authorImage} src={blogImages.rah} alt="Rahul Dhingra" />
          </div>
        </div>

        <img className={styles.quote} src={blogImages.quote} alt="Top Quote" />


        <p>Letting go isn’t poetic when you’re in the middle of it. It’s not graceful. It’s not peaceful.It feels like you're losing a part of yourself  - the part that once made you feel alive, seen, loved, or safe.</p>
        <p>
          And yet, life keeps whispering: “Release. You don’t need to carry this anymore.”
          But how do you let go of something that once meant everything to you? 
          How do you walk away when your heart still lingers? 
          How do you forgive when the wounds are still tender?
        </p>
      </header>

      <div className={styles.horizontalLine} />

      <section className={styles.section}>
        <h2>Letting Go Is Not Erasure  - It’s Liberation
        </h2>
        <p>
        We often think letting go means pretending it didn’t matter.But real letting go is sacred.
        It means:
        </p>
        <div className={styles.sideBySide}>
          <ul>
            <li>I'm choosing peace over resentment.</li>
            <li>I'm choosing my future over my past.</li>
            <li>I'm choosing to breathe again.</li>
          </ul>
          <img className={styles.libImage} src={blogImages.liberation} alt="Liberation" />
        </div>

        <p>Sometimes we hold on because we think we still need what once comforted us.But the truth is: what comforted you in the past might be the very thing confining you now.</p>

      </section>

      <div className={styles.horizontalLine} />


      <section className={styles.section}>
          <h2>Ask Yourself:</h2>
          <div className={styles.sideBySide}>
          <ul>
            <li>What pain am I still carrying that’s not mine to carry anymore?</li>
            <li>What would it feel like to finally put it down?</li>
            <li>Who could I become if I forgave myself for the things I didn’t know then?</li>
          </ul>

          <img className={styles.mirror} src={blogImages.mirrorMan} alt="mirror man" />
          </div>
      </section>


      <div className={styles.horizontalLine} />

      <section className={styles.section}>
        <h2>Signs You're Ready (Even If It Doesn't Feel Like It)</h2>

        <div className={styles.sideBySide}>

        <ul>
          <li>You’re emotionally exhausted replaying the same memories.</li>
          <li>You don’t recognize yourself anymore.</li>
          <li>You’ve outgrown the space you keep shrinking to fit into.</li>
          <li>You crave peace more than closure.</li>
        </ul>
        <img className={styles.book} src={blogImages.vase} alt="Vase" ></img>
        </div>
        <p>
          Letting go rarely feels like a decision. It’s often a quiet readiness. A soft whisper in your soul saying,
          <em>“There’s more waiting for you on the other side of this pain.”</em>
        </p>
      </section>

      <div className={styles.horizontalLine} />


      <section className={styles.section}>
  <h2>My Story: The Lesson Life Whispered Through Loss</h2>
  <p>
    Letting go sounds like something strong people do. <br />
    But what I’ve learned is - sometimes it’s not about strength. <br />
    It’s about survival. <br /><br />

    There was a season in my life where everything hit at once. <br />
    Debt was mounting. My family was far. <br />
    The business I poured my soul into didn’t go where I dreamed it would. <br />
    I was waking up with a pressure in my chest, trying to smile through the weight of questions I didn’t have answers to. <br /><br />

    And in the middle of all that, I lost the one person who felt like home. <br />
    The breakup wasn’t explosive. It wasn’t cruel. <br />
    It was just… full of weight. Timing. Life. Fear. Confusion. <br />
    She had her walls, and I had my wounds. <br /><br />

    But even now, I don’t think either of us stopped feeling. <br />
    What I felt for her wasn’t some casual love story. <br />
    It was deep, layered, and honest. <br />
    She made my world feel softer when everything else was hard. <br />
    And when it ended, it wasn’t just a relationship I lost - it felt like I lost my safe place.
  </p>

  <div className={styles.sideBySide}>
    <blockquote>
      What made it harder was that I couldn’t talk about it. <br />
      Not really. <br />
      I didn’t want to seem broken. <br />
      I didn’t want to be that guy, still holding on to something that’s already gone.
    </blockquote>
    <img className={styles.book} src={blogImages.breakup} alt="breakup" />
  </div>

  <p>
    But here’s the truth - I was holding on. <br />
    Not because I didn’t want to move on… <br />
    But because I didn’t know how to let go of something that still felt so real in my bones. <br /><br />

    I’d walk through the day with purpose, but every now and then, a memory would blindside me - a laugh, a dream, a future we once spoke about as if it were certain. <br />
    The shame didn’t just come from losing her. <br />
    It came from losing myself in the process. <br /><br />

    I kept reaching out - to people, to distractions - hoping someone would save me from the heaviness. <br />
    But no one could. <br />
    Because I hadn’t looked inside. <br />
    I was afraid of what I’d find. <br /><br />

    Eventually, I stopped running. <br />
    I sat with the mess. <br />
    I looked at every shattered piece of who I thought I had to be… and I forgave him. <br /><br />

    I started letting go of needing to be perfect, of needing to have all the answers. <br />
    And slowly - painfully, patiently - I started learning how to be there for myself. <br /><br />

    That’s when I realized… <br />
    Letting go doesn’t mean forgetting. <br />
    It means making space. <br />
    Space to grow, space to breathe, space to love again - even if that love, for now, is just for yourself. <br /><br />

    I haven’t “moved on” completely. <br />
    There are still quiet moments where I think of her. <br />
    Not in desperation, not in regret… <br />
    Just in remembrance - of what was good, what was real, and what will always be part of my story. <br /><br />

    And maybe, just maybe… <br />
    That kind of love doesn’t need a neat ending. <br />
    It just needs to be honored - as the chapter that shaped me the most.
  </p>
</section>


      <div className={styles.horizontalLine} />


      <section className={styles.section}>
        <h2>The Practice of Letting Go (It’s Not a One-Time Thing)</h2>
        <ul>
          <li><strong>Name it:</strong> What exactly are you holding on to? Be honest.</li>
          <li><strong>Feel it fully:</strong> You can't heal what you won’t feel.</li>
          <li><strong>Stop asking "why":</strong> Sometimes healing begins when we start accepting the lesson.</li>
          <li><strong>Talk to yourself kindly:</strong> “I did the best I could with what I knew.”</li>
          <li><strong>Reclaim your energy:</strong> The thoughts and emotions you’ve given away  - they’re yours again.</li>
          <li><strong>Create new memories:</strong> Fill the space with joy. Music. Friends. Nature.</li>
        </ul>
        <img src={blogImages.balloon} alt="balloon" className={styles.balloon} />

      </section>

      <div className={styles.horizontalLine} />


      <section className={styles.section}>
        <h2>You Don’t Need to Be Fully Healed to Begin Again</h2>
        <div className={styles.sideBySide}>

        <p>
        I’m not saying it’s easy. <br />
        Letting go is messy, sacred work.<br />
        Some days you'll miss what broke you.<br />
        Some days you'll feel angry that you're the one doing the healing.</p>

        <img className={styles.heart} src={blogImages.heart} alt="heart" />
        </div>
        <p>But I promise you this:<br />
        <strong>One day, peace will feel louder than the pain.</strong><br />
        One day, you’ll realize letting go didn’t break you  - it brought you home.</p>
      </section>




      <div className={styles.horizontalLine} />


      <section className={styles.section}>
        <h2>Book Recommendation</h2>
        <div className={styles.sideBySide}>
        <p>
          <strong><em>“Letting Go: The Pathway of Surrender” by Dr. David R. Hawkins</em></strong><br />
          This book is like a soft nudge toward emotional freedom. It doesn’t force healing on you  - it walks with you, page by page, until you’re ready to release.
        </p>

        <img className={styles.book} src={blogImages.book} alt="Book Cover" />
        </div>
      </section>

      <div className={styles.horizontalLine} />


      <section className={styles.final}>
        <h2>Final Words: You're Not Broken  - You're Becoming</h2>
        <p>
        So, if you're standing on the edge of something you're afraid to release...<br />
        Know this: you don’t have to do it all today. <br />
        Start with one feeling. One memory. One belief.

        </p>

        <div className={styles.sideBySide}>
        <div>

        
        <p>Let it go.</p>
        <p>Not because it didn’t matter  -<br />
        But because you do.
        </p>
        
        <p>Let go...</p>
        <p>So, you can breathe.</p>
        <p>So, you can feel.</p>
        <p>So, you can become.</p>
        </div>
        <img className={styles.mirrorHug} src={blogImages.mirrorHug} alt="mirror hug" />
        </div>

        <em>You are not meant to carry the weight of who you used to be forever and for those who left. <br />
          You are meant to become someone lighter. Stronger. And freer.</em>
          <img className={styles.logo} src={blogImages.logo} alt="Logo" />

      </section>
    </div>
    
    </div>

  );
};

export default LettingGo;
