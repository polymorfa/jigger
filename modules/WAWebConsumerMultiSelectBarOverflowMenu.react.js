__d("WAWebConsumerMultiSelectBarOverflowMenu.react", [
	"fbt",
	"WAWebABProps",
	"WAWebBizFrontendGatingUtils",
	"WAWebChatModel",
	"WAWebClearSelectedChatsDropdownItem.react",
	"WAWebCmd",
	"WAWebListsGatingUtils",
	"WAWebMultiSelectAddToListMenuItem.react",
	"WAWebUpdateUnreadChatAction",
	"WAWebWamChatActionEventsLogger",
	"WAWebWamEnumChatActionEntryPoint",
	"WAWebWamEnumChatActionType",
	"WDSIconIcArchive.react",
	"WDSIconIcNotificationsFilled.react",
	"WDSIconIcNotificationsOff.react",
	"WDSIconIcUnarchive.react",
	"WDSIconIcUnread.react",
	"WDSIconWdsIcChat.react",
	"WDSMenu.react",
	"WDSMenuItem.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react"));
	function c(e) {
		var t = o("react-compiler-runtime").c(61), n = e.onComplete, a = e.selectedModels, i = e.unmutedChatCount, l = e.unreadChatCount, c;
		if (t[0] !== a) {
			var p = a.getSelected();
			c = p.reduce(m, []), t[0] = a, t[1] = c;
		} else c = t[1];
		var _ = c, f;
		t[2] !== _ || t[3] !== n ? (f = function(t) {
			_.forEach(function(e) {
				o("WAWebUpdateUnreadChatAction").markUnread(e, t, !1);
			}), o("WAWebWamChatActionEventsLogger").logChatActionEvent({
				chatActionEntryPoint: o("WAWebWamEnumChatActionEntryPoint").CHAT_ACTION_ENTRY_POINT.CONVERSATION_LIST_BULK_EDIT,
				chatActionType: t ? o("WAWebWamEnumChatActionType").CHAT_ACTION_TYPE.UNREAD : o("WAWebWamEnumChatActionType").CHAT_ACTION_TYPE.READ
			}), n();
		}, t[2] = _, t[3] = n, t[4] = f) : f = t[4];
		var g = f, h = l !== 0, y;
		t[5] !== _.length || t[6] !== h ? (y = h ? s._(
			/*BTDS*/
			"",
			[s._plural(_.length)]
		) : s._(
			/*BTDS*/
			"",
			[s._plural(_.length)]
		), t[5] = _.length, t[6] = h, t[7] = y) : y = t[7];
		var C = y, b = "multi-select-bar-overflow-menu-item-mark-" + (h ? "read" : "unread"), v;
		t[8] !== g || t[9] !== h ? (v = function() {
			g(!h);
		}, t[8] = g, t[9] = h, t[10] = v) : v = t[10];
		var S = v, R = r(h ? "WDSIconWdsIcChat.react" : "WDSIconIcUnread.react"), L;
		t[11] !== S || t[12] !== b || t[13] !== C || t[14] !== R ? (L = u.jsx(r("WDSMenuItem.react"), {
			onPress: S,
			Icon: R,
			testid: b,
			title: C
		}), t[11] = S, t[12] = b, t[13] = C, t[14] = R, t[15] = L) : L = t[15];
		var E = L, k = i !== 0, I;
		t[16] !== _ || t[17] !== n ? (I = function(t) {
			var e = function() {
				o("WAWebWamChatActionEventsLogger").logChatActionEvent({
					chatActionEntryPoint: o("WAWebWamEnumChatActionEntryPoint").CHAT_ACTION_ENTRY_POINT.CONVERSATION_LIST_BULK_EDIT,
					chatActionType: t ? o("WAWebWamEnumChatActionType").CHAT_ACTION_TYPE.MUTE : o("WAWebWamEnumChatActionType").CHAT_ACTION_TYPE.UNMUTE
				}), n();
			};
			o("WAWebCmd").Cmd.muteChatMultiselect(_, t, e);
		}, t[16] = _, t[17] = n, t[18] = I) : I = t[18];
		var T = I, D;
		t[19] !== k ? (D = k ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		), t[19] = k, t[20] = D) : D = t[20];
		var x = D, $ = "multi-select-bar-overflow-menu-item-" + (k ? "mute" : "unmute"), P;
		t[21] !== T || t[22] !== k ? (P = function() {
			T(k);
		}, t[21] = T, t[22] = k, t[23] = P) : P = t[23];
		var N = P, M = r(k ? "WDSIconIcNotificationsFilled.react" : "WDSIconIcNotificationsOff.react"), w;
		t[24] !== N || t[25] !== $ || t[26] !== x || t[27] !== M ? (w = u.jsx(r("WDSMenuItem.react"), {
			Icon: M,
			title: x,
			onPress: N,
			testid: $
		}), t[24] = N, t[25] = $, t[26] = x, t[27] = M, t[28] = w) : w = t[28];
		var A = w, F;
		t[29] !== _ ? (F = _.some(d), t[29] = _, t[30] = F) : F = t[30];
		var O = F, B;
		t[31] !== _ || t[32] !== n ? (B = function(t) {
			_.forEach(function(e) {
				o("WAWebCmd").Cmd.archiveChat(e, t);
			}), o("WAWebWamChatActionEventsLogger").logChatActionEvent({
				chatActionEntryPoint: o("WAWebWamEnumChatActionEntryPoint").CHAT_ACTION_ENTRY_POINT.CONVERSATION_LIST_BULK_EDIT,
				chatActionType: o("WAWebWamEnumChatActionType").CHAT_ACTION_TYPE.ARCHIVE
			}), n();
		}, t[31] = _, t[32] = n, t[33] = B) : B = t[33];
		var W = B, q;
		t[34] !== O || t[35] !== _.length ? (q = O ? s._(
			/*BTDS*/
			"",
			[s._plural(_.length)]
		) : s._(
			/*BTDS*/
			"",
			[s._plural(_.length)]
		), t[34] = O, t[35] = _.length, t[36] = q) : q = t[36];
		var U = q, V = "multi-select-bar-overflow-menu-item-" + (O ? "archive" : "unarchive"), H;
		t[37] !== O || t[38] !== W ? (H = function() {
			W(O);
		}, t[37] = O, t[38] = W, t[39] = H) : H = t[39];
		var G = H, z = r(O ? "WDSIconIcArchive.react" : "WDSIconIcUnarchive.react"), j;
		t[40] !== V || t[41] !== U || t[42] !== G || t[43] !== z ? (j = u.jsx(r("WDSMenuItem.react"), {
			Icon: z,
			title: U,
			onPress: G,
			testid: V
		}), t[40] = V, t[41] = U, t[42] = G, t[43] = z, t[44] = j) : j = t[44];
		var K = j, Q;
		t[45] === Symbol.for("react.memo_cache_sentinel") ? (Q = o("WAWebListsGatingUtils").isListsEnabled() && o("WAWebBizFrontendGatingUtils").isCTWASMBListsMultiSelectEnabled(), t[45] = Q) : Q = t[45];
		var X = Q, Y;
		t[46] === Symbol.for("react.memo_cache_sentinel") ? (Y = o("WAWebABProps").getABPropConfigValue("wa_web_clear_selected_chats_enabled"), t[46] = Y) : Y = t[46];
		var J = Y, Z;
		t[47] !== K ? (Z = o("WAWebABProps").getABPropConfigValue("wa_web_feature_parity_small_wins") && K, t[47] = K, t[48] = Z) : Z = t[48];
		var ee;
		t[49] !== _ || t[50] !== n ? (ee = X && u.jsx(r("WAWebMultiSelectAddToListMenuItem.react"), {
			chats: _,
			onComplete: n
		}), t[49] = _, t[50] = n, t[51] = ee) : ee = t[51];
		var te;
		t[52] !== n || t[53] !== a ? (te = J && u.jsx(r("WAWebClearSelectedChatsDropdownItem.react"), {
			selectedModels: a,
			onComplete: n
		}), t[52] = n, t[53] = a, t[54] = te) : te = t[54];
		var ne;
		if (t[55] !== E || t[56] !== A || t[57] !== Z || t[58] !== ee || t[59] !== te) {
			var re = u.jsxs(u.Fragment, { children: [
				E,
				A,
				Z,
				ee,
				te
			] });
			ne = u.jsx(r("WDSMenu.react"), { children: re }), t[55] = E, t[56] = A, t[57] = Z, t[58] = ee, t[59] = te, t[60] = ne;
		} else ne = t[60];
		return ne;
	}
	function d(e) {
		return !e.archive;
	}
	function m(e, t) {
		return t instanceof o("WAWebChatModel").Chat && e.push(t), e;
	}
	l.default = c;
}), 226);
