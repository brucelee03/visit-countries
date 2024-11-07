import {
  VisitedCountryTxt,
  VisitButton,
  CountryName,
  TagItem,
} from '../styledComponents'

const CountryVisitItem = props => {
  const {countryVisitItem, visitButton} = props
  const {id, name, isVisited} = countryVisitItem

  const onClickVisitBtn = () => {
    visitButton(id)
  }

  return (
    <TagItem>
      <CountryName>{name}</CountryName>
      <div>
        {isVisited ? (
          <VisitedCountryTxt>Visited</VisitedCountryTxt>
        ) : (
          <VisitButton type="button" onClick={onClickVisitBtn}>
            Visit
          </VisitButton>
        )}
      </div>
    </TagItem>
  )
}

export default CountryVisitItem
