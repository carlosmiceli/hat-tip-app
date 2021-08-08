import { useState } from "react";
import "./styles.scss";
import Dialog from "@material-ui/core/Dialog";

export default function Landing() {
	const [triggerDialog, setTriggerDialog] = useState(false);

	const handleClick = () => {
		setTriggerDialog(!triggerDialog);
	};

	return (
		<div className="landing">
			<div className="landing-paste-url">
				<h1>Paste any URL and get your referral link!</h1>
				<input type="text" style={{ width: "70%" }} />
				<p className="landing-paste-description">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua.
				</p>
			</div>
			<div className="landing-divisor"></div>
			<div className="landing-become-referral">
				<h1>Share and get rewards from your favorite companies!</h1>
				<p className="landing-paste-description">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua.
				</p>
				<div className="landing-box-container">
					<div className="landing-referral-button">
						<h3>See Rewards</h3>
					</div>
					<div className="landing-referral-button" onClick={handleClick}>
						<h3>Get Chrome Extension</h3>
					</div>
				</div>
			</div>
			<Dialog open={triggerDialog} onClose={handleClick}>
				<div className="landing-link-dialog">
					<h1>You are ready to receive referrals!</h1>
					<div className="landing-box-container">
						<div className="landing-referral-button">
							<h3>Login</h3>
						</div>
						<div className="landing-referral-button">
							<h3>Sign up</h3>
						</div>
					</div>
					<p>Log in to start assigning ambassadors!</p>
				</div>
			</Dialog>
		</div>
	);
}
