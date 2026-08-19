__d("WAWebSubgroupSendRequestModal.react", [
	"fbt",
	"WALogger",
	"WAWebChatEntryPoint",
	"WAWebCmd",
	"WAWebCommunityGroupJourneyEventImpl",
	"WAWebComposeConstants",
	"WAWebEmojiText.react",
	"WAWebFbtCommon",
	"WAWebFindChatAction",
	"WAWebFrontendContactGetters",
	"WAWebGroupJoinModalBase.react",
	"WAWebGroupJoinModalUtils",
	"WAWebModalManager",
	"WAWebRichTextField.react",
	"WAWebSendTextMsgChatAction",
	"WAWebWamEnumChatFilterActionTypes",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react")), d = u, m = d.useRef, p = d.useState;
	function _(e) {
		var t = o("react-compiler-runtime").c(7), n = e.requestReason, r = e.setRequestReason, a = m(null), i;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (i = s._(
			/*BTDS*/
			""
		).toString(), t[0] = i) : i = t[0];
		var l = i, u;
		t[1] !== r ? (u = function(t) {
			var e = t.text;
			r(e.trim());
		}, t[1] = r, t[2] = u) : u = t[2];
		var d = u, p;
		t[3] === Symbol.for("react.memo_cache_sentinel") ? (p = { className: "x1h678fw" }, t[3] = p) : p = t[3];
		var _;
		return t[4] !== d || t[5] !== n ? (_ = c.jsx("div", babelHelpers.extends({}, p, { children: c.jsx(o("WAWebRichTextField.react").RichTextField, {
			ref: a,
			placeholder: l,
			value: n,
			showRemaining: !0,
			maxLength: o("WAWebComposeConstants").MAX_TXT_MSG_SIZE,
			onChange: d,
			theme: "request-reason",
			multiline: !0,
			textFormatEnabled: !0,
			selectOnMount: !0,
			maxVisibleLines: 3,
			minVisibleLines: 3
		}) })), t[4] = d, t[5] = n, t[6] = _) : _ = t[6], _;
	}
	function f(t) {
		var n = t.adminContact, a = t.participants, i = t.source, l = t.subgroupInfo, u = p(s._(
			/*BTDS*/
			""
		).toString()), d = u[0], m = u[1], f = {
			text: s._(
				/*BTDS*/
				"",
				[s._param("admin-name", c.jsx(o("WAWebEmojiText.react").EmojiText, { text: o("WAWebFrontendContactGetters").getDisplayName(n) }))]
			),
			isError: !1
		}, h = s._(
			/*BTDS*/
			""
		), y = async function(n) {
			var t = await o("WAWebFindChatAction").findOrCreateLatestChat(n, "subgroupSendRequest"), r = t.chat;
			o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose(["openChatAndSendMsg inside WAWebSubgroupSendRequestModal"]))), await o("WAWebSendTextMsgChatAction").sendTextMsgToChat(r, d, {
				quotedMsgAdminGroupJid: l.id,
				quotedMsgAdminGroupSubject: l.subject,
				quotedMsgAdminParentGroupJid: l.parentGroupId
			}), await o("WAWebCmd").Cmd.openChatBottom({
				chat: r,
				chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint.SubgroupJoinRequest
			});
			var a = o("WAWebCommunityGroupJourneyEventImpl").CommunityGroupJourneyEvent.inviteModalSourceToSurface(i);
			a && new (o("WAWebCommunityGroupJourneyEventImpl")).CommunityGroupJourneyEvent({
				action: o("WAWebWamEnumChatFilterActionTypes").CHAT_FILTER_ACTION_TYPES.GROUP_JOIN_REQUEST,
				surface: a
			}).commit();
		};
		return c.jsx(r("WAWebGroupJoinModalBase.react"), {
			image: { groupId: l.id },
			title: l.subject,
			subtitle: o("WAWebGroupJoinModalUtils").getGroupInviteSubtitle({ groupMetadata: l }),
			contacts: a,
			description: l.displayedDesc,
			actionText: h,
			onAction: async function() {
				o("WAWebModalManager").ModalManager.close(), await y(n.id);
			},
			actionDisabled: !d.trim(),
			onCancel: g,
			cancelText: r("WAWebFbtCommon")("Cancel"),
			finePrint: f,
			groupType: l.groupType,
			textInput: c.jsx(_, {
				requestReason: d,
				setRequestReason: m
			}),
			source: i
		});
	}
	f.displayName = f.name + " [from " + i.id + "]";
	function g() {
		o("WAWebModalManager").ModalManager.close();
	}
	l.default = f;
}), 226);
