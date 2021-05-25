import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const FormComponent = (props) => {
  return (
    <Form onSubmit={props.getWeather}>
      <div className="input-group mb-3">
        <Form.Control className="form-control" type="text" name="city" placeholder="Enter a city name .." />
        <div className="input-group-append">
          <Button type="submit" variant="flat" ><FontAwesomeIcon icon={faSearch} /></Button>
        </div>
      </div>
    </Form>
  );
}

export default FormComponent;
