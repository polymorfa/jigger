__d("WAWebActionListenerHelpers", [
	"fbt",
	"Promise",
	"WAFilteredCatch",
	"WALogger",
	"WAWebActionToast.react",
	"WAWebBackendErrors",
	"WAWebChatEphemerality",
	"WAWebChatGetters",
	"WAWebChatSendMessages",
	"WAWebChatThreadLogging",
	"WAWebMessageDeleteActionsWamEvent",
	"WAWebMiscErrors",
	"WAWebMsgDataFromModel",
	"WAWebMsgGetters",
	"WAWebOTPLoggingHelper",
	"WAWebSnackbarDeleteUndoWamEvent",
	"WAWebToastManager",
	"WAWebWamChatPSALogger",
	"WAWebWamEnumDeleteActionType",
	"WAWebWamEnumSnackbarActionType",
	"WAWebWamMsgUtils",
	"asyncToGeneratorRuntime",
	"isStringNullOrEmpty",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c, d, m, p = m || (m = o("react")), _ = 4e3;
	function f(t) {
		switch (t) {
			case 1: return s._(
				/*BTDS*/
				""
			);
			case 8: return s._(
				/*BTDS*/
				""
			);
			case 24: return s._(
				/*BTDS*/
				""
			);
			case 168: return s._(
				/*BTDS*/
				""
			);
			default: return o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[DoNotDisturbSettings] non-standard mute duration: ", ""])), t), s._(
				/*BTDS*/
				""
			);
		}
	}
	function g(e, t, a, i) {
		if (i === void 0 && (i = "LEFT"), !t || t.some(function(e) {
			return !e.id;
		})) return (d || (d = n("Promise"))).reject(new (o("WAWebMiscErrors")).ActionError());
		var l = r("isStringNullOrEmpty")(a) ? o("WAWebActionToast.react").genId() : a, c = t.length;
		if (o("WAWebChatGetters").getIsPSA(e)) {
			var m = 0;
			for (m; m < c; m++) o("WAWebWamChatPSALogger").logChatPSAStar(t[m]);
		}
		var _ = new (o("WAWebActionToast.react")).ActionType(s._(
			/*BTDS*/
			"",
			[s._plural(c)]
		)), f = o("WAWebChatSendMessages").sendStarMsgs(e, t, !0).then(function() {
			return new (o("WAWebActionToast.react")).ActionType(s._(
				/*BTDS*/
				"",
				[s._plural(c, "count")]
			), {
				actionText: s._(
					/*BTDS*/
					""
				),
				actionHandler: function() {
					return h(e, t, l, i);
				}
			});
		}).catch(o("WAFilteredCatch").filteredCatch(o("WAWebBackendErrors").ServerStatusCodeError, function(t) {
			if (t.status >= 400) return o("WAWebChatEphemerality").isEphemeralSettingOn(e) ? new (o("WAWebActionToast.react")).ActionType(s._(
				/*BTDS*/
				"",
				[s._plural(c)]
			)) : new (o("WAWebActionToast.react")).ActionType(s._(
				/*BTDS*/
				"",
				[s._plural(c)]
			));
		})).catch(function(n) {
			return o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose(["chatAction:sendStarMsgs dropped"]))), new (o("WAWebActionToast.react")).ActionType(s._(
				/*BTDS*/
				"",
				[s._plural(c)]
			), {
				actionText: s._(
					/*BTDS*/
					""
				),
				actionHandler: function() {
					return g(e, t, l, i);
				}
			});
		});
		return o("WAWebToastManager").ToastManager.open(p.jsx(o("WAWebActionToast.react").ActionToast, {
			id: l,
			toastPosition: i,
			initialAction: _,
			pendingAction: f
		})), f;
	}
	function h(e, t, a, i) {
		if (i === void 0 && (i = "LEFT"), !t || t.some(function(e) {
			return !e.id;
		})) return (d || (d = n("Promise"))).reject(new (o("WAWebMiscErrors")).ActionError());
		var l = r("isStringNullOrEmpty")(a) ? o("WAWebActionToast.react").genId() : a, u = t.length, m = new (o("WAWebActionToast.react")).ActionType(s._(
			/*BTDS*/
			"",
			[s._plural(u)]
		)), _ = o("WAWebChatSendMessages").sendStarMsgs(e, t, !1).then(function() {
			return new (o("WAWebActionToast.react")).ActionType(s._(
				/*BTDS*/
				"",
				[s._plural(u, "count")]
			), {
				actionText: s._(
					/*BTDS*/
					""
				),
				actionHandler: function() {
					return g(e, t, l, i);
				}
			});
		}).catch(o("WAFilteredCatch").filteredCatch(o("WAWebBackendErrors").ServerStatusCodeError, function(t) {
			if (t.status >= 400) return o("WAWebChatEphemerality").isEphemeralSettingOn(e) ? new (o("WAWebActionToast.react")).ActionType(s._(
				/*BTDS*/
				"",
				[s._plural(u)]
			)) : new (o("WAWebActionToast.react")).ActionType(s._(
				/*BTDS*/
				"",
				[s._plural(u)]
			));
		})).catch(function(n) {
			return o("WALogger").WARN(c || (c = babelHelpers.taggedTemplateLiteralLoose(["chatAction:sendUnstarMsgs dropped"]))), new (o("WAWebActionToast.react")).ActionType(s._(
				/*BTDS*/
				"",
				[s._plural(u)]
			), {
				actionText: s._(
					/*BTDS*/
					""
				),
				actionHandler: function() {
					return h(e, t, l, i);
				}
			});
		});
		return o("WAWebToastManager").ToastManager.open(p.jsx(o("WAWebActionToast.react").ActionToast, {
			id: l,
			toastPosition: i,
			initialAction: m,
			pendingAction: _
		})), _;
	}
	function y(e) {
		var t = Array.from(new Set(e.map(function(e) {
			return o("WAWebWamMsgUtils").getWamMediaType(e);
		})));
		return t.length === 1 ? t[0] : void 0;
	}
	function C(e, t, n) {
		return b.apply(this, arguments);
	}
	function b() {
		return b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
			if (t.type === "message") {
				if (o("WAWebChatGetters").getIsPSA(e)) {
					var r = 0;
					for (r; r < t.list.length; r++) o("WAWebWamChatPSALogger").logChatPSADelete(t.list[r]);
				}
				t.list.filter(o("WAWebMsgGetters").getIsAuthenticationMessage).forEach(function(e) {
					o("WAWebOTPLoggingHelper").logOTPMessageDeleted(o("WAWebMsgDataFromModel").msgDataFromMsgModel(e));
				});
			}
			new (o("WAWebMessageDeleteActionsWamEvent")).MessageDeleteActionsWamEvent({
				deleteActionType: n ? o("WAWebWamEnumDeleteActionType").DELETE_ACTION_TYPE.DELETE_FOR_EVERYONE : o("WAWebWamEnumDeleteActionType").DELETE_ACTION_TYPE.DELETE_FOR_ME,
				isAGroup: o("WAWebChatGetters").getIsGroup(e),
				messagesDeleted: t.list.length,
				threadId: yield o("WAWebChatThreadLogging").getChatThreadID(e.id.toJid()),
				mediaType: y(t.list)
			}).commit();
		}), b.apply(this, arguments);
	}
	function v(e, t, n) {
		return S.apply(this, arguments);
	}
	function S() {
		return S = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
			new (o("WAWebSnackbarDeleteUndoWamEvent")).SnackbarDeleteUndoWamEvent({
				snackbarActionType: n === "shown" ? o("WAWebWamEnumSnackbarActionType").SNACKBAR_ACTION_TYPE.SNACKBAR_SHOWN : o("WAWebWamEnumSnackbarActionType").SNACKBAR_ACTION_TYPE.MESSAGE_UNDELETE,
				isAGroup: o("WAWebChatGetters").getIsGroup(e),
				messagesUndeleted: t.list.length,
				threadId: yield o("WAWebChatThreadLogging").getChatThreadID(e.id.toJid()),
				mediaType: y(t.list)
			}).commit();
		}), S.apply(this, arguments);
	}
	l.MESSAGE_DELETE_DELAY_DURATION = _, l.getMuteAllDurationLabel = f, l.handleSendStarMsgs = g, l.handleSendUnstarMsgs = h, l.logMessageDeleteActionsMetric = C, l.logSnackbarDeleteUndoMetric = v;
}), 226);
