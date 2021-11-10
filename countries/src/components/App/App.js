import React, {useRef} from 'react';
import './App.scss';
import Header from '../Header/Header.js';
import Main from '../Main/Main.js';
import Fetcher from '../../components/util/Fetcher';
import OpenWeather from '../../components/util/openWeather';
import {BrowserRouter, Route} from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      country: '',
      capital: '',
      currency: '',
      currencyCode: '',
      language: '',
      area: '',
      timeZone: '',
      flag: '',
      alpha3Code: '',
      numericCode: '',
      population: '',
      subregion: '',
      wikiUrl: '',
      bbcUrl: '',
      cnnUrl: '',
      youtubeUrl: '',
      temperature: '',
      weatherIcon: ''
    }
    this.getCountry = this.getCountry.bind(this);
  }

  getCountry(countryToGet, history) {
    Fetcher.getCountry(countryToGet)
      .then((data) => {
        this.setState({
          country: data.country,
          capital: data.capital,
          currency: data.currency,
          currencyCode: data.currencyCode,
          language: data.language,
          population: data.population,
          flag: data.flag,
          subregion: data.subregion,
          alpha3Code: data.alpha3Code,
          numericCode: data.numericCode,
          area: data.area,
          timeZone: data.timeZone,
          wikiUrl: 'https://en.wikipedia.org/wiki/'+data.country,
          bbcUrl: 'https://www.bbc.co.uk/search?q='+data.country,
          cnnUrl: 'https://www.cnn.com/search?q='+data.country,
          youtubeUrl: 'https://www.youtube.com/results?search_query='+data.country+'+travel'
        }, () => {history.push(`/${countryToGet}`)})
        return data.capital;
      })
      .then((capitalCity) => {
        OpenWeather.getWeather(capitalCity)
        .then(data => {
          if(data) {
            this.setState({
              temperature: Math.floor(data.temperature - 273.15),
              weatherIcon: data.icon
            })
          } else {
            this.setState({
              temperature: '',
              weatherIcon: ''
            })
          }
          
        })
      })
    }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Route path="/:code"
            render={(props) => (
              <div>
              <Header
                code={props.match.params.code}
                history={props.history}
                country={this.state.country} 
                capital={this.state.capital}
                flag={this.state.flag}
                onGetCountry={this.getCountry}
              /> 
              <Main
                country={this.state.country}
                capital={this.state.capital}
                currency={this.state.currency}
                currencyCode={this.state.currencyCode}
                language={this.state.language}
                population={this.state.population}
                subregion={this.state.subregion}
                area={this.state.area}
                timeZone={this.state.timeZone}
                wikiUrl={this.state.wikiUrl}
                bbcUrl={this.state.bbcUrl}
                cnnUrl={this.state.cnnUrl}
                youtubeUrl={this.state.youtubeUrl}
                temperature={this.state.temperature}
                weatherIcon={this.state.weatherIcon}
                numericCode={this.state.numericCode}
                alpha3Code={this.state.alpha3Code}
              />
            </div>
              )}
          />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
