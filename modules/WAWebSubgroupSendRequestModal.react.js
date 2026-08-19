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
	"asyncToGeneratorRuntime",
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
		var a = t.adminContact, i = t.participants, l = t.source, u = t.subgroupInfo, d = p(s._(
			/*BTDS*/
			""
		).toString()), m = d[0], f = d[1], h = {
			text: s._(
				/*BTDS*/
				"",
				[s._param("admin-name", c.jsx(o("WAWebEmojiText.react").EmojiText, { text: o("WAWebFrontendContactGetters").getDisplayName(a) }))]
			),
			isError: !1
		}, y = s._(
			/*BTDS*/
			""
		), C = (function() {
			var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
				var n = yield o("WAWebFindChatAction").findOrCreateLatestChat(t, "subgroupSendRequest"), r = n.chat;
				o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose(["openChatAndSendMsg inside WAWebSubgroupSendRequestModal"]))), yield o("WAWebSendTextMsgChatAction").sendTextMsgToChat(r, m, {
					quotedMsgAdminGroupJid: u.id,
					quotedMsgAdminGroupSubject: u.subject,
					quotedMsgAdminParentGroupJid: u.parentGroupId
				}), yield o("WAWebCmd").Cmd.openChatBottom({
					chat: r,
					chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint.SubgroupJoinRequest
				});
				var a = o("WAWebCommunityGroupJourneyEventImpl").CommunityGroupJourneyEvent.inviteModalSourceToSurface(l);
				a && new (o("WAWebCommunityGroupJourneyEventImpl")).CommunityGroupJourneyEvent({
					action: o("WAWebWamEnumChatFilterActionTypes").CHAT_FILTER_ACTION_TYPES.GROUP_JOIN_REQUEST,
					surface: a
				}).commit();
			});
			return function(n) {
				return t.apply(this, arguments);
			};
		})();
		return c.jsx(r("WAWebGroupJoinModalBase.react"), {
			image: { groupId: u.id },
			title: u.subject,
			subtitle: o("WAWebGroupJoinModalUtils").getGroupInviteSubtitle({ groupMetadata: u }),
			contacts: i,
			description: u.displayedDesc,
			actionText: y,
			onAction: n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				o("WAWebModalManager").ModalManager.close(), yield C(a.id);
			}),
			actionDisabled: !m.trim(),
			onCancel: g,
			cancelText: r("WAWebFbtCommon")("Cancel"),
			finePrint: h,
			groupType: u.groupType,
			textInput: c.jsx(_, {
				requestReason: m,
				setRequestReason: f
			}),
			source: l
		});
	}
	f.displayName = f.name + " [from " + i.id + "]";
	function g() {
		o("WAWebModalManager").ModalManager.close();
	}
	l.default = f;
}), 226);
