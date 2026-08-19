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
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = s, d = c.useCallback, m = c.useEffect, p = c.useState;
	function _(t) {
		var a = o("react-compiler-runtime").c(12), i = t.chat, l = t.msgId, s = p(null), c = s[0], d = s[1], _, g;
		a[0] !== i.id || a[1] !== l ? (_ = function() {
			n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				var e = yield o("WAWebBizBroadcastCampaignDataLayer").loadBroadcastCampaigns(), t = yield o("WAWebBizBroadcastCampaignAPI").getBizBroadcastCampaignByMsgId(l), n = t != null ? e.find(function(e) {
					return e.campaignId === t.campaignId;
				}) : e.find(function(e) {
					return e.broadcastJid === o("WAWebWidToJid").widToBroadcastJid(i.id);
				});
				n != null && d(n);
			})();
		}, g = [i.id, l], a[0] = i.id, a[1] = l, a[2] = _, a[3] = g) : (_ = a[2], g = a[3]), m(_, g);
		var h;
		a[4] !== c ? (h = function(t) {
			c != null && d(babelHelpers.extends({}, c, { campaignName: t }));
		}, a[4] = c, a[5] = h) : h = a[5];
		var y = h, C;
		a[6] !== c ? (C = function() {
			c != null && (o("WAWebBizBroadcastCreationQPLLogger").BizBroadcastCreationQPLLogger.start(o("WAWebBizBroadcastCreationQPLLogger").CreateBroadcastEntryPoint.BB_THREAD_INFO_DRAWER, !1), n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				try {
					var t = yield o("WAWebBizBroadcastCampaignDataLayer").resolveAttachmentDataForCampaign(c.campaignId);
					o("WAWebDrawerManager").DrawerManager.closeDrawerRight(), o("WAWebDrawerManager").DrawerManager.openDrawerFullscreen(u.jsx(o("WAWebBizBroadcastNewBroadcastFlowLoadable").WAWebBizBroadcastNewBroadcastFlowLoadable, {
						entryPoint: o("WAWebWamEnumEntryPoint").ENTRY_POINT.BB_THREAD,
						onBack: f,
						sourceBroadcastMessageData: {
							attachmentData: t,
							campaignId: c.campaignId,
							ctaButtonData: c.ctaButtonData,
							isDuplicateBroadcast: !0,
							message: c.messageBody
						}
					}), { focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE });
				} catch (t) {
					var n = t;
					o("WAWebBizBroadcastCreationQPLLogger").BizBroadcastCreationQPLLogger.end(3), o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["Failed to duplicate broadcast from details drawer"]))).catching(r("getErrorSafe")(n)).sendLogs("details-drawer-duplicate-broadcast-failed");
				}
			})());
		}, a[6] = c, a[7] = C) : C = a[7];
		var b = C, v;
		return a[8] !== c || a[9] !== b || a[10] !== y ? (v = c && u.jsx(r("WAWebBusinessBroadcastDetailsDrawer.react"), {
			entryPoint: o("WAWebWamEnumEntryPoint").ENTRY_POINT.BB_THREAD,
			item: c,
			onClose: o("WAWebDrawerManager").closeDrawerRight,
			onDuplicate: b,
			onRenameSuccess: y
		}), a[8] = c, a[9] = b, a[10] = y, a[11] = v) : v = a[11], v;
	}
	function f() {
		return o("WAWebDrawerManager").DrawerManager.closeDrawerFullscreen();
	}
	l.default = _;
}), 98);
