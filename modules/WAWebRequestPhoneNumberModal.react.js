__d("WAWebRequestPhoneNumberModal.react", [
	"fbt",
	"WAWebChatCollection",
	"WAWebConfirmPopup.react",
	"WAWebLogRequestPhoneNumber",
	"WAWebModalManager",
	"WAWebSendRequestPhoneNumberChatAction",
	"WAWebStateUtils",
	"WAWebWamEnumPnhActionType",
	"WAWebWamEnumPnhChatTypeType",
	"WAWebWamEnumPnhMessageChatParty",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e.useEffect;
	function d(e) {
		var t = o("react-compiler-runtime").c(13), n = e.entryPoint, r;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (r = o("WAWebChatCollection").ChatCollection.getActive(), t[0] = r) : r = t[0];
		var a = r, i, l;
		t[1] !== n ? (i = function() {
			n && o("WAWebLogRequestPhoneNumber").logPnhRequestRevealActionHelper({
				action: o("WAWebWamEnumPnhActionType").PNH_ACTION_TYPE.REQUEST_DIALOG_APPEAR,
				chatParty: o("WAWebWamEnumPnhMessageChatParty").PNH_MESSAGE_CHAT_PARTY.BIZ,
				chatType: o("WAWebWamEnumPnhChatTypeType").PNH_CHAT_TYPE_TYPE.CTWA,
				entryPoint: n
			});
		}, l = [n], t[1] = n, t[2] = i, t[3] = l) : (i = t[2], l = t[3]), c(i, l);
		var d;
		t[4] !== n ? (d = function() {
			a && (o("WAWebSendRequestPhoneNumberChatAction").sendRequestPhoneNumber(o("WAWebStateUtils").unproxy(a)), n != null && o("WAWebLogRequestPhoneNumber").logPnhRequestRevealActionHelper({
				action: o("WAWebWamEnumPnhActionType").PNH_ACTION_TYPE.SEND_REQUEST,
				chatParty: o("WAWebWamEnumPnhMessageChatParty").PNH_MESSAGE_CHAT_PARTY.BIZ,
				chatType: o("WAWebWamEnumPnhChatTypeType").PNH_CHAT_TYPE_TYPE.CTWA,
				entryPoint: n
			})), o("WAWebModalManager").ModalManager.close();
		}, t[4] = n, t[5] = d) : d = t[5];
		var m = d, p;
		t[6] === Symbol.for("react.memo_cache_sentinel") ? (p = s._(
			/*BTDS*/
			""
		), t[6] = p) : p = t[6];
		var _ = p, f;
		t[7] === Symbol.for("react.memo_cache_sentinel") ? (f = s._(
			/*BTDS*/
			""
		), t[7] = f) : f = t[7];
		var g = f, h;
		t[8] === Symbol.for("react.memo_cache_sentinel") ? (h = s._(
			/*BTDS*/
			""
		), t[8] = h) : h = t[8];
		var y = h, C;
		t[9] === Symbol.for("react.memo_cache_sentinel") ? (C = s._(
			/*BTDS*/
			""
		), t[9] = C) : C = t[9];
		var b = C, v;
		t[10] === Symbol.for("react.memo_cache_sentinel") ? (v = {
			surface: "unknown",
			viewName: "request-phone-number"
		}, t[10] = v) : v = t[10];
		var S;
		return t[11] !== m ? (S = u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			tsNavigationData: v,
			onOK: m,
			okText: y,
			onCancel: o("WAWebModalManager").closeModalManager,
			cancelText: b,
			title: _,
			children: g
		}), t[11] = m, t[12] = S) : S = t[12], S;
	}
	l.default = d;
}), 226);
