__d("WAWebSendMsgCreateBroadcastButton.react", [
	"fbt",
	"WALogger",
	"WAWebBizBroadcastContextualEntrypointUtils",
	"WAWebBizBroadcastCreationQPLLogger",
	"WAWebBizBroadcastNewBroadcastFlowLoadable",
	"WAWebBusinessBroadcastUserJourneyLogger",
	"WAWebDrawerManager",
	"WAWebKeyboardTabUtils",
	"WAWebModalManager",
	"WAWebTabOrder",
	"WAWebWamEnumEntryPoint",
	"WAWebWamEnumSurfaceType",
	"WDSIconWdsIcBroadcastMessage.react",
	"WDSMenuBarItem.react",
	"getErrorSafe",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react"));
	function d(t) {
		var n = t.attachment, a = t.msgText, i = t.urlText, l = async function() {
			o("WAWebBizBroadcastCreationQPLLogger").BizBroadcastCreationQPLLogger.start(o("WAWebBizBroadcastCreationQPLLogger").CreateBroadcastEntryPoint.BB_SHARE_MODAL, !1);
			try {
				var t = await o("WAWebBizBroadcastContextualEntrypointUtils").getAttachmentDataFromFile(n), l = o("WAWebBizBroadcastContextualEntrypointUtils").getCTAURLDataFromMsgText(a, i), s = i ? null : a, u = {
					attachmentData: t,
					campaignId: null,
					ctaButtonData: l,
					message: s,
					isDuplicateBroadcast: !1
				};
				o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.createBroadcastButtonClicked(o("WAWebWamEnumEntryPoint").ENTRY_POINT.BB_SHARE_MODAL, o("WAWebWamEnumSurfaceType").SURFACE_TYPE.SHARE_MODAL), o("WAWebModalManager").ModalManager.close(), o("WAWebDrawerManager").DrawerManager.openDrawerFullscreen(c.jsx(o("WAWebBizBroadcastNewBroadcastFlowLoadable").WAWebBizBroadcastNewBroadcastFlowLoadable, {
					sourceBroadcastMessageData: u,
					entryPoint: o("WAWebWamEnumEntryPoint").ENTRY_POINT.BB_SHARE_MODAL,
					onBack: function() {
						return o("WAWebDrawerManager").DrawerManager.closeDrawerFullscreen();
					}
				}), { focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE });
			} catch (t) {
				o("WAWebBizBroadcastCreationQPLLogger").BizBroadcastCreationQPLLogger.end(3), o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["Failed to handle broadcast row click"]))).catching(r("getErrorSafe")(t)).sendLogs("broadcast-row-click-fail");
			}
		};
		return c.jsx(r("WDSMenuBarItem.react"), {
			testid: "biz-broadcast-share-modal-creation-button",
			tabOrder: o("WAWebTabOrder").TAB_ORDER.CHATLIST_HEADER,
			onClick: l,
			title: s._(
				/*BTDS*/
				""
			),
			icon: r("WDSIconWdsIcBroadcastMessage.react")
		});
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 226);
