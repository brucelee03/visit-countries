import styled from 'styled-components'

export const VisitCountriesSection = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #161624;
  background-size: cover;
  height: 100vh;
  overflow-y: auto;
  font-family: 'Roboto';
  color: #ffffff;
  padding: 0 45px;
`

export const Heading = styled.h1`
  font-size: 21px;
  font-weight: 500;
`

export const VisitCountryTagList = styled.ul`
  list-style: none;
  border: solid 1px #334155;
  border-radius: 7px;
  border-width: 1px 2px 1px 2px;
  height: 268px;
  overflow-y: auto;
`

export const TagItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 25px;
  border: solid 1px #334155;
  margin-left: -40px;
  background-color: #1f1f2f;
`

export const CountryName = styled.p`
  color: #f8fafc;
  font-size: 16px;
`

export const VisitButton = styled.button`
  height: 32px;
  width: 70px;
  border-width: 0;
  border-radius: 3px;
  background-color: #3b82f6;
  color: #fff;
  font-size: 14px;
  font-weight: 600;
`

export const VisitedCountryTxt = styled(CountryName)`
  color: #94a3b8;
  font-weight: 500;
  margin-right: 10px;
`

export const VisitCountryFlagContainer = styled.div`
  display: flex;
  align-items: center;
`

export const VisitCountryFlagList = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-left: -40px;
`

export const NoCountryVisitTxt = styled.p`
  color: #ffffff
  font-size: 18px;
  font-weight: 500;
  width: 100%;
  text-align: center;
  margin-top: 65px;
`

export const FlagItem = styled.li`
  width: 238px;
`

export const FlagImg = styled.img`
  width: 100%;
`

export const FlagTag = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #1f1f2f;
  padding: 0 11px;
  margin-top: -4px;
`

export const RemoveButton = styled.button`
  height: 27px;
  width: 60px;
  border: solid 1px #94a3b8;
  border-radius: 5px;
  background-color: transparent;
  color: #f8fafc;
  font-weight: 600;
  font-size: 12px;
`
