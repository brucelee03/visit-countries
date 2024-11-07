import {Component} from 'react'

import CountryItem from '../CountryItem'
import CountryVisitItem from '../CountryVisitItem'
import {
  VisitCountriesSection,
  Heading,
  VisitCountryTagList,
  VisitCountryFlagContainer,
  VisitCountryFlagList,
  NoCountryVisitTxt,
} from '../styledComponents'

class Countries extends Component {
  constructor(props) {
    super(props)
    this.state = {
      initialCountriesList: props.initialCountriesList,
    }
  }

  onClickVisitBtn = id => {
    const {initialCountriesList} = this.state
    const updatedCountriesList = initialCountriesList.map(country => {
      if (country.id === id) {
        return {...country, isVisited: true}
      }
      return country
    })
    this.setState({initialCountriesList: updatedCountriesList})
  }

  onClickRemoveBtn = id => {
    const {initialCountriesList} = this.state
    const updatedCountriesList = initialCountriesList.map(country => {
      if (country.id === id) {
        return {...country, isVisited: false}
      }
      return country
    })
    this.setState({initialCountriesList: updatedCountriesList})
  }

  render() {
    const {initialCountriesList} = this.state
    const visitedCountriesList = initialCountriesList.filter(
      country => country.isVisited,
    )

    return (
      <VisitCountriesSection>
        <Heading>Countries</Heading>
        <VisitCountryTagList>
          {initialCountriesList.map(eachItem => (
            <CountryVisitItem
              key={eachItem.id}
              countryVisitItem={eachItem}
              visitButton={this.onClickVisitBtn}
            />
          ))}
        </VisitCountryTagList>
        <Heading>Visited Countries</Heading>
        <VisitCountryFlagContainer>
          {visitedCountriesList.length > 0 ? (
            <VisitCountryFlagList>
              {visitedCountriesList.map(eachItem => (
                <CountryItem
                  key={eachItem.id}
                  countryItem={eachItem}
                  removeCountry={this.onClickRemoveBtn}
                />
              ))}
            </VisitCountryFlagList>
          ) : (
            <NoCountryVisitTxt>No Countries Visited Yet</NoCountryVisitTxt>
          )}
        </VisitCountryFlagContainer>
      </VisitCountriesSection>
    )
  }
}

export default Countries
