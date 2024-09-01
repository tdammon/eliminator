"use client";
import React, { useState } from "react";
import styles from "./MatchupBox.module.css";

const MatchupBox = ({ team1, team2, winProb1, winProb2 }) => {
  const [team1Picks, setTeam1Picks] = useState(0);
  const [team2Picks, setTeam2Picks] = useState(0);

  return (
    <div className={styles.matchupBox}>
      <div className={styles.teamStyle}>
        <div>
          <span className={styles.teamNameStyle}>{team1}</span>
          <span className={styles.probStyle}>{winProb1}%</span>
        </div>
        <input
          type="number"
          value={team1Picks}
          onChange={(e) => setTeam1Picks(e.target.value)}
          className={styles.input}
        />
      </div>
      <div className={styles.teamStyle}>
        <div>
          <span className={styles.teamNameStyle}>{team2}</span>
          <span className={styles.probStyle}>{winProb2}%</span>
        </div>
        <input
          type="number"
          value={team2Picks}
          onChange={(e) => setTeam2Picks(e.target.value)}
          className={styles.input}
        />
      </div>
    </div>
  );
};

export default MatchupBox;
