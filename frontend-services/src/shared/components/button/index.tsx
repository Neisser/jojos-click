import { FC } from "react";
import styles from './button.module.css';

interface ButtonProps {
    children: React.ReactNode;
    color?: 'primary-blue' | 'primary-pink' | 'gray';
    id?: string;
    loading?: boolean;
    onClick?: () => void;
}

const Button: FC<ButtonProps> = ({
    color = 'primary-blue',
    id = '',
    loading = false,
    children
}) => {
    return (
        <button id={id} className={`
            ${styles['Button']}
            ${color === 'gray' ?  styles['Button--Gray'] : ''}
            ${color === 'primary-blue' ?  styles['Button--PrimaryBlue'] : ''}
            ${color === 'primary-pink' ?  styles['Button--PrimaryPink'] : ''}
        `}>{ !loading ?
                children :
                <div className={styles['Button__Loading']}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            }
        </button>
    )
}

export default Button;
