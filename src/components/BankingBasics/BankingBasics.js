import React from "react";
import "./BankingBasics.scss";
import woman from "../../assets/images/woman.png";

class BankingBasics extends React.Component {
  state = {
    disabled1: true,
    disabled2: true,
    route: "",
    feeling: "",
  };

  handleChange1 = (e) => {
    console.log("handle change 1", e.target.value);
    if (e.target.value === "") {
      this.setState({ disabled1: true, route: "", feeling: "" });
    } else {
      this.setState({ disabled1: false });
      console.log(e.target.value);
    }
    if (e.target.value === "creditHistory") {
      this.setState({
        route:
          "https://www.bmo.com/main/personal/ways-to-bank/how-to-check-your-credit-score-creditview/",
      });
    } else if (e.target.value === "tfsa") {
      this.setState({
        route: "https://www.bmo.com/main/personal/investments/tfsa/",
      });
    } else if (e.target.value === "rrsp") {
      this.setState({
        route: "https://www.bmo.com/main/personal/investments/rrsp/",
      });
    } else {
      this.setState({ route: "" });
    }
  };

  handleChange2 = (e) => {
    console.log("handle change 2", e.target.value);
    if (e.target.value === "") {
      this.setState({ disabled2: true, route: "", feeling: "" });
    } else {
      this.setState({ disabled2: false });
    }

    if (e.target.value === "anxious") {
      this.setState({ feeling: "Don't worry, we'll make it easy." });
    }

    if (e.target.value === "curious") {
      this.setState({ feeling: "Let's explore together." });
    }
    if (e.target.value === "unsure") {
      this.setState({ feeling: "We can clear things up for you." });
    }
    if (e.target.value === "confused") {
      this.setState({ feeling: "Let's take things step-by-step." });
    }
    if (e.target.value === "excited") {
      this.setState({ feeling: "Glad to hear! Let's learn!" });
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (
      !this.state.disabled1 &&
      !this.state.disabled2 &&
      this.state.route !== ""
    ) {
      window.location.href = this.state.route;
    }
    console.log(e.target.value);
  };

  render() {
    let paragraph;
    if (!this.state.disabled1 && !this.state.disabled2) {
      paragraph = <p className="basics__feeling">{this.state.feeling}</p>;
    } else {
      paragraph = <p className="basics__feeling"></p>;
    }
    return (
      <div>
        <form onSubmit={this.handleSubmit} className="basics__container">
          <h1 className="basics__title">Canadian Banking Basics</h1>
          <p className="basics__input-intro--mobile">
            Get informed about the Canadian Banking System
          </p>
          <div className="mobile__containers">
            <img src={woman} className="basics__input-image" />
            <div className="basics__input-primary">
              <p className="basics__input-intro--tablet">
                Get informed about the Canadian Banking System
              </p>
              <div className="basics__input-container">
                <label className="basics__input-label">I want to know</label>
                <select
                  required
                  onChange={this.handleChange1}
                  className="basics__input-select"
                >
                  <option className="basics__input-select--grey" value="">
                    Select a topic
                  </option>
                  <option value="bankAccounts">Types of Bank Accounts</option>
                  <option value="creditHistory">Credit History</option>
                  <option value="worldWide">WorldWide Money Transfers</option>
                  <option value="transfers">Interac e-Transfer</option>
                  <option value="fees">Fees</option>
                  <option value="general">General Transactions</option>
                  <option value="tfsa">TFSA</option>
                  <option value="rrsp">RRSP</option>
                </select>
              </div>

              <div className="basics__input-container">
                <label className="basics__input-label">because I feel</label>
                <select
                  required
                  onChange={this.handleChange2}
                  className="basics__input-select"
                >
                  <option className="basics__input-select--grey" value="">
                    What does it make you feel?
                  </option>
                  <option value="curious">Curious</option>
                  <option value="anxious">Anxious</option>
                  <option value="unsure">Unsure</option>
                  <option value="confused">Confused</option>
                  <option value="excited">Excited</option>
                </select>
              </div>

              <div className="basics__bottom-container">
                {paragraph}
                <button
                  className={
                    !this.state.disabled1 && !this.state.disabled2
                      ? "basics__button--active basic__bottom-link"
                      : "basics__button--disabled basic__bottom-link"
                  }
                >
                  Learn More
                </button>

                {/* <p className="basics__feeling--empty">
              {this.state.disabled1 && this.state.disabled2}
            </p>
            <p className="basics__feeling">
              {!this.state.disabled1 &&
                !this.state.disabled2 &&
                this.state.feeling}
            </p> */}
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default BankingBasics;
