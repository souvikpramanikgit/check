import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import styles from './index.module.css';
import { Typewriter } from 'react-simple-typewriter';

export default function Home(): JSX.Element {
  return (
    <Layout
      title="Launch Your Tech Career in 30 Days"
      description="Master DSA and Full Stack Development in 30 Days">
      <header className={clsx('hero', styles.heroBanner)}>
        <div className={styles.heroContentWrapper}>
          
          {/* Left Hero Text Content */}
          <div className={styles.heroLeft}>
            <div className={styles.heroBadge}>🚀 Launch Your Tech Career in 30 Days</div>
            
            <h1 className={styles.heroTitle}>
              Master <span className={styles.highlightGreen}>DSA</span> and{' '}
              <span className={styles.highlightGreen}>Full Stack Development</span><br />
              in Just <span className={styles.highlightGreen}>30 Days</span>
            </h1>

            {/* 🔁 Updated with Typewriter */}
            <p className={styles.heroCerts}>
              <Typewriter
                words={[
                  'Explore Courses',
                  'Master Web Dev, GenAI, DSA, Blockchain etc.',
                  'Earn Certificates Recognized by Tech Leaders',
                  'Upskill with Industry-Ready Courses',
                  'Learn by Building Real-World Projects',
                  'Code Connect & Grow with LearnHub'
                ]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </p>

            {/* <p className={styles.heroSubtitle}>
              Zero fluff. One roadmap. Your path to becoming a complete developer starts now.
            </p> */}

            <div className={styles.buttons}>
              <a className="button button--primary button--lg" href="/docs/intro">
                🚀 Get Started Free
              </a>
              <a className="button button--secondary button--lg" href="#roadmap">
                &lt;/&gt; See Roadmap
              </a>
            </div>
          </div>

          {/* Right Hero Image */}
          <div className={styles.heroRight}>
            <img src="/img/coding.jpg" alt="Code card showing deployed project" className={styles.heroImage} />
          </div>
        </div>
      </header>
     {/* New Cards Section */}
      <section className={styles.cardsSection} style={{ backgroundColor: 'var(--ifm-hero-background-color)' }}
>
        <div className={styles.cardsHeader}>
          <h2 className={styles.cardsHeading}>Your Journey Begins Here</h2>
          <p className={styles.cardsSubheading}>Start mastering today’s most in-demand tech domains — interactive, practical, and beginner-friendly.</p>
        </div>
        <div className={styles.cardsWrapper}>
          {[
            { title: 'Web Development', link: '/tutorial/web-dev' },
            { title: 'Generative AI', link: '/tutorial/gen-ai' },
            { title: 'Data Structures', link: '/tutorial/dsa' },
            { title: 'Blockchain Development', link: '/tutorial/blockchain' }
          ].map((card, index) => (
            <a key={index} href={card.link} className={clsx(styles.card, styles[`card${index}`])} style={{ backgroundColor: 'var(--ifm-card-background)', minHeight: '250px' }}>
              <h3>{card.title}</h3>
              <p>Learn the fundamentals of {card.title}</p>
              <button className="button button--secondary button--sm" style={{ marginTop: '1rem' }}>Learn More</button>
            </a>
          ))}
        </div>
      </section>
    </Layout>
  );
}
