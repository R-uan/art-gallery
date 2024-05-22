import { useRouter } from "next/navigation";
import s from "./Pagination.module.scss";
import { useSelector } from "react-redux";
import { RootState } from "@/app/_contexts/ArtworkStore";
export default function Pagination() {
	const { data } = useSelector((s: RootState) => s.artworkListing);
	const router = useRouter();
	if (data) {
		const pages: number[] = Array.from({ length: data.totalPages }, (_, i) => i + 1);
		return (
			<div className={s.pagination}>
				<div className={s.back}>
					<div onClick={() => router.push(`/gallery?page=${data.pageIndex - 1}`)}>
						<span>{"<"}</span>
					</div>
					<div onClick={() => router.push(`/gallery?page=${1}`)}>
						<span>{"<<"}</span>
					</div>
				</div>
				<div className={s.pages}>
					{pages.map((page) => {
						if (page == data.pageIndex) {
							return (
								<div key={page} className={s.current}>
									<span>{page}</span>
								</div>
							);
						} else {
							return (
								<div key={page}>
									<span>{page}</span>
								</div>
							);
						}
					})}
				</div>
				<div className={s.forward}>
					<div onClick={() => router.push(`/gallery?page=${data.pageIndex + 1}`)}>
						<span>{">"}</span>
					</div>
					<div onClick={() => router.push(`/gallery?page=${data.totalPages}`)}>
						<span>{">>"}</span>
					</div>
				</div>
			</div>
		);
	}
	return (
		<div className={s.pagination}>
			<div className={s.back}>
				<div onClick={() => router.push("/gallery?page=5")}>
					<span>{"<"}</span>
				</div>
				<div>
					<span>{"<<"}</span>
				</div>
			</div>
			<div className={s.pages}></div>
			<div className={s.forward}>
				<div>
					<span>{">"}</span>
				</div>
				<div>
					<span>{">>"}</span>
				</div>
			</div>
		</div>
	);
}
