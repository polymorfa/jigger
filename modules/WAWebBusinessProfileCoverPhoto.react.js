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
	"react-compiler-runtime",
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
		var n, a = o("react-compiler-runtime").c(73), i = t.businessProfile, l = t.contact, u = t.editable, d = t.onClick, p = t.onLoad, y = t.profilePicThumb, C = _(window.innerWidth), b = C[0], S = C[1], L;
		a[0] === Symbol.for("react.memo_cache_sentinel") ? (L = ["coverPhoto", "profileOptions"], a[0] = L) : L = a[0];
		var E = o("useWAWebModelValues").useModelValues(i, L), k = r("useWAWebUnmountSignal")(), I = o("WAWebThemeContext").useIsDarkTheme(), T, D;
		a[1] === Symbol.for("react.memo_cache_sentinel") ? (T = function() {
			var e = function() {
				S(window.innerWidth);
			};
			return window.addEventListener("resize", e), e(), (function() {
				return window.removeEventListener("resize", e);
			});
		}, D = [], a[1] = T, a[2] = D) : (T = a[1], D = a[2]), m(T, D);
		var x;
		if (a[3] !== ((n = E.profileOptions) == null ? void 0 : n.isProfileEditDisabled)) {
			var $, P;
			x = o("WAWebMiscGatingUtils").isBlueLockingEnabled() && (($ = E.profileOptions) == null ? void 0 : $.isProfileEditDisabled) === !0, a[3] = (P = E.profileOptions) == null ? void 0 : P.isProfileEditDisabled, a[4] = x;
		} else x = a[4];
		var N = x, M = b > f ? h : g, w;
		a[5] !== d ? (w = function(t, n) {
			d && d(t, n);
		}, a[5] = d, a[6] = w) : w = a[6];
		var A = w, F = v.noStatusBorder, O, B, W, q, U, V;
		if (a[7] !== E.coverPhoto || a[8] !== l || a[9] !== u || a[10] !== A || a[11] !== I || a[12] !== N || a[13] !== d || a[14] !== p || a[15] !== M || a[16] !== y || a[17] !== k) {
			var H, G = o("WAWebABProps").getABPropConfigValue("wds_web_profile_photo"), z = u === !0 && y != null && !N, j = G && !z;
			if (u === !0 && y != null && !N) {
				var K;
				a[24] !== M || a[25] !== y ? (K = c.jsx(r("WAWebProfilePicPicker.react"), {
					profilePicThumb: y,
					size: M
				}), a[24] = M, a[25] = y, a[26] = K) : K = a[26], B = K;
			} else {
				var Q;
				a[27] === Symbol.for("react.memo_cache_sentinel") ? (Q = s._(
					/*BTDS*/
					""
				), a[27] = Q) : Q = a[27];
				var X = Q;
				if (G) {
					var Y;
					a[28] !== l || a[29] !== N || a[30] !== d || a[31] !== y ? (Y = c.jsx(R, {
						contact: l,
						isProfileLocked: N,
						onClick: d,
						profilePicThumb: y,
						viewPhotoLabel: X
					}), a[28] = l, a[29] = N, a[30] = d, a[31] = y, a[32] = Y) : Y = a[32], B = Y;
				} else {
					var J = N ? null : A, Z;
					a[33] !== l.id || a[34] !== p || a[35] !== M || a[36] !== J ? (Z = c.jsx(o("WAWebDetailImage.react").DetailImage, {
						id: l.id,
						size: M,
						loader: !0,
						onLoad: p,
						onClick: J,
						quality: o("WAWebDetailImage.react").DetailImageQuality.High,
						tabIndex: 0,
						xstyle: o("WDSFocusStateStyles").WDSFocusStateStyles.genericFocus,
						ariaLabel: X
					}), a[33] = l.id, a[34] = p, a[35] = M, a[36] = J, a[37] = Z) : Z = a[37], B = Z;
				}
			}
			var ee;
			if (a[38] !== ((H = E.coverPhoto) == null ? void 0 : H.url)) {
				var te, ne;
				ee = (te = E.coverPhoto) == null ? void 0 : te.url.toString(), a[38] = (ne = E.coverPhoto) == null ? void 0 : ne.url, a[39] = ee;
			} else ee = a[39];
			var re = ee, oe = re != null && re !== "", ae, ie;
			if (u != null) {
				var le = E.coverPhoto != null ? E.coverPhoto : void 0, se;
				a[40] !== le || a[41] !== k ? (se = c.jsx(r("WAWebBizCoverPhotoPicker.react"), {
					coverPhoto: le,
					signal: k
				}), a[40] = le, a[41] = k, a[42] = se) : se = a[42], ae = se;
				var ue;
				a[43] === Symbol.for("react.memo_cache_sentinel") ? (ue = c.jsx(o("WAWebPencilRefreshedIcon.react").PencilRefreshedIcon, {}), a[43] = ue) : ue = a[43];
				var ce = ue, de;
				a[44] !== I ? (de = {
					0: { className: "xy102ij x1c9tyrk xeusxvb x1pahc9y x1ertn4p x191j7n5 xdg88n9 x47corl x10l6tqk x1vjfegm" },
					1: { className: "x1c9tyrk xeusxvb x1pahc9y x1ertn4p x191j7n5 xdg88n9 x47corl x10l6tqk x1vjfegm xfn3atn x1pse0pq" }
				}[!I << 0], a[44] = I, a[45] = de) : de = a[45];
				var me;
				a[46] === Symbol.for("react.memo_cache_sentinel") ? (me = c.jsx(o("WAWebRound.react").Round, {
					inverted: !0,
					testid: "edit_cover_photo",
					children: ce
				}), a[46] = me) : me = a[46];
				var pe;
				a[47] !== de ? (pe = c.jsx("div", babelHelpers.extends({}, de, {
					"aria-hidden": !0,
					children: me
				})), a[47] = de, a[48] = pe) : pe = a[48], ie = pe;
			}
			var _e;
			if (u == null && re != null) {
				var fe;
				a[49] === Symbol.for("react.memo_cache_sentinel") ? (fe = s._(
					/*BTDS*/
					""
				), a[49] = fe) : fe = a[49];
				var ge = fe, he;
				a[50] !== re ? (he = re !== "" ? { backgroundImage: "url(" + re + ")" } : null, a[50] = re, a[51] = he) : he = a[51];
				var ye = he, Ce;
				a[52] === Symbol.for("react.memo_cache_sentinel") ? (Ce = "xiy17q3 x18d0r48 x1ey2m1c xtijo5x x1o0tod x10l6tqk x13vifvy", a[52] = Ce) : Ce = a[52];
				var be;
				a[53] !== ye ? (be = c.jsx("div", {
					className: Ce,
					style: ye,
					"data-testid": "cover-photo-img",
					role: "img",
					"aria-label": ge
				}), a[53] = ye, a[54] = be) : be = a[54], _e = be;
			}
			var ve;
			a[55] !== u ? (ve = {
				0: { className: "xiqx3za x1o0tod x6ikm8r x10wlt62 x10l6tqk x13vifvy xh8yej3 x1knukwh xihgre1" },
				1: { className: "xiqx3za x1o0tod x6ikm8r x10wlt62 x10l6tqk x13vifvy xh8yej3 x1knukwh xihgre1 x1yk5sdm" }
			}[!!u << 0], a[55] = u, a[56] = ve) : ve = a[56], a[57] !== ie || a[58] !== _e || a[59] !== ae || a[60] !== ve ? (V = c.jsxs("div", babelHelpers.extends({}, ve, { children: [
				_e,
				ae,
				ie
			] })), a[57] = ie, a[58] = _e, a[59] = ae, a[60] = ve, a[61] = V) : V = a[61], O = o("WAWebFlex.react").FlexRow, q = "center", U = (e || (e = r("stylex")))(v.avatar, j && (oe ? v.avatarWdsWithCoverPhoto : v.avatarWds), v.avatarMargin), W = {
				0: { className: "x1y9zq84 xt9xd2u x3tsejo x1ahzpo1 xvs2etk xg3wpu6 x1jwbhkm xgg4q86 x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x1kr8tdy xburx9h xqm4iv x8u93l6" },
				1: { className: "x1y9zq84 xt9xd2u x3tsejo x1ahzpo1 x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x1kr8tdy xburx9h xqm4iv x8u93l6 x6s0dn4 x1280gxy x1c9tyrk xeusxvb x1pahc9y x1ertn4p x9f619 x78zum5 x1h5wmu3 xl56j7k x16s0kzc" }
			}[!!j << 0], a[7] = E.coverPhoto, a[8] = l, a[9] = u, a[10] = A, a[11] = I, a[12] = N, a[13] = d, a[14] = p, a[15] = M, a[16] = y, a[17] = k, a[18] = O, a[19] = B, a[20] = W, a[21] = q, a[22] = U, a[23] = V;
		} else O = a[18], B = a[19], W = a[20], q = a[21], U = a[22], V = a[23];
		var Se;
		a[62] !== B || a[63] !== W ? (Se = c.jsx("div", babelHelpers.extends({}, W, { children: B })), a[62] = B, a[63] = W, a[64] = Se) : Se = a[64];
		var Re;
		a[65] !== O || a[66] !== Se || a[67] !== q || a[68] !== U ? (Re = c.jsx(O, {
			justify: q,
			className: U,
			children: Se
		}), a[65] = O, a[66] = Se, a[67] = q, a[68] = U, a[69] = Re) : Re = a[69];
		var Le;
		return a[70] !== Re || a[71] !== V ? (Le = c.jsxs(c.Fragment, { children: [V, Re] }), a[70] = Re, a[71] = V, a[72] = Le) : Le = a[72], Le;
	}
	function R(e) {
		var t = o("react-compiler-runtime").c(35), n = e.contact, a = e.isProfileLocked, i = e.onClick, l = e.profilePicThumb, s = e.viewPhotoLabel, u = p(null), d;
		t[0] !== n || t[1] !== l ? (d = l != null ? l : n.getProfilePicThumb(), t[0] = n, t[1] = l, t[2] = d) : d = t[2];
		var m = d, _;
		t[3] === Symbol.for("react.memo_cache_sentinel") ? (_ = ["img", "imgFull"], t[3] = _) : _ = t[3];
		var f = o("useWAWebModelValues").useOptionalModelValues(m, _), g = f == null ? void 0 : f.imgFull, h = g != null ? g : f == null ? void 0 : f.img, y;
		t[4] !== n.id ? (y = n.id.isPSA(), t[4] = n.id, t[5] = y) : y = t[5];
		var C = y, b;
		t[6] !== C || t[7] !== g ? (b = C || !r("isStringNullOrEmpty")(g), t[6] = C, t[7] = g, t[8] = b) : b = t[8];
		var v = b, S;
		t[9] !== n ? (S = o("WAWebInitialsFromNameUtils").getInitialsFromContact(n), t[9] = n, t[10] = S) : S = t[10];
		var R = S, L;
		t[11] !== R.firstInitial || t[12] !== R.secondInitial ? (L = [R.firstInitial, R.secondInitial].filter(Boolean), t[11] = R.firstInitial, t[12] = R.secondInitial, t[13] = L) : L = t[13];
		var E = L.join(""), k;
		t[14] !== v || t[15] !== a || t[16] !== i || t[17] !== s ? (k = !a && v ? {
			label: s,
			onPress: function() {
				i != null && i(void 0, u.current);
			},
			type: "viewPhoto"
		} : void 0, t[14] = v, t[15] = a, t[16] = i, t[17] = s, t[18] = k) : k = t[18];
		var I = k, T;
		t[19] !== n ? (T = o("WAWebFrontendContactGetters").getFormattedName(n), t[19] = n, t[20] = T) : T = t[20];
		var D;
		t[21] !== n.id ? (D = o("useWAWebDefaultProfileColors").getWDSProfilePhotoColor(n.id), t[21] = n.id, t[22] = D) : D = t[22];
		var x;
		t[23] !== n.id ? (x = o("useWAWebDefaultProfileColors").getWDSProfilePhotoCustomColor(n.id), t[23] = n.id, t[24] = x) : x = t[24];
		var $;
		t[25] !== n.id ? ($ = o("useWAWebDefaultProfileColors").getProfilePhotoPlaceholderIcon(n.id), t[25] = n.id, t[26] = $) : $ = t[26];
		var P;
		return t[27] !== E || t[28] !== h || t[29] !== x || t[30] !== $ || t[31] !== T || t[32] !== D || t[33] !== I ? (P = c.jsx("div", {
			ref: u,
			children: c.jsx(r("WDSProfilePhoto.react"), {
				type: "person",
				name: T,
				src: h,
				size: "xxLarge",
				color: D,
				customColor: x,
				placeholderIcon: $,
				isDecorative: !0,
				initials: E,
				interaction: I
			})
		}), t[27] = E, t[28] = h, t[29] = x, t[30] = $, t[31] = T, t[32] = D, t[33] = I, t[34] = P) : P = t[34], P;
	}
	l.default = S;
}), 226);
