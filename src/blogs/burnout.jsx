import styles from './burnout.module.css';
import supabase from '../supabaseClient';
import { useEffect, useState } from 'react';

export default function BlogPage() {
  const [blogImages, setBlogImages] = useState([]);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const loadAssets = async () => {
      try {
        const [
          { data: banner },
          { data: book },
          { data: tired },
          { data: standingMan },
          { data: rah },
          { data: logo },
        ] = await Promise.all([
          supabase.storage.from('burnout').getPublicUrl('banner.png'),
          supabase.storage.from('burnout').getPublicUrl('book.png'),
          supabase.storage.from('burnout').getPublicUrl('tired.png'),
          supabase.storage.from('burnout').getPublicUrl('standingMan.png'),
          supabase.storage.from('asset').getPublicUrl('rah.webp'),
          supabase.storage.from('asset').getPublicUrl('logo.webp'),
        ]);

        setBlogImages({
          banner: banner.publicUrl,
          book: book.publicUrl,
          tired: tired.publicUrl,
          standingMan: standingMan.publicUrl,
          rah: rah.publicUrl,
          logo: logo.publicUrl,
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
    <div className={styles.container}>
    <div className={styles.blogWrapper}>
      <header className={styles.header}>
        <img src={blogImages.banner} alt="Blog Banner" className={styles.banner} />


        <h1>From Burnout to Balance: </h1>
        <h1>Reclaiming your Energy & Life</h1>
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
      </header>

      <section className={styles.section}>
        <p>
          Burnout isn’t just about being tired - it’s a slow, creeping exhaustion that drains your passion, clarity, and even your sense of self.
          It sneaks in like a shadow, often disguised as “just being busy,” and before you know it, you're running on empty.
        </p>
        <p>
        It can start small - pushing yourself a little harder, saying yes when you should say no, or ignoring that voice in your head that whispers, “You need a break.” Then, one day, you wake up feeling exhausted, unmotivated, and disconnected from the things you once loved.

        </p>
        <p>
        But burnout isn’t an inevitable part of success. If you understand its signs, how it operates, and what to do when it strikes, you can shift from survival mode to a truly balanced life.
        </p>
      </section>

      <blockquote className={styles.quote}>
        Let's dive in.
      </blockquote>

      <div className={styles.horizontalLine} />
      

      <section className={styles.section}>
        <h2>How Burnout Creeps In</h2>
        <p>Burnout doesn’t knock on your door - it slips in through the back when you're least expecting it. It can come from:</p>
        <ul>
          <li><strong>Overworking without rest</strong> – “I’ll relax once I finish this project.”</li>
          <li><strong>Emotional exhaustion</strong> –constantly supporting others but feeling empty.</li>
          <li><strong>Lack of control</strong> –  feeling trapped in a job, relationship, or situation with no escape.</li>
          <li><strong>Perfectionism</strong> – setting impossibly high standards and never feeling “good enough.”          </li>
          <li><strong>Neglecting self-care</strong> – skipping meals, ignoring sleep, and thinking “I don’t have time for breaks.”          </li>
        </ul>

        <blockquote>“Burnout isn’t just a work problem—it can show up in personal relationships, health, and even hobbies that once brought you joy.”</blockquote>
      </section>

      <div className={styles.horizontalLine} />


      <section className={styles.section}>
        <h2>What Burnout Looks Like</h2>
        <p>   Burnout wears many masks. Sometimes it’s obvious, other times it’s subtle. Here’s how it might show up:</p>
        <ul>
          <li><strong>Feeling Overwhelmed</strong> – Small tasks feel like mountains. Even simple decisions drain you.          </li>
          <li><strong>Brain Fog & Numbness</strong> – You zone out in conversations, forget details, or feel disconnected from life.          </li>
          <li><strong>Irritability & Cynicism</strong> – You snap at people over small things or feel resentment creeping in.          </li>
          <li><strong>Exhaustion Beyond Sleep</strong> – No matter how much you rest, you still feel drained.          </li>
          <li><strong>Loss of Joy</strong> – The things you once loved now feel like chores.</li>
        </ul>
        <blockquote>Deep Question: When was the last time you felt genuinely excited about something? If you can’t remember, burnout might be in play.</blockquote>
      </section>

      <div className={styles.horizontalLine} />

      <section className={styles.section}>
        <h2>Recognizing Early Burnout  (Before It Wrecks You)</h2>
        <p> Burnout doesn’t happen overnight - it builds up. If you notice these signs early, you can take action before it hits full force:        </p>
        <ul>
          <li>You stop caring about things you once enjoyed.</li>
          <li>You procrastinate more than usual.</li>
          <li>You start avoiding people because socializing feels draining.</li>
          <li>You feel like you’re “just getting through the day.”</li>
          <li>You find yourself blaming people or situations for your exhaustion.</li>
        </ul>
        <blockquote>The key is catching burnout before you start resenting your job, relationships, or life itself. It’s not about blaming external things - it’s about recognizing when your energy reserves are running low.</blockquote>
      </section>

      <div className={styles.horizontalLine} />


      <section className={styles.section}>
        <h2>The Aftermath of Burnout : How Burnout Feels Once It Hits</h2>
        <p>Once burnout fully sets in, it leaves behind:        </p>
        <ul>
            <li><strong>A sense of emptiness.</strong>You might say, “I should feel happy, but I don’t feel anything.”            </li>
            <li><strong>Physical symptoms.</strong> Headaches, muscle tension, digestive issues—your body holds the stress.            </li>
            <li><strong>A loss of confidence</strong> Burnout can make you doubt yourself and your abilities.            </li>
            <li><strong>A desire to escape.</strong> You might daydream about quitting everything or running away.            </li>

        </ul>
        <blockquote>Fun Thought: If burnout had a sound, it would be a buffering symbol on bad Wi-Fi connection.</blockquote>
      </section>

      <div className={styles.horizontalLine} />


      <section className={styles.section}>
        <h2>My Story: Rebuilding Balance</h2>

        
        <p>
        There was a time in my life when burnout wasn’t just a phase - it felt like my entire existence.
        </p>

        <p>I had financial stress weighing on me. My family was far away. My business didn't go the way I had hoped. I had just gone through a breakup. And worst of all, I didn’t know what to do next with my life.</p>
        <p>I kept all of it inside. I felt ashamed to talk about it, wondering if people would judge me. I thought no one would understand or support me. The overwhelming stress turned into exhaustion, and soon, I was burnt out - not just physically, but emotionally and mentally. At some point, I realized my biggest mistake: <strong>I was seeking answers from people, but I wasn’t looking inside myself.</strong>  And to be honest, I was afraid
          to. But life has a way of teaching you the same lessons over and over again until 
          you finally learn. And when I finally stopped running and sat with myself, I had a 
          moment of clarity:</p>
          <br />
          <strong>I am not here just to work, succeed, or survive. I am here to experience life - fully.</strong>
          <p>That changed everything. I started:</p>
        <div className={styles.sideBySide}>
          <ul>
            <li>Accepting where I was instead of fighting it.</li>
            <li>Being kind to myself instead of  beating myself up.</li>
            <li>Seeing my small mistakes as lessons instead of failures.</li>
            <li>Allowing myself to feel emotions but not letting them control me.</li>
          </ul>
          <img src={blogImages.standingMan} alt="standing man" className={styles.standingMan} />
        </div>
        

        <blockquote>I stopped trying to "fix" everything at once and instead focused on building my life block by block.
        That shift - from burnout to balance - wasn’t instant. It took time, but it was worth it.</blockquote>
      </section>

      <div className={styles.horizontalLine} />


      <section className={styles.section}>
        
        <h2>How to Fix Burnout (And Never Go Back)</h2>

        <div>
          <img src={blogImages.tired} alt="tired" className={styles.tired} />
        </div>
        <p>     Burnout recovery isn’t about a weekend off - it’s about <strong> changing how you manage your energy</strong> long-term. Here’s how:</p>

        <ul className={styles.burnoutList}>
          <li><strong>Pause & Acknowledge:</strong> Stop pretending you’re "just tired." Say it: “I’m burnt out.” This is the first step to healing.</li>

          <li><strong>Rest Without Guilt:</strong> True rest isn’t scrolling on your phone - it’s deep sleep, time in nature, or doing nothing. Give yourself permission to recover.</li>

          <li><strong>Set Boundaries like your life depends on it:</strong> Protect your energy. Say ‘no’ more often. Block out time for yourself.</li>

          <li><strong>Move Your Body, Even When You Don’t Feel Like It:</strong> Exercise isn’t just for fitness - it clears mental fog and resets your stress levels.</li>

          <li><strong>Reconnect with what brings you Joy:</strong> Do something purely for fun - no productivity, no expectations.</li>

          <li><strong>Get Support:</strong> Talk to a friend, therapist, or mentor. Burnout thrives in isolation.</li>
        </ul>



      </section>

      <div className={styles.horizontalLine} />


      <section className={styles.section}>
        <h2>The Long-Term Fix: A Balanced Life</h2>
        <p>If your energy was a bank account, are you constantly withdrawing without making deposits? <strong>creating rhythms that sustain you, not drain you.</strong></p>
        <ul className={styles.burnoutList}>
          <li><strong>Work in cycles, not sprints.</strong> Push hard when needed, but schedule slow periods too.</li>
          <li><strong>Schedule joy.</strong> If you don’t plan fun, life becomes all responsibility.</li>
          <li><strong>Simplify your commitments. </strong> Focus on what truly matters and let go of the rest.          </li>
          <li> <strong>Make self care non-negotiable. </strong>Rest, movement, and nutrition should be daily habits, not emergency fixes.</li>
        </ul>
        <blockquote>If your energy was a bank account, are you constantly withdrawing without making deposits?</blockquote>
      </section>

      <div className={styles.horizontalLine} />


      <section className={styles.section}>
        <h2>Book Recommendation: "The Joy of Missing Out" by Tanya Dalton</h2>
        <div className={styles.sideBySide}>
        <p>
        This book redefines productivity, showing how to create success without sacrificing well-being. It’s perfect if you struggle with feeling overwhelmed and want a more intentional, fulfilling life.
        </p>
        <img src={blogImages.book} alt="Book" className={styles.book} />

        </div>
      </section>

      <div className={styles.horizontalLine} />


      <section className={styles.section}>
        <h3>Final Thought: What’s One Small Change You Can Make Today?</h3>
        <p>
        Burnout doesn’t happen overnight, and neither does balance. What’s one small step you can take today to restore your energy?
        </p>
        <p>Let’s stop glorifying exhaustion and start prioritizing a life that actually feels good to live.</p>

        <img src={blogImages.logo} alt="Logo" className={styles.logo} />
      </section>
    </div>
    </div>
  );
}
