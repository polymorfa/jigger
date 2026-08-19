__d("WAWebContactManagerActionsCell.react", [
	"fbt",
	"WAWebConfirmPopup.react",
	"WAWebContactCollection",
	"WAWebContactManagerSMBUserJourneyLogger",
	"WAWebContactType",
	"WAWebCustomerDataCollection",
	"WAWebCustomerDataFieldSaver",
	"WAWebFrontendContactGetters",
	"WAWebModalManager",
	"WDSButton.react",
	"WDSIconIcClose.react",
	"WDSIconIcMoreVert.react",
	"WDSIconWdsIcChat.react",
	"WDSMenu.react",
	"WDSMenuItem.react",
	"react",
	"react-compiler-runtime",
	"useWDSMenu"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = e, d = c.useCallback, m = c.useRef;
	function p(e) {
		var t = o("WAWebContactCollection").ContactCollection.get(e);
		return t != null ? o("WAWebFrontendContactGetters").getDisplayName(t) : String(e);
	}
	function _(e, t) {
		var n = p(e);
		o("WAWebContactManagerSMBUserJourneyLogger").ContactManagerUserJourneyLogger.viewRemoveConfirm(o("WAWebContactManagerSMBUserJourneyLogger").RemoveTrigger.ROW_ACTIONS_MENU);
		var r = !1, a = function() {
			r || o("WAWebContactManagerSMBUserJourneyLogger").ContactManagerUserJourneyLogger.dismissRemoveConfirm(), o("WAWebModalManager").closeModalManager();
		};
		o("WAWebModalManager").ModalManager.open(u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			title: s._(
				/*BTDS*/
				""
			),
			okText: s._(
				/*BTDS*/
				""
			),
			okButtonType: "warning",
			onOK: function() {
				r = !0, o("WAWebContactManagerSMBUserJourneyLogger").ContactManagerUserJourneyLogger.clickRemoveConfirm();
				var n = Date.now(), a = o("WAWebCustomerDataCollection").CustomerDataCollection.maybeGetCustomerDataByChatJid(e);
				a != null ? o("WAWebCustomerDataFieldSaver").saveCustomerDataField(e, a, { contactType: o("WAWebContactType").ContactType.NONE }).then(function() {
					o("WAWebContactManagerSMBUserJourneyLogger").ContactManagerUserJourneyLogger.removeCustomerResult(o("WAWebContactManagerSMBUserJourneyLogger").RemoveResult.SUCCESS, Date.now() - n);
				}).catch(function() {
					o("WAWebContactManagerSMBUserJourneyLogger").ContactManagerUserJourneyLogger.removeCustomerResult(o("WAWebContactManagerSMBUserJourneyLogger").RemoveResult.ERROR_UNKNOWN, Date.now() - n);
				}) : o("WAWebContactManagerSMBUserJourneyLogger").ContactManagerUserJourneyLogger.removeCustomerResult(o("WAWebContactManagerSMBUserJourneyLogger").RemoveResult.ERROR_NOT_CUSTOMER, Date.now() - n), t == null || t(e), o("WAWebModalManager").closeModalManager();
			},
			onCancel: a,
			onOverlayClick: a,
			testid: "customer-manager-delete-confirm",
			children: s._(
				/*BTDS*/
				"",
				[s._param("customerName", n)]
			)
		}));
	}
	function f(e) {
		var t = o("react-compiler-runtime").c(28), n = e.chatJid, a = e.onChatClick, i = e.onDelete, l = m(null), c;
		t[0] !== n || t[1] !== a ? (c = function(t) {
			t.stopPropagation(), o("WAWebContactManagerSMBUserJourneyLogger").ContactManagerUserJourneyLogger.clickRowChat(), a == null || a(n);
		}, t[0] = n, t[1] = a, t[2] = c) : c = t[2];
		var d = c, p = m(!1), f;
		t[3] !== n || t[4] !== i ? (f = function() {
			p.current = !0, o("WAWebContactManagerSMBUserJourneyLogger").ContactManagerUserJourneyLogger.clickActionsMenuOption("remove_as_customer"), _(n, i);
		}, t[3] = n, t[4] = i, t[5] = f) : f = t[5];
		var g = f, h;
		t[6] === Symbol.for("react.memo_cache_sentinel") ? (h = s._(
			/*BTDS*/
			""
		), t[6] = h) : h = t[6];
		var y;
		t[7] !== g ? (y = u.jsx(r("WDSMenu.react"), { children: u.jsx(r("WDSMenuItem.react"), {
			title: h,
			Icon: r("WDSIconIcClose.react"),
			onPress: g,
			testid: "customer-manager-action-delete"
		}) }), t[7] = g, t[8] = y) : y = t[8];
		var C = y, b;
		t[9] === Symbol.for("react.memo_cache_sentinel") ? (b = function() {
			p.current || o("WAWebContactManagerSMBUserJourneyLogger").ContactManagerUserJourneyLogger.dismissActionsMenu(), p.current = !1;
		}, t[9] = b) : b = t[9];
		var v;
		t[10] !== C ? (v = {
			targetRef: l,
			menu: C,
			onClose: b
		}, t[10] = C, t[11] = v) : v = t[11];
		var S = r("useWDSMenu")(v), R = S.closeMenu, L = S.isMenuOpen, E = S.menuPortal, k = S.openMenu, I;
		t[12] !== R || t[13] !== L || t[14] !== k ? (I = function(t) {
			t.stopPropagation(), L ? R() : (o("WAWebContactManagerSMBUserJourneyLogger").ContactManagerUserJourneyLogger.viewActionsMenu(), k());
		}, t[12] = R, t[13] = L, t[14] = k, t[15] = I) : I = t[15];
		var T = I, D;
		t[16] === Symbol.for("react.memo_cache_sentinel") ? (D = { className: "x78zum5 x6s0dn4 x13a6bvl xh8yej3" }, t[16] = D) : D = t[16];
		var x;
		t[17] === Symbol.for("react.memo_cache_sentinel") ? (x = s._(
			/*BTDS*/
			""
		), t[17] = x) : x = t[17];
		var $;
		t[18] !== d ? ($ = u.jsx(r("WDSButton.react"), {
			Icon: r("WDSIconWdsIcChat.react"),
			variant: "borderless",
			size: "small",
			type: "default",
			onPress: d,
			"aria-label": x,
			testid: "customer-manager-chat-btn"
		}), t[18] = d, t[19] = $) : $ = t[19];
		var P;
		t[20] === Symbol.for("react.memo_cache_sentinel") ? (P = s._(
			/*BTDS*/
			""
		), t[20] = P) : P = t[20];
		var N;
		t[21] !== T || t[22] !== L ? (N = u.jsx(r("WDSButton.react"), {
			ref: l,
			Icon: r("WDSIconIcMoreVert.react"),
			variant: "borderless",
			size: "small",
			type: "default",
			onPress: T,
			"aria-label": P,
			"aria-haspopup": "menu",
			"aria-expanded": L,
			testid: "customer-manager-actions-btn"
		}), t[21] = T, t[22] = L, t[23] = N) : N = t[23];
		var M;
		return t[24] !== E || t[25] !== $ || t[26] !== N ? (M = u.jsxs("div", babelHelpers.extends({}, D, { children: [
			$,
			N,
			E
		] })), t[24] = E, t[25] = $, t[26] = N, t[27] = M) : M = t[27], M;
	}
	l.default = f;
}), 226);
