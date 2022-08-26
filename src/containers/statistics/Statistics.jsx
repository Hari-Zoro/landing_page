import React from 'react';
import './statistics.css';
import Section_heading from '../../components/section_heading/Section_heading';
import Statistics_card from '../../components/statistics_card/Statistics_card';

const Statistics = (props) => {

  return (
    <>
    <Section_heading heading="Statistics" />
    <div className="statistics_wrapper" >
      
        <Statistics_card ke="Total Auctions" value="50"/>
        <Statistics_card ke="Total Bidders" value="430"/>
        <Statistics_card ke="Trade Volume" value="4032 ETH+"/>
    </div>
    </>
  );
};

export default Statistics;