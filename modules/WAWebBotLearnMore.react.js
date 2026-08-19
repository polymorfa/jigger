__d("WAWebBotLearnMore.react", [
	"fbt",
	"WAWebBotBaseGating",
	"WAWebBox.react",
	"WAWebConfirmPopup.react",
	"WAWebExternalLink.react",
	"WAWebFaqUrl",
	"WAWebFlex.react",
	"WAWebLockIcon.react",
	"WAWebModal.react",
	"WAWebModalManager",
	"WAWebText.react",
	"WAWebWdsIcAiFilledIcon.react",
	"WAWebWdsPictoAiIcon.react",
	"WDSMargins.stylex",
	"WDSPaddings.stylex",
	"react",
	"react-compiler-runtime",
	"stylex",
	"useWAWebFocusOnMount"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react")), d = {
		headerText: {
			textAlign: "x2b8uid",
			$$css: !0
		},
		icon: {
			color: "xhslqc4",
			$$css: !0
		},
		sectionIcon: {
			width: "xvy4d1p",
			$$css: !0
		},
		sectionTitle: {
			width: "xdzyupr",
			lineHeight: "x1o2sk6j",
			$$css: !0
		}
	};
	function m() {
		return {
			icon: c.jsx(o("WAWebLockIcon.react").LockIcon, {
				width: 24,
				height: 24,
				iconXstyle: d.icon
			}),
			title: s._(
				/*BTDS*/
				""
			),
			subtitle: o("WAWebBotBaseGating").isBotEnabled() ? s._(
				/*BTDS*/
				""
			) : s._(
				/*BTDS*/
				""
			)
		};
	}
	function p() {
		return {
			icon: c.jsx(o("WAWebLockIcon.react").LockIcon, {
				width: 24,
				height: 24,
				iconXstyle: d.icon
			}),
			title: s._(
				/*BTDS*/
				""
			),
			subtitle: s._(
				/*BTDS*/
				""
			)
		};
	}
	function _() {
		return {
			icon: c.jsx(o("WAWebWdsIcAiFilledIcon.react").WdsIcAiFilledIcon, {
				width: 24,
				height: 24,
				iconXstyle: d.icon
			}),
			title: s._(
				/*BTDS*/
				""
			),
			subtitle: s._(
				/*BTDS*/
				""
			)
		};
	}
	function f(e) {
		var t = o("react-compiler-runtime").c(16), n = e.fromInvoke, a = h, i = r("useWAWebFocusOnMount")(), l;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (l = c.jsx(o("WAWebFlex.react").FlexItem, { children: c.jsx(o("WAWebWdsPictoAiIcon.react").WdsPictoAiIcon, { height: 88 }) }), t[0] = l) : l = t[0];
		var u = l, f;
		t[1] === Symbol.for("react.memo_cache_sentinel") ? (f = s._(
			/*BTDS*/
			""
		), t[1] = f) : f = t[1];
		var y = f, C;
		t[2] !== n ? (C = n ? m() : p(), t[2] = n, t[3] = C) : C = t[3];
		var b;
		t[4] === Symbol.for("react.memo_cache_sentinel") ? (b = _(), t[4] = b) : b = t[4];
		var v;
		t[5] !== C ? (v = [C, b], t[5] = C, t[6] = v) : v = t[6];
		var S = v, R;
		t[7] === Symbol.for("react.memo_cache_sentinel") ? (R = s._(
			/*BTDS*/
			""
		), t[7] = R) : R = t[7];
		var L;
		t[8] === Symbol.for("react.memo_cache_sentinel") ? (L = s._(
			/*BTDS*/
			""
		), t[8] = L) : L = t[8];
		var E;
		t[9] === Symbol.for("react.memo_cache_sentinel") ? (E = [o("WDSMargins.stylex").wdsMargins.marginVerAuto, o("WDSPaddings.stylex").wdsPaddings.paddingBottom16], t[9] = E) : E = t[9];
		var k;
		t[10] === Symbol.for("react.memo_cache_sentinel") ? (k = c.jsx(r("WAWebBox.react"), {
			xstyle: [
				d.headerText,
				o("WDSMargins.stylex").wdsMargins.marginHor8,
				o("WDSMargins.stylex").wdsMargins.marginTop16,
				o("WDSMargins.stylex").wdsMargins.marginBottom8
			],
			children: c.jsx(o("WAWebText.react").WAWebTextLarge, {
				weight: "bold",
				children: y
			})
		}), t[10] = k) : k = t[10];
		var I;
		t[11] !== S ? (I = c.jsxs(o("WAWebFlex.react").FlexColumn, {
			align: "center",
			xstyle: E,
			children: [
				u,
				k,
				S.map(g)
			]
		}), t[11] = S, t[12] = I) : I = t[12];
		var T;
		return t[13] !== i || t[14] !== I ? (T = c.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			okText: R,
			onOK: a,
			cancelText: L,
			onCancel: o("WAWebModalManager").closeModalManager,
			type: o("WAWebModal.react").ModalTheme.Promote,
			ref: i,
			children: I
		}), t[13] = i, t[14] = I, t[15] = T) : T = t[15], T;
	}
	function g(t, n) {
		var a = t.icon, i = t.subtitle, l = t.title;
		return c.jsxs(o("WAWebFlex.react").FlexRow, {
			className: (e || (e = r("stylex")))(o("WDSMargins.stylex").wdsMargins.marginHor8, o("WDSMargins.stylex").wdsMargins.marginVer16),
			children: [c.jsx(o("WAWebFlex.react").FlexItem, {
				xstyle: [o("WDSPaddings.stylex").wdsPaddings.paddingHor8, d.sectionIcon],
				children: a
			}), c.jsxs(o("WAWebFlex.react").FlexItem, {
				xstyle: [o("WDSPaddings.stylex").wdsPaddings.paddingHor8, d.sectionTitle],
				children: [c.jsx(o("WAWebText.react").WAWebTextTitle, { children: l }), c.jsx(o("WAWebText.react").WAWebTextMuted, { children: i })]
			})]
		}, n);
	}
	g.displayName = g.name + " [from " + i.id + "]";
	function h() {
		o("WAWebExternalLink.react").openExternalLink(o("WAWebFaqUrl").getBotLearnMoreUrl()), o("WAWebModalManager").ModalManager.close();
	}
	l.default = f;
}), 226);
