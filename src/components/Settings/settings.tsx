import "./styles.scss";

export default function Settings() {
	return (
		<div className="settings">
			<h2>Settings</h2>
			<div className="settings-section">
				<h3>NodCoins Balance</h3>
				<p>{`30 Coins`}</p>
			</div>
			<div className="settings-section">
				<h3>Logo</h3>
				<button>Upload image...</button>
			</div>
			<div className="settings-section">
				<h3>Chrome Extension</h3>
				<p>Installed</p>
			</div>
			<div className="settings-section">
				<h3>Name</h3>
				<p>Carlos Miceli</p>
				<button>Change User's Name</button>
			</div>
			<div className="settings-section">
				<h3>Company</h3>
				<p>Los Angeles Lakers</p>
				<button>Change Company's name</button>
			</div>
			<div className="settings-section">
				<h3>Email</h3>
				<p>me@carlosmiceli.com</p>
			</div>
			<div className="settings-section">
				<h3>Phone</h3>
				<p>115544332266</p>
				<button>Change phone</button>
			</div>
			<div className="settings-section">
				<h3>Add Funds</h3>
				<p>LHV Connected</p>
				<button>Connect new account</button>
			</div>
			<div className="change-password">
				<h3>Change Password</h3>
				<input placeholder="Current Password" />
				<input placeholder="New Password" />
				<input placeholder="Repeat Password" />
				<input type="submit" />
			</div>
		</div>
	);
}
