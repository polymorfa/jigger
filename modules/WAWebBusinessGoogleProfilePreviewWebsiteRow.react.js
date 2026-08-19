__d("WAWebBusinessGoogleProfilePreviewWebsiteRow.react", [
	"WAWebExternalLink.react",
	"WAWebFlex.react",
	"WAWebURLUtils",
	"WDSIconIcPublic.react",
	"WDSText.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = {
		websiteIcon: {
			color: "xhslqc4",
			$$css: !0
		},
		websiteRow: {
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
		var t = o("react-compiler-runtime").c(10), n = e.website;
		if (n == null || n === "") return null;
		var a;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (a = { className: "x6s0dn4 x78zum5 x2lah0s x1nqnulx xl56j7k x1xvr5cs" }, t[0] = a) : a = t[0];
		var i, l;
		t[1] === Symbol.for("react.memo_cache_sentinel") ? (i = s.jsx("div", babelHelpers.extends({}, a, {
			"data-testid": "biz-profile-google-website-icon",
			children: s.jsx(r("WDSIconIcPublic.react"), {
				height: 24,
				iconXstyle: u.websiteIcon,
				width: 24
			})
		})), l = { className: "x6s0dn4 x78zum5 x1iyjqo2 xjl1d3b xeuugli" }, t[1] = i, t[2] = l) : (i = t[1], l = t[2]);
		var c;
		t[3] !== n ? (c = r("WAWebURLUtils").toMaliciousSiteRedirect(n), t[3] = n, t[4] = c) : c = t[4];
		var d;
		t[5] !== n ? (d = s.jsx(r("WDSText.react"), {
			type: "Body1Emphasized",
			colorName: "contentActionEmphasized",
			dir: "auto",
			children: n
		}), t[5] = n, t[6] = d) : d = t[6];
		var m;
		return t[7] !== c || t[8] !== d ? (m = s.jsxs(o("WAWebFlex.react").FlexRow, {
			testid: "biz-profile-google-website-row",
			xstyle: u.websiteRow,
			children: [i, s.jsx("div", babelHelpers.extends({}, l, { children: s.jsx(o("WAWebExternalLink.react").ExternalLink, {
				href: c,
				testid: "biz-profile-google-website-link",
				children: d
			}) }))]
		}), t[7] = c, t[8] = d, t[9] = m) : m = t[9], m;
	}
	l.default = c;
}), 98);
