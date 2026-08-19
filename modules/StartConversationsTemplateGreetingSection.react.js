__d("StartConversationsTemplateGreetingSection.react", [
	"fbt",
	"AdCampaignDestination",
	"AdsInterfacesLogger",
	"AdsMessagingDestinationInThreadMultiphotoCarouselContainer.react",
	"AdsMessengerConstants",
	"AdsMessengerErrorSpecType",
	"AdsMessengerErrorSpecUtils",
	"AdsMessengerJSONMediaFormatType",
	"AdsMessengerVisualEditorLoggerEvents",
	"AdsUEditorAdgroupMessageTemplateSectionStrings",
	"AdsUEditorMessagingDestinationUtils",
	"CTXChatBuilderFeatureGating",
	"ClickToMessageCTDFeatureGating",
	"ClickToWhatsAppFeatureGating",
	"FBXAdsManagerFB4BResponsiveGenericPageControllerRouteBuilder",
	"GeoBaseText.react",
	"GeoLink.react",
	"GeoNotice.react",
	"PagesReplyComposerEditorContainer.react",
	"PagesReplyComposerTextUtilities",
	"PagesReplyComposerToolbarContainer.react",
	"StartConversationsAutomatedGreetingMessageCTASection",
	"StartConversationsTemplateGreetingDropdown.react",
	"StartConversationsTemplateGreetingFormatSection.react",
	"WhatsAppTokenizedNamesNoticeContent",
	"adsMessengerDataModelGetMediaFormat",
	"geoMargin",
	"react",
	"react-compiler-runtime",
	"stylex",
	"useDebouncedOnChange",
	"useGeoTheme"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u, c = u || (u = o("react")), d = u, m = d.useCallback, p = d.useEffect, _ = d.useState, f = 750, g = {
		welcomeMessageEditorArea: {
			marginBottom: "xod5an3",
			borderTopStyle: "x13fuv20",
			borderInlineEndStyle: "x18b5jzi",
			borderBottomStyle: "x1q0q8m5",
			borderInlineStartStyle: "x1t7ytsu",
			position: "x1n2onr6",
			$$css: !0
		},
		welcomeMessageEditorAreaError: {
			borderTopStyle: "x13fuv20",
			borderInlineEndStyle: "x18b5jzi",
			borderBottomStyle: "x1q0q8m5",
			borderInlineStartStyle: "x1t7ytsu",
			$$css: !0
		},
		welcomeMessageEditorAreaFocused: {
			borderTopStyle: "x13fuv20",
			borderInlineEndStyle: "x18b5jzi",
			borderBottomStyle: "x1q0q8m5",
			borderInlineStartStyle: "x1t7ytsu",
			$$css: !0
		},
		marginBottom4: {
			marginBottom: "x12nagc",
			$$css: !0
		}
	};
	function h(e) {
		var t = o("react-compiler-runtime").c(59), n = e.account, a = e.accountID, i = e.adsWebsiteExtensionType, l = e.composerState, s = e.destinationType, u = e.editorTab, d = e.errorSpec, m = e.getGreetingText, f = e.headlineText, g = e.isAddAutomatedGreetingMessageCTAClick, h = e.isEditDisabled, v = e.isUnifiedCreation, S = e.isVideoLoading, R = e.objective, L = e.onGreetingTextChange, E = e.onJSONChange, k = e.page, I = e.pageID, T = e.pageWhatsAppNumberID, D = e.primaryText, x = e.setIsFlowVisible, $ = e.shouldHideAutomatedGreetingMessageCTA, P = e.videoURL, N = e.welcomeMessageJSON, M = e.whatsAppBusinessPhoneNumberID, w = e.whatsAppBusinessPhoneNumberWabaID, A = _(!1), F = A[0], O = A[1], B;
		t[0] !== m ? (B = m(), t[0] = m, t[1] = B) : B = t[1];
		var W = B;
		if (h === !0) {
			var q;
			t[2] !== l.supportedMacros || t[3] !== m ? (q = o("PagesReplyComposerTextUtilities").processMessage(m() || "", l.supportedMacros), t[2] = l.supportedMacros, t[3] = m, t[4] = q) : q = t[4], W = q;
		}
		var U = h === !0, V;
		t[5] !== i || t[6] !== s ? (V = b(s, i), t[5] = i, t[6] = s, t[7] = V) : V = t[7];
		var H = W || "", G;
		t[8] !== I || t[9] !== U || t[10] !== V || t[11] !== H ? (G = {
			composerKey: "welcomeMessage",
			initialDisabled: U,
			disableTokenizationforWhatsApp: V,
			initialReply: H,
			isAdsInterfaceSource: !0,
			maxCharacterLength: o("AdsMessengerConstants").WELCOME_MESSAGE_MAX_LENGTH,
			pageID: I,
			placeholderText: o("AdsUEditorAdgroupMessageTemplateSectionStrings").EDITOR_PLACEHOLDER_TEXT
		}, t[8] = I, t[9] = U, t[10] = V, t[11] = H, t[12] = G) : G = t[12];
		var z = G, j;
		t[13] === Symbol.for("react.memo_cache_sentinel") ? (j = [], t[13] = j) : j = t[13], p(y, j);
		var K;
		t[14] !== m ? (K = m(), t[14] = m, t[15] = K) : K = t[15];
		var Q;
		t[16] === Symbol.for("react.memo_cache_sentinel") ? (Q = function() {
			O(!1);
		}, t[16] = Q) : Q = t[16];
		var X;
		t[17] !== x ? (X = function() {
			x && x(!1), O(!0);
		}, t[17] = x, t[18] = X) : X = t[18];
		var Y;
		t[19] !== n || t[20] !== a || t[21] !== i || t[22] !== z || t[23] !== s || t[24] !== u || t[25] !== d || t[26] !== f || t[27] !== g || t[28] !== h || t[29] !== F || t[30] !== v || t[31] !== R || t[32] !== L || t[33] !== E || t[34] !== k || t[35] !== I || t[36] !== T || t[37] !== D || t[38] !== $ || t[39] !== K || t[40] !== X || t[41] !== N || t[42] !== M || t[43] !== w ? (Y = c.jsx(C, {
			account: n,
			accountID: a,
			adsWebsiteExtensionType: i,
			config: z,
			destinationType: s,
			editorTab: u,
			errorSpec: d,
			greetingText: K,
			headlineText: f,
			isAddAutomatedGreetingMessageCTAClick: g,
			isEditDisabled: h,
			isFocused: F,
			isUnifiedCreation: v,
			objective: R,
			onBlur: Q,
			onFocus: X,
			onGreetingTextChange: L,
			onJSONChange: E,
			page: k,
			pageID: I,
			pageWhatsAppNumberID: T,
			primaryText: D,
			shouldHideAutomatedGreetingMessageCTA: $,
			welcomeMessageJSON: N,
			whatsAppBusinessPhoneNumberID: M,
			whatsAppBusinessPhoneNumberWabaID: w
		}), t[19] = n, t[20] = a, t[21] = i, t[22] = z, t[23] = s, t[24] = u, t[25] = d, t[26] = f, t[27] = g, t[28] = h, t[29] = F, t[30] = v, t[31] = R, t[32] = L, t[33] = E, t[34] = k, t[35] = I, t[36] = T, t[37] = D, t[38] = $, t[39] = K, t[40] = X, t[41] = N, t[42] = M, t[43] = w, t[44] = Y) : Y = t[44];
		var J;
		t[45] !== n || t[46] !== a || t[47] !== s || t[48] !== d || t[49] !== h || t[50] !== S || t[51] !== E || t[52] !== I || t[53] !== P || t[54] !== N ? (J = c.jsx(r("StartConversationsTemplateGreetingFormatSection.react"), {
			account: n,
			accountID: a,
			destinationType: s,
			errorSpec: d,
			isEditDisabled: h,
			isVideoLoading: S,
			onJSONChange: E,
			pageID: I,
			videoURL: P,
			welcomeMessageJSON: N
		}), t[45] = n, t[46] = a, t[47] = s, t[48] = d, t[49] = h, t[50] = S, t[51] = E, t[52] = I, t[53] = P, t[54] = N, t[55] = J) : J = t[55];
		var Z;
		return t[56] !== Y || t[57] !== J ? (Z = c.jsxs(c.Fragment, { children: [Y, J] }), t[56] = Y, t[57] = J, t[58] = Z) : Z = t[58], Z;
	}
	function y() {
		v();
	}
	function C(t) {
		var n, a = o("react-compiler-runtime").c(57), i = t.account, l = t.accountID, u = t.adsWebsiteExtensionType, d = t.config, m = t.destinationType, p = t.editorTab, _ = t.errorSpec, h = t.greetingText, y = t.headlineText, C = t.isAddAutomatedGreetingMessageCTAClick, b = t.isEditDisabled, v = t.isFocused, R = t.isUnifiedCreation, L = t.objective, E = t.onBlur, k = t.onFocus, I = t.onGreetingTextChange, T = t.onJSONChange, D = t.page, x = t.pageID, $ = t.pageWhatsAppNumberID, P = t.primaryText, N = t.shouldHideAutomatedGreetingMessageCTA, M = t.welcomeMessageJSON, w = t.whatsAppBusinessPhoneNumberID, A = t.whatsAppBusinessPhoneNumberWabaID, F = o("CTXChatBuilderFeatureGating").enableMessageTemplateForWTWA(u, m, !1, L), O = o("ClickToWhatsAppFeatureGating").enableCTWAFlows(m, null, null, $, D, w, A) || F, B = N !== !0 && !F && (o("ClickToWhatsAppFeatureGating").enableAutomatedGreetingMessageForCTWA(m) || o("ClickToMessageCTDFeatureGating").enableCTDWelcomeMessageCTA(m, !0)) && ((n = M.text_format) == null || (n = n.message) == null || (n = n.automated_greeting_message_cta) == null || (n = n.wa_flow) == null ? void 0 : n.flow_data) == null, W;
		a[0] !== C ? (W = function(t) {
			C === !0 && window.setTimeout(function() {
				t();
			}, 350);
		}, a[0] = C, a[1] = W) : W = a[1];
		var q = W, U;
		a[2] !== I ? (U = function(t) {
			I(t), r("AdsInterfacesLogger").log({ eventName: "ctwa_automatic_greeting_message_text_change" });
		}, a[2] = I, a[3] = U) : U = a[3];
		var V = U, H = r("useGeoTheme")(), G = H.selectBorderColor, z = H.selectBorderRadius, j = H.selectBorderWidth, K = H.selectStaticBackgroundColor, Q = H.selectTextColor, X = r("useDebouncedOnChange")(h != null ? h : "", V, f), Y = X[0], J = X[1], Z = O ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		), ee = function(t) {
			return t ? O ? s._(
				/*BTDS*/
				""
			) : s._(
				/*BTDS*/
				""
			) : s._(
				/*BTDS*/
				"",
				[s._param("Tips and examples about CTM ad", c.jsx(r("GeoLink.react"), {
					href: r("FBXAdsManagerFB4BResponsiveGenericPageControllerRouteBuilder").buildUri({ subpath: "one-sheeters/improve-click-to-messenger" }),
					target: "_blank",
					children: s._(
						/*BTDS*/
						""
					)
				}))]
			);
		}, te = o("AdsMessengerErrorSpecUtils").getErrorMessage(_, r("AdsMessengerErrorSpecType").WELCOME_MESSAGE_TEXT), ne;
		a[4] !== m || a[5] !== M ? (ne = o("AdsUEditorMessagingDestinationUtils").isCTM(m) || S(m, M), a[4] = m, a[5] = M, a[6] = ne) : ne = a[6];
		var re = ne, oe;
		a[7] !== M ? (oe = r("adsMessengerDataModelGetMediaFormat")(M), a[7] = M, a[8] = oe) : oe = a[8];
		var ae = oe, ie = m === r("AdCampaignDestination").WHATSAPP || F, le = m === r("AdCampaignDestination").MESSENGER, se = ie && h != null && /\{\{.*?\}\}/.test(h) ? c.jsx("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(r("geoMargin").top8, r("geoMargin").bottom8), { children: c.jsx(r("GeoNotice.react"), {
			"data-testid": void 0,
			status: "info",
			children: o("WhatsAppTokenizedNamesNoticeContent").whatsAppPersonalizationNotSupportedNotice
		}) })) : null, ue;
		a[9] !== Z ? (ue = c.jsx(r("GeoBaseText.react"), {
			color: "heading",
			display: "block",
			size: "header2",
			weight: "bold",
			xstyle: r("geoMargin").bottom4,
			children: Z
		}), a[9] = Z, a[10] = ue) : ue = a[10];
		var ce;
		a[11] !== i || a[12] !== m || a[13] !== b || a[14] !== re || a[15] !== T || a[16] !== M ? (ce = re && c.jsx(r("StartConversationsTemplateGreetingDropdown.react"), {
			account: i,
			destinationType: m,
			isEditDisabled: b,
			onJSONChange: T,
			welcomeMessageJSON: M
		}), a[11] = i, a[12] = m, a[13] = b, a[14] = re, a[15] = T, a[16] = M, a[17] = ce) : ce = a[17];
		var de;
		a[18] !== R ? (de = R && c.jsx(r("GeoBaseText.react"), {
			color: "heading",
			display: "block",
			size: "value",
			weight: "bold",
			children: o("AdsMessengerConstants").TEXT
		}), a[18] = R, a[19] = de) : de = a[19];
		var me = (e || (e = r("stylex"))).props(g.welcomeMessageEditorArea, K({ surface: "content" }), G({ color: "element" }), z({ context: "control" }), j({ context: "input" }), te != null && [g.welcomeMessageEditorAreaError, G({ color: "error" })], v && te == null && [g.welcomeMessageEditorAreaFocused, G({ color: "blue" })], O && g.marginBottom4), pe;
		a[20] !== d || a[21] !== J || a[22] !== Y || a[23] !== b ? (pe = c.jsx(r("PagesReplyComposerEditorContainer.react"), {
			config: d,
			isEditDisabled: b,
			isFocused: !0,
			isSideToolbar: !0,
			onReplyChange: J,
			welcomeString: Y
		}), a[20] = d, a[21] = J, a[22] = Y, a[23] = b, a[24] = pe) : pe = a[24];
		var _e;
		a[25] === Symbol.for("react.memo_cache_sentinel") ? (_e = "x1y1aw1k xf159sx xwib8y2 xmzvs34", a[25] = _e) : _e = a[25];
		var fe;
		a[26] !== d ? (fe = c.jsx(r("PagesReplyComposerToolbarContainer.react"), {
			config: d,
			isFocused: !0,
			isSideToolbar: !0,
			xstyle: _e
		}), a[26] = d, a[27] = fe) : fe = a[27];
		var ge;
		a[28] !== E || a[29] !== k || a[30] !== fe || a[31] !== me || a[32] !== pe ? (ge = c.jsxs("div", babelHelpers.extends({}, me, {
			onBlur: E,
			onFocus: k,
			children: [pe, fe]
		})), a[28] = E, a[29] = k, a[30] = fe, a[31] = me, a[32] = pe, a[33] = ge) : ge = a[33];
		var he;
		a[34] !== m || a[35] !== _ || a[36] !== y || a[37] !== q || a[38] !== T || a[39] !== D || a[40] !== $ || a[41] !== P || a[42] !== Q || a[43] !== B || a[44] !== se || a[45] !== M ? (he = B && c.jsxs(c.Fragment, { children: [
			o("ClickToWhatsAppFeatureGating").enableAutomatedGreetingMessageForCTWA(m) && c.jsx("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props([Q({
				color: "value",
				isDisabled: !1
			})]), { children: c.jsx(r("GeoBaseText.react"), {
				color: "inherit",
				display: "block",
				isDisabled: !1,
				size: "valueDescription",
				xstyle: r("geoMargin").bottom12,
				children: s._(
					/*BTDS*/
					""
				)
			}) })),
			se,
			c.jsx(r("StartConversationsAutomatedGreetingMessageCTASection"), {
				destinationType: m,
				errorSpec: _,
				headlineText: y,
				onComponentReady: q,
				onWelcomeMessageJSONChange: T,
				page: D,
				pageWhatsAppNumberID: $,
				primaryText: P,
				welcomeMessageJSON: M
			})
		] }), a[34] = m, a[35] = _, a[36] = y, a[37] = q, a[38] = T, a[39] = D, a[40] = $, a[41] = P, a[42] = Q, a[43] = B, a[44] = se, a[45] = M, a[46] = he) : he = a[46];
		var ye;
		return a[47] !== i || a[48] !== l || a[49] !== p || a[50] !== ae || a[51] !== b || a[52] !== le || a[53] !== T || a[54] !== x || a[55] !== M ? (ye = le && c.jsx(r("AdsMessagingDestinationInThreadMultiphotoCarouselContainer.react"), {
			account: i,
			accountID: l,
			editorTab: p,
			format: ae,
			isEditDisabled: b,
			onJSONChange: T,
			pageID: x,
			welcomeMessageJSON: M
		}), a[47] = i, a[48] = l, a[49] = p, a[50] = ae, a[51] = b, a[52] = le, a[53] = T, a[54] = x, a[55] = M, a[56] = ye) : ye = a[56], c.jsxs(c.Fragment, { children: [
			ue,
			c.jsx(r("GeoBaseText.react"), {
				color: "headingDescription",
				display: "block",
				size: "value",
				xstyle: r("geoMargin").bottom12,
				children: ee(ie)
			}),
			ce,
			de,
			ge,
			O && te != null ? c.jsx("div", { children: c.jsx(r("GeoBaseText.react"), {
				color: "error",
				display: "block",
				isDisabled: !1,
				size: "valueDescription",
				xstyle: r("geoMargin").bottom12,
				children: te.toString()
			}) }) : null,
			!B && se,
			he,
			ye
		] });
	}
	function b(e, t) {
		return e === r("AdCampaignDestination").WHATSAPP || t === "whatsapp";
	}
	function v() {
		r("AdsInterfacesLogger").log({ eventName: r("AdsMessengerVisualEditorLoggerEvents").CTM_RENDER_VE_GREETING_SECTION });
	}
	function S(e, t) {
		return o("AdsUEditorMessagingDestinationUtils").isIGDirect(e) ? t.media_type === r("AdsMessengerJSONMediaFormatType").IMAGE : !1;
	}
	l.default = h;
}), 226);
