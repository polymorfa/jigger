__d("WAWebNewsletterAdminProfilePicture.react", [
	"$InternalEnum",
	"WAWebDefaultContactRefreshedIcon.react",
	"WAWebDrawerManager",
	"WAWebImg.react",
	"WAWebInitialsFromNameUtils",
	"WAWebInitialsProfilePicture.react",
	"WAWebNewsletterAdminProfileDetailsDrawer.react",
	"WAWebNewsletterModelUtils",
	"WAWebUnstyledButton.react",
	"react"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = {
		contactIcon: {
			width: "xh8yej3",
			height: "x5yr21d",
			borderStartStartRadius: "x1c9tyrk",
			borderStartEndRadius: "xeusxvb",
			borderEndEndRadius: "x1pahc9y",
			borderEndStartRadius: "x1ertn4p",
			backgroundColor: "x1od0jb8",
			outline: "x4u6w88",
			outlineOffset: "x1g40iwv",
			$$css: !0
		},
		button: {
			width: "x14qfxbe",
			height: "xc9qbxq",
			$$css: !0
		},
		buttonFill: {
			width: "xh8yej3",
			height: "x5yr21d",
			$$css: !0
		}
	}, c = n("$InternalEnum")({
		DEFAULT: 0,
		CONTACT_LIST: 1
	});
	function d(e) {
		var t = e.newsletterAdminProfile, n = e.theme, a = n === void 0 ? c.DEFAULT : n, i = s.jsx(o("WAWebDefaultContactRefreshedIcon.react").DefaultContactRefreshedIcon, {
			iconXstyle: u.contactIcon,
			"aria-hidden": !0
		}), l = o("WAWebInitialsFromNameUtils").getInitialsFromAdminProfile(t);
		(l.firstInitial != null || l.secondInitial != null) && (i = s.jsx(o("WAWebInitialsProfilePicture.react").InitialsProfilePicture, {
			initialsData: l,
			theme: o("WAWebInitialsProfilePicture.react").ThemeType.GroupChatProfilePicture,
			name: t.name
		}));
		var d = o("WAWebNewsletterModelUtils").formatProfilePictureURL(t.pictureDirectPath);
		return s.jsx(r("WAWebUnstyledButton.react"), {
			xstyle: a === c.CONTACT_LIST ? u.buttonFill : u.button,
			onClick: function() {
				o("WAWebDrawerManager").DrawerManager.openDrawerRight(s.jsx(r("WAWebNewsletterAdminProfileDetailsDrawer.react"), {
					newsletterAdminProfile: t,
					onClose: o("WAWebDrawerManager").closeDrawerRight
				}));
			},
			children: d == null ? i : s.jsx(r("WAWebImg.react"), {
				src: d,
				hasPrivacyChecks: !0,
				crossOrigin: !1,
				className: "x1n2onr6 x1lliihq xh8yej3 x5yr21d x6ikm8r x10wlt62 x1c9tyrk xeusxvb x1pahc9y x1ertn4p xl1xv1r x115dhu7 x17vty23",
				draggable: !1,
				renderError: function() {
					return i;
				}
			})
		});
	}
	d.displayName = d.name + " [from " + i.id + "]", l.NewsletterAdminProfilePictureTheme = c, l.WAWebNewsletterAdminProfilePicture = d;
}), 98);
