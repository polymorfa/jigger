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
	"asyncToGeneratorRuntime",
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
		var t = o("react-compiler-runtime").c(21), a = e.onBack, i = e.onCloseEntireFlow, l = e.ref, u = e.viewType, c;
		t[0] !== i ? (c = function(t) {
			i == null || i(), _(t);
		}, t[0] = i, t[1] = c) : c = t[1];
		var d = c, p = E, f;
		t[2] === Symbol.for("react.memo_cache_sentinel") ? (f = function(t) {
			p(t, "create");
		}, t[2] = f) : f = t[2];
		var k = f, I = L, T;
		t[3] === Symbol.for("react.memo_cache_sentinel") ? (T = function(t) {
			p(t, "import");
		}, t[3] = T) : T = t[3];
		var D = T, x;
		t[4] === Symbol.for("react.memo_cache_sentinel") ? (x = function() {
			o("WAWebDrawerManager").closeDrawerLeft(), o("WAWebDrawerManager").DrawerManager.openDrawerFullscreen(s.jsx(r("WAWebBizBroadcastsUpsertAudienceScreen.react"), {
				audienceConfig: {
					kind: "core",
					onNewAudienceSuccess: k,
					onSendBroadcast: I
				},
				chat: null,
				entryPoint: o("WAWebWamEnumEntryPoint").ENTRY_POINT.CHAT_HOME,
				onBack: R,
				suggestedAudienceData: null
			}), { focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE });
		}, t[4] = x) : x = t[4];
		var $ = x, P;
		t[5] === Symbol.for("react.memo_cache_sentinel") ? (P = function(t, n, r, a, i) {
			var e = function(t, n) {
				o("WAWebDrawerManager").closeDrawerLeft(), o("WAWebDrawerManager").DrawerManager.openDrawerFullscreen(s.jsx(o("WAWebBizBroadcastsImportAudienceScreenLoadable").WAWebBizBroadcastsImportAudienceScreenLoadable, {
					entryPoint: o("WAWebWamEnumEntryPoint").ENTRY_POINT.CHAT_HOME,
					errorList: n,
					importLoggingContext: a,
					onClose: S,
					onCreateAudienceSuccess: D,
					onSendBroadcast: I,
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
		}, t[5] = P) : P = t[5];
		var N = P, M;
		t[6] === Symbol.for("react.memo_cache_sentinel") ? (M = function() {
			o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.importAudienceClicked(o("WAWebWamEnumEntryPoint").ENTRY_POINT.CHAT_HOME), o("WAWebModalManager").ModalManager.open(s.jsx(o("WAWebBizBroadcastsUploadModalLoadable.react").WAWebBizBroadcastsUploadModalLoadable, {
				entryPoint: o("WAWebWamEnumEntryPoint").ENTRY_POINT.CHAT_HOME,
				onCancel: C,
				onUploadSuccess: N
			}));
		}, t[6] = M) : M = t[6];
		var w = M, A;
		t[7] !== a ? (A = function() {
			a == null || a();
		}, t[7] = a, t[8] = A) : A = t[8];
		var F = A, O;
		t[9] === Symbol.for("react.memo_cache_sentinel") ? (O = o("WAWebBizBroadcastsAudienceUtils").getBroadcastChatsAsAudiences(), t[9] = O) : O = t[9];
		var B = O, W = o("useWAWebABPropConfigValue").useABPropConfigValue("suggested_audiences_wa_web") === !0, q;
		t[10] === Symbol.for("react.memo_cache_sentinel") ? (q = function(t) {
			n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				var e = yield o("WAWebSuggestedAudienceCards").resolveCardExpression(t), n = yield o("WAWebAudienceResolver").resolveAudienceExpression(e);
				o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.suggestedAudienceCardClicked(t.id, e.predicateType, n.length, o("WAWebWamEnumEntryPoint").ENTRY_POINT.CHAT_HOME);
				var a = n.map(y), i = {
					initialRecipientIds: a,
					suggestedAudienceCardId: t.id
				};
				o("WAWebDrawerManager").closeDrawerLeft(), o("WAWebDrawerManager").DrawerManager.openDrawerFullscreen(s.jsx(r("WAWebBizBroadcastsUpsertAudienceScreen.react"), {
					audienceConfig: {
						kind: "core",
						onNewAudienceSuccess: h,
						onSendBroadcast: I
					},
					chat: null,
					entryPoint: o("WAWebWamEnumEntryPoint").ENTRY_POINT.CHAT_HOME,
					onBack: g,
					suggestedAudienceData: i
				}), { focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE });
			})().catch(r("WAWebNoop"));
		}, t[10] = q) : q = t[10];
		var U = q, V = u === r("WAWebDrawerViewType").MODAL ? F : void 0, H;
		t[11] !== F || t[12] !== d || t[13] !== l || t[14] !== W || t[15] !== V || t[16] !== u ? (H = s.jsx(r("WAWebNewChatFlowBroadcastAudienceDrawer.react"), {
			ref: l,
			audiences: B,
			onBack: F,
			onCancel: V,
			onCreateAudience: $,
			onImportAudience: w,
			onSelectAudience: d,
			onSuggestedCardPress: U,
			suggestedAudiencesEnabled: W,
			viewType: u
		}), t[11] = F, t[12] = d, t[13] = l, t[14] = W, t[15] = V, t[16] = u, t[17] = H) : H = t[17];
		var G;
		return t[18] !== F || t[19] !== H ? (G = s.jsx(r("WAWebBizBroadcastsEligibilityGate.react"), {
			entryPoint: o("WAWebWamEnumEntryPoint").ENTRY_POINT.CHAT_HOME,
			onClose: F,
			surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.CHATLIST,
			children: H
		}), t[18] = F, t[19] = H, t[20] = G) : G = t[20], G;
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
