import Image from "next/image";
import logo from "@/assets/logo.png";
import styles from "./LoginForm.module.css";

export function LoginForm({ action, hasError, nextPath }) {
  return (
    <main className={styles.page}>
      <section className={styles.panel}>
        <div className={styles.brand}>
          <Image src={logo} alt="Ganesh Power Laundary logo" width={64} height={64} priority />
          <div>
            <p>Owner access</p>
            <h1>Ganesh Power Laundary</h1>
          </div>
        </div>

        <form className={styles.form} action={action}>
          <input type="hidden" name="next" value={nextPath} />
          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="Enter owner password"
            autoComplete="current-password"
            required
          />
          {hasError ? <p className={styles.error}>Incorrect owner password.</p> : null}
          <button type="submit">Unlock Dashboard</button>
        </form>

        <p className={styles.hint}>Prototype password: ganeshpower</p>
      </section>
      <aside className={styles.visual} aria-hidden="true">
        <span>ORDER FLOW</span>
      </aside>
    </main>
  );
}
