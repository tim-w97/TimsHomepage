import eisenpowerTodos from "../assets/images/apps/eisenpower/todos.png";
import eisenpowerInput from "../assets/images/apps/eisenpower/input.png";
import eisenpowerImportance from "../assets/images/apps/eisenpower/importance.png";
import eisenpowerHelpScreen from "../assets/images/apps/eisenpower/help screen.png";
import eisenpowerSnackbar from "../assets/images/apps/eisenpower/snack bar.png";

function Eisenpower(props) {
    const imageStyle = 'w-80 m-auto p-3'
    
    return(
        <div className={props.className}>
            <p className='mb-3'>
                Eisenpower ist eine App, die Todos mithilfe der Eisenhower priorisieren kann.
            </p>

            <swiper-container navigation="true">
                <swiper-slide>
                    <img className={imageStyle} src={eisenpowerTodos} alt='Eisenhower Todos'/>
                </swiper-slide>
                <swiper-slide>
                    <img className={imageStyle} src={eisenpowerInput} alt='Eisenhower Add Todo'/>
                </swiper-slide>
                <swiper-slide>
                    <img className={imageStyle} src={eisenpowerImportance} alt='Eisenhower Importance'/>
                </swiper-slide>
                <swiper-slide>
                    <img className={imageStyle} src={eisenpowerHelpScreen} alt='Eisenhower Help Screen'/>
                </swiper-slide>
                <swiper-slide>
                    <img className={imageStyle} src={eisenpowerSnackbar} alt='Eisenhower Snackbar'/>
                </swiper-slide>
            </swiper-container>
        </div>
    )
}

export default Eisenpower