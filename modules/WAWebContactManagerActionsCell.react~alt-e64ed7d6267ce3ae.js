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
		var t = e.chatJid, n = e.onChatClick, a = e.onDelete, i = m(null), l = d(function(e) {
			e.stopPropagation(), o("WAWebContactManagerSMBUserJourneyLogger").ContactManagerUserJourneyLogger.clickRowChat(), n == null || n(t);
		}, [t, n]), c = m(!1), p = d(function() {
			c.current = !0, o("WAWebContactManagerSMBUserJourneyLogger").ContactManagerUserJourneyLogger.clickActionsMenuOption("remove_as_customer"), _(t, a);
		}, [t, a]), f = u.jsx(r("WDSMenu.react"), { children: u.jsx(r("WDSMenuItem.react"), {
			title: s._(
				/*BTDS*/
				""
			),
			Icon: r("WDSIconIcClose.react"),
			onPress: p,
			testid: "customer-manager-action-delete"
		}) }), g = r("useWDSMenu")({
			targetRef: i,
			menu: f,
			onClose: function() {
				c.current || o("WAWebContactManagerSMBUserJourneyLogger").ContactManagerUserJourneyLogger.dismissActionsMenu(), c.current = !1;
			}
		}), h = g.closeMenu, y = g.isMenuOpen, C = g.menuPortal, b = g.openMenu, v = d(function(e) {
			e.stopPropagation(), y ? h() : (o("WAWebContactManagerSMBUserJourneyLogger").ContactManagerUserJourneyLogger.viewActionsMenu(), b());
		}, [
			y,
			h,
			b
		]);
		return u.jsxs("div", {
			className: "x78zum5 x6s0dn4 x13a6bvl xh8yej3",
			children: [
				u.jsx(r("WDSButton.react"), {
					Icon: r("WDSIconWdsIcChat.react"),
					variant: "borderless",
					size: "small",
					type: "default",
					onPress: l,
					"aria-label": s._(
						/*BTDS*/
						""
					),
					testid: "customer-manager-chat-btn"
				}),
				u.jsx(r("WDSButton.react"), {
					ref: i,
					Icon: r("WDSIconIcMoreVert.react"),
					variant: "borderless",
					size: "small",
					type: "default",
					onPress: v,
					"aria-label": s._(
						/*BTDS*/
						""
					),
					"aria-haspopup": "menu",
					"aria-expanded": y,
					testid: "customer-manager-actions-btn"
				}),
				C
			]
		});
	}
	f.displayName = f.name + " [from " + i.id + "]", l.default = f;
}), 226);
