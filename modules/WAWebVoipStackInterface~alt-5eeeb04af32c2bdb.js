__d("WAWebVoipStackInterface", [
	"JSResourceForInteraction",
	"WALogger",
	"WAWebABProps",
	"WAWebABPropsCache",
	"WAWebEnvironment",
	"WAWebLazyLoadedRetriable",
	"WAWebVoipGatingUtils",
	"err",
	"getErrorSafe"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u, c = "WAWebVoipStackInterfaceImpl", d = 3e4, m = null, p, _ = null, f = "WAWebVoipStackInterfaceImpl", g = "wa_web_voip_stack_interface";
	function h() {
		return _ == null && (_ = (async function() {
			return !r("WAWebEnvironment").isWindows || (await o("WAWebABPropsCache").waitForABPropConfigsReady(), o("WAWebVoipGatingUtils").isWinHybridPlusEnabled()) ? !1 : o("WAWebABProps").getABPropConfigValue("web_voip_runtime_stack_selection_enabled") === !0;
		})()), _;
	}
	function y() {
		return f;
	}
	function C() {
		return g;
	}
	function b() {
		return p == null && (p = r("JSResourceForInteraction")("WAWebVoipStackInterfaceLoadTelemetry").__setRef("WAWebVoipStackInterface").load().catch(function(e) {
			throw p = null, e;
		})), p;
	}
	function v(t) {
		b().then(t).catch(function(t) {
			o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose(["voip: stack interface load telemetry failed"]))).catching(r("getErrorSafe")(t));
		});
	}
	async function S() {
		o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose(["voip: getVoipStackInterface awaiting lazy bundle"])));
		var e = await h();
		f = e ? "WAWebVoipStackInterfaceWindows" : "WAWebVoipStackInterfaceImpl", g = e ? "wa_web_voip_stack_interface_windows" : "wa_web_voip_stack_interface";
		var t = e ? r("JSResourceForInteraction")("WAWebVoipStackInterfaceWindows").__setRef("WAWebVoipStackInterface").load() : r("JSResourceForInteraction")("WAWebVoipStackInterfaceImpl").__setRef("WAWebVoipStackInterface").load(), n = null, a = new Promise(function(e, t) {
			n = self.setTimeout(function() {
				n = null, t(r("err")("voip stack interface load timed out"));
			}, d);
		});
		try {
			return await Promise.race([t, a]);
		} finally {
			n != null && self.clearTimeout(n);
		}
	}
	var R = r("WAWebLazyLoadedRetriable")(S, c, {
		onAttemptFailure: function() {
			v(function(e) {
				e.logVoipStackInterfaceLoadAttemptFailure();
			});
		},
		onFinalFailure: function(t, n) {
			v(function(e) {
				e.logVoipStackInterfaceLoadRetryExhausted();
			}), o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
				"voip: stack load failed comp=",
				" mod=",
				" res=",
				" attempts=",
				""
			])), c, y(), C(), n).catching(t).sendLogs("voip-stack-interface-lazy-load-failed");
		},
		onRetrySuccess: function() {
			v(function(e) {
				e.logVoipStackInterfaceLoadRetrySuccess();
			});
		}
	});
	async function L() {
		if (!o("WAWebVoipGatingUtils").isVoipDownloadEnabled()) return null;
		var e = await R(), t = e.createWAWebVoipStackInterface, n = e.getVoipStackInterfaceImpl;
		if (n != null) return n();
		if (t == null) throw r("err")("voip stack interface module has no factory");
		return m == null && (m = t()), m;
	}
	l.getVoipStackInterface = L;
}), 98);
