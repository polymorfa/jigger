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
	"react-compiler-runtime",
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
		var t, n = o("react-compiler-runtime").c(29), a = e.chat, i = e.onBack, l = e.onDeactivateCommunity, s = e.onTransferOwnership, m;
		n[0] !== a || n[1] !== s ? (m = !o("WAWebChatGroupUtils").isTerminatedGroupOrNotMember(a) && !o("WAWebChatCommunityUtils").isIntegrityDeactivatedCommunity(a) ? u.jsx(f, {
			chat: a,
			onTransferOwnership: s
		}) : null, n[0] = a, n[1] = s, n[2] = m) : m = n[2];
		var y = m, C;
		n[3] !== a || n[4] !== i ? (C = o("WAWebChatCommunityUtils").isIntegrityDeactivatedCommunity(a) ? u.jsx(_, {
			chat: a,
			onBack: i
		}) : null, n[3] = a, n[4] = i, n[5] = C) : C = n[5];
		var b = C, v;
		n[6] !== a || n[7] !== s ? (v = o("WAWebChatCommunityUtils").isIntegrityDeactivatedCommunity(a) ? null : u.jsx(p, {
			chat: a,
			onTransferOwnership: s
		}), n[6] = a, n[7] = s, n[8] = v) : v = n[8];
		var S = v, R;
		n[9] === Symbol.for("react.memo_cache_sentinel") ? (R = [
			"bulk_add",
			"bulk_remove",
			"reset",
			"change:isSuperAdmin"
		], n[9] = R) : R = n[9];
		var L;
		n[10] !== a ? (L = function() {
			return o("WAWebChatCommunityUtils").isCommunitySuperAdmin(a) && !o("WAWebChatCommunityUtils").isIntegrityDeactivatedCommunity(a);
		}, n[10] = a, n[11] = L) : L = n[11];
		var E = r("useWAWebEventTargetValue")(a == null || (t = a.groupMetadata) == null ? void 0 : t.participants, R, L), k;
		n[12] === Symbol.for("react.memo_cache_sentinel") ? (k = ["change:suspended"], n[12] = k) : k = n[12];
		var I;
		n[13] !== a ? (I = function() {
			return !o("WAWebChatCommunityUtils").isSuspendedCommunity(a);
		}, n[13] = a, n[14] = I) : I = n[14];
		var T = r("useWAWebEventTargetValue")(a == null ? void 0 : a.groupMetadata, k, I), D;
		n[15] !== E || n[16] !== l ? (D = E ? u.jsx(g, { onDeactivateCommunity: l }) : null, n[15] = E, n[16] = l, n[17] = D) : D = n[17];
		var x = D, $;
		n[18] !== E || n[19] !== T || n[20] !== s ? ($ = E && T ? u.jsx(h, { onTransferOwnership: s }) : null, n[18] = E, n[19] = T, n[20] = s, n[21] = $) : $ = n[21];
		var P = $, N;
		n[22] === Symbol.for("react.memo_cache_sentinel") ? (N = [d.drawerSectionContainer, c.marginBlock10], n[22] = N) : N = n[22];
		var M;
		return n[23] !== P || n[24] !== x || n[25] !== b || n[26] !== y || n[27] !== S ? (M = u.jsxs(o("WAWebChatInfoDrawerSection.react").ChatInfoDrawerSection, {
			xstyle: N,
			children: [
				P,
				y,
				b,
				S,
				x
			]
		}), n[23] = P, n[24] = x, n[25] = b, n[26] = y, n[27] = S, n[28] = M) : M = n[28], M;
	}
	function p(e) {
		var t = o("react-compiler-runtime").c(9), n = e.chat, a = e.onTransferOwnership, i;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (i = s._(
			/*BTDS*/
			""
		), t[0] = i) : i = t[0];
		var l = i, c;
		t[1] !== n || t[2] !== a ? (c = function(t) {
			t.preventDefault();
			var e = function() {
				o("WAWebSendSpamChatAction").sendReport({
					chat: n,
					spamFlow: o("WAWebSpamConstants").SpamFlow.CommunityHome
				}), o("WAWebModalManager").ModalManager.close();
			}, i = function() {
				o("WAWebSendSpamChatAction").sendReport({
					chat: n,
					spamFlow: o("WAWebSpamConstants").SpamFlow.CommunityHome
				}).then(function() {
					o("WAWebLeaveCommunityModalUtils").openLeaveCommunityModal({
						chat: n,
						onTransferOwnership: a,
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
		}, t[1] = n, t[2] = a, t[3] = c) : c = t[3];
		var d = c, m;
		t[4] === Symbol.for("react.memo_cache_sentinel") ? (m = l.toString(), t[4] = m) : m = t[4];
		var p;
		t[5] === Symbol.for("react.memo_cache_sentinel") ? (p = u.jsx(r("WDSIconIcThumbDown.react"), {}), t[5] = p) : p = t[5];
		var _;
		t[6] === Symbol.for("react.memo_cache_sentinel") ? (_ = s._(
			/*BTDS*/
			""
		), t[6] = _) : _ = t[6];
		var f;
		return t[7] !== d ? (f = u.jsx(o("WAWebDrawerButton.react").DrawerButtonSimple, {
			ariaLabel: m,
			testid: "li-report-community-spam",
			color: "danger",
			icon: p,
			theme: "chat-info",
			onClick: d,
			children: _
		}), t[7] = d, t[8] = f) : f = t[8], f;
	}
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
		var t = o("react-compiler-runtime").c(6), n = e.onDeactivateCommunity, r;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (r = s._(
			/*BTDS*/
			""
		), t[0] = r) : r = t[0];
		var a = r, i;
		t[1] === Symbol.for("react.memo_cache_sentinel") ? (i = a.toString(), t[1] = i) : i = t[1];
		var l;
		t[2] === Symbol.for("react.memo_cache_sentinel") ? (l = u.jsx(o("WAWebDeactivateIconIcon.react").DeactivateIconIcon, {}), t[2] = l) : l = t[2];
		var c;
		t[3] === Symbol.for("react.memo_cache_sentinel") ? (c = s._(
			/*BTDS*/
			""
		), t[3] = c) : c = t[3];
		var d;
		return t[4] !== n ? (d = u.jsx(o("WAWebDrawerButton.react").DrawerButtonSimple, {
			ariaLabel: i,
			testid: "li-deactivate-community",
			color: "danger",
			icon: l,
			theme: "chat-info",
			onClick: n,
			children: c
		}), t[4] = n, t[5] = d) : d = t[5], d;
	}
	function h(e) {
		var t = o("react-compiler-runtime").c(7), n = e.onTransferOwnership, r;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (r = s._(
			/*BTDS*/
			""
		), t[0] = r) : r = t[0];
		var a = r, i;
		t[1] !== n ? (i = function(t) {
			t.preventDefault(), n();
		}, t[1] = n, t[2] = i) : i = t[2];
		var l = i, c;
		t[3] === Symbol.for("react.memo_cache_sentinel") ? (c = a.toString(), t[3] = c) : c = t[3];
		var d;
		t[4] === Symbol.for("react.memo_cache_sentinel") ? (d = u.jsx(o("WAWebPersonArrowIcon.react").PersonArrowIcon, { directional: !0 }), t[4] = d) : d = t[4];
		var m;
		return t[5] !== l ? (m = u.jsx(o("WAWebDrawerButton.react").DrawerButtonSimple, {
			ariaLabel: c,
			testid: "li-assign-new-owner-community",
			color: "secondary",
			icon: d,
			theme: "chat-info",
			onClick: l,
			children: a
		}), t[5] = l, t[6] = m) : m = t[6], m;
	}
	l.default = m;
}), 226);
