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
	"react-compiler-runtime",
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
		var n = o("react-compiler-runtime").c(33), a = t.product;
		if (a.isSanctioned === !0 && o("WAWebBizCatalogGatingUtils").isCountryOfOriginEnabled()) return p;
		var i;
		n[0] !== a ? (i = function() {
			o("WAWebModalManager").ModalManager.open(c.jsx(o("WAWebDrawerContext").DrawerContext.Consumer, { children: function(t) {
				return c.jsx(r("WAWebBizAppealProductPopup.react"), {
					product: a,
					sessionId: o("WAWebProductCatalogContext").getProductCatalogSessionId(t)
				});
			} }));
		}, n[0] = a, n[1] = i) : i = n[1];
		var l = i, u;
		n[2] === Symbol.for("react.memo_cache_sentinel") ? (u = c.jsx(r("WAWebClickableLink.react"), {
			href: o("WAWebBizCommerceConstants").WA_COMMERCE_POLICY_URL,
			onClick: f,
			children: s._(
				/*BTDS*/
				""
			)
		}), n[2] = u) : u = n[2];
		var _ = u;
		if (a.reviewStatus === o("WAWebProductCollection").PRODUCT_REVIEW_STATUS.APPROVED) {
			if (a.isHidden) {
				var g;
				n[3] === Symbol.for("react.memo_cache_sentinel") ? (g = (e || (e = r("stylex")))([
					m.root,
					d.paddingBlock18,
					d.paddingInline30,
					o("WDSMargins.stylex").wdsMargins.marginBottom0
				]), n[3] = g) : g = n[3];
				var h;
				n[4] === Symbol.for("react.memo_cache_sentinel") ? (h = c.jsx(o("WAWebFlex.react").FlexItem, {
					className: "x78zum5 x3psx0u x6s0dn4",
					children: c.jsx(r("WDSIconIcVisibilityOff.react"), {})
				}), n[4] = h) : h = n[4];
				var y;
				n[5] === Symbol.for("react.memo_cache_sentinel") ? (y = "xymharo", n[5] = y) : y = n[5];
				var C;
				n[6] === Symbol.for("react.memo_cache_sentinel") ? (C = c.jsx(o("WAWebFlex.react").FlexItem, {
					className: y,
					children: c.jsx(o("WAWebText_DONOTUSE.react").TextDiv, { children: s._(
						/*BTDS*/
						""
					) })
				}), n[6] = C) : C = n[6];
				var b;
				return n[7] !== g ? (b = c.jsxs(o("WAWebFlex.react").FlexRow, {
					className: g,
					children: [h, C]
				}), n[7] = g, n[8] = b) : b = n[8], b;
			}
			return null;
		}
		if (a.reviewStatus === o("WAWebProductCollection").PRODUCT_REVIEW_STATUS.REJECTED) {
			if (a.canAppeal === !0) {
				var v;
				n[9] === Symbol.for("react.memo_cache_sentinel") ? (v = s._(
					/*BTDS*/
					"",
					[s._param("learn_more_link", _)]
				), n[9] = v) : v = n[9];
				var S = v, R;
				n[10] === Symbol.for("react.memo_cache_sentinel") ? (R = s._(
					/*BTDS*/
					""
				), n[10] = R) : R = n[10];
				var L;
				n[11] !== l ? (L = c.jsx(r("WAWebClickableLink.react"), {
					onClick: l,
					testid: "product-appeal-button",
					children: R
				}), n[11] = l, n[12] = L) : L = n[12];
				var E = L, k;
				n[13] === Symbol.for("react.memo_cache_sentinel") ? (k = { className: "x1rg5ohu x1f6kntn x1hmvnq2" }, n[13] = k) : k = n[13];
				var I;
				n[14] !== E ? (I = s._(
					/*BTDS*/
					"",
					[s._param("request_review_link", E)]
				), n[14] = E, n[15] = I) : I = n[15];
				var T;
				n[16] !== k || n[17] !== I ? (T = c.jsx("span", babelHelpers.extends({}, k, {
					tabIndex: 0,
					children: I
				})), n[16] = k, n[17] = I, n[18] = T) : T = n[18];
				var D = T, x;
				n[19] === Symbol.for("react.memo_cache_sentinel") ? (x = { className: "x1fc57z9 x16w0wmm" }, n[19] = x) : x = n[19];
				var $, P;
				n[20] === Symbol.for("react.memo_cache_sentinel") ? ($ = c.jsx("div", {
					className: "x78zum5 x3psx0u x6s0dn4",
					children: c.jsx(r("WDSIconIcInfo.react"), {})
				}), P = { className: "xymharo" }, n[20] = $, n[21] = P) : ($ = n[20], P = n[21]);
				var N;
				return n[22] !== D ? (N = c.jsxs("div", babelHelpers.extends({}, x, {
					"data-testid": "product-appeal-rejected-initial-review",
					children: [$, c.jsxs("div", babelHelpers.extends({}, P, { children: [S, D] }))]
				})), n[22] = D, n[23] = N) : N = n[23], N;
			}
			var M;
			n[24] === Symbol.for("react.memo_cache_sentinel") ? (M = s._(
				/*BTDS*/
				"",
				[s._param("learn_more_link", _)]
			), n[24] = M) : M = n[24];
			var w = M, A;
			return n[25] === Symbol.for("react.memo_cache_sentinel") ? (A = c.jsx("div", {
				className: "x1fc57z9 x16w0wmm",
				"data-testid": "product-appeal-rejected-final",
				children: w
			}), n[25] = A) : A = n[25], A;
		} else if (a.reviewStatus === o("WAWebProductCollection").PRODUCT_REVIEW_STATUS.NO_REVIEW || a.reviewStatus === o("WAWebProductCollection").PRODUCT_REVIEW_STATUS.OUTDATED) {
			var F;
			n[26] !== a.isHidden ? (F = a.isHidden ? s._(
				/*BTDS*/
				"",
				[s._param("learn_more_link", _)]
			) : s._(
				/*BTDS*/
				"",
				[s._param("learn_more_link", _)]
			), n[26] = a.isHidden, n[27] = F) : F = n[27];
			var O = F, B;
			n[28] === Symbol.for("react.memo_cache_sentinel") ? (B = { className: "x1fc57z9 x16w0wmm x109j2v6 x1hhzuzn x162tt16 x5zjp28" }, n[28] = B) : B = n[28];
			var W;
			return n[29] !== O ? (W = c.jsx("div", babelHelpers.extends({}, B, {
				"data-testid": "product-appeal-pending-initial-review",
				children: O
			})), n[29] = O, n[30] = W) : W = n[30], W;
		} else if (a.canAppeal === !1) {
			var q;
			n[31] === Symbol.for("react.memo_cache_sentinel") ? (q = s._(
				/*BTDS*/
				""
			), n[31] = q) : q = n[31];
			var U = q, V;
			return n[32] === Symbol.for("react.memo_cache_sentinel") ? (V = c.jsx("div", {
				className: "x1fc57z9 x16w0wmm",
				"data-testid": "product-appeal-pending-appeal",
				children: U
			}), n[32] = V) : V = n[32], V;
		}
		return null;
	}
	function f(e) {
		e.preventDefault(), o("WAWebExternalLink.react").openExternalLink(o("WAWebBizCommerceConstants").WA_COMMERCE_POLICY_URL);
	}
	function g(e) {
		e.preventDefault(), o("WAWebExternalLink.react").openExternalLink(o("WAWebFaqUrl").getWhatsappBusinessCommercePolicyUrl());
	}
	l.default = _;
}), 226);
