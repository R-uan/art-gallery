export default class UnauthorizedError extends Error {
	constructor(message: string, code: number) {
		super(message);
	}
}
