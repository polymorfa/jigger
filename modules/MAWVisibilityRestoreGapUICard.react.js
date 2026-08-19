__d("MAWVisibilityRestoreGapUICard.react", [
	"fbt",
	"MWChatEncryptedBackupsSyncDeviceInterstitialIcon.react",
	"MWXButton.react",
	"MWXColumn.react",
	"MWXColumnItem.react",
	"MWXText.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react"));
	function c(e) {
		var t = o("react-compiler-runtime").c(9), n = e.onOpenRestoreDialog, a;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (a = { className: "xlhe6ec x6nl9eh x1a5l9x9 x7vuprf x1mg3h75 xe4pinz xxc7z9f x1p5oq8j xwxc41k x13jy36j x64bnmy xh8yej3" }, t[0] = a) : a = t[0];
		var i;
		t[1] === Symbol.for("react.memo_cache_sentinel") ? (i = u.jsx(r("MWXColumnItem.react"), {
			align: "center",
			children: u.jsx(r("MWChatEncryptedBackupsSyncDeviceInterstitialIcon.react"), {})
		}), t[1] = i) : i = t[1];
		var l;
		t[2] === Symbol.for("react.memo_cache_sentinel") ? (l = { className: "x16em4ew" }, t[2] = l) : l = t[2];
		var c;
		t[3] === Symbol.for("react.memo_cache_sentinel") ? (c = u.jsx(r("MWXColumnItem.react"), {
			align: "center",
			paddingTop: 4,
			children: u.jsx("div", babelHelpers.extends({}, l, { children: u.jsx(r("MWXText.react"), {
				align: "center",
				isSemanticHeading: !0,
				type: "headlineEmphasized2",
				children: s._(
					/*BTDS*/
					""
				)
			}) }))
		}), t[3] = c) : c = t[3];
		var d;
		t[4] === Symbol.for("react.memo_cache_sentinel") ? (d = { className: "x1tkr9og" }, t[4] = d) : d = t[4];
		var m;
		t[5] === Symbol.for("react.memo_cache_sentinel") ? (m = u.jsx(r("MWXColumnItem.react"), {
			align: "center",
			children: u.jsx("div", babelHelpers.extends({}, d, { children: u.jsx(r("MWXText.react"), {
				align: "center",
				color: "secondary",
				type: "body3",
				children: s._(
					/*BTDS*/
					""
				)
			}) }))
		}), t[5] = m) : m = t[5];
		var p;
		t[6] === Symbol.for("react.memo_cache_sentinel") ? (p = s._(
			/*BTDS*/
			""
		), t[6] = p) : p = t[6];
		var _;
		return t[7] !== n ? (_ = u.jsx("div", babelHelpers.extends({}, a, { children: u.jsxs(r("MWXColumn.react"), {
			align: "center",
			spacing: 12,
			children: [
				i,
				c,
				m,
				u.jsx(r("MWXColumnItem.react"), {
					align: "center",
					paddingTop: 8,
					children: u.jsx(r("MWXButton.react"), {
						label: p,
						onPress: n,
						padding: "wide",
						testid: void 0,
						type: "primary"
					})
				})
			]
		}) })), t[7] = n, t[8] = _) : _ = t[8], _;
	}
	l.default = c;
}), 226);
