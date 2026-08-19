__d("useWAWebVoipIsCallingEnabledAndInited", [
	"WALogger",
	"WAWebCmd",
	"WAWebVoipBackendLoadable",
	"WAWebVoipGatingUtils",
	"WAWebVoipInitEventEmitter",
	"asyncToGeneratorRuntime",
	"getErrorSafe",
	"react",
	"react-compiler-runtime",
	"useWAWebEventTargetValue",
	"useWAWebListener",
	"useWAWebStableCallback"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = (s || (s = o("react"))).useEffect;
	function c() {
		var e = o("react-compiler-runtime").c(8), t = r("useWAWebStableCallback")(g), n = r("useWAWebStableCallback")(_);
		o("useWAWebListener").useListener(o("WAWebCmd").Cmd, "on_ab_props_update_from_bridge", t);
		var a = r("useWAWebEventTargetValue")(o("WAWebVoipInitEventEmitter").VoipInitEventEmitter, "voipInitSuccess", p), i = r("useWAWebEventTargetValue")(o("WAWebVoipInitEventEmitter").VoipInitEventEmitter, "voipInitFailure", m), l, s;
		e[0] !== i || e[1] !== n ? (l = function() {
			i && n().catch(d);
		}, s = [i, n], e[0] = i, e[1] = n, e[2] = l, e[3] = s) : (l = e[2], s = e[3]), u(l, s);
		var c;
		e[4] === Symbol.for("react.memo_cache_sentinel") ? (c = o("WAWebVoipGatingUtils").isCallingEnabled(), e[4] = c) : c = e[4];
		var f;
		return e[5] !== i || e[6] !== a ? (f = {
			enabled: c,
			inited: a,
			initErrored: i
		}, e[5] = i, e[6] = a, e[7] = f) : f = e[7], f;
	}
	function d(t) {
		o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["voip: failed to retry init from call entry state"]))).catching(r("getErrorSafe")(t)).sendLogs("voip: retry-init-from-call-entry-state-failed");
	}
	function m() {
		return o("WAWebVoipInitEventEmitter").VoipInitEventEmitter.getDidVoipInitError();
	}
	function p() {
		return o("WAWebVoipInitEventEmitter").VoipInitEventEmitter.getIsVoipInited();
	}
	function _() {
		return f.apply(this, arguments);
	}
	function f() {
		return f = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
			if (o("WAWebVoipGatingUtils").isVoipDownloadEnabled() && !document.hidden && !o("WAWebVoipInitEventEmitter").VoipInitEventEmitter.getIsVoipInited() && o("WAWebVoipInitEventEmitter").VoipInitEventEmitter.getDidVoipInitError()) {
				var e = yield o("WAWebVoipBackendLoadable").requireVoipJsBackend(), t = e.WAWebVoipInit;
				yield t.retryWAWebVoipInitAfterFailure();
			}
		}), f.apply(this, arguments);
	}
	function g() {
		return h.apply(this, arguments);
	}
	function h() {
		return h = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
			if (o("WAWebVoipGatingUtils").isVoipDownloadEnabled() && !o("WAWebVoipInitEventEmitter").VoipInitEventEmitter.getIsVoipInited()) {
				var e = yield o("WAWebVoipBackendLoadable").requireVoipJsBackend(), t = e.WAWebVoipInit;
				yield t.initWAWebVoip();
			}
		}), h.apply(this, arguments);
	}
	l.useWAWebVoipIsCallingEnabledAndInited = c;
}), 98);
