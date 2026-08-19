__d("WAWebCommunitySuspendedMessagePreview.react", [
	"fbt",
	"WAWebGroupGatingUtils",
	"WAWebGroupSuspendCommonStrings",
	"WAWebSettingsBlockedIcon.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = {
		marginTop3: {
			marginTop: "x7r5mf7",
			$$css: !0
		},
		marginInlineEnd3: {
			marginInlineEnd: "x1p8j9ns",
			$$css: !0
		}
	};
	function d() {
		var e = o("react-compiler-runtime").c(3), t;
		e[0] === Symbol.for("react.memo_cache_sentinel") ? (t = o("WAWebGroupGatingUtils").isGroupSuspensionAppealsRedesignEnabled() ? o("WAWebGroupSuspendCommonStrings").communitySuspendedTitle() : s._(
			/*BTDS*/
			""
		), e[0] = t) : t = e[0];
		var n = t, r;
		e[1] === Symbol.for("react.memo_cache_sentinel") ? (r = { className: "x1k4tb9n" }, e[1] = r) : r = e[1];
		var a;
		return e[2] === Symbol.for("react.memo_cache_sentinel") ? (a = u.jsxs("span", babelHelpers.extends({ title: n }, r, {
			"data-testid": "suspended-community-message-preview",
			children: [u.jsx(o("WAWebSettingsBlockedIcon.react").SettingsBlockedIcon, {
				width: 14,
				height: 14,
				displayInline: !0,
				directional: !0,
				xstyle: [c.marginTop3, c.marginInlineEnd3]
			}), n]
		})), e[2] = a) : a = e[2], a;
	}
	l.default = d;
}), 226);
