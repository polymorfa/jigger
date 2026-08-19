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
	"react-compiler-runtime",
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
		var t = o("react-compiler-runtime").c(21), n = e.onBack, a = e.onCloseEntireFlow, i = e.ref, l = e.viewType, u;
		t[0] !== a ? (u = function(t) {
			a == null || a(), _(t);
		}, t[0] = a, t[1] = u) : u = t[1];
		var c = u, d = E, p;
		t[2] === Symbol.for("react.memo_cache_sentinel") ? (p = function(t) {
			d(t, "create");
		}, t[2] = p) : p = t[2];
		var f = p, k = L, I;
		t[3] === Symbol.for("react.memo_cache_sentinel") ? (I = function(t) {
			d(t, "import");
		}, t[3] = I) : I = t[3];
		var T = I, D;
		t[4] === Symbol.for("react.memo_cache_sentinel") ? (D = function() {
			o("WAWebDrawerManager").closeDrawerLeft(), o("WAWebDrawerManager").DrawerManager.openDrawerFullscreen(s.jsx(r("WAWebBizBroadcastsUpsertAudienceScreen.react"), {
				audienceConfig: {
					kind: "core",
					onNewAudienceSuccess: f,
					onSendBroadcast: k
				},
				chat: null,
				entryPoint: o("WAWebWamEnumEntryPoint").ENTRY_POINT.CHAT_HOME,
				onBack: R,
				suggestedAudienceData: null
			}), { focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE });
		}, t[4] = D) : D = t[4];
		var x = D, $;
		t[5] === Symbol.for("react.memo_cache_sentinel") ? ($ = function(t, n, r, a, i) {
			var e = function(t, n) {
				o("WAWebDrawerManager").closeDrawerLeft(), o("WAWebDrawerManager").DrawerManager.openDrawerFullscreen(s.jsx(o("WAWebBizBroadcastsImportAudienceScreenLoadable").WAWebBizBroadcastsImportAudienceScreenLoadable, {
					entryPoint: o("WAWebWamEnumEntryPoint").ENTRY_POINT.CHAT_HOME,
					errorList: n,
					importLoggingContext: a,
					onClose: S,
					onCreateAudienceSuccess: T,
					onSendBroadcast: k,
					validContactsData: t
				}), { focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE });
			};
			if (r != null) {
				o("WAWebBizBroadcastsSmartCSVImportSetupFlowLoadable").openSmartCSVImportSetupFlowLoadable({
					contacts: t,
					context: r,
					entryPoint: o("WAWebWamEnumEntryPoint").ENTRY_POINT.CHAT_HOME,
					errorList: n,
					importLoggingContext: a,
					maxContactsPerAudience: i,
					onReviewAudience: e,
					onReviewAudiences: function(n) {
						var t = n.length === m ? n[0] : null;
						if (t != null) {
							var r;
							e(t.contacts, (r = t.errorList) != null ? r : []);
							return;
						}
						o("WAWebDrawerManager").closeDrawerLeft(), o("WAWebDrawerManager").DrawerManager.openDrawerFullscreen(s.jsx(o("WAWebBizBroadcastsSmartCSVImportAudiencesScreenLoadable").WAWebBizBroadcastsSmartCSVImportAudiencesScreenLoadable, {
							audiences: n,
							entryPoint: o("WAWebWamEnumEntryPoint").ENTRY_POINT.CHAT_HOME,
							importLoggingContext: a,
							onClose: v,
							onCreateAudiencesSuccess: b
						}), { focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE });
					}
				});
				return;
			}
			e(t, n);
		}, t[5] = $) : $ = t[5];
		var P = $, N;
		t[6] === Symbol.for("react.memo_cache_sentinel") ? (N = function() {
			o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.importAudienceClicked(o("WAWebWamEnumEntryPoint").ENTRY_POINT.CHAT_HOME), o("WAWebModalManager").ModalManager.open(s.jsx(o("WAWebBizBroadcastsUploadModalLoadable.react").WAWebBizBroadcastsUploadModalLoadable, {
				entryPoint: o("WAWebWamEnumEntryPoint").ENTRY_POINT.CHAT_HOME,
				onCancel: C,
				onUploadSuccess: P
			}));
		}, t[6] = N) : N = t[6];
		var M = N, w;
		t[7] !== n ? (w = function() {
			n == null || n();
		}, t[7] = n, t[8] = w) : w = t[8];
		var A = w, F;
		t[9] === Symbol.for("react.memo_cache_sentinel") ? (F = o("WAWebBizBroadcastsAudienceUtils").getBroadcastChatsAsAudiences(), t[9] = F) : F = t[9];
		var O = F, B = o("useWAWebABPropConfigValue").useABPropConfigValue("suggested_audiences_wa_web") === !0, W;
		t[10] === Symbol.for("react.memo_cache_sentinel") ? (W = function(t) {
			(async function() {
				var e = await o("WAWebSuggestedAudienceCards").resolveCardExpression(t), n = await o("WAWebAudienceResolver").resolveAudienceExpression(e);
				o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.suggestedAudienceCardClicked(t.id, e.predicateType, n.length, o("WAWebWamEnumEntryPoint").ENTRY_POINT.CHAT_HOME);
				var a = n.map(y), i = {
					initialRecipientIds: a,
					suggestedAudienceCardId: t.id
				};
				o("WAWebDrawerManager").closeDrawerLeft(), o("WAWebDrawerManager").DrawerManager.openDrawerFullscreen(s.jsx(r("WAWebBizBroadcastsUpsertAudienceScreen.react"), {
					audienceConfig: {
						kind: "core",
						onNewAudienceSuccess: h,
						onSendBroadcast: k
					},
					chat: null,
					entryPoint: o("WAWebWamEnumEntryPoint").ENTRY_POINT.CHAT_HOME,
					onBack: g,
					suggestedAudienceData: i
				}), { focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE });
			})().catch(r("WAWebNoop"));
		}, t[10] = W) : W = t[10];
		var q = W, U = l === r("WAWebDrawerViewType").MODAL ? A : void 0, V;
		t[11] !== A || t[12] !== c || t[13] !== i || t[14] !== B || t[15] !== U || t[16] !== l ? (V = s.jsx(r("WAWebNewChatFlowBroadcastAudienceDrawer.react"), {
			ref: i,
			audiences: O,
			onBack: A,
			onCancel: U,
			onCreateAudience: x,
			onImportAudience: M,
			onSelectAudience: c,
			onSuggestedCardPress: q,
			suggestedAudiencesEnabled: B,
			viewType: l
		}), t[11] = A, t[12] = c, t[13] = i, t[14] = B, t[15] = U, t[16] = l, t[17] = V) : V = t[17];
		var H;
		return t[18] !== A || t[19] !== V ? (H = s.jsx(r("WAWebBizBroadcastsEligibilityGate.react"), {
			entryPoint: o("WAWebWamEnumEntryPoint").ENTRY_POINT.CHAT_HOME,
			onClose: A,
			surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.CHATLIST,
			children: V
		}), t[18] = A, t[19] = V, t[20] = H) : H = t[20], H;
	}
	function g() {
		return o("WAWebDrawerManager").DrawerManager.closeDrawerFullscreen();
	}
	function h(e) {
		o("WAWebDrawerManager").DrawerManager.closeDrawerFullscreen(), p(e);
	}
	function y(e) {
		return e.split("@")[0];
	}
	function C(e, t) {
		var n = t === void 0 ? !1 : t;
		o("WAWebModalManager").ModalManager.close(), n !== !0 && o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.contactImportCancelClicked(o("WAWebWamEnumEntryPoint").ENTRY_POINT.CHAT_HOME);
	}
	function b() {
		return o("WAWebDrawerManager").DrawerManager.closeDrawerFullscreen();
	}
	function v() {
		return o("WAWebDrawerManager").DrawerManager.closeDrawerFullscreen();
	}
	function S() {
		return o("WAWebDrawerManager").DrawerManager.closeDrawerFullscreen();
	}
	function R() {
		return o("WAWebDrawerManager").DrawerManager.closeDrawerFullscreen();
	}
	function L(e) {
		o("WAWebDrawerManager").DrawerManager.closeDrawerFullscreen(), _(e);
	}
	function E(e, t) {
		o("WAWebDrawerManager").DrawerManager.closeDrawerFullscreen();
		var n = o("WAWebWidFactory").createWid(e.broadcastJid), r = o("WAWebChatCollection").ChatCollection.get(n);
		p(e), o("WAWebBizBroadcastsAudienceUtils").showCreateAudienceSuccessToast(e, t, function() {
			o("WAWebDrawerManager").DrawerManager.closeDrawerFullscreen(), r != null && o("WAWebCmd").Cmd.closeChat(r);
		});
	}
	l.default = f;
}), 98);
