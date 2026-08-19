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
	"react",
	"useWAWebToggle"
], (function(t, n, r, o, a, i, l) {
	var e, s, u, c, d = c || (c = o("react")), m = c, p = m.useCallback, _ = m.useEffect, f = m.useRef, g = m.useState;
	function h() {
		var e, t = r("useWAWebToggle")(!!((e = document.body) != null && e.classList.contains("e2e")), r("WAWebDebug").toggleE2EDebugMode), n = t[0], a = t[1];
		return d.jsx(o("WAWebMenuItems.react").SwitchMenuItem, {
			optionId: "e2e-debug",
			primary: "E2E Debug Mode",
			detailLeft: d.jsx(o("WAWebDeveloperMenuDeveloperMenuIcons.react").E2EDebugModeIcon, {}),
			initialState: n,
			onSelect: a
		});
	}
	h.displayName = h.name + " [from " + i.id + "]";
	function y() {
		var e = r("useWAWebToggle")(o("WAWebClientFeatureFlags").isFeatureEnabled("debug_commands"), r("WAWebDebug").toggleDebugCommands), t = e[0], n = e[1];
		return d.jsx(o("WAWebMenuItems.react").SwitchMenuItem, {
			optionId: "debug-commands",
			primary: "Debug Commands",
			detailLeft: d.jsx(o("WAWebDeveloperMenuDeveloperMenuIcons.react").DebugCommandsIcon, {}),
			initialState: t,
			onSelect: n
		});
	}
	y.displayName = y.name + " [from " + i.id + "]";
	function C() {
		var e = p(function(e) {
			r("WAWebDebug").toggleRTL(e);
		}, []);
		return d.jsx(o("WAWebMenuItems.react").SwitchMenuItem, {
			optionId: "rtl",
			primary: "RTL",
			detailLeft: d.jsx(r("WDSIconIcPublic.react"), {}),
			initialState: r("WAWebL10N").isRTL(),
			onSelect: e
		});
	}
	C.displayName = C.name + " [from " + i.id + "]";
	function b() {
		var e = r("useWAWebToggle")(function() {
			return o("WAWebThemeContext").isDarkTheme();
		}, r("WAWebDebug").toggleDarkMode), t = e[0], n = e[1];
		return d.jsx(o("WAWebMenuItems.react").SwitchMenuItem, {
			optionId: "dark-mode",
			primary: "Dark Mode",
			detailLeft: d.jsx(o("WAWebSettingsThemeIcon.react").SettingsThemeIcon, {}),
			initialState: t,
			onSelect: n
		});
	}
	b.displayName = b.name + " [from " + i.id + "]";
	function v() {
		var t = p(function() {
			o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[voip:devMenu] Simulating web ANR (5s main thread block)"])));
			for (var t = Date.now(); Date.now() - t < 5e3;);
			o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose(["[voip:devMenu] Web ANR simulation complete"])));
		}, []);
		return d.jsx(o("WAWebMenuItems.react").ActionMenuItem, {
			optionId: "simulateWebAnr",
			testid: "li-simulateWebAnr",
			detailLeft: d.jsx(r("WDSIconIcAddCall.react"), {}),
			onSelect: t,
			primary: "Simulate Web ANR (5s)",
			searchCriteria: "Simulate Web ANR"
		});
	}
	v.displayName = v.name + " [from " + i.id + "]";
	function S() {
		var e = p(function(e) {
			o("WAWebDebugErrorToast").setErrorToast(e);
		}, []);
		return d.jsx(o("WAWebMenuItems.react").SwitchMenuItem, {
			optionId: "error-toast",
			primary: "Display Error Toast",
			detailLeft: d.jsx(r("WDSIconIcNotifications.react"), {}),
			initialState: o("WAWebDebugErrorToast").isErrorToastEnabled(),
			onSelect: e
		});
	}
	S.displayName = S.name + " [from " + i.id + "]";
	function R() {
		var e = p(function(e) {
			o("WAWebDebugHiddenBotChats").setShowHiddenBotChats(e);
		}, []);
		return d.jsx(o("WAWebMenuItems.react").SwitchMenuItem, {
			optionId: "show-hidden-bot-chats",
			primary: "Show Hidden Bot Chats",
			detailLeft: d.jsx(r("WDSIconIcNotifications.react"), {}),
			initialState: o("WAWebDebugHiddenBotChats").isShowHiddenBotChatsEnabled(),
			onSelect: e
		});
	}
	R.displayName = R.name + " [from " + i.id + "]";
	function L() {
		var e = p(function(e) {
			o("WAWebDebugBizVPVOverlay").enableVPVOverlay(e);
		}, []);
		return d.jsx(o("WAWebMenuItems.react").SwitchMenuItem, {
			optionId: "vpv-overlay",
			primary: "VPV Debug Overlay",
			detailLeft: d.jsx(r("WDSIconIcPublic.react"), {}),
			initialState: o("WAWebDebugBizVPVOverlay").isVPVOverlayEnabled(),
			onSelect: e
		});
	}
	L.displayName = L.name + " [from " + i.id + "]";
	function E() {
		var e = p(function(e) {
			o("WAWebDebugVoipInfo").setVoipDebugInfo(e);
		}, []);
		return d.jsx(o("WAWebMenuItems.react").SwitchMenuItem, {
			optionId: "voip-debug-info",
			primary: "VoIP Debug Info",
			detailLeft: d.jsx(r("WDSIconIcAddCall.react"), {}),
			initialState: o("WAWebDebugVoipInfo").isVoipDebugInfoEnabled(),
			onSelect: e
		});
	}
	E.displayName = E.name + " [from " + i.id + "]";
	function k() {
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
	k.displayName = k.name + " [from " + i.id + "]";
	var I = {
		0: "Off",
		1: "Light (1 worker)",
		2: "Moderate (2 workers)",
		3: "Heavy (4 workers)",
		4: "Extreme (8 workers)"
	}, T = {
		0: 0,
		1: 1,
		2: 2,
		3: 4,
		4: 8
	};
	function D() {
		var e = g(0), t = e[0], n = e[1], a = g("unknown"), i = a[0], l = a[1], s = g(0), u = s[0], c = s[1], m = f([]), h = f(null);
		_(function() {
			for (var e, n = (e = T[t]) != null ? e : 0; m.current.length > n;) {
				var a = m.current.pop();
				a != null && (a.postMessage({ type: "stop" }), a.terminate());
			}
			for (; m.current.length < n;) try {
				var i = o("WorkerBundleResource").createDedicatedWebWorker(r("WAWebCpuPressureStressWorkerResource"));
				i.onmessage = function(e) {
					var t = e.data;
					if ((t == null ? void 0 : t.type) === "started") {
						var n;
						"" + ((n = t.level) != null ? n : 0);
					} else if ((t == null ? void 0 : t.type) === "heartbeat") {
						var r;
						"" + ((r = t.iterations) != null ? r : 0);
					}
				}, i.onerror = function(e) {
					e.message;
				}, i.postMessage({
					type: "start",
					level: t
				}), m.current.push(i);
			} catch (e) {
				break;
			}
			return c(m.current.length), "" + t + m.current.length, function() {
				for (var e of m.current) e.postMessage({ type: "stop" }), e.terminate();
				m.current = [];
			};
		}, [t]), _(function() {
			var e = null, n = "nominal", r = async function() {
				if (!(self == null || !("PressureObserver" in self))) try {
					var r = new self.PressureObserver(function(e) {
						for (var t of e) n = t.state, l(t.state);
					});
					await r.observe("cpu", { sampleInterval: 1e3 }), h.current = r, e = window.setInterval(function() {
						"" + n + t + m.current.length;
					}, 3e3);
				} catch (e) {}
			};
			return r(), function() {
				e != null && window.clearInterval(e), h.current != null && (h.current.disconnect(), h.current = null);
			};
		}, [t]);
		var y = p(function(e) {
			var t = e[0];
			n(t);
		}, []), C = p(function(e) {
			var t;
			return (t = I[e]) != null ? t : "Unknown";
		}, []);
		return d.jsxs("div", {
			className: "xdx6fka xvtqlqk x16ovd2e x12xbjc7",
			children: [
				d.jsxs("div", {
					className: "x78zum5 x6s0dn4 x1qvou4u x1s70e7g xefnzgg",
					children: [d.jsx(r("WDSIconIcAddCall.react"), {}), d.jsx(r("WDSText.react"), {
						type: "Body1Emphasized",
						colorName: "contentDefault",
						children: "Change CPU pressure"
					})]
				}),
				d.jsx("div", {
					className: "xav9cv8",
					children: d.jsx(r("WDSSlider.react"), {
						"aria-label": "CPU pressure level",
						min: 0,
						max: 4,
						step: 1,
						values: [t],
						onChange: y,
						displayValueText: C,
						startEndLabels: "currentValues"
					})
				}),
				d.jsxs("div", {
					className: "x2b8uid xav9cv8",
					children: [d.jsx(r("WDSText.react"), {
						type: "Body2",
						colorName: "contentDefault",
						children: t === 0 ? "Stress test off" : "Level " + t + ": " + u + " parallel workers"
					}), d.jsxs(r("WDSText.react"), {
						type: "Body3",
						colorName: "contentDefault",
						children: ["Current pressure: ", i]
					})]
				})
			]
		});
	}
	D.displayName = D.name + " [from " + i.id + "]", l.E2EDebugMode = h, l.DebugCommands = y, l.RTL = C, l.DarkMode = b, l.SimulateWebAnr = v, l.ErrorToast = S, l.ShowHiddenBotChats = R, l.VPVOverlay = L, l.VoipDebugInfo = E, l.TriggerQpEmergencyForceFetch = k, l.CpuPressureSlider = D;
}), 98);
