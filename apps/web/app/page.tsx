import Image, { type ImageProps } from "next/image";
import { Button } from "@repo/ui/button";
import styles from "./page.module.css";
import { client } from "@repo/db/client";





export default function Home() {
  return (
    <div className={styles.page}>
      Hello world ... testing monorepoly deployment ....
    </div>
  );
}
