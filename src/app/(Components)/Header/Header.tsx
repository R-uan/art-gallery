"use client";
import { Suspense } from "react";
import { HeaderStyled } from "./HeaderStyled";

export default function Header({ transparent }: { transparent: boolean }) {
	return (
		<Suspense fallback={<div className="w-full absolute"></div>}>
			<HeaderStyled $transparent={transparent}>
				<div></div>
				<nav>
					<ul>
						<a href="">
							<li>Home</li>
						</a>
						<a href="">
							<li>Artists</li>
						</a>
						<a href="">
							<li>Gallery</li>
						</a>
						<a href="">
							<li>Museums</li>
						</a>
						<a href="">
							<li>About</li>
						</a>
					</ul>
				</nav>
			</HeaderStyled>
		</Suspense>
	);
}
