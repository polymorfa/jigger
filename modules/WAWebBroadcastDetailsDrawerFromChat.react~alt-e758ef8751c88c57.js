__d("WAWebBroadcastDetailsDrawerFromChat.react", [
	"WALogger",
	"WAWebBizBroadcastCampaignAPI",
	"WAWebBizBroadcastCampaignDataLayer",
	"WAWebBizBroadcastCreationQPLLogger",
	"WAWebBizBroadcastNewBroadcastFlowLoadable",
	"WAWebBusinessBroadcastDetailsDrawer.react",
	"WAWebDrawerManager",
	"WAWebKeyboardTabUtils",
	"WAWebWamEnumEntryPoint",
	"WAWebWidToJid",
	"asyncToGeneratorRuntime",
	"getErrorSafe",
	"react"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = s, d = c.useCallback, m = c.useEffect, p = c.useState;
	function _(t) {
		var a = t.chat, i = t.msgId, l = p(null), s = l[0], c = l[1];
		m(function() {
			n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				var e = yield o("WAWebBizBroadcastCampaignDataLayer").loadBroadcastCampaigns(), t = yield o("WAWebBizBroadcastCampaignAPI").getBizBroadcastCampaignByMsgId(i), n = t != null ? e.find(function(e) {
					return e.campaignId === t.campaignId;
				}) : e.find(function(e) {
					return e.broadcastJid === o("WAWebWidToJid").widToBroadcastJid(a.id);
				});
				n != null && c(n);
			})();
		}, [a.id, i]);
		var _ = d(function(e) {
			s != null && c(babelHelpers.extends({}, s, { campaignName: e }));
		}, [s]), f = d(function() {
			s != null && (o("WAWebBizBroadcastCreationQPLLogger").BizBroadcastCreationQPLLogger.start(o("WAWebBizBroadcastCreationQPLLogger").CreateBroadcastEntryPoint.BB_THREAD_INFO_DRAWER, !1), n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				try {
					var t = yield o("WAWebBizBroadcastCampaignDataLayer").resolveAttachmentDataForCampaign(s.campaignId);
					o("WAWebDrawerManager").DrawerManager.closeDrawerRight(), o("WAWebDrawerManager").DrawerManager.openDrawerFullscreen(u.jsx(o("WAWebBizBroadcastNewBroadcastFlowLoadable").WAWebBizBroadcastNewBroadcastFlowLoadable, {
						entryPoint: o("WAWebWamEnumEntryPoint").ENTRY_POINT.BB_THREAD,
						onBack: function() {
							return o("WAWebDrawerManager").DrawerManager.closeDrawerFullscreen();
						},
						sourceBroadcastMessageData: {
							attachmentData: t,
							campaignId: s.campaignId,
							ctaButtonData: s.ctaButtonData,
							isDuplicateBroadcast: !0,
							message: s.messageBody
						}
					}), { focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE });
				} catch (t) {
					o("WAWebBizBroadcastCreationQPLLogger").BizBroadcastCreationQPLLogger.end(3), o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["Failed to duplicate broadcast from details drawer"]))).catching(r("getErrorSafe")(t)).sendLogs("details-drawer-duplicate-broadcast-failed");
				}
			})());
		}, [s]);
		return s && u.jsx(r("WAWebBusinessBroadcastDetailsDrawer.react"), {
			entryPoint: o("WAWebWamEnumEntryPoint").ENTRY_POINT.BB_THREAD,
			item: s,
			onClose: o("WAWebDrawerManager").closeDrawerRight,
			onDuplicate: f,
			onRenameSuccess: _
		});
	}
	_.displayName = _.name + " [from " + i.id + "]", l.default = _;
}), 98);
