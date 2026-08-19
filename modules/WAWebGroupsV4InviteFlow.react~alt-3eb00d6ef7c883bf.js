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
	"useWAWebFlow"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react")), d = u.useRef, m = n("$InternalEnum").Mirrored(["Confirm", "AddComment"]);
	function p(t) {
		var n = o("useWAWebFlow").useFlow(m.Confirm), a = n[0], i = n[1], l = r("WAWebGroupMetadataCollection").get(t.groupGid), u = !!(l != null && l.isParentGroup) || !!(l != null && l.isCag), p = function(t, n) {
			return n === void 0 && (n = !1), n ? o("WAWebFrontendContactGetters").getFormattedUser(t) : c.jsx(o("WAWebName.react").Name, { contact: t });
		}, _ = function(t, n) {
			if (n === void 0 && (n = !1), !Array.isArray(t)) return p(t, n);
			var e = t.map(function(e) {
				return p(e, n);
			});
			return r("WAWebFbtIntlList")(e, r("WAWebFbtIntlList").CONJUNCTIONS.AND, r("WAWebFbtIntlList").DELIMITERS.COMMA);
		}, f = d(!1), g = function() {
			f.current || (f.current = !0, t.onFinish == null || t.onFinish());
		}, h = _(t.participantNeedInvite.map(function(e) {
			return e.contact;
		}), !0), y = s._(
			/*BTDS*/
			"",
			[s._plural(t.participantNeedInvite.length), s._param("member", h)]
		), C = s._(
			/*BTDS*/
			"",
			[s._plural(t.participantNeedInvite.length), s._param("member", h)]
		), b = u ? C : y, v = function(a, i) {
			a === void 0 && (a = ""), o("WAWebModalManager").ModalManager.close(), g(), Promise.all(t.participantNeedInvite.map(async function(e) {
				var n = e.contact, l = e.invite_code, s = e.invite_code_exp, u = await o("WAWebFindChatAction").findOrCreateLatestChat(n.id, "groupsV4InviteFlow"), c = u.chat, d = t.groupGid.toString(), m = r("WAWebGroupMetadataCollection").assertGet(d), p = await o("WAWebChatSendMessages").sendGroupInviteMessage({
					caption: a,
					chat_: c,
					code: l || "",
					exp: s,
					gid: d,
					name: t.subject,
					thumb: i
				});
				return p.messageSendResult === o("WAWebSendMsgResultAction").SendMsgResult.OK ? (m.pendingParticipants.add({ id: n.id }), !0) : !1;
			})).then(function(e) {
				var t = r("countWhere")(e, Boolean);
				o("WAWebToastManager").ToastManager.open(c.jsx(o("WAWebToast.react").Toast, { msg: s._(
					/*BTDS*/
					"",
					[s._plural(t, "num")]
				) }));
			}).catch(function(t) {
				o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[error] handleSendInvite"]))).sendLogs("groups-v4-invite-send-failed");
			});
		}, S = s._(
			/*BTDS*/
			""
		), R = s._(
			/*BTDS*/
			""
		), L = u ? R : S;
		if (i.step == null) return null;
		var E = null;
		switch (i.step) {
			case m.Confirm:
				E = c.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
					tsNavigationData: {
						surface: "unknown",
						viewName: "group-invite-flow"
					},
					onOK: function() {
						return i.push(m.AddComment);
					},
					okText: L,
					onCancel: function() {
						i.pop(), g();
					},
					cancelText: s._(
						/*BTDS*/
						""
					),
					children: b
				});
				break;
			case m.AddComment: E = c.jsx(r("WAWebGroupsV4InviteAddComment.react"), {
				participants: t.participantNeedInvite,
				gid: t.groupGid,
				subject: t.subject,
				groupDesc: t.groupDesc,
				onClose: function() {
					i.pop(), g();
				},
				onSend: v
			});
		}
		return c.jsx(a, {
			flow: i,
			children: E
		});
	}
	p.displayName = p.name + " [from " + i.id + "]", l.default = p;
}), 226);
