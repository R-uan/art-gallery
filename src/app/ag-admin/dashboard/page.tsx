"use client";
import Link from "next/link";
import { useState } from "react";
import { Provider } from "react-redux";
import styled from "styled-components";
import ArtistPanel from "./_components/Artist/ArtistPanel";
import { GalleryStore } from "@/app/_contexts/GalleryStore";
import ArtworkPanel from "./_components/Artwork/ArtworkPanel";
import MuseumPanel from "./_components/Museum/MuseumPanel";

const MainStyled = styled.main`
	width: 100%;
	flex-grow: 1;
	display: flex;
	flex-direction: column;
	background-color: #050a0e;
`;

const HeaderStyled = styled.header`
	width: 100%;
	height: 70px;
	display: flex;
	padding: 5px 50px;
	align-items: center;
	background-color: #050a0e;
	justify-content: space-between;

	& > div:first-child {
		width: 100px;
		display: flex;
		span {
			color: white;
			line-height: 1;
			font-size: 2rem;
		}
	}

	& > nav {
		display: flex;
		width: fit-content;
		align-items: center;
		height: fit-content;

		& > ul {
			gap: 25px;
			width: 100%;
			display: flex;

			li {
				color: #decfd3;
				line-height: 1;
				font-size: 1.75rem;
				transition: transform ease-in-out 0.2s;
			}

			li:hover {
				transform: scale(1.2);
				transition: transform ease-in-out 0.2s;
			}
		}
	}
`;

export default function Dashboard() {
	const [choice, setChoice] = useState<{ name: string; component: React.ReactNode }>({ name: "Artwork", component: <ArtworkPanel /> });
	return (
		<Provider store={GalleryStore}>
			<HeaderStyled>
				<div>
					<span>{choice.name}</span>
				</div>
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
										name: "Artwork",
										component: <ArtworkPanel />,
									});
								}}>
								Artwork
							</button>
						</li>
						<li>
							<button
								onClick={() => {
									setChoice({
										name: "Museum",
										component: <MuseumPanel />,
									});
								}}>
								Museum
							</button>
						</li>
					</ul>
				</nav>
				<nav>
					<ul>
						<Link href="/">
							<li>Home</li>
						</Link>
						<Link href="">
							<li>About</li>
						</Link>
					</ul>
				</nav>
			</HeaderStyled>
			<MainStyled id="root">{choice.component}</MainStyled>
		</Provider>
	);
}
