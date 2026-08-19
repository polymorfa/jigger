__d("WAWebBusinessGoogleProfilePreviewBusinessHoursRow.react", [
	"WAWebFlex.react",
	"WAWebGoogleBusinessHours.react",
	"WDSIconIcSchedule.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = {
		hoursControl: {
			minHeight: "x2lwn1j",
			paddingTop: "xexx8yu",
			paddingBottom: "x18d9i69",
			paddingInlineEnd: "xyri2b",
			paddingInlineStart: "x1c1uobl",
			$$css: !0
		},
		hoursExpandIconColumn: {
			flexShrink: "x2lah0s",
			height: "x1nqnulx",
			width: "x1xvr5cs",
			$$css: !0
		},
		hoursIcon: {
			color: "xhslqc4",
			$$css: !0
		},
		hoursRow: {
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
		var t = o("react-compiler-runtime").c(5), n = e.weekdayHours;
		if (n == null || n.length === 0) return null;
		var a;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (a = { className: "x6s0dn4 x78zum5 x2lah0s x1nqnulx xl56j7k x1xvr5cs" }, t[0] = a) : a = t[0];
		var i, l;
		t[1] === Symbol.for("react.memo_cache_sentinel") ? (i = s.jsx("div", babelHelpers.extends({}, a, {
			"data-testid": "biz-profile-google-business-hours-icon",
			children: s.jsx(r("WDSIconIcSchedule.react"), {
				height: 24,
				iconXstyle: u.hoursIcon,
				width: 24
			})
		})), l = { className: "x1iyjqo2 xeuugli" }, t[1] = i, t[2] = l) : (i = t[1], l = t[2]);
		var c;
		return t[3] !== n ? (c = s.jsxs(o("WAWebFlex.react").FlexRow, {
			testid: "biz-profile-google-business-hours-row",
			xstyle: u.hoursRow,
			children: [i, s.jsx("div", babelHelpers.extends({}, l, { children: s.jsx(r("WAWebGoogleBusinessHours.react"), {
				iconColumnXstyle: u.hoursExpandIconColumn,
				weekdayHours: n,
				xstyle: u.hoursControl
			}) }))]
		}), t[3] = n, t[4] = c) : c = t[4], c;
	}
	l.default = c;
}), 98);
