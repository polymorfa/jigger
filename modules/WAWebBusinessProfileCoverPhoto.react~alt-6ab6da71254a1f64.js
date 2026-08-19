__d("WAWebBusinessProfileCoverPhoto.react", [
	"fbt",
	"WAWebABProps",
	"WAWebBizCoverPhotoPicker.react",
	"WAWebDetailImage.react",
	"WAWebFlex.react",
	"WAWebFrontendContactGetters",
	"WAWebInitialsFromNameUtils",
	"WAWebMiscGatingUtils",
	"WAWebPencilRefreshedIcon.react",
	"WAWebProfilePicPicker.react",
	"WAWebRound.react",
	"WAWebThemeContext",
	"WDSFocusStateStyles",
	"WDSProfilePhoto.react",
	"isStringNullOrEmpty",
	"react",
	"stylex",
	"useWAWebDefaultProfileColors",
	"useWAWebModelValues",
	"useWAWebUnmountSignal"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react")), d = u, m = d.useEffect, p = d.useRef, _ = d.useState, f = 1300, g = 122, h = 152, y = "57px", C = "66px", b = "var(--cover-image-background)", v = {
		avatar: {
			marginTop: "xma71h1",
			maxWidth: "x1c4npxh",
			position: "x1n2onr6",
			zIndex: "xlynzuj",
			"@media screen and (min-width: 1300px)_marginTop": "x1bfl7gj",
			$$css: !0
		},
		avatarMargin: {
			marginBottom: "x1ua1l7f",
			marginInlineEnd: "x11t971q",
			marginInlineStart: "xvc5jky",
			$$css: !0
		},
		avatarWds: {
			marginTop: "xdj266r",
			"@media screen and (min-width: 1300px)_marginTop": "xr8ixst",
			$$css: !0
		},
		avatarWdsWithCoverPhoto: {
			marginTop: "x19c6px0",
			"@media screen and (min-width: 1024px)_marginTop": "x1lpzqfv",
			"@media screen and (min-width: 1300px)_marginTop": "x3drrcd",
			$$css: !0
		},
		noStatusBorder: {
			borderTopWidth: "x1kr8tdy",
			borderInlineEndWidth: "xburx9h",
			borderBottomWidth: "xqm4iv",
			borderInlineStartWidth: "x8u93l6",
			$$css: !0
		}
	};
	function S(t) {
		var n, a, i = t.businessProfile, l = t.contact, u = t.editable, d = t.onClick, p = t.onLoad, y = t.profilePicThumb, C = _(window.innerWidth), b = C[0], S = C[1], L = o("useWAWebModelValues").useModelValues(i, ["coverPhoto", "profileOptions"]), E = r("useWAWebUnmountSignal")(), k = o("WAWebThemeContext").useIsDarkTheme();
		m(function() {
			function e() {
				S(window.innerWidth);
			}
			return window.addEventListener("resize", e), e(), function() {
				return window.removeEventListener("resize", e);
			};
		}, []);
		var I = o("WAWebMiscGatingUtils").isBlueLockingEnabled() && ((n = L.profileOptions) == null ? void 0 : n.isProfileEditDisabled) === !0, T = b > f ? h : g;
		function D(e, t) {
			d && d(e, t);
		}
		var x = v.noStatusBorder, $ = o("WAWebABProps").getABPropConfigValue("wds_web_profile_photo"), P = u === !0 && y != null && !I, N = $ && !P, M;
		if (u === !0 && y != null && !I) M = c.jsx(r("WAWebProfilePicPicker.react"), {
			profilePicThumb: y,
			size: T
		});
		else {
			var w = s._(
				/*BTDS*/
				""
			);
			$ ? M = c.jsx(R, {
				contact: l,
				isProfileLocked: I,
				onClick: d,
				profilePicThumb: y,
				viewPhotoLabel: w
			}) : M = c.jsx(o("WAWebDetailImage.react").DetailImage, {
				id: l.id,
				size: T,
				loader: !0,
				onLoad: p,
				onClick: I ? null : D,
				quality: o("WAWebDetailImage.react").DetailImageQuality.High,
				tabIndex: 0,
				xstyle: o("WDSFocusStateStyles").WDSFocusStateStyles.genericFocus,
				ariaLabel: w
			});
		}
		var A = (a = L.coverPhoto) == null ? void 0 : a.url.toString(), F = A != null && A !== "", O, B;
		if (u != null) {
			O = c.jsx(r("WAWebBizCoverPhotoPicker.react"), {
				coverPhoto: L.coverPhoto != null ? L.coverPhoto : void 0,
				signal: E
			});
			var W = c.jsx(o("WAWebPencilRefreshedIcon.react").PencilRefreshedIcon, {});
			B = c.jsx("div", babelHelpers.extends({}, {
				0: { className: "xy102ij x1c9tyrk xeusxvb x1pahc9y x1ertn4p x191j7n5 xdg88n9 x47corl x10l6tqk x1vjfegm" },
				1: { className: "x1c9tyrk xeusxvb x1pahc9y x1ertn4p x191j7n5 xdg88n9 x47corl x10l6tqk x1vjfegm xfn3atn x1pse0pq" }
			}[!k << 0], {
				"aria-hidden": !0,
				children: c.jsx(o("WAWebRound.react").Round, {
					inverted: !0,
					testid: "edit_cover_photo",
					children: W
				})
			}));
		}
		var q;
		if (u == null && A != null) {
			var U = s._(
				/*BTDS*/
				""
			), V = A !== "" ? { backgroundImage: "url(" + A + ")" } : null;
			q = c.jsx("div", {
				className: "xiy17q3 x18d0r48 x1ey2m1c xtijo5x x1o0tod x10l6tqk x13vifvy",
				style: V,
				"data-testid": "cover-photo-img",
				role: "img",
				"aria-label": U
			});
		}
		return c.jsxs(c.Fragment, { children: [c.jsxs("div", babelHelpers.extends({}, {
			0: { className: "xiqx3za x1o0tod x6ikm8r x10wlt62 x10l6tqk x13vifvy xh8yej3 x1knukwh xihgre1" },
			1: { className: "xiqx3za x1o0tod x6ikm8r x10wlt62 x10l6tqk x13vifvy xh8yej3 x1knukwh xihgre1 x1yk5sdm" }
		}[!!u << 0], { children: [
			q,
			O,
			B
		] })), c.jsx(o("WAWebFlex.react").FlexRow, {
			justify: "center",
			className: (e || (e = r("stylex")))(v.avatar, N && (F ? v.avatarWdsWithCoverPhoto : v.avatarWds), v.avatarMargin),
			children: c.jsx("div", babelHelpers.extends({}, {
				0: { className: "x1y9zq84 xt9xd2u x3tsejo x1ahzpo1 xvs2etk xg3wpu6 x1jwbhkm xgg4q86 x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x1kr8tdy xburx9h xqm4iv x8u93l6" },
				1: { className: "x1y9zq84 xt9xd2u x3tsejo x1ahzpo1 x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x1kr8tdy xburx9h xqm4iv x8u93l6 x6s0dn4 x1280gxy x1c9tyrk xeusxvb x1pahc9y x1ertn4p x9f619 x78zum5 x1h5wmu3 xl56j7k x16s0kzc" }
			}[!!N << 0], { children: M }))
		})] });
	}
	S.displayName = S.name + " [from " + i.id + "]";
	function R(e) {
		var t = e.contact, n = e.isProfileLocked, a = e.onClick, i = e.profilePicThumb, l = e.viewPhotoLabel, s = p(null), u = i != null ? i : t.getProfilePicThumb(), d = o("useWAWebModelValues").useOptionalModelValues(u, ["img", "imgFull"]), m = d == null ? void 0 : d.imgFull, _ = m != null ? m : d == null ? void 0 : d.img, f = t.id.isPSA(), g = f || !r("isStringNullOrEmpty")(m), h = o("WAWebInitialsFromNameUtils").getInitialsFromContact(t), y = [h.firstInitial, h.secondInitial].filter(Boolean).join(""), C = !n && g ? {
			label: l,
			onPress: function() {
				a != null && a(void 0, s.current);
			},
			type: "viewPhoto"
		} : void 0;
		return c.jsx("div", {
			ref: s,
			children: c.jsx(r("WDSProfilePhoto.react"), {
				type: "person",
				name: o("WAWebFrontendContactGetters").getFormattedName(t),
				src: _,
				size: "xxLarge",
				color: o("useWAWebDefaultProfileColors").getWDSProfilePhotoColor(t.id),
				customColor: o("useWAWebDefaultProfileColors").getWDSProfilePhotoCustomColor(t.id),
				placeholderIcon: o("useWAWebDefaultProfileColors").getProfilePhotoPlaceholderIcon(t.id),
				isDecorative: !0,
				initials: y,
				interaction: C
			})
		});
	}
	R.displayName = R.name + " [from " + i.id + "]", l.default = S;
}), 226);
