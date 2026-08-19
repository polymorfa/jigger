__d("WAWebThemePopup.react", [
	"WALogger",
	"WAWebConfirmPopup.react",
	"WAWebModalManager",
	"WAWebRadio.react",
	"WAWebSettingsFBT",
	"WAWebSettingsSyncBridge",
	"WAWebSystemTheme",
	"WAWebThemeContext",
	"WAWebThemeType",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = s, d = c.useContext, m = c.useState, p = [
		{
			value: "light",
			label: o("WAWebSettingsFBT").themeLightLabel
		},
		{
			value: "dark",
			label: o("WAWebSettingsFBT").themeDarkLabel
		},
		{
			value: "system",
			label: o("WAWebSettingsFBT").themeSystemLabel
		}
	];
	function _() {
		var e = o("react-compiler-runtime").c(14), t = d(o("WAWebThemeContext").ThemeContext), n = m(t.systemThemeMode ? "system" : t.theme), a = n[0], i = n[1], l;
		e[0] === Symbol.for("react.memo_cache_sentinel") ? (l = function(t) {
			i(t);
		}, e[0] = l) : l = e[0];
		var s = l, c;
		e[1] !== t || e[2] !== a ? (c = function() {
			a === "system" ? (t.setSystemThemeMode(!0), t.setTheme(r("WAWebSystemTheme").getCurrentTheme())) : (t.setSystemThemeMode(!1), t.setTheme(a)), f(a), o("WAWebModalManager").ModalManager.close();
		}, e[1] = t, e[2] = a, e[3] = c) : c = e[3];
		var _ = c, g;
		e[4] === Symbol.for("react.memo_cache_sentinel") ? (g = p.map(function(e) {
			var t = e.label, n = e.value;
			return {
				value: n,
				label: t(),
				onChange: function() {
					return s(n);
				}
			};
		}), e[4] = g) : g = e[4];
		var h;
		e[5] !== a ? (h = u.jsx(o("WAWebRadio.react").RadioGroup, {
			name: "theme",
			theme: o("WAWebRadio.react").RadioWithLabelThemeEnum.NORMAL,
			checkedValue: a,
			options: g
		}), e[5] = a, e[6] = h) : h = e[6];
		var y = h, C, b;
		e[7] === Symbol.for("react.memo_cache_sentinel") ? (C = {
			surface: "unknown",
			viewName: "theme"
		}, b = o("WAWebSettingsFBT").themeTitle(), e[7] = C, e[8] = b) : (C = e[7], b = e[8]);
		var v;
		e[9] !== y ? (v = u.jsx("form", { children: u.jsx("ol", { children: y }) }), e[9] = y, e[10] = v) : v = e[10];
		var S;
		return e[11] !== _ || e[12] !== v ? (S = u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			tsNavigationData: C,
			title: b,
			onOK: _,
			onCancel: o("WAWebModalManager").closeModalManager,
			children: v
		}), e[11] = _, e[12] = v, e[13] = S) : S = e[13], S;
	}
	function f(t) {
		var n = t === "light" ? o("WAWebThemeType").ThemesSettingValue.Light : t === "dark" ? o("WAWebThemeType").ThemesSettingValue.Dark : t === "system" ? o("WAWebThemeType").ThemesSettingValue.SystemDefault : (function() {
			throw Error("Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " + t);
		})();
		o("WAWebSettingsSyncBridge").sendSettingChange("appTheme", n, "app").catch(function(t) {
			o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[settings-sync] Error sending mutation for appTheme: ", ""])), t).tags("settings-sync");
		});
	}
	l.default = _;
}), 98);
