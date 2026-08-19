__d("WAWebVoipInit", [
	"WALogger",
	"WAResolvable",
	"WAWebCallWamEvent",
	"WAWebCoreActionsODS",
	"WAWebEnvironment",
	"WAWebJoinableCallWamEvent",
	"WAWebPonyfillsIdleCallback",
	"WAWebUserPrefsGeneral",
	"WAWebUserPrefsMeUser",
	"WAWebVoipBrowserAudioStatus",
	"WAWebVoipCrashRecovery",
	"WAWebVoipGatingUtils",
	"WAWebVoipInitEventEmitter",
	"WAWebVoipNetworkMedium",
	"WAWebVoipQplHelpers",
	"WAWebVoipStackInterface",
	"WAWebVoipWasmArtifactRegistry",
	"WAWebWidFactory",
	"WAWebWindowsHybridBridgeInitiator",
	"cr:17219",
	"getErrorSafe",
	"justknobx"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u, c, d, m, p, _, f, g, h, y, C, b, v = (e = n("cr:17219")) != null ? e : {}, S = v.getWindowsBridge, R = 1, L = 60 * 1e3, E, k = "prewarm", I = !1, T = 0, D = null, x = null, $ = !1, P = !1, N = 0, M = null;
	async function w(e) {
		e === void 0 && (e = "prewarm");
		var t = o("WAWebUserPrefsMeUser").getMaybeMeDeviceLid();
		if (t == null) {
			o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose(["voip: init skipped, selfLid not available yet"]))), I = !0, o("WAWebVoipInitEventEmitter").VoipInitEventEmitter.triggerVoipInitFailure();
			return;
		}
		t.equals(E) ? B && await B.promise : (E = t, k = e, j(), await W(t));
	}
	function A() {
		return o("WAWebVoipInitEventEmitter").VoipInitEventEmitter.getDidVoipInitError() && I && T < z();
	}
	async function F() {
		if (x != null) return await x;
		var e = O();
		x = e;
		try {
			return await e;
		} finally {
			x === e && (x = null);
		}
	}
	async function O() {
		if (B && (await B.promise, o("WAWebVoipInitEventEmitter").VoipInitEventEmitter.getIsVoipInited())) return !0;
		if (!A()) return o("WAWebVoipInitEventEmitter").VoipInitEventEmitter.getIsVoipInited();
		var e = o("WAWebUserPrefsMeUser").getMaybeMeDeviceLid();
		if (e == null) return !1;
		T++, o("WAWebCoreActionsODS").logCallVoipInitRetryAttempt(), E = e, o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
			"voip: retrying init after transient failure attempt=",
			" max=",
			""
		])), T, z()), await Z();
		var t = o("WAWebUserPrefsMeUser").getMaybeMeDeviceLid();
		if (t == null || !e.equals(t)) return o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose(["voip: skip retry, identity changed in idle wait"]))), o("WAWebVoipInitEventEmitter").VoipInitEventEmitter.getIsVoipInited();
		await W(e, !0);
		var n = o("WAWebVoipInitEventEmitter").VoipInitEventEmitter.getIsVoipInited();
		return n ? o("WAWebCoreActionsODS").logCallVoipInitRetrySuccess() : (o("WAWebCoreActionsODS").logCallVoipInitRetryFailure(), A() || o("WAWebCoreActionsODS").logCallVoipInitRetryExhausted()), n;
	}
	var B = null;
	async function W(e, t) {
		if (t === void 0 && (t = !1), o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose(["voip: init after me_ready"]))), !(o("WAWebVoipInitEventEmitter").VoipInitEventEmitter.getDidVoipInitError() && !t)) {
			if (B && (await B.promise, o("WAWebVoipInitEventEmitter").VoipInitEventEmitter.getIsVoipInited() || o("WAWebVoipInitEventEmitter").VoipInitEventEmitter.getDidVoipInitError())) {
				o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose(["voip: init already done, ignoring duplicate call"])));
				return;
			}
			B = new (o("WAResolvable")).Resolvable(), o("WAWebVoipQplHelpers").startVoipInitQpl({ string: { trigger_source: k } });
			try {
				var n, a, i;
				if (o("WAWebVoipGatingUtils").isUnsupportedBrowserForWebCalling()) {
					o("WALogger").LOG(p || (p = babelHelpers.taggedTemplateLiteralLoose(["voip: init skipped due to unsupported browser"]))), o("WAWebCoreActionsODS").logCallVoipInitSkipUnsupported(), I = !1, o("WAWebVoipInitEventEmitter").VoipInitEventEmitter.triggerVoipInitFailure();
					return;
				}
				K(), o("WAWebVoipBrowserAudioStatus").preDetectBrowserAudioCapabilities();
				var l = await o("WAWebVoipStackInterface").getVoipStackInterface(), s = o("WAWebUserPrefsMeUser").getMaybeMeDevicePn(), u = s != null && !s.isLid() ? s : null, c = u != null ? o("WAWebWidFactory").asUserWidOrThrow(u) : null, h = l == null ? void 0 : l.voipInit((n = u == null ? void 0 : u.toString({ legacy: !0 })) != null ? n : "", (a = c == null ? void 0 : c.toString({ legacy: !0 })) != null ? a : "", e.toString({ legacy: !0 }));
				if (await Promise.all([h, l == null ? void 0 : l.setHideMyIp((i = o("WAWebUserPrefsGeneral").getUserPrivacySettings().disallowAllP2p) != null ? i : !1)]), (l == null ? void 0 : l.type) === "web") var y = new (o("WAWebCallWamEvent")).CallWamEvent(), C = new (o("WAWebJoinableCallWamEvent")).JoinableCallWamEvent();
				try {
					o("WAWebVoipNetworkMedium").startNetworkMediumMonitoring();
				} catch (e) {
					o("WALogger").WARN(_ || (_ = babelHelpers.taggedTemplateLiteralLoose(["voip: network medium monitoring failed to start: ", ""])), e);
				}
				if ((l == null ? void 0 : l.type) === "web" && o("WAWebVoipCrashRecovery").initCrashRecovery(), (l == null ? void 0 : l.type) === "windows") {
					var b;
					S == null || (b = S(r("WAWebWindowsHybridBridgeInitiator").WAWebVoipInit)) == null || (b = b.voip) == null || b.setHandlers(l.callbacks);
				}
				o("WAWebVoipInitEventEmitter").VoipInitEventEmitter.triggerVoipInitSuccess(), j(), o("WAWebCoreActionsODS").logCallVoipInitSuccess(), o("WAWebVoipQplHelpers").endVoipInitQplSuccess({ bool: { download_only: !1 } });
			} catch (e) {
				o("WAWebVoipQplHelpers").endVoipInitQplFail("init_error");
				var v = e instanceof Error ? e.message : String(e), R = r("WAWebEnvironment").isWindows && v.includes("Attempted to create Web stack in Windows environment");
				if (R) {
					o("WALogger").LOG(f || (f = babelHelpers.taggedTemplateLiteralLoose(["voip: init skipped on Windows Hybrid due to mis-resolve"]))), I = !1, o("WAWebVoipInitEventEmitter").VoipInitEventEmitter.triggerVoipInitFailure();
					return;
				}
				t || o("WAWebCoreActionsODS").logCallVoipInitError();
				var L = q(e);
				G(e, L, t), o("WALogger").ERROR(g || (g = babelHelpers.taggedTemplateLiteralLoose(["voip: init failed: ", ""])), e).sendLogs("voip: init-failed"), I = !0, o("WAWebVoipInitEventEmitter").VoipInitEventEmitter.triggerVoipInitFailure(L ? "wasm_contract_mismatch" : null), K();
			} finally {
				var E;
				(E = B) == null || E.resolve(), B = null;
			}
		}
	}
	function q(e) {
		var t = e instanceof Error ? e.name + ": " + e.message : String(e), n = t.includes("LinkError") && t.includes("function import requires a callable");
		return n || t.includes("No EM_ASM constant found");
	}
	function U(e) {
		return e.includes("stack interface load timed out") ? "stack_interface_load" : e.includes("timeout waiting for RPC ready") ? "worker_rpc_ready" : e.includes("No EM_ASM constant found") ? "wasm_runtime" : e.includes("LinkError") || e.includes("WebAssembly") ? "wasm_instantiate" : "init";
	}
	function V(e) {
		return e.includes("__cxa_current_primary_exception") ? "missing_cxa_primary_exception" : e.includes("fd_sync") ? "missing_fd_sync" : e.includes("invoke_") ? "missing_invoke_trampoline" : e.includes("No EM_ASM constant found") ? "missing_em_asm" : e.includes("LinkError") ? "linkerror_other" : "other";
	}
	function H() {
		var e;
		return (e = o("WAWebVoipWasmArtifactRegistry").getSelectedVoipWasmUri()) != null ? e : "unknown";
	}
	function G(e, t, n) {
		t && !n && o("WAWebCoreActionsODS").logCallVoipInitWasmContractMismatch();
		var r = e instanceof Error ? e.name + ": " + e.message : String(e);
		o("WALogger").LOG(h || (h = babelHelpers.taggedTemplateLiteralLoose([
			"voip: init failure artifacts phase=",
			" fingerprint=",
			" expectedWasmUri=",
			""
		])), U(r), V(r), H());
	}
	function z() {
		if (D == null) try {
			D = Math.max(0, r("justknobx")._("4786"));
		} catch (e) {
			o("WALogger").WARN(y || (y = babelHelpers.taggedTemplateLiteralLoose([
				"voip: init retry count JK unavailable, using fallback=",
				": ",
				""
			])), R, String(e)), D = R;
		}
		return D;
	}
	function j() {
		I = !1, T = 0, D = null, x = null, N = 0;
	}
	function K() {
		$ || ($ = !0, P = document.hidden, document.addEventListener("visibilitychange", function() {
			var e = P && !document.hidden;
			P = document.hidden, e && Q().catch(function(e) {
				o("WALogger").ERROR(C || (C = babelHelpers.taggedTemplateLiteralLoose(["voip: visibility init check failed"]))).catching(r("getErrorSafe")(e)).sendLogs("voip-visibility-init-failed");
			});
		}));
	}
	async function Q() {
		if (M != null) return await M;
		var e = X();
		M = e;
		try {
			return await e;
		} finally {
			M === e && (M = null);
		}
	}
	async function X() {
		if (!document.hidden && (B && await B.promise, !(document.hidden || o("WAWebVoipInitEventEmitter").VoipInitEventEmitter.getIsVoipInited()) && o("WAWebVoipInitEventEmitter").VoipInitEventEmitter.getDidVoipInitError())) {
			if (!Y()) {
				o("WAWebCoreActionsODS").logCallVoipInitVisibilityRetrySuppressed();
				return;
			}
			if (!A()) {
				o("WAWebCoreActionsODS").logCallVoipInitVisibilityRetrySuppressed();
				return;
			}
			var e = x != null;
			if (e) {
				o("WAWebCoreActionsODS").logCallVoipInitVisibilityRetrySuppressed(), await F();
				return;
			}
			J(), o("WALogger").LOG(b || (b = babelHelpers.taggedTemplateLiteralLoose(["voip: retrying init after tab became visible"]))), o("WAWebCoreActionsODS").logCallVoipInitVisibilityRetryAttempt();
			var t = await F();
			t && o("WAWebCoreActionsODS").logCallVoipInitVisibilityRetrySuccess();
		}
	}
	function Y() {
		return N === 0 || Date.now() - N >= L;
	}
	function J() {
		N = Date.now();
	}
	async function Z() {
		await new Promise(function(e) {
			o("WAWebPonyfillsIdleCallback").requestIdleCallback(function() {
				return e();
			});
		});
	}
	l.VoipInitEventEmitter = o("WAWebVoipInitEventEmitter").VoipInitEventEmitter, l.initWAWebVoip = w, l.canRetryWAWebVoipInitAfterFailure = A, l.retryWAWebVoipInitAfterFailure = F;
}), 98);
