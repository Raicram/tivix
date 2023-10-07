import { Button } from '@/components/button/button'
import styles from './page.module.scss'
import Link from 'next/link'

export default function Home() {
  return (
      <section className={styles.section}>
        <div className={styles.wrapper}>
        <h1 className={styles.title}>
            LEGO MINIFIGS MYSTERY BOX
        </h1>
          <Link href={'/draw'} className={styles.link}>
            <Button>
              LET&apos;S GO!
            </Button>
          </Link>
        </div>
      </section>
  )
}
