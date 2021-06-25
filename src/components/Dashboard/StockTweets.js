import React, {useState} from 'react'
import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';

function StockTweets() {
var posSym  = (window.location.href).split("/stocks/").pop().replace('?', '');
console.log(posSym)
let sym = posSym

    const ceoList = [
        { symbol: "AAPL", screenName: "tim_cook"},
        { symbol: "AMZN", screenName: "ajassy"},
        { symbol: "BA", screenName: "boeing"},
        { symbol: "EBAY", screenName: "Ebay"},
        { symbol: "F", screenName: "jimfarley98"},
        { symbol: "MSFT", screenName: "satyanadella"},
        { symbol: "NFLX", screenName: "reedhastings"},
        { symbol: "QCOM", screenName: "stevemollenkop"},
        { symbol: "TSLA", screenName: "elonmusk"},
        { symbol: "TWTR", screenName: "jack"},
    ]
    const [tname, setTname] = useState(ceoList);

    const getTname = async() =>{
    }

    React.useEffect(()=>{
        getTname();
    },[])

    const loaded = () => {
        for (let i=0; i<ceoList.length; i++){
            if (sym == ceoList[i].symbol)
            return(
                <div className = "stocktweets">
                    <h1>Info here</h1>
                    {/* <h1>Name:{ceoList[i].screenName}</h1> */}
                <TwitterTimelineEmbed
                    sourceType="profile"
                    screenName={ceoList[i].screenName}
                    options={{ height: 300 }}
                />
                </div>
            )
        }
    }
    const loading =()=>{
        return <h1>Loading ...</h1>
    }
    return tname ? loaded(): loading();
}

export default StockTweets
