import Image from "next/image";
import styles from "./page.module.css";
import dynamic from "next/dynamic";
// const MatchupBox = dynamic(() => import("./Components/MatchupBox"), {
//   ssr: false,
// });
import MatchupBox from "./Components/MatchupBox";

export default function Home() {
  return (
    <main className={styles.main}>
      <MatchupBox team1="Team A" team2="Team B" winProb1={60} winProb2={40} />
    </main>
  );
}
