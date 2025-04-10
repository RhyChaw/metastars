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
          supabase.storage.from('letgo').getPublicUrl('breakup.png'),
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


        <p>Letting go isn’t poetic when you’re in the middle of it. It’s not graceful. It’s not peaceful.It feels like you're losing a part of yourself — the part that once made you feel alive, seen, loved, or safe.</p>
        <p>
          And yet, life keeps whispering: “Release. You don’t need to carry this anymore.”
          But how do you let go of something that once meant everything to you? 
          How do you walk away when your heart still lingers? 
          How do you forgive when the wounds are still tender?
        </p>
      </header>

      <div className={styles.horizontalLine} />

      <section className={styles.section}>
        <h2>Letting Go Is Not Erasure — It’s Liberation
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
        <h2>My Story: What I Had to Let Go Of</h2>
        <p>
        When I went through my heartbreak…It didn’t feel like “just” a breakup. It felt like my world 
        cracked in places I didn’t know existed. There were so many layers collapsing all at once — 
        financial stress, business struggles, family far away, not knowing what direction to take in 
        life… and then losing the one person who made me feel seen in the chaos? It was like someone 
        turned off the lights in my world, and I was still expected to keep walking. I didn’t talk about
         it much. Honestly, I felt ashamed. Ashamed of not having it together. Ashamed of feeling so lost. 
         Ashamed of breaking down in the quiet moments when no one was watching. Ashamed of crying alone 
         through long nights. 
        </p>

        <div className={styles.sideBySide}>
        <blockquote> I kept wondering: Are people going to judge me? 
               Think I’m weak? Think I messed it all up? 
               Don’t I deserve to be chosen? To be loved?
</blockquote>
        <img className={styles.breakup} src={blogImages.breakup} alt="breakup" />
        </div>
        <p>But what I didn’t realize at the time was this -  I wasn’t afraid of what others would say. I was afraid of me. I was afraid to sit with the truth. Afraid to face the pain. Afraid to let go of something I had poured so much love into.
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
          <li><strong>Reclaim your energy:</strong> The thoughts and emotions you’ve given away — they’re yours again.</li>
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
        One day, you’ll realize letting go didn’t break you — it brought you home.</p>
      </section>




      <div className={styles.horizontalLine} />


      <section className={styles.section}>
        <h2>Book Recommendation</h2>
        <div className={styles.sideBySide}>
        <p>
          <strong><em>“Letting Go: The Pathway of Surrender” by Dr. David R. Hawkins</em></strong><br />
          This book is like a soft nudge toward emotional freedom. It doesn’t force healing on you — it walks with you, page by page, until you’re ready to release.
        </p>

        <img className={styles.book} src={blogImages.book} alt="Book Cover" />
        </div>
      </section>

      <div className={styles.horizontalLine} />


      <section className={styles.final}>
        <h2>Final Words: You're Not Broken — You're Becoming</h2>
        <p>
        So, if you're standing on the edge of something you're afraid to release...<br />
        Know this: you don’t have to do it all today. <br />
        Start with one feeling. One memory. One belief.

        </p>

        <div className={styles.sideBySide}>
        <div>

        
        <p>Let it go.</p>
        <p>Not because it didn’t matter —<br />
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
