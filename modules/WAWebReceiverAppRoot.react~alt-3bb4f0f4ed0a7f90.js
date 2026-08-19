__d("WAWebReceiverAppRoot.react", [
	"WAWebMainThreadLogger",
	"WAWebModelStorage",
	"WAWebPdfViewerAppConfig",
	"WAWebRobotoVariableFontLoadable",
	"WAWebWam",
	"WDSThemes",
	"initWAWebPlatformWebPage",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = s || (s = o("react")), c = s, d = c.useEffect, m = c.useMemo, p = c.useState, _ = { background: {
		backgroundColor: "x1280gxy",
		$$css: !0
	} };
	function f(t) {
		var n = t.children, a = m(function() {
			return o("WAWebPdfViewerAppConfig").getWebTPAppConfig();
		}, []);
		o("WAWebRobotoVariableFontLoadable").useApplyRobotoFont(), d(function() {
			o("WAWebMainThreadLogger").initializeWAWebMainThreadLogger(), r("initWAWebPlatformWebPage")(), o("WAWebWam").initWamRuntime(), o("WAWebWam").Wam.resumeJobs();
		}, []), d(function() {
			if (a.isSmb) {
				var e;
				(e = document.body) == null || e.classList.add("smb-colors");
			}
			if (a.theme === "dark" || a.theme === "smbDark") {
				var t;
				(t = document.body) == null || t.classList.add("dark");
			}
			if (a.theme === "system" || a.theme === "smbSystem") {
				var n = window.matchMedia("(prefers-color-scheme: dark)"), r = function() {
					var e;
					(e = document.body) == null || e.classList.toggle("dark", n.matches);
				};
				return r(), n.addEventListener("change", r), function() {
					n.removeEventListener("change", r);
				};
			}
		}, [a]);
		var i = p(!1), l = i[0], s = i[1];
		d(function() {
			var e = !0;
			return o("WAWebModelStorage").initialize().then(function() {
				e && s(!0);
			}).catch(function() {
				e && s(!0);
			}), function() {
				e = !1;
			};
		}, []);
		var c = {
			"safari-fix": a.hasSafariFix,
			"os-mac": a.isOSMac,
			"os-win": a.isOSWindows,
			"keyboard-user": a.isKeyboardUser
		}, f = Object.entries(c).filter(function(e) {
			var t = e[0], n = e[1];
			return n;
		}).map(function(e) {
			var t = e[0];
			return t;
		}).join(" "), g = a.theme === "system" ? o("WDSThemes").WDSSystemTheme : a.theme === "smbSystem" ? o("WDSThemes").WDSSMBSystemTheme : a.theme === "dark" ? o("WDSThemes").WDSDarkTheme : a.theme === "smbDark" ? o("WDSThemes").WDSSMBDarkTheme : a.theme === "smbLight" ? o("WDSThemes").WDSSMBLightTheme : o("WDSThemes").WDSLightTheme;
		return u.jsx("div", {
			id: "app",
			className: (e || (e = r("stylex")))(g, _.background) + " " + f,
			children: l ? n : null
		});
	}
	f.displayName = f.name + " [from " + i.id + "]", l.WAWebReceiverAppRoot = f;
}), 98);
