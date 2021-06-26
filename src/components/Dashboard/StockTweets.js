import React, {useState} from 'react'
import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';

function StockTweets() {
var posSym  = (window.location.href).split("/stocks/").pop().replace('?', '');
console.log(posSym)
let sym = posSym

    const ceoList = [
        { symbol: "AAPL", screenName: "tim_cook", text: "The Tweets displayed are from Tim Cook, the CEO of Apple."},
        { symbol: "AMZN", screenName: "ajassy", text: "The Tweets displayed are from Andy Jassy, the CEO of Amazon."},
        { symbol: "BA", screenName: "boeing", text: "The Tweets displayed are from the company Boeing."},
        { symbol: "EBAY", screenName: "Ebay", text: "The Tweets displayed are from the company Ebay."},
        { symbol: "F", screenName: "jimfarley98", text: "The Tweets displayed are from Jim Farley, the CEO of Ford."},
        { symbol: "MSFT", screenName: "satyanadella", text: "The Tweets displayed are from Satya Nadella, the CEO of Microsoft."},
        { symbol: "NFLX", screenName: "reedhastings", text: "The Tweets displayed are from Reed Hastings, the CEO of Netflix."},
        { symbol: "QCOM", screenName: "stevemollenkopf", text: "The Tweets displayed are from Steve Mollenkopf, the CEO of Qualcomm."},
        { symbol: "TSLA", screenName: "elonmusk", text: "The Tweets displayed are from Elon Musk, the CEO of Tesla."},
        { symbol: "TWTR", screenName: "jack", text: "The Tweets displayed are from Jack Dorsey, the CEO of Twitter."},
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
                    <h3>{ceoList[i].text}</h3>
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
