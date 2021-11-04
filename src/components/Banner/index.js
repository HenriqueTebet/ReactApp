import './style.css';

function Banner(props){
    return (
        <section>
            {props.children}
        </section>
    );
}

export default Banner;