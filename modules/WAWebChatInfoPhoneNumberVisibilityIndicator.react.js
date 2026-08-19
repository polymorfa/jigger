__d("WAWebChatInfoPhoneNumberVisibilityIndicator.react", [
	"fbt",
	"WAWebCagPhoneNumberPrivacyNux.react",
	"WAWebChatInfoDrawerRow.react",
	"WAWebModalManager",
	"WAWebPnhCagDailyUtils",
	"WAWebSharePhoneNumberModal.react",
	"WAWebText.react",
	"WAWebUserPrefsMeUser",
	"WAWebUsernameWorkerCompatibleGatingUtils",
	"WAWebWamEnumPnhEntryPointType",
	"WDSIconIcDialpad.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react"));
	function c(e) {
		var t = o("react-compiler-runtime").c(10), n = e.handleClick, a = e.phoneNumberIsShared, i = e.showUsernameAwareSharedText, l = i === void 0 ? !1 : i, c;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (c = u.jsx(o("WAWebText.react").WAWebTextTitle, {
			as: "span",
			children: s._(
				/*BTDS*/
				""
			)
		}), t[0] = c) : c = t[0];
		var d = c, m;
		t[1] !== l ? (m = l ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		), t[1] = l, t[2] = m) : m = t[2];
		var p = m, _;
		t[3] === Symbol.for("react.memo_cache_sentinel") ? (_ = s._(
			/*BTDS*/
			""
		), t[3] = _) : _ = t[3];
		var f = _, g = a ? p : f, h;
		t[4] === Symbol.for("react.memo_cache_sentinel") ? (h = u.jsx(r("WDSIconIcDialpad.react"), {}), t[4] = h) : h = t[4];
		var y;
		t[5] !== g ? (y = u.jsx(o("WAWebText.react").WAWebTextMutedRefreshed, { children: g }), t[5] = g, t[6] = y) : y = t[6];
		var C;
		if (t[7] !== n || t[8] !== y) {
			var b = {
				icon: h,
				title: d,
				testid: "phone_number_visibility_indicator",
				secondaryTitle: y,
				onClick: n
			};
			C = u.jsx(o("WAWebChatInfoDrawerRow.react").ChatInfoDrawerRowRefreshed, babelHelpers.extends({}, b)), t[7] = n, t[8] = y, t[9] = C;
		} else C = t[9];
		return C;
	}
	function d(e) {
		var t = o("react-compiler-runtime").c(6), n = e.chat, r;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (r = o("WAWebUserPrefsMeUser").getMaybeMePnUser(), t[0] = r) : r = t[0];
		var a = r;
		if (a == null) return null;
		var i = n.contact.shareOwnPn === !0, l;
		t[1] !== i ? (l = function() {
			if (i && a) {
				o("WAWebModalManager").ModalManager.open(u.jsx(o("WAWebSharePhoneNumberModal.react").PostSharePhoneNumberModal, {
					entryPoint: o("WAWebWamEnumPnhEntryPointType").PNH_ENTRY_POINT_TYPE.CHAT_INFO_PN_VISIBILITY,
					mePnUser: a
				}));
				return;
			}
			o("WAWebModalManager").ModalManager.open(u.jsx(o("WAWebSharePhoneNumberModal.react").SharePhoneNumberModal, { entryPoint: o("WAWebWamEnumPnhEntryPointType").PNH_ENTRY_POINT_TYPE.CHAT_INFO_PN_VISIBILITY }));
		}, t[1] = i, t[2] = l) : l = t[2];
		var s = l, d;
		return t[3] !== s || t[4] !== i ? (d = u.jsx(c, {
			phoneNumberIsShared: i,
			handleClick: s
		}), t[3] = s, t[4] = i, t[5] = d) : d = t[5], d;
	}
	function m(e) {
		var t, n, r = o("react-compiler-runtime").c(9), a = e.chat, i = o("WAWebUserPrefsMeUser").getMaybeMePnUser();
		if (i == null) return null;
		var l;
		if (r[0] !== ((t = a.groupMetadata) == null ? void 0 : t.participants)) {
			var s, d;
			l = (s = a.groupMetadata) == null ? void 0 : s.participants.iAmAdmin(), r[0] = (d = a.groupMetadata) == null ? void 0 : d.participants, r[1] = l;
		} else l = r[1];
		var m = !!l, p;
		if (r[2] !== ((n = a.groupMetadata) == null ? void 0 : n.parentGroup) || r[3] !== m) {
			var _;
			p = function() {
				var e, t = (e = a.groupMetadata) == null ? void 0 : e.parentGroup;
				t && o("WAWebPnhCagDailyUtils").incrementPnhDailyCount(t, o("WAWebPnhCagDailyUtils").PnhCagDailyMetricsType.PNH_INDICATOR_CLICKS_INFO_SCREEN), o("WAWebModalManager").ModalManager.open(m ? u.jsx(o("WAWebCagPhoneNumberPrivacyNux.react").CagPhoneNumberSharedNux, {}) : u.jsx(o("WAWebCagPhoneNumberPrivacyNux.react").CagPhoneNumberHiddenNux, {}));
			}, r[2] = (_ = a.groupMetadata) == null ? void 0 : _.parentGroup, r[3] = m, r[4] = p;
		} else p = r[4];
		var f = p, g;
		r[5] === Symbol.for("react.memo_cache_sentinel") ? (g = o("WAWebUsernameWorkerCompatibleGatingUtils").isUsernameCreationMode(), r[5] = g) : g = r[5];
		var h;
		return r[6] !== f || r[7] !== m ? (h = u.jsx(c, {
			phoneNumberIsShared: m,
			handleClick: f,
			showUsernameAwareSharedText: g
		}), r[6] = f, r[7] = m, r[8] = h) : h = r[8], h;
	}
	l.PhoneNumberVisibilityIndicator1On1 = d, l.PhoneNumberVisibilityIndicatorCag = m;
}), 226);
