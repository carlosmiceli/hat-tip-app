import { useState } from "react";
import { useSelector } from "react-redux";
import "./styles.scss";
import Dialog from "@material-ui/core/Dialog";
import { RootState } from "../../redux/store";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { NodLink } from "../../interfaces/nodlink-types";

export default function Dashboard() {
	const nodlinksList = useSelector(
		(state: RootState) => state.nodlinks.dashboard
	);
	const [metaHtmlDialog, setmetaHtmlDialog] = useState(true);

	let scriptText =
		"<script async>(function(s,u,m,o,j,v){j=u.createElement(m);v=u.getElementsByTagName(m)[0];j.async=1;j.src=o;j.dataset.sumoSiteId='591acdb498abde2967d953c5cbb92ea5967f1eb47e72f26670e6c2e7513def38';v.parentNode.insertBefore(j,v)})(window,document,'script','//load.sumo.com/');</script>";

	const handleClick = () => {
		setmetaHtmlDialog(!metaHtmlDialog);
	};

	const useStyles = makeStyles({
		table: {
			minWidth: 650,
		},
	});

	const classes = useStyles();

	const nodLinkExample = [
		{
			id: 123123123,
			original: "https://www.youtube.com/watch?v=TkHr9sd41q8",
			nod: "https://www.youtube.com/watch?v=TkHr9sd41q8".concat(
				"/" + 123123123
			),
			reward: 25,
			description: "Link de prueba harcodeado",
			tipper: {
				id: 999,
				name: "John",
				lastName: "Doe",
				profile: "/111",
			},
		},
	];

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
					<h4>Balance: 30 tokens</h4>
				</div>
			</div>
			<h2>Dashboard</h2>

			<TableContainer>
				<Table className={classes.table} aria-label="simple table">
					<TableHead>
						<TableRow>
							<TableCell>Original</TableCell>
							<TableCell>Nod Link</TableCell>
							<TableCell>Reward</TableCell>
							<TableCell>Description</TableCell>
							<TableCell>Tipper</TableCell>
							<TableCell>Metrics</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{nodLinkExample &&
							nodLinkExample.map((l: NodLink) => (
								<TableRow key={l.id}>
									<TableCell>{l.original}</TableCell>
									<TableCell>{l.nod}</TableCell>
									<TableCell>{l.reward}</TableCell>
									<TableCell>{l.description}</TableCell>
									<TableCell>
										<a href={`/${l.tipper.profile}`}>{l.tipper.name}</a>
									</TableCell>
									<TableCell>
										<a href={`/${l.id}`}>See more...</a>
									</TableCell>
								</TableRow>
							))}
					</TableBody>
				</Table>
			</TableContainer>
			<Dialog open={metaHtmlDialog} onClose={handleClick}>
				<div className="dashboard-metahtml-dialog">
					<h1>Install HTML to setup and track actions for your ambassadors:</h1>
					<p>${scriptText}</p>
				</div>
			</Dialog>
		</div>
	);
}
