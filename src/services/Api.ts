export default class Api {
	public static get<T>(baseUrl: string, amount: string, difficulty: string): Promise<T> {
		return fetch( `${baseUrl}/api.php?amount=${amount}&difficulty=${difficulty}&type=boolean`, {
			mode: 'cors',
			method: 'GET',
		}).then((response) => response.json());
	}
}
