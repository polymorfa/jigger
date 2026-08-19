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
	"react-compiler-runtime",
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
		var t = o("react-compiler-runtime").c(35), n = e.nameXstyle, a = e.newsletterAdminProfile, i = e.size, l = i === void 0 ? 200 : i, c;
		t[0] !== a ? (c = o("WAWebInitialsFromNameUtils").getInitialsFromAdminProfile(a), t[0] = a, t[1] = c) : c = t[1];
		var d = c, p = o("useWAWebDefaultProfileColors").useDefaultProfileColors(null, a.name), f = p.foreground, g;
		t[2] !== a.pictureDirectPath ? (g = o("WAWebNewsletterModelUtils").formatProfilePictureURL(a.pictureDirectPath), t[2] = a.pictureDirectPath, t[3] = g) : g = t[3];
		var h = g, y;
		t[4] !== a.name || t[5] !== h ? (y = function() {
			h != null && o("WAWebModalManager").ModalManager.openMedia(u.jsx(_, {
				adminName: a.name,
				src: h
			}), { transition: "profile-viewer" });
		}, t[4] = a.name, t[5] = h, t[6] = y) : y = t[6];
		var C = y, b = l + "px", v = l + "px", S;
		t[7] !== b || t[8] !== v ? (S = {
			width: b,
			height: v
		}, t[7] = b, t[8] = v, t[9] = S) : S = t[9];
		var R = S, L;
		if (h != null) {
			var E;
			t[10] === Symbol.for("react.memo_cache_sentinel") ? (E = s._(
				/*BTDS*/
				""
			), t[10] = E) : E = t[10];
			var k;
			t[11] === Symbol.for("react.memo_cache_sentinel") ? (k = "x1c9tyrk xeusxvb x1pahc9y x1ertn4p xl1xv1r x115dhu7", t[11] = k) : k = t[11];
			var I;
			t[12] !== R || t[13] !== h ? (I = u.jsx(r("WAWebImg.react"), {
				src: h,
				hasPrivacyChecks: !0,
				crossOrigin: !1,
				className: k,
				style: R,
				draggable: !1
			}), t[12] = R, t[13] = h, t[14] = I) : I = t[14];
			var T;
			t[15] !== C || t[16] !== I ? (T = u.jsx(r("WAWebUnstyledButton.react"), {
				testid: "admin-profile-picture-button",
				onClick: C,
				xstyle: m.clickableProfilePicture,
				"aria-label": E,
				children: I
			}), t[15] = C, t[16] = I, t[17] = T) : T = t[17], L = T;
		} else {
			var D;
			t[18] !== d || t[19] !== a.name ? (D = u.jsx(o("WAWebInitialsProfilePicture.react").InitialsProfilePicture, {
				initialsData: d,
				name: a.name
			}), t[18] = d, t[19] = a.name, t[20] = D) : D = t[20];
			var x;
			t[21] !== R || t[22] !== D ? (x = u.jsx(o("WAWebFlex.react").FlexItem, {
				style: R,
				isFlexContainer: !0,
				children: D
			}), t[21] = R, t[22] = D, t[23] = x) : x = t[23], L = x;
		}
		var $;
		t[24] !== n || t[25] !== f ? ($ = [
			m.nameContainer,
			f,
			n
		], t[24] = n, t[25] = f, t[26] = $) : $ = t[26];
		var P;
		t[27] !== a.name ? (P = u.jsx(o("WAWebEmojiText.react").EmojiText, { text: a.name }), t[27] = a.name, t[28] = P) : P = t[28];
		var N;
		t[29] !== $ || t[30] !== P ? (N = u.jsx(o("WAWebFlex.react").FlexItem, {
			xstyle: $,
			children: P
		}), t[29] = $, t[30] = P, t[31] = N) : N = t[31];
		var M;
		return t[32] !== L || t[33] !== N ? (M = u.jsxs(o("WAWebFlex.react").FlexColumn, {
			xstyle: m.profileContainer,
			children: [L, N]
		}), t[32] = L, t[33] = N, t[34] = M) : M = t[34], M;
	}
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
