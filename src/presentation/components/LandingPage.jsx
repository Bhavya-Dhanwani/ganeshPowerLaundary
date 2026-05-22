import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo.png";
import { navItems, pricingRows, processSteps, services } from "@/domain/laundryCatalog";
import styles from "./LandingPage.module.css";

export function LandingPage() {
  return (
    <main className={styles.page}>
      <header className={styles.utilityBar}>
        <span>Owner-managed laundry care</span>
        <span>Pickup, wash, iron, delivery</span>
      </header>

      <nav className={styles.nav} aria-label="Primary navigation">
        <Link className={styles.brand} href="/">
          <Image src={logo} alt="Ganesh Power Laundary logo" width={48} height={48} priority />
          <span>Ganesh Power Laundary</span>
        </Link>
        <div className={styles.navLinks}>
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </div>
        <Link className={styles.ownerLink} href="/login">
          Owner Login
        </Link>
      </nav>

      <section className={styles.hero}>
        <div className={styles.heroImage} aria-hidden="true" />
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}>Premium laundry, sharp finish</p>
          <h1>Fresh clothes. Fast turnaround. Power clean.</h1>
          <p>
            A careful, owner-run laundary experience for daily wear, uniforms,
            delicate garments, and family laundry loads.
          </p>
          <div className={styles.heroActions}>
            <a href="#services" className={styles.primaryButton}>
              View Services
            </a>
            <a href="#contact" className={styles.secondaryButton}>
              Contact Shop
            </a>
          </div>
        </div>
      </section>

      <section className={styles.metrics} aria-label="Service highlights">
        <div>
          <strong>24 hr</strong>
          <span>Express options</span>
        </div>
        <div>
          <strong>100%</strong>
          <span>Tagged garments</span>
        </div>
        <div>
          <strong>4.9</strong>
          <span>Local service rating</span>
        </div>
      </section>

      <section id="services" className={styles.section}>
        <div className={styles.sectionHeader}>
          <p className={styles.eyebrow}>Services</p>
          <h2>Clean workflows for every garment type</h2>
        </div>
        <div className={styles.serviceGrid}>
          {services.map((service) => (
            <article className={styles.serviceCard} key={service.title}>
              <p>{service.price}</p>
              <h3>{service.title}</h3>
              <span>{service.text}</span>
            </article>
          ))}
        </div>
      </section>

      <section id="process" className={styles.processBand}>
        <div className={styles.sectionHeader}>
          <p className={styles.eyebrow}>Process</p>
          <h2>Every order moves through a visible flow</h2>
        </div>
        <ol className={styles.processList}>
          {processSteps.map((step, index) => (
            <li key={step}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              {step}
            </li>
          ))}
        </ol>
      </section>

      <section id="pricing" className={styles.section}>
        <div className={styles.sectionHeader}>
          <p className={styles.eyebrow}>Pricing</p>
          <h2>Simple starting rates</h2>
        </div>
        <div className={styles.priceTable}>
          {pricingRows.map(([item, service, price]) => (
            <div className={styles.priceRow} key={item}>
              <strong>{item}</strong>
              <span>{service}</span>
              <b>{price}</b>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className={styles.contactBand}>
        <div>
          <p className={styles.eyebrow}>Contact</p>
          <h2>Ready for pickup or shop drop-off</h2>
        </div>
        <div className={styles.contactActions}>
          <a href="tel:+919876543210" className={styles.primaryButton}>
            Call Now
          </a>
          <Link href="/login" className={styles.secondaryButton}>
            Owner Dashboard
          </Link>
        </div>
      </section>
    </main>
  );
}
