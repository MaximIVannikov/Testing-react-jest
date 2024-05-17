import cn from 'clsx';
import style from './Form.module.css';
import { useTheme } from '../../providers/useTheme';

const Form = ({ onSubmit, onSuccess, onError, children, className }) => {
  const { theme } = useTheme();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    try {
      await onSubmit(data);
      onSuccess && onSuccess(data);
    } catch (error) {
      onError && onError(error);
    }
  };

  return (
    <form
      className={cn(style.form, className, theme === 'dark' && style.dark)}
      onSubmit={handleSubmit}
      autoComplete="off"
      role="form"
    >
      {children}
    </form>
  );
};

export { Form };
