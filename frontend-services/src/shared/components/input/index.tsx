import Button, { ButtonProps } from '../button';
import styles from './input.module.css';
interface InputProps {
    onButtonClick?: () => void;
}



const Input: React.FC<React.InputHTMLAttributes<HTMLInputElement> & Pick<ButtonProps, 'loading'> & InputProps> = ({onButtonClick, loading = false, ...props}) => {
    return (
        <label className={styles['label']}>
            <input {...props} className={styles['input']} type="text" />
            <Button loading={loading} onClick={onButtonClick} color='primary-blue'> Shorten! </Button>
        </label>
    )
}

export default Input;
