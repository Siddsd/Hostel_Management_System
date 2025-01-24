import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'

const SearchBox = () => {
  const [keyword, setKeyword] = useState('')
  const history=useHistory();
  const submitHandler = (e) => {
      e.preventDefault ()
      if(keyword.trim()){
        history.push(`/search/${keyword}`)
      }else{
          history.push(`/`)
      }
  }
  return (
    <Form onSubmit={submitHandler} inline>
      <Form.Control
        type='text'
        value={keyword}
        name='q'
        placeholder='Search students...'
        className='mr-sm-2 ml-sm-5'
        onChange={(e) => setKeyword(e.target.value)}
      ></Form.Control>
      <Button className='p-2' type='submit' variant='outline-success'>
        Search
      </Button>
    </Form>
  )
}

export default SearchBox
