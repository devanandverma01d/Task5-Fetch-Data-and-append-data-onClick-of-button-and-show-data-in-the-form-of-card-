import React, { useEffect, useState } from 'react';
import DisplayContent from './DisplayContent';

const ParentComp = () => {
  const [addresses, setAddresses] = useState([]);
  const [addressId, setAddressId] = useState(0);
  const [loading,setLoading] = useState(false)

  useEffect(()=>{
    if(addressId===0) return
    fetchAddress()
  },[addressId])
  const fetchAddress = async (newAddressId) => {
    try {
        setLoading(true)
      const response = await fetch(`https://random-data-api.com/api/v2/addresses?size=${newAddressId}`);
      const data = await response.json();
      console.log('data -->', data);

      // Append the new data to the existing addresses
      setAddresses((prevAddresses) => [...prevAddresses, data]);
    } catch (error) {
      console.error('Error fetching address:', error);
    }finally{
        setLoading(false)
    }
  };

  const handleClick = () => {
    setAddressId((prevValue) => prevValue + 1);
  };
  if(loading) return <h1>Loading...</h1>
  return (
    <>
      <DisplayContent
        handleClick={handleClick}
        addresses={addresses}
        addressId={addressId}
      />
    </>
  );
};

export default ParentComp;
