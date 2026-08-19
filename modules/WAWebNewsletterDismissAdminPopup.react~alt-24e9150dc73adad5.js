__d("WAWebNewsletterDismissAdminPopup.react", [
	"fbt",
	"WAWebCheckBox.react",
	"WAWebCommonNewsletterStrings",
	"WAWebConfirmPopup.react",
	"WAWebContactGetters",
	"WAWebDemoteNewsletterAdminAction",
	"WAWebFlex.react",
	"WAWebFrontendContactGetters",
	"WAWebModalManager",
	"WAWebNewsletterErrorPopups.react",
	"WAWebNewsletterUnsubscribeAction",
	"WAWebParticipantListUtils",
	"WAWebText.react",
	"WAWebText_DONOTUSE.react",
	"WAWebToast.react",
	"WAWebToastManager",
	"WAWebWamEnumChannelEventSurface",
	"WAWebWamEnumTsSurface",
	"react",
	"useWAWebToggle"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e.useCallback, d = { marginInlineStart3: {
		marginInlineStart: "x7phf20",
		$$css: !0
	} };
	function m(e) {
		var t = e.contact, n = e.isMe, a = e.newsletter, i = r("useWAWebToggle")(!1), l = i[0], m = i[1], _ = n ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			"",
			[s._param("admin-dismissal-contact-first-name", o("WAWebParticipantListUtils").getFirstNameForContact(t))]
		), f = n ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		), g = c(async function() {
			await p({
				isMe: n,
				newsletter: a,
				contact: t,
				shouldUnfollowNewsletter: l
			});
		}, [
			a,
			t,
			n,
			l
		]), h = n ? u.jsxs(o("WAWebFlex.react").FlexRow, {
			columnGap: 8,
			paddingTop: 16,
			paddingBottom: 16,
			xstyle: d.marginInlineStart3,
			alignSelf: "start",
			align: "center",
			children: [u.jsx(o("WAWebCheckBox.react").CheckBox, {
				id: "admin-dismissal-unfollow-checkbox",
				testid: "admin-dismissal-unfollow-checkbox",
				checked: l,
				onChange: m
			}), u.jsx(o("WAWebText_DONOTUSE.react").TextLabel, {
				htmlFor: "admin-dismissal-unfollow-checkbox",
				size: "16",
				className: "x1hm9lzh x1sa5p1d",
				children: o("WAWebCommonNewsletterStrings").getUnfollowNewsletterText()
			})]
		}) : null;
		return u.jsxs(o("WAWebConfirmPopup.react").ConfirmPopup, {
			title: _,
			onOK: g,
			onCancel: o("WAWebModalManager").closeModalManager,
			children: [u.jsx(o("WAWebText.react").WAWebTextTitle, {
				color: "secondary",
				children: f
			}), h]
		});
	}
	m.displayName = m.name + " [from " + i.id + "]";
	async function p(e) {
		var t = e.contact, n = e.isMe, r = e.newsletter, a = e.shouldUnfollowNewsletter, i = async function() {
			o("WAWebModalManager").closeModalManager(), await p({
				newsletter: r,
				contact: t,
				isMe: n,
				shouldUnfollowNewsletter: a
			});
		}, l = n && a ? o("WAWebNewsletterUnsubscribeAction").unsubscribeFromNewsletterAction(r, {
			eventSurface: o("WAWebWamEnumChannelEventSurface").CHANNEL_EVENT_SURFACE.CHANNEL_PROFILE,
			discoverySurface: o("WAWebWamEnumTsSurface").TS_SURFACE.CHANNEL_PROFILE
		}) : o("WAWebDemoteNewsletterAdminAction").demoteNewsletterAdminAction(r, t);
		try {
			await l;
			var c = o("WAWebFrontendContactGetters").getIsMyContact(t) ? o("WAWebParticipantListUtils").getFirstNameForContact(t) : o("WAWebContactGetters").getPushname(t);
			o("WAWebToastManager").ToastManager.open(u.jsx(o("WAWebToast.react").Toast, { msg: n ? s._(
				/*BTDS*/
				""
			) : o("WAWebCommonNewsletterStrings").getSomeoneIsNoLongerAnAdminText(c === "" ? o("WAWebFrontendContactGetters").getFormattedUser(t) : c) })), o("WAWebModalManager").closeModalManager();
		} catch (e) {
			o("WAWebModalManager").ModalManager.open(u.jsx(o("WAWebNewsletterErrorPopups.react").NewsletterCouldNotDismissAdminPopup, {
				onOK: i,
				contact: t
			}), { transition: "modal-flow" });
		}
	}
	l.default = m;
}), 226);
