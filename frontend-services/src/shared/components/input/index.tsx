import Button, { ButtonProps } from '../button';
import styles from './input.module.css';
interface InputProps {
    onButtonClick?: () => void;
    labelButton?: string;
}



const Input: React.FC<React.InputHTMLAttributes<HTMLInputElement> & Pick<ButtonProps, 'loading' > & InputProps> = ({onButtonClick, loading = false, labelButton = 'Shorten!', ...props}) => {
    return (
        <label className={styles['label']}>
            <input {...props} className={styles['input']} type="text" />
            <Button loading={loading} onClick={onButtonClick} color='primary-blue'> {labelButton} </Button>
        </label>
    )
}

export default Input;
