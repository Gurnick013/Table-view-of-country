import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import CircularProgress from "@material-ui/core/CircularProgress";
import Button from "@material-ui/core/Button";
import Countries from "../Countries/Countries";
import Header from "../Header/Header";
import { IDataIn } from "../../interface/interface";
import { GET_CONTINENTS } from "../../constants/constant";
import "./Continents.css";


const Continents: React.FC = () => {
  const { loading, error, data } = useQuery(GET_CONTINENTS);
  const [ getCountries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState<boolean>(false)

  if (loading)
    return (
      <div className="loading">
        {" "}
        <CircularProgress color="secondary" />
      </div>
    );
  if (error) return <div className="loading">Error !!!</div>;
  
  const dataIn = data?.continents;
  const nameCont = dataIn?.map((el: IDataIn) => el.name);  

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const currentName = e.currentTarget.innerText;
    const currentCode = dataIn?.find(
      (el: IDataIn) => el.name.toUpperCase() === currentName
    );
    const getArrayCountries = currentCode?.countries;

    setCountries(getArrayCountries);
    setIsLoading(true)
   
    setTimeout(() => {
      setIsLoading(false)
    }, 800)    
  };

  const sortArray = (value: string) => {
    const sortedArray = getCountries.slice().sort((a ,b )=> a[`${value}`] > b[`${value}`] ? 1:-1)
    setCountries(sortedArray)    
  }

  const Items = nameCont?.map((name: string) => {
    return (
      <div key={name}>
        <Button key={name} variant="contained" onClick={handleClick}>
          {name}
        </Button>
      </div>
    );
  });

  return (
    <>
      <div>
        <Header />
        <div className="wrapper">{Items}</div>
        {isLoading ? <CircularProgress className='loading' color="secondary" /> : <Countries array={getCountries} sortArray={sortArray}/>}
      </div>
    </>
  );
};

export default Continents;
