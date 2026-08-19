__d("WAWebManageNewCatalogDrawer.react", [
	"fbt",
	"WAWebActionToast.react",
	"WAWebBizCommerceConstants",
	"WAWebCellFrame.react",
	"WAWebClickableLink.react",
	"WAWebDrawer.react",
	"WAWebDrawerBody.react",
	"WAWebDrawerContext",
	"WAWebDrawerHeader.react",
	"WAWebDrawerSection.react",
	"WAWebExternalLink.react",
	"WAWebManageAddItemCta.react",
	"WAWebNoop",
	"WAWebProductCatalogLogEvents",
	"WAWebSpinner.react",
	"WAWebText.react",
	"WAWebText_DONOTUSE.react",
	"WAWebToast.react",
	"WAWebToastManager",
	"WDSMargins.stylex",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l, s) {
	var e = ["ref"], u, c, d = c || (c = o("react")), m = c.useEffect, p = {
		paddingTop10: {
			paddingTop: "x889kno",
			$$css: !0
		},
		marginBlock15: {
			marginTop: "xcxhlts",
			marginBottom: "x1fqp7bg",
			$$css: !0
		}
	}, _ = {
		placeholderContainer: {
			width: "xh8yej3",
			borderTopWidth: "x178xt8z",
			borderTopStyle: "x13fuv20",
			borderTopColor: "xx42vgk",
			$$css: !0
		},
		addItemPlaceholder: {
			borderTopStyle: "x1ejq31n",
			$$css: !0
		}
	}, f = "https://www.facebook.com/legal/terms", g = "https://www.facebook.com/policies/commerce", h = function() {
		o("WAWebToastManager").ToastManager.open(d.jsx(o("WAWebToast.react").Toast, {
			msg: s._(
				/*BTDS*/
				""
			),
			id: o("WAWebActionToast.react").genId()
		}));
	};
	function y(t) {
		var n = t.ref, a = babelHelpers.objectWithoutPropertiesLoose(t, e), i = a.catalogContext, l = a.isCreatingCatalogFn, c = a.onAddProductClick, y = a.onBack, S = l();
		m(function() {
			o("WAWebProductCatalogLogEvents").logCatalogOnboardImpression(i);
		}, []);
		var R = d.jsx("div", { className: "x1n2onr6 xo5x3gg xnxb3zj x1vkjmz6 xrxyp3c xv0oops x1isl5vh xn8zj9a" }), L = d.jsx(r("WAWebClickableLink.react"), {
			href: f,
			onClick: C,
			children: s._(
				/*BTDS*/
				""
			)
		}), E = d.jsx(r("WAWebClickableLink.react"), {
			href: g,
			onClick: b,
			children: s._(
				/*BTDS*/
				""
			)
		}), k = d.jsx(r("WAWebClickableLink.react"), {
			href: o("WAWebBizCommerceConstants").WA_COMMERCE_POLICY_URL,
			onClick: v,
			children: s._(
				/*BTDS*/
				""
			)
		}), I = s._(
			/*BTDS*/
			"",
			[
				s._param("fb_product_link", L),
				s._param("fb_commerce_link", E),
				s._param("wa_commerce_policy_link", k)
			]
		), T = {
			0: "",
			1: "x47corl xbyyjgo"
		}[!!S << 0], D = S ? d.jsx("div", {
			className: "x10l6tqk xh0rhid xbudbmw xupqr0c x11lhmoz",
			children: d.jsx(o("WAWebSpinner.react").Spinner, {
				size: 50,
				stroke: 3
			})
		}) : null, x = S ? d.jsx(r("WAWebManageAddItemCta.react"), {
			onClick: r("WAWebNoop"),
			theme: "default",
			idle: !!S,
			testid: "add-item"
		}) : d.jsx(o("WAWebDrawerContext").DrawerContext.Consumer, { children: function(t) {
			return d.jsx(r("WAWebManageAddItemCta.react"), {
				onClick: function() {
					c().catch(h);
				},
				theme: "default",
				idle: !1,
				testid: "add-item"
			});
		} });
		return d.jsxs(r("WAWebDrawer.react"), {
			ref: n,
			tsNavigationData: {
				surface: "unknown",
				viewName: "catalog-new"
			},
			children: [d.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
				title: s._(
					/*BTDS*/
					""
				),
				type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
				onBack: y
			}), d.jsx(r("WAWebDrawerBody.react"), {
				className: T,
				children: d.jsxs(r("WAWebDrawerSection.react"), {
					theme: "padding-small",
					animation: !1,
					children: [
						D,
						d.jsx(o("WAWebText.react").WAWebTextTitle, { children: s._(
							/*BTDS*/
							""
						) }),
						x,
						d.jsx(o("WAWebText_DONOTUSE.react").TextDiv, {
							theme: "plain",
							children: I
						}),
						d.jsxs("div", babelHelpers.extends({}, (u || (u = r("stylex"))).props([
							_.placeholderContainer,
							p.paddingTop10,
							o("WDSMargins.stylex").wdsMargins.marginVer20
						]), { children: [
							d.jsx(r("WAWebCellFrame.react"), {
								theme: "add-item-placeholder",
								image: R,
								customImage: !0,
								className: u([_.addItemPlaceholder, p.marginBlock15]),
								primary: "",
								secondary: "",
								idle: !0
							}),
							d.jsx("div", { className: "xthe8de x1vq0v4p x178xt8z x13fuv20 xx42vgk" }),
							d.jsx(r("WAWebCellFrame.react"), {
								theme: "add-item-placeholder",
								image: R,
								customImage: !0,
								className: u([_.addItemPlaceholder, p.marginBlock15]),
								primary: "",
								secondary: "",
								idle: !0
							}),
							d.jsx("div", { className: "xthe8de x1vq0v4p x178xt8z x13fuv20 xx42vgk" })
						] }))
					]
				})
			})]
		}, "catalog-link-drawer");
	}
	y.displayName = y.name + " [from " + i.id + "]";
	function C(e) {
		e.preventDefault(), o("WAWebExternalLink.react").openExternalLink(f);
	}
	function b(e) {
		e.preventDefault(), o("WAWebExternalLink.react").openExternalLink(g);
	}
	function v(e) {
		e.preventDefault(), o("WAWebExternalLink.react").openExternalLink(o("WAWebBizCommerceConstants").WA_COMMERCE_POLICY_URL);
	}
	l.default = y;
}), 226);
