import {
  FlagItem,
  FlagImg,
  FlagTag,
  CountryName,
  RemoveButton,
} from '../styledComponents'

const CountryItem = props => {
  const {countryItem, removeCountry} = props
  const {id, name, imageUrl, isVisited} = countryItem

  const onClickRemoveBtn = () => {
    removeCountry(id)
  }

  return (
    <>
      {isVisited ? (
        <FlagItem>
          <FlagImg src={imageUrl} alt="thumbnail" />
          <FlagTag>
            <CountryName>{name}</CountryName>
            <RemoveButton type="button" onClick={onClickRemoveBtn}>
              Remove
            </RemoveButton>
          </FlagTag>
        </FlagItem>
      ) : null}
    </>
  )
}

export default CountryItem
