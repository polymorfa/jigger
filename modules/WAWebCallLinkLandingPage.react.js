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
	"asyncToGeneratorRuntime",
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
		var a = o("react-compiler-runtime").c(115), i = t.callType, l = t.errorReason, u = t.idHash, d = t.isGuestRedirectEnabled, m = t.locales, _ = t.signedClearStaleVCUrl, S = d === void 0 ? !1 : d, k = i === "video", M = k ? "video" : "voice", w;
		a[0] === Symbol.for("react.memo_cache_sentinel") ? (w = [], a[0] = w) : w = a[0], p($, w);
		var A;
		a[1] === Symbol.for("react.memo_cache_sentinel") ? (A = y(), a[1] = A) : A = a[1];
		var F = A, O;
		a[2] === Symbol.for("react.memo_cache_sentinel") ? (O = C(), a[2] = O) : O = a[2];
		var B = O, W = r("justknobx")._("3803"), q = S, U;
		a[3] === Symbol.for("react.memo_cache_sentinel") ? (U = r("justknobx")._("5233"), a[3] = U) : U = a[3];
		var V = U, H;
		a[4] === Symbol.for("react.memo_cache_sentinel") ? (H = r("justknobx")._("4873"), a[4] = H) : H = a[4];
		var G = H, z = o("useWAWebReadABPropFromIdb").useWAWebReadABPropFromIdb("enable_web_group_calling"), j = o("WAWebCallLinkLandingPageMode").computeMode({
			guestCallingEnabled: q,
			isGuestCallingSession: B,
			isLoggedIn: F,
			isWebGroupCalling100Enabled: W,
			webGroupCallingEnabled: z
		}), K;
		a[5] === Symbol.for("react.memo_cache_sentinel") ? (K = b(), a[5] = K) : K = a[5];
		var Q = g(K), X = Q[0], Y;
		a[6] === Symbol.for("react.memo_cache_sentinel") ? (Y = o("WAWebUserPrefsMultiDevice").getCachedProfilePicEURL(), a[6] = Y) : Y = a[6];
		var J = g(Y), Z = J[0], ee = g(!1), te = ee[0], ne = ee[1], re = g(!k), oe = re[0], ae = re[1], ie = g(!1), le = ie[0], se = ie[1], ue = g(x), ce = ue[0], de = ue[1], me = g(D), pe = me[0], _e = me[1], fe = g(T), ge = fe[0], he = fe[1], ye = g(I), Ce = ye[0], be = o("WAWebVoipGroupCallAccentColors").GROUP_CALL_DARK_COLORS[Ce], ve = g(!1), Se = ve[0], Re = ve[1], Le = g(!1), Ee = Le[0], ke = Le[1], Ie;
		a[7] === Symbol.for("react.memo_cache_sentinel") ? (Ie = function() {
			return Re(!0);
		}, a[7] = Ie) : Ie = a[7];
		var Te = Ie, De;
		a[8] === Symbol.for("react.memo_cache_sentinel") ? (De = function() {
			return ke(!0);
		}, a[8] = De) : De = a[8];
		var xe = De, $e = r("useWAWebVoipPermissionStatus")(k), Pe = $e.cameraPermission, Ne = $e.micPermission, Me = Pe === "denied" || Pe !== "granted" && Se, we = Ne === "denied" || Ne !== "granted" && Ee, Ae = f(null), Fe = g(!1), Oe = Fe[0], Be = Fe[1], We = g(!1), qe = We[0], Ue = We[1], Ve = f(null), He;
		a[9] === Symbol.for("react.memo_cache_sentinel") ? (He = function() {
			var e = Ve.current;
			if (e != null) {
				var t = e.querySelector("button, [href], [tabindex=\"0\"]");
				t instanceof HTMLElement && t.focus();
			}
		}, a[9] = He) : He = a[9];
		var Ge = He, ze, je;
		a[10] !== i || a[11] !== l || a[12] !== u || a[13] !== G || a[14] !== V || a[15] !== j || a[16] !== _ ? (ze = function() {
			if (l == null) {
				if (j === "guest_redirect") {
					var e = new URLSearchParams(window.location.search);
					if (G && e.get(o("WAWebCallLinkParams").USER_LOGGED_IN_PARAM) === "1") {
						P();
						return;
					}
					if (!V) {
						P();
						return;
					}
					var t = e.get(o("WAWebCallLinkParams").CLEAR_STALE_VC_PARAM) === "1";
					!t && _ != null ? window.location.href = _ : t && P();
					return;
				}
				if (j === "qr_redirect") {
					window.location.href = "/?cmd=call_link&call_type=" + encodeURIComponent(i) + "&call_token=" + encodeURIComponent(u);
					return;
				}
				if (j === "lobby") {
					var n = null, a = null, s = function() {
						n != null && (window.removeEventListener("focus", n), n = null), a != null && (window.clearTimeout(a), a = null);
					}, c = r("WAWebCallLinkDesktopAppDetect")(i, u, function(e) {
						e === "installed" ? (Be(!0), n = function() {
							Ue(!0), s();
						}, window.addEventListener("focus", n), a = window.setTimeout(function() {
							Ue(!0), s();
						}, h)) : Ue(!0);
					});
					return (function() {
						typeof c == "function" && c(), s();
					});
				}
			}
		}, je = [
			i,
			l,
			u,
			G,
			V,
			j,
			_
		], a[10] = i, a[11] = l, a[12] = u, a[13] = G, a[14] = V, a[15] = j, a[16] = _, a[17] = ze, a[18] = je) : (ze = a[17], je = a[18]), p(ze, je);
		var Ke;
		a[19] !== Ce || a[20] !== i || a[21] !== u || a[22] !== we || a[23] !== le || a[24] !== Me || a[25] !== oe || a[26] !== pe || a[27] !== ge || a[28] !== ce ? (Ke = (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				var e = N({
					accentColorIndex: Ce,
					audioDenied: we,
					callType: i,
					idHash: u,
					isMicMuted: le,
					isVideoMuted: oe,
					selectedAudioDeviceId: pe,
					selectedSpeakerDeviceId: ge,
					selectedVideoDeviceId: ce,
					videoDenied: Me
				});
				Ae.current != null && Ae.current(), window.location.href = e;
			});
			return function() {
				return e.apply(this, arguments);
			};
		})(), a[19] = Ce, a[20] = i, a[21] = u, a[22] = we, a[23] = le, a[24] = Me, a[25] = oe, a[26] = pe, a[27] = ge, a[28] = ce, a[29] = Ke) : Ke = a[29];
		var Qe = Ke, Xe;
		a[30] !== X ? (Xe = X != null && X.length > 0 ? X.charAt(0).toUpperCase() : null, a[30] = X, a[31] = Xe) : Xe = a[31];
		var Ye = Xe, Je;
		a[32] !== X ? (Je = X != null ? X.split(" ")[0] : null, a[32] = X, a[33] = Je) : Je = a[33];
		var Ze = Je, et = F, tt;
		a[34] === Symbol.for("react.memo_cache_sentinel") ? (tt = (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				var e = yield o("WAWebConfirmPopup.react").waitForConfirmPopup({
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
					Ae.current != null && Ae.current();
					try {
						if (r("WAWebLocalStorage") != null) {
							var t;
							(t = r("WAWebLocalStorage")).removeItem("last-wid-md"), t.removeItem("WANoiseInfo"), t.removeItem("WASecretBundle"), t.removeItem("WABrowserId");
						}
					} catch (e) {}
					window.location.href = "/";
				}
			});
			return function() {
				return e.apply(this, arguments);
			};
		})(), a[34] = tt) : tt = a[34];
		var nt = tt, rt;
		a[35] !== i || a[36] !== u ? (rt = (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				var e = "whatsapp://call/" + encodeURIComponent(i) + "/" + encodeURIComponent(u);
				window.location.href = e;
			});
			return function() {
				return e.apply(this, arguments);
			};
		})(), a[35] = i, a[36] = u, a[37] = rt) : rt = a[37];
		var ot = rt, at = E;
		if (l != null) {
			var it;
			return a[38] !== l ? (it = c.jsx(r("WAWebCallLinkErrorPage.react"), { errorReason: l }), a[38] = l, a[39] = it) : it = a[39], it;
		}
		if (j == null || j === "qr_redirect" || j === "guest_redirect") return null;
		if (j === "join_call_lite") {
			var lt;
			return a[40] !== i || a[41] !== u || a[42] !== m ? (lt = c.jsx(r("WAWebCallLinkJoinCallLite.react"), {
				callType: i,
				idHash: u,
				locales: m
			}), a[40] = i, a[41] = u, a[42] = m, a[43] = lt) : lt = a[43], lt;
		}
		var st, ut;
		a[44] === Symbol.for("react.memo_cache_sentinel") ? (st = c.jsx(r("WDSIllustrationWdsPictoAccount.react"), { xstyle: v.miniCardIllustration }), ut = { className: "x1c3i2sq xk50ysn x1o2sk6j xy4aiz4 x1ncir08 x1yc453h x1iyjqo2" }, a[44] = st, a[45] = ut) : (st = a[44], ut = a[45]);
		var ct;
		a[46] !== X || a[47] !== Ze ? (ct = c.jsx("span", babelHelpers.extends({}, ut, { children: s._(
			/*BTDS*/
			"",
			[s._param("firstName", Ze != null ? Ze : X)]
		) })), a[46] = X, a[47] = Ze, a[48] = ct) : ct = a[48];
		var dt;
		a[49] === Symbol.for("react.memo_cache_sentinel") ? (dt = c.jsx(r("WAWebLinkDeviceScreenPrimaryButton.react"), {
			onClick: nt,
			testId: "call-link-switch-account-button",
			text: s._(
				/*BTDS*/
				""
			),
			xstyle: v.secondaryButtonOverride
		}), a[49] = dt) : dt = a[49];
		var mt;
		a[50] !== ct ? (mt = c.jsxs(o("WAWebFlex.react").FlexRow, {
			align: "center",
			justify: "all",
			grow: 1,
			xstyle: v.switchAccountCard,
			children: [
				st,
				ct,
				dt
			]
		}), a[50] = ct, a[51] = mt) : mt = a[51];
		var pt, _t;
		a[52] === Symbol.for("react.memo_cache_sentinel") ? (pt = c.jsx(r("WDSIllustrationWdsPictoDownloadDesktop.react"), { xstyle: v.downloadCardIllustration }), _t = { className: "x1c3i2sq xk50ysn x1o2sk6j xy4aiz4 x1ncir08 x1yc453h x1iyjqo2" }, a[52] = pt, a[53] = _t) : (pt = a[52], _t = a[53]);
		var ft;
		a[54] !== Oe ? (ft = c.jsx("span", babelHelpers.extends({}, _t, { children: Oe ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		) })), a[54] = Oe, a[55] = ft) : ft = a[55];
		var gt;
		a[56] !== Oe || a[57] !== ot ? (gt = Oe ? c.jsx(r("WAWebLinkDeviceScreenPrimaryButton.react"), {
			onClick: ot,
			testId: "call-link-open-app-button",
			text: s._(
				/*BTDS*/
				""
			),
			xstyle: v.secondaryButtonOverride
		}) : c.jsx(r("WAWebLinkDeviceScreenPrimaryButton.react"), {
			onClick: at,
			testId: "call-link-download-button",
			text: s._(
				/*BTDS*/
				""
			),
			xstyle: v.secondaryButtonOverride
		}), a[56] = Oe, a[57] = ot, a[58] = gt) : gt = a[58];
		var ht;
		a[59] !== ft || a[60] !== gt ? (ht = c.jsxs(o("WAWebFlex.react").FlexRow, {
			align: "center",
			justify: "all",
			grow: 1,
			xstyle: v.switchAccountCard,
			children: [
				pt,
				ft,
				gt
			]
		}), a[59] = ft, a[60] = gt, a[61] = ht) : ht = a[61];
		var yt;
		a[62] !== mt || a[63] !== ht ? (yt = c.jsxs(c.Fragment, { children: [mt, ht] }), a[62] = mt, a[63] = ht, a[64] = yt) : yt = a[64];
		var Ct = yt, bt;
		a[65] === Symbol.for("react.memo_cache_sentinel") ? (bt = (e || (e = r("stylex"))).props(o("WDSThemes").WDSLightTheme, v.page), a[65] = bt) : bt = a[65];
		var vt;
		a[66] === Symbol.for("react.memo_cache_sentinel") ? (vt = c.jsx(o("WAWebFlex.react").FlexRow, {
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
		}), a[66] = vt) : vt = a[66];
		var St;
		a[67] === Symbol.for("react.memo_cache_sentinel") ? (St = { className: "xb1i3fl x1g83kfv x3qq2k7 x2x8art x1qor8vf x178xt8z x1lun4ml xso031l xpilrb4 x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x1wove2r x10nd7l6 x12t7uq9 x14s4pk6 x4i7bpe xiaro03 x15zmtp0 xcm4ngb x1sgudl8 x17ud9ob x1oiqv2n xomcbdp x1uedy8c xh8yej3 x9f619 x78zum5 x1q0g3np xozqiw3 xrhn0ka x1nhvcw1 x1ay5qoh xe93d63 x1wh94ac x6s0dn4" }, a[67] = St) : St = a[67];
		var Rt;
		a[68] === Symbol.for("react.memo_cache_sentinel") ? (Rt = { className: "x579bpy xo1l8bm x1ud3kw6 xiaed6b xipbhat x1yc453h x1m2wpe9" }, a[68] = Rt) : Rt = a[68];
		var Lt;
		a[69] !== M ? (Lt = c.jsx("span", babelHelpers.extends({}, Rt, { children: s._(
			/*BTDS*/
			"",
			[s._enum(M, {
				video: "video call",
				voice: "voice call"
			})]
		) })), a[69] = M, a[70] = Lt) : Lt = a[70];
		var Et;
		a[71] !== X || a[72] !== Ye || a[73] !== te || a[74] !== Z ? (Et = X != null && c.jsxs(o("WAWebFlex.react").FlexRow, {
			align: "center",
			columnGap: 8,
			children: [Z != null && Z !== "" && !te ? c.jsx("img", {
				src: Z,
				onError: function() {
					return ne(!0);
				},
				className: "x1td3qas x10w6t97 x1c9tyrk xeusxvb x1pahc9y x1ertn4p xl1xv1r x2lah0s"
			}) : c.jsx("div", {
				className: "x1td3qas x10w6t97 x1c9tyrk xeusxvb x1pahc9y x1ertn4p xyp3urf x78zum5 x6s0dn4 xl56j7k x17t9dm2 x1f6kntn x1s688f x2lah0s",
				children: Ye
			}), c.jsx("span", {
				className: "x1jchvi3",
				children: s._(
					/*BTDS*/
					"",
					[s._param("displayName", X)]
				)
			})]
		}), a[71] = X, a[72] = Ye, a[73] = te, a[74] = Z, a[75] = Et) : Et = a[75];
		var kt = !we, It;
		a[76] === Symbol.for("react.memo_cache_sentinel") ? (It = s._(
			/*BTDS*/
			""
		), a[76] = It) : It = a[76];
		var Tt;
		a[77] === Symbol.for("react.memo_cache_sentinel") ? (Tt = s._(
			/*BTDS*/
			""
		), a[77] = Tt) : Tt = a[77];
		var Dt;
		a[78] !== Qe || a[79] !== we ? (Dt = c.jsx(r("WAWebLinkDeviceScreenPrimaryButton.react"), {
			disabled: we,
			onClick: Qe,
			testId: "call-link-join-button",
			text: Tt,
			xstyle: v.joinButtonOverride
		}), a[78] = Qe, a[79] = we, a[80] = Dt) : Dt = a[80];
		var xt;
		a[81] !== kt || a[82] !== Dt ? (xt = c.jsx(r("WDSTooltip.react"), {
			disabled: kt,
			label: It,
			children: Dt
		}), a[81] = kt, a[82] = Dt, a[83] = xt) : xt = a[83];
		var $t;
		a[84] !== Lt || a[85] !== Et || a[86] !== xt ? ($t = c.jsxs(o("WAWebFlex.react").FlexColumn, {
			align: "center",
			grow: 1,
			rowGap: 32,
			xstyle: v.infoSection,
			children: [
				Lt,
				Et,
				xt
			]
		}), a[84] = Lt, a[85] = Et, a[86] = xt, a[87] = $t) : $t = a[87];
		var Pt;
		a[88] !== be || a[89] !== qe || a[90] !== X || a[91] !== we || a[92] !== le || a[93] !== k || a[94] !== Me || a[95] !== oe || a[96] !== Z || a[97] !== pe || a[98] !== ge || a[99] !== ce ? (Pt = et && c.jsxs(o("WAWebFlex.react").FlexColumn, {
			align: "center",
			shrink: 0,
			columnGap: 16,
			rowGap: 16,
			xstyle: v.previewSection,
			children: [c.jsx(r("WAWebCallLinkCameraPreview.react"), {
				accentColor: be,
				deferMedia: !qe,
				deviceId: ce,
				isMicMuted: le || we,
				isVideoMuted: oe,
				displayName: X,
				profilePicUrl: Z,
				stopStreamRef: Ae
			}), c.jsxs(o("WAWebFlex.react").FlexRow, {
				justify: "center",
				xstyle: v.controlsGap,
				children: [k && c.jsx(r("WAWebCallLinkDeviceSelector.react"), {
					deferMedia: !qe,
					kind: "videoinput",
					isMuted: oe,
					onMuteToggle: function() {
						return ae(L);
					},
					onDeviceSelect: de,
					onPermissionDenied: Te,
					permissionDenied: Me,
					selectedDeviceId: ce
				}), c.jsx(r("WAWebCallLinkDeviceSelector.react"), {
					deferMedia: !qe,
					kind: "audio",
					isMuted: le,
					onMuteToggle: function() {
						return se(R);
					},
					onDeviceSelect: _e,
					onPermissionDenied: xe,
					permissionDenied: we,
					selectedDeviceId: pe,
					onSpeakerSelect: he,
					selectedSpeakerDeviceId: ge
				})]
			})]
		}), a[88] = be, a[89] = qe, a[90] = X, a[91] = we, a[92] = le, a[93] = k, a[94] = Me, a[95] = oe, a[96] = Z, a[97] = pe, a[98] = ge, a[99] = ce, a[100] = Pt) : Pt = a[100];
		var Nt;
		a[101] !== $t || a[102] !== Pt ? (Nt = c.jsxs("div", babelHelpers.extends({}, St, { children: [$t, Pt] })), a[101] = $t, a[102] = Pt, a[103] = Nt) : Nt = a[103];
		var Mt;
		a[104] !== X || a[105] !== Ct ? (Mt = X != null && c.jsx(o("WAWebFlex.react").FlexRow, {
			align: "stretch",
			justify: "all",
			xstyle: v.miniCardsRow,
			children: Ct
		}), a[104] = X, a[105] = Ct, a[106] = Mt) : Mt = a[106];
		var wt;
		a[107] !== Nt || a[108] !== Mt ? (wt = c.jsxs(o("WAWebFlex.react").FlexColumn, {
			align: "center",
			xstyle: v.cardArea,
			children: [Nt, Mt]
		}), a[107] = Nt, a[108] = Mt, a[109] = wt) : wt = a[109];
		var At;
		a[110] === Symbol.for("react.memo_cache_sentinel") ? (At = c.jsxs(o("WAWebFlex.react").FlexRow, {
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
		}), a[110] = At) : At = a[110];
		var Ft;
		a[111] === Symbol.for("react.memo_cache_sentinel") ? (Ft = c.jsx(o("WAWebFlex.react").FlexRow, {
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
		}), a[111] = Ft) : Ft = a[111];
		var Ot;
		a[112] === Symbol.for("react.memo_cache_sentinel") ? (Ot = c.jsx("div", {
			tabIndex: 0,
			onFocus: Ge,
			className: "x10l6tqk x1i1rx1s xjm9jq1 x6ikm8r x10wlt62 xg01cxk"
		}), a[112] = Ot) : Ot = a[112];
		var Bt;
		return a[113] !== wt ? (Bt = c.jsxs("div", babelHelpers.extends({ ref: Ve }, bt, { children: [
			vt,
			wt,
			At,
			Ft,
			Ot
		] })), a[113] = wt, a[114] = Bt) : Bt = a[114], Bt;
	}
	function R(e) {
		return !e;
	}
	function L(e) {
		return !e;
	}
	function E() {
		return k.apply(this, arguments);
	}
	function k() {
		return k = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
			window.location.href = "https://www.whatsapp.com/download";
		}), k.apply(this, arguments);
	}
	function I() {
		return Math.floor(Math.random() * (o("WAWebVoipGroupCallAccentColors").GROUP_CALL_DARK_COLORS.length - 1)) + 1;
	}
	function T() {
		return o("WAWebUserPrefsVoip").getSelectedAudioOutputDevice();
	}
	function D() {
		return o("WAWebUserPrefsVoip").getSelectedAudioInputDevice();
	}
	function x() {
		return o("WAWebUserPrefsVoip").getSelectedVideoInputDevice();
	}
	function $() {
		n("cr:7775") == null || n("cr:7775").setupCallLinkDebugGlobal();
	}
	function P() {
		var e = new URLSearchParams(window.location.search);
		e.delete(o("WAWebCallLinkParams").CLEAR_STALE_VC_PARAM), e.delete(o("WAWebCallLinkParams").USER_LOGGED_IN_PARAM), window.location.href = r("WAWebURLUtils").buildLoginUrlWithNext(window.location.pathname, e.toString());
	}
	function N(e) {
		var t = e.accentColorIndex, n = e.audioDenied, r = e.callType, o = e.idHash, a = e.isMicMuted, i = e.isVideoMuted, l = e.selectedAudioDeviceId, s = e.selectedSpeakerDeviceId, u = e.selectedVideoDeviceId, c = e.videoDenied, d = "/?cmd=call_link&call_type=" + encodeURIComponent(r) + "&call_token=" + encodeURIComponent(o);
		return u != null && (d += "&video_device=" + encodeURIComponent(u)), l != null && (d += "&audio_device=" + encodeURIComponent(l)), s != null && (d += "&speaker_device=" + encodeURIComponent(s)), (i || c) && (d += "&video_muted=1"), (a || n) && (d += "&audio_muted=1"), d += "&color_index=" + encodeURIComponent(String(t)), d += "&auto_join=1", d;
	}
	l.default = S;
}), 226);
