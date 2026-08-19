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
	"asyncToGeneratorRuntime",
	"getErrorSafe",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react"));
	function d(t) {
		var a = t.attachment, i = t.msgText, l = t.urlText, u = (function() {
			var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				o("WAWebBizBroadcastCreationQPLLogger").BizBroadcastCreationQPLLogger.start(o("WAWebBizBroadcastCreationQPLLogger").CreateBroadcastEntryPoint.BB_SHARE_MODAL, !1);
				try {
					var t = yield o("WAWebBizBroadcastContextualEntrypointUtils").getAttachmentDataFromFile(a), n = o("WAWebBizBroadcastContextualEntrypointUtils").getCTAURLDataFromMsgText(i, l), s = l ? null : i, u = {
						attachmentData: t,
						campaignId: null,
						ctaButtonData: n,
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
			});
			return function() {
				return t.apply(this, arguments);
			};
		})();
		return c.jsx(r("WDSMenuBarItem.react"), {
			testid: "biz-broadcast-share-modal-creation-button",
			tabOrder: o("WAWebTabOrder").TAB_ORDER.CHATLIST_HEADER,
			onClick: u,
			title: s._(
				/*BTDS*/
				""
			),
			icon: r("WDSIconWdsIcBroadcastMessage.react")
		});
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 226);
