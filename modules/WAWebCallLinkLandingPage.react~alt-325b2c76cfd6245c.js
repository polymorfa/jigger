__d("WAWebCallLinkLandingPage.react", [
	"fbt",
	"WAMd5",
	"WAWebCallLinkCameraPreview.react",
	"WAWebCallLinkDesktopAppDetect",
	"WAWebCallLinkDeviceSelector.react",
	"WAWebCallLinkErrorPage.react",
	"WAWebCallLinkJoinCallLite.react",
	"WAWebCallLinkLandingPageMode",
	"WAWebCallLinkMarketingLogo.react",
	"WAWebCallLinkParams",
	"WAWebConfirmPopup.react",
	"WAWebExternalLink.react",
	"WAWebFlex.react",
	"WAWebLinkDeviceScreenPrimaryButton.react",
	"WAWebLocalStorage",
	"WAWebLockOutlineIcon.react",
	"WAWebURLUtils",
	"WAWebUserPrefsMultiDevice",
	"WAWebUserPrefsVoip",
	"WAWebVoipGroupCallAccentColors",
	"WDSIllustrationWdsPictoAccount.react",
	"WDSIllustrationWdsPictoDownloadDesktop.react",
	"WDSThemes",
	"WDSTooltip.react",
	"cr:7775",
	"justknobx",
	"react",
	"react-compiler-runtime",
	"stylex",
	"useWAWebReadABPropFromIdb",
	"useWAWebVoipPermissionStatus"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u, c = u || (u = o("react")), d = u, m = d.useCallback, p = d.useEffect, _ = d.useMemo, f = d.useRef, g = d.useState, h = 5e3;
	function y() {
		try {
			return r("WAWebLocalStorage") == null ? !1 : r("WAWebLocalStorage").getItem("last-wid-md") != null && r("WAWebLocalStorage").getItem("WANoiseInfo") != null;
		} catch (e) {
			return !1;
		}
	}
	function C() {
		try {
			return r("WAWebLocalStorage") == null ? !1 : r("WAWebLocalStorage").getItem("GuestExperienceType") === "\"guest_calling\"";
		} catch (e) {
			return !1;
		}
	}
	function b() {
		try {
			if (r("WAWebLocalStorage") == null) return null;
			var e = r("WAWebLocalStorage").getItem("last-wid-md");
			if (e == null) return null;
			var t = e;
			try {
				t = JSON.parse(e);
			} catch (e) {}
			var n = t.replace(/:\d+@/, "@"), a = o("WAMd5").md5(n + ":last-pushname"), i = r("WAWebLocalStorage").getItem(a);
			if (i != null) try {
				return JSON.parse(i);
			} catch (e) {
				return i;
			}
		} catch (e) {}
		return null;
	}
	var v = {
		page: {
			fontFamily: "x1syab6t",
			backgroundColor: "x1fgb4vj",
			width: "xh8yej3",
			minWidth: "x15hv16n",
			minHeight: "x1us19tq",
			height: "x5yr21d",
			display: "x78zum5",
			flexDirection: "xdt5ytf",
			overflowX: "xw2csxc",
			overflowY: "x1odjw0f",
			color: "xowvryd",
			paddingInlineStart: "xu7uy1i x1e5xhrn",
			paddingLeft: null,
			paddingRight: null,
			paddingInlineEnd: "x1t7qo4d x9lt2cq",
			boxSizing: "x9f619",
			$$css: !0
		},
		logoHeader: {
			alignSelf: "xkh2ocl",
			paddingTop: "xl7twdi",
			paddingBottom: "xscbp6u",
			$$css: !0
		},
		cardArea: {
			width: "xh8yej3",
			flexGrow: "x1iyjqo2",
			flexShrink: "x2lah0s",
			justifyContent: "xl56j7k x176qze7",
			$$css: !0
		},
		infoSection: {
			order: "x9ek82g",
			$$css: !0
		},
		previewSection: {
			order: "x1clqncf",
			width: "x1m258z3 x1uxjufv",
			maxWidth: "x1kwgwpz",
			$$css: !0
		},
		joinButtonOverride: {
			minWidth: "x15x72sd",
			$$css: !0
		},
		secondaryButtonOverride: {
			minWidth: "x15x72sd",
			whiteSpace: "xuxw1ft",
			flexShrink: "x2lah0s",
			backgroundColor: "xb1i3fl x19qpkoy",
			$$css: !0
		},
		controlsGap: {
			columnGap: "xmixu3c",
			$$css: !0
		},
		switchAccountCard: {
			backgroundColor: "xb1i3fl",
			borderStartStartRadius: "x1g83kfv",
			borderStartEndRadius: "x3qq2k7",
			borderEndEndRadius: "x2x8art",
			borderEndStartRadius: "x1qor8vf",
			borderTopWidth: "x178xt8z",
			borderInlineEndWidth: "x1lun4ml",
			borderBottomWidth: "xso031l",
			borderInlineStartWidth: "xpilrb4",
			borderTopStyle: "x13fuv20",
			borderInlineEndStyle: "x18b5jzi",
			borderBottomStyle: "x1q0q8m5",
			borderInlineStartStyle: "x1t7ytsu",
			borderTopColor: "x1wove2r",
			borderInlineEndColor: "x10nd7l6",
			borderBottomColor: "x12t7uq9",
			borderInlineStartColor: "x14s4pk6",
			paddingTop: "xl7twdi xf7h00z",
			paddingInlineEnd: "xyo0t3i x19viewb",
			paddingBottom: "xvg22vi xp9ekdk",
			paddingInlineStart: "xb0esv5 xaacwwv",
			display: "x78zum5",
			alignItems: "x6s0dn4",
			justifyContent: "x1qughib",
			columnGap: "xrdqr27",
			rowGap: "x1qvou4u",
			width: "xh8yej3",
			maxWidth: "x1uedy8c",
			boxSizing: "x9f619",
			$$css: !0
		},
		miniCardIllustration: {
			flexShrink: "x2lah0s",
			transform: "x14d4nfu",
			transformOrigin: "x1al4vs7",
			marginInlineEnd: "x1ez29mq",
			marginBottom: "xty4aln",
			$$css: !0
		},
		downloadCardIllustration: {
			flexShrink: "x2lah0s",
			$$css: !0
		},
		miniCardsRow: {
			columnGap: "xs2akgl",
			rowGap: "x1f0uite",
			marginTop: "x98l61r",
			maxWidth: "x1uedy8c",
			width: "xh8yej3",
			boxSizing: "x9f619",
			flexDirection: "x1q0g3np xmkfelv",
			$$css: !0
		},
		encryptionBanner: {
			paddingInlineStart: "xb0esv5",
			paddingInlineEnd: "xyo0t3i",
			paddingLeft: null,
			paddingRight: null,
			paddingTop: "xl7twdi",
			paddingBottom: "x18d9i69",
			whiteSpace: "xuxw1ft",
			columnGap: "xmixu3c",
			textAlign: "x2b8uid",
			$$css: !0
		},
		encryptionText: {
			fontSize: "x1f6kntn",
			color: "x65c15g",
			$$css: !0
		},
		tcsBanner: {
			paddingInlineStart: "xb0esv5",
			paddingInlineEnd: "xyo0t3i",
			paddingLeft: null,
			paddingRight: null,
			paddingTop: "x1p57kb1",
			paddingBottom: "xvg22vi",
			textAlign: "x2b8uid",
			$$css: !0
		}
	};
	function S(t) {
		var n = o("react-compiler-runtime").c(115), a = t.callType, i = t.errorReason, l = t.idHash, u = t.isGuestRedirectEnabled, d = t.locales, m = t.signedClearStaleVCUrl, _ = u === void 0 ? !1 : u, S = a === "video", N = S ? "video" : "voice", M;
		n[0] === Symbol.for("react.memo_cache_sentinel") ? (M = [], n[0] = M) : M = n[0], p(x, M);
		var w;
		n[1] === Symbol.for("react.memo_cache_sentinel") ? (w = y(), n[1] = w) : w = n[1];
		var A = w, F;
		n[2] === Symbol.for("react.memo_cache_sentinel") ? (F = C(), n[2] = F) : F = n[2];
		var O = F, B = r("justknobx")._("3803"), W = _, q;
		n[3] === Symbol.for("react.memo_cache_sentinel") ? (q = r("justknobx")._("5233"), n[3] = q) : q = n[3];
		var U = q, V;
		n[4] === Symbol.for("react.memo_cache_sentinel") ? (V = r("justknobx")._("4873"), n[4] = V) : V = n[4];
		var H = V, G = o("useWAWebReadABPropFromIdb").useWAWebReadABPropFromIdb("enable_web_group_calling"), z = o("WAWebCallLinkLandingPageMode").computeMode({
			guestCallingEnabled: W,
			isGuestCallingSession: O,
			isLoggedIn: A,
			isWebGroupCalling100Enabled: B,
			webGroupCallingEnabled: G
		}), j;
		n[5] === Symbol.for("react.memo_cache_sentinel") ? (j = b(), n[5] = j) : j = n[5];
		var K = g(j), Q = K[0], X;
		n[6] === Symbol.for("react.memo_cache_sentinel") ? (X = o("WAWebUserPrefsMultiDevice").getCachedProfilePicEURL(), n[6] = X) : X = n[6];
		var Y = g(X), J = Y[0], Z = g(!1), ee = Z[0], te = Z[1], ne = g(!S), re = ne[0], oe = ne[1], ae = g(!1), ie = ae[0], le = ae[1], se = g(D), ue = se[0], ce = se[1], de = g(T), me = de[0], pe = de[1], _e = g(I), fe = _e[0], ge = _e[1], he = g(k), ye = he[0], Ce = o("WAWebVoipGroupCallAccentColors").GROUP_CALL_DARK_COLORS[ye], be = g(!1), ve = be[0], Se = be[1], Re = g(!1), Le = Re[0], Ee = Re[1], ke;
		n[7] === Symbol.for("react.memo_cache_sentinel") ? (ke = function() {
			return Se(!0);
		}, n[7] = ke) : ke = n[7];
		var Ie = ke, Te;
		n[8] === Symbol.for("react.memo_cache_sentinel") ? (Te = function() {
			return Ee(!0);
		}, n[8] = Te) : Te = n[8];
		var De = Te, xe = r("useWAWebVoipPermissionStatus")(S), $e = xe.cameraPermission, Pe = xe.micPermission, Ne = $e === "denied" || $e !== "granted" && ve, Me = Pe === "denied" || Pe !== "granted" && Le, we = f(null), Ae = g(!1), Fe = Ae[0], Oe = Ae[1], Be = g(!1), We = Be[0], qe = Be[1], Ue = f(null), Ve;
		n[9] === Symbol.for("react.memo_cache_sentinel") ? (Ve = function() {
			var e = Ue.current;
			if (e != null) {
				var t = e.querySelector("button, [href], [tabindex=\"0\"]");
				t instanceof HTMLElement && t.focus();
			}
		}, n[9] = Ve) : Ve = n[9];
		var He = Ve, Ge, ze;
		n[10] !== a || n[11] !== i || n[12] !== l || n[13] !== H || n[14] !== U || n[15] !== z || n[16] !== m ? (Ge = function() {
			if (i == null) {
				if (z === "guest_redirect") {
					var e = new URLSearchParams(window.location.search);
					if (H && e.get(o("WAWebCallLinkParams").USER_LOGGED_IN_PARAM) === "1") {
						$();
						return;
					}
					if (!U) {
						$();
						return;
					}
					var t = e.get(o("WAWebCallLinkParams").CLEAR_STALE_VC_PARAM) === "1";
					!t && m != null ? window.location.href = m : t && $();
					return;
				}
				if (z === "qr_redirect") {
					window.location.href = "/?cmd=call_link&call_type=" + encodeURIComponent(a) + "&call_token=" + encodeURIComponent(l);
					return;
				}
				if (z === "lobby") {
					var n = null, s = null, u = function() {
						n != null && (window.removeEventListener("focus", n), n = null), s != null && (window.clearTimeout(s), s = null);
					}, c = r("WAWebCallLinkDesktopAppDetect")(a, l, function(e) {
						e === "installed" ? (Oe(!0), n = function() {
							qe(!0), u();
						}, window.addEventListener("focus", n), s = window.setTimeout(function() {
							qe(!0), u();
						}, h)) : qe(!0);
					});
					return (function() {
						typeof c == "function" && c(), u();
					});
				}
			}
		}, ze = [
			a,
			i,
			l,
			H,
			U,
			z,
			m
		], n[10] = a, n[11] = i, n[12] = l, n[13] = H, n[14] = U, n[15] = z, n[16] = m, n[17] = Ge, n[18] = ze) : (Ge = n[17], ze = n[18]), p(Ge, ze);
		var je;
		n[19] !== ye || n[20] !== a || n[21] !== l || n[22] !== Me || n[23] !== ie || n[24] !== Ne || n[25] !== re || n[26] !== me || n[27] !== fe || n[28] !== ue ? (je = async function() {
			var e = P({
				accentColorIndex: ye,
				audioDenied: Me,
				callType: a,
				idHash: l,
				isMicMuted: ie,
				isVideoMuted: re,
				selectedAudioDeviceId: me,
				selectedSpeakerDeviceId: fe,
				selectedVideoDeviceId: ue,
				videoDenied: Ne
			});
			we.current != null && we.current(), window.location.href = e;
		}, n[19] = ye, n[20] = a, n[21] = l, n[22] = Me, n[23] = ie, n[24] = Ne, n[25] = re, n[26] = me, n[27] = fe, n[28] = ue, n[29] = je) : je = n[29];
		var Ke = je, Qe;
		n[30] !== Q ? (Qe = Q != null && Q.length > 0 ? Q.charAt(0).toUpperCase() : null, n[30] = Q, n[31] = Qe) : Qe = n[31];
		var Xe = Qe, Ye;
		n[32] !== Q ? (Ye = Q != null ? Q.split(" ")[0] : null, n[32] = Q, n[33] = Ye) : Ye = n[33];
		var Je = Ye, Ze = A, et;
		n[34] === Symbol.for("react.memo_cache_sentinel") ? (et = async function() {
			var e = await o("WAWebConfirmPopup.react").waitForConfirmPopup({
				title: c.jsx("span", {
					className: "x14ug900",
					children: s._(
						/*BTDS*/
						""
					)
				}),
				children: c.jsx("span", {
					className: "x14ug900",
					children: s._(
						/*BTDS*/
						""
					)
				}),
				okText: s._(
					/*BTDS*/
					""
				),
				okButtonType: "negative-destructive"
			});
			if (e) {
				we.current != null && we.current();
				try {
					if (r("WAWebLocalStorage") != null) {
						var t;
						(t = r("WAWebLocalStorage")).removeItem("last-wid-md"), t.removeItem("WANoiseInfo"), t.removeItem("WASecretBundle"), t.removeItem("WABrowserId");
					}
				} catch (e) {}
				window.location.href = "/";
			}
		}, n[34] = et) : et = n[34];
		var tt = et, nt;
		n[35] !== a || n[36] !== l ? (nt = async function() {
			var e = "whatsapp://call/" + encodeURIComponent(a) + "/" + encodeURIComponent(l);
			window.location.href = e;
		}, n[35] = a, n[36] = l, n[37] = nt) : nt = n[37];
		var rt = nt, ot = E;
		if (i != null) {
			var at;
			return n[38] !== i ? (at = c.jsx(r("WAWebCallLinkErrorPage.react"), { errorReason: i }), n[38] = i, n[39] = at) : at = n[39], at;
		}
		if (z == null || z === "qr_redirect" || z === "guest_redirect") return null;
		if (z === "join_call_lite") {
			var it;
			return n[40] !== a || n[41] !== l || n[42] !== d ? (it = c.jsx(r("WAWebCallLinkJoinCallLite.react"), {
				callType: a,
				idHash: l,
				locales: d
			}), n[40] = a, n[41] = l, n[42] = d, n[43] = it) : it = n[43], it;
		}
		var lt, st;
		n[44] === Symbol.for("react.memo_cache_sentinel") ? (lt = c.jsx(r("WDSIllustrationWdsPictoAccount.react"), { xstyle: v.miniCardIllustration }), st = { className: "x1c3i2sq xk50ysn x1o2sk6j xy4aiz4 x1ncir08 x1yc453h x1iyjqo2" }, n[44] = lt, n[45] = st) : (lt = n[44], st = n[45]);
		var ut;
		n[46] !== Q || n[47] !== Je ? (ut = c.jsx("span", babelHelpers.extends({}, st, { children: s._(
			/*BTDS*/
			"",
			[s._param("firstName", Je != null ? Je : Q)]
		) })), n[46] = Q, n[47] = Je, n[48] = ut) : ut = n[48];
		var ct;
		n[49] === Symbol.for("react.memo_cache_sentinel") ? (ct = c.jsx(r("WAWebLinkDeviceScreenPrimaryButton.react"), {
			onClick: tt,
			testId: "call-link-switch-account-button",
			text: s._(
				/*BTDS*/
				""
			),
			xstyle: v.secondaryButtonOverride
		}), n[49] = ct) : ct = n[49];
		var dt;
		n[50] !== ut ? (dt = c.jsxs(o("WAWebFlex.react").FlexRow, {
			align: "center",
			justify: "all",
			grow: 1,
			xstyle: v.switchAccountCard,
			children: [
				lt,
				ut,
				ct
			]
		}), n[50] = ut, n[51] = dt) : dt = n[51];
		var mt, pt;
		n[52] === Symbol.for("react.memo_cache_sentinel") ? (mt = c.jsx(r("WDSIllustrationWdsPictoDownloadDesktop.react"), { xstyle: v.downloadCardIllustration }), pt = { className: "x1c3i2sq xk50ysn x1o2sk6j xy4aiz4 x1ncir08 x1yc453h x1iyjqo2" }, n[52] = mt, n[53] = pt) : (mt = n[52], pt = n[53]);
		var _t;
		n[54] !== Fe ? (_t = c.jsx("span", babelHelpers.extends({}, pt, { children: Fe ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		) })), n[54] = Fe, n[55] = _t) : _t = n[55];
		var ft;
		n[56] !== Fe || n[57] !== rt ? (ft = Fe ? c.jsx(r("WAWebLinkDeviceScreenPrimaryButton.react"), {
			onClick: rt,
			testId: "call-link-open-app-button",
			text: s._(
				/*BTDS*/
				""
			),
			xstyle: v.secondaryButtonOverride
		}) : c.jsx(r("WAWebLinkDeviceScreenPrimaryButton.react"), {
			onClick: ot,
			testId: "call-link-download-button",
			text: s._(
				/*BTDS*/
				""
			),
			xstyle: v.secondaryButtonOverride
		}), n[56] = Fe, n[57] = rt, n[58] = ft) : ft = n[58];
		var gt;
		n[59] !== _t || n[60] !== ft ? (gt = c.jsxs(o("WAWebFlex.react").FlexRow, {
			align: "center",
			justify: "all",
			grow: 1,
			xstyle: v.switchAccountCard,
			children: [
				mt,
				_t,
				ft
			]
		}), n[59] = _t, n[60] = ft, n[61] = gt) : gt = n[61];
		var ht;
		n[62] !== dt || n[63] !== gt ? (ht = c.jsxs(c.Fragment, { children: [dt, gt] }), n[62] = dt, n[63] = gt, n[64] = ht) : ht = n[64];
		var yt = ht, Ct;
		n[65] === Symbol.for("react.memo_cache_sentinel") ? (Ct = (e || (e = r("stylex"))).props(o("WDSThemes").WDSLightTheme, v.page), n[65] = Ct) : Ct = n[65];
		var bt;
		n[66] === Symbol.for("react.memo_cache_sentinel") ? (bt = c.jsx(o("WAWebFlex.react").FlexRow, {
			align: "center",
			shrink: 0,
			xstyle: v.logoHeader,
			children: c.jsx(o("WAWebExternalLink.react").ExternalLinkEl, {
				"data-testid": "call-link-landing-page-logo",
				href: "https://www.whatsapp.com/",
				"aria-label": s._(
					/*BTDS*/
					""
				),
				className: "x78zum5 x6s0dn4 xmixu3c x1hl2dhg",
				children: c.jsx(r("WAWebCallLinkMarketingLogo.react"), {
					height: 30,
					width: 130,
					testid: "call-link-landing-page-logo-img"
				})
			})
		}), n[66] = bt) : bt = n[66];
		var vt;
		n[67] === Symbol.for("react.memo_cache_sentinel") ? (vt = { className: "xb1i3fl x1g83kfv x3qq2k7 x2x8art x1qor8vf x178xt8z x1lun4ml xso031l xpilrb4 x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x1wove2r x10nd7l6 x12t7uq9 x14s4pk6 x4i7bpe xiaro03 x15zmtp0 xcm4ngb x1sgudl8 x17ud9ob x1oiqv2n xomcbdp x1uedy8c xh8yej3 x9f619 x78zum5 x1q0g3np xozqiw3 xrhn0ka x1nhvcw1 x1ay5qoh xe93d63 x1wh94ac x6s0dn4" }, n[67] = vt) : vt = n[67];
		var St;
		n[68] === Symbol.for("react.memo_cache_sentinel") ? (St = { className: "x579bpy xo1l8bm x1ud3kw6 xiaed6b xipbhat x1yc453h x1m2wpe9" }, n[68] = St) : St = n[68];
		var Rt;
		n[69] !== N ? (Rt = c.jsx("span", babelHelpers.extends({}, St, { children: s._(
			/*BTDS*/
			"",
			[s._enum(N, {
				video: "video call",
				voice: "voice call"
			})]
		) })), n[69] = N, n[70] = Rt) : Rt = n[70];
		var Lt;
		n[71] !== Q || n[72] !== Xe || n[73] !== ee || n[74] !== J ? (Lt = Q != null && c.jsxs(o("WAWebFlex.react").FlexRow, {
			align: "center",
			columnGap: 8,
			children: [J != null && J !== "" && !ee ? c.jsx("img", {
				src: J,
				onError: function() {
					return te(!0);
				},
				className: "x1td3qas x10w6t97 x1c9tyrk xeusxvb x1pahc9y x1ertn4p xl1xv1r x2lah0s"
			}) : c.jsx("div", {
				className: "x1td3qas x10w6t97 x1c9tyrk xeusxvb x1pahc9y x1ertn4p xyp3urf x78zum5 x6s0dn4 xl56j7k x17t9dm2 x1f6kntn x1s688f x2lah0s",
				children: Xe
			}), c.jsx("span", {
				className: "x1jchvi3",
				children: s._(
					/*BTDS*/
					"",
					[s._param("displayName", Q)]
				)
			})]
		}), n[71] = Q, n[72] = Xe, n[73] = ee, n[74] = J, n[75] = Lt) : Lt = n[75];
		var Et = !Me, kt;
		n[76] === Symbol.for("react.memo_cache_sentinel") ? (kt = s._(
			/*BTDS*/
			""
		), n[76] = kt) : kt = n[76];
		var It;
		n[77] === Symbol.for("react.memo_cache_sentinel") ? (It = s._(
			/*BTDS*/
			""
		), n[77] = It) : It = n[77];
		var Tt;
		n[78] !== Ke || n[79] !== Me ? (Tt = c.jsx(r("WAWebLinkDeviceScreenPrimaryButton.react"), {
			disabled: Me,
			onClick: Ke,
			testId: "call-link-join-button",
			text: It,
			xstyle: v.joinButtonOverride
		}), n[78] = Ke, n[79] = Me, n[80] = Tt) : Tt = n[80];
		var Dt;
		n[81] !== Et || n[82] !== Tt ? (Dt = c.jsx(r("WDSTooltip.react"), {
			disabled: Et,
			label: kt,
			children: Tt
		}), n[81] = Et, n[82] = Tt, n[83] = Dt) : Dt = n[83];
		var xt;
		n[84] !== Rt || n[85] !== Lt || n[86] !== Dt ? (xt = c.jsxs(o("WAWebFlex.react").FlexColumn, {
			align: "center",
			grow: 1,
			rowGap: 32,
			xstyle: v.infoSection,
			children: [
				Rt,
				Lt,
				Dt
			]
		}), n[84] = Rt, n[85] = Lt, n[86] = Dt, n[87] = xt) : xt = n[87];
		var $t;
		n[88] !== Ce || n[89] !== We || n[90] !== Q || n[91] !== Me || n[92] !== ie || n[93] !== S || n[94] !== Ne || n[95] !== re || n[96] !== J || n[97] !== me || n[98] !== fe || n[99] !== ue ? ($t = Ze && c.jsxs(o("WAWebFlex.react").FlexColumn, {
			align: "center",
			shrink: 0,
			columnGap: 16,
			rowGap: 16,
			xstyle: v.previewSection,
			children: [c.jsx(r("WAWebCallLinkCameraPreview.react"), {
				accentColor: Ce,
				deferMedia: !We,
				deviceId: ue,
				isMicMuted: ie || Me,
				isVideoMuted: re,
				displayName: Q,
				profilePicUrl: J,
				stopStreamRef: we
			}), c.jsxs(o("WAWebFlex.react").FlexRow, {
				justify: "center",
				xstyle: v.controlsGap,
				children: [S && c.jsx(r("WAWebCallLinkDeviceSelector.react"), {
					deferMedia: !We,
					kind: "videoinput",
					isMuted: re,
					onMuteToggle: function() {
						return oe(L);
					},
					onDeviceSelect: ce,
					onPermissionDenied: Ie,
					permissionDenied: Ne,
					selectedDeviceId: ue
				}), c.jsx(r("WAWebCallLinkDeviceSelector.react"), {
					deferMedia: !We,
					kind: "audio",
					isMuted: ie,
					onMuteToggle: function() {
						return le(R);
					},
					onDeviceSelect: pe,
					onPermissionDenied: De,
					permissionDenied: Me,
					selectedDeviceId: me,
					onSpeakerSelect: ge,
					selectedSpeakerDeviceId: fe
				})]
			})]
		}), n[88] = Ce, n[89] = We, n[90] = Q, n[91] = Me, n[92] = ie, n[93] = S, n[94] = Ne, n[95] = re, n[96] = J, n[97] = me, n[98] = fe, n[99] = ue, n[100] = $t) : $t = n[100];
		var Pt;
		n[101] !== xt || n[102] !== $t ? (Pt = c.jsxs("div", babelHelpers.extends({}, vt, { children: [xt, $t] })), n[101] = xt, n[102] = $t, n[103] = Pt) : Pt = n[103];
		var Nt;
		n[104] !== Q || n[105] !== yt ? (Nt = Q != null && c.jsx(o("WAWebFlex.react").FlexRow, {
			align: "stretch",
			justify: "all",
			xstyle: v.miniCardsRow,
			children: yt
		}), n[104] = Q, n[105] = yt, n[106] = Nt) : Nt = n[106];
		var Mt;
		n[107] !== Pt || n[108] !== Nt ? (Mt = c.jsxs(o("WAWebFlex.react").FlexColumn, {
			align: "center",
			xstyle: v.cardArea,
			children: [Pt, Nt]
		}), n[107] = Pt, n[108] = Nt, n[109] = Mt) : Mt = n[109];
		var wt;
		n[110] === Symbol.for("react.memo_cache_sentinel") ? (wt = c.jsxs(o("WAWebFlex.react").FlexRow, {
			align: "center",
			justify: "center",
			shrink: 0,
			xstyle: v.encryptionBanner,
			children: [c.jsx(o("WAWebLockOutlineIcon.react").LockOutlineIcon, {
				height: 16,
				width: 16,
				iconXstyle: v.encryptionText
			}), c.jsx("span", {
				className: "x1f6kntn x65c15g",
				children: s._(
					/*BTDS*/
					""
				)
			})]
		}), n[110] = wt) : wt = n[110];
		var At;
		n[111] === Symbol.for("react.memo_cache_sentinel") ? (At = c.jsx(o("WAWebFlex.react").FlexRow, {
			align: "center",
			justify: "center",
			shrink: 0,
			xstyle: v.tcsBanner,
			children: c.jsx("span", {
				className: "x1pg5gke x1159mfc xqhqf4p xdj266r x14z9mp xat24cr x1lziwak x65c15g",
				children: s._(
					/*BTDS*/
					"",
					[s._implicitParam("=m2", c.jsx(o("WAWebExternalLink.react").ExternalLinkEl, {
						"data-testid": "voip_call_link_tcs_link",
						href: "https://www.whatsapp.com/legal/",
						className: "xujl8zx x65c15g",
						children: s._(
							/*BTDS*/
							""
						)
					}))]
				)
			})
		}), n[111] = At) : At = n[111];
		var Ft;
		n[112] === Symbol.for("react.memo_cache_sentinel") ? (Ft = c.jsx("div", {
			tabIndex: 0,
			onFocus: He,
			className: "x10l6tqk x1i1rx1s xjm9jq1 x6ikm8r x10wlt62 xg01cxk"
		}), n[112] = Ft) : Ft = n[112];
		var Ot;
		return n[113] !== Mt ? (Ot = c.jsxs("div", babelHelpers.extends({ ref: Ue }, Ct, { children: [
			bt,
			Mt,
			wt,
			At,
			Ft
		] })), n[113] = Mt, n[114] = Ot) : Ot = n[114], Ot;
	}
	function R(e) {
		return !e;
	}
	function L(e) {
		return !e;
	}
	async function E() {
		window.location.href = "https://www.whatsapp.com/download";
	}
	function k() {
		return Math.floor(Math.random() * (o("WAWebVoipGroupCallAccentColors").GROUP_CALL_DARK_COLORS.length - 1)) + 1;
	}
	function I() {
		return o("WAWebUserPrefsVoip").getSelectedAudioOutputDevice();
	}
	function T() {
		return o("WAWebUserPrefsVoip").getSelectedAudioInputDevice();
	}
	function D() {
		return o("WAWebUserPrefsVoip").getSelectedVideoInputDevice();
	}
	function x() {
		n("cr:7775") == null || n("cr:7775").setupCallLinkDebugGlobal();
	}
	function $() {
		var e = new URLSearchParams(window.location.search);
		e.delete(o("WAWebCallLinkParams").CLEAR_STALE_VC_PARAM), e.delete(o("WAWebCallLinkParams").USER_LOGGED_IN_PARAM), window.location.href = r("WAWebURLUtils").buildLoginUrlWithNext(window.location.pathname, e.toString());
	}
	function P(e) {
		var t = e.accentColorIndex, n = e.audioDenied, r = e.callType, o = e.idHash, a = e.isMicMuted, i = e.isVideoMuted, l = e.selectedAudioDeviceId, s = e.selectedSpeakerDeviceId, u = e.selectedVideoDeviceId, c = e.videoDenied, d = "/?cmd=call_link&call_type=" + encodeURIComponent(r) + "&call_token=" + encodeURIComponent(o);
		return u != null && (d += "&video_device=" + encodeURIComponent(u)), l != null && (d += "&audio_device=" + encodeURIComponent(l)), s != null && (d += "&speaker_device=" + encodeURIComponent(s)), (i || c) && (d += "&video_muted=1"), (a || n) && (d += "&audio_muted=1"), d += "&color_index=" + encodeURIComponent(String(t)), d += "&auto_join=1", d;
	}
	l.default = S;
}), 226);
