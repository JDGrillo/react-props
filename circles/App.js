// Render the circles using React!
const App = (props) => {
    // assign props into circles
    let { circles } = props;
    // create circle array to keep track of all circles with unique styles
    let circleDivs = []
    for (let i = 0; i < circles.length; i++){
        let myStyles = {
            height: circles[i].radius,
            width: circles[i].radius,
            backgroundColor: circles[i].color,
            borderRadius: 50
        }
        // add each circle with unique style into an array
        // can keep in jsx format
        circleDivs.push(<div style={myStyles}></div>)
    }
    return (
        <div>
            {circleDivs}
        </div>
    )
}

//const Circle = null;  // CHALLENGE: Write a separate Circle component for use in the App component