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
	"asyncToGeneratorRuntime",
	"react",
	"useWAWebToggle"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e.useCallback, d = { marginInlineStart3: {
		marginInlineStart: "x7phf20",
		$$css: !0
	} };
	function m(e) {
		var t = e.contact, a = e.isMe, i = e.newsletter, l = r("useWAWebToggle")(!1), m = l[0], _ = l[1], f = a ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			"",
			[s._param("admin-dismissal-contact-first-name", o("WAWebParticipantListUtils").getFirstNameForContact(t))]
		), g = a ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		), h = c(n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
			yield p({
				isMe: a,
				newsletter: i,
				contact: t,
				shouldUnfollowNewsletter: m
			});
		}), [
			i,
			t,
			a,
			m
		]), y = a ? u.jsxs(o("WAWebFlex.react").FlexRow, {
			columnGap: 8,
			paddingTop: 16,
			paddingBottom: 16,
			xstyle: d.marginInlineStart3,
			alignSelf: "start",
			align: "center",
			children: [u.jsx(o("WAWebCheckBox.react").CheckBox, {
				id: "admin-dismissal-unfollow-checkbox",
				testid: "admin-dismissal-unfollow-checkbox",
				checked: m,
				onChange: _
			}), u.jsx(o("WAWebText_DONOTUSE.react").TextLabel, {
				htmlFor: "admin-dismissal-unfollow-checkbox",
				size: "16",
				className: "x1hm9lzh x1sa5p1d",
				children: o("WAWebCommonNewsletterStrings").getUnfollowNewsletterText()
			})]
		}) : null;
		return u.jsxs(o("WAWebConfirmPopup.react").ConfirmPopup, {
			title: f,
			onOK: h,
			onCancel: o("WAWebModalManager").closeModalManager,
			children: [u.jsx(o("WAWebText.react").WAWebTextTitle, {
				color: "secondary",
				children: g
			}), y]
		});
	}
	m.displayName = m.name + " [from " + i.id + "]";
	function p(e) {
		return _.apply(this, arguments);
	}
	function _() {
		return _ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
			var t = e.contact, r = e.isMe, a = e.newsletter, i = e.shouldUnfollowNewsletter, l = (function() {
				var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
					o("WAWebModalManager").closeModalManager(), yield p({
						newsletter: a,
						contact: t,
						isMe: r,
						shouldUnfollowNewsletter: i
					});
				});
				return function() {
					return e.apply(this, arguments);
				};
			})(), c = r && i ? o("WAWebNewsletterUnsubscribeAction").unsubscribeFromNewsletterAction(a, {
				eventSurface: o("WAWebWamEnumChannelEventSurface").CHANNEL_EVENT_SURFACE.CHANNEL_PROFILE,
				discoverySurface: o("WAWebWamEnumTsSurface").TS_SURFACE.CHANNEL_PROFILE
			}) : o("WAWebDemoteNewsletterAdminAction").demoteNewsletterAdminAction(a, t);
			try {
				yield c;
				var d = o("WAWebFrontendContactGetters").getIsMyContact(t) ? o("WAWebParticipantListUtils").getFirstNameForContact(t) : o("WAWebContactGetters").getPushname(t);
				o("WAWebToastManager").ToastManager.open(u.jsx(o("WAWebToast.react").Toast, { msg: r ? s._(
					/*BTDS*/
					""
				) : o("WAWebCommonNewsletterStrings").getSomeoneIsNoLongerAnAdminText(d === "" ? o("WAWebFrontendContactGetters").getFormattedUser(t) : d) })), o("WAWebModalManager").closeModalManager();
			} catch (e) {
				o("WAWebModalManager").ModalManager.open(u.jsx(o("WAWebNewsletterErrorPopups.react").NewsletterCouldNotDismissAdminPopup, {
					onOK: l,
					contact: t
				}), { transition: "modal-flow" });
			}
		}), _.apply(this, arguments);
	}
	l.default = m;
}), 226);
