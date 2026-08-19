__d("WAWebNewChatFlowBroadcastContainer.react", [
	"WAWebAudienceResolver",
	"WAWebBizBroadcastCreationQPLLogger",
	"WAWebBizBroadcastNewBroadcastFlowLoadable",
	"WAWebBizBroadcastsAudienceUtils",
	"WAWebBizBroadcastsEligibilityGate.react",
	"WAWebBizBroadcastsImportAudienceScreenLoadable",
	"WAWebBizBroadcastsSmartCSVImportAudiencesScreenLoadable",
	"WAWebBizBroadcastsSmartCSVImportSetupFlowLoadable",
	"WAWebBizBroadcastsUploadModalLoadable.react",
	"WAWebBizBroadcastsUpsertAudienceScreen.react",
	"WAWebBusinessBroadcastUserJourneyLogger",
	"WAWebChatCollection",
	"WAWebChatEntryPoint",
	"WAWebCmd",
	"WAWebComposeBoxActions",
	"WAWebDrawerManager",
	"WAWebDrawerViewType",
	"WAWebKeyboardTabUtils",
	"WAWebModalManager",
	"WAWebNewChatFlowBroadcastAudienceDrawer.react",
	"WAWebNoop",
	"WAWebSuggestedAudienceCards",
	"WAWebWamEnumEntryPoint",
	"WAWebWamEnumSurfaceType",
	"WAWebWidFactory",
	"react",
	"useWAWebABPropConfigValue"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = e, c = u.useCallback, d = u.useMemo, m = 1;
	function p(e) {
		var t = o("WAWebWidFactory").createWid(e.broadcastJid), n = o("WAWebChatCollection").ChatCollection.get(t);
		n != null && o("WAWebCmd").Cmd.openChatFromUnread({
			chat: n,
			chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint.NewBroadcastCreation
		}).then(function(e) {
			e && o("WAWebComposeBoxActions").ComposeBoxActions.focus(n);
		});
	}
	function _(e) {
		var t = o("WAWebWidFactory").createWid(e.broadcastJid), n = o("WAWebChatCollection").ChatCollection.get(t);
		n != null && (o("WAWebBizBroadcastCreationQPLLogger").BizBroadcastCreationQPLLogger.start(o("WAWebBizBroadcastCreationQPLLogger").CreateBroadcastEntryPoint.CHAT_HOME, !0), o("WAWebDrawerManager").DrawerManager.openDrawerFullscreen(s.jsx(o("WAWebBizBroadcastNewBroadcastFlowLoadable").WAWebBizBroadcastNewBroadcastFlowLoadable, {
			chat: n,
			entryPoint: o("WAWebWamEnumEntryPoint").ENTRY_POINT.CHAT_HOME,
			onBack: function() {
				o("WAWebDrawerManager").DrawerManager.closeDrawerFullscreen(), p(e);
			}
		}), { focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE }));
	}
	function f(e) {
		var t = e.onBack, n = e.onCloseEntireFlow, a = e.ref, i = e.viewType, l = c(function(e) {
			n == null || n(), _(e);
		}, [n]), u = c(function(e, t) {
			o("WAWebDrawerManager").DrawerManager.closeDrawerFullscreen();
			var n = o("WAWebWidFactory").createWid(e.broadcastJid), r = o("WAWebChatCollection").ChatCollection.get(n);
			p(e), o("WAWebBizBroadcastsAudienceUtils").showCreateAudienceSuccessToast(e, t, function() {
				o("WAWebDrawerManager").DrawerManager.closeDrawerFullscreen(), r != null && o("WAWebCmd").Cmd.closeChat(r);
			});
		}, []), f = c(function(e) {
			u(e, "create");
		}, [u]), g = c(function(e) {
			o("WAWebDrawerManager").DrawerManager.closeDrawerFullscreen(), _(e);
		}, []), h = c(function(e) {
			u(e, "import");
		}, [u]), y = c(function() {
			o("WAWebDrawerManager").closeDrawerLeft(), o("WAWebDrawerManager").DrawerManager.openDrawerFullscreen(s.jsx(r("WAWebBizBroadcastsUpsertAudienceScreen.react"), {
				audienceConfig: {
					kind: "core",
					onNewAudienceSuccess: f,
					onSendBroadcast: g
				},
				chat: null,
				entryPoint: o("WAWebWamEnumEntryPoint").ENTRY_POINT.CHAT_HOME,
				onBack: function() {
					return o("WAWebDrawerManager").DrawerManager.closeDrawerFullscreen();
				},
				suggestedAudienceData: null
			}), { focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE });
		}, [f, g]), C = c(function(e, t, n, r, a) {
			var i = function(t, n) {
				o("WAWebDrawerManager").closeDrawerLeft(), o("WAWebDrawerManager").DrawerManager.openDrawerFullscreen(s.jsx(o("WAWebBizBroadcastsImportAudienceScreenLoadable").WAWebBizBroadcastsImportAudienceScreenLoadable, {
					entryPoint: o("WAWebWamEnumEntryPoint").ENTRY_POINT.CHAT_HOME,
					errorList: n,
					importLoggingContext: r,
					onClose: function() {
						return o("WAWebDrawerManager").DrawerManager.closeDrawerFullscreen();
					},
					onCreateAudienceSuccess: h,
					onSendBroadcast: g,
					validContactsData: t
				}), { focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE });
			};
			if (n != null) {
				o("WAWebBizBroadcastsSmartCSVImportSetupFlowLoadable").openSmartCSVImportSetupFlowLoadable({
					contacts: e,
					context: n,
					entryPoint: o("WAWebWamEnumEntryPoint").ENTRY_POINT.CHAT_HOME,
					errorList: t,
					importLoggingContext: r,
					maxContactsPerAudience: a,
					onReviewAudience: i,
					onReviewAudiences: function(t) {
						var e = t.length === m ? t[0] : null;
						if (e != null) {
							var n;
							i(e.contacts, (n = e.errorList) != null ? n : []);
							return;
						}
						o("WAWebDrawerManager").closeDrawerLeft(), o("WAWebDrawerManager").DrawerManager.openDrawerFullscreen(s.jsx(o("WAWebBizBroadcastsSmartCSVImportAudiencesScreenLoadable").WAWebBizBroadcastsSmartCSVImportAudiencesScreenLoadable, {
							audiences: t,
							entryPoint: o("WAWebWamEnumEntryPoint").ENTRY_POINT.CHAT_HOME,
							importLoggingContext: r,
							onClose: function() {
								return o("WAWebDrawerManager").DrawerManager.closeDrawerFullscreen();
							},
							onCreateAudiencesSuccess: function() {
								return o("WAWebDrawerManager").DrawerManager.closeDrawerFullscreen();
							}
						}), { focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE });
					}
				});
				return;
			}
			i(e, t);
		}, [h, g]), b = c(function() {
			o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.importAudienceClicked(o("WAWebWamEnumEntryPoint").ENTRY_POINT.CHAT_HOME), o("WAWebModalManager").ModalManager.open(s.jsx(o("WAWebBizBroadcastsUploadModalLoadable.react").WAWebBizBroadcastsUploadModalLoadable, {
				entryPoint: o("WAWebWamEnumEntryPoint").ENTRY_POINT.CHAT_HOME,
				onCancel: function(t, n) {
					n === void 0 && (n = !1), o("WAWebModalManager").ModalManager.close(), n !== !0 && o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.contactImportCancelClicked(o("WAWebWamEnumEntryPoint").ENTRY_POINT.CHAT_HOME);
				},
				onUploadSuccess: C
			}));
		}, [C]), v = c(function() {
			t == null || t();
		}, [t]), S = d(function() {
			return o("WAWebBizBroadcastsAudienceUtils").getBroadcastChatsAsAudiences();
		}, []), R = o("useWAWebABPropConfigValue").useABPropConfigValue("suggested_audiences_wa_web") === !0, L = c(function(e) {
			(async function() {
				var t = await o("WAWebSuggestedAudienceCards").resolveCardExpression(e), n = await o("WAWebAudienceResolver").resolveAudienceExpression(t);
				o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.suggestedAudienceCardClicked(e.id, t.predicateType, n.length, o("WAWebWamEnumEntryPoint").ENTRY_POINT.CHAT_HOME);
				var a = n.map(function(e) {
					return e.split("@")[0];
				}), i = {
					initialRecipientIds: a,
					suggestedAudienceCardId: e.id
				};
				o("WAWebDrawerManager").closeDrawerLeft(), o("WAWebDrawerManager").DrawerManager.openDrawerFullscreen(s.jsx(r("WAWebBizBroadcastsUpsertAudienceScreen.react"), {
					audienceConfig: {
						kind: "core",
						onNewAudienceSuccess: function(t) {
							o("WAWebDrawerManager").DrawerManager.closeDrawerFullscreen(), p(t);
						},
						onSendBroadcast: g
					},
					chat: null,
					entryPoint: o("WAWebWamEnumEntryPoint").ENTRY_POINT.CHAT_HOME,
					onBack: function() {
						return o("WAWebDrawerManager").DrawerManager.closeDrawerFullscreen();
					},
					suggestedAudienceData: i
				}), { focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE });
			})().catch(r("WAWebNoop"));
		}, [g]);
		return s.jsx(r("WAWebBizBroadcastsEligibilityGate.react"), {
			entryPoint: o("WAWebWamEnumEntryPoint").ENTRY_POINT.CHAT_HOME,
			onClose: v,
			surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.CHATLIST,
			children: s.jsx(r("WAWebNewChatFlowBroadcastAudienceDrawer.react"), {
				ref: a,
				audiences: S,
				onBack: v,
				onCancel: i === r("WAWebDrawerViewType").MODAL ? v : void 0,
				onCreateAudience: y,
				onImportAudience: b,
				onSelectAudience: l,
				onSuggestedCardPress: L,
				suggestedAudiencesEnabled: R,
				viewType: i
			})
		});
	}
	f.displayName = f.name + " [from " + i.id + "]", l.default = f;
}), 98);
