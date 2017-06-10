export const SHOW_TOAST = 'SHOW_TOAST';

export function showToast(text){
	return {
		type: SHOW_TOAST,
		text: text
	}
}