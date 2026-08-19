__d("MawMpsUploadMessagesToEBPostprocessor", [
	"EBEnqueueMessagesForUpload",
	"EBMessageProbe",
	"FBLogger",
	"MAWEBLSInWorkerSwitch",
	"asyncToGeneratorRuntime",
	"err",
	"getErrorSafe"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	function e(e) {
		return s.apply(this, arguments);
	}
	function s() {
		return s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
			var t = new Map();
			try {
				yield r("EBEnqueueMessagesForUpload")(e), e.forEach(function(e) {
					var t = e.message, n = o("EBMessageProbe").getEBMessageProbeInstance();
					n.addMarkerToItem(t.messageId, "mps_upload_enqueue_success");
				});
			} catch (a) {
				var n = r("getErrorSafe")(a);
				r("FBLogger")("mps").catching(n).mustfix("Failed to enqueue messages to upload queue"), e.forEach(function(e) {
					var n = e.message;
					t.set(n.messageId, r("err")("runtime-error", a));
					var i = o("EBMessageProbe").getEBMessageProbeInstance();
					i.addMarkerToItem(n.messageId, "mps_upload_enqueue_failed");
				});
			}
			return t;
		}), s.apply(this, arguments);
	}
	var u = {
		name: "eb-schedule-upload",
		process: function(n) {
			return r("MAWEBLSInWorkerSwitch").isEnabled() ? (e(n.filter(function(e) {
				return !e.directive.isLocalOnly;
			})), new Map()) : new Map();
		}
	};
	l.MawMpsUploadMessagesToEBPostprocessor = u;
}), 98);
