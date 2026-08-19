__d("WAWebManageProductStatusBanner.react", [
	"fbt",
	"WAWebBizAppealProductPopup.react",
	"WAWebBizCatalogGatingUtils",
	"WAWebBizCommerceConstants",
	"WAWebClickableLink.react",
	"WAWebDrawerContext",
	"WAWebExternalLink.react",
	"WAWebFaqUrl",
	"WAWebFlex.react",
	"WAWebModalManager",
	"WAWebProductCatalogContext",
	"WAWebProductCollection",
	"WAWebText_DONOTUSE.react",
	"WDSIconIcInfo.react",
	"WDSIconIcVisibilityOff.react",
	"WDSMargins.stylex",
	"fbs",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react")), d = {
		paddingBlock18: {
			paddingTop: "x109j2v6",
			paddingBottom: "x1hhzuzn",
			$$css: !0
		},
		paddingInline30: {
			paddingInlineStart: "x162tt16",
			paddingInlineEnd: "x5zjp28",
			$$css: !0
		}
	}, m = { root: {
		lineHeight: "x1fc57z9",
		backgroundColor: "x16w0wmm",
		$$css: !0
	} }, p = c.jsxs(o("WAWebFlex.react").FlexRow, {
		className: (e || (e = r("stylex")))([
			m.root,
			d.paddingBlock18,
			d.paddingInline30,
			o("WDSMargins.stylex").wdsMargins.marginBottom0
		]),
		children: [c.jsx(o("WAWebFlex.react").FlexItem, {
			className: "x78zum5 x3psx0u x6s0dn4",
			children: c.jsx(r("WDSIconIcInfo.react"), {})
		}), c.jsx(o("WAWebFlex.react").FlexItem, {
			className: "xymharo",
			children: c.jsx(o("WAWebText_DONOTUSE.react").TextDiv, {
				testid: "product-sanctioned",
				children: s._(
					/*BTDS*/
					"",
					[s._param("commerce_policy_link", c.jsx(r("WAWebClickableLink.react"), {
						href: o("WAWebFaqUrl").getWhatsappBusinessCommercePolicyUrl(),
						onClick: g,
						children: r("fbs")._(
							/*BTDS*/
							""
						)
					}))]
				)
			})
		})]
	});
	function _(t) {
		var n = t.product;
		if (n.isSanctioned === !0 && o("WAWebBizCatalogGatingUtils").isCountryOfOriginEnabled()) return p;
		function a() {
			o("WAWebModalManager").ModalManager.open(c.jsx(o("WAWebDrawerContext").DrawerContext.Consumer, { children: function(t) {
				return c.jsx(r("WAWebBizAppealProductPopup.react"), {
					product: n,
					sessionId: o("WAWebProductCatalogContext").getProductCatalogSessionId(t)
				});
			} }));
		}
		var i = c.jsx(r("WAWebClickableLink.react"), {
			href: o("WAWebBizCommerceConstants").WA_COMMERCE_POLICY_URL,
			onClick: f,
			children: s._(
				/*BTDS*/
				""
			)
		});
		if (n.reviewStatus === o("WAWebProductCollection").PRODUCT_REVIEW_STATUS.APPROVED) return n.isHidden ? c.jsxs(o("WAWebFlex.react").FlexRow, {
			className: (e || (e = r("stylex")))([
				m.root,
				d.paddingBlock18,
				d.paddingInline30,
				o("WDSMargins.stylex").wdsMargins.marginBottom0
			]),
			children: [c.jsx(o("WAWebFlex.react").FlexItem, {
				className: "x78zum5 x3psx0u x6s0dn4",
				children: c.jsx(r("WDSIconIcVisibilityOff.react"), {})
			}), c.jsx(o("WAWebFlex.react").FlexItem, {
				className: "xymharo",
				children: c.jsx(o("WAWebText_DONOTUSE.react").TextDiv, { children: s._(
					/*BTDS*/
					""
				) })
			})]
		}) : null;
		if (n.reviewStatus === o("WAWebProductCollection").PRODUCT_REVIEW_STATUS.REJECTED) {
			if (n.canAppeal === !0) {
				var l = s._(
					/*BTDS*/
					"",
					[s._param("learn_more_link", i)]
				), u = c.jsx(r("WAWebClickableLink.react"), {
					onClick: a,
					testid: "product-appeal-button",
					children: s._(
						/*BTDS*/
						""
					)
				}), _ = c.jsx("span", {
					className: "x1rg5ohu x1f6kntn x1hmvnq2",
					tabIndex: 0,
					children: s._(
						/*BTDS*/
						"",
						[s._param("request_review_link", u)]
					)
				});
				return c.jsxs("div", {
					className: "x1fc57z9 x16w0wmm",
					"data-testid": "product-appeal-rejected-initial-review",
					children: [c.jsx("div", {
						className: "x78zum5 x3psx0u x6s0dn4",
						children: c.jsx(r("WDSIconIcInfo.react"), {})
					}), c.jsxs("div", {
						className: "xymharo",
						children: [l, _]
					})]
				});
			}
			var g = s._(
				/*BTDS*/
				"",
				[s._param("learn_more_link", i)]
			);
			return c.jsx("div", {
				className: "x1fc57z9 x16w0wmm",
				"data-testid": "product-appeal-rejected-final",
				children: g
			});
		} else if (n.reviewStatus === o("WAWebProductCollection").PRODUCT_REVIEW_STATUS.NO_REVIEW || n.reviewStatus === o("WAWebProductCollection").PRODUCT_REVIEW_STATUS.OUTDATED) {
			var h = n.isHidden ? s._(
				/*BTDS*/
				"",
				[s._param("learn_more_link", i)]
			) : s._(
				/*BTDS*/
				"",
				[s._param("learn_more_link", i)]
			);
			return c.jsx("div", {
				className: "x1fc57z9 x16w0wmm x109j2v6 x1hhzuzn x162tt16 x5zjp28",
				"data-testid": "product-appeal-pending-initial-review",
				children: h
			});
		} else if (n.canAppeal === !1) {
			var y = s._(
				/*BTDS*/
				""
			);
			return c.jsx("div", {
				className: "x1fc57z9 x16w0wmm",
				"data-testid": "product-appeal-pending-appeal",
				children: y
			});
		}
		return null;
	}
	_.displayName = _.name + " [from " + i.id + "]";
	function f(e) {
		e.preventDefault(), o("WAWebExternalLink.react").openExternalLink(o("WAWebBizCommerceConstants").WA_COMMERCE_POLICY_URL);
	}
	function g(e) {
		e.preventDefault(), o("WAWebExternalLink.react").openExternalLink(o("WAWebFaqUrl").getWhatsappBusinessCommercePolicyUrl());
	}
	l.default = _;
}), 226);
