__d("WAWebReceiverAppRoot.react", [
	"WAWebMainThreadLogger",
	"WAWebModelStorage",
	"WAWebPdfViewerAppConfig",
	"WAWebRobotoVariableFontLoadable",
	"WAWebWam",
	"WDSThemes",
	"initWAWebPlatformWebPage",
	"react",
	"react-compiler-runtime",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = s || (s = o("react")), c = s, d = c.useEffect, m = c.useMemo, p = c.useState, _ = { background: {
		backgroundColor: "x1280gxy",
		$$css: !0
	} };
	function f(t) {
		var n = o("react-compiler-runtime").c(10), a = t.children, i;
		n[0] === Symbol.for("react.memo_cache_sentinel") ? (i = o("WAWebPdfViewerAppConfig").getWebTPAppConfig(), n[0] = i) : i = n[0];
		var l = i;
		o("WAWebRobotoVariableFontLoadable").useApplyRobotoFont();
		var s;
		n[1] === Symbol.for("react.memo_cache_sentinel") ? (s = [], n[1] = s) : s = n[1], d(y, s);
		var c, m;
		n[2] === Symbol.for("react.memo_cache_sentinel") ? (c = function() {
			if (l.isSmb) {
				var e;
				(e = document.body) == null || e.classList.add("smb-colors");
			}
			if (l.theme === "dark" || l.theme === "smbDark") {
				var t;
				(t = document.body) == null || t.classList.add("dark");
			}
			if (l.theme === "system" || l.theme === "smbSystem") {
				var n = window.matchMedia("(prefers-color-scheme: dark)"), r = function() {
					var e;
					(e = document.body) == null || e.classList.toggle("dark", n.matches);
				};
				return r(), n.addEventListener("change", r), (function() {
					n.removeEventListener("change", r);
				});
			}
		}, m = [l], n[2] = c, n[3] = m) : (c = n[2], m = n[3]), d(c, m);
		var f = p(!1), C = f[0], b = f[1], v, S;
		n[4] === Symbol.for("react.memo_cache_sentinel") ? (v = function() {
			var e = !0;
			return o("WAWebModelStorage").initialize().then(function() {
				e && b(!0);
			}).catch(function() {
				e && b(!0);
			}), (function() {
				e = !1;
			});
		}, S = [], n[4] = v, n[5] = S) : (v = n[4], S = n[5]), d(v, S);
		var R;
		if (n[6] === Symbol.for("react.memo_cache_sentinel")) {
			var L = {
				"safari-fix": l.hasSafariFix,
				"os-mac": l.isOSMac,
				"os-win": l.isOSWindows,
				"keyboard-user": l.isKeyboardUser
			};
			R = Object.entries(L).filter(h).map(g), n[6] = R;
		} else R = n[6];
		var E = R.join(" "), k = l.theme === "system" ? o("WDSThemes").WDSSystemTheme : l.theme === "smbSystem" ? o("WDSThemes").WDSSMBSystemTheme : l.theme === "dark" ? o("WDSThemes").WDSDarkTheme : l.theme === "smbDark" ? o("WDSThemes").WDSSMBDarkTheme : l.theme === "smbLight" ? o("WDSThemes").WDSSMBLightTheme : o("WDSThemes").WDSLightTheme, I;
		n[7] === Symbol.for("react.memo_cache_sentinel") ? (I = (e || (e = r("stylex")))(k, _.background), n[7] = I) : I = n[7];
		var T = C ? a : null, D;
		return n[8] !== T ? (D = u.jsx("div", {
			id: "app",
			className: I + " " + E,
			children: T
		}), n[8] = T, n[9] = D) : D = n[9], D;
	}
	function g(e) {
		var t = e[0];
		return t;
	}
	function h(e) {
		var t = e[1];
		return t;
	}
	function y() {
		o("WAWebMainThreadLogger").initializeWAWebMainThreadLogger(), r("initWAWebPlatformWebPage")(), o("WAWebWam").initWamRuntime(), o("WAWebWam").Wam.resumeJobs();
	}
	l.WAWebReceiverAppRoot = f;
}), 98);
