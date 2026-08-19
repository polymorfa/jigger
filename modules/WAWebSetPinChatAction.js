__d("WAWebSetPinChatAction", [
	"fbt",
	"WAAbortError",
	"WALogger",
	"WATimeUtils",
	"WAWebActionToast.react",
	"WAWebAuraGating",
	"WAWebBackendErrors",
	"WAWebChatGetters",
	"WAWebChatPinBridge",
	"WAWebModalManager",
	"WAWebNoop",
	"WAWebPinChatLimits",
	"WAWebPinnedChatsWamEvent",
	"WAWebPinnedChatsWamUtils",
	"WAWebStateUtils",
	"WAWebToastManager",
	"WAWebWaPlusBenefitJourneyLogger",
	"WAWebWamEnumWpbujBenefitType",
	"WAWebWamEnumWpbujSurface",
	"asyncToGeneratorRuntime",
	"react",
	"requireDeferred"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react")), d = r("requireDeferred")("WAWebPinChatAuraUpsellModal.react").__setRef("WAWebSetPinChatAction");
	function m(e, t) {
		if (!e.isNewsletter() && !(t <= o("WAWebPinChatLimits").MAX_PINNED_CHATS) && !(!r("WAWebAuraGating").isPinnedChatsEnabled() && !r("WAWebAuraGating").isPinnedChatsBenefitActive())) {
			var n = r("WAWebAuraGating").isPinnedChatsBenefitActive();
			new (o("WAWebWaPlusBenefitJourneyLogger")).WaPlusBenefitJourneyLogger({
				benefitType: o("WAWebWamEnumWpbujBenefitType").WPBUJ_BENEFIT_TYPE.PINNED_CHATS,
				surface: o("WAWebWamEnumWpbujSurface").WPBUJ_SURFACE.PINNED_CHAT
			}).logApply({
				success: n,
				errorMessage: n ? void 0 : "not_active_user_exceeded_base_limit",
				customFields: { pinned_chat_number: t }
			});
		}
	}
	function p(e) {
		if (!e.isNewsletter() && r("WAWebAuraGating").isPinnedChatsBenefitActive()) {
			var t = o("WAWebChatPinBridge").getPinLimit(e);
			t > o("WAWebPinChatLimits").MAX_PINNED_CHATS || new (o("WAWebWaPlusBenefitJourneyLogger")).WaPlusBenefitJourneyLogger({
				benefitType: o("WAWebWamEnumWpbujBenefitType").WPBUJ_BENEFIT_TYPE.PINNED_CHATS,
				surface: o("WAWebWamEnumWpbujSurface").WPBUJ_SURFACE.PINNED_CHAT
			}).logApply({
				success: !1,
				errorMessage: "active_user_blocked_below_premium_limit"
			});
		}
	}
	function _(e, t) {
		return f(o("WAWebStateUtils").unproxy(e), t);
	}
	function f(t, a, i) {
		i === void 0 && (i = o("WAWebActionToast.react").genId());
		var l = t.promises;
		l.setPin && l.setPin.abortController.abort();
		var u = 0, _, h = o("WATimeUtils").unixTimeMs();
		a ? u = h : _ = t.pin;
		var y = new AbortController(), C = y.signal, b = !!(a && r("WAWebAuraGating").isPinnedChatsEnabled() && !r("WAWebAuraGating").isPinnedChatsBenefitActive()), v = b ? o("WAWebChatPinBridge").getNumConversationsPinned(t.id).then(function(e) {
			var n = o("WAWebChatPinBridge").getPinLimit(t.id);
			if (e >= n) throw new (o("WAWebBackendErrors")).ServerStatusCodeError(405, "Pin limit exceeded");
			return o("WAWebChatPinBridge").setPin({
				_lastPinTime: _,
				chatId: t.id,
				newPinTime: u,
				timestamp: h
			});
		}) : o("WAWebChatPinBridge").setPin({
			_lastPinTime: _,
			chatId: t.id,
			newPinTime: u,
			timestamp: h
		}), S = a ? new (o("WAWebActionToast.react")).ActionType(g.getPinningText(t)) : new (o("WAWebActionToast.react")).ActionType(g.getUnpinningText(t)), R = v.then(function() {
			if (C.aborted) throw new (o("WAAbortError")).AbortError();
			a && o("WAWebChatPinBridge").getNumConversationsPinned(t.id).then(function(e) {
				var n = o("WAWebPinnedChatsWamUtils").getPinnedChatsPremiumStatus();
				new (o("WAWebPinnedChatsWamEvent")).PinnedChatsWamEvent({
					pinnedChatNumber: e,
					pinnedChatsPremiumStatus: n
				}).commit(), m(t.id, e);
			});
			var e = a ? g.getPinnedText(t) : g.getUnpinnedText(t);
			return new (o("WAWebActionToast.react")).ActionType(e, {
				actionText: s._(
					/*BTDS*/
					""
				),
				actionHandler: function() {
					return f(t, !a, i);
				}
			});
		}).catch(o("WAAbortError").catchAbort(r("WAWebNoop"))).catch((function() {
			var r = n("asyncToGeneratorRuntime").asyncToGenerator(function* (n) {
				if (n.status === 405) {
					if (o("WAWebPinnedChatsWamUtils").logPinnedChatsMaxAlert(), p(t.id), b) {
						o("WAWebToastManager").ToastManager.close(i);
						var r = yield d.load();
						return o("WAWebModalManager").ModalManager.openAlert(c.jsx(r, {})), new (o("WAWebActionToast.react")).ActionType(g.getFailedToPinText(t));
					}
					return new (o("WAWebActionToast.react")).ActionType(g.getPinLimitExceededText(t));
				} else if (n.status >= 400) return a ? new (o("WAWebActionToast.react")).ActionType(g.getFailedToPinText(t)) : new (o("WAWebActionToast.react")).ActionType(g.getFailedToUnpinText(t));
				o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose(["models:chat:setPin dropped"])));
				var l = a ? g.getFailedToPinText(t) : g.getFailedToUnpinText(t);
				return new (o("WAWebActionToast.react")).ActionType(l, {
					actionText: s._(
						/*BTDS*/
						""
					),
					actionHandler: function() {
						return f(t, a, i);
					}
				});
			});
			return function(e) {
				return r.apply(this, arguments);
			};
		})());
		o("WAWebToastManager").ToastManager.open(c.jsx(o("WAWebActionToast.react").ActionToast, {
			id: i,
			initialAction: S,
			pendingAction: R
		}));
		var L = v.then(function() {
			t.pin = u;
		}).finally(function() {
			l.setPin = null;
		});
		return l.setPin = {
			promise: L,
			abortController: y
		}, L;
	}
	var g = {
		getPinnedText: function(t) {
			return o("WAWebChatGetters").getIsNewsletter(t) ? s._(
				/*BTDS*/
				""
			) : s._(
				/*BTDS*/
				""
			);
		},
		getUnpinnedText: function(t) {
			return o("WAWebChatGetters").getIsNewsletter(t) ? s._(
				/*BTDS*/
				""
			) : s._(
				/*BTDS*/
				""
			);
		},
		getPinningText: function(t) {
			return o("WAWebChatGetters").getIsNewsletter(t) ? s._(
				/*BTDS*/
				""
			) : s._(
				/*BTDS*/
				""
			);
		},
		getUnpinningText: function(t) {
			return o("WAWebChatGetters").getIsNewsletter(t) ? s._(
				/*BTDS*/
				""
			) : s._(
				/*BTDS*/
				""
			);
		},
		getFailedToPinText: function(t) {
			return o("WAWebChatGetters").getIsNewsletter(t) ? s._(
				/*BTDS*/
				""
			) : s._(
				/*BTDS*/
				""
			);
		},
		getFailedToUnpinText: function(t) {
			return o("WAWebChatGetters").getIsNewsletter(t) ? s._(
				/*BTDS*/
				""
			) : s._(
				/*BTDS*/
				""
			);
		},
		getPinLimitExceededText: function(t) {
			var e = o("WAWebChatPinBridge").getPinLimit(t.id);
			return o("WAWebChatGetters").getIsNewsletter(t) ? s._(
				/*BTDS*/
				"",
				[s._plural(e, "number")]
			) : s._(
				/*BTDS*/
				"",
				[s._plural(e, "number")]
			);
		}
	};
	l.setPin = _;
}), 226);
