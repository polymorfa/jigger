__d("WAWebContactManagerNuxModal.react", [
	"fbt",
	"WAWebConfirmPopup.react",
	"WAWebFlex.react",
	"WAWebFlexItem.react",
	"WAWebModalManager",
	"WDSButton.react",
	"WDSIconIcClose.react",
	"WDSIconIcContacts.react",
	"WDSIconIcDescription.react",
	"WDSIllustrationWdsSmbIllStartAChat.react",
	"WDSText.react",
	"react",
	"react-compiler-runtime",
	"useWAWebFocusOnMount",
	"useWAWebListener"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = {
		root: {
			position: "x1n2onr6",
			$$css: !0
		},
		closeButton: {
			position: "x10l6tqk",
			top: "x13vifvy",
			insetInlineEnd: "xtijo5x",
			left: null,
			right: null,
			$$css: !0
		},
		illustrationRow: {
			marginTop: "x9u28bd",
			$$css: !0
		},
		header: {
			marginTop: "x9u28bd",
			textAlign: "x2b8uid",
			whiteSpace: "xuxw1ft",
			$$css: !0
		},
		content: {
			boxSizing: "x9f619",
			color: "xhslqc4",
			marginTop: "x98l61r",
			paddingInlineStart: "xb0esv5",
			paddingInlineEnd: "xyo0t3i",
			$$css: !0
		},
		contentItemRow: {
			marginTop: "x1nmyh1g",
			$$css: !0
		},
		ctaRow: {
			marginBottom: "x14mdic9",
			marginTop: "x1q9ymp4",
			$$css: !0
		},
		ctaButton: {
			paddingInlineStart: "x1ivwiv9",
			paddingInlineEnd: "x1arroq",
			width: "xqyf9gi",
			$$css: !0
		},
		icon: {
			color: "xhslqc4",
			$$css: !0
		}
	};
	function d(e) {
		var t = o("react-compiler-runtime").c(17), n = r("useWAWebFocusOnMount")(), a;
		t[0] !== e ? (a = function() {
			o("WAWebModalManager").ModalManager.close(), e.onAcknowledge == null || e.onAcknowledge();
		}, t[0] = e, t[1] = a) : a = t[1];
		var i = a, l;
		t[2] !== e ? (l = function() {
			e.onAcknowledge == null || e.onAcknowledge();
		}, t[2] = e, t[3] = l) : l = t[3], o("useWAWebListener").useListener(o("WAWebModalManager").ModalManager, "close_modal", l);
		var d;
		t[4] === Symbol.for("react.memo_cache_sentinel") ? (d = {
			Icon: r("WDSIconIcContacts.react"),
			description: s._(
				/*BTDS*/
				""
			),
			key: "lead-tracking"
		}, t[4] = d) : d = t[4];
		var p;
		t[5] === Symbol.for("react.memo_cache_sentinel") ? (p = [d, {
			Icon: r("WDSIconIcDescription.react"),
			description: s._(
				/*BTDS*/
				""
			),
			key: "contact-details"
		}], t[5] = p) : p = t[5];
		var _ = p, f;
		t[6] === Symbol.for("react.memo_cache_sentinel") ? (f = {
			surface: "unknown",
			viewName: "customer-manager-intro-nux"
		}, t[6] = f) : f = t[6];
		var g;
		t[7] === Symbol.for("react.memo_cache_sentinel") ? (g = u.jsx(r("WDSButton.react"), {
			Icon: r("WDSIconIcClose.react"),
			"aria-label": s._(
				/*BTDS*/
				""
			),
			onPress: o("WAWebModalManager").closeModalManager,
			size: "medium",
			testid: "customer-manager-intro-nux-close-button",
			variant: "borderless",
			xstyle: c.closeButton
		}), t[7] = g) : g = t[7];
		var h;
		t[8] === Symbol.for("react.memo_cache_sentinel") ? (h = u.jsx(o("WAWebFlex.react").FlexRow, {
			align: "center",
			justify: "center",
			xstyle: c.illustrationRow,
			children: u.jsx(r("WAWebFlexItem.react"), { children: u.jsx(r("WDSIllustrationWdsSmbIllStartAChat.react"), {}) })
		}), t[8] = h) : h = t[8];
		var y;
		t[9] === Symbol.for("react.memo_cache_sentinel") ? (y = u.jsx(o("WAWebFlex.react").FlexRow, {
			align: "center",
			justify: "center",
			children: u.jsx(r("WAWebFlexItem.react"), {
				xstyle: c.header,
				children: u.jsx(r("WDSText.react"), {
					type: "Headline2",
					colorName: "contentDefault",
					children: s._(
						/*BTDS*/
						""
					)
				})
			})
		}), t[9] = y) : y = t[9];
		var C;
		t[10] === Symbol.for("react.memo_cache_sentinel") ? (C = u.jsx(o("WAWebFlex.react").FlexColumn, {
			xstyle: c.content,
			children: _.map(m)
		}), t[10] = C) : C = t[10];
		var b;
		t[11] === Symbol.for("react.memo_cache_sentinel") ? (b = s._(
			/*BTDS*/
			""
		), t[11] = b) : b = t[11];
		var v;
		t[12] !== i ? (v = u.jsxs(o("WAWebFlex.react").FlexColumn, {
			align: "center",
			xstyle: c.root,
			children: [
				g,
				h,
				y,
				C,
				u.jsx(o("WAWebFlex.react").FlexRow, {
					align: "center",
					justify: "center",
					xstyle: c.ctaRow,
					children: u.jsx(r("WDSButton.react"), {
						label: b,
						onPress: i,
						size: "small",
						testid: "popup-controls-ok",
						xstyle: c.ctaButton
					})
				})
			]
		}), t[12] = i, t[13] = v) : v = t[13];
		var S;
		return t[14] !== n || t[15] !== v ? (S = u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			ref: n,
			testid: "customer-manager-intro-nux-modal",
			tsNavigationData: f,
			children: v
		}), t[14] = n, t[15] = v, t[16] = S) : S = t[16], S;
	}
	function m(e) {
		var t = e.Icon, n = e.description, a = e.key;
		return u.jsxs(o("WAWebFlex.react").FlexRow, {
			align: "center",
			xstyle: c.contentItemRow,
			children: [u.jsx(r("WAWebFlexItem.react"), {
				shrink: 0,
				className: "x1iw51ew xyo0t3i",
				children: u.jsx(t, {
					width: 20,
					height: 20,
					iconXstyle: c.icon
				})
			}), u.jsx(r("WAWebFlexItem.react"), { children: u.jsx(r("WDSText.react"), {
				type: "Body2",
				colorName: "contentDefault",
				children: n
			}) })]
		}, a);
	}
	m.displayName = m.name + " [from " + i.id + "]", l.default = d;
}), 226);
