__d("WAWebBusinessGoogleProfilePreviewAddressRow.react", [
	"WAWebFlex.react",
	"WDSIconIcLocationOn.react",
	"WDSText.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = {
		addressIcon: {
			color: "xhslqc4",
			$$css: !0
		},
		addressRow: {
			alignItems: "x1cy8zhl",
			boxSizing: "x9f619",
			columnGap: "xs2akgl",
			paddingTop: "x1xrf6ya",
			paddingBottom: "xscbp6u",
			paddingInlineStart: "xdx6fka",
			paddingInlineEnd: "xvtqlqk",
			paddingLeft: null,
			paddingRight: null,
			width: "xh8yej3",
			$$css: !0
		}
	};
	function c(e) {
		var t = o("react-compiler-runtime").c(5), n = e.address;
		if (n == null || n === "") return null;
		var a;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (a = { className: "x6s0dn4 x78zum5 x2lah0s x1nqnulx xl56j7k x1xvr5cs" }, t[0] = a) : a = t[0];
		var i, l;
		t[1] === Symbol.for("react.memo_cache_sentinel") ? (i = s.jsx("div", babelHelpers.extends({}, a, {
			"data-testid": "biz-profile-google-address-icon",
			children: s.jsx(r("WDSIconIcLocationOn.react"), {
				height: 24,
				iconXstyle: u.addressIcon,
				width: 24
			})
		})), l = { className: "x6s0dn4 x78zum5 x1iyjqo2 xjl1d3b xeuugli" }, t[1] = i, t[2] = l) : (i = t[1], l = t[2]);
		var c;
		return t[3] !== n ? (c = s.jsxs(o("WAWebFlex.react").FlexRow, {
			testid: "biz-profile-google-address-row",
			xstyle: u.addressRow,
			children: [i, s.jsx("div", babelHelpers.extends({}, l, { children: s.jsx(r("WDSText.react"), {
				type: "Body1",
				colorName: "contentActionEmphasized",
				dir: "auto",
				children: n
			}) }))]
		}), t[3] = n, t[4] = c) : c = t[4], c;
	}
	l.default = c;
}), 98);
