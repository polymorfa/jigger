__d("WAWebAddContactToGroupFlow.react", [
	"fbt",
	"$InternalEnum",
	"WAWebAddContactToGroupEligibility",
	"WAWebChatCollection",
	"WAWebChatEntryPoint",
	"WAWebCmd",
	"WAWebComposeBoxActions",
	"WAWebConfirmPopup.react",
	"WAWebContactGetters",
	"WAWebEmojiText.react",
	"WAWebFocusTracer",
	"WAWebFrontendContactGetters",
	"WAWebGroupsModal.react",
	"WAWebLidMigrationUtils",
	"WAWebModifyParticipantsGroupAction",
	"WAWebNoop",
	"fbs",
	"nullthrows",
	"react",
	"useWAWebFlow"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e, d = c.useRef, m = c.useState, p = n("$InternalEnum").Mirrored(["SelectGroup", "Confirm"]);
	function _(e) {
		var t = e.chat, n = e.contact, a = t != null && o("WAWebAddContactToGroupEligibility").isContactAddableToGroup(n, t), i = a ? p.Confirm : p.SelectGroup, l = o("useWAWebFlow").useFlow(i), c = l[0], _ = l[1], f = m(a ? t : void 0), g = f[0], h = f[1], y = function(t) {
			var e = t.groupMetadata;
			if (!o("WAWebContactGetters").getIsGroup(t) || o("WAWebContactGetters").getIsGroup(t) && !(e != null && e.participants.iAmMember())) return !1;
			var a = (e == null ? void 0 : e.isLidAddressingMode) === !0 ? o("WAWebLidMigrationUtils").toLid(n.id) : o("WAWebLidMigrationUtils").toPn(n.id);
			return a != null && e != null && e.participants.get(a) ? s._(
				/*BTDS*/
				""
			).toString() : e != null && e.participants.iAmAdmin() ? !0 : r("fbs")._(
				/*BTDS*/
				""
			).toString();
		}, C = function(t) {
			o("WAWebModifyParticipantsGroupAction").addParticipants(t, [n]).then(function() {
				o("WAWebCmd").Cmd.openChatFromUnread({
					chat: t,
					chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint.AddContactToGroup
				}).then(function(e) {
					e && o("WAWebComposeBoxActions").ComposeBoxActions.focus(t);
				});
			}).catch(r("WAWebNoop")), _.end();
		}, b = d(null), v = function() {
			if (b.current) {
				var e = b.current;
				!e || e.contains(document.activeElement) || r("WAWebFocusTracer").focus(e);
			}
		}, S = function(t) {
			v(), h(t), _.push(p.Confirm);
		};
		if (_.step == null) return null;
		var R = null;
		switch (_.step) {
			case p.SelectGroup:
				R = u.jsx(r("WAWebGroupsModal.react"), {
					chats: o("WAWebChatCollection").ChatCollection.filter(function(e) {
						return o("WAWebContactGetters").getIsGroup(e);
					}),
					filter: y,
					onCancel: function() {
						return _.pop();
					},
					onGroup: S
				});
				break;
			case p.Confirm:
				R = u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
					tsNavigationData: {
						surface: "unknown",
						viewName: "add-contact-to-group"
					},
					cancelText: s._(
						/*BTDS*/
						""
					),
					okText: s._(
						/*BTDS*/
						""
					),
					onOK: function() {
						return C(r("nullthrows")(g));
					},
					onCancel: function() {
						return a ? _.end() : _.pop();
					},
					children: u.jsx(o("WAWebEmojiText.react").EmojiText, { text: s._(
						/*BTDS*/
						"",
						[s._param("participant", o("WAWebFrontendContactGetters").getFormattedName(n)), s._param("subject", r("nullthrows")(g).contact.name)]
					) })
				});
				break;
		}
		return u.jsx(c, {
			ref: b,
			flow: _,
			children: R
		});
	}
	_.displayName = _.name + " [from " + i.id + "]", l.default = _;
}), 226);
