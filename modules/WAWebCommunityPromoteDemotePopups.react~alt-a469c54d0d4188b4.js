__d("WAWebCommunityPromoteDemotePopups.react", [
	"fbt",
	"WAWebConfirmPopup.react",
	"WAWebEmojiText.react",
	"WAWebFrontendContactGetters",
	"WAWebModalManager",
	"WAWebText_DONOTUSE.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react"));
	function c(e) {
		var t = e.parentGroupAdminsLimit, n = e.onOk, r = n === void 0 ? o("WAWebModalManager").closeModalManager : n;
		return u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			title: s._(
				/*BTDS*/
				""
			),
			onOK: r,
			tsNavigationData: {
				surface: "unknown",
				viewName: "community-admin-limit"
			},
			children: u.jsx(o("WAWebText_DONOTUSE.react").TextParagraph, {
				size: "16",
				children: s._(
					/*BTDS*/
					"",
					[s._plural(t, "adminsNumber")]
				)
			})
		});
	}
	c.displayName = c.name + " [from " + i.id + "]";
	function d(e) {
		var t = e.contact, n = e.onParticipantPromote, r = e.onCancel, a = r === void 0 ? o("WAWebModalManager").closeModalManager : r, i = t ? s._(
			/*BTDS*/
			"",
			[s._param("contact_name", u.jsx(o("WAWebEmojiText.react").EmojiText, { text: o("WAWebFrontendContactGetters").getFormattedName(t) }))]
		) : s._(
			/*BTDS*/
			""
		);
		return u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			title: s._(
				/*BTDS*/
				""
			),
			onOK: n,
			onCancel: a,
			tsNavigationData: {
				surface: "unknown",
				viewName: "community-promote-admin"
			},
			children: u.jsx(o("WAWebText_DONOTUSE.react").TextParagraph, {
				size: "16",
				children: i
			})
		});
	}
	d.displayName = d.name + " [from " + i.id + "]";
	function m(e) {
		var t = e.onParticipantPromote, n = e.onCancel, r = n === void 0 ? o("WAWebModalManager").closeModalManager : n;
		return u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			onOK: t,
			okText: s._(
				/*BTDS*/
				""
			),
			onCancel: r,
			tsNavigationData: {
				surface: "unknown",
				viewName: "community-promote-error"
			},
			children: u.jsx(o("WAWebText_DONOTUSE.react").TextParagraph, {
				size: "16",
				children: s._(
					/*BTDS*/
					""
				)
			})
		});
	}
	m.displayName = m.name + " [from " + i.id + "]";
	function p(e) {
		var t = e.onOk, n = t === void 0 ? o("WAWebModalManager").closeModalManager : t;
		return u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			onOK: n,
			tsNavigationData: {
				surface: "unknown",
				viewName: "community-promote-invalid-participant"
			},
			children: u.jsx(o("WAWebText_DONOTUSE.react").TextParagraph, {
				size: "16",
				children: s._(
					/*BTDS*/
					""
				)
			})
		});
	}
	p.displayName = p.name + " [from " + i.id + "]";
	function _(e) {
		var t = e.onParticipantDemote, n = e.onCancel, r = n === void 0 ? o("WAWebModalManager").closeModalManager : n, a = e.isMe, i = a === void 0 ? !1 : a;
		return u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			okText: s._(
				/*BTDS*/
				""
			),
			onOK: t,
			onCancel: r,
			tsNavigationData: {
				surface: "unknown",
				viewName: "community-demote-error"
			},
			children: u.jsx(o("WAWebText_DONOTUSE.react").TextParagraph, {
				size: "16",
				children: i ? s._(
					/*BTDS*/
					""
				) : s._(
					/*BTDS*/
					""
				)
			})
		});
	}
	_.displayName = _.name + " [from " + i.id + "]";
	function f(e) {
		var t = e.onParticipantDemote, n = e.onCancel, r = n === void 0 ? o("WAWebModalManager").closeModalManager : n;
		return u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			title: s._(
				/*BTDS*/
				""
			),
			onOK: t,
			onCancel: r,
			tsNavigationData: {
				surface: "unknown",
				viewName: "community-demote-admin"
			},
			children: u.jsx(o("WAWebText_DONOTUSE.react").TextParagraph, {
				size: "16",
				children: s._(
					/*BTDS*/
					""
				)
			})
		});
	}
	f.displayName = f.name + " [from " + i.id + "]", l.CommunityAdminLimitPopup = c, l.CommunityAdminPromotePopup = d, l.CommunityAdminPromoteErrorPopup = m, l.CommunityAdminPromoteInvalidParticipantErrorPopup = p, l.CommunityAdminDemoteErrorPopup = _, l.CommunityAdminDemotePopup = f;
}), 226);
