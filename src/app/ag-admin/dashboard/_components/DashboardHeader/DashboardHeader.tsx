import s from "./DashboardHeader.module.scss";
export default function DashboardHeader() {
	return (
		<header className={s.header}>
			<div>
				<span>Artwork</span>
			</div>
			<div>
				<ul>
					<button>
						<li>Artist</li>
					</button>
					<button>
						<li>Artwork</li>
					</button>
					<button>
						<li>Museum</li>
					</button>
				</ul>
			</div>
			<div>
				<button>
					<span>Add new Artwork</span>
				</button>
			</div>
		</header>
	);
}
