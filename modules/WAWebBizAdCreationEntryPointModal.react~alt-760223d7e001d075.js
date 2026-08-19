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
	"asyncToGeneratorRuntime",
	"react",
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
		var t = e.children, n = e.icon;
		return c.jsx("li", {
			className: "x123j3cw xs9asl8",
			children: c.jsxs("span", {
				className: "x6s0dn4 x3nfvp2",
				children: [n, t]
			})
		});
	}
	f.displayName = f.name + " [from " + i.id + "]";
	function g(t) {
		var a = t.isPagelessAd, i = t.onClose, l = t.onLearnMore, u = t.onOK, g = d(!1), h = g[0], y = g[1], C = s._(
			/*BTDS*/
			""
		), b = s._(
			/*BTDS*/
			""
		), v = s._(
			/*BTDS*/
			"",
			[s._implicitParam("=m2", c.jsx(o("WAWebExternalLink.react").ExternalLink, {
				href: o("WAWebFaqUrl").getSharingBusinessInfoForAdsFaqUrl(),
				onClick: function() {
					l && l();
				},
				children: s._(
					/*BTDS*/
					""
				)
			}))]
		), S = {
			height: 25,
			iconXstyle: _.grayIcon,
			width: 25,
			xstyle: o("WDSPaddings.stylex").wdsPaddings.paddingEnd16
		}, R = [
			{
				icon: c.jsx(o("WAWebBusinessReachIcon.react").BusinessReachIcon, babelHelpers.extends({}, S)),
				text: s._(
					/*BTDS*/
					""
				)
			},
			{
				icon: c.jsx(r("WDSIconIcPayments.react"), babelHelpers.extends({}, S)),
				text: s._(
					/*BTDS*/
					""
				)
			},
			{
				icon: c.jsx(r("WDSIconIcTune.react"), babelHelpers.extends({}, S)),
				text: s._(
					/*BTDS*/
					""
				)
			}
		], L = R.map(function(e, t) {
			return c.jsx(f, {
				icon: e.icon,
				children: e.text
			}, t);
		}), E = function() {
			i && i(), o("WAWebModalManager").ModalManager.close();
		}, k = (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				y(!0);
				try {
					yield u();
				} finally {
					y(!1);
				}
				o("WAWebModalManager").ModalManager.close();
			});
			return function() {
				return e.apply(this, arguments);
			};
		})(), I = c.jsx(o("WAWebWdsIllAdsWaIcon.react").WdsIllAdsWaIcon, { xstyle: [p.chatIcon, p.chatIconRefresh] });
		return c.jsxs(o("WAWebConfirmPopup.react").ConfirmPopup, {
			testid: "advertise-modal",
			tsNavigationData: {
				surface: "unknown",
				viewName: "ad-creation-entry"
			},
			onOK: k,
			okDisabled: h,
			okSpinner: h,
			okText: s._(
				/*BTDS*/
				""
			),
			onCancel: E,
			onOverlayClick: E,
			cancelText: s._(
				/*BTDS*/
				""
			),
			children: [I, c.jsxs("div", {
				className: "x1f6kntn xf4yft x1o2sk6j x1yc453h xh8yej3",
				children: [
					c.jsx("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(p.title, o("WDSMargins.stylex").wdsMargins.margin16, m.paddingInline36), { children: C })),
					c.jsx("p", { children: b }),
					c.jsx("ul", babelHelpers.extends({}, e.props(o("WDSPaddings.stylex").wdsPaddings.paddingHor16, o("WDSMargins.stylex").wdsMargins.marginVer20), { children: L })),
					a === !0 && c.jsx("p", babelHelpers.extends({}, (e || (e = r("stylex"))).props(o("WDSMargins.stylex").wdsMargins.marginVer32), { children: v }))
				]
			})]
		});
	}
	g.displayName = g.name + " [from " + i.id + "]", l.default = g;
}), 226);
