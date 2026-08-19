__d("WAWebTeeBotGroupTeeAddedModal.react", [
	"fbt",
	"WAWebBotGroupGatingUtils",
	"WAWebBox.react",
	"WAWebConfirmPopup.react",
	"WAWebExternalLink.react",
	"WAWebFaqUrl",
	"WAWebFlex.react",
	"WAWebLockIcon.react",
	"WAWebModal.react",
	"WAWebModalManager",
	"WAWebText.react",
	"WDSIconIcPersonShield.react",
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
		var t = o("react-compiler-runtime").c(16), n = p, a = r("useWAWebFocusOnMount")(), i;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (i = s._(
			/*BTDS*/
			""
		), t[0] = i) : i = t[0];
		var l = i;
		if (!o("WAWebBotGroupGatingUtils").isTEEGroupBotParticipantAddEnabled()) return null;
		var u;
		t[1] === Symbol.for("react.memo_cache_sentinel") ? (u = s._(
			/*BTDS*/
			""
		), t[1] = u) : u = t[1];
		var m;
		t[2] === Symbol.for("react.memo_cache_sentinel") ? (m = [o("WDSMargins.stylex").wdsMargins.marginVerAuto, o("WDSPaddings.stylex").wdsPaddings.paddingBottom16], t[2] = m) : m = t[2];
		var _;
		t[3] === Symbol.for("react.memo_cache_sentinel") ? (_ = c.jsx(r("WAWebBox.react"), {
			xstyle: [
				d.headerText,
				o("WDSMargins.stylex").wdsMargins.marginHor8,
				o("WDSMargins.stylex").wdsMargins.marginTop16,
				o("WDSMargins.stylex").wdsMargins.marginBottom8
			],
			children: c.jsx(o("WAWebText.react").WAWebTextLarge, {
				weight: "bold",
				children: l
			})
		}), t[3] = _) : _ = t[3];
		var f;
		t[4] === Symbol.for("react.memo_cache_sentinel") ? (f = (e || (e = r("stylex")))(o("WDSMargins.stylex").wdsMargins.marginHor8, o("WDSMargins.stylex").wdsMargins.marginVer16), t[4] = f) : f = t[4];
		var g;
		t[5] === Symbol.for("react.memo_cache_sentinel") ? (g = c.jsx(o("WAWebFlex.react").FlexItem, {
			xstyle: [o("WDSPaddings.stylex").wdsPaddings.paddingHor8, d.sectionIcon],
			children: c.jsx(o("WAWebLockIcon.react").LockIcon, {
				width: 24,
				height: 24,
				iconXstyle: d.icon
			})
		}), t[5] = g) : g = t[5];
		var h;
		t[6] === Symbol.for("react.memo_cache_sentinel") ? (h = [o("WDSPaddings.stylex").wdsPaddings.paddingHor8, d.sectionTitle], t[6] = h) : h = t[6];
		var y;
		t[7] === Symbol.for("react.memo_cache_sentinel") ? (y = c.jsx(o("WAWebText.react").WAWebTextTitle, { children: s._(
			/*BTDS*/
			""
		) }), t[7] = y) : y = t[7];
		var C;
		t[8] === Symbol.for("react.memo_cache_sentinel") ? (C = c.jsxs(o("WAWebFlex.react").FlexRow, {
			className: f,
			children: [g, c.jsxs(o("WAWebFlex.react").FlexItem, {
				xstyle: h,
				children: [y, c.jsx(o("WAWebText.react").WAWebTextMuted, { children: s._(
					/*BTDS*/
					""
				) })]
			})]
		}), t[8] = C) : C = t[8];
		var b;
		t[9] === Symbol.for("react.memo_cache_sentinel") ? (b = (e || (e = r("stylex")))(o("WDSMargins.stylex").wdsMargins.marginHor8, o("WDSMargins.stylex").wdsMargins.marginVer16), t[9] = b) : b = t[9];
		var v;
		t[10] === Symbol.for("react.memo_cache_sentinel") ? (v = c.jsx(o("WAWebFlex.react").FlexItem, {
			xstyle: [o("WDSPaddings.stylex").wdsPaddings.paddingHor8, d.sectionIcon],
			children: c.jsx(r("WDSIconIcPersonShield.react"), {
				width: 24,
				height: 24,
				iconXstyle: d.icon
			})
		}), t[10] = v) : v = t[10];
		var S;
		t[11] === Symbol.for("react.memo_cache_sentinel") ? (S = [o("WDSPaddings.stylex").wdsPaddings.paddingHor8, d.sectionTitle], t[11] = S) : S = t[11];
		var R;
		t[12] === Symbol.for("react.memo_cache_sentinel") ? (R = c.jsx(o("WAWebText.react").WAWebTextTitle, { children: s._(
			/*BTDS*/
			""
		) }), t[12] = R) : R = t[12];
		var L;
		t[13] === Symbol.for("react.memo_cache_sentinel") ? (L = c.jsxs(o("WAWebFlex.react").FlexColumn, {
			align: "center",
			xstyle: m,
			children: [
				_,
				C,
				c.jsxs(o("WAWebFlex.react").FlexRow, {
					className: b,
					children: [v, c.jsxs(o("WAWebFlex.react").FlexItem, {
						xstyle: S,
						children: [R, c.jsx(o("WAWebText.react").WAWebTextMuted, { children: s._(
							/*BTDS*/
							""
						) })]
					})]
				})
			]
		}), t[13] = L) : L = t[13];
		var E;
		return t[14] !== a ? (E = c.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			okText: u,
			onOK: n,
			type: o("WAWebModal.react").ModalTheme.Promote,
			ref: a,
			children: L
		}), t[14] = a, t[15] = E) : E = t[15], E;
	}
	function p() {
		o("WAWebExternalLink.react").openExternalLink(o("WAWebFaqUrl").getTeeGroupLearnMoreUrl()), o("WAWebModalManager").ModalManager.close();
	}
	l.default = m;
}), 226);
