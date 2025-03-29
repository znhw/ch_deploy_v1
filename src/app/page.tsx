import styles from "../styles/page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <header className={styles.header}>
          <div className={styles.headerTexture}></div>

          <mark className={styles.logo}>city hypes</mark>
        </header>
        <div className={styles.intro}>
          <mark className={styles.highlightIntro}>
            We focus on creating <span className={styles.keywords}>meaningful moments</span> at every customer touchpoint, 
            because we believe that these small interactions can <span className={styles.keywords}>drive customer satisfaction</span> and <span className={styles.keywords}>foster business growth</span>. 
          </mark>
        </div>
        <hr className={styles.vertical2}></hr>

        <div className={styles.services}>
          <h2>Our <span className={styles.keywords}>Services</span> For Your Business:</h2>
          <ul >
            <li>Creative</li>
            <li>Social Media</li>
            <li>Strategy</li>
            <li>Marketing</li>
            <li>Website</li>
            <li>Advertising</li>
            <li>Design</li>
            <li>Content</li>
            <li>Photography</li>
            <li>Videography</li>
            <li>Copywriting</li>
          </ul>
        </div>
        <hr className={styles.vertical1}></hr>

        <div className={styles.about}>
          <mark className={styles.highlight}>
            With a good brand story, 
            we can make a city more vibrant and its people more alive.  
          </mark>
        </div>  
        <hr className={styles.vertical2}></hr>


        <div className={styles.contact}>
          <p >Reach us at   
             <a href="mailto:business@cityhypes.com">business@cityhypes.com</a>
          </p>
          {/* <p>...when you're ready for more customers or sales!</p> */}
        </div>
               
      </main>
      <footer className={styles.footer}>
        <hr></hr>
        <p>© 2025. All rights reserved.</p>
        {/* <a
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a> */}
      </footer>
    </div>
  );
}
