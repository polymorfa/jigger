__d("WAWebBizBroadcastProEditAudienceScreen.react", [
	"CometRelay",
	"WAWebBizBroadcastProEditAudienceList.react",
	"WAWebBizBroadcastProEditAudienceSaveButton.react",
	"WAWebBizBroadcastProEditAudienceScreenQuery.graphql",
	"WAWebBizBroadcastRecipientLimitCommon",
	"WAWebBizBroadcastsUpsertAudienceHeader.react",
	"WAWebBizTwoColumnLayout.react",
	"WAWebBroadcastAudienceNameFieldCard.react",
	"WAWebDrawer.react",
	"WAWebDrawerBody.react",
	"WAWebFlex.react",
	"react"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = s || (s = o("react")), c = s, d = c.useMemo, m = c.useState, p = {
		footer: {
			marginTop: "x98l61r",
			marginBottom: "x1ua1l7f",
			marginInlineStart: "xlese2p",
			marginInlineEnd: "xviac27",
			marginLeft: null,
			marginRight: null,
			maxWidth: "x1mvdoyg",
			width: "xh8yej3",
			$$css: !0
		},
		container: {
			marginInlineStart: "x1sbwfh8",
			$$css: !0
		},
		drawerBody: {
			backgroundColor: "x1h3rtpe",
			$$css: !0
		}
	}, _ = e !== void 0 ? e : e = n("WAWebBizBroadcastProEditAudienceScreenQuery.graphql");
	function f(e) {
		var t, n, a = e.props, i = e.queries, l = a.customAudience, s = a.entryPoint, c = a.onAudienceEditSuccess, f = a.onBack, g = o("CometRelay").usePreloadedQuery(_, i.queryReference), h = m(l.name), y = h[0], C = h[1], b = m(function() {
			return new Set();
		}), v = b[0], S = b[1], R = m(function() {
			return new Set();
		}), L = R[0], E = R[1], k = d(function() {
			return Array.from(v);
		}, [v]), I = d(function() {
			return Array.from(L);
		}, [L]), T = (t = (n = g.xfb_whatsapp_subscriber_list_members) == null ? void 0 : n.count) != null ? t : l.audienceSize, D = T + v.size - L.size, x = y.trim() === "" || D < o("WAWebBizBroadcastRecipientLimitCommon").MIN_RECIPIENTS;
		return u.jsxs(r("WAWebDrawer.react"), {
			testid: "biz-broadcast-pro-edit-audience-screen",
			xstyle: p.container,
			children: [
				u.jsx(r("WAWebBizBroadcastsUpsertAudienceHeader.react"), {
					entryPoint: s,
					isEdit: !0,
					onBack: f,
					testid: "biz-broadcast-pro-edit-audience-header"
				}),
				u.jsx(r("WAWebDrawerBody.react"), {
					testid: "biz-broadcast-pro-edit-audience-body",
					xstyle: p.drawerBody,
					children: u.jsx(r("WAWebBizTwoColumnLayout.react"), {
						flipResizeOrder: !0,
						testid: "biz-broadcast-pro-edit-audience-layout",
						primaryContent: u.jsx(r("WAWebBizBroadcastProEditAudienceList.react"), {
							fragmentRef: g,
							phoneNumbersAdded: v,
							setPhoneNumbersAdded: S,
							phoneNumbersRemoved: L,
							setPhoneNumbersRemoved: E,
							currentAudienceSize: T
						}),
						secondaryContent: u.jsx(r("WAWebBroadcastAudienceNameFieldCard.react"), {
							onValueChange: C,
							value: y,
							testid: "biz-broadcast-pro-upsert-audience-name-textfield"
						})
					})
				}),
				u.jsx(o("WAWebFlex.react").FlexColumn, {
					align: "center",
					children: u.jsx(o("WAWebFlex.react").FlexRow, {
						align: "end",
						justify: "end",
						xstyle: p.footer,
						children: u.jsx(r("WAWebBizBroadcastProEditAudienceSaveButton.react"), {
							audienceName: y,
							audienceSize: D,
							isDisabled: x,
							onAudienceEditSuccess: c,
							originalAudience: l,
							phoneNumbersAdded: k,
							phoneNumbersRemoved: I
						})
					})
				})
			]
		});
	}
	f.displayName = f.name + " [from " + i.id + "]", l.default = f;
}), 98);
