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
	"react"
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
		var t = e.msg, n = e.onClick, r = e.theme, a = t.thumbnail, i = o("WAWebMsgGetters").getIsSentByMe(t), l;
		return a && (l = u.jsx(o("WAWebFlex.react").FlexItem, {
			xstyle: r === "quoted" && d.quotedMedia,
			style: {
				width: "72px",
				height: "72px",
				backgroundSize: "cover",
				borderStartStartRadius: o("WAWebStylexVars.stylex").pxValueVars.radiusThumb,
				borderEndStartRadius: o("WAWebStylexVars.stylex").pxValueVars.radiusThumb,
				borderStartEndRadius: o("WDSVars.stylex").WDSVars.borderRadiusNone,
				borderEndEndRadius: o("WDSVars.stylex").WDSVars.borderRadiusNone,
				backgroundImage: "url(\"data:image/jpeg;base64," + a + "\")"
			}
		})), u.jsxs("div", babelHelpers.extends({}, {
			0: { className: "x78zum5 x1q0g3np x6s0dn4 x6ikm8r x10wlt62 x1wl59ut x1o168i8 x14ug900 x1ypdohk x1i282gy xx9ypkp xd15eu0 x11ecxm0 x1bu39yj" },
			1: { className: "x78zum5 x1q0g3np x6s0dn4 x6ikm8r x10wlt62 x1wl59ut x1o168i8 x14ug900 x1ypdohk x1i282gy xx9ypkp xd15eu0 x11ecxm0 x1bu39yj" }
		}[!!(r === "quoted" || i) << 0], {
			onClick: n,
			children: [l, u.jsxs(o("WAWebFlex.react").FlexColumn, {
				justify: "center",
				xstyle: [
					d.body,
					c.paddingBlock6,
					c.paddingInline10,
					r === "quoted" && d.quotedBody,
					r === "quoted" && o("WDSPaddings.stylex").wdsPaddings.padding0
				],
				children: [u.jsx(p, { msg: t }), u.jsx(_, { msg: t })]
			})]
		}));
	}
	m.displayName = m.name + " [from " + i.id + "]";
	function p(e) {
		var t, n = e.msg, a = (t = n.itemCount) != null ? t : 0, i = s._(
			/*BTDS*/
			"",
			[s._plural(a, "count")]
		), l = r("WDSIconIcShoppingCart.react");
		return u.jsxs(o("WAWebFlex.react").FlexRow, {
			xstyle: [d.title, o("WDSMargins.stylex").wdsMargins.marginBottom2],
			children: [u.jsx(l, {
				xstyle: [d.titleIcon, o("WDSMargins.stylex").wdsMargins.marginEnd2],
				iconXstyle: d.titleIconSvg,
				displayInline: !0
			}), u.jsx(o("WAWebEmojiText.react").EmojiText, { text: i })]
		});
	}
	p.displayName = p.name + " [from " + i.id + "]";
	function _(e) {
		var t = e.msg, n = e.showMessage, r = t.totalAmount1000, a = t.totalCurrencyCode, i = null;
		r != null && a != null && a !== "" && (i = u.jsx(o("WAWebEmojiText.react").EmojiText, { text: s._(
			/*BTDS*/
			"",
			[s._param("total-currency-amount", o("WAWebCurrencyUtils").formatAmount1000(a, r))]
		) }));
		var l = n === !0 ? u.jsx(o("WAWebEmojiText.react").EmojiText, { text: t.message }) : null;
		return u.jsxs("div", { children: [u.jsx(o("WAWebFlex.react").FlexRow, {
			xstyle: d.description,
			children: i
		}), l] });
	}
	_.displayName = _.name + " [from " + i.id + "]", l.OrderPreview = m, l.OrderDescription = _;
}), 226);
