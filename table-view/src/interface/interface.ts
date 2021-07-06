export interface IDataIn {
    code: string;
    countries: Array<IArrayCountries>;
    name: string;
    __typename: string;
  }
  
export interface IArrayCountries {
    capital: string;
    code: string;
    currency: string;
    name: string;
    __typename: string;
  }

export interface ICountriesProps {
    array: Array<IArrayCountries>
    sortArray: (value: string) => void
  } 
  
 export interface IDataContinents {
    continents: Array<IDataIn>
 }
 
 export interface IData {
    continents: Array<IDataContinents>
 }
  