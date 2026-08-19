__d("WAWebConsumerTransparencyModalDialog.react", [
	"fbt",
	"WAWebCTWAGatingUtils",
	"WAWebConfirmPopup.react",
	"WAWebCtwaConsumerDisclosureWamEvent",
	"WAWebExternalLink.react",
	"WAWebFaqUrl",
	"WAWebFlex.react",
	"WAWebModal.react",
	"WAWebModalManager",
	"WAWebSettingsSecurityIcon.react",
	"WAWebSingleChevronInCircleIcon.react",
	"WAWebText_DONOTUSE.react",
	"WAWebWamEnumDisclosureAction",
	"WAWebWamEnumDisclosureType",
	"WAWebWdsPictoMetaDataChevronIcon.react",
	"WDSIconIcVisibilityOff.react",
	"WDSMargins.stylex",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e.useEffect, d = { marginTop36: {
		marginTop: "xseo6mj",
		$$css: !0
	} }, m = {
		fullWidth: {
			width: "xh8yej3",
			$$css: !0
		},
		bulletIconColorNew: {
			color: "xhslqc4",
			$$css: !0
		}
	};
	function p() {
		o("WAWebModalManager").ModalManager.open(u.jsx(f, {}));
	}
	function _() {
		var e = o("react-compiler-runtime").c(13), t;
		e[0] === Symbol.for("react.memo_cache_sentinel") ? (t = u.jsx(o("WAWebSingleChevronInCircleIcon.react").SingleChevronInCircleIcon, {
			height: 24,
			width: 24,
			xstyle: m.bulletIconColorNew
		}), e[0] = t) : t = e[0];
		var n = t, a = n, i;
		e[1] === Symbol.for("react.memo_cache_sentinel") ? (i = u.jsx(r("WDSIconIcVisibilityOff.react"), {
			height: 24,
			width: 24,
			xstyle: m.bulletIconColorNew
		}), e[1] = i) : i = e[1];
		var l = i, c;
		e[2] === Symbol.for("react.memo_cache_sentinel") ? (c = u.jsx(o("WAWebWdsPictoMetaDataChevronIcon.react").WdsPictoMetaDataChevronIcon, {
			width: 88,
			height: 88
		}), e[2] = c) : c = e[2];
		var p = c, _;
		e[3] === Symbol.for("react.memo_cache_sentinel") ? (_ = s._(
			/*BTDS*/
			""
		), e[3] = _) : _ = e[3];
		var f = _, g;
		e[4] === Symbol.for("react.memo_cache_sentinel") ? (g = o("WAWebCTWAGatingUtils").isCTWATosFilteringEnabled() && o("WAWebCTWAGatingUtils").showCTWACCICompliantUI(), e[4] = g) : g = e[4];
		var h = g, y;
		e[5] === Symbol.for("react.memo_cache_sentinel") ? (y = u.jsx(o("WAWebFlex.react").FlexRow, {
			justify: "center",
			xstyle: [m.fullWidth, o("WDSMargins.stylex").wdsMargins.marginBottom8],
			children: p
		}), e[5] = y) : y = e[5];
		var C;
		e[6] === Symbol.for("react.memo_cache_sentinel") ? (C = u.jsx(o("WAWebText_DONOTUSE.react").TextDiv, {
			size: "20",
			color: "dark",
			weight: "medium",
			xstyle: o("WDSMargins.stylex").wdsMargins.marginTop12,
			children: s._(
				/*BTDS*/
				""
			)
		}), e[6] = C) : C = e[6];
		var b;
		e[7] === Symbol.for("react.memo_cache_sentinel") ? (b = u.jsx(o("WAWebText_DONOTUSE.react").TextDiv, {
			size: "16",
			weight: "normal",
			color: "dark",
			xstyle: o("WDSMargins.stylex").wdsMargins.marginTop16,
			children: s._(
				/*BTDS*/
				"",
				[s._implicitParam("=m2", u.jsx(o("WAWebExternalLink.react").ExternalLink, {
					href: o("WAWebFaqUrl").getConsumerTransparencyHCAUrl(),
					children: s._(
						/*BTDS*/
						""
					)
				}))]
			)
		}), e[7] = b) : b = e[7];
		var v;
		e[8] === Symbol.for("react.memo_cache_sentinel") ? (v = s._(
			/*BTDS*/
			""
		), e[8] = v) : v = e[8];
		var S;
		e[9] === Symbol.for("react.memo_cache_sentinel") ? (S = u.jsxs(o("WAWebFlex.react").FlexRow, {
			justify: "center",
			align: "center",
			xstyle: d.marginTop36,
			children: [l, u.jsxs(o("WAWebText_DONOTUSE.react").TextSpan, {
				size: "13",
				color: "dark",
				xstyle: o("WDSMargins.stylex").wdsMargins.marginStart24,
				children: [v, h && "."]
			})]
		}), e[9] = S) : S = e[9];
		var R;
		e[10] === Symbol.for("react.memo_cache_sentinel") ? (R = u.jsxs(o("WAWebFlex.react").FlexRow, {
			justify: "center",
			align: "center",
			xstyle: o("WDSMargins.stylex").wdsMargins.marginTop20,
			children: [a, u.jsxs(o("WAWebText_DONOTUSE.react").TextSpan, {
				size: "13",
				color: "dark",
				xstyle: o("WDSMargins.stylex").wdsMargins.marginStart24,
				children: [f, h && "."]
			})]
		}), e[10] = R) : R = e[10];
		var L;
		e[11] === Symbol.for("react.memo_cache_sentinel") ? (L = u.jsx(o("WAWebSettingsSecurityIcon.react").SettingsSecurityIcon, {
			height: 24,
			width: 24,
			xstyle: m.bulletIconColorNew
		}), e[11] = L) : L = e[11];
		var E;
		return e[12] === Symbol.for("react.memo_cache_sentinel") ? (E = u.jsxs(o("WAWebFlex.react").FlexColumn, { children: [
			y,
			C,
			b,
			S,
			R,
			u.jsxs(o("WAWebFlex.react").FlexRow, {
				justify: "center",
				align: "center",
				xstyle: o("WDSMargins.stylex").wdsMargins.marginTop20,
				children: [L, u.jsxs(o("WAWebText_DONOTUSE.react").TextSpan, {
					size: "13",
					color: "dark",
					xstyle: o("WDSMargins.stylex").wdsMargins.marginStart24,
					children: [s._(
						/*BTDS*/
						""
					), h && u.jsxs(u.Fragment, { children: [". ", s._(
						/*BTDS*/
						""
					)] })]
				})]
			})
		] }), e[12] = E) : E = e[12], E;
	}
	function f() {
		var e = o("react-compiler-runtime").c(3), t;
		e[0] === Symbol.for("react.memo_cache_sentinel") ? (t = [], e[0] = t) : t = e[0], c(g, t);
		var n;
		e[1] === Symbol.for("react.memo_cache_sentinel") ? (n = s._(
			/*BTDS*/
			""
		), e[1] = n) : n = e[1];
		var r;
		return e[2] === Symbol.for("react.memo_cache_sentinel") ? (r = u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			testid: "ctwa-consumer-transparency-modal-dialog",
			type: o("WAWebModal.react").ModalTheme.UpdatedDataSharing,
			onOK: o("WAWebModalManager").closeModalManager,
			okText: n,
			onOverlayClick: o("WAWebModalManager").closeModalManager,
			children: u.jsx(_, {})
		}), e[2] = r) : r = e[2], r;
	}
	function g() {
		new (o("WAWebCtwaConsumerDisclosureWamEvent")).CtwaConsumerDisclosureWamEvent({
			ctwaConsumerDisclosureVersion: 1,
			disclosureAction: o("WAWebWamEnumDisclosureAction").DISCLOSURE_ACTION.SCREEN_VIEW,
			disclosureType: o("WAWebWamEnumDisclosureType").DISCLOSURE_TYPE.INFO
		}).commit();
	}
	l.showConsumerTransparencyModalDialog = p, l.ConsumerTransparencyModalDialog = f;
}), 226);
