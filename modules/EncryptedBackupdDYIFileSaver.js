__d("EncryptedBackupdDYIFileSaver", ["requireDeferred"], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = r("requireDeferred")("file-saver").__setRef("EncryptedBackupdDYIFileSaver");
	function s(t, n) {
		e.onReadyImmediately(function(e) {
			var r = e.saveAs;
			r(n, t);
		});
	}
	l.saveFile = s;
}), 98);
