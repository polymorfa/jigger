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
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = s, d = c.useCallback, m = c.useEffect, p = c.useState;
	function _(t) {
		var n = o("react-compiler-runtime").c(12), a = t.chat, i = t.msgId, l = p(null), s = l[0], c = l[1], d, _;
		n[0] !== a.id || n[1] !== i ? (d = function() {
			(async function() {
				var e = await o("WAWebBizBroadcastCampaignDataLayer").loadBroadcastCampaigns(), t = await o("WAWebBizBroadcastCampaignAPI").getBizBroadcastCampaignByMsgId(i), n = t != null ? e.find(function(e) {
					return e.campaignId === t.campaignId;
				}) : e.find(function(e) {
					return e.broadcastJid === o("WAWebWidToJid").widToBroadcastJid(a.id);
				});
				n != null && c(n);
			})();
		}, _ = [a.id, i], n[0] = a.id, n[1] = i, n[2] = d, n[3] = _) : (d = n[2], _ = n[3]), m(d, _);
		var g;
		n[4] !== s ? (g = function(t) {
			s != null && c(babelHelpers.extends({}, s, { campaignName: t }));
		}, n[4] = s, n[5] = g) : g = n[5];
		var h = g, y;
		n[6] !== s ? (y = function() {
			s != null && (o("WAWebBizBroadcastCreationQPLLogger").BizBroadcastCreationQPLLogger.start(o("WAWebBizBroadcastCreationQPLLogger").CreateBroadcastEntryPoint.BB_THREAD_INFO_DRAWER, !1), (async function() {
				try {
					var t = await o("WAWebBizBroadcastCampaignDataLayer").resolveAttachmentDataForCampaign(s.campaignId);
					o("WAWebDrawerManager").DrawerManager.closeDrawerRight(), o("WAWebDrawerManager").DrawerManager.openDrawerFullscreen(u.jsx(o("WAWebBizBroadcastNewBroadcastFlowLoadable").WAWebBizBroadcastNewBroadcastFlowLoadable, {
						entryPoint: o("WAWebWamEnumEntryPoint").ENTRY_POINT.BB_THREAD,
						onBack: f,
						sourceBroadcastMessageData: {
							attachmentData: t,
							campaignId: s.campaignId,
							ctaButtonData: s.ctaButtonData,
							isDuplicateBroadcast: !0,
							message: s.messageBody
						}
					}), { focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE });
				} catch (t) {
					var n = t;
					o("WAWebBizBroadcastCreationQPLLogger").BizBroadcastCreationQPLLogger.end(3), o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["Failed to duplicate broadcast from details drawer"]))).catching(r("getErrorSafe")(n)).sendLogs("details-drawer-duplicate-broadcast-failed");
				}
			})());
		}, n[6] = s, n[7] = y) : y = n[7];
		var C = y, b;
		return n[8] !== s || n[9] !== C || n[10] !== h ? (b = s && u.jsx(r("WAWebBusinessBroadcastDetailsDrawer.react"), {
			entryPoint: o("WAWebWamEnumEntryPoint").ENTRY_POINT.BB_THREAD,
			item: s,
			onClose: o("WAWebDrawerManager").closeDrawerRight,
			onDuplicate: C,
			onRenameSuccess: h
		}), n[8] = s, n[9] = C, n[10] = h, n[11] = b) : b = n[11], b;
	}
	function f() {
		return o("WAWebDrawerManager").DrawerManager.closeDrawerFullscreen();
	}
	l.default = _;
}), 98);
