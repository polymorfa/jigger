__d("WAWebMessageMeta.react", [
	"fbt",
	"WAWebABPropsSaga",
	"WAWebAddOnBubbleRenderUtils",
	"WAWebBizCtwaAGMUtils",
	"WAWebBotBaseGating",
	"WAWebBotGating",
	"WAWebBotPluginMsgBubbleMeta.react",
	"WAWebBotTypes",
	"WAWebBroadcastDeliveringLabel.react",
	"WAWebBroadcastDeliveringLabelView.react",
	"WAWebChatGetters",
	"WAWebClock",
	"WAWebCmd",
	"WAWebContactGetters",
	"WAWebDisplayType",
	"WAWebFlex.react",
	"WAWebFollowUpReplyIcon.react",
	"WAWebFrontendMsgGetters",
	"WAWebKeepInChatIcon.react",
	"WAWebLidMigrationUtils",
	"WAWebMessageAIContentLabel.react",
	"WAWebMessageStatus",
	"WAWebMsgGetters",
	"WAWebMsgType",
	"WAWebMsgViewCount",
	"WAWebNewsletterGatingUtils",
	"WAWebPinnedSmallIcon.react",
	"WAWebPremiumChannelFilledIcon.react",
	"WAWebQuotedMsgUtils",
	"WAWebSagaMessageMarker.react",
	"WAWebStarIcon.react",
	"WAWebStateUtils",
	"WAWebTextSizeUtils",
	"WAWebThreadMsgUtils",
	"WAWebThreadsGating",
	"WAWebUA",
	"WAWebWid",
	"WDSIconIcCampaignMegaphone.react",
	"WDSIconIcVisibilityOn.react",
	"WDSIconWdsIcAiFilled.react",
	"WDSMargins.stylex",
	"WDSPaddings.stylex",
	"WDSText.react",
	"WDSTextContainer.react",
	"isStringNullOrEmpty",
	"react",
	"react-compiler-runtime",
	"stylex",
	"useWAWebCanOpenInfoDrawer",
	"useWAWebContactValues",
	"useWAWebListener",
	"useWAWebMsgValues",
	"useWAWebShouldShowMsgPinnedIcon"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react")), d = u.useState, m = {
		paddingBlock3: {
			paddingTop: "xyqdw3p",
			paddingBottom: "xg8j3zb",
			$$css: !0
		},
		paddingInlineStart6: {
			paddingInlineStart: "x25sj25",
			$$css: !0
		},
		paddingInlineEnd7: {
			paddingInlineEnd: "x1bjonze",
			$$css: !0
		},
		paddingBlock5: {
			paddingTop: "x123j3cw",
			paddingBottom: "xs9asl8",
			$$css: !0
		}
	}, p = {
		chromeFix: {
			lineHeight: "xuy8w9f",
			$$css: !0
		},
		bullet: {
			display: "x78zum5",
			$$css: !0
		},
		editedLabel: {
			marginInlineEnd: "x2fvf9",
			marginInlineStart: "xwklpps",
			$$css: !0
		}
	};
	function _(e) {
		var t = o("react-compiler-runtime").c(3), n = e.light, a;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (a = [p.bullet, o("WDSMargins.stylex").wdsMargins.marginHor4], t[0] = a) : a = t[0];
		var i = n === !0 ? "persistentAlwaysWhite" : "contentDeemphasized", l;
		return t[1] !== i ? (l = c.jsx(o("WAWebFlex.react").FlexColumn, {
			xstyle: a,
			justify: "center",
			children: c.jsx(r("WDSText.react"), {
				type: "Body3",
				colorName: i,
				children: "•"
			})
		}), t[1] = i, t[2] = l) : l = t[2], l;
	}
	function f(e) {
		var t, n, a, i, l = o("react-compiler-runtime").c(79), u = e.agmTag, m = e.associatedMessages, _ = e.displayType, f = e.isAlbum, g = e.isDelivering, C = e.msg, S = e.theme, R = e.xstyle, L;
		if (l[0] === Symbol.for("react.memo_cache_sentinel")) {
			var E;
			L = [
				(E = o("WAWebMsgGetters")).getBroadcast,
				E.getCaption,
				E.getIsLive,
				o("WAWebFrontendMsgGetters").getAsRevoked,
				E.getIsSentByMe,
				E.getIsViewOnce,
				E.getLoc,
				E.getStar,
				E.getT,
				E.getType,
				E.getSubtype,
				E.getIsSendFailure,
				E.getIsKept,
				E.getIsEdited,
				E.getIsBotResponse,
				E.getIsBizBot1pResponse,
				E.getBotPluginSearchQuery,
				E.getIsWamoSub
			], l[0] = L;
		} else L = l[0];
		var k = o("useWAWebMsgValues").useMsgValues(C.id, L), I = k[0], T = k[1], D = k[2], x = k[3], $ = k[4], P = k[5], N = k[6], M = k[7], w = k[8], A = k[9], F = k[10], O = k[11], B = k[12], W = k[13], q = k[14], U = k[15], V = k[16], H = k[17], G = o("WAWebMsgViewCount").useWAWebLocalizedViewCount(C.id), z;
		l[1] !== C ? (z = C.unsafe(), l[1] = C, l[2] = z) : z = l[2];
		var j = r("useWAWebShouldShowMsgPinnedIcon")(z), K = o("WAWebMessageAIContentLabel.react").useShouldShowAiContentLabel(C, m) && !x, Q = d(!1), X = Q[0], Y = Q[1], J;
		l[3] !== X ? (J = function() {
			Y(!X);
		}, l[3] = X, l[4] = J) : J = l[4], o("useWAWebListener").useListener(o("WAWebClock").Clock, o("WAWebClock").HOUR24_FORMAT_CHANGE_EVENT, J);
		var Z;
		l[5] !== C ? (Z = function() {
			o("WAWebCmd").Cmd.msgInfoDrawer(o("WAWebStateUtils").unproxy(C.unsafe()));
		}, l[5] = C, l[6] = Z) : Z = l[6];
		var ee = Z, te = [], ne;
		l[7] !== T || l[8] !== D || l[9] !== P || l[10] !== N || l[11] !== A ? (ne = (A === o("WAWebMsgType").MSG_TYPE.IMAGE || A === o("WAWebMsgType").MSG_TYPE.VIDEO) && r("isStringNullOrEmpty")(T) && !P || A === o("WAWebMsgType").MSG_TYPE.LOCATION && !D && !N, l[7] = T, l[8] = D, l[9] = P, l[10] = N, l[11] = A, l[12] = ne) : ne = l[12];
		var re = ne;
		if (M && !x) {
			var oe;
			l[13] === Symbol.for("react.memo_cache_sentinel") ? (oe = s._(
				/*BTDS*/
				""
			).toString(), l[13] = oe) : oe = l[13];
			var ae = " " + oe + " ", ie;
			l[14] !== ae ? (ie = c.jsx(o("WAWebStarIcon.react").StarIcon, { "aria-label": ae }), l[14] = ae, l[15] = ie) : ie = l[15], te.push(ie);
		}
		if (B && !x) {
			var le;
			l[16] === Symbol.for("react.memo_cache_sentinel") ? (le = s._(
				/*BTDS*/
				""
			).toString(), l[16] = le) : le = l[16];
			var se = " " + le + " ", ue;
			l[17] !== se ? (ue = c.jsx(o("WAWebKeepInChatIcon.react").KeepInChatIcon, {
				width: 15.64,
				height: 14.67,
				"aria-label": se
			}), l[17] = se, l[18] = ue) : ue = l[18], te.push(ue);
		}
		if (I && C.type !== o("WAWebMsgType").MSG_TYPE.NEWSLETTER_FOLLOWER_INVITE) {
			var ce;
			l[19] === Symbol.for("react.memo_cache_sentinel") ? (ce = c.jsx(r("WDSIconIcCampaignMegaphone.react"), {
				height: 15,
				width: 16
			}), l[19] = ce) : ce = l[19], te.push(ce);
		}
		if (j && !x) {
			var de;
			l[20] === Symbol.for("react.memo_cache_sentinel") ? (de = s._(
				/*BTDS*/
				""
			).toString(), l[20] = de) : de = l[20];
			var me = " " + de + " ", pe;
			l[21] !== me ? (pe = c.jsx(o("WAWebPinnedSmallIcon.react").PinnedSmallIcon, {
				width: 15,
				"aria-label": me
			}), l[21] = me, l[22] = pe) : pe = l[22], te.push(pe);
		}
		var _e = o("WAWebThreadMsgUtils").getMsgViewAllRepliesThread(C);
		if (_e != null && o("WAWebQuotedMsgUtils").getMessagesCountByThreadId(_e) >= 2 && o("WAWebThreadsGating").isFollowUpReplyEnabled()) {
			var fe;
			l[23] === Symbol.for("react.memo_cache_sentinel") ? (fe = c.jsx(o("WAWebFollowUpReplyIcon.react").FollowUpReplyIcon, { width: 15 }), l[23] = fe) : fe = l[23], te.push(fe);
		}
		var ge = $ && !x, he = null;
		if (ge && _ !== o("WAWebDisplayType").DISPLAY_TYPE.SCHEDULED_MSGS) {
			var ye;
			l[24] !== C ? (ye = C.unsafe(), l[24] = C, l[25] = ye) : ye = l[25];
			var Ce;
			l[26] !== m || l[27] !== ye ? (Ce = c.jsx(r("WAWebMessageStatus"), {
				msg: ye,
				associatedMessages: m
			}), l[26] = m, l[27] = ye, l[28] = Ce) : Ce = l[28], he = Ce;
		}
		(A === o("WAWebMsgType").MSG_TYPE.CIPHERTEXT && F === "fanout" || O === !0) && (he = null);
		var be = o("WAWebFrontendMsgGetters").getChat(C.unsafe()), ve = o("WAWebNewsletterGatingUtils").isNewsletterViewCountEnabled(be == null || (t = be.newsletterMetadata) == null ? void 0 : t.membershipType) && f !== !0 && G != null && _ !== o("WAWebDisplayType").DISPLAY_TYPE.CHANNEL_ALERTS_MSGS && C.type !== o("WAWebMsgType").MSG_TYPE.REVOKED ? c.jsxs(o("WAWebFlex.react").FlexRow, {
			align: "center",
			children: [o("WAWebNewsletterGatingUtils").isNewsletterViewsVPVDefinitionEnabled() && c.jsx("div", babelHelpers.extends({}, {
				0: { className: "xhslqc4 x78zum5 x6s0dn4 x14ju556 x7g7pl8" },
				1: { className: "x78zum5 x6s0dn4 x14ju556 x7g7pl8 x17t9dm2" }
			}[(re === !0) << 0], { children: c.jsx(r("WDSIconIcVisibilityOn.react"), {
				width: 12,
				height: 12
			}) })), c.jsx(r("WDSText.react"), {
				type: "Body3",
				colorName: re ? "persistentAlwaysWhite" : "contentDeemphasized",
				children: c.jsx("span", {
					"data-testid": "view-count",
					children: G
				})
			})]
		}) : null, Se;
		if (W && !x && !q) {
			var Re;
			l[29] === Symbol.for("react.memo_cache_sentinel") ? (Re = y(), l[29] = Re) : Re = l[29];
			var Le = Re, Ee = re ? "persistentAlwaysWhite" : "contentDeemphasized", ke;
			l[30] !== Ee ? (ke = c.jsx(r("WDSText.react"), {
				type: "Body3",
				xstyle: p.editedLabel,
				colorName: Ee,
				children: Le
			}), l[30] = Ee, l[31] = ke) : ke = l[31], Se = ke;
		}
		var Ie;
		l[32] !== m || l[33] !== C || l[34] !== K || l[35] !== re ? (Ie = K ? c.jsx(o("WAWebMessageAIContentLabel.react").WAWebMessageAIContentLabel, {
			msg: C,
			associatedMessages: m,
			color: re ? "light" : "secondary"
		}) : null, l[32] = m, l[33] = C, l[34] = K, l[35] = re, l[36] = Ie) : Ie = l[36];
		var Te = Ie, De, xe = b(C), $e = v(C);
		if (r("WAWebWid").isCAPISupportAccount(C == null || (n = C.id) == null ? void 0 : n.remote) && $e != null && o("WAWebABPropsSaga").getIsSagaProtobufAIStardustEnabled()) {
			var Pe;
			l[37] === Symbol.for("react.memo_cache_sentinel") ? (Pe = { className: "x2fvf9 xwklpps" }, l[37] = Pe) : Pe = l[37];
			var Ne;
			l[38] !== $e ? (Ne = c.jsx("span", babelHelpers.extends({}, Pe, {
				"data-testid": "ai-label",
				children: $e
			})), l[38] = $e, l[39] = Ne) : Ne = l[39], De = Ne;
			var Me;
			l[40] === Symbol.for("react.memo_cache_sentinel") ? (Me = c.jsx(r("WDSIconWdsIcAiFilled.react"), {
				width: 14,
				height: 14
			}), l[40] = Me) : Me = l[40], te.push(Me);
		} else if (xe != null) {
			var we;
			l[41] === Symbol.for("react.memo_cache_sentinel") ? (we = { className: "x2fvf9 xwklpps" }, l[41] = we) : we = l[41];
			var Ae;
			l[42] !== xe ? (Ae = c.jsx("span", babelHelpers.extends({}, we, {
				"data-testid": "ai-label",
				children: xe
			})), l[42] = xe, l[43] = Ae) : Ae = l[43], De = Ae;
			var Fe;
			l[44] === Symbol.for("react.memo_cache_sentinel") ? (Fe = c.jsx(r("WDSIconWdsIcAiFilled.react"), {
				width: 14,
				height: 14
			}), l[44] = Fe) : Fe = l[44], te.push(Fe);
		}
		var Oe;
		if (o("WAWebBotGating").showBotSearchPlugin(C.unsafe())) {
			var Be;
			l[45] !== C ? (Be = o("WAWebMsgGetters").getBotPluginSearchUrl(C), l[45] = C, l[46] = Be) : Be = l[46];
			var We;
			l[47] !== C ? (We = o("WAWebMsgGetters").getBotPluginSearchProvider(C), l[47] = C, l[48] = We) : We = l[48];
			var qe;
			l[49] !== V || l[50] !== w || l[51] !== Be || l[52] !== We ? (qe = c.jsx(r("WAWebBotPluginMsgBubbleMeta.react"), {
				t: w,
				botPluginSearchQuery: V,
				botPluginSearchUrl: Be,
				botPluginSearchProvider: We
			}), l[49] = V, l[50] = w, l[51] = Be, l[52] = We, l[53] = qe) : qe = l[53], Oe = qe;
		}
		var Ue;
		if (xe == null && o("WAWebMsgGetters").getIsCAPISupport(C) && U && o("WAWebABPropsSaga").getIsSagaV1Enabled()) {
			var Ve;
			l[54] === Symbol.for("react.memo_cache_sentinel") ? (Ve = c.jsx(r("WAWebSagaMessageMarker.react"), {
				width: 11,
				height: 11,
				marginRight: !0
			}), l[54] = Ve) : Ve = l[54], Ue = Ve;
		}
		var He;
		l[55] !== H ? (He = H === !0 && o("WAWebNewsletterGatingUtils").isWamoSubMessagesSupported() ? c.jsx(o("WAWebPremiumChannelFilledIcon.react").PremiumChannelFilledIcon, {
			width: 11,
			height: 11
		}) : null, l[55] = H, l[56] = He) : He = l[56];
		var Ge = He, ze = r("useWAWebCanOpenInfoDrawer")(C.id), je = ze && _ !== o("WAWebDisplayType").DISPLAY_TYPE.EDITING && _ !== o("WAWebDisplayType").DISPLAY_TYPE.MSG_INFO && _ !== o("WAWebDisplayType").DISPLAY_TYPE.SCHEDULED_MSGS, Ke;
		l[57] !== C || l[58] !== w || l[59] !== S ? (w && (S !== "date" ? Ke = o("WAWebClock").Clock.timestampStr(w) : Ke = o("WAWebClock").Clock.relativeStr(w)), Ke != null && o("WAWebLidMigrationUtils").getShouldShowLidDebugUIForMsg(C) && (Ke = Ke.toString() + " [LID]"), l[57] = C, l[58] = w, l[59] = S, l[60] = Ke) : Ke = l[60];
		var Qe = re ? "persistentAlwaysWhite" : "contentDeemphasized", Xe;
		l[61] !== Qe || l[62] !== Ke ? (Xe = c.jsx(r("WDSText.react"), {
			type: "Body3",
			colorName: Qe,
			children: Ke
		}), l[61] = Qe, l[62] = Ke, l[63] = Xe) : Xe = l[63];
		var Ye = Xe, Je;
		if (u != null && o("WAWebBizCtwaAGMUtils").isAutomatedGreetingMessage({
			isAGMShown: (a = C.ctwaContext) == null ? void 0 : a.automatedGreetingMessageShown,
			msgSource: (i = C.ctwaContext) == null ? void 0 : i.sourceApp,
			msgSubtype: C.subtype,
			msgType: C.type
		})) {
			var Ze = re ? "persistentAlwaysWhite" : "contentDeemphasized", et;
			l[64] !== u || l[65] !== Ze ? (et = c.jsx(r("WDSText.react"), {
				type: "Body3",
				colorName: Ze,
				children: u
			}), l[64] = u, l[65] = Ze, l[66] = et) : et = l[66], Je = et, he = null;
		} else A === o("WAWebMsgType").MSG_TYPE.CALL_LOG && (he = null);
		var tt;
		if (ge && be != null && o("WAWebChatGetters").getIsBroadcast(be)) {
			var nt;
			l[67] !== g || l[68] !== C || l[69] !== re ? (nt = g != null ? c.jsx(r("WAWebBroadcastDeliveringLabelView.react"), {
				isDelivering: g,
				light: re
			}) : c.jsx(r("WAWebBroadcastDeliveringLabel.react"), {
				light: re,
				msg: C.unsafe()
			}), l[67] = g, l[68] = C, l[69] = re, l[70] = nt) : nt = l[70], tt = nt;
		}
		var rt = Oe == null && Je == null && Ye, ot;
		l[71] !== Je || l[72] !== De || l[73] !== Oe || l[74] !== tt || l[75] !== Se || l[76] !== Ue || l[77] !== rt ? (ot = c.jsxs(r("WDSTextContainer.react"), { children: [
			Se,
			Ue,
			De,
			Oe,
			tt,
			rt,
			Je
		] }), l[71] = Je, l[72] = De, l[73] = Oe, l[74] = tt, l[75] = Se, l[76] = Ue, l[77] = rt, l[78] = ot) : ot = l[78];
		var at = ot;
		return c.jsx(h, {
			icons: te,
			aiContentLabel: Te,
			premiumMessageMarker: Ge,
			light: re,
			viewCount: ve,
			includeBotSearchPluginDetailToggleEl: Oe != null,
			onClick: je ? ee : null,
			status: he,
			xstyle: R,
			children: at
		});
	}
	f.displayName = f.name + " [from " + i.id + "]";
	var g = {
		meta: {
			color: "x1bvqhpb",
			fontSize: "x1ncwhqj",
			height: "xx3o462",
			lineHeight: "x152skdk",
			whiteSpace: "xuxw1ft",
			display: "x78zum5",
			alignItems: "x6s0dn4",
			$$css: !0
		},
		metaLight: {
			color: "x17t9dm2",
			$$css: !0
		},
		botPlugin: {
			height: "x5yr21d",
			$$css: !0
		}
	};
	function h(t) {
		var n = o("react-compiler-runtime").c(33), a = t.aiContentLabel, i = t.children, l = t.icons, s = t.includeBotSearchPluginDetailToggleEl, u = t.light, d = t.onClick, m = t.premiumMessageMarker, f = t.status, h = t.viewCount, y = t.xstyle, C;
		n[0] !== l || n[1] !== u ? (C = l && l.length > 0 ? l.map(function(e, t) {
			return c.createElement("div", babelHelpers.extends({}, {
				0: { className: "xhslqc4 x1rg5ohu x16q7b9a" },
				1: { className: "x1rg5ohu x16q7b9a x17t9dm2" }
			}[(u === !0) << 0], { key: "icon-" + t }), e);
		}) : null, n[0] = l, n[1] = u, n[2] = C) : C = n[2];
		var b = C, v;
		n[3] !== u || n[4] !== m ? (v = m ? c.jsx("div", babelHelpers.extends({}, {
			0: { className: "xhslqc4 x1rg5ohu x7phf20" },
			1: { className: "x1rg5ohu x7phf20 x17t9dm2" }
		}[(u === !0) << 0], {
			"data-testid": "premium-message",
			children: m
		})) : null, n[3] = u, n[4] = m, n[5] = v) : v = n[5];
		var S = v, R;
		n[6] !== f ? (R = f ? c.jsx("div", {
			className: "xhslqc4 x1rg5ohu x7phf20",
			children: f
		}) : null, n[6] = f, n[7] = R) : R = n[7];
		var L = R, E;
		n[8] !== a || n[9] !== u ? (E = a != null ? c.jsxs(o("WAWebFlex.react").FlexRow, {
			align: "center",
			children: [a, c.jsx(_, { light: u })]
		}) : null, n[8] = a, n[9] = u, n[10] = E) : E = n[10];
		var k = E, I;
		n[11] !== u || n[12] !== h ? (I = h != null ? c.jsxs(o("WAWebFlex.react").FlexRow, {
			align: "center",
			children: [h, c.jsx(_, { light: u })]
		}) : null, n[11] = u, n[12] = h, n[13] = I) : I = n[13];
		var T = I, D;
		if (n[14] !== s || n[15] !== u || n[16] !== y) {
			var x = o("WAWebTextSizeUtils").getWAWebTextSizeStyles().metaTextStyles;
			D = (e || (e = r("stylex")))(g.meta, u === !0 && g.metaLight, o("WAWebUA").UA.os === o("WAWebUA").OS_TYPE.MAC && o("WAWebUA").UA.browser === o("WAWebUA").BROWSER_TYPE.CHROME && o("WAWebUA").UA.osVersion.includes("10.15") && p.chromeFix, s && g.botPlugin, x, y), n[14] = s, n[15] = u, n[16] = y, n[17] = D;
		} else D = n[17];
		var $ = D, P = d ? "button" : null, N;
		n[18] !== s ? (N = {
			0: { className: "x1rg5ohu x16dsc37" },
			1: { className: "x1rg5ohu x1qughib xh8yej3" }
		}[(s === !0) << 0], n[18] = s, n[19] = N) : N = n[19];
		var M;
		n[20] !== i || n[21] !== N ? (M = c.jsx("span", babelHelpers.extends({}, N, {
			dir: "auto",
			children: i
		})), n[20] = i, n[21] = N, n[22] = M) : M = n[22];
		var w;
		return n[23] !== k || n[24] !== $ || n[25] !== b || n[26] !== d || n[27] !== S || n[28] !== L || n[29] !== P || n[30] !== M || n[31] !== T ? (w = c.jsxs("div", {
			className: $,
			"data-testid": "msg-meta",
			onClick: d,
			role: P,
			children: [
				b,
				k,
				T,
				M,
				S,
				L
			]
		}), n[23] = k, n[24] = $, n[25] = b, n[26] = d, n[27] = S, n[28] = L, n[29] = P, n[30] = M, n[31] = T, n[32] = w) : w = n[32], w;
	}
	function y() {
		return s._(
			/*BTDS*/
			""
		);
	}
	y.displayName = y.name + " [from " + i.id + "]";
	function C() {
		return s._(
			/*BTDS*/
			""
		);
	}
	C.displayName = C.name + " [from " + i.id + "]";
	function b(e) {
		var t, n = o("react-compiler-runtime").c(2), r;
		n[0] === Symbol.for("react.memo_cache_sentinel") ? (r = [
			o("WAWebFrontendMsgGetters").getAsRevoked,
			o("WAWebMsgGetters").getIsBizBot1pResponse,
			o("WAWebMsgGetters").getBizBotType
		], n[0] = r) : r = n[0];
		var a = o("useWAWebMsgValues").useMsgValues(e.id, r), i = a[0], l = a[1], u = a[2], c = (t = o("useWAWebContactValues").useOptionalContactValues(e.to, [o("WAWebContactGetters").getBusinessProfile])) != null ? t : [], d = c[0];
		if (!o("WAWebBotBaseGating").isBizBot1pEnabled() || i) return null;
		var m = e.id.fromMe && u === o("WAWebBotTypes").BizBotType.BIZ_1P && !(d != null && d.automatedType);
		if (!l && !m) return null;
		var p;
		return n[1] === Symbol.for("react.memo_cache_sentinel") ? (p = s._(
			/*BTDS*/
			""
		), n[1] = p) : p = n[1], p;
	}
	function v(e) {
		var t = o("react-compiler-runtime").c(2), n;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (n = [o("WAWebMsgGetters").getIsSupportAIMessage, o("WAWebMsgGetters").getBizBotType], t[0] = n) : n = t[0];
		var r = o("useWAWebMsgValues").useMsgValues(e.id, n), a = r[0], i = r[1], l = !1;
		if (i === o("WAWebBotTypes").BizBotType.BIZ_1P && (l = !0), a != null && (l = a), l === !0) {
			var u;
			return t[1] === Symbol.for("react.memo_cache_sentinel") ? (u = s._(
				/*BTDS*/
				""
			), t[1] = u) : u = t[1], u;
		}
		return null;
	}
	var S = {
		authorIsMe: {
			backgroundColor: "x1g5lz36",
			$$css: !0
		},
		authorIsNotMe: {
			backgroundColor: "x1ew7x2d",
			$$css: !0
		},
		transparentStyles: {
			width: "xeq5yr9",
			borderStartStartRadius: "x1liijdw",
			borderStartEndRadius: "xu342n7",
			borderEndEndRadius: "xelbjmh",
			borderEndStartRadius: "x16pgt24",
			boxShadow: "x1lpesih",
			$$css: !0
		},
		fiftyBorderRadius: {
			borderStartStartRadius: "xal68kn",
			borderStartEndRadius: "x51dqfy",
			borderEndEndRadius: "x1w4cqa3",
			borderEndStartRadius: "x1byqp33",
			$$css: !0
		}
	};
	function R(t) {
		var n = o("react-compiler-runtime").c(11), a = t.children, i = t.displayType, l = t.isSentByMe, s = t.isTransparent, u = t.ref, d = t.xstyle, p;
		n[0] === Symbol.for("react.memo_cache_sentinel") ? (p = [
			m.paddingBlock3,
			m.paddingInlineStart6,
			m.paddingInlineEnd7,
			S.transparentStyles
		], n[0] = p) : p = n[0];
		var _ = p, f;
		n[1] === Symbol.for("react.memo_cache_sentinel") ? (f = [
			m.paddingBlock5,
			o("WDSPaddings.stylex").wdsPaddings.paddingHor8,
			S.fiftyBorderRadius
		], n[1] = f) : f = n[1];
		var g = f, h;
		n[2] !== i || n[3] !== l || n[4] !== s || n[5] !== d ? (h = (e || (e = r("stylex"))).props(o("WDSMargins.stylex").wdsMargins.marginStartAuto, s && (l ? S.authorIsMe : S.authorIsNotMe), s && _, s && o("WAWebAddOnBubbleRenderUtils").isAddOnBubbleCentered(i) && g, d), n[2] = i, n[3] = l, n[4] = s, n[5] = d, n[6] = h) : h = n[6];
		var y;
		return n[7] !== a || n[8] !== u || n[9] !== h ? (y = c.jsx("div", babelHelpers.extends({ ref: u }, h, { children: a })), n[7] = a, n[8] = u, n[9] = h, n[10] = y) : y = n[10], y;
	}
	var L = R;
	l.MetaBullet = _, l.Meta = f, l.getEditedLabel = y, l.getAGMTag = C, l.useBizBot1pLabel = b, l.MetaWrapper = L;
}), 226);
