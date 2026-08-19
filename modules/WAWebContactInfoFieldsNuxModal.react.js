__d("WAWebContactInfoFieldsNuxModal.react", [
	"fbt",
	"WAWebFlex.react",
	"WAWebModal.react",
	"WAWebModalManager",
	"WDSButton.react",
	"WDSIconIcClose.react",
	"WDSIllustrationWdsPictoAccount.react",
	"WDSText.react",
	"react",
	"react-compiler-runtime",
	"useWAWebFocusOnMount",
	"useWAWebListener"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = {
		content: {
			rowGap: "x8a3fw1",
			width: "xh8yej3",
			$$css: !0
		},
		heroRow: {
			paddingTop: "x1p57kb1",
			paddingBottom: "x12xbjc7",
			width: "xh8yej3",
			$$css: !0
		},
		controls: {
			paddingTop: "xl7twdi",
			$$css: !0
		}
	};
	function d(e) {
		var t = o("react-compiler-runtime").c(16), n = e.onAcknowledge, a = r("useWAWebFocusOnMount")(), i;
		t[0] !== n ? (i = function() {
			o("WAWebModalManager").ModalManager.close(), n == null || n();
		}, t[0] = n, t[1] = i) : i = t[1];
		var l = i, d;
		t[2] !== n ? (d = function() {
			n == null || n();
		}, t[2] = n, t[3] = d) : d = t[3], o("useWAWebListener").useListener(o("WAWebModalManager").ModalManager, "close_modal", d);
		var m;
		t[4] === Symbol.for("react.memo_cache_sentinel") ? (m = {
			surface: "unknown",
			viewName: "contact-info-fields-nux"
		}, t[4] = m) : m = t[4];
		var p;
		t[5] === Symbol.for("react.memo_cache_sentinel") ? (p = s._(
			/*BTDS*/
			""
		), t[5] = p) : p = t[5];
		var _;
		t[6] !== l ? (_ = u.jsx(r("WDSButton.react"), {
			variant: "filled",
			type: "default",
			size: "medium",
			widthMode: "flexible",
			onPress: l,
			testid: "contact-info-fields-nux-ok-button",
			label: p
		}), t[6] = l, t[7] = _) : _ = t[7];
		var f;
		t[8] === Symbol.for("react.memo_cache_sentinel") ? (f = { className: "x10l6tqk xugynej x67dgr1" }, t[8] = f) : f = t[8];
		var g;
		t[9] === Symbol.for("react.memo_cache_sentinel") ? (g = u.jsx("div", babelHelpers.extends({}, f, { children: u.jsx(r("WDSButton.react"), {
			Icon: r("WDSIconIcClose.react"),
			variant: "borderless",
			type: "default",
			size: "medium",
			onPress: o("WAWebModalManager").closeModalManager,
			testid: "contact-info-fields-nux-close-button",
			"aria-label": s._(
				/*BTDS*/
				""
			)
		}) })), t[9] = g) : g = t[9];
		var h;
		t[10] === Symbol.for("react.memo_cache_sentinel") ? (h = u.jsx(o("WAWebFlex.react").FlexRow, {
			align: "center",
			justify: "center",
			xstyle: c.heroRow,
			children: u.jsx(r("WDSIllustrationWdsPictoAccount.react"), {})
		}), t[10] = h) : h = t[10];
		var y;
		t[11] === Symbol.for("react.memo_cache_sentinel") ? (y = u.jsx(r("WDSText.react"), {
			type: "Headline1",
			colorName: "contentDefault",
			children: s._(
				/*BTDS*/
				""
			)
		}), t[11] = y) : y = t[11];
		var C;
		t[12] === Symbol.for("react.memo_cache_sentinel") ? (C = u.jsxs(o("WAWebFlex.react").FlexColumn, {
			xstyle: c.content,
			children: [
				h,
				y,
				u.jsx(r("WDSText.react"), {
					type: "Body1",
					colorName: "contentDeemphasized",
					children: s._(
						/*BTDS*/
						""
					)
				})
			]
		}), t[12] = C) : C = t[12];
		var b;
		return t[13] !== a || t[14] !== _ ? (b = u.jsxs(o("WAWebModal.react").Modal, {
			contentRef: a,
			controlsStyle: c.controls,
			testid: "contact-info-fields-nux-modal",
			tsNavigationData: m,
			actions: _,
			children: [g, C]
		}), t[13] = a, t[14] = _, t[15] = b) : b = t[15], b;
	}
	l.default = d;
}), 226);
