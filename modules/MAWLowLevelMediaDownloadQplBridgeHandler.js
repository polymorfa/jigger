__d("MAWLowLevelMediaDownloadQplBridgeHandler", [
	"QPLFlow",
	"WAStartMediaDownloadQplFlow",
	"qpl"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	function e(e, t) {
		var n = o("QPLFlow").continueQPLFlow(r("qpl")._(25312150, "83"), {
			annotations: t != null ? t : void 0,
			instanceKey: e,
			timeoutInMs: o("WAStartMediaDownloadQplFlow").QPL_MEDIA_DOWNLOAD_TIMEOUT_IN_MS
		});
		return babelHelpers.extends({}, n, {
			downloadEntry: "handleEchoMediaMsgsRestore",
			getQPLAttrs: function() {
				return { instanceKey: e };
			},
			triggerUIView: null
		});
	}
	function s(t, n, r, o) {
		var a = e(n, o);
		switch (t) {
			case "success":
				a.endSuccess();
				break;
			case "fail":
				a.endFail(r, o);
				break;
			case "point":
				a.addPoint(r, o);
				break;
		}
	}
	l.handleBridgeMediaDownloadQPL = s;
}), 98);
