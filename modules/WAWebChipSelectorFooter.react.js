__d("WAWebChipSelectorFooter.react", [
	"fbt",
	"WAWebChipButton.react",
	"WAWebFlex.react",
	"WAWebL10N",
	"WAWebRoundXInvIcon.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = { chip: {
		marginTop: "x1380le5",
		marginInlineEnd: "xqf2s3x",
		marginBottom: "xat24cr",
		marginInlineStart: "x1lziwak",
		$$css: !0
	} };
	function d(e) {
		var t = o("react-compiler-runtime").c(9), n = e.categories, a = e.onRemoveItem, i;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (i = r("WAWebL10N").isRTL(), t[0] = i) : i = t[0];
		var l = i, d;
		t[1] === Symbol.for("react.memo_cache_sentinel") ? (d = { className: "x1xrf6ya xcldk2z xa0aww2 x1phvje8 x178xt8z x13fuv20 xx42vgk" }, t[1] = d) : d = t[1];
		var m;
		if (t[2] !== n || t[3] !== a) {
			var p;
			t[5] !== a ? (p = function(t) {
				var e = function() {
					return a(t.id);
				};
				return u.jsx(r("WAWebChipButton.react"), {
					"aria-label": s._(
						/*BTDS*/
						""
					),
					onClick: e,
					label: t.localized_display_name,
					PostfixIcon: l ? void 0 : o("WAWebRoundXInvIcon.react").RoundXInvIcon,
					PrefixIcon: l ? o("WAWebRoundXInvIcon.react").RoundXInvIcon : void 0,
					xstyle: c.chip
				}, t.id.toString());
			}, t[5] = a, t[6] = p) : p = t[6], m = n.map(p), t[2] = n, t[3] = a, t[4] = m;
		} else m = t[4];
		var _;
		return t[7] !== m ? (_ = u.jsx("div", babelHelpers.extends({}, d, { children: u.jsx(o("WAWebFlex.react").FlexRow, {
			align: "start",
			justify: "start",
			wrap: "wrap",
			children: m
		}) })), t[7] = m, t[8] = _) : _ = t[8], _;
	}
	l.default = d;
}), 226);
