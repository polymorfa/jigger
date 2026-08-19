__d("WAWebNewsletterAdminProfileDetailsView.react", [
	"fbt",
	"WAWebEmojiText.react",
	"WAWebFbtCommon",
	"WAWebFlex.react",
	"WAWebImg.react",
	"WAWebInitialsFromNameUtils",
	"WAWebInitialsProfilePicture.react",
	"WAWebMenuBar.react",
	"WAWebModalManager",
	"WAWebNewsletterModelUtils",
	"WAWebStopEvent",
	"WAWebUimUie.react",
	"WAWebUnstyledButton.react",
	"WAWebXViewerIcon.react",
	"react",
	"useWAWebDefaultProfileColors"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e.useCallback, d = "x18re5ia-B", m = {
		profileContainer: {
			alignItems: "x6s0dn4",
			$$css: !0
		},
		nameContainer: {
			marginTop: "x98l61r",
			fontSize: "xngnso2",
			fontWeight: "xo1l8bm",
			color: null,
			textAlign: "x2b8uid",
			wordBreak: "x13faqbe",
			$$css: !0
		},
		clickableProfilePicture: {
			cursor: "x1ypdohk",
			borderStartStartRadius: "x1c9tyrk",
			borderStartEndRadius: "xeusxvb",
			borderEndEndRadius: "x1pahc9y",
			borderEndStartRadius: "x1ertn4p",
			$$css: !0
		}
	};
	function p(e) {
		var t = e.nameXstyle, n = e.newsletterAdminProfile, a = e.size, i = a === void 0 ? 200 : a, l = o("WAWebInitialsFromNameUtils").getInitialsFromAdminProfile(n), d = o("useWAWebDefaultProfileColors").useDefaultProfileColors(null, n.name), p = d.foreground, f = o("WAWebNewsletterModelUtils").formatProfilePictureURL(n.pictureDirectPath), g = c(function() {
			f != null && o("WAWebModalManager").ModalManager.openMedia(u.jsx(_, {
				adminName: n.name,
				src: f
			}), { transition: "profile-viewer" });
		}, [f, n.name]), h = {
			width: i + "px",
			height: i + "px"
		}, y;
		return f != null ? y = u.jsx(r("WAWebUnstyledButton.react"), {
			testid: "admin-profile-picture-button",
			onClick: g,
			xstyle: m.clickableProfilePicture,
			"aria-label": s._(
				/*BTDS*/
				""
			),
			children: u.jsx(r("WAWebImg.react"), {
				src: f,
				hasPrivacyChecks: !0,
				crossOrigin: !1,
				className: "x1c9tyrk xeusxvb x1pahc9y x1ertn4p xl1xv1r x115dhu7",
				style: h,
				draggable: !1
			})
		}) : y = u.jsx(o("WAWebFlex.react").FlexItem, {
			style: h,
			isFlexContainer: !0,
			children: u.jsx(o("WAWebInitialsProfilePicture.react").InitialsProfilePicture, {
				initialsData: l,
				name: n.name
			})
		}), u.jsxs(o("WAWebFlex.react").FlexColumn, {
			xstyle: m.profileContainer,
			children: [y, u.jsx(o("WAWebFlex.react").FlexItem, {
				xstyle: [
					m.nameContainer,
					p,
					t
				],
				children: u.jsx(o("WAWebEmojiText.react").EmojiText, { text: n.name })
			})]
		});
	}
	p.displayName = p.name + " [from " + i.id + "]";
	function _(e) {
		var t = e.adminName, n = e.src, a = c(function() {
			o("WAWebModalManager").ModalManager.closeMedia();
		}, []);
		return u.jsx(o("WAWebUimUie.react").UIE, {
			displayName: "AdminProfilePhotoViewer",
			escapable: !0,
			requestDismiss: a,
			children: u.jsxs("div", {
				className: "xixxii4 x13vifvy x1o0tod x9f619 xh8yej3 x5yr21d x1pb5qga x78zum5 xdt5ytf x1akjpcp xqcmdr3 xfbpl4g x1alahoq",
				onClick: a,
				"data-testid": "admin-profile-photo-viewer-modal",
				children: [u.jsx("div", {
					className: "x78zum5 x3psx0u x15zctf7 x6s0dn4 xng8ra x1280gxy xvtqlqk",
					children: u.jsx(o("WAWebMenuBar.react").MenuBar, {
						theme: "strong",
						children: u.jsx(o("WAWebMenuBar.react").MenuBarItem, {
							testid: "admin-profile-photo-viewer-close-btn",
							icon: u.jsx(o("WAWebXViewerIcon.react").XViewerIcon, {}),
							title: r("WAWebFbtCommon")("Close"),
							onClick: a
						})
					}, "admin-photo-viewer-header")
				}), u.jsx("div", {
					className: "x78zum5 x1iyjqo2 x6s0dn4 xl56j7k x1sk1jro x1evaxtz x1ci70gm x1m4z3lf x4t50tc",
					onClick: o("WAWebStopEvent").stopPropagation,
					children: u.jsx("div", {
						className: "x78zum5 x6s0dn4 xl56j7k xh8yej3 x5yr21d",
						children: u.jsx(r("WAWebImg.react"), {
							src: n,
							hasPrivacyChecks: !0,
							crossOrigin: !1,
							className: "x193iq5w xmz0i5r x19kjcj4",
							draggable: !1,
							alt: t
						})
					})
				})]
			})
		});
	}
	_.displayName = _.name + " [from " + i.id + "]", l.default = p;
}), 226);
