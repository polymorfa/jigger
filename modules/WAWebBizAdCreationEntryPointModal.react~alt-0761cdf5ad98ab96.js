__d("WAWebBizAdCreationEntryPointModal.react", [
	"fbt",
	"WAWebBusinessReachIcon.react",
	"WAWebConfirmPopup.react",
	"WAWebExternalLink.react",
	"WAWebFaqUrl",
	"WAWebModalManager",
	"WAWebWdsIllAdsWaIcon.react",
	"WDSIconIcPayments.react",
	"WDSIconIcTune.react",
	"WDSMargins.stylex",
	"WDSPaddings.stylex",
	"react",
	"react-compiler-runtime",
	"stylex"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react")), d = u.useState, m = { paddingInline36: {
		paddingInlineStart: "xf7qf19",
		paddingInlineEnd: "xjfo4ez",
		paddingLeft: null,
		paddingRight: null,
		$$css: !0
	} }, p = {
		chatIcon: {
			display: "x78zum5",
			justifyContent: "xl56j7k",
			$$css: !0
		},
		chatIconRefresh: {
			paddingTop: "x889kno",
			paddingInlineEnd: "xyri2b",
			paddingBottom: "x1a8lsjc",
			paddingInlineStart: "x1c1uobl",
			$$css: !0
		},
		title: {
			fontSize: "x1603h9y",
			lineHeight: "x1o2sk6j",
			textAlign: "x2b8uid",
			$$css: !0
		}
	}, _ = { grayIcon: {
		color: "xhslqc4",
		$$css: !0
	} };
	function f(e) {
		var t = o("react-compiler-runtime").c(5), n = e.children, r = e.icon, a, i;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (a = { className: "x123j3cw xs9asl8" }, i = { className: "x6s0dn4 x3nfvp2" }, t[0] = a, t[1] = i) : (a = t[0], i = t[1]);
		var l;
		return t[2] !== n || t[3] !== r ? (l = c.jsx("li", babelHelpers.extends({}, a, { children: c.jsxs("span", babelHelpers.extends({}, i, { children: [r, n] })) })), t[2] = n, t[3] = r, t[4] = l) : l = t[4], l;
	}
	function g(t) {
		var n = t.isPagelessAd, a = t.onClose, i = t.onLearnMore, l = t.onOK, u = d(!1), g = u[0], h = u[1], y = s._(
			/*BTDS*/
			""
		), C = s._(
			/*BTDS*/
			""
		), b = s._(
			/*BTDS*/
			"",
			[s._implicitParam("=m2", c.jsx(o("WAWebExternalLink.react").ExternalLink, {
				href: o("WAWebFaqUrl").getSharingBusinessInfoForAdsFaqUrl(),
				onClick: function() {
					i && i();
				},
				children: s._(
					/*BTDS*/
					""
				)
			}))]
		), v = {
			height: 25,
			iconXstyle: _.grayIcon,
			width: 25,
			xstyle: o("WDSPaddings.stylex").wdsPaddings.paddingEnd16
		}, S = [
			{
				icon: c.jsx(o("WAWebBusinessReachIcon.react").BusinessReachIcon, babelHelpers.extends({}, v)),
				text: s._(
					/*BTDS*/
					""
				)
			},
			{
				icon: c.jsx(r("WDSIconIcPayments.react"), babelHelpers.extends({}, v)),
				text: s._(
					/*BTDS*/
					""
				)
			},
			{
				icon: c.jsx(r("WDSIconIcTune.react"), babelHelpers.extends({}, v)),
				text: s._(
					/*BTDS*/
					""
				)
			}
		], R = S.map(function(e, t) {
			return c.jsx(f, {
				icon: e.icon,
				children: e.text
			}, t);
		}), L = function() {
			a && a(), o("WAWebModalManager").ModalManager.close();
		}, E = async function() {
			h(!0);
			try {
				await l();
			} finally {
				h(!1);
			}
			o("WAWebModalManager").ModalManager.close();
		}, k = c.jsx(o("WAWebWdsIllAdsWaIcon.react").WdsIllAdsWaIcon, { xstyle: [p.chatIcon, p.chatIconRefresh] });
		return c.jsxs(o("WAWebConfirmPopup.react").ConfirmPopup, {
			testid: "advertise-modal",
			tsNavigationData: {
				surface: "unknown",
				viewName: "ad-creation-entry"
			},
			onOK: E,
			okDisabled: g,
			okSpinner: g,
			okText: s._(
				/*BTDS*/
				""
			),
			onCancel: L,
			onOverlayClick: L,
			cancelText: s._(
				/*BTDS*/
				""
			),
			children: [k, c.jsxs("div", {
				className: "x1f6kntn xf4yft x1o2sk6j x1yc453h xh8yej3",
				children: [
					c.jsx("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(p.title, o("WDSMargins.stylex").wdsMargins.margin16, m.paddingInline36), { children: y })),
					c.jsx("p", { children: C }),
					c.jsx("ul", babelHelpers.extends({}, e.props(o("WDSPaddings.stylex").wdsPaddings.paddingHor16, o("WDSMargins.stylex").wdsMargins.marginVer20), { children: R })),
					n === !0 && c.jsx("p", babelHelpers.extends({}, (e || (e = r("stylex"))).props(o("WDSMargins.stylex").wdsMargins.marginVer32), { children: b }))
				]
			})]
		});
	}
	g.displayName = g.name + " [from " + i.id + "]", l.default = g;
}), 226);
