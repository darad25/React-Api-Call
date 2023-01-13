import React, { useState, useEffect } from "react";
import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';

import { PlayerAttributesContainer , HeaderBlock, PlayerAttributesContain } from "./PlayerAttributes.styles";
export default function App() {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users', { method: 'GET',
    headers: {
      Accept: 'application/json',
    },})
      .then(response => {
        if (response.ok) {
          return response.json()
        }
        throw response;
      })
      .then(data => {
         setData(data);
      })
      .catch(error => {
        console.error("Error fetching data: ", error);
        setError(error);
      })
      .finally(() => {
        setLoading(false)
      })
}, [])

  if (loading) return "Loading...";
  if (error) return "Error!";
   
  return (
    <Fragment> 
    <PlayerAttributesContainer>
      <HeaderBlock>
      <PlayerAttributesContain>
        { 
                data.map((data) => ( 
                <ol key = { data.id } >
                     { data.username }, 
                    Full_Name: { data.name }, 
                    User_Email: { data.email } 
                    </ol> 
                )) } 
      </PlayerAttributesContain>
      </HeaderBlock>
      </PlayerAttributesContainer>
      <Outlet />
      </Fragment>
  )

}