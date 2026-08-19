__d("WAWebNewsletterStatusIntroPopup.react", [
	"fbt",
	"WAWebConfirmPopup.react",
	"WAWebExternalLink.react",
	"WAWebFaqUrl",
	"WAWebFlex.react",
	"WAWebFlexItem.react",
	"WAWebModalManager",
	"WAWebNewsletterStatusIntroContent",
	"WDSButton.react",
	"WDSIconIcClose.react",
	"WDSIllustrationWdsIllChannelStatus.react",
	"WDSMenuBarItem.react",
	"WDSText.react",
	"react",
	"react-compiler-runtime",
	"useWAWebFocusOnMount"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = {
		hero: {
			marginTop: "x9u28bd",
			$$css: !0
		},
		title: {
			marginTop: "x1de0gy",
			$$css: !0
		},
		row: {
			marginTop: "x1nmyh1g",
			$$css: !0
		},
		iconColumn: {
			paddingInlineStart: "x1iw51ew",
			paddingInlineEnd: "xyo0t3i",
			$$css: !0
		},
		icon: {
			color: "x14ug900",
			$$css: !0
		},
		learnMore: {
			marginTop: "x9u28bd",
			$$css: !0
		}
	};
	function d() {
		var e = o("react-compiler-runtime").c(8), t = r("useWAWebFocusOnMount")(), n = p, a;
		e[0] === Symbol.for("react.memo_cache_sentinel") ? (a = { className: "x10l6tqk x13vifvy xtijo5x x1vjfegm" }, e[0] = a) : a = e[0];
		var i;
		e[1] === Symbol.for("react.memo_cache_sentinel") ? (i = u.jsx("div", babelHelpers.extends({}, a, { children: u.jsx(r("WDSMenuBarItem.react"), {
			icon: r("WDSIconIcClose.react"),
			title: s._(
				/*BTDS*/
				""
			),
			onClick: o("WAWebModalManager").closeModalManager,
			testid: "newsletter-status-intro-close"
		}) })), e[1] = i) : i = e[1];
		var l;
		e[2] === Symbol.for("react.memo_cache_sentinel") ? (l = u.jsx(o("WAWebFlex.react").FlexRow, {
			align: "center",
			justify: "center",
			xstyle: c.hero,
			children: u.jsx(r("WAWebFlexItem.react"), { children: u.jsx(r("WDSIllustrationWdsIllChannelStatus.react"), { "aria-hidden": !0 }) })
		}), e[2] = l) : l = e[2];
		var d;
		e[3] === Symbol.for("react.memo_cache_sentinel") ? (d = u.jsx(o("WAWebFlex.react").FlexRow, {
			align: "center",
			justify: "center",
			xstyle: c.title,
			children: u.jsx(r("WDSText.react"), {
				type: "LargeTitle2",
				colorName: "contentDefault",
				textAlign: "center",
				children: s._(
					/*BTDS*/
					""
				)
			})
		}), e[3] = d) : d = e[3];
		var _;
		e[4] === Symbol.for("react.memo_cache_sentinel") ? (_ = u.jsx(o("WAWebFlex.react").FlexColumn, { children: o("WAWebNewsletterStatusIntroContent").getNewsletterStatusIntroContent().map(m) }), e[4] = _) : _ = e[4];
		var f;
		e[5] === Symbol.for("react.memo_cache_sentinel") ? (f = u.jsx(o("WAWebFlex.react").FlexRow, {
			align: "center",
			justify: "center",
			xstyle: c.learnMore,
			children: u.jsx(r("WDSButton.react"), {
				variant: "borderless",
				type: "default",
				size: "medium",
				onPress: n,
				label: s._(
					/*BTDS*/
					""
				),
				testid: "newsletter-status-intro-learn-more"
			})
		}), e[5] = f) : f = e[5];
		var g;
		return e[6] !== t ? (g = u.jsxs(o("WAWebConfirmPopup.react").ConfirmPopup, {
			ref: t,
			testid: "newsletter-status-intro-popup",
			children: [
				i,
				l,
				d,
				_,
				f
			]
		}), e[6] = t, e[7] = g) : g = e[7], g;
	}
	function m(e) {
		var t = e.Icon, n = e.description, a = e.key, i = e.title;
		return u.jsxs(o("WAWebFlex.react").FlexRow, {
			align: "center",
			xstyle: c.row,
			children: [u.jsx(r("WAWebFlexItem.react"), {
				shrink: 0,
				xstyle: c.iconColumn,
				children: u.jsx(t, {
					width: 24,
					iconXstyle: c.icon
				})
			}), u.jsxs(r("WAWebFlexItem.react"), { children: [u.jsx(r("WDSText.react"), {
				type: "Body1Emphasized",
				colorName: "contentDefault",
				children: i
			}), u.jsx(r("WDSText.react"), {
				type: "Body1",
				colorName: "contentDeemphasized",
				children: n
			})] })]
		}, a);
	}
	m.displayName = m.name + " [from " + i.id + "]";
	function p() {
		o("WAWebExternalLink.react").openExternalLink(o("WAWebFaqUrl").getNewsletterStatusIntroFaqUrl());
	}
	l.default = d;
}), 226);
