import './styles.scss';

const Button = ({ text, customClass }) => {
    return (
        <button className={`btn ${customClass}`}>{text}</button>
    );
};

export default Button;