__d("WAWebEnsureVoipInited", [
	"WAWebVoipBackendLoadable",
	"WAWebVoipInitEventEmitter",
	"WAWebVoipInitReloadRecovery",
	"err"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = (function(e) {
		function t() {
			var t;
			return t = e.call(this, "VoIP initialization requires a page reload") || this, t.name = "VoipInitUnavailableError", t;
		}
		return babelHelpers.inheritsLoose(t, e), t;
	})(babelHelpers.wrapNativeSuper(Error));
	async function s(e) {
		var t = await o("WAWebVoipBackendLoadable").requireVoipJsBackend(), n = t.WAWebVoipInit;
		if (await n.initWAWebVoip(e), !o("WAWebVoipInitEventEmitter").VoipInitEventEmitter.getIsVoipInited() && (o("WAWebVoipInitEventEmitter").VoipInitEventEmitter.getDidVoipInitError() && await n.retryWAWebVoipInitAfterFailure(), !o("WAWebVoipInitEventEmitter").VoipInitEventEmitter.getIsVoipInited())) throw r("err")("VoIP initialization did not complete");
	}
	async function u(t, n) {
		if (await t === "unavailable") throw new e();
		await n;
	}
	async function c(e, t) {
		if (e === void 0 && (e = "call"), !o("WAWebVoipInitEventEmitter").VoipInitEventEmitter.getIsVoipInited()) {
			var n = e === "call" ? o("WAWebVoipInitReloadRecovery").beginOutgoingVoipInitReloadRecovery(t) : null;
			try {
				var r = s(e);
				if (n == null) {
					await r;
					return;
				}
				await Promise.race([r, u(n.result, r)]);
			} finally {
				n == null || n.finish();
			}
		}
	}
	l.VoipInitUnavailableError = e, l.ensureVoipInitialized = c;
}), 98);
