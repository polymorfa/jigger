__d("WAWebPaymentInfo.react", [
	"WAWebPaymentAmount.react",
	"WAWebPaymentBackground.react",
	"WAWebPaymentIcon.react",
	"WAWebPaymentNoteMessage.react",
	"WAWebPaymentStatus.react",
	"WAWebPaymentType.react",
	"WAWebProtobufsWeb.pb",
	"WAWebSpacerText.react",
	"WDSMargins.stylex",
	"WDSPaddings.stylex",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = s.useState, d = { paddingInlineEnd6: {
		paddingInlineEnd: "x1icxu4v",
		$$css: !0
	} }, m = 20, p = {
		bubbleOutBody: {
			backgroundColor: "x1bu39yj",
			$$css: !0
		},
		bubbleInBody: {
			backgroundColor: "x1bu39yj",
			$$css: !0
		},
		body: {
			display: "x78zum5",
			textDecoration: "x1hl2dhg",
			borderEndEndRadius: "xd15eu0",
			borderEndStartRadius: "x11ecxm0",
			$$css: !0
		},
		bodyIconMultiline: {
			alignSelf: "xamitd3",
			$$css: !0
		},
		bodyIcon: {
			flex: "x1okw0bk",
			$$css: !0
		}
	};
	function _(t) {
		var n, a = t.expiryTimestamp, i = t.paymentStatus, l = t.paymentTxnStatus, s = c(!1), _ = s[0], f = s[1], g = function(t) {
			t && f(t.getBoundingClientRect().height > m);
		}, h = l != null && l !== o("WAWebProtobufsWeb.pb").PaymentInfo$TxnStatus.UNKNOWN || i != null && i !== o("WAWebProtobufsWeb.pb").PaymentInfo$Status.UNKNOWN_STATUS, y;
		if (t.hasCaption === !0) y = u.jsxs("div", {
			ref: g,
			children: [u.jsx("div", { children: u.jsx(r("WAWebPaymentType.react"), {
				subtype: t.subtype,
				receiverJid: t.receiverJid
			}) }), u.jsx(r("WAWebPaymentStatus.react"), {
				paymentStatus: i,
				paymentTxnStatus: l,
				expiryTimestamp: a
			})]
		});
		else if (h) {
			var C;
			y = u.jsxs("div", {
				ref: g,
				children: [u.jsx("div", { children: u.jsx(r("WAWebPaymentType.react"), {
					subtype: t.subtype,
					receiverJid: t.receiverJid
				}) }), u.jsx(r("WAWebSpacerText.react"), {
					msg: (C = t.msg) == null ? void 0 : C.unsafe(),
					children: u.jsx(r("WAWebPaymentStatus.react"), {
						paymentStatus: i,
						paymentTxnStatus: l,
						expiryTimestamp: a
					})
				})]
			});
		} else {
			var b;
			y = u.jsx(r("WAWebSpacerText.react"), {
				msg: (b = t.msg) == null ? void 0 : b.unsafe(),
				children: u.jsx("span", {
					ref: g,
					children: u.jsx(r("WAWebPaymentType.react"), {
						subtype: t.subtype,
						receiverJid: t.receiverJid
					})
				})
			});
		}
		return u.jsxs("div", { children: [
			u.jsx(r("WAWebPaymentBackground.react"), { children: u.jsx(r("WAWebPaymentAmount.react"), {
				currency: t.currency,
				amount1000: t.amount1000
			}) }),
			u.jsxs("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(p.body, o("WDSPaddings.stylex").wdsPaddings.paddingVer8, d.paddingInlineEnd6, o("WDSPaddings.stylex").wdsPaddings.paddingStart8, t.isSentByMe === !0 ? p.bubbleOutBody : p.bubbleInBody), { children: [u.jsx("div", babelHelpers.extends({}, e.props(_ && p.bodyIconMultiline, p.bodyIcon, o("WDSMargins.stylex").wdsMargins.marginEnd8), { children: u.jsx(r("WAWebPaymentIcon.react"), {
				currency: t.currency,
				subtype: t.subtype,
				paymentStatus: i,
				paymentTxnStatus: l
			}) })), u.jsx("div", {
				className: "x12lumcd x6ikm8r x10wlt62 x1f6kntn x1fc57z9 x1vvkbs",
				children: y
			})] })),
			(n = t.msg) != null && n.paymentNoteMsg ? u.jsx(r("WAWebPaymentNoteMessage.react"), { msg: t.msg }) : null
		] });
	}
	_.displayName = _.name + " [from " + i.id + "]", l.default = _;
}), 98);
