__d("WASmaxPreKeysRotateSignedRPC", [
	"WAComms",
	"WASmaxInPreKeysRotateSignedResponseRequestError",
	"WASmaxInPreKeysRotateSignedResponseServerError",
	"WASmaxInPreKeysRotateSignedResponseSuccess",
	"WASmaxInPreKeysRotateSignedResponseValidationError",
	"WASmaxOutPreKeysRotateSignedRequest",
	"WASmaxParsingFailure",
	"WASmaxRpcUtils",
	"asyncToGeneratorRuntime"
], (function(t, n, r, o, a, i, l) {
	function e(e, t) {
		return s.apply(this, arguments);
	}
	function s() {
		return s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
			var n = o("WASmaxOutPreKeysRotateSignedRequest").makeRotateSignedRequest(e), r = yield o("WAComms").sendSmaxStanza(n, t), a = o("WASmaxInPreKeysRotateSignedResponseSuccess").parseRotateSignedResponseSuccess(r, n);
			if (a.success) return {
				name: "RotateSignedResponseSuccess",
				value: a.value
			};
			var i = o("WASmaxInPreKeysRotateSignedResponseValidationError").parseRotateSignedResponseValidationError(r, n);
			if (i.success) return {
				name: "RotateSignedResponseValidationError",
				value: i.value
			};
			var l = o("WASmaxInPreKeysRotateSignedResponseRequestError").parseRotateSignedResponseRequestError(r, n);
			if (l.success) return {
				name: "RotateSignedResponseRequestError",
				value: l.value
			};
			var s = o("WASmaxInPreKeysRotateSignedResponseServerError").parseRotateSignedResponseServerError(r, n);
			if (s.success) return {
				name: "RotateSignedResponseServerError",
				value: s.value
			};
			throw new (o("WASmaxParsingFailure")).SmaxParsingFailure(o("WASmaxRpcUtils").errorMessageRpcParsing("RotateSigned", {
				Success: a,
				ValidationError: i,
				RequestError: l,
				ServerError: s
			}));
		}), s.apply(this, arguments);
	}
	l.sendRotateSignedRPC = e;
}), 98);
