__d("BlobStorageApi", ["OpfsSyncApi"], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = {
		writeIfNotExist: function(t) {
			var e = t.blob, n = t.fileName;
			return o("OpfsSyncApi").maybeWriteToOpfs({
				fileName: n,
				blob: e
			});
		},
		read: function(t) {
			var e = t.fileName;
			return o("OpfsSyncApi").readFromOpfs({ fileName: e });
		},
		clear: function() {
			return o("OpfsSyncApi").cleanupFolder();
		}
	};
	l.default = e;
}), 98);
