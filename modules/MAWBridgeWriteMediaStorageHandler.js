__d("MAWBridgeWriteMediaStorageHandler", [
	"BlobStorageWorkerClient",
	"Promise",
	"gkx"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e;
	function s(t) {
		var a = t.blob, i = t.fileName;
		return r("gkx")("6236") ? o("BlobStorageWorkerClient").writeBlobToStorage({
			blob: a,
			fileName: i
		}) : (e || (e = n("Promise"))).resolve();
	}
	l.writeToMediaStorage = s;
}), 98);
