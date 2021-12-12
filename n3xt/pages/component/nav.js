import styles from "./../../styles/nav.module.css"
import Image from "next/image";
import Link from "next/link";

const NavBar = () => {
  return (
    <>
      <div className={styles.div1}>
        <ul className={styles.ul}>
          <Link href="/">
            <li className={styles.li}>
              <Image
                src="/next.jpg"
                alt="Picture of the author"
                width={140}
                height={100}
              />
            </li>
          </Link>
          <Link href="/about">
            <li className={styles.li}>AboutUs</li>
          </Link>
          <Link href="/contact">
            <li className={styles.li}>ContactUs</li>
          </Link>
          <Link href="/post">
            <li className={styles.li}>Posts</li>
          </Link>
        </ul>
      </div>
    </>
  );
};

export default NavBar;
