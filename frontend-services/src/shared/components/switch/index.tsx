import { FC } from 'react';
import styles from './switch.module.css';

const Switch: FC<React.InputHTMLAttributes<HTMLInputElement>> = ({...props}) => {

    return (
        <label className={styles['switch']}>
            <input {...props} type="checkbox" />
            <span id="slider"></span>
        </label>
    )
}

export default Switch;
