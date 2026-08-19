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
	"react",
	"react-compiler-runtime"
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
		var t = o("react-compiler-runtime").c(13), n = e.newsletterAdminProfile, a = e.theme, i = a === void 0 ? c.DEFAULT : a, l;
		if (t[0] !== n) {
			l = s.jsx(o("WAWebDefaultContactRefreshedIcon.react").DefaultContactRefreshedIcon, {
				iconXstyle: u.contactIcon,
				"aria-hidden": !0
			});
			var d = o("WAWebInitialsFromNameUtils").getInitialsFromAdminProfile(n);
			(d.firstInitial != null || d.secondInitial != null) && (l = s.jsx(o("WAWebInitialsProfilePicture.react").InitialsProfilePicture, {
				initialsData: d,
				theme: o("WAWebInitialsProfilePicture.react").ThemeType.GroupChatProfilePicture,
				name: n.name
			})), t[0] = n, t[1] = l;
		} else l = t[1];
		var m;
		t[2] !== n.pictureDirectPath ? (m = o("WAWebNewsletterModelUtils").formatProfilePictureURL(n.pictureDirectPath), t[2] = n.pictureDirectPath, t[3] = m) : m = t[3];
		var p = m, _ = i === c.CONTACT_LIST ? u.buttonFill : u.button, f;
		t[4] !== n ? (f = function() {
			o("WAWebDrawerManager").DrawerManager.openDrawerRight(s.jsx(r("WAWebNewsletterAdminProfileDetailsDrawer.react"), {
				newsletterAdminProfile: n,
				onClose: o("WAWebDrawerManager").closeDrawerRight
			}));
		}, t[4] = n, t[5] = f) : f = t[5];
		var g;
		t[6] !== l || t[7] !== p ? (g = p == null ? l : s.jsx(r("WAWebImg.react"), {
			src: p,
			hasPrivacyChecks: !0,
			crossOrigin: !1,
			className: "x1n2onr6 x1lliihq xh8yej3 x5yr21d x6ikm8r x10wlt62 x1c9tyrk xeusxvb x1pahc9y x1ertn4p xl1xv1r x115dhu7 x17vty23",
			draggable: !1,
			renderError: function() {
				return l;
			}
		}), t[6] = l, t[7] = p, t[8] = g) : g = t[8];
		var h;
		return t[9] !== _ || t[10] !== f || t[11] !== g ? (h = s.jsx(r("WAWebUnstyledButton.react"), {
			xstyle: _,
			onClick: f,
			children: g
		}), t[9] = _, t[10] = f, t[11] = g, t[12] = h) : h = t[12], h;
	}
	l.NewsletterAdminProfilePictureTheme = c, l.WAWebNewsletterAdminProfilePicture = d;
}), 98);
