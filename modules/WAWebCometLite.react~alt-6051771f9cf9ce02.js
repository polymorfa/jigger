__d("WAWebCometLite.react", [
	"fbt",
	"WAWebCallCollection",
	"WAWebCallNotificationBus",
	"WAWebCometLiteContactData",
	"WAWebCometLiteContactDetail.react",
	"WAWebCometLiteContactsRow.react",
	"WAWebCometLiteE2EFooter.react",
	"WAWebCometLiteInCall.react",
	"WAWebCometLiteIncomingCall.react",
	"WAWebCometLiteProfileButton.react",
	"WAWebCometLiteRecentCalls.react",
	"WAWebCometLiteTabButton.react",
	"WAWebFlex.react",
	"WAWebModalManagerImplWrapper.react",
	"WAWebThemeContext",
	"WAWebUserPrefsGeneral",
	"WAWebVoipEventConstants",
	"WAWebWaLogoIcon.react",
	"WDSContextualLayer.react",
	"WDSIconIcContacts.react",
	"WDSIconIcHistory.react",
	"WDSThemes",
	"react",
	"useWAWebEventTargetValue",
	"useWAWebListener"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = e, d = c.useMemo, m = c.useState, p = {
		root: {
			boxSizing: "x9f619",
			width: "xh8yej3",
			height: "x5yr21d",
			paddingInlineStart: "xu7uy1i",
			paddingInlineEnd: "x1t7qo4d",
			paddingLeft: null,
			paddingRight: null,
			paddingTop: "x14a8spa",
			paddingBottom: "x1c76a8b",
			backgroundColor: "x1280gxy",
			$$css: !0
		},
		headerLogo: {
			color: "x1r8hjv8",
			$$css: !0
		},
		headerActions: {
			justifySelf: "x7v7x1q",
			columnGap: "x1aj3ljl",
			$$css: !0
		},
		detailRoot: {
			width: "xh8yej3",
			height: "x5yr21d",
			$$css: !0
		},
		contactsTabBody: {
			flexGrow: "x1iyjqo2",
			width: "xh8yej3",
			$$css: !0
		},
		contactsRoot: {
			width: "xh8yej3",
			$$css: !0
		},
		width100: {
			width: "xh8yej3",
			$$css: !0
		}
	};
	function _(e) {
		var t, n = d(function() {
			return {
				theme: "dark",
				systemThemeMode: !1,
				setTheme: o("WAWebThemeContext").setTheme,
				setSystemThemeMode: o("WAWebUserPrefsGeneral").setSystemThemeMode
			};
		}, []), a = m("contacts"), i = a[0], l = a[1], c = m("list"), _ = c[0], f = c[1], g = m(null), h = g[0], y = g[1], C = r("useWAWebEventTargetValue")(r("WAWebCallCollection"), o("WAWebVoipEventConstants").getChangeEvent(o("WAWebVoipEventConstants").VoipCallCollectionEvents.ACTIVE_CALL), function() {
			return r("WAWebCallCollection").activeCall;
		}), b = m(null), v = b[0], S = b[1];
		o("useWAWebListener").useListener(r("WAWebCallNotificationBus"), "alert_call", function(e) {
			e.isGroup || S({
				callId: e.msgId,
				isVideo: e.isVideo,
				wid: e.wid
			});
		}), o("useWAWebListener").useListener(r("WAWebCallNotificationBus"), "cancel_call", function(e) {
			S(function(t) {
				return (t == null ? void 0 : t.callId) === e.msgId ? null : t;
			});
		}), o("useWAWebListener").useListener(r("WAWebCallNotificationBus"), "missed_call", function(e) {
			S(function(t) {
				return (t == null ? void 0 : t.callId) === e.msgId ? null : t;
			});
		});
		var R = function(t) {
			y(t), f("contact_detail");
		}, L = i === "contacts" ? u.jsx(o("WAWebFlex.react").FlexColumn, {
			xstyle: p.contactsRoot,
			grow: 1,
			children: u.jsx(o("WAWebFlex.react").FlexColumn, {
				justify: "center",
				xstyle: p.contactsTabBody,
				children: u.jsx(r("WAWebCometLiteContactsRow.react"), { onSelect: R })
			})
		}) : i === "recent_calls" ? u.jsx(r("WAWebCometLiteRecentCalls.react"), { onSelect: R }) : (function() {
			throw Error("Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " + i);
		})();
		if (v != null) return u.jsx(o("WAWebThemeContext").ThemeContext.Provider, {
			value: n,
			children: u.jsxs(o("WAWebFlex.react").FlexColumn, {
				xstyle: [p.detailRoot, o("WDSThemes").WDSDarkTheme],
				grow: 1,
				children: [u.jsx(r("WAWebCometLiteIncomingCall.react"), {
					callId: v.callId,
					isVideo: v.isVideo,
					onDismiss: function() {
						return S(null);
					},
					wid: v.wid
				}), u.jsx(o("WAWebModalManagerImplWrapper.react").ModalManagerImplWrapper, { type: "modal" })]
			})
		});
		var E = (t = C == null ? void 0 : C.peerJid) != null ? t : null;
		return E != null ? u.jsx(o("WAWebThemeContext").ThemeContext.Provider, {
			value: n,
			children: u.jsxs(o("WAWebFlex.react").FlexColumn, {
				xstyle: [p.detailRoot, o("WDSThemes").WDSDarkTheme],
				grow: 1,
				children: [u.jsx(r("WAWebCometLiteInCall.react"), {
					wid: E,
					selfWid: o("WAWebCometLiteContactData").getMeUserOrNull()
				}), u.jsx(o("WAWebModalManagerImplWrapper.react").ModalManagerImplWrapper, { type: "modal" })]
			})
		}) : _ === "contact_detail" && h != null ? u.jsx(o("WAWebThemeContext").ThemeContext.Provider, {
			value: n,
			children: u.jsx(o("WDSContextualLayer.react").WDSContextualLayer, { children: u.jsxs(o("WAWebFlex.react").FlexColumn, {
				xstyle: [p.detailRoot, o("WDSThemes").WDSDarkTheme],
				grow: 1,
				children: [u.jsx(r("WAWebCometLiteContactDetail.react"), {
					wid: h.wid,
					contact: h.contact,
					chat: h.chat,
					onBack: function() {
						return f("list");
					},
					headerEnd: u.jsx(r("WAWebCometLiteProfileButton.react"), {})
				}), u.jsx(o("WAWebModalManagerImplWrapper.react").ModalManagerImplWrapper, { type: "modal" })]
			}) })
		}) : u.jsx(o("WAWebThemeContext").ThemeContext.Provider, {
			value: n,
			children: u.jsxs(o("WAWebFlex.react").FlexColumn, {
				xstyle: [p.root, o("WDSThemes").WDSDarkTheme],
				testid: "wa-web-lite-root",
				children: [
					u.jsxs("header", {
						className: "xrvj5dj xh8yej3 x134kloy x6s0dn4 xs2akgl xvpt6g3",
						"data-testid": "wa-web-lite-header",
						children: [
							u.jsx("div", {
								className: "x1lqcxt8",
								children: u.jsx(o("WAWebWaLogoIcon.react").WaLogoIcon, {
									height: 48,
									width: 48,
									iconXstyle: p.headerLogo,
									"aria-label": s._(
										/*BTDS*/
										""
									)
								})
							}),
							u.jsxs(o("WAWebFlex.react").FlexRow, {
								align: "center",
								xstyle: p.headerActions,
								testid: "wa-web-lite-header-actions",
								children: [u.jsx(r("WAWebCometLiteTabButton.react"), {
									isActive: i === "contacts",
									Icon: r("WDSIconIcContacts.react"),
									onPress: function() {
										return l("contacts");
									},
									testid: "wa-web-lite-contacts-button",
									label: s._(
										/*BTDS*/
										""
									)
								}), u.jsx(r("WAWebCometLiteTabButton.react"), {
									isActive: i === "recent_calls",
									Icon: r("WDSIconIcHistory.react"),
									onPress: function() {
										return l("recent_calls");
									},
									testid: "wa-web-lite-recent-calls-button",
									label: s._(
										/*BTDS*/
										""
									)
								})]
							}),
							u.jsx("div", {
								className: "x1qab1bc",
								children: u.jsx(r("WAWebCometLiteProfileButton.react"), {})
							})
						]
					}),
					u.jsx(o("WAWebFlex.react").FlexRow, {
						grow: 1,
						justify: "center",
						align: "center",
						xstyle: p.width100,
						children: L
					}),
					u.jsx(r("WAWebCometLiteE2EFooter.react"), {})
				]
			})
		});
	}
	_.displayName = _.name + " [from " + i.id + "]", l.default = _;
}), 226);
