import './styles.css';

const H2 = ({ text, customClass }) => {
    return <h2 className={`h2 ${ customClass }`}>{ text }</h2>;
};

export default H2;