__d("MIHttpResumeCheck", [
	"FBLogger",
	"MIHandleResumeCheckResponse",
	"MIMediaUploadAuth",
	"asyncToGeneratorRuntime",
	"fetch",
	"getErrorSafe"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	function e(e) {
		return s.apply(this, arguments);
	}
	function s() {
		return s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
			var t = e + "&" + o("MIMediaUploadAuth").buildMIAuthQueryString();
			try {
				var n = yield r("fetch")(t, {
					method: "GET",
					mode: "cors",
					cache: "no-cache",
					credentials: "include",
					headers: { resume: "1" }
				});
				return r("FBLogger")("mi_upload").info("MIHttpResumeCheck: response status %s", n.status), o("MIHandleResumeCheckResponse").handleMIResumeCheckResponse(n);
			} catch (e) {
				throw r("FBLogger")("mi_upload").catching(r("getErrorSafe")(e)).mustfix("MIHttpResumeCheck: fail to initiate fetch"), e;
			}
		}), s.apply(this, arguments);
	}
	l.miHttpResumeCheck = e;
}), 98);
