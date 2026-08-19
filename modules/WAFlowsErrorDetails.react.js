__d("WAFlowsErrorDetails.react", [
	"fbt",
	"ReactRouterDOM",
	"WAFlowsEmbeddedLink.react",
	"WAFlowsEntryPointControllerContext.react",
	"WAFlowsEnvContext.react",
	"WAFlowsError",
	"WAFlowsIcon.react",
	"WAFlowsOpenExternalURI",
	"WAFlowsStateProvider.react",
	"WAFlowsText.react",
	"WDSFlex.stylex",
	"WDSMargins.stylex",
	"WDSNativeResponsiveWrapper.react",
	"WDSPaddings.stylex",
	"react",
	"stylex",
	"tryParseJSONMixed"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u, c = u || (u = o("react")), d = u.useContext, m = {
		root: {
			height: "x5yr21d",
			width: "x1t0p1hu",
			$$css: !0
		},
		rootTopAligned: {
			paddingTop: "x1b58sdr",
			paddingBottom: "xmnamis",
			justifyContent: "xlqzeqv",
			$$css: !0
		},
		iconError: {
			backgroundColor: "xk0ssx3",
			$$css: !0
		},
		learnMoreLink: {
			fontWeight: "x10vqnp0",
			lineHeight: "xl2ypbo",
			letterSpacing: "x12oo3zp",
			whiteSpace: "xuxw1ft",
			minHeight: "x65nank",
			fontSize: "xrv4cvt",
			paddingTop: "xexx8yu",
			paddingInlineEnd: "xyri2b",
			paddingBottom: "x18d9i69",
			paddingInlineStart: "x1c1uobl",
			$$css: !0
		},
		responseContainer: {
			boxSizing: "x9f619",
			width: "xh8yej3",
			wordBreak: "x13faqbe",
			backgroundColor: "x16w0wmm",
			borderStartStartRadius: "x1rajyc1",
			borderStartEndRadius: "x1qndgat",
			borderEndEndRadius: "x1kprl8i",
			borderEndStartRadius: "x13matbc",
			rowGap: "x1fc8kun",
			$$css: !0
		},
		noVerticalMargin: {
			marginTop: "xdj266r",
			marginBottom: "xat24cr",
			$$css: !0
		},
		responseTextColor: {
			color: "x14ug900",
			$$css: !0
		},
		fullWidth: {
			width: "xh8yej3",
			$$css: !0
		}
	};
	function p(t) {
		var n = t.error, a = t.retryDataExchangeAction, i = o("WAFlowsEntryPointControllerContext.react").useWAFlowsEntryPointController(), l = i.actionOverrides, u = i.invoke, p = d(o("WAFlowsStateProvider.react").FlowStateDispatchContext), f = o("ReactRouterDOM").useHistory(), g = o("WAFlowsEnvContext.react").useWAFlowsEnv(), R = g.env, L = C(n), E = b(n), k = v(n), I = S(n), T = I != null ? I : k, D = y(n), x = D.endsWith(".") ? D : s._(
			/*BTDS*/
			"",
			[s._param("Error message", D)]
		), $ = T != null && T.trim().length > 0 || E != null;
		return c.jsxs("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props([
			m.root,
			o("WDSFlex.stylex").wdsFlex.flexColumn,
			o("WDSFlex.stylex").wdsFlex.alignCenter,
			$ ? m.rootTopAligned : o("WDSFlex.stylex").wdsFlex.justifyCenter
		]), { children: [
			c.jsx(r("WAFlowsIcon.react"), {
				id: "waf_error",
				altText: s._(
					/*BTDS*/
					""
				),
				xstyle: [m.iconError, o("WDSMargins.stylex").wdsMargins.marginBottom16],
				responsive: !1,
				"data-testid": void 0
			}),
			n != null && c.jsx(o("WAFlowsText.react").WAFlowsText, {
				textAlign: "center",
				type: "body",
				fontWeight: "bold",
				text: h(n).toString(),
				"data-testid": void 0
			}),
			c.jsxs(o("WDSNativeResponsiveWrapper.react").WDSNativeResponsiveWrapper, {
				type: "body",
				xstyle: m.fullWidth,
				children: [
					c.jsxs("p", {
						className: "x10vqnp0 x197yli1 x8t4l1e x193rm8m x2b8uid x14ug900 x11xsogm x1vvkbs x1n2onr6 xh8yej3 xj0a0fe x9f619 x104kibb x1ua5tub x1epdd7z x13faqbe xdj266r x14z9mp xat24cr x1lziwak x126k92a",
						"data-testid": void 0,
						children: [
							x,
							"\xA0",
							L != null && c.jsx(o("WAFlowsEmbeddedLink.react").WAFlowsEmbeddedLink, {
								onClick: function() {
									return void o("WAFlowsOpenExternalURI").openExternalURI(L, u);
								},
								text: s._(
									/*BTDS*/
									""
								),
								inline: !0,
								responsiveFont: !1,
								xstyle: m.learnMoreLink,
								dataTestId: "waf-error-details-learn-more-link"
							})
						]
					}),
					a && c.jsx(o("WAFlowsEmbeddedLink.react").WAFlowsEmbeddedLink, {
						dataTestId: "waf-error-details-retry",
						text: s._(
							/*BTDS*/
							""
						),
						onClick: function() {
							p(l.dataExchangeActionHandler(a, f, !0, R));
						}
					}),
					$ && c.jsxs("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(m.responseContainer, o("WDSFlex.stylex").wdsFlex.flexColumn, o("WDSMargins.stylex").wdsMargins.marginTop16, o("WDSPaddings.stylex").wdsPaddings.padding16), { children: [E != null && c.jsxs("div", { children: [c.jsx(o("WAFlowsText.react").WAFlowsText, {
						type: "body",
						fontWeight: "bold",
						text: s._(
							/*BTDS*/
							""
						).toString(),
						xstyle: m.responseTextColor
					}), c.jsx(o("WAFlowsText.react").WAFlowsText, {
						type: "body-small",
						xstyle: [m.noVerticalMargin, m.responseTextColor],
						text: String(E)
					})] }), T != null && T.trim().length > 0 && c.jsxs("div", { children: [c.jsx(o("WAFlowsText.react").WAFlowsText, {
						type: "body",
						fontWeight: "bold",
						text: s._(
							/*BTDS*/
							""
						).toString(),
						xstyle: m.responseTextColor
					}), c.jsx(_, { response: T })] })] }))
				]
			})
		] }));
	}
	p.displayName = p.name + " [from " + i.id + "]";
	function _(e) {
		var t = e.response, n = r("tryParseJSONMixed")(t), a = n != null ? JSON.stringify(n, null, 2) : null;
		return c.jsx(o("WAFlowsText.react").WAFlowsText, {
			type: "body-small",
			xstyle: [m.noVerticalMargin, m.responseTextColor],
			text: typeof a == "string" ? a : t
		});
	}
	_.displayName = _.name + " [from " + i.id + "]";
	function f(e) {
		return e instanceof o("WAFlowsError").WAFlowsDataChannelError ? e.origin : e;
	}
	function g(e) {
		var t = f(e);
		if (t instanceof o("WAFlowsError").WAFlowsDataChannelResponseError) return t;
	}
	function h(e) {
		var t = f(e);
		if (t) {
			var n, r = o("WAFlowsError").isCodedError(t) ? t : null;
			return t instanceof o("WAFlowsError").WAFlowsError && t.title != null ? t.title : (n = r == null ? void 0 : r.summary) != null ? n : t.name;
		}
		return e.name;
	}
	function y(e) {
		var t, n = f(e);
		if (!n) return String(e.name);
		var r = o("WAFlowsError").isCodedError(n) ? n : null;
		return String(r && r.description != null ? r.description : (t = n.message) != null ? t : n.name);
	}
	function C(e) {
		var t = f(e);
		return t instanceof o("WAFlowsError").WAFlowsError ? t == null ? void 0 : t.resolutionUrl : null;
	}
	function b(e) {
		var t, n = g(e);
		return n == null || (t = n.response) == null ? void 0 : t.statusCode;
	}
	function v(e) {
		var t, n = g(e);
		return n == null || (t = n.response) == null ? void 0 : t.body;
	}
	function S(e) {
		var t = g(e);
		return t == null ? void 0 : t.decryptedResponseBody;
	}
	l.WAFlowsErrorDetails = p, l.getErrorMessage = y, l.getErrorResolutionURL = C, l.getErrorStatusCode = b;
}), 226);
