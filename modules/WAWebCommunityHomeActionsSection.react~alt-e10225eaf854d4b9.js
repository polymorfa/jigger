__d("WAWebCommunityHomeActionsSection.react", [
	"fbt",
	"WAWebABProps",
	"WAWebChatCommunityUtils",
	"WAWebChatGroupUtils",
	"WAWebChatInfoDrawerSection.react",
	"WAWebDeactivateIconIcon.react",
	"WAWebDeleteChatDialogV2.react",
	"WAWebDeleteChatPopup.react",
	"WAWebDeleteIcon.react",
	"WAWebDrawerButton.react",
	"WAWebDrawerManager",
	"WAWebFbtCommon",
	"WAWebLeaveCommunityModalUtils",
	"WAWebModalManager",
	"WAWebPersonArrowIcon.react",
	"WAWebReportSpamPopup.react",
	"WAWebSendSpamChatAction",
	"WAWebSpamConstants",
	"WDSDialogBridge",
	"WDSIconIcLogout.react",
	"WDSIconIcThumbDown.react",
	"react",
	"useWAWebEventTargetValue"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = { marginBlock10: {
		marginTop: "x1anpbxc",
		marginBottom: "xyorhqc",
		$$css: !0
	} }, d = { drawerSectionContainer: {
		paddingTop: "xexx8yu",
		paddingInlineEnd: "xyri2b",
		paddingBottom: "x18d9i69",
		paddingInlineStart: "x1c1uobl",
		$$css: !0
	} };
	function m(e) {
		var t, n = e.chat, a = e.onBack, i = e.onDeactivateCommunity, l = e.onTransferOwnership, s = !o("WAWebChatGroupUtils").isTerminatedGroupOrNotMember(n) && !o("WAWebChatCommunityUtils").isIntegrityDeactivatedCommunity(n) ? u.jsx(f, {
			chat: n,
			onTransferOwnership: l
		}) : null, m = o("WAWebChatCommunityUtils").isIntegrityDeactivatedCommunity(n) ? u.jsx(_, {
			chat: n,
			onBack: a
		}) : null, y = o("WAWebChatCommunityUtils").isIntegrityDeactivatedCommunity(n) ? null : u.jsx(p, {
			chat: n,
			onTransferOwnership: l
		}), C = r("useWAWebEventTargetValue")(n == null || (t = n.groupMetadata) == null ? void 0 : t.participants, [
			"bulk_add",
			"bulk_remove",
			"reset",
			"change:isSuperAdmin"
		], function() {
			return o("WAWebChatCommunityUtils").isCommunitySuperAdmin(n) && !o("WAWebChatCommunityUtils").isIntegrityDeactivatedCommunity(n);
		}), b = r("useWAWebEventTargetValue")(n == null ? void 0 : n.groupMetadata, ["change:suspended"], function() {
			return !o("WAWebChatCommunityUtils").isSuspendedCommunity(n);
		}), v = C ? u.jsx(g, { onDeactivateCommunity: i }) : null, S = C && b ? u.jsx(h, { onTransferOwnership: l }) : null;
		return u.jsxs(o("WAWebChatInfoDrawerSection.react").ChatInfoDrawerSection, {
			xstyle: [d.drawerSectionContainer, c.marginBlock10],
			children: [
				S,
				s,
				m,
				y,
				v
			]
		});
	}
	m.displayName = m.name + " [from " + i.id + "]";
	function p(e) {
		var t = e.chat, n = e.onTransferOwnership, a = s._(
			/*BTDS*/
			""
		), i = function(a) {
			a.preventDefault();
			var e = function() {
				o("WAWebSendSpamChatAction").sendReport({
					chat: t,
					spamFlow: o("WAWebSpamConstants").SpamFlow.CommunityHome
				}), o("WAWebModalManager").ModalManager.close();
			}, i = function() {
				o("WAWebSendSpamChatAction").sendReport({
					chat: t,
					spamFlow: o("WAWebSpamConstants").SpamFlow.CommunityHome
				}).then(function() {
					o("WAWebLeaveCommunityModalUtils").openLeaveCommunityModal({
						chat: t,
						onTransferOwnership: n,
						spamFlow: o("WAWebSpamConstants").SpamFlow.CommunityHome
					});
				});
			};
			o("WAWebModalManager").ModalManager.open(u.jsx(r("WAWebReportSpamPopup.react"), {
				isCommunity: !0,
				isGroupChat: !0,
				isMessage: !1,
				onReport: e,
				onReportExitClear: i,
				onCancel: o("WAWebModalManager").closeModalManager
			}));
		};
		return u.jsx(o("WAWebDrawerButton.react").DrawerButtonSimple, {
			ariaLabel: a.toString(),
			testid: "li-report-community-spam",
			color: "danger",
			icon: u.jsx(r("WDSIconIcThumbDown.react"), {}),
			theme: "chat-info",
			onClick: i,
			children: s._(
				/*BTDS*/
				""
			)
		});
	}
	p.displayName = p.name + " [from " + i.id + "]";
	function _(e) {
		var t = e.chat, n = e.onBack, a = s._(
			/*BTDS*/
			""
		), i = function(r) {
			t.pendingAction++, r.finally(function() {
				t.pendingAction--, n ? n() : o("WAWebDrawerManager").DrawerManager.closeDrawerLeft();
			});
		}, l = function(n) {
			n.preventDefault(), o("WAWebABProps").getABPropConfigValue("wds_web_dialog") ? o("WDSDialogBridge").openWDSDialog(u.jsx(r("WAWebDeleteChatDialogV2.react"), {
				chat: t,
				onDeleteOrExit: i
			})) : o("WAWebModalManager").ModalManager.open(u.jsx(r("WAWebDeleteChatPopup.react"), {
				chat: t,
				onDeleteOrExit: i
			}), { transition: "modal-flow" });
		};
		return u.jsx(o("WAWebDrawerButton.react").DrawerButtonSimple, {
			ariaLabel: a.toString(),
			testid: "li-delete-community",
			color: "danger",
			icon: u.jsx(o("WAWebDeleteIcon.react").DeleteIcon, { directional: !0 }),
			theme: "chat-info",
			onClick: l,
			children: s._(
				/*BTDS*/
				""
			)
		});
	}
	_.displayName = _.name + " [from " + i.id + "]";
	function f(e) {
		var t = e.chat, n = e.onTransferOwnership, a = r("WAWebFbtCommon")("Exit Community"), i = function(r) {
			r.preventDefault(), o("WAWebLeaveCommunityModalUtils").openLeaveCommunityModal({
				chat: t,
				onTransferOwnership: n,
				onExitAndDeleteSuccess: o("WAWebDrawerManager").closeDrawerRight,
				spamFlow: o("WAWebSpamConstants").SpamFlow.CommunityHome
			});
		};
		return u.jsx(o("WAWebDrawerButton.react").DrawerButtonSimple, {
			ariaLabel: a.toString(),
			testid: "li-exit-community",
			color: "danger",
			icon: u.jsx(r("WDSIconIcLogout.react"), { directional: !0 }),
			theme: "chat-info",
			onClick: i,
			children: r("WAWebFbtCommon")("Exit Community")
		});
	}
	f.displayName = f.name + " [from " + i.id + "]";
	function g(e) {
		var t = e.onDeactivateCommunity, n = s._(
			/*BTDS*/
			""
		);
		return u.jsx(o("WAWebDrawerButton.react").DrawerButtonSimple, {
			ariaLabel: n.toString(),
			testid: "li-deactivate-community",
			color: "danger",
			icon: u.jsx(o("WAWebDeactivateIconIcon.react").DeactivateIconIcon, {}),
			theme: "chat-info",
			onClick: t,
			children: s._(
				/*BTDS*/
				""
			)
		});
	}
	g.displayName = g.name + " [from " + i.id + "]";
	function h(e) {
		var t = e.onTransferOwnership, n = s._(
			/*BTDS*/
			""
		), r = function(n) {
			n.preventDefault(), t();
		};
		return u.jsx(o("WAWebDrawerButton.react").DrawerButtonSimple, {
			ariaLabel: n.toString(),
			testid: "li-assign-new-owner-community",
			color: "secondary",
			icon: u.jsx(o("WAWebPersonArrowIcon.react").PersonArrowIcon, { directional: !0 }),
			theme: "chat-info",
			onClick: r,
			children: n
		});
	}
	h.displayName = h.name + " [from " + i.id + "]", l.default = m;
}), 226);
