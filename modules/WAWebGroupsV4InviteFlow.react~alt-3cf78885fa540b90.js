__d("WAWebGroupsV4InviteFlow.react", [
	"fbt",
	"$InternalEnum",
	"WALogger",
	"WAWebChatSendMessages",
	"WAWebConfirmPopup.react",
	"WAWebFbtIntlList",
	"WAWebFindChatAction",
	"WAWebFrontendContactGetters",
	"WAWebGroupMetadataCollection",
	"WAWebGroupsV4InviteAddComment.react",
	"WAWebModalManager",
	"WAWebName.react",
	"WAWebSendMsgResultAction",
	"WAWebToast.react",
	"WAWebToastManager",
	"countWhere",
	"react",
	"react-compiler-runtime",
	"useWAWebFlow"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react")), d = u.useRef, m = n("$InternalEnum").Mirrored(["Confirm", "AddComment"]);
	function p(e) {
		var t = o("react-compiler-runtime").c(39), n = o("useWAWebFlow").useFlow(m.Confirm), a = n[0], i = n[1], l = r("WAWebGroupMetadataCollection").get(e.groupGid), u = !!(l != null && l.isParentGroup) || !!(l != null && l.isCag), p = h, y;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (y = function(t, n) {
			var e = n === void 0 ? !1 : n;
			if (!Array.isArray(t)) return p(t, e);
			var o = t.map(function(t) {
				return p(t, e);
			});
			return r("WAWebFbtIntlList")(o, r("WAWebFbtIntlList").CONJUNCTIONS.AND, r("WAWebFbtIntlList").DELIMITERS.COMMA);
		}, t[0] = y) : y = t[0];
		var C = y, b = d(!1), v;
		t[1] !== e ? (v = function() {
			b.current || (b.current = !0, e.onFinish == null || e.onFinish());
		}, t[1] = e, t[2] = v) : v = t[2];
		var S = v, R, L;
		if (t[3] !== e.participantNeedInvite) {
			var E = C(e.participantNeedInvite.map(g), !0);
			R = s._(
				/*BTDS*/
				"",
				[s._plural(e.participantNeedInvite.length), s._param("member", E)]
			), L = s._(
				/*BTDS*/
				"",
				[s._plural(e.participantNeedInvite.length), s._param("member", E)]
			), t[3] = e.participantNeedInvite, t[4] = R, t[5] = L;
		} else R = t[4], L = t[5];
		var k = L, I = u ? k : R, T;
		t[6] !== S || t[7] !== e.groupGid || t[8] !== e.participantNeedInvite || t[9] !== e.subject ? (T = function(n, a) {
			var t = n === void 0 ? "" : n;
			o("WAWebModalManager").ModalManager.close(), S(), Promise.all(e.participantNeedInvite.map(async function(n) {
				var i = n.contact, l = n.invite_code, s = n.invite_code_exp, u = await o("WAWebFindChatAction").findOrCreateLatestChat(i.id, "groupsV4InviteFlow"), c = u.chat, d = e.groupGid.toString(), m = r("WAWebGroupMetadataCollection").assertGet(d), p = await o("WAWebChatSendMessages").sendGroupInviteMessage({
					caption: t,
					chat_: c,
					code: l || "",
					exp: s,
					gid: d,
					name: e.subject,
					thumb: a
				});
				return p.messageSendResult === o("WAWebSendMsgResultAction").SendMsgResult.OK ? (m.pendingParticipants.add({ id: i.id }), !0) : !1;
			})).then(f).catch(_);
		}, t[6] = S, t[7] = e.groupGid, t[8] = e.participantNeedInvite, t[9] = e.subject, t[10] = T) : T = t[10];
		var D = T, x;
		t[11] === Symbol.for("react.memo_cache_sentinel") ? (x = s._(
			/*BTDS*/
			""
		), t[11] = x) : x = t[11];
		var $ = x, P;
		t[12] === Symbol.for("react.memo_cache_sentinel") ? (P = s._(
			/*BTDS*/
			""
		), t[12] = P) : P = t[12];
		var N = P, M = u ? N : $;
		if (i.step == null) return null;
		var w = null;
		e: switch (i.step) {
			case m.Confirm: {
				var A;
				t[13] === Symbol.for("react.memo_cache_sentinel") ? (A = {
					surface: "unknown",
					viewName: "group-invite-flow"
				}, t[13] = A) : A = t[13];
				var F;
				t[14] !== i ? (F = function() {
					return i.push(m.AddComment);
				}, t[14] = i, t[15] = F) : F = t[15];
				var O;
				t[16] !== S || t[17] !== i ? (O = function() {
					i.pop(), S();
				}, t[16] = S, t[17] = i, t[18] = O) : O = t[18];
				var B;
				t[19] === Symbol.for("react.memo_cache_sentinel") ? (B = s._(
					/*BTDS*/
					""
				), t[19] = B) : B = t[19];
				var W;
				t[20] !== I || t[21] !== M || t[22] !== F || t[23] !== O ? (W = c.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
					tsNavigationData: A,
					onOK: F,
					okText: M,
					onCancel: O,
					cancelText: B,
					children: I
				}), t[20] = I, t[21] = M, t[22] = F, t[23] = O, t[24] = W) : W = t[24], w = W;
				break e;
			}
			case m.AddComment: {
				var q;
				t[25] !== S || t[26] !== i ? (q = function() {
					i.pop(), S();
				}, t[25] = S, t[26] = i, t[27] = q) : q = t[27];
				var U;
				t[28] !== D || t[29] !== e.groupDesc || t[30] !== e.groupGid || t[31] !== e.participantNeedInvite || t[32] !== e.subject || t[33] !== q ? (U = c.jsx(r("WAWebGroupsV4InviteAddComment.react"), {
					participants: e.participantNeedInvite,
					gid: e.groupGid,
					subject: e.subject,
					groupDesc: e.groupDesc,
					onClose: q,
					onSend: D
				}), t[28] = D, t[29] = e.groupDesc, t[30] = e.groupGid, t[31] = e.participantNeedInvite, t[32] = e.subject, t[33] = q, t[34] = U) : U = t[34], w = U;
			}
		}
		var V;
		return t[35] !== a || t[36] !== w || t[37] !== i ? (V = c.jsx(a, {
			flow: i,
			children: w
		}), t[35] = a, t[36] = w, t[37] = i, t[38] = V) : V = t[38], V;
	}
	function _(t) {
		o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[error] handleSendInvite"]))).sendLogs("groups-v4-invite-send-failed");
	}
	function f(e) {
		var t = r("countWhere")(e, Boolean);
		o("WAWebToastManager").ToastManager.open(c.jsx(o("WAWebToast.react").Toast, { msg: s._(
			/*BTDS*/
			"",
			[s._plural(t, "num")]
		) }));
	}
	function g(e) {
		return e.contact;
	}
	function h(e, t) {
		var n = t === void 0 ? !1 : t;
		return n ? o("WAWebFrontendContactGetters").getFormattedUser(e) : c.jsx(o("WAWebName.react").Name, { contact: e });
	}
	l.default = p;
}), 226);
