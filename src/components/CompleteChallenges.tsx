import { useContext } from 'react';
import { ChallengesContext } from '../context/ChallengesContext';
import styles from '../styles/components/CompleteChallenges.module.css'

export function CompleteChallenges() {
    const { challengesCompleted } = useContext(ChallengesContext);

    return (
        <div className={styles.completeChallengesContainer}>
            <span>Desafio completos</span>
            <p>{challengesCompleted}</p>
        </div>
    );
}