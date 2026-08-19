__d("WAWebBizOrderPreview.react", [
	"fbt",
	"WAWebCurrencyUtils",
	"WAWebEmojiText.react",
	"WAWebFlex.react",
	"WAWebMsgGetters",
	"WAWebStylexVars.stylex",
	"WDSIconIcShoppingCart.react",
	"WDSMargins.stylex",
	"WDSPaddings.stylex",
	"WDSVars.stylex",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = {
		paddingBlock6: {
			paddingTop: "x1yrsyyn",
			paddingBottom: "x10b6aqq",
			$$css: !0
		},
		paddingInline10: {
			paddingInlineStart: "xe2zdcy",
			paddingInlineEnd: "x2vl965",
			paddingLeft: null,
			paddingRight: null,
			$$css: !0
		}
	}, d = {
		quotedMedia: {
			order: "x14yy4lh",
			width: "x1pju0fl",
			height: "x10wjd1d",
			$$css: !0
		},
		body: {
			boxSizing: "x9f619",
			flexGrow: "x1iyjqo2",
			maxHeight: "x1upyj8d",
			overflowX: "x6ikm8r",
			overflowY: "x10wlt62",
			lineHeight: "x17fgdl5",
			$$css: !0
		},
		quotedBody: {
			order: "x9ek82g",
			$$css: !0
		},
		titleIcon: {
			width: "x1xp8n7a",
			height: "xmix8c7",
			pointerEvents: "x47corl",
			fill: "xvt3oi1",
			$$css: !0
		},
		titleIconSvg: {
			width: "x1xp8n7a",
			height: "xmix8c7",
			$$css: !0
		},
		title: {
			overflowX: "x6ikm8r",
			overflowY: "x10wlt62",
			color: "x14ug900",
			textOverflow: "xlyipyv",
			$$css: !0
		},
		description: {
			flexShrink: "x7f0hsc",
			overflowX: "x6ikm8r",
			overflowY: "x10wlt62",
			fontSize: "x1pg5gke",
			color: "xhslqc4",
			textOverflow: "xlyipyv",
			$$css: !0
		}
	};
	function m(e) {
		var t = o("react-compiler-runtime").c(25), n = e.msg, r = e.onClick, a = e.theme, i = n.thumbnail, l;
		t[0] !== n ? (l = o("WAWebMsgGetters").getIsSentByMe(n), t[0] = n, t[1] = l) : l = t[1];
		var s = l, m;
		if (i) {
			var f = a === "quoted" && d.quotedMedia, g = "url(\"data:image/jpeg;base64," + i + "\")", h;
			t[2] !== g ? (h = {
				width: "72px",
				height: "72px",
				backgroundSize: "cover",
				borderStartStartRadius: o("WAWebStylexVars.stylex").pxValueVars.radiusThumb,
				borderEndStartRadius: o("WAWebStylexVars.stylex").pxValueVars.radiusThumb,
				borderStartEndRadius: o("WDSVars.stylex").WDSVars.borderRadiusNone,
				borderEndEndRadius: o("WDSVars.stylex").WDSVars.borderRadiusNone,
				backgroundImage: g
			}, t[2] = g, t[3] = h) : h = t[3];
			var y;
			t[4] !== f || t[5] !== h ? (y = u.jsx(o("WAWebFlex.react").FlexItem, {
				xstyle: f,
				style: h
			}), t[4] = f, t[5] = h, t[6] = y) : y = t[6], m = y;
		}
		var C;
		t[7] !== s || t[8] !== a ? (C = {
			0: { className: "x78zum5 x1q0g3np x6s0dn4 x6ikm8r x10wlt62 x1wl59ut x1o168i8 x14ug900 x1ypdohk x1i282gy xx9ypkp xd15eu0 x11ecxm0 x1bu39yj" },
			1: { className: "x78zum5 x1q0g3np x6s0dn4 x6ikm8r x10wlt62 x1wl59ut x1o168i8 x14ug900 x1ypdohk x1i282gy xx9ypkp xd15eu0 x11ecxm0 x1bu39yj" }
		}[!!(a === "quoted" || s) << 0], t[7] = s, t[8] = a, t[9] = C) : C = t[9];
		var b = a === "quoted" && d.quotedBody, v = a === "quoted" && o("WDSPaddings.stylex").wdsPaddings.padding0, S;
		t[10] !== b || t[11] !== v ? (S = [
			d.body,
			c.paddingBlock6,
			c.paddingInline10,
			b,
			v
		], t[10] = b, t[11] = v, t[12] = S) : S = t[12];
		var R, L;
		t[13] !== n ? (R = u.jsx(p, { msg: n }), L = u.jsx(_, { msg: n }), t[13] = n, t[14] = R, t[15] = L) : (R = t[14], L = t[15]);
		var E;
		t[16] !== S || t[17] !== R || t[18] !== L ? (E = u.jsxs(o("WAWebFlex.react").FlexColumn, {
			justify: "center",
			xstyle: S,
			children: [R, L]
		}), t[16] = S, t[17] = R, t[18] = L, t[19] = E) : E = t[19];
		var k;
		return t[20] !== m || t[21] !== r || t[22] !== C || t[23] !== E ? (k = u.jsxs("div", babelHelpers.extends({}, C, {
			onClick: r,
			children: [m, E]
		})), t[20] = m, t[21] = r, t[22] = C, t[23] = E, t[24] = k) : k = t[24], k;
	}
	function p(e) {
		var t, n = o("react-compiler-runtime").c(6), a = e.msg, i = (t = a.itemCount) != null ? t : 0, l;
		n[0] !== i ? (l = s._(
			/*BTDS*/
			"",
			[s._plural(i, "count")]
		), n[0] = i, n[1] = l) : l = n[1];
		var c = l, m;
		n[2] === Symbol.for("react.memo_cache_sentinel") ? (m = [d.title, o("WDSMargins.stylex").wdsMargins.marginBottom2], n[2] = m) : m = n[2];
		var p;
		n[3] === Symbol.for("react.memo_cache_sentinel") ? (p = u.jsx(r("WDSIconIcShoppingCart.react"), {
			xstyle: [d.titleIcon, o("WDSMargins.stylex").wdsMargins.marginEnd2],
			iconXstyle: d.titleIconSvg,
			displayInline: !0
		}), n[3] = p) : p = n[3];
		var _;
		return n[4] !== c ? (_ = u.jsxs(o("WAWebFlex.react").FlexRow, {
			xstyle: m,
			children: [p, u.jsx(o("WAWebEmojiText.react").EmojiText, { text: c })]
		}), n[4] = c, n[5] = _) : _ = n[5], _;
	}
	function _(e) {
		var t = o("react-compiler-runtime").c(11), n = e.msg, r = e.showMessage, a = n.totalAmount1000, i = n.totalCurrencyCode, l = null;
		if (a != null && i != null && i !== "") {
			var c;
			t[0] !== a || t[1] !== i ? (c = u.jsx(o("WAWebEmojiText.react").EmojiText, { text: s._(
				/*BTDS*/
				"",
				[s._param("total-currency-amount", o("WAWebCurrencyUtils").formatAmount1000(i, a))]
			) }), t[0] = a, t[1] = i, t[2] = c) : c = t[2], l = c;
		}
		var m;
		t[3] !== n.message || t[4] !== r ? (m = r === !0 ? u.jsx(o("WAWebEmojiText.react").EmojiText, { text: n.message }) : null, t[3] = n.message, t[4] = r, t[5] = m) : m = t[5];
		var p = m, _;
		t[6] !== l ? (_ = u.jsx(o("WAWebFlex.react").FlexRow, {
			xstyle: d.description,
			children: l
		}), t[6] = l, t[7] = _) : _ = t[7];
		var f;
		return t[8] !== p || t[9] !== _ ? (f = u.jsxs("div", { children: [_, p] }), t[8] = p, t[9] = _, t[10] = f) : f = t[10], f;
	}
	l.OrderPreview = m, l.OrderDescription = _;
}), 226);
