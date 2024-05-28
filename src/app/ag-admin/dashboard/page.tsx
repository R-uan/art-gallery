"use client";
import { ArtworkStore } from "@/app/_contexts/ArtworkStore";
import CreateArtworkProvider from "@/app/ag-admin/dashboard/_components/Artwork/ArtworkForm/_context/CreateArtworkContext";
import UpdateArtworkProvider from "@/app/ag-admin/dashboard/_components/Artwork/ArtworkForm/_context/UpdateArtworkContext";
import { useState } from "react";
import { Provider } from "react-redux";
import styled from "styled-components";
import ArtworkPanel from "./_components/Artwork/ArtworkPanel/ArtworkPanel";
import DashboardHeader from "./_components/DashboardHeader/DashboardHeader";
import Link from "next/link";
import ArtistPanel from "./_components/Artist/ArtistPanel";

const MainStyled = styled.main`
	width: 100%;
	flex-grow: 1;
	display: flex;
	flex-direction: column;
	background-color: #050a0e;
`;

const HeaderStyled = styled.header`
	width: 100%;
	height: 100px;
	display: flex;
	padding: 5px 50px;
	align-items: center;
	background-color: #050a0e;
	justify-content: space-between;

	& > div:first-child {
		width: 100px;
		height: 100%;
		outline: 2px solid red;
	}

	nav {
		padding: 10px;
		height: fit-content;
		width: fit-content;
		outline: 2px solid red;
		ul {
			gap: 30px;
			display: flex;
			color: white;
			li {
				font-size: 1.5rem;
			}
		}
	}
`;

export default function Dashboard() {
	const [choice, setChoice] = useState<{ name: string; component: React.ReactNode }>({ name: "Artwork", component: <ArtworkPanel /> });
	return (
		<Provider store={ArtworkStore}>
			<HeaderStyled>
				<div>
					<Link href={"/"}>
						<span>Home</span>
					</Link>
				</div>
				<div></div>
				<nav>
					<ul>
						<li>
							<button
								onClick={() => {
									setChoice({
										name: "Artist",
										component: <ArtistPanel />,
									});
								}}>
								Artist
							</button>
						</li>
						<li>
							<button
								onClick={() => {
									setChoice({
										name: "Artist",
										component: <ArtworkPanel />,
									});
								}}>
								Artwork
							</button>
						</li>
						<li>
							<button>Museum</button>
						</li>
					</ul>
				</nav>
			</HeaderStyled>
			<MainStyled>{choice.component}</MainStyled>
		</Provider>
	);
}
