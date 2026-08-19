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
	"getErrorSafe",
	"react"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = s, d = c.useCallback, m = c.useEffect, p = c.useState;
	function _(t) {
		var n = t.chat, a = t.msgId, i = p(null), l = i[0], s = i[1];
		m(function() {
			(async function() {
				var e = await o("WAWebBizBroadcastCampaignDataLayer").loadBroadcastCampaigns(), t = await o("WAWebBizBroadcastCampaignAPI").getBizBroadcastCampaignByMsgId(a), r = t != null ? e.find(function(e) {
					return e.campaignId === t.campaignId;
				}) : e.find(function(e) {
					return e.broadcastJid === o("WAWebWidToJid").widToBroadcastJid(n.id);
				});
				r != null && s(r);
			})();
		}, [n.id, a]);
		var c = d(function(e) {
			l != null && s(babelHelpers.extends({}, l, { campaignName: e }));
		}, [l]), _ = d(function() {
			l != null && (o("WAWebBizBroadcastCreationQPLLogger").BizBroadcastCreationQPLLogger.start(o("WAWebBizBroadcastCreationQPLLogger").CreateBroadcastEntryPoint.BB_THREAD_INFO_DRAWER, !1), (async function() {
				try {
					var t = await o("WAWebBizBroadcastCampaignDataLayer").resolveAttachmentDataForCampaign(l.campaignId);
					o("WAWebDrawerManager").DrawerManager.closeDrawerRight(), o("WAWebDrawerManager").DrawerManager.openDrawerFullscreen(u.jsx(o("WAWebBizBroadcastNewBroadcastFlowLoadable").WAWebBizBroadcastNewBroadcastFlowLoadable, {
						entryPoint: o("WAWebWamEnumEntryPoint").ENTRY_POINT.BB_THREAD,
						onBack: function() {
							return o("WAWebDrawerManager").DrawerManager.closeDrawerFullscreen();
						},
						sourceBroadcastMessageData: {
							attachmentData: t,
							campaignId: l.campaignId,
							ctaButtonData: l.ctaButtonData,
							isDuplicateBroadcast: !0,
							message: l.messageBody
						}
					}), { focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE });
				} catch (t) {
					o("WAWebBizBroadcastCreationQPLLogger").BizBroadcastCreationQPLLogger.end(3), o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["Failed to duplicate broadcast from details drawer"]))).catching(r("getErrorSafe")(t)).sendLogs("details-drawer-duplicate-broadcast-failed");
				}
			})());
		}, [l]);
		return l && u.jsx(r("WAWebBusinessBroadcastDetailsDrawer.react"), {
			entryPoint: o("WAWebWamEnumEntryPoint").ENTRY_POINT.BB_THREAD,
			item: l,
			onClose: o("WAWebDrawerManager").closeDrawerRight,
			onDuplicate: _,
			onRenameSuccess: c
		});
	}
	_.displayName = _.name + " [from " + i.id + "]", l.default = _;
}), 98);
