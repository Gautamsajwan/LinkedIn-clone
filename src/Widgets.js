import React from 'react'
import './Widgets.css'
import InfoIcon from '@mui/icons-material/Info';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';

function Widgets() {
    const newsArticle = (heading, subtitle) => (
        <div className="widgets-article">
            <div className="widgets-articleLeft">
                <RadioButtonCheckedIcon className='indicator'/>
            </div>
            <div className="widgets-articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    );
  return (
    <div className='widgets'>
        <div className="widgets-header">
            <h2>LinkedIn News</h2>
            <InfoIcon />
        </div>

        {newsArticle("Future-proof your career in 2023", "top news")}
        {newsArticle("Job offering most remote work", "2d ago")}
        {newsArticle("The 25 fastest-growing jobs in India", "4d ago")}
        {newsArticle("Zomato to hire 800", "3d ago")}
        {newsArticle("New iphone to launch soon", "4d ago")}
    </div>
  )
}

export default Widgets