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
	"react",
	"react-compiler-runtime"
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
		var t, n, a = o("react-compiler-runtime").c(32), i = e.props, l = e.queries, s = i.customAudience, c = i.entryPoint, d = i.onAudienceEditSuccess, f = i.onBack, y = o("CometRelay").usePreloadedQuery(_, l.queryReference), C = m(s.name), b = C[0], v = C[1], S = m(h), R = S[0], L = S[1], E = m(g), k = E[0], I = E[1], T;
		a[0] !== R ? (T = Array.from(R), a[0] = R, a[1] = T) : T = a[1];
		var D = T, x;
		a[2] !== k ? (x = Array.from(k), a[2] = k, a[3] = x) : x = a[3];
		var $ = x, P = (t = (n = y.xfb_whatsapp_subscriber_list_members) == null ? void 0 : n.count) != null ? t : s.audienceSize, N = P + R.size - k.size, M;
		a[4] !== b || a[5] !== N ? (M = b.trim() === "" || N < o("WAWebBizBroadcastRecipientLimitCommon").MIN_RECIPIENTS, a[4] = b, a[5] = N, a[6] = M) : M = a[6];
		var w = M, A;
		a[7] !== c || a[8] !== f ? (A = u.jsx(r("WAWebBizBroadcastsUpsertAudienceHeader.react"), {
			entryPoint: c,
			isEdit: !0,
			onBack: f,
			testid: "biz-broadcast-pro-edit-audience-header"
		}), a[7] = c, a[8] = f, a[9] = A) : A = a[9];
		var F;
		a[10] !== y || a[11] !== R || a[12] !== k || a[13] !== P ? (F = u.jsx(r("WAWebBizBroadcastProEditAudienceList.react"), {
			fragmentRef: y,
			phoneNumbersAdded: R,
			setPhoneNumbersAdded: L,
			phoneNumbersRemoved: k,
			setPhoneNumbersRemoved: I,
			currentAudienceSize: P
		}), a[10] = y, a[11] = R, a[12] = k, a[13] = P, a[14] = F) : F = a[14];
		var O;
		a[15] !== b ? (O = u.jsx(r("WAWebBroadcastAudienceNameFieldCard.react"), {
			onValueChange: v,
			value: b,
			testid: "biz-broadcast-pro-upsert-audience-name-textfield"
		}), a[15] = b, a[16] = O) : O = a[16];
		var B;
		a[17] !== F || a[18] !== O ? (B = u.jsx(r("WAWebDrawerBody.react"), {
			testid: "biz-broadcast-pro-edit-audience-body",
			xstyle: p.drawerBody,
			children: u.jsx(r("WAWebBizTwoColumnLayout.react"), {
				flipResizeOrder: !0,
				testid: "biz-broadcast-pro-edit-audience-layout",
				primaryContent: F,
				secondaryContent: O
			})
		}), a[17] = F, a[18] = O, a[19] = B) : B = a[19];
		var W;
		a[20] !== b || a[21] !== N || a[22] !== s || a[23] !== w || a[24] !== d || a[25] !== D || a[26] !== $ ? (W = u.jsx(o("WAWebFlex.react").FlexColumn, {
			align: "center",
			children: u.jsx(o("WAWebFlex.react").FlexRow, {
				align: "end",
				justify: "end",
				xstyle: p.footer,
				children: u.jsx(r("WAWebBizBroadcastProEditAudienceSaveButton.react"), {
					audienceName: b,
					audienceSize: N,
					isDisabled: w,
					onAudienceEditSuccess: d,
					originalAudience: s,
					phoneNumbersAdded: D,
					phoneNumbersRemoved: $
				})
			})
		}), a[20] = b, a[21] = N, a[22] = s, a[23] = w, a[24] = d, a[25] = D, a[26] = $, a[27] = W) : W = a[27];
		var q;
		return a[28] !== A || a[29] !== B || a[30] !== W ? (q = u.jsxs(r("WAWebDrawer.react"), {
			testid: "biz-broadcast-pro-edit-audience-screen",
			xstyle: p.container,
			children: [
				A,
				B,
				W
			]
		}), a[28] = A, a[29] = B, a[30] = W, a[31] = q) : q = a[31], q;
	}
	function g() {
		return new Set();
	}
	function h() {
		return new Set();
	}
	l.default = f;
}), 98);
