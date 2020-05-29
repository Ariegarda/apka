import React from "react";
import './search.css'

class Ssearch extends React.Component {


 state = {
    text: "raz dwa",
    error: ""
}

handleDateChange = () => {
    const value = this.refs.number.value;
console.log(value);
fetch("https://community-open-weather-map.p.rapidapi.com/find?type=link%252C%20accurate&units=imperial%252C%20metric&q=london", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
		"x-rapidapi-key": "SIGN-UP-FOR-KEY"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.log(err);
});
}


    render() {
        return(
            <div id="search">
                <nav><p>Tutaj możesz coś wyszukać</p></nav>
        <nav><input 
        onChange={this.handleDateChange} 
        type="text" placeholder="Wyszukaj" id="szukaj" ref="number"></input></nav>
         <nav><p>Odpowiedź: {this.state.text}</p></nav>
            </div>
        )
    }
}
export default Ssearch