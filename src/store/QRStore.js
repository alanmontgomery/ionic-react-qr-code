import { Store } from "pullstate";

const QRStore = new Store({
	
	codes: []
});

export default QRStore;

export const addQRCode = (data, scanned = false) => {

    QRStore.update(s => { s.codes = [ ...s.codes, { id: new Date(), data, scanned } ] });
}

export const removeQRCode = id => {

	QRStore.update(s => { s.codes = s.codes.filter(code => code.id !== id) });
}