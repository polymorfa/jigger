__d("WAWebNewsletterEnforcementInformMsg.react", [
	"WAJids",
	"WAWebBox.react",
	"WAWebChatEntryPoint",
	"WAWebClock",
	"WAWebCommonNewsletterEnums",
	"WAWebCommonNewsletterIntegrityStrings",
	"WAWebDeleteRevokeMsgFlow.react",
	"WAWebDisplayType",
	"WAWebEnforcementActionLogging",
	"WAWebEnforcementStatusThumbnail.react",
	"WAWebFlex.react",
	"WAWebFrontendMsgGetters",
	"WAWebGalleryMsg.react",
	"WAWebMessagePosition",
	"WAWebMessageWrapper.react",
	"WAWebModalManager",
	"WAWebNewsletterGatingUtils",
	"WAWebNewsletterIntegrityDeleteStatus.react",
	"WAWebNewsletterIntegrityDrawerUiComponents.react",
	"WAWebNewsletterIntegrityUtils",
	"WAWebNewsletterOpenAtAction",
	"WAWebOpenNewsletterEnforcementStatusViewer",
	"WAWebRemediationOptionSection.react",
	"WAWebRevokeMetricUtils",
	"WAWebStateUtils",
	"WDSMargins.stylex",
	"WDSPaddings.stylex",
	"WDSText.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = e.useCallback, c = {
		marginBottom10: {
			marginBottom: "xyorhqc",
			$$css: !0
		},
		marginBlock10: {
			marginTop: "x1anpbxc",
			marginBottom: "xyorhqc",
			$$css: !0
		}
	}, d = { policyText: {
		textAlign: "x1yc453h",
		width: "xh8yej3",
		$$css: !0
	} };
	function m(e) {
		var t, n, a, i, l = o("react-compiler-runtime").c(47), u = e.currentEnforcementAlert, m = e.currentEnforcementAppeal, p = e.msg, _ = e.onClickSeeOptions, f = e.title, g = ((t = m.violatingContentData) == null ? void 0 : t.contentType) === o("WAWebCommonNewsletterEnums").ViolatingContentType.STATUS || ((n = m.enforcementExtraData) == null || (n = n.enforcementTargetData) == null ? void 0 : n.contentType) === o("WAWebCommonNewsletterEnums").ViolatingContentType.STATUS, h;
		if (l[0] !== u.enforcementType || l[1] !== ((a = m.violatingContentData) == null ? void 0 : a.serverId) || l[2] !== g || l[3] !== p) {
			var y;
			h = u.enforcementType === o("WAWebCommonNewsletterEnums").EnforcementType.VIOLATING_MSG && g !== !0 ? function() {
				var e, t = (e = m.violatingContentData) == null ? void 0 : e.serverId;
				if (t != null) {
					var n = o("WAWebFrontendMsgGetters").getChat(p);
					o("WAWebNewsletterOpenAtAction").openNewsletterAt({
						newsletterJid: o("WAJids").toNewsletterJid(n.id.toString()),
						serverId: t,
						chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint.NewsletterIntegrity
					});
				}
			} : void 0, l[0] = u.enforcementType, l[1] = (y = m.violatingContentData) == null ? void 0 : y.serverId, l[2] = g, l[3] = p, l[4] = h;
		} else h = l[4];
		var C = h, b;
		l[5] !== g || l[6] !== p ? (b = function(t) {
			t.preventDefault(), t.stopPropagation(), r("WAWebEnforcementActionLogging").logDeleteFromChannelClick(), g === !0 ? o("WAWebModalManager").ModalManager.open(s.jsx(r("WAWebNewsletterIntegrityDeleteStatus.react"), { msg: p })) : (o("WAWebModalManager").ModalManager.open(s.jsx(r("WAWebDeleteRevokeMsgFlow.react"), {
				chat: o("WAWebFrontendMsgGetters").getChat(p),
				msgList: [o("WAWebStateUtils").unproxy(p)],
				fromChannelAlerts: !0
			})), o("WAWebRevokeMetricUtils").UiRevokeActionHelper.startSession(), o("WAWebRevokeMetricUtils").UiRevokeActionHelper.messageSelected());
		}, l[5] = g, l[6] = p, l[7] = b) : b = l[7];
		var v = b, S;
		l[8] !== u || l[9] !== m || l[10] !== _ ? (S = function() {
			_(u, m);
		}, l[8] = u, l[9] = m, l[10] = _, l[11] = S) : S = l[11];
		var R = S, L;
		l[12] !== p.id ? (L = p.id.toString(), l[12] = p.id, l[13] = L) : L = l[13];
		var E;
		l[14] === Symbol.for("react.memo_cache_sentinel") ? (E = [
			c.marginBottom10,
			o("WDSPaddings.stylex").wdsPaddings.paddingHor24,
			o("WDSMargins.stylex").wdsMargins.marginTop8
		], l[14] = E) : E = l[14];
		var k;
		l[15] !== p.t ? (k = o("WAWebClock").Clock.relativeStr(p.t), l[15] = p.t, l[16] = k) : k = l[16];
		var I;
		l[17] !== k ? (I = s.jsx(o("WAWebFlex.react").FlexRow, {
			align: "center",
			grow: 1,
			shrink: 0,
			justify: "end",
			children: s.jsx(r("WDSText.react"), {
				type: "Body2",
				colorName: "contentDeemphasized",
				children: k
			})
		}), l[17] = k, l[18] = I) : I = l[18];
		var T;
		l[19] !== I || l[20] !== f ? (T = s.jsxs(o("WAWebFlex.react").FlexRow, {
			xstyle: E,
			justify: "all",
			align: "center",
			children: [f, I]
		}), l[19] = I, l[20] = f, l[21] = T) : T = l[21];
		var D;
		l[22] !== g || l[23] !== p ? (D = g === !0 ? s.jsx(r("WAWebEnforcementStatusThumbnail.react"), {
			msg: p,
			onPress: function() {
				return o("WAWebOpenNewsletterEnforcementStatusViewer").openEnforcementStatusViewer(p);
			}
		}) : s.jsx(r("WAWebMessageWrapper.react"), {
			msg: p,
			displayType: o("WAWebDisplayType").DISPLAY_TYPE.CHANNEL_ALERTS_MSGS,
			position: o("WAWebMessagePosition").MsgPosition.MID,
			errorBoundaryName: "newsletter-enforcement-inform-msg"
		}), l[22] = g, l[23] = p, l[24] = D) : D = l[24];
		var x;
		l[25] === Symbol.for("react.memo_cache_sentinel") ? (x = [
			o("WDSMargins.stylex").wdsMargins.marginVer8,
			o("WDSPaddings.stylex").wdsPaddings.paddingStart32,
			o("WDSPaddings.stylex").wdsPaddings.paddingEnd24
		], l[25] = x) : x = l[25];
		var $;
		if (l[26] !== ((i = m.enforcementExtraData) == null ? void 0 : i.enforcingEntityData) || l[27] !== m.enforcementPolicyInformation || l[28] !== m.enforcementViolationCategory || l[29] !== g) {
			var P, N;
			$ = o("WAWebNewsletterGatingUtils").isNewsletterEnforcementPolicyEducationEnabled() ? o("WAWebNewsletterIntegrityUtils").getServerDrivenPolicyGuideline(m.enforcementPolicyInformation) : o("WAWebNewsletterIntegrityUtils").getSuspendInformPolicyGuideline_ToBeDeprecated(m.enforcementViolationCategory, (P = m.enforcementExtraData) == null ? void 0 : P.enforcingEntityData, g === !0), l[26] = (N = m.enforcementExtraData) == null ? void 0 : N.enforcingEntityData, l[27] = m.enforcementPolicyInformation, l[28] = m.enforcementViolationCategory, l[29] = g, l[30] = $;
		} else $ = l[30];
		var M;
		l[31] !== $ ? (M = s.jsx(o("WAWebFlex.react").FlexRow, {
			xstyle: x,
			align: "center",
			children: s.jsx(r("WAWebBox.react"), {
				xstyle: d.policyText,
				testid: "enforcement-policy-text",
				children: s.jsx(r("WDSText.react"), {
					type: "Body2",
					colorName: "contentDeemphasized",
					children: $
				})
			})
		}), l[31] = $, l[32] = M) : M = l[32];
		var w;
		l[33] === Symbol.for("react.memo_cache_sentinel") ? (w = o("WAWebCommonNewsletterIntegrityStrings").deleteViolatingContentText(), l[33] = w) : w = l[33];
		var A;
		l[34] !== v ? (A = s.jsx(o("WAWebFlex.react").FlexRow, {
			xstyle: c.marginBlock10,
			justify: "center",
			children: s.jsx(o("WAWebNewsletterIntegrityDrawerUiComponents.react").DeleteButton, {
				handleDelete: v,
				title: w
			})
		}), l[34] = v, l[35] = A) : A = l[35];
		var F;
		l[36] !== m.enforcementType || l[37] !== R ? (F = s.jsx(o("WAWebFlex.react").FlexRow, {
			xstyle: c.marginBlock10,
			justify: "center",
			children: s.jsx(r("WAWebRemediationOptionSection.react"), {
				buttonType: "secondary",
				stretch: !1,
				onClickSeeOptions: R,
				enforcementType: m.enforcementType
			})
		}), l[36] = m.enforcementType, l[37] = R, l[38] = F) : F = l[38];
		var O;
		return l[39] !== C || l[40] !== M || l[41] !== A || l[42] !== F || l[43] !== L || l[44] !== T || l[45] !== D ? (O = s.jsxs(r("WAWebGalleryMsg.react"), {
			onClick: C,
			children: [
				T,
				D,
				M,
				A,
				F
			]
		}, L), l[39] = C, l[40] = M, l[41] = A, l[42] = F, l[43] = L, l[44] = T, l[45] = D, l[46] = O) : O = l[46], O;
	}
	l.default = m;
}), 98);
