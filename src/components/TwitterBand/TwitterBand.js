import React, { Component } from 'react';
import { Container, Row, Col } from 'react-grid-system';

import '../../App.css';
import './TwitterBand.css';
import Bird from './images/twitter-bird-blue.svg';

class TwitterBand extends Component {

    constructor(props) {
        super(props);

        this.state = {
            tweets: [
                `<a>@PiscatelloPDC</a> latest exhibition, ‘Singularity: Poster Works for FIT’ will open at the University of New Haven on Friday, 09 November 2018.`,
                `<a>@RoccoPiscatello</a> will lecture on his 10 Qualities of Good Design at Seton Gallery at the University of New Haven on Thursday, 15 November 2018.`,
                `<a>@NeighborhoodTrust</a> teams up with <a>@SelfLender</a> <a>https://www.neighborhoodtrust.org/2018/10/02/neighborhood-trust-financial-partners-teams-up-with-self-lender-to-help-financially-struggling-americans-boost-their-credit/</a>`,
                `<a>@PiscatelloPDC</a> launches <a>@laguardalowarchitects</a> new website. Congratulations to the entire team.`
            ]
        }
    }

    componentDidMount = () => {
        this._queryTweets()
    }

    _queryTweets = async () => {
        var tweets = await fetch({
            url: "https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=piscatellopdc&count=4",
            method: "GET",
            cors: "no-cors"
        })
        .then(data => {
            return data
        });

        console.log(tweets)
    }

    printTweets = () => {
        return this.state.tweets.map((el, i) => {
            return (
                <Col sm={3} className="tweet-card" key={i}>
                    <span>
                        <div className="tweet-card--content" dangerouslySetInnerHTML={{__html: el}}>
                         
                        </div>
                    </span>
                    <div className="tweet-card--footer">
                        <a style={{display: "flex", alignItems: "center"}}>
                            <div className="bird">
                                <img src={Bird} alt="" />
                            </div> 
                            <span>@PiscatelloPDC</span>
                        </a>
                    </div>
                </Col>
            )
        })
    }


    render() {
        return (
            <div id="twitter-band">
                <Container className="container" fluid={true}>
                    <Row>
                       { this.printTweets() }
                    </Row>
                </Container>
            </div>
        )
    }
}

export default TwitterBand;