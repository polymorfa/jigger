__d("MAWHandleEncryptedBackupsSecretsApi", [
	"MAWDbHistorySyncQRCodeData",
	"MAWIndexedDb",
	"MAWTransactionMode",
	"emptyFunction"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = o("MAWIndexedDb").makeMsgrTransactor({ historySyncQRCodeData: o("MAWTransactionMode").READWRITE }, "handleEncryptedBackupsSecret", function(e) {
		return (function(t) {
			var n = t.backupId, a = t.epoch, i = t.mailboxRootKey, l = t.obliviousValidationToken, u = t.serverDataId, c = t.tempOcmfClientState;
			return e.historySyncQRCodeData.get(o("MAWDbHistorySyncQRCodeData").qrCodeRowId).then(function(t) {
				if (!(t != null && t.isQRScanned)) return e.historySyncQRCodeData.put({
					isQRScanned: !0,
					rowId: o("MAWDbHistorySyncQRCodeData").qrCodeRowId
				}).then(function(e) {
					o("MAWIndexedDb").afterTransaction({
						tag: "CallFinishAddDevice",
						value: {
							backupId: n.toString(),
							epoch: s(a),
							mailboxRootKey: i,
							obliviousValidationToken: l,
							serverDataId: u.toString(),
							tempOcmfClientState: c
						}
					});
				}).catch(function(t) {
					return e.historySyncQRCodeData.put({
						isQRScanned: !1,
						rowId: o("MAWDbHistorySyncQRCodeData").qrCodeRowId
					}).then(r("emptyFunction"));
				});
			});
		});
	});
	function s(e) {
		return e.map(function(e) {
			var t = e.anonId, n = e.id, r = e.rootKey, o = e.status;
			return {
				epoch_anon_id: t,
				epoch_id: n.toString(),
				epoch_root_key: r,
				epoch_status: o.toString()
			};
		});
	}
	l.handleEncryptedBackupsSecret = e;
}), 98);
