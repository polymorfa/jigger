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
	"react"
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
		var t, n, a, i = e.currentEnforcementAlert, l = e.currentEnforcementAppeal, m = e.msg, p = e.onClickSeeOptions, _ = e.title, f = ((t = l.violatingContentData) == null ? void 0 : t.contentType) === o("WAWebCommonNewsletterEnums").ViolatingContentType.STATUS || ((n = l.enforcementExtraData) == null || (n = n.enforcementTargetData) == null ? void 0 : n.contentType) === o("WAWebCommonNewsletterEnums").ViolatingContentType.STATUS, g = i.enforcementType === o("WAWebCommonNewsletterEnums").EnforcementType.VIOLATING_MSG && f !== !0 ? function() {
			var e, t = (e = l.violatingContentData) == null ? void 0 : e.serverId;
			if (t != null) {
				var n = o("WAWebFrontendMsgGetters").getChat(m);
				o("WAWebNewsletterOpenAtAction").openNewsletterAt({
					newsletterJid: o("WAJids").toNewsletterJid(n.id.toString()),
					serverId: t,
					chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint.NewsletterIntegrity
				});
			}
		} : void 0, h = function(t) {
			t.preventDefault(), t.stopPropagation(), r("WAWebEnforcementActionLogging").logDeleteFromChannelClick(), f === !0 ? o("WAWebModalManager").ModalManager.open(s.jsx(r("WAWebNewsletterIntegrityDeleteStatus.react"), { msg: m })) : (o("WAWebModalManager").ModalManager.open(s.jsx(r("WAWebDeleteRevokeMsgFlow.react"), {
				chat: o("WAWebFrontendMsgGetters").getChat(m),
				msgList: [o("WAWebStateUtils").unproxy(m)],
				fromChannelAlerts: !0
			})), o("WAWebRevokeMetricUtils").UiRevokeActionHelper.startSession(), o("WAWebRevokeMetricUtils").UiRevokeActionHelper.messageSelected());
		}, y = u(function() {
			p(i, l);
		}, [
			p,
			i,
			l
		]);
		return s.jsxs(r("WAWebGalleryMsg.react"), {
			onClick: g,
			children: [
				s.jsxs(o("WAWebFlex.react").FlexRow, {
					xstyle: [
						c.marginBottom10,
						o("WDSPaddings.stylex").wdsPaddings.paddingHor24,
						o("WDSMargins.stylex").wdsMargins.marginTop8
					],
					justify: "all",
					align: "center",
					children: [_, s.jsx(o("WAWebFlex.react").FlexRow, {
						align: "center",
						grow: 1,
						shrink: 0,
						justify: "end",
						children: s.jsx(r("WDSText.react"), {
							type: "Body2",
							colorName: "contentDeemphasized",
							children: o("WAWebClock").Clock.relativeStr(m.t)
						})
					})]
				}),
				f === !0 ? s.jsx(r("WAWebEnforcementStatusThumbnail.react"), {
					msg: m,
					onPress: function() {
						return o("WAWebOpenNewsletterEnforcementStatusViewer").openEnforcementStatusViewer(m);
					}
				}) : s.jsx(r("WAWebMessageWrapper.react"), {
					msg: m,
					displayType: o("WAWebDisplayType").DISPLAY_TYPE.CHANNEL_ALERTS_MSGS,
					position: o("WAWebMessagePosition").MsgPosition.MID,
					errorBoundaryName: "newsletter-enforcement-inform-msg"
				}),
				s.jsx(o("WAWebFlex.react").FlexRow, {
					xstyle: [
						o("WDSMargins.stylex").wdsMargins.marginVer8,
						o("WDSPaddings.stylex").wdsPaddings.paddingStart32,
						o("WDSPaddings.stylex").wdsPaddings.paddingEnd24
					],
					align: "center",
					children: s.jsx(r("WAWebBox.react"), {
						xstyle: d.policyText,
						testid: "enforcement-policy-text",
						children: s.jsx(r("WDSText.react"), {
							type: "Body2",
							colorName: "contentDeemphasized",
							children: o("WAWebNewsletterGatingUtils").isNewsletterEnforcementPolicyEducationEnabled() ? o("WAWebNewsletterIntegrityUtils").getServerDrivenPolicyGuideline(l.enforcementPolicyInformation) : o("WAWebNewsletterIntegrityUtils").getSuspendInformPolicyGuideline_ToBeDeprecated(l.enforcementViolationCategory, (a = l.enforcementExtraData) == null ? void 0 : a.enforcingEntityData, f === !0)
						})
					})
				}),
				s.jsx(o("WAWebFlex.react").FlexRow, {
					xstyle: c.marginBlock10,
					justify: "center",
					children: s.jsx(o("WAWebNewsletterIntegrityDrawerUiComponents.react").DeleteButton, {
						handleDelete: h,
						title: o("WAWebCommonNewsletterIntegrityStrings").deleteViolatingContentText()
					})
				}),
				s.jsx(o("WAWebFlex.react").FlexRow, {
					xstyle: c.marginBlock10,
					justify: "center",
					children: s.jsx(r("WAWebRemediationOptionSection.react"), {
						buttonType: "secondary",
						stretch: !1,
						onClickSeeOptions: y,
						enforcementType: l.enforcementType
					})
				})
			]
		}, m.id.toString());
	}
	m.displayName = m.name + " [from " + i.id + "]", l.default = m;
}), 98);
