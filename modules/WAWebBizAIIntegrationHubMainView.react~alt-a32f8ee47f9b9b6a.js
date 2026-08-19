__d("WAWebBizAIIntegrationHubMainView.react", [
	"fbt",
	"WAWebBizAIIntegrationPluginLogo.react",
	"WAWebBizAILargeScreensLogEvents",
	"WAWebDrawerBody.react",
	"WAWebDrawerHeader.react",
	"WAWebGroupInfoSeparator.react",
	"WAWebRow.react",
	"WDSText.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e, d = c.useEffect, m = c.useEffectEvent, p = { row: {
		borderStartStartRadius: "xlr9sxt",
		borderStartEndRadius: "xvvg52n",
		borderEndEndRadius: "xwd4zgb",
		borderEndStartRadius: "xq8v1ta",
		marginInlineStart: "x1uvdrpn",
		marginInlineEnd: "x14mko6t",
		marginLeft: null,
		marginRight: null,
		paddingTop: "x16ovd2e",
		paddingBottom: "x12xbjc7",
		paddingInlineStart: "x1iw51ew",
		paddingInlineEnd: "xde1mab",
		paddingLeft: null,
		paddingRight: null,
		":hover_backgroundColor": "x1ubxc9n",
		$$css: !0
	} };
	function _(e) {
		var t = e.availableApps, n = e.connectedApps, a = e.loggedViewVersionRef, i = e.onBack, l = e.onSelectPlugin, c = e.queryVersion, p = e.ref, _ = n.length > 0 || t.length > 0, g = m(function() {
			if (a != null && c != null) {
				if (a.current === c) return;
				a.current = c;
			}
			o("WAWebBizAILargeScreensLogEvents").logViewPartnersHub(n.length, !0);
		});
		return d(function() {
			g();
		}, []), u.jsxs("div", {
			ref: p,
			"data-testid": "biz-ai-integration-hub-main",
			className: "x78zum5 x98rzlu xdt5ytf x5yr21d x6ikm8r x10wlt62",
			children: [u.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
				title: s._(
					/*BTDS*/
					""
				),
				type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
				onBack: i
			}), u.jsxs(r("WAWebDrawerBody.react"), { children: [
				_ ? null : u.jsx("div", {
					"data-testid": "biz-ai-integration-hub-empty",
					className: "x1p57kb1 xvpt6g3 xvtqlqk xb0esv5 x1yc453h",
					children: u.jsx(r("WDSText.react"), {
						colorName: "contentDeemphasized",
						type: "Body2",
						children: s._(
							/*BTDS*/
							""
						)
					})
				}),
				n.length > 0 ? u.jsxs("div", {
					"data-testid": "biz-ai-integration-hub-connected-section",
					children: [u.jsx("div", {
						className: "xzpqnlu x1hyvwdk xjm9jq1 x6ikm8r x10wlt62 x10l6tqk x1i1rx1s",
						children: u.jsx(r("WDSText.react"), {
							colorName: "contentDefault",
							isSemanticHeading: !0,
							type: "Body1Emphasized",
							children: s._(
								/*BTDS*/
								""
							)
						})
					}), n.map(function(e, t) {
						return u.jsx(f, {
							onSelect: l,
							plugin: e,
							testid: "biz-ai-integration-hub-connected-item-" + t
						}, e.id);
					})]
				}) : null,
				n.length > 0 && t.length > 0 ? u.jsx(r("WAWebGroupInfoSeparator.react"), { animation: !1 }) : null,
				t.length > 0 ? u.jsxs("div", {
					"data-testid": "biz-ai-integration-hub-available-section",
					children: [u.jsxs("div", {
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
								""
							)
						})]
					}), t.map(function(e, t) {
						return u.jsx(f, {
							onSelect: l,
							plugin: e,
							testid: "biz-ai-integration-hub-available-item-" + t
						}, e.id);
					})]
				}) : null
			] })]
		});
	}
	_.displayName = _.name + " [from " + i.id + "]";
	function f(e) {
		var t = e.onSelect, n = e.plugin, a = e.testid;
		return u.jsx(r("WAWebRow.react"), {
			onClick: function() {
				o("WAWebBizAILargeScreensLogEvents").logClickPartnerRow(n.id), t(n);
			},
			testid: a,
			xstyle: p.row,
			children: u.jsxs("div", {
				className: "x6s0dn4 x78zum5 x8a3fw1 x1aj3ljl",
				children: [u.jsx(r("WAWebBizAIIntegrationPluginLogo.react"), {
					logoUri: n.logoUri,
					testid: a + "-logo"
				}), u.jsxs("div", {
					className: "x78zum5 x98rzlu xdt5ytf xeuugli",
					children: [u.jsx(r("WDSText.react"), {
						colorName: "contentDefault",
						type: "Body1",
						maxLines: 1,
						children: n.display_name
					}), n.is_connected ? u.jsx(r("WDSText.react"), {
						colorName: "contentDeemphasized",
						type: "Body3",
						children: s._(
							/*BTDS*/
							""
						)
					}) : null]
				})]
			})
		});
	}
	f.displayName = f.name + " [from " + i.id + "]", l.default = _;
}), 226);
