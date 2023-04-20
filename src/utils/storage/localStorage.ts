

function setDataLocalStorage<T>(key: string, data: T) {
	localStorage[key] = JSON.stringify(data);
	return;
}
  
const getDataLocalStorage = (key: string) => {
	if (typeof window !== 'undefined' && localStorage[key] !== undefined) return JSON.parse(localStorage[key]);
};


const localStorageClear = ()=> localStorage.clear();
  
export { setDataLocalStorage, getDataLocalStorage, localStorageClear };