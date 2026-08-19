__d("WAWebBizAIIntegrationAppDetailDrawer.react", [
	"fbt",
	"WAWebBizAIGDriveExplainDialog.react",
	"WAWebBizAIIntegrationPluginLogo.react",
	"WAWebBizAILargeScreensLogEvents",
	"WAWebBizAiAgentGating",
	"WAWebDrawerBody.react",
	"WAWebDrawerHeader.react",
	"WAWebGroupInfoSeparator.react",
	"WDSButton.react",
	"WDSDialogBridge",
	"WDSIconIcFolder.react",
	"WDSIconIcSync.react",
	"WDSIconWdsIcAiChat.react",
	"WDSText.react",
	"react",
	"useWAWebBizAIConnectPartnerApp"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e, d = c.useCallback, m = c.useEffect, p = c.useRef, _ = { benefitIcon: {
		color: "xhslqc4",
		flexShrink: "x2lah0s",
		height: "xxk0z11",
		width: "xvy4d1p",
		$$css: !0
	} };
	function f(e) {
		var t = e.onBack, n = e.plugin, a = e.ref, i = p(!1);
		m(function() {
			i.current || (i.current = !0, o("WAWebBizAILargeScreensLogEvents").logViewPartnerManagement());
		}, []);
		var l = r("useWAWebBizAIConnectPartnerApp")(), c = l.connect, _ = n.id, f = d(function() {
			o("WDSDialogBridge").openWDSDialog(u.jsx(r("WAWebBizAIGDriveExplainDialog.react"), { onConnect: function() {
				return c(_);
			} }));
		}, [c, _]);
		return u.jsxs("div", {
			ref: a,
			"data-testid": "biz-ai-integration-app-detail",
			className: "x78zum5 x98rzlu xdt5ytf x5yr21d x6ikm8r x10wlt62",
			children: [u.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
				title: n.display_name,
				type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
				onBack: t
			}), u.jsxs(r("WAWebDrawerBody.react"), { children: [
				u.jsxs("div", {
					className: "x6s0dn4 x78zum5 x8a3fw1 x1aj3ljl x16ovd2e x12xbjc7 xvtqlqk xb0esv5",
					children: [
						u.jsx(r("WAWebBizAIIntegrationPluginLogo.react"), {
							logoUri: n.logoUri,
							testid: "biz-ai-integration-app-detail-logo"
						}, n.id),
						u.jsxs("div", {
							className: "x78zum5 x98rzlu xdt5ytf xeuugli",
							children: [u.jsx(r("WDSText.react"), {
								colorName: "contentDefault",
								maxLines: 1,
								type: "Body1",
								children: n.display_name
							}), n.is_connected ? u.jsx(r("WDSText.react"), {
								colorName: "contentDeemphasized",
								type: "Body3",
								children: s._(
									/*BTDS*/
									""
								)
							}) : null]
						}),
						u.jsx(g, {
							isConnected: n.is_connected,
							onConnect: f
						})
					]
				}),
				u.jsx(r("WAWebGroupInfoSeparator.react"), { animation: !1 }),
				u.jsxs("div", {
					"data-testid": "biz-ai-integration-app-detail-value-prop",
					children: [
						u.jsxs("div", {
							className: "x78zum5 xdt5ytf x1b73lln x46w9ns x1nbhmlj x1xrf6ya xvtqlqk xb0esv5",
							children: [u.jsx(r("WDSText.react"), {
								colorName: "contentDefault",
								isSemanticHeading: !0,
								type: "Body1Emphasized",
								children: s._(
									/*BTDS*/
									""
								)
							}), u.jsx(r("WDSText.react"), {
								colorName: "contentDeemphasized",
								type: "Body2",
								children: s._(
									/*BTDS*/
									"",
									[s._param("appName", n.display_name)]
								)
							})]
						}),
						u.jsx(h, {
							Icon: r("WDSIconWdsIcAiChat.react"),
							description: s._(
								/*BTDS*/
								""
							),
							testid: "biz-ai-integration-app-detail-benefit-knowledge",
							title: s._(
								/*BTDS*/
								""
							)
						}),
						u.jsx(h, {
							Icon: r("WDSIconIcFolder.react"),
							description: s._(
								/*BTDS*/
								""
							),
							testid: "biz-ai-integration-app-detail-benefit-sync",
							title: s._(
								/*BTDS*/
								""
							)
						}),
						u.jsx(h, {
							Icon: r("WDSIconIcSync.react"),
							description: s._(
								/*BTDS*/
								""
							),
							testid: "biz-ai-integration-app-detail-benefit-autosync",
							title: s._(
								/*BTDS*/
								""
							)
						})
					]
				})
			] })]
		});
	}
	f.displayName = f.name + " [from " + i.id + "]";
	function g(e) {
		var t = e.isConnected, n = e.onConnect;
		return t ? u.jsx(r("WDSButton.react"), {
			label: s._(
				/*BTDS*/
				""
			),
			size: "small",
			testid: "biz-ai-integration-app-detail-disconnect",
			variant: "tonal"
		}) : u.jsx(r("WDSButton.react"), {
			label: s._(
				/*BTDS*/
				""
			),
			onPress: o("WAWebBizAiAgentGating").isGoogleDriveEnabled() ? n : void 0,
			size: "small",
			testid: "biz-ai-integration-app-detail-connect",
			variant: "filled"
		});
	}
	g.displayName = g.name + " [from " + i.id + "]";
	function h(e) {
		var t = e.Icon, n = e.description, o = e.testid, a = e.title;
		return u.jsxs("div", {
			"data-testid": o,
			className: "x6s0dn4 x78zum5 x1f0uite xs2akgl x1xrf6ya xscbp6u xvtqlqk xb0esv5",
			children: [u.jsx(t, { iconXstyle: _.benefitIcon }), u.jsxs("div", {
				className: "x78zum5 xdt5ytf x129bwdz x1trrmfo xeuugli",
				children: [u.jsx(r("WDSText.react"), {
					colorName: "contentDefault",
					type: "Body1",
					children: a
				}), u.jsx(r("WDSText.react"), {
					colorName: "contentDeemphasized",
					type: "Body2",
					children: n
				})]
			})]
		});
	}
	h.displayName = h.name + " [from " + i.id + "]", l.default = f;
}), 226);
