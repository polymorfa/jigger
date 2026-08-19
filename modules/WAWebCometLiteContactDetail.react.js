__d("WAWebCometLiteContactDetail.react", [
	"fbt",
	"WAWebCometLiteCallActions.react",
	"WAWebDetailImage.react",
	"WAWebFlex.react",
	"WAWebName.react",
	"WDSButton.react",
	"WDSIconIcChevronLeft.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = 112, d = {
		root: {
			boxSizing: "x9f619",
			width: "xh8yej3",
			height: "x5yr21d",
			overflowX: "x6ikm8r",
			overflowY: "x10wlt62",
			paddingInlineStart: "x1m4z3lf",
			paddingInlineEnd: "x1evaxtz",
			paddingLeft: null,
			paddingRight: null,
			backgroundColor: "x1280gxy",
			$$css: !0
		},
		header: {
			minHeight: "x1wxaq2x",
			paddingTop: "x1p57kb1",
			paddingBottom: "xvpt6g3",
			width: "xh8yej3",
			$$css: !0
		},
		body: {
			flexGrow: "x1iyjqo2",
			rowGap: "x1f0uite",
			overflowX: "x6ikm8r",
			overflowY: "x10wlt62",
			$$css: !0
		},
		nameText: {
			fontSize: "x579bpy",
			lineHeight: "x1cpheol",
			fontWeight: "x117nqv4",
			color: "x14ug900",
			$$css: !0
		}
	};
	function m(e) {
		var t = o("react-compiler-runtime").c(24), n = e.chat, a = e.contact, i = e.headerEnd, l = e.onBack, m = e.wid, p = null;
		if (n != null) {
			var _;
			t[0] !== n ? (_ = u.jsx(o("WAWebName.react").Name, {
				chat: n,
				titlify: !0,
				ellipsify: !0,
				xstyle: d.nameText
			}), t[0] = n, t[1] = _) : _ = t[1], p = _;
		} else if (a != null) {
			var f;
			t[2] !== a ? (f = u.jsx(o("WAWebName.react").Name, {
				contact: a,
				titlify: !0,
				ellipsify: !0,
				xstyle: d.nameText
			}), t[2] = a, t[3] = f) : f = t[3], p = f;
		}
		var g;
		t[4] === Symbol.for("react.memo_cache_sentinel") ? (g = s._(
			/*BTDS*/
			""
		), t[4] = g) : g = t[4];
		var h;
		t[5] !== l ? (h = u.jsx(r("WDSButton.react"), {
			Icon: r("WDSIconIcChevronLeft.react"),
			variant: "borderless",
			size: "medium",
			directional: !0,
			onPress: l,
			testid: "wa-web-lite-contact-detail-back",
			"aria-label": g
		}), t[5] = l, t[6] = h) : h = t[6];
		var y;
		t[7] !== i || t[8] !== h ? (y = u.jsxs(o("WAWebFlex.react").FlexRow, {
			align: "center",
			justify: "all",
			xstyle: d.header,
			children: [h, i]
		}), t[7] = i, t[8] = h, t[9] = y) : y = t[9];
		var C;
		t[10] !== m ? (C = u.jsx(o("WAWebDetailImage.react").DetailImage, {
			id: m,
			size: c,
			quality: o("WAWebDetailImage.react").DetailImageQuality.High
		}), t[10] = m, t[11] = C) : C = t[11];
		var b;
		t[12] === Symbol.for("react.memo_cache_sentinel") ? (b = { className: "x193iq5w x6ikm8r x10wlt62" }, t[12] = b) : b = t[12];
		var v;
		t[13] !== p ? (v = u.jsx("div", babelHelpers.extends({}, b, { children: p })), t[13] = p, t[14] = v) : v = t[14];
		var S;
		t[15] !== m ? (S = u.jsx(r("WAWebCometLiteCallActions.react"), { wid: m }), t[15] = m, t[16] = S) : S = t[16];
		var R;
		t[17] !== C || t[18] !== v || t[19] !== S ? (R = u.jsxs(o("WAWebFlex.react").FlexColumn, {
			align: "start",
			justify: "center",
			xstyle: d.body,
			grow: 1,
			children: [
				C,
				v,
				S
			]
		}), t[17] = C, t[18] = v, t[19] = S, t[20] = R) : R = t[20];
		var L;
		return t[21] !== y || t[22] !== R ? (L = u.jsxs(o("WAWebFlex.react").FlexColumn, {
			xstyle: d.root,
			testid: "wa-web-lite-contact-detail",
			grow: 1,
			children: [y, R]
		}), t[21] = y, t[22] = R, t[23] = L) : L = t[23], L;
	}
	l.default = m;
}), 226);
