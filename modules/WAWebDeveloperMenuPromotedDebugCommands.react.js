__d("WAWebDeveloperMenuPromotedDebugCommands.react", [
	"WALogger",
	"WAWebClientFeatureFlags",
	"WAWebCpuPressureStressWorkerResource",
	"WAWebDebug",
	"WAWebDebugABProps",
	"WAWebDebugBizVPVOverlay",
	"WAWebDebugErrorToast",
	"WAWebDebugHiddenBotChats",
	"WAWebDebugVoipInfo",
	"WAWebDeveloperMenuDeveloperMenuIcons.react",
	"WAWebL10N",
	"WAWebMenuItems.react",
	"WAWebSettingsThemeIcon.react",
	"WAWebThemeContext",
	"WDSIconIcAddCall.react",
	"WDSIconIcNotifications.react",
	"WDSIconIcPublic.react",
	"WDSSlider.react",
	"WDSText.react",
	"WorkerBundleResource",
	"asyncToGeneratorRuntime",
	"react",
	"react-compiler-runtime",
	"useWAWebToggle"
], (function(t, n, r, o, a, i, l) {
	var e, s, u, c, d = c || (c = o("react")), m = c, p = m.useCallback, _ = m.useEffect, f = m.useRef, g = m.useState;
	function h() {
		var e = o("react-compiler-runtime").c(5), t;
		if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
			var n;
			t = (n = document.body) == null ? void 0 : n.classList.contains("e2e"), e[0] = t;
		} else t = e[0];
		var a = r("useWAWebToggle")(!!t, r("WAWebDebug").toggleE2EDebugMode), i = a[0], l = a[1], s;
		e[1] === Symbol.for("react.memo_cache_sentinel") ? (s = d.jsx(o("WAWebDeveloperMenuDeveloperMenuIcons.react").E2EDebugModeIcon, {}), e[1] = s) : s = e[1];
		var u;
		return e[2] !== i || e[3] !== l ? (u = d.jsx(o("WAWebMenuItems.react").SwitchMenuItem, {
			optionId: "e2e-debug",
			primary: "E2E Debug Mode",
			detailLeft: s,
			initialState: i,
			onSelect: l
		}), e[2] = i, e[3] = l, e[4] = u) : u = e[4], u;
	}
	function y() {
		var e = o("react-compiler-runtime").c(5), t;
		e[0] === Symbol.for("react.memo_cache_sentinel") ? (t = o("WAWebClientFeatureFlags").isFeatureEnabled("debug_commands"), e[0] = t) : t = e[0];
		var n = r("useWAWebToggle")(t, r("WAWebDebug").toggleDebugCommands), a = n[0], i = n[1], l;
		e[1] === Symbol.for("react.memo_cache_sentinel") ? (l = d.jsx(o("WAWebDeveloperMenuDeveloperMenuIcons.react").DebugCommandsIcon, {}), e[1] = l) : l = e[1];
		var s;
		return e[2] !== a || e[3] !== i ? (s = d.jsx(o("WAWebMenuItems.react").SwitchMenuItem, {
			optionId: "debug-commands",
			primary: "Debug Commands",
			detailLeft: l,
			initialState: a,
			onSelect: i
		}), e[2] = a, e[3] = i, e[4] = s) : s = e[4], s;
	}
	function C() {
		var e = o("react-compiler-runtime").c(1), t = b, n;
		return e[0] === Symbol.for("react.memo_cache_sentinel") ? (n = d.jsx(o("WAWebMenuItems.react").SwitchMenuItem, {
			optionId: "rtl",
			primary: "RTL",
			detailLeft: d.jsx(r("WDSIconIcPublic.react"), {}),
			initialState: r("WAWebL10N").isRTL(),
			onSelect: t
		}), e[0] = n) : n = e[0], n;
	}
	function b(e) {
		r("WAWebDebug").toggleRTL(e);
	}
	function v() {
		var e = o("react-compiler-runtime").c(4), t = r("useWAWebToggle")(S, r("WAWebDebug").toggleDarkMode), n = t[0], a = t[1], i;
		e[0] === Symbol.for("react.memo_cache_sentinel") ? (i = d.jsx(o("WAWebSettingsThemeIcon.react").SettingsThemeIcon, {}), e[0] = i) : i = e[0];
		var l;
		return e[1] !== n || e[2] !== a ? (l = d.jsx(o("WAWebMenuItems.react").SwitchMenuItem, {
			optionId: "dark-mode",
			primary: "Dark Mode",
			detailLeft: i,
			initialState: n,
			onSelect: a
		}), e[1] = n, e[2] = a, e[3] = l) : l = e[3], l;
	}
	function S() {
		return o("WAWebThemeContext").isDarkTheme();
	}
	function R() {
		var e = o("react-compiler-runtime").c(1), t = L, n;
		return e[0] === Symbol.for("react.memo_cache_sentinel") ? (n = d.jsx(o("WAWebMenuItems.react").ActionMenuItem, {
			optionId: "simulateWebAnr",
			testid: "li-simulateWebAnr",
			detailLeft: d.jsx(r("WDSIconIcAddCall.react"), {}),
			onSelect: t,
			primary: "Simulate Web ANR (5s)",
			searchCriteria: "Simulate Web ANR"
		}), e[0] = n) : n = e[0], n;
	}
	function L() {
		o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[voip:devMenu] Simulating web ANR (5s main thread block)"])));
		for (var t = Date.now(); Date.now() - t < 5e3;);
		o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose(["[voip:devMenu] Web ANR simulation complete"])));
	}
	function E() {
		var e = o("react-compiler-runtime").c(1), t = k, n;
		return e[0] === Symbol.for("react.memo_cache_sentinel") ? (n = d.jsx(o("WAWebMenuItems.react").SwitchMenuItem, {
			optionId: "error-toast",
			primary: "Display Error Toast",
			detailLeft: d.jsx(r("WDSIconIcNotifications.react"), {}),
			initialState: o("WAWebDebugErrorToast").isErrorToastEnabled(),
			onSelect: t
		}), e[0] = n) : n = e[0], n;
	}
	function k(e) {
		o("WAWebDebugErrorToast").setErrorToast(e);
	}
	function I() {
		var e = o("react-compiler-runtime").c(1), t = T, n;
		return e[0] === Symbol.for("react.memo_cache_sentinel") ? (n = d.jsx(o("WAWebMenuItems.react").SwitchMenuItem, {
			optionId: "show-hidden-bot-chats",
			primary: "Show Hidden Bot Chats",
			detailLeft: d.jsx(r("WDSIconIcNotifications.react"), {}),
			initialState: o("WAWebDebugHiddenBotChats").isShowHiddenBotChatsEnabled(),
			onSelect: t
		}), e[0] = n) : n = e[0], n;
	}
	function T(e) {
		o("WAWebDebugHiddenBotChats").setShowHiddenBotChats(e);
	}
	function D() {
		var e = o("react-compiler-runtime").c(1), t = x, n;
		return e[0] === Symbol.for("react.memo_cache_sentinel") ? (n = d.jsx(o("WAWebMenuItems.react").SwitchMenuItem, {
			optionId: "vpv-overlay",
			primary: "VPV Debug Overlay",
			detailLeft: d.jsx(r("WDSIconIcPublic.react"), {}),
			initialState: o("WAWebDebugBizVPVOverlay").isVPVOverlayEnabled(),
			onSelect: t
		}), e[0] = n) : n = e[0], n;
	}
	function x(e) {
		o("WAWebDebugBizVPVOverlay").enableVPVOverlay(e);
	}
	function $() {
		var e = o("react-compiler-runtime").c(1), t = P, n;
		return e[0] === Symbol.for("react.memo_cache_sentinel") ? (n = d.jsx(o("WAWebMenuItems.react").SwitchMenuItem, {
			optionId: "voip-debug-info",
			primary: "VoIP Debug Info",
			detailLeft: d.jsx(r("WDSIconIcAddCall.react"), {}),
			initialState: o("WAWebDebugVoipInfo").isVoipDebugInfoEnabled(),
			onSelect: t
		}), e[0] = n) : n = e[0], n;
	}
	function P(e) {
		o("WAWebDebugVoipInfo").setVoipDebugInfo(e);
	}
	function N() {
		var e = p(function() {
			var e = "emergency-" + Date.now();
			o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose(["[devMenu] Triggering QP emergency force-fetch with nonce ", ""])), e), r("WAWebDebugABProps").overrideABProp("smb_qp_emergency_force_fetch_nonce", e);
		}, []);
		return d.jsx(o("WAWebMenuItems.react").ActionMenuItem, {
			optionId: "trigger-qp-emergency-force-fetch",
			testid: "li-trigger-qp-emergency-force-fetch",
			detailLeft: d.jsx(r("WDSIconIcNotifications.react"), {}),
			onSelect: e,
			primary: "Trigger QP Emergency Force-Fetch",
			searchCriteria: "QP Emergency Force-Fetch"
		});
	}
	N.displayName = N.name + " [from " + i.id + "]";
	var M = {
		0: "Off",
		1: "Light (1 worker)",
		2: "Moderate (2 workers)",
		3: "Heavy (4 workers)",
		4: "Extreme (8 workers)"
	}, w = {
		0: 0,
		1: 1,
		2: 2,
		3: 4,
		4: 8
	};
	function A() {
		var e = o("react-compiler-runtime").c(24), t = g(0), a = t[0], i = t[1], l = g("unknown"), s = l[0], u = l[1], c = g(0), m = c[0], p = c[1], h;
		e[0] === Symbol.for("react.memo_cache_sentinel") ? (h = [], e[0] = h) : h = e[0];
		var y = f(h), C = f(null), b, v;
		e[1] !== a ? (b = function() {
			for (var e, t = (e = w[a]) != null ? e : 0; y.current.length > t;) {
				var n = y.current.pop();
				n != null && (n.postMessage({ type: "stop" }), n.terminate());
			}
			for (; y.current.length < t;) try {
				var i = o("WorkerBundleResource").createDedicatedWebWorker(r("WAWebCpuPressureStressWorkerResource"));
				i.onmessage = B, i.onerror = O, i.postMessage({
					type: "start",
					level: a
				}), y.current.push(i);
			} catch (e) {
				var l = e;
				break;
			}
			return p(y.current.length), "" + a + y.current.length, (function() {
				for (var e of y.current) e.postMessage({ type: "stop" }), e.terminate();
				y.current = [];
			});
		}, v = [a], e[1] = a, e[2] = b, e[3] = v) : (b = e[2], v = e[3]), _(b, v);
		var S, R;
		e[4] !== a ? (S = function() {
			var e = null, t = "nominal", r = (function() {
				var r = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
					if (!(self == null || !("PressureObserver" in self))) try {
						var n = new self.PressureObserver(function(e) {
							for (var n of e) t = n.state, u(n.state);
						});
						yield n.observe("cpu", { sampleInterval: 1e3 }), C.current = n, e = window.setInterval(function() {
							"" + t + a + y.current.length;
						}, 3e3);
					} catch (e) {
						var r = e;
					}
				});
				return function() {
					return r.apply(this, arguments);
				};
			})();
			return r(), (function() {
				e != null && window.clearInterval(e), C.current != null && (C.current.disconnect(), C.current = null);
			});
		}, R = [a], e[4] = a, e[5] = S, e[6] = R) : (S = e[5], R = e[6]), _(S, R);
		var L;
		e[7] === Symbol.for("react.memo_cache_sentinel") ? (L = function(t) {
			var e = t[0];
			i(e);
		}, e[7] = L) : L = e[7];
		var E = L, k = F, I, T, D;
		e[8] === Symbol.for("react.memo_cache_sentinel") ? (I = { className: "xdx6fka xvtqlqk x16ovd2e x12xbjc7" }, T = d.jsxs("div", {
			className: "x78zum5 x6s0dn4 x1qvou4u x1s70e7g xefnzgg",
			children: [d.jsx(r("WDSIconIcAddCall.react"), {}), d.jsx(r("WDSText.react"), {
				type: "Body1Emphasized",
				colorName: "contentDefault",
				children: "Change CPU pressure"
			})]
		}), D = { className: "xav9cv8" }, e[8] = I, e[9] = T, e[10] = D) : (I = e[8], T = e[9], D = e[10]);
		var x;
		e[11] !== a ? (x = d.jsx("div", babelHelpers.extends({}, D, { children: d.jsx(r("WDSSlider.react"), {
			"aria-label": "CPU pressure level",
			min: 0,
			max: 4,
			step: 1,
			values: [a],
			onChange: E,
			displayValueText: k,
			startEndLabels: "currentValues"
		}) })), e[11] = a, e[12] = x) : x = e[12];
		var $;
		e[13] === Symbol.for("react.memo_cache_sentinel") ? ($ = { className: "x2b8uid xav9cv8" }, e[13] = $) : $ = e[13];
		var P = a === 0 ? "Stress test off" : "Level " + a + ": " + m + " parallel workers", N;
		e[14] !== P ? (N = d.jsx(r("WDSText.react"), {
			type: "Body2",
			colorName: "contentDefault",
			children: P
		}), e[14] = P, e[15] = N) : N = e[15];
		var M;
		e[16] !== s ? (M = d.jsxs(r("WDSText.react"), {
			type: "Body3",
			colorName: "contentDefault",
			children: ["Current pressure: ", s]
		}), e[16] = s, e[17] = M) : M = e[17];
		var A;
		e[18] !== N || e[19] !== M ? (A = d.jsxs("div", babelHelpers.extends({}, $, { children: [N, M] })), e[18] = N, e[19] = M, e[20] = A) : A = e[20];
		var W;
		return e[21] !== A || e[22] !== x ? (W = d.jsxs("div", babelHelpers.extends({}, I, { children: [
			T,
			x,
			A
		] })), e[21] = A, e[22] = x, e[23] = W) : W = e[23], W;
	}
	function F(e) {
		var t;
		return (t = M[e]) != null ? t : "Unknown";
	}
	function O(e) {
		e.message;
	}
	function B(e) {
		var t = e.data;
		if ((t == null ? void 0 : t.type) === "started") {
			var n;
			"" + ((n = t.level) != null ? n : 0);
		} else if ((t == null ? void 0 : t.type) === "heartbeat") {
			var r;
			"" + ((r = t.iterations) != null ? r : 0);
		}
	}
	l.E2EDebugMode = h, l.DebugCommands = y, l.RTL = C, l.DarkMode = v, l.SimulateWebAnr = R, l.ErrorToast = E, l.ShowHiddenBotChats = I, l.VPVOverlay = D, l.VoipDebugInfo = $, l.TriggerQpEmergencyForceFetch = N, l.CpuPressureSlider = A;
}), 98);
