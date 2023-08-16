import * as styles from './Button.module.css';

type ButtonProps = {
	children: React.ReactNode;
};

export const Button = ({ children }: ButtonProps) => {
	return <button className={styles.button}>{children}</button>;
};
