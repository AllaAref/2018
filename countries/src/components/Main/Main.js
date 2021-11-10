import React from 'react';
import './Main.scss';

class Main extends React.Component {
  render() {
    return (
        <div className="Main">
          <div className="tags-list">
            <div className="tags-list_group">
              <div className="tags-list_group-title">Learn about {this.props.country} on: </div>
              <div className="tags-list_group-content">
                <a href={this.props.wikiUrl} className="tag-item_link">Wiki</a>
              </div>
                <div className="tag-item"></div>
              <div className="tags-list_group-content">
                <a href={this.props.bbcUrl} className="tag-item_link">BBC</a>
              </div>
              <div className="tags-list_group-content">
                <a href={this.props.cnnUrl} className="tag-item_link">CNN</a>
              </div>
            </div>
            <div className="tags-list_group">
              <div className="tags-list_group-title">Watch about {this.props.country} on: </div>
                <div className="tags-list_group-content">
                  <a href={this.props.youtubeUrl} className="tag-item_link">YouTube</a>
                </div>
                <div className="tag-item"></div>
            </div>
          </div>

          <div className="channels-list">
            <div className="channels-list_item">
              <img src="/images/chat-box.svg" alt="language"/>
                Language: <br/> {this.props.language}
            </div>
          
            <div className="channels-list_item">
              <img src="/images/money.svg" alt="currency"/>
                Currency: <br/> {this.props.currencyCode} - {this.props.currency}
            </div>

            <div className="channels-list_item">
              <img src="/images/map.svg" alt="area"/>
                Area: <br/> {this.props.area}
            </div>
          
            <div className="channels-list_item">
              <img src="/images/area.svg" alt="subregion"/>
                Subregion: <br/> {this.props.subregion}
            </div>
          
            <div className="channels-list_item">
              <img src="/images/user.svg" alt="population"/>
                Population: <br/> {this.props.population}
            </div>
          
            <div className="channels-list_item">
              <img src="/images/clock.svg" alt="time zone"/>
                Time zone: <br/> {this.props.timeZone}
            </div>

            <div className="channels-list_item">
              <img src="/images/iso.svg" alt="ISO code"/>
                ISO code: <br/> {this.props.alpha3Code}
            </div>

            <div className="channels-list_item">
              <img src="/images/iso.svg" alt="population"/>
                Numeric code: <br/> {this.props.numericCode}
            </div>

            <div className="channels-list_item">
              <img src="/images/weather.svg" alt="time zone"/>
              Weather in {this.props.capital}: 
              <br />{this.props.temperature} °C
              {this.props.weatherIcon &&
              <img
                className="weather-icon"
                src={'http://openweathermap.org/img/wn/'+this.props.weatherIcon+'@2x.png'}
              />
              }
              </div>
          </div>
        </div>
      );
  }    
}

export default Main;