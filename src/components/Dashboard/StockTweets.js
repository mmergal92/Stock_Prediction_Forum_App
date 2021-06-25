import React from 'react'
import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';


function StockTweets() {
    var posSym  = (window.location.href).split("/stocks/").pop().replace('?', '');
// console.log(posSym)
let sym = posSym



    return (
        <div className = "stocktweets">
            <TwitterTimelineEmbed
                sourceType="profile"
                screenName="MarketWatch"
                options={{ height: 300 }}
            />
        </div>
        
    )
}

export default StockTweets


