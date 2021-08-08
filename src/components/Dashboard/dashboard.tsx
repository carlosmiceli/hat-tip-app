import { useState } from "react";
import "./styles.scss";
import Dialog from "@material-ui/core/Dialog";

export default function Dashboard() {
	const [metaHtmlDialog, setmetaHtmlDialog] = useState(true);

	let scriptText =
		"<script async>(function(s,u,m,o,j,v){j=u.createElement(m);v=u.getElementsByTagName(m)[0];j.async=1;j.src=o;j.dataset.sumoSiteId='591acdb498abde2967d953c5cbb92ea5967f1eb47e72f26670e6c2e7513def38';v.parentNode.insertBefore(j,v)})(window,document,'script','//load.sumo.com/');</script>";

	const handleClick = () => {
		setmetaHtmlDialog(!metaHtmlDialog);
	};

	let value = 30;

	return (
		<div>
			<div className="dashboard-url-balance">
				<div className="dashboard-url">
					<h4>Paste URL to add to your list:</h4>
					<p>
						<input type="text" />
					</p>
				</div>
				<div className="dashboard-balance">
					<h4>Balance: {value} tokens</h4>
				</div>
			</div>
			<h2>Dashboard</h2>
			<table>
				<tr>
					<th>Original Link</th>
					<th>Nod Link</th>
					<th>Reward</th>
					<th>Description</th>
					<th>Tipper</th>
					<th>Statistics</th>
				</tr>
			</table>
			<Dialog open={metaHtmlDialog} onClose={handleClick}>
				<div className="dashboard-metahtml-dialog">
					<h1>Install HTML to setup and track actions for your ambassadors:</h1>
					<p>${scriptText}</p>
				</div>
			</Dialog>
		</div>
	);
}
