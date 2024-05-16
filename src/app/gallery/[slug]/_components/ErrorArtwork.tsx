export default function FailedToFetch({ message }: { message: string }) {
	return (
		<div className="flex justify-center items-center flex-1">
			<span className="text-[1.75rem]">{message}</span>
		</div>
	);
}
