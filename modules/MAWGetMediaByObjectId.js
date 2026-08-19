__d("MAWGetMediaByObjectId", [
	"MAWDbMediaTxns",
	"MAWIndexedDb",
	"MAWTransactionMode",
	"WAMediaUtils",
	"WAResultOrError"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = o("MAWIndexedDb").makeMsgrTransactor({
		media: o("MAWTransactionMode").READONLY,
		mediaBackup: o("MAWTransactionMode").READONLY
	}, "getMediaByObjectId", function(e) {
		return function(t) {
			return o("MAWDbMediaTxns").maybeGetMediaFromObjectId(e, o("WAMediaUtils").stringToDeliveryObjectId(t)).then(function(e) {
				return e ? o("WAResultOrError").makeResult(e) : o("WAResultOrError").makeError("media-not-found");
			});
		};
	});
	l.getMediaByObjectId = e;
}), 98);
