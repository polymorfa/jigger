__d("WAWebChannelStatusPlayerOverflowMenu.react", [
	"fbt",
	"WALogger",
	"WAWebABProps",
	"WAWebChatEntryPoint",
	"WAWebCmd",
	"WAWebContactGetters",
	"WAWebCopyToClipboard",
	"WAWebDeleteRefreshedIcon.react",
	"WAWebExternalLink.react",
	"WAWebFaqUrl",
	"WAWebMegaphoneRefreshedIcon.react",
	"WAWebMsgActionCapability",
	"WAWebMsgGetters",
	"WAWebMsgType",
	"WAWebNewsletterApiParse",
	"WAWebNewsletterExecApiCmd",
	"WAWebNewsletterGatingUtils",
	"WAWebNewsletterMetadataCollection",
	"WAWebTabOrder",
	"WAWebToast.react",
	"WAWebToastManager",
	"WAWebWamEnumTsSurface",
	"WDSIconIcDownload.react",
	"WDSIconIcFastForward.react",
	"WDSIconIcInfo.react",
	"WDSIconIcLink.react",
	"WDSIconIcMoreVert.react",
	"WDSIconIcThumbDown.react",
	"WDSIconIcVisibility.react",
	"WDSIconIcVisibilityOff.react",
	"WDSIconWdsIcAiContent.react",
	"WDSIconWdsIcChannels.react",
	"WDSMenu.react",
	"WDSMenuBarItem.react",
	"WDSMenuItem.react",
	"getErrorSafe",
	"react",
	"useWAWebContactValues"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react"));
	function d(e) {
		var t = e.contact, n = e.msg, a = e.onAddAiContentLabel, i = e.onAddPaidPartnershipLabel, l = e.onDelete, u = e.onDownload, d = e.onForward, f = e.onHideOrUnhide, g = e.onOverflowMenuDismissed, h = e.onOverflowMenuShown, y = e.onReport, C = [];
		o("WAWebMsgGetters").getIsSentByMe(n) || C.push(c.jsx(r("WDSMenuItem.react"), {
			onPress: y,
			testid: "channel-status-overflow-menu-report",
			Icon: r("WDSIconIcThumbDown.react"),
			title: s._(
				/*BTDS*/
				""
			)
		}, "channel-status-overflow-menu-report"));
		var b = r("WAWebNewsletterMetadataCollection").get(n.id.remote);
		(b == null ? void 0 : b.iAmAdminOrOwner()) === !0 && C.push(c.jsx(r("WDSMenuItem.react"), {
			onPress: l,
			testid: "channel-status-overflow-menu-delete",
			Icon: o("WAWebDeleteRefreshedIcon.react").DeleteRefreshedIcon,
			title: s._(
				/*BTDS*/
				""
			)
		}, "channel-status-overflow-menu-delete")), u != null && C.push(c.jsx(r("WDSMenuItem.react"), {
			onPress: u,
			testid: "channel-status-overflow-menu-save",
			Icon: r("WDSIconIcDownload.react"),
			title: s._(
				/*BTDS*/
				""
			)
		}, "channel-status-overflow-menu-save")), C.push(c.jsx(m, {
			contact: t,
			msg: n,
			onHideOrUnhide: f
		}, "channel-status-overflow-menu-hide-unhide")), C.push(c.jsx(p, { onForward: d }, "channel-status-overflow-menu-forward")), C.push(c.jsx(_, { msg: n }, "channel-status-overflow-menu-copy-link"));
		var v = n.id.remote.toString(), S = function() {
			o("WAWebCmd").Cmd.closeStatusViewer(), o("WAWebNewsletterExecApiCmd").execNewsletterApiCmd({
				identifier: v,
				identifierType: o("WAWebNewsletterApiParse").NewsletterIdentifierType.Id,
				type: "view",
				chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint.NewsletterCTAOnStatus,
				discoverySurface: o("WAWebWamEnumTsSurface").TS_SURFACE.STATUS_VIEW
			});
		};
		return C.push(c.jsx(r("WDSMenuItem.react"), {
			onPress: S,
			testid: "channel-status-overflow-menu-view-channel",
			Icon: r("WDSIconWdsIcChannels.react"),
			title: s._(
				/*BTDS*/
				""
			)
		}, "channel-status-overflow-menu-view-channel")), o("WAWebMsgActionCapability").canAddPaidPartnershipLabelToMsg(n) && C.push(c.jsx(r("WDSMenuItem.react"), {
			onPress: i,
			testid: "mi-status-paid-partnership",
			Icon: o("WAWebMegaphoneRefreshedIcon.react").MegaphoneRefreshedIcon,
			title: s._(
				/*BTDS*/
				""
			)
		}, "channel-status-overflow-menu-paid-partnership")), o("WAWebMsgActionCapability").canAddAiContentLabelToMsg(n) && C.push(c.jsx(r("WDSMenuItem.react"), {
			onPress: a,
			testid: "mi-status-ai-content-label",
			Icon: r("WDSIconWdsIcAiContent.react"),
			title: s._(
				/*BTDS*/
				""
			)
		}, "channel-status-overflow-menu-ai-content-label")), o("WAWebABProps").getABPropConfigValue("channel_status_help_enabled") && C.push(c.jsx(r("WDSMenuItem.react"), {
			onPress: function() {
				return o("WAWebExternalLink.react").openExternalLink(o("WAWebFaqUrl").getNewsletterStatusIntroFaqUrl());
			},
			testid: "channel-status-overflow-menu-about-channel-status",
			Icon: r("WDSIconIcInfo.react"),
			title: s._(
				/*BTDS*/
				""
			)
		}, "channel-status-overflow-menu-about-channel-status")), C.length === 0 ? null : c.jsx(r("WDSMenuBarItem.react"), {
			icon: r("WDSIconIcMoreVert.react"),
			onClick: h,
			onMenuClose: g,
			testid: "channel-status-overflow-menu-icon",
			tabOrder: o("WAWebTabOrder").TAB_ORDER.STATUS_HEADER_SECTION,
			buttonType: "media",
			title: s._(
				/*BTDS*/
				""
			),
			menuAlign: "end",
			wdsMenuToRender: c.jsx(r("WDSMenu.react"), {
				testid: "channel-status-overflow-menu",
				children: C
			})
		});
	}
	d.displayName = d.name + " [from " + i.id + "]";
	function m(e) {
		var t = e.contact, n = e.msg, a = e.onHideOrUnhide, i = o("useWAWebContactValues").useContactValues(t.id, [o("WAWebContactGetters").getCalculatedStatusMute]), l = i[0];
		if (o("WAWebMsgGetters").getIsSentByMe(n)) return null;
		var u = l;
		return c.jsx(r("WDSMenuItem.react"), {
			onPress: function() {
				return a(!u);
			},
			testid: u ? "channel-status-overflow-menu-unhide" : "channel-status-overflow-menu-hide",
			Icon: r(u ? "WDSIconIcVisibility.react" : "WDSIconIcVisibilityOff.react"),
			title: u ? s._(
				/*BTDS*/
				""
			) : s._(
				/*BTDS*/
				""
			)
		}, u ? "channel-status-overflow-menu-unhide" : "channel-status-overflow-menu-hide");
	}
	m.displayName = m.name + " [from " + i.id + "]";
	function p(e) {
		var t = e.onForward;
		return t == null ? null : c.jsx(r("WDSMenuItem.react"), {
			onPress: t,
			testid: "channel-status-overflow-menu-forward",
			Icon: r("WDSIconIcFastForward.react"),
			title: s._(
				/*BTDS*/
				""
			)
		}, "channel-status-overflow-menu-forward");
	}
	p.displayName = p.name + " [from " + i.id + "]";
	function _(t) {
		var n, a = t.msg, i = a.serverId, l = (n = r("WAWebNewsletterMetadataCollection").get(a.id.remote)) == null ? void 0 : n.inviteCode;
		if (i == null || i <= 0 || l == null || l === "" || a.type === o("WAWebMsgType").MSG_TYPE.REVOKED || !o("WAWebNewsletterGatingUtils").isNewsletterStatusDeeplinkEnabled()) return null;
		var u = function() {
			var t = "https://whatsapp.com/channel_status/" + l + "/" + i, n = function(n) {
				o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[channel-status-link] failed to copy link to clipboard"]))).catching(r("getErrorSafe")(n)).tags("newsletter", "status").sendLogs("newsletter-status-copy-link-failed"), o("WAWebToastManager").ToastManager.open(c.jsx(o("WAWebToast.react").Toast, { msg: s._(
					/*BTDS*/
					""
				) }));
			};
			o("WAWebCopyToClipboard").copyTextToClipboard(t).then(function(e) {
				e ? o("WAWebToastManager").ToastManager.open(c.jsx(o("WAWebToast.react").Toast, { msg: s._(
					/*BTDS*/
					""
				) })) : n();
			}, n);
		};
		return c.jsx(r("WDSMenuItem.react"), {
			onPress: u,
			testid: "channel-status-overflow-menu-copy-link",
			Icon: r("WDSIconIcLink.react"),
			title: s._(
				/*BTDS*/
				""
			)
		});
	}
	_.displayName = _.name + " [from " + i.id + "]", l.default = d;
}), 226);
