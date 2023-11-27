import React, { useState } from 'react'
import Login from '../features/userAuth/Login';
import Register from '../features/userAuth/Register';
import styled from 'styled-components';
import {
  IoMdClose
} from "react-icons/io";

function Member({
  setOpenForm,
  openregister,
  setOpenregister
}) {
  return (
    <Container >
      <div className='closeForm' onClick={()=>setOpenForm(false)}>
        < IoMdClose/>
      </div>
       { openregister?<Register setOpenregister={setOpenregister}/>
                        :<Login setOpenregister={setOpenregister}/>  
        }
    </Container>
  )
}

export default Member;


const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: grid;
  place-items: center;
  background-color: #fff;
  z-index: 20;

  .closeForm{
    position: absolute;
    top: 2rem;
    right: 2rem;
    font-size: 2rem;
    cursor: pointer;
  }
`