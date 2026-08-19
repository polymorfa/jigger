__d("WAWebBizBroadcastDeleteConfirmationModal.react", [
	"WALogger",
	"WAWebBizBroadcastCampaignAPI",
	"WAWebBizBroadcastCampaignNotifier",
	"WAWebBizBroadcastChatMessageUtils",
	"WAWebBizBroadcastSystemMessageManager",
	"WAWebBizBroadcastsHomeStrings",
	"WAWebBroadcastCampaignSync",
	"WAWebBusinessBroadcastUserJourneyLogger",
	"WAWebConfirmPopup.react",
	"WAWebModal.react",
	"WAWebModalManager",
	"WAWebToast.react",
	"WAWebToastManager",
	"react"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = s || (s = o("react")), c = s, d = c.useCallback, m = c.useEffect, p = { modalControls: {
		paddingTop: "x1p57kb1",
		$$css: !0
	} };
	function _(t) {
		var n, a = t.broadcastJid, i = t.campaignId, l = t.entryPoint, s = t.onSuccess, c = t.surface;
		m(function() {
			o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.deleteBroadcastDialogViewed(l, c);
		}, [l, c]);
		var _ = d(function() {
			o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.broadcastDeleteConfirmed(l, c);
			var t = r("WAWebBroadcastCampaignSync").getDeleteCampaignMutation(i, Date.now());
			o("WAWebBizBroadcastCampaignAPI").getBizBroadcastCampaignByKey(i).then(function(e) {
				var n = e == null ? void 0 : e.msgId, r = e == null ? void 0 : e.broadcastJid;
				return o("WAWebBizBroadcastCampaignNotifier").removeCampaignWithSyncAndNotify(i, [t]).then(function() {
					return o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.broadcastDeleteResult(l, c, a, i, "success"), o("WAWebModalManager").closeModalManager(), s == null || s(), o("WAWebToastManager").ToastManager.open(u.jsx(o("WAWebToast.react").Toast, { msg: o("WAWebBizBroadcastsHomeStrings").getBroadcastDeletedToastMessage() })), r != null && o("WAWebBizBroadcastChatMessageUtils").deleteBroadcastChatMessage(n, r), o("WAWebBizBroadcastSystemMessageManager").updateBizBroadcastSystemMessage(a);
				});
			}).catch(function(t) {
				o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
					"[bb:delete] Failed to delete campaign ",
					": ",
					""
				])), i, t), o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.broadcastDeleteResult(l, c, a, i, "failure", String(t)), o("WAWebModalManager").closeModalManager();
			});
		}, [
			a,
			i,
			l,
			s,
			c
		]);
		return u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			title: (n = o("WAWebBizBroadcastsHomeStrings")).getDeleteBroadcastModalTitle(),
			cancelText: n.getCancelButtonLabel(),
			okText: n.getDeleteBroadcastLabel(),
			okButtonType: "negative-destructive",
			type: o("WAWebModal.react").ModalTheme.Small,
			buttonGroupStyle: p.modalControls,
			onCancel: function() {
				o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.deleteBroadcastCancelClicked(l, c), o("WAWebModalManager").closeModalManager();
			},
			onOK: _,
			children: n.getDeleteBroadcastModalBody()
		});
	}
	_.displayName = _.name + " [from " + i.id + "]", l.default = _;
}), 98);
