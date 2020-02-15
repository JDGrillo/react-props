// Render the cards using React!
const App = (props) => {
    let { cards } = props;
    let card1Path = `cards/${cards[0].value}${cards[0].suit}.png`
    let card2Path = `cards/${cards[1].value}${cards[1].suit}.png`
    let cardStyle = {
        width: 150,
        height: 300
    }
    return (
        <div>
            <img src={(card1Path)} style={cardStyle}></img>
            <img src={(card2Path)} style={cardStyle}></img>
        </div>
    )
}

// CHALLENGE: Write a separate Card component for use in the App component
// TIP: Use props to pass the suit and number to each Card component
const Card = null;  