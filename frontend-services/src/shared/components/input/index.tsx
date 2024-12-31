import Button from '../button';
import styles from './input.module.css';

const Input: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = ({...props}) => {
    return (
        <label className={styles['label']}>
            <input {...props} className={styles['input']} type="text" />
            <Button color='primary-blue'> Shorten Now! </Button>
        </label>
    )
}

export default Input;
