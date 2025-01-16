import React from 'react'
import Card from 'react-bootstrap/Card';

const DisplayContent = ({handleClick,addresses,addressId}) => {
  return (
    <div className='container'>
      <button className='btn btn-primary m-2' onClick={handleClick}>Add New User</button>
      <span>{addressId}</span>
      <div className="row">
      {
        addresses.length === 0 ? (
          <h2>No Data Available</h2>
        ):(
          addresses.length> 0 && addresses.map((address,index)=>(
            <div className="col-md-3" key={index}>
              <Card border="primary" style={{ width: '100%', margin:'10px' }}>
                <Card.Header>{address.country}</Card.Header>
                <Card.Body>
                  <Card.Text><strong>State:</strong>{address.state}</Card.Text>
                  <Card.Text><strong>City:</strong>{address.city}</Card.Text>
                  <Card.Text><strong>Street:</strong>{address.street_address}</Card.Text>
                  <Card.Text><strong>Name:</strong>{address.street_name}</Card.Text>
                  <Card.Text><strong>Zip:</strong>{address.zip}</Card.Text>
                </Card.Body>
              </Card>
            </div>
          ))
        )
      }
        
      </div>
    </div>
  )
} 

export default DisplayContent