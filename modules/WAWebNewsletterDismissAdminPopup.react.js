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
	"react-compiler-runtime",
	"useWAWebToggle"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e.useCallback, d = { marginInlineStart3: {
		marginInlineStart: "x7phf20",
		$$css: !0
	} };
	function m(e) {
		var t = o("react-compiler-runtime").c(21), a = e.contact, i = e.isMe, l = e.newsletter, c = r("useWAWebToggle")(!1), m = c[0], _ = c[1], f;
		t[0] !== a || t[1] !== i ? (f = i ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			"",
			[s._param("admin-dismissal-contact-first-name", o("WAWebParticipantListUtils").getFirstNameForContact(a))]
		), t[0] = a, t[1] = i, t[2] = f) : f = t[2];
		var g = f, h;
		t[3] !== i ? (h = i ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		), t[3] = i, t[4] = h) : h = t[4];
		var y = h, C;
		t[5] !== a || t[6] !== i || t[7] !== l || t[8] !== m ? (C = (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				yield p({
					isMe: i,
					newsletter: l,
					contact: a,
					shouldUnfollowNewsletter: m
				});
			});
			return function() {
				return e.apply(this, arguments);
			};
		})(), t[5] = a, t[6] = i, t[7] = l, t[8] = m, t[9] = C) : C = t[9];
		var b = C, v;
		t[10] !== i || t[11] !== m || t[12] !== _ ? (v = i ? u.jsxs(o("WAWebFlex.react").FlexRow, {
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
		}) : null, t[10] = i, t[11] = m, t[12] = _, t[13] = v) : v = t[13];
		var S = v, R;
		t[14] !== y ? (R = u.jsx(o("WAWebText.react").WAWebTextTitle, {
			color: "secondary",
			children: y
		}), t[14] = y, t[15] = R) : R = t[15];
		var L;
		return t[16] !== b || t[17] !== R || t[18] !== g || t[19] !== S ? (L = u.jsxs(o("WAWebConfirmPopup.react").ConfirmPopup, {
			title: g,
			onOK: b,
			onCancel: o("WAWebModalManager").closeModalManager,
			children: [R, S]
		}), t[16] = b, t[17] = R, t[18] = g, t[19] = S, t[20] = L) : L = t[20], L;
	}
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
