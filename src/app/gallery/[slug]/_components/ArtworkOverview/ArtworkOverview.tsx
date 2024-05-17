import { useEffect } from "react";
import { FaFacebook } from "react-icons/fa";
import s from "./ArtworkOverview.module.scss";
import ArtworkRequest from "@/scripts/ArtworkRequest";
import { BsInstagram, BsTwitter } from "react-icons/bs";
import { useArtworkContext } from "../../_context/ArtworkProvider";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import LoadingArtwork from "../LoadingArtwork";
import FailedToFetch from "../ErrorArtwork";
export default function ArtworkOverview({ slug }: { slug: string }) {
	const artwork_context = useArtworkContext();
	const query_client = useQueryClient();
	const { data, isFetching, isError, error } = useQuery({
		retry: false,
		refetchOnWindowFocus: false,
		retryDelay: 10000,
		queryKey: ["artwork"],
		queryFn: async () => await ArtworkRequest.GetArtworkBySlug(slug),
	});

	useEffect(() => {
		if (isFetching) artwork_context.setFetching(isFetching);
		if (isError) artwork_context.setError(isError);
		if (data) artwork_context.setArtwork(data);
	}, [isFetching, isError, data]);
	return (
		<div className={s.artwork}>
			<div className={s.image}>
				<img src={data?.imageURL} alt="" />
			</div>
			<div className={s.right_panel}>
				{isFetching ? (
					<LoadingArtwork />
				) : error ? (
					<FailedToFetch message={error.message || "Failed to fetch artwork."} />
				) : (
					<div className={s.overview}>
						<div>
							<span className={s.title}>{data?.title}</span>
							<span className={s.author}>{data?.artist.name}</span>
						</div>
						<hr />
						<div className={s.history}>
							<span className="font-bebas">History</span>
							<p>
								The Mona Lisa is one of the most iconic and enigmatic artworks in the world, painted by the
								Italian artist Leonardo da Vinci. Completed around the year 1506, during the Italian
								Renaissance, the painting is renowned for its captivating portrayal of a woman with an
								ambiguous expression, often described as both mysterious and captivating.
							</p>
							<p>
								The subject of the painting is believed to be Lisa Gherardini, the wife of Florentine
								merchant Francesco del Giocondo, hence its alternative title, "La Gioconda" in Italian.
								Leonardo da Vinci is thought to have worked on the portrait for several years, possibly until
								his death in 1519, constantly refining and revisiting the piece.
							</p>
							<p>
								The Mona Lisa's fame surged in the 20th century, fueled by various events including its theft
								from the Louvre Museum in 1911, which sparked international headlines, and its subsequent
								recovery two years later. Its prominence continued to grow, becoming a symbol of artistry,
								beauty, and intrigue, captivating millions of visitors who flock to see it at the Louvre in
								Paris, where it's housed since 1797. The Mona Lisa's allure persists today, captivating
								audiences with its enigmatic smile and timeless allure.
							</p>
						</div>
						<div>
							<span className={s.period}>{data?.period}</span>
							<span>-</span>
							<span className={s.year}>{data?.year}</span>
						</div>
					</div>
				)}
				<div className={s.share}>
					<ul className={s.icons}>
						<a href="">
							<li>
								<BsTwitter className={s.icon} />
							</li>
						</a>
						<a href="">
							<li>
								<FaFacebook className={s.icon} />
							</li>
						</a>
						<a href="">
							<li>
								<BsInstagram className={s.icon} />
							</li>
						</a>
					</ul>
				</div>
			</div>
		</div>
	);
}
