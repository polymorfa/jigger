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
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react")), d = u, m = d.useRef, p = d.useState;
	function _(e) {
		var t = e.requestReason, n = e.setRequestReason, r = m(null), a = s._(
			/*BTDS*/
			""
		).toString(), i = function(t) {
			var e = t.text;
			n(e.trim());
		};
		return c.jsx("div", {
			className: "x1h678fw",
			children: c.jsx(o("WAWebRichTextField.react").RichTextField, {
				ref: r,
				placeholder: a,
				value: t,
				showRemaining: !0,
				maxLength: o("WAWebComposeConstants").MAX_TXT_MSG_SIZE,
				onChange: i,
				theme: "request-reason",
				multiline: !0,
				textFormatEnabled: !0,
				selectOnMount: !0,
				maxVisibleLines: 3,
				minVisibleLines: 3
			})
		});
	}
	_.displayName = _.name + " [from " + i.id + "]";
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
