// Render the rectangle using React!
const App = (props) => {
    // Assign props to rectangle
    let { rectangle } = props;

    // Take the styles from the rectangle object
    let myStyles = {
        width: rectangle.width,
        height: rectangle.height,
        backgroundColor: rectangle.color
    }
    return (
        <div style={myStyles}></div>
    )
}
