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
		var a = t.callType, i = t.errorReason, l = t.idHash, u = t.isGuestRedirectEnabled, d = u === void 0 ? !1 : u, S = t.locales, E = t.signedClearStaleVCUrl, k = a === "video", I = k ? "video" : "voice";
		p(function() {
			n("cr:7775") == null || n("cr:7775").setupCallLinkDebugGlobal();
		}, []);
		var T = _(function() {
			return y();
		}, []), D = _(function() {
			return C();
		}, []), x = r("justknobx")._("3803"), $ = d, P = r("justknobx")._("5233"), N = r("justknobx")._("4873"), M = o("useWAWebReadABPropFromIdb").useWAWebReadABPropFromIdb("enable_web_group_calling"), w = o("WAWebCallLinkLandingPageMode").computeMode({
			guestCallingEnabled: $,
			isGuestCallingSession: D,
			isLoggedIn: T,
			isWebGroupCalling100Enabled: x,
			webGroupCallingEnabled: M
		}), A = g(b()), F = A[0], O = g(o("WAWebUserPrefsMultiDevice").getCachedProfilePicEURL()), B = O[0], W = g(!1), q = W[0], U = W[1], V = g(!k), H = V[0], G = V[1], z = g(!1), j = z[0], K = z[1], Q = g(function() {
			return o("WAWebUserPrefsVoip").getSelectedVideoInputDevice();
		}), X = Q[0], Y = Q[1], J = g(function() {
			return o("WAWebUserPrefsVoip").getSelectedAudioInputDevice();
		}), Z = J[0], ee = J[1], te = g(function() {
			return o("WAWebUserPrefsVoip").getSelectedAudioOutputDevice();
		}), ne = te[0], re = te[1], oe = g(function() {
			return Math.floor(Math.random() * (o("WAWebVoipGroupCallAccentColors").GROUP_CALL_DARK_COLORS.length - 1)) + 1;
		}), ae = oe[0], ie = o("WAWebVoipGroupCallAccentColors").GROUP_CALL_DARK_COLORS[ae], le = g(!1), se = le[0], ue = le[1], ce = g(!1), de = ce[0], me = ce[1], pe = m(function() {
			return ue(!0);
		}, []), _e = m(function() {
			return me(!0);
		}, []), fe = r("useWAWebVoipPermissionStatus")(k), ge = fe.cameraPermission, he = fe.micPermission, ye = ge === "denied" || ge !== "granted" && se, Ce = he === "denied" || he !== "granted" && de, be = f(null), ve = g(!1), Se = ve[0], Re = ve[1], Le = g(!1), Ee = Le[0], ke = Le[1], Ie = f(null), Te = m(function() {
			var e = Ie.current;
			if (e != null) {
				var t = e.querySelector("button, [href], [tabindex=\"0\"]");
				t instanceof HTMLElement && t.focus();
			}
		}, []);
		p(function() {
			if (i == null) {
				if (w === "guest_redirect") {
					var e = new URLSearchParams(window.location.search);
					if (N && e.get(o("WAWebCallLinkParams").USER_LOGGED_IN_PARAM) === "1") {
						R();
						return;
					}
					if (!P) {
						R();
						return;
					}
					var t = e.get(o("WAWebCallLinkParams").CLEAR_STALE_VC_PARAM) === "1";
					!t && E != null ? window.location.href = E : t && R();
					return;
				}
				if (w === "qr_redirect") {
					window.location.href = "/?cmd=call_link&call_type=" + encodeURIComponent(a) + "&call_token=" + encodeURIComponent(l);
					return;
				}
				if (w === "lobby") {
					var n = null, s = null, u = function() {
						n != null && (window.removeEventListener("focus", n), n = null), s != null && (window.clearTimeout(s), s = null);
					}, c = r("WAWebCallLinkDesktopAppDetect")(a, l, function(e) {
						e === "installed" ? (Re(!0), n = function() {
							ke(!0), u();
						}, window.addEventListener("focus", n), s = window.setTimeout(function() {
							ke(!0), u();
						}, h)) : ke(!0);
					});
					return function() {
						typeof c == "function" && c(), u();
					};
				}
			}
		}, [
			a,
			i,
			l,
			N,
			P,
			w,
			E
		]);
		var De = m(n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
			var e = L({
				accentColorIndex: ae,
				audioDenied: Ce,
				callType: a,
				idHash: l,
				isMicMuted: j,
				isVideoMuted: H,
				selectedAudioDeviceId: Z,
				selectedSpeakerDeviceId: ne,
				selectedVideoDeviceId: X,
				videoDenied: ye
			});
			be.current != null && be.current(), window.location.href = e;
		}), [
			ae,
			a,
			l,
			Ce,
			j,
			ye,
			H,
			Z,
			ne,
			X
		]), xe = F != null && F.length > 0 ? F.charAt(0).toUpperCase() : null, $e = F != null ? F.split(" ")[0] : null, Pe = T, Ne = m(n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
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
				be.current != null && be.current();
				try {
					if (r("WAWebLocalStorage") != null) {
						var t;
						(t = r("WAWebLocalStorage")).removeItem("last-wid-md"), t.removeItem("WANoiseInfo"), t.removeItem("WASecretBundle"), t.removeItem("WABrowserId");
					}
				} catch (e) {}
				window.location.href = "/";
			}
		}), []), Me = m(n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
			var e = "whatsapp://call/" + encodeURIComponent(a) + "/" + encodeURIComponent(l);
			window.location.href = e;
		}), [a, l]), we = m(n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
			window.location.href = "https://www.whatsapp.com/download";
		}), []);
		if (i != null) return c.jsx(r("WAWebCallLinkErrorPage.react"), { errorReason: i });
		if (w == null || w === "qr_redirect" || w === "guest_redirect") return null;
		if (w === "join_call_lite") return c.jsx(r("WAWebCallLinkJoinCallLite.react"), {
			callType: a,
			idHash: l,
			locales: S
		});
		var Ae = c.jsxs(c.Fragment, { children: [c.jsxs(o("WAWebFlex.react").FlexRow, {
			align: "center",
			justify: "all",
			grow: 1,
			xstyle: v.switchAccountCard,
			children: [
				c.jsx(r("WDSIllustrationWdsPictoAccount.react"), { xstyle: v.miniCardIllustration }),
				c.jsx("span", {
					className: "x1c3i2sq xk50ysn x1o2sk6j xy4aiz4 x1ncir08 x1yc453h x1iyjqo2",
					children: s._(
						/*BTDS*/
						"",
						[s._param("firstName", $e != null ? $e : F)]
					)
				}),
				c.jsx(r("WAWebLinkDeviceScreenPrimaryButton.react"), {
					onClick: Ne,
					testId: "call-link-switch-account-button",
					text: s._(
						/*BTDS*/
						""
					),
					xstyle: v.secondaryButtonOverride
				})
			]
		}), c.jsxs(o("WAWebFlex.react").FlexRow, {
			align: "center",
			justify: "all",
			grow: 1,
			xstyle: v.switchAccountCard,
			children: [
				c.jsx(r("WDSIllustrationWdsPictoDownloadDesktop.react"), { xstyle: v.downloadCardIllustration }),
				c.jsx("span", {
					className: "x1c3i2sq xk50ysn x1o2sk6j xy4aiz4 x1ncir08 x1yc453h x1iyjqo2",
					children: Se ? s._(
						/*BTDS*/
						""
					) : s._(
						/*BTDS*/
						""
					)
				}),
				Se ? c.jsx(r("WAWebLinkDeviceScreenPrimaryButton.react"), {
					onClick: Me,
					testId: "call-link-open-app-button",
					text: s._(
						/*BTDS*/
						""
					),
					xstyle: v.secondaryButtonOverride
				}) : c.jsx(r("WAWebLinkDeviceScreenPrimaryButton.react"), {
					onClick: we,
					testId: "call-link-download-button",
					text: s._(
						/*BTDS*/
						""
					),
					xstyle: v.secondaryButtonOverride
				})
			]
		})] });
		return c.jsxs("div", babelHelpers.extends({ ref: Ie }, (e || (e = r("stylex"))).props(o("WDSThemes").WDSLightTheme, v.page), { children: [
			c.jsx(o("WAWebFlex.react").FlexRow, {
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
			}),
			c.jsxs(o("WAWebFlex.react").FlexColumn, {
				align: "center",
				xstyle: v.cardArea,
				children: [c.jsxs("div", {
					className: "xb1i3fl x1g83kfv x3qq2k7 x2x8art x1qor8vf x178xt8z x1lun4ml xso031l xpilrb4 x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x1wove2r x10nd7l6 x12t7uq9 x14s4pk6 x4i7bpe xiaro03 x15zmtp0 xcm4ngb x1sgudl8 x17ud9ob x1oiqv2n xomcbdp x1uedy8c xh8yej3 x9f619 x78zum5 x1q0g3np xozqiw3 xrhn0ka x1nhvcw1 x1ay5qoh xe93d63 x1wh94ac x6s0dn4",
					children: [c.jsxs(o("WAWebFlex.react").FlexColumn, {
						align: "center",
						grow: 1,
						rowGap: 32,
						xstyle: v.infoSection,
						children: [
							c.jsx("span", {
								className: "x579bpy xo1l8bm x1ud3kw6 xiaed6b xipbhat x1yc453h x1m2wpe9",
								children: s._(
									/*BTDS*/
									"",
									[s._enum(I, {
										video: "video call",
										voice: "voice call"
									})]
								)
							}),
							F != null && c.jsxs(o("WAWebFlex.react").FlexRow, {
								align: "center",
								columnGap: 8,
								children: [B != null && B !== "" && !q ? c.jsx("img", {
									src: B,
									onError: function() {
										return U(!0);
									},
									className: "x1td3qas x10w6t97 x1c9tyrk xeusxvb x1pahc9y x1ertn4p xl1xv1r x2lah0s"
								}) : c.jsx("div", {
									className: "x1td3qas x10w6t97 x1c9tyrk xeusxvb x1pahc9y x1ertn4p xyp3urf x78zum5 x6s0dn4 xl56j7k x17t9dm2 x1f6kntn x1s688f x2lah0s",
									children: xe
								}), c.jsx("span", {
									className: "x1jchvi3",
									children: s._(
										/*BTDS*/
										"",
										[s._param("displayName", F)]
									)
								})]
							}),
							c.jsx(r("WDSTooltip.react"), {
								disabled: !Ce,
								label: s._(
									/*BTDS*/
									""
								),
								children: c.jsx(r("WAWebLinkDeviceScreenPrimaryButton.react"), {
									disabled: Ce,
									onClick: De,
									testId: "call-link-join-button",
									text: s._(
										/*BTDS*/
										""
									),
									xstyle: v.joinButtonOverride
								})
							})
						]
					}), Pe && c.jsxs(o("WAWebFlex.react").FlexColumn, {
						align: "center",
						shrink: 0,
						columnGap: 16,
						rowGap: 16,
						xstyle: v.previewSection,
						children: [c.jsx(r("WAWebCallLinkCameraPreview.react"), {
							accentColor: ie,
							deferMedia: !Ee,
							deviceId: X,
							isMicMuted: j || Ce,
							isVideoMuted: H,
							displayName: F,
							profilePicUrl: B,
							stopStreamRef: be
						}), c.jsxs(o("WAWebFlex.react").FlexRow, {
							justify: "center",
							xstyle: v.controlsGap,
							children: [k && c.jsx(r("WAWebCallLinkDeviceSelector.react"), {
								deferMedia: !Ee,
								kind: "videoinput",
								isMuted: H,
								onMuteToggle: function() {
									return G(function(e) {
										return !e;
									});
								},
								onDeviceSelect: Y,
								onPermissionDenied: pe,
								permissionDenied: ye,
								selectedDeviceId: X
							}), c.jsx(r("WAWebCallLinkDeviceSelector.react"), {
								deferMedia: !Ee,
								kind: "audio",
								isMuted: j,
								onMuteToggle: function() {
									return K(function(e) {
										return !e;
									});
								},
								onDeviceSelect: ee,
								onPermissionDenied: _e,
								permissionDenied: Ce,
								selectedDeviceId: Z,
								onSpeakerSelect: re,
								selectedSpeakerDeviceId: ne
							})]
						})]
					})]
				}), F != null && c.jsx(o("WAWebFlex.react").FlexRow, {
					align: "stretch",
					justify: "all",
					xstyle: v.miniCardsRow,
					children: Ae
				})]
			}),
			c.jsxs(o("WAWebFlex.react").FlexRow, {
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
			}),
			c.jsx(o("WAWebFlex.react").FlexRow, {
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
			}),
			c.jsx("div", {
				tabIndex: 0,
				onFocus: Te,
				className: "x10l6tqk x1i1rx1s xjm9jq1 x6ikm8r x10wlt62 xg01cxk"
			})
		] }));
	}
	S.displayName = S.name + " [from " + i.id + "]";
	function R() {
		var e = new URLSearchParams(window.location.search);
		e.delete(o("WAWebCallLinkParams").CLEAR_STALE_VC_PARAM), e.delete(o("WAWebCallLinkParams").USER_LOGGED_IN_PARAM), window.location.href = r("WAWebURLUtils").buildLoginUrlWithNext(window.location.pathname, e.toString());
	}
	function L(e) {
		var t = e.accentColorIndex, n = e.audioDenied, r = e.callType, o = e.idHash, a = e.isMicMuted, i = e.isVideoMuted, l = e.selectedAudioDeviceId, s = e.selectedSpeakerDeviceId, u = e.selectedVideoDeviceId, c = e.videoDenied, d = "/?cmd=call_link&call_type=" + encodeURIComponent(r) + "&call_token=" + encodeURIComponent(o);
		return u != null && (d += "&video_device=" + encodeURIComponent(u)), l != null && (d += "&audio_device=" + encodeURIComponent(l)), s != null && (d += "&speaker_device=" + encodeURIComponent(s)), (i || c) && (d += "&video_muted=1"), (a || n) && (d += "&audio_muted=1"), d += "&color_index=" + encodeURIComponent(String(t)), d += "&auto_join=1", d;
	}
	l.default = S;
}), 226);
