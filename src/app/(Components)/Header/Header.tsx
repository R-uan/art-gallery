"use client";
import { Suspense } from "react";
import { HeaderStyled } from "./HeaderStyled";
import Link from "next/link";
import { FaFacebook } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";
import { SiSaturn } from "react-icons/si";
export default function Header({ transparent, position }: { transparent: boolean; position?: string }) {
	return (
		<HeaderStyled $transparent={transparent} $position={position}>
			<div>
				<SiSaturn size={40} fill="white" />
			</div>
			<nav>
				<ul>
					<Link href="/">
						<li>Home</li>
					</Link>
					<Link href="">
						<li>Artists</li>
					</Link>
					<Link href="/gallery">
						<li>Gallery</li>
					</Link>
					<Link href="">
						<li>Museums</li>
					</Link>
					<Link href="">
						<li>About</li>
					</Link>
				</ul>
			</nav>
			<div>
				<div className="socials">
					<FaFacebook fill="white" size={30} />
					<BsInstagram fill="white" size={30} />
					<FaXTwitter fill="white" size={30} />
				</div>
			</div>
		</HeaderStyled>
	);
}
