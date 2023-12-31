import React from 'react';
import styled from 'styled-components';
import { FaShoppingCart, FaUtensils, FaSubway, FaGasPump } from 'react-icons/fa';
import {
  FaArrowRightLong
} from "react-icons/fa6";
import { NavLink } from 'react-router-dom';

const TransactionContainer = styled.div`
background-color: #fff;
        margin: 1rem;
        padding:1rem;
        box-shadow:0 6px 27px rgba(0,0,0,.05);
        border-radius: 10px;

  .headerSection{
    display:flex;
    align-items:center;
    justify-content:space-between;    

       .nextIcon{
        width:28px;
        height:28px;
        background-color: #eee;
        border-radius: 50%;
        display: grid;
        place-items: center;
        cursor: pointer;
    }
  }
`;

const TransactionList = styled.div`
  /* Add styling for the list of transactions */
`;

const TransactionItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  border-bottom: 1px solid #ccc;

  .info{
    display:flex;
    align-items:center;
    gap:1rem;

  }

  /* Customize styling for individual transaction items */
`;

const TransactionIcon = styled.div`

`;

function Transaction() {
  const transactions = [
    { id: 1, icon: <FaShoppingCart />, description: 'Grocery shopping', amount: -50.00 },
    { id: 2, icon: <FaUtensils />, description: 'Dinner at a restaurant', amount: -30.00 },
    { id: 3, icon: <FaSubway />, description: 'Public transportation', amount: -5.50 },
    { id: 4, icon: <FaGasPump />, description: 'Gas refill', amount: -40.00 },
  ];

  return (
    <TransactionContainer>
      <div className="headerSection">
        <h3>Recent Transactions</h3>
        <NavLink to={'/profile/transactions'} className = "nextIcon" >
          <FaArrowRightLong/>
        </NavLink>
      </div>
      <TransactionList>
        {transactions.map(transaction => (
          <TransactionItem key={transaction.id}>
            <div className="info">
            <TransactionIcon>{transaction.icon}</TransactionIcon>
              <div>{(transaction.description).slice(0, 10)}</div>
            </div>
              <div>{transaction.amount >= 0 ? `+${transaction.amount}` : transaction.amount}</div>
          </TransactionItem>
        ))}
      </TransactionList>
    </TransactionContainer>
  );
}

export default Transaction;
