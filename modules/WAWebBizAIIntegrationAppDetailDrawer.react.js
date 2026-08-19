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
	"react-compiler-runtime",
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
		var t = o("react-compiler-runtime").c(48), n = e.onBack, a = e.plugin, i = e.ref, l = p(!1), c, d;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (c = function() {
			l.current || (l.current = !0, o("WAWebBizAILargeScreensLogEvents").logViewPartnerManagement());
		}, d = [], t[0] = c, t[1] = d) : (c = t[0], d = t[1]), m(c, d);
		var _ = r("useWAWebBizAIConnectPartnerApp")(), f = _.connect, y = a.id, C;
		t[2] !== f || t[3] !== y ? (C = function() {
			o("WDSDialogBridge").openWDSDialog(u.jsx(r("WAWebBizAIGDriveExplainDialog.react"), { onConnect: function() {
				return f(y);
			} }));
		}, t[2] = f, t[3] = y, t[4] = C) : C = t[4];
		var b = C, v;
		t[5] === Symbol.for("react.memo_cache_sentinel") ? (v = { className: "x78zum5 x98rzlu xdt5ytf x5yr21d x6ikm8r x10wlt62" }, t[5] = v) : v = t[5];
		var S;
		t[6] !== n || t[7] !== a.display_name ? (S = u.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
			title: a.display_name,
			type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
			onBack: n
		}), t[6] = n, t[7] = a.display_name, t[8] = S) : S = t[8];
		var R;
		t[9] === Symbol.for("react.memo_cache_sentinel") ? (R = { className: "x6s0dn4 x78zum5 x8a3fw1 x1aj3ljl x16ovd2e x12xbjc7 xvtqlqk xb0esv5" }, t[9] = R) : R = t[9];
		var L;
		t[10] !== a.id || t[11] !== a.logoUri ? (L = u.jsx(r("WAWebBizAIIntegrationPluginLogo.react"), {
			logoUri: a.logoUri,
			testid: "biz-ai-integration-app-detail-logo"
		}, a.id), t[10] = a.id, t[11] = a.logoUri, t[12] = L) : L = t[12];
		var E;
		t[13] === Symbol.for("react.memo_cache_sentinel") ? (E = { className: "x78zum5 x98rzlu xdt5ytf xeuugli" }, t[13] = E) : E = t[13];
		var k;
		t[14] !== a.display_name ? (k = u.jsx(r("WDSText.react"), {
			colorName: "contentDefault",
			maxLines: 1,
			type: "Body1",
			children: a.display_name
		}), t[14] = a.display_name, t[15] = k) : k = t[15];
		var I;
		t[16] !== a.is_connected ? (I = a.is_connected ? u.jsx(r("WDSText.react"), {
			colorName: "contentDeemphasized",
			type: "Body3",
			children: s._(
				/*BTDS*/
				""
			)
		}) : null, t[16] = a.is_connected, t[17] = I) : I = t[17];
		var T;
		t[18] !== I || t[19] !== k ? (T = u.jsxs("div", babelHelpers.extends({}, E, { children: [k, I] })), t[18] = I, t[19] = k, t[20] = T) : T = t[20];
		var D;
		t[21] !== b || t[22] !== a.is_connected ? (D = u.jsx(g, {
			isConnected: a.is_connected,
			onConnect: b
		}), t[21] = b, t[22] = a.is_connected, t[23] = D) : D = t[23];
		var x;
		t[24] !== T || t[25] !== D || t[26] !== L ? (x = u.jsxs("div", babelHelpers.extends({}, R, { children: [
			L,
			T,
			D
		] })), t[24] = T, t[25] = D, t[26] = L, t[27] = x) : x = t[27];
		var $;
		t[28] === Symbol.for("react.memo_cache_sentinel") ? ($ = u.jsx(r("WAWebGroupInfoSeparator.react"), { animation: !1 }), t[28] = $) : $ = t[28];
		var P;
		t[29] === Symbol.for("react.memo_cache_sentinel") ? (P = { className: "x78zum5 xdt5ytf x1b73lln x46w9ns x1nbhmlj x1xrf6ya xvtqlqk xb0esv5" }, t[29] = P) : P = t[29];
		var N;
		t[30] === Symbol.for("react.memo_cache_sentinel") ? (N = u.jsx(r("WDSText.react"), {
			colorName: "contentDefault",
			isSemanticHeading: !0,
			type: "Body1Emphasized",
			children: s._(
				/*BTDS*/
				""
			)
		}), t[30] = N) : N = t[30];
		var M;
		t[31] !== a.display_name ? (M = u.jsxs("div", babelHelpers.extends({}, P, { children: [N, u.jsx(r("WDSText.react"), {
			colorName: "contentDeemphasized",
			type: "Body2",
			children: s._(
				/*BTDS*/
				"",
				[s._param("appName", a.display_name)]
			)
		})] })), t[31] = a.display_name, t[32] = M) : M = t[32];
		var w;
		t[33] === Symbol.for("react.memo_cache_sentinel") ? (w = s._(
			/*BTDS*/
			""
		), t[33] = w) : w = t[33];
		var A;
		t[34] === Symbol.for("react.memo_cache_sentinel") ? (A = u.jsx(h, {
			Icon: r("WDSIconWdsIcAiChat.react"),
			description: w,
			testid: "biz-ai-integration-app-detail-benefit-knowledge",
			title: s._(
				/*BTDS*/
				""
			)
		}), t[34] = A) : A = t[34];
		var F;
		t[35] === Symbol.for("react.memo_cache_sentinel") ? (F = s._(
			/*BTDS*/
			""
		), t[35] = F) : F = t[35];
		var O;
		t[36] === Symbol.for("react.memo_cache_sentinel") ? (O = u.jsx(h, {
			Icon: r("WDSIconIcFolder.react"),
			description: F,
			testid: "biz-ai-integration-app-detail-benefit-sync",
			title: s._(
				/*BTDS*/
				""
			)
		}), t[36] = O) : O = t[36];
		var B;
		t[37] === Symbol.for("react.memo_cache_sentinel") ? (B = s._(
			/*BTDS*/
			""
		), t[37] = B) : B = t[37];
		var W;
		t[38] === Symbol.for("react.memo_cache_sentinel") ? (W = u.jsx(h, {
			Icon: r("WDSIconIcSync.react"),
			description: B,
			testid: "biz-ai-integration-app-detail-benefit-autosync",
			title: s._(
				/*BTDS*/
				""
			)
		}), t[38] = W) : W = t[38];
		var q;
		t[39] !== M ? (q = u.jsxs("div", {
			"data-testid": "biz-ai-integration-app-detail-value-prop",
			children: [
				M,
				A,
				O,
				W
			]
		}), t[39] = M, t[40] = q) : q = t[40];
		var U;
		t[41] !== x || t[42] !== q ? (U = u.jsxs(r("WAWebDrawerBody.react"), { children: [
			x,
			$,
			q
		] }), t[41] = x, t[42] = q, t[43] = U) : U = t[43];
		var V;
		return t[44] !== i || t[45] !== U || t[46] !== S ? (V = u.jsxs("div", babelHelpers.extends({
			ref: i,
			"data-testid": "biz-ai-integration-app-detail"
		}, v, { children: [S, U] })), t[44] = i, t[45] = U, t[46] = S, t[47] = V) : V = t[47], V;
	}
	function g(e) {
		var t = o("react-compiler-runtime").c(4), n = e.isConnected, a = e.onConnect;
		if (n) {
			var i;
			return t[0] === Symbol.for("react.memo_cache_sentinel") ? (i = u.jsx(r("WDSButton.react"), {
				label: s._(
					/*BTDS*/
					""
				),
				size: "small",
				testid: "biz-ai-integration-app-detail-disconnect",
				variant: "tonal"
			}), t[0] = i) : i = t[0], i;
		}
		var l;
		t[1] === Symbol.for("react.memo_cache_sentinel") ? (l = s._(
			/*BTDS*/
			""
		), t[1] = l) : l = t[1];
		var c = o("WAWebBizAiAgentGating").isGoogleDriveEnabled() ? a : void 0, d;
		return t[2] !== c ? (d = u.jsx(r("WDSButton.react"), {
			label: l,
			onPress: c,
			size: "small",
			testid: "biz-ai-integration-app-detail-connect",
			variant: "filled"
		}), t[2] = c, t[3] = d) : d = t[3], d;
	}
	function h(e) {
		var t = o("react-compiler-runtime").c(15), n = e.Icon, a = e.description, i = e.testid, l = e.title, s;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (s = { className: "x6s0dn4 x78zum5 x1f0uite xs2akgl x1xrf6ya xscbp6u xvtqlqk xb0esv5" }, t[0] = s) : s = t[0];
		var c;
		t[1] !== n ? (c = u.jsx(n, { iconXstyle: _.benefitIcon }), t[1] = n, t[2] = c) : c = t[2];
		var d;
		t[3] === Symbol.for("react.memo_cache_sentinel") ? (d = { className: "x78zum5 xdt5ytf x129bwdz x1trrmfo xeuugli" }, t[3] = d) : d = t[3];
		var m;
		t[4] !== l ? (m = u.jsx(r("WDSText.react"), {
			colorName: "contentDefault",
			type: "Body1",
			children: l
		}), t[4] = l, t[5] = m) : m = t[5];
		var p;
		t[6] !== a ? (p = u.jsx(r("WDSText.react"), {
			colorName: "contentDeemphasized",
			type: "Body2",
			children: a
		}), t[6] = a, t[7] = p) : p = t[7];
		var f;
		t[8] !== m || t[9] !== p ? (f = u.jsxs("div", babelHelpers.extends({}, d, { children: [m, p] })), t[8] = m, t[9] = p, t[10] = f) : f = t[10];
		var g;
		return t[11] !== c || t[12] !== f || t[13] !== i ? (g = u.jsxs("div", babelHelpers.extends({ "data-testid": i }, s, { children: [c, f] })), t[11] = c, t[12] = f, t[13] = i, t[14] = g) : g = t[14], g;
	}
	l.default = f;
}), 226);
