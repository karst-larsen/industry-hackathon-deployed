import { Component } from 'react';
import SnapSlider from '../SnapSlider/SnapSlider';
import './Journey.scss'
import tabletImage from '../../assets/images/performance-plan-968x792.jpeg'

class Journey extends Component {

    state = {
        mainComponent: true
    }

    toggleMain = () => {
        this.setState({
            mainComponent: !this.state.mainComponent
        })
    }

    render() {
        return (
            <div className="journey">
                    <h2 className="journey__prompt">Where are you in your journey?</h2>
                <div className="journey__nav">
                    <ul className="journey__list">
                        <li className={`journey__list-item ${this.state.mainComponent ? 'journey__list-item--selected' : 'journey__list-item--inactive'}`} onClick={this.toggleMain}>I'm moving to Canada</li>
                        <li className={`journey__list-item ${!this.state.mainComponent ? 'journey__list-item--selected' : 'journey__list-item--inactive'}`} onClick={this.toggleMain}>I'm already in Canada</li>
                    </ul>
                    {this.state.mainComponent ? 
                        <div className='journey__header'>
                            <h3 className="journey__location">I’m moving to Canada</h3>
                            <p className="journey__paragraph">There are a few things you can do to prepare for your move to Canada, so we’ve put together a checklist for you:</p>
                            <SnapSlider />
                        </div>
                    : 
                    <div className='journey__header'>
                        <h3 className="journey__location">Already in Canada</h3>
                        <p className="journey__paragraph">It’s not too early to start planning for your future. Explore our banking products and services that would help establish yourself in Canada. From bank accounts and credit cards to mortgages and everything in between.</p>
                        <h4 className="journey__incentive">Enjoy no monthly banking fee for one year</h4>
                        <p className="journey__paragraph">As you continue to build your new life, we're offering one year of no monthly fee banking which includes:</p>
                        <ul className="journey__benefits-box">
                            <li className="journey__benefits">Performance Plan chequing account</li>
                            <li className="journey__benefits">unlimited transactions</li>
                            <li className="journey__benefits">unlimited Interac e-Transfer transactions</li>
                            <li className="journey__benefits">free small safety deposit box</li>
                            <li className="journey__benefits">free savings account</li>
                            <li className="journey__benefits">family members in your hosuehold get no fee daily banking with BMO Family Bundle</li>
                        </ul>
                        <p className="journey__paragraph">You can save $260, plus you can earn a cash bonus up to $350. And after a year, if you keep a minimum balance of $4,000 in your chequing account, we'll waive the monthly fee ($16.95/month)</p>
                        <div className="journey__next-steps">
                            <button className="journey__button">Open Now</button>
                            <span className="journey__learn-more">Learn More</span>
                        </div>
                    </div>
                    }
                    {this.state.mainComponent ? 
                    <img src={tabletImage} alt="tablet banner" className="journey__banner" />    
                    :
                    <img src={tabletImage} alt="tablet banner" className="journey__banner--second" />
                    }
                    
                </div>
            </div>
        )
    }
}

export default Journey;