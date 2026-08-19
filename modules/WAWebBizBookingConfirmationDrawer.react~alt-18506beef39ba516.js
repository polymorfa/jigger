__d("WAWebBizBookingConfirmationDrawer.react", [
	"fbt",
	"WALogger",
	"WAWebDrawer.react",
	"WAWebDrawerBlock.react",
	"WAWebDrawerBody.react",
	"WAWebDrawerHeader.react",
	"WAWebEmojiText.react",
	"WAWebExpandableText.react",
	"WAWebExternalLink.react",
	"WAWebFbtCommon",
	"WAWebFlex.react",
	"WAWebFormatConfiguration",
	"WAWebFormatEventDateString",
	"WAWebL10N",
	"WAWebLineHeight",
	"WAWebMarkdownLinkFormatMutator",
	"WAWebModal.react",
	"WAWebModalManager",
	"WAWebPhoneUtils",
	"WAWebVoipStartCall",
	"WAWebWamEnumCallFromUi",
	"WDSButton.react",
	"WDSIconIcCalendarMonth.react",
	"WDSIconIcCall.react",
	"WDSIconIcLink.react",
	"WDSIconIcLocationOn.react",
	"WDSIconIcMail.react",
	"WDSIconIcOpenInNew.react",
	"WDSIconIcStickyNote2.react",
	"WDSText.react",
	"WDSTextualLink.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u, c = u || (u = o("react")), d = u, m = d.useEffect, p = d.useRef, _ = d.useState, f = {
		sectionTitleWrapper: {
			paddingTop: "x16ovd2e",
			paddingInlineEnd: "xcldk2z",
			paddingBottom: "x12xbjc7",
			paddingInlineStart: "x1phvje8",
			$$css: !0
		},
		listItemContentWrapper: {
			columnGap: "xiyxwb5",
			$$css: !0
		},
		paddingEnd0: {
			paddingInlineEnd: "xyri2b",
			$$css: !0
		},
		drawerBlock: {
			paddingInlineStart: "x1phvje8",
			paddingInlineEnd: "xcldk2z",
			paddingLeft: null,
			paddingRight: null,
			paddingTop: "x889kno",
			paddingBottom: "x1a8lsjc",
			$$css: !0
		},
		spacingSingle: {
			paddingTop: "x16ovd2e",
			paddingInlineEnd: "x1nzty39",
			paddingBottom: "x12xbjc7",
			paddingInlineStart: "x12w63v0",
			$$css: !0
		},
		spacingHalf: {
			paddingTop: "x1tiyuxx",
			$$css: !0
		}
	}, g = 3;
	function h(e) {
		var t = encodeURIComponent(e), n = r("WAWebL10N").getNormalizedLocale();
		return "https://www.google.com/maps/search/?api=1&query=" + t + "&hl=" + n;
	}
	function y(e) {
		var t = e.actionLabel, n = e.description, a = e.icon, i = e.onActionClick, l = e.testid, s = e.textLimit, u = n != null ? n.toString() : null, d = p(null), h = _(!1), y = h[0], C = h[1];
		return m(function() {
			var e = d.current;
			if (e != null) {
				var t = new ResizeObserver(function() {
					var t = o("WAWebLineHeight").getNumberOfLines(e);
					C(t > g);
				});
				return t.observe(e), function() {
					return t.disconnect();
				};
			}
		}, []), c.jsx(r("WAWebDrawerBlock.react"), {
			blockXstyle: f.paddingEnd0,
			isRefresh: !0,
			multiline: !0,
			separator: !1,
			testid: l,
			xstyle: f.drawerBlock,
			children: c.jsxs(o("WAWebFlex.react").FlexRow, {
				align: y ? "start" : "center",
				xstyle: f.listItemContentWrapper,
				children: [c.jsx(o("WAWebFlex.react").FlexRow, {
					align: "center",
					justify: "center",
					shrink: 0,
					xstyle: f.spacingSingle,
					children: c.jsx(r("WDSText.react"), {
						colorName: "contentDeemphasized",
						type: "Body1",
						children: a
					})
				}), c.jsxs(o("WAWebFlex.react").FlexColumn, {
					grow: 1,
					children: [u != null && c.jsx(r("WDSText.react"), {
						ref: d,
						colorName: "contentDefault",
						type: "Body1",
						children: c.jsx(o("WAWebExpandableText.react").ExpandableText, {
							text: u,
							textLimit: s != null ? s : 1 / 0,
							children: function(t) {
								var e = t.textLimit;
								return c.jsx(o("WAWebEmojiText.react").EmojiText, {
									ellipsify: !0,
									formatters: [[[r("WAWebMarkdownLinkFormatMutator"), {}]]].concat(o("WAWebFormatConfiguration").UntrustedGroupDesc({ expandedFormattingEnabled: !0 })),
									inferLinesDirection: !0,
									multiline: !0,
									preserveWhitespace: !0,
									text: u,
									textLimit: e
								});
							}
						})
					}), t != null && i != null && c.jsx(r("WDSTextualLink.react"), {
						onClick: i,
						textConfig: "Body2",
						children: t
					})]
				})]
			})
		});
	}
	y.displayName = y.name + " [from " + i.id + "]";
	function C(e) {
		var t = e.icon, n = e.label, a = e.onActionClick, i = e.testid;
		return c.jsx(r("WAWebDrawerBlock.react"), {
			blockXstyle: f.paddingEnd0,
			isRefresh: !0,
			multiline: !0,
			onClick: a,
			separator: !1,
			testid: i,
			xstyle: f.drawerBlock,
			children: c.jsxs(o("WAWebFlex.react").FlexRow, {
				align: "center",
				xstyle: f.listItemContentWrapper,
				children: [c.jsx(o("WAWebFlex.react").FlexRow, {
					align: "center",
					justify: "center",
					shrink: 0,
					xstyle: f.spacingSingle,
					children: c.jsx(r("WDSText.react"), {
						colorName: "contentDeemphasized",
						type: "Body1",
						children: t
					})
				}), c.jsx(o("WAWebFlex.react").FlexColumn, {
					grow: 1,
					children: c.jsx(r("WDSTextualLink.react"), {
						textConfig: "Body1",
						children: n
					})
				})]
			})
		});
	}
	C.displayName = C.name + " [from " + i.id + "]";
	function b() {
		o("WAWebModalManager").ModalManager.open(c.jsx(o("WAWebModal.react").Modal, {
			actions: [c.jsx(r("WDSButton.react"), {
				label: r("WAWebFbtCommon")("OK"),
				onPress: o("WAWebModalManager").closeModalManager,
				testid: "popup-controls-ok",
				variant: "filled"
			}, "ok")],
			children: s._(
				/*BTDS*/
				""
			)
		}));
	}
	function v(t) {
		var n, a, i, l, u, d, p, g, v, S = t.bookingInfo, R = t.msg, L = t.onClose, E = t.phoneExistsPromise, k = E === void 0 ? null : E, I = _(!1), T = I[0], D = I[1], x = _(null), $ = x[0], P = x[1], N = (n = R.interactiveHeader) == null ? void 0 : n.title;
		m(function() {
			k == null || k.then(P).catch(function(t) {
				o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[booking] phone query failed"])));
			});
		}, [k]);
		var M = Math.floor(Date.parse(S.startDatetime) / 1e3), w = S.endDatetime != null ? Math.floor(Date.parse(S.endDatetime) / 1e3) : null, A = o("WAWebFormatEventDateString").getEventDateStringFor(M, w), F = function() {
			var e, t, n = new Date(S.startDatetime), r = S.endDatetime != null ? new Date(S.endDatetime) : new Date(Date.parse(S.startDatetime) + 3600 * 1e3), a = function(t) {
				return t.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";
			}, i = a(n), l = a(r), s = encodeURIComponent(N != null ? N : ""), u = encodeURIComponent((e = S.location) != null ? e : ""), c = encodeURIComponent((t = S.description) != null ? t : ""), d = "https://calendar.google.com/calendar/render?action=TEMPLATE&text=" + s + "&dates=" + i + "/" + l + "&location=" + u + "&details=" + c;
			o("WAWebExternalLink.react").openExternalLink(d);
		}, O = function() {
			S.location != null && o("WAWebExternalLink.react").openExternalLink(h(S.location));
		}, B = function() {
			S.bookingUrl != null && o("WAWebExternalLink.react").openExternalLink(S.bookingUrl);
		}, W = function() {
			T || $ == null || (D(!0), (async function() {
				try {
					await o("WAWebVoipStartCall").startWAWebVoipCall($.wid, !1, o("WAWebWamEnumCallFromUi").CALL_FROM_UI.INTERACTIVE_MESSAGE);
				} catch (e) {
					b();
				} finally {
					D(!1);
				}
			})());
		}, q = function() {
			S.bookingManagementUrl != null && o("WAWebExternalLink.react").openExternalLink(S.bookingManagementUrl);
		}, U = function() {
			var e = S.email;
			if (e != null) {
				var t = N != null ? encodeURIComponent(N) : "";
				o("WAWebExternalLink.react").openExternalLink("mailto:" + e + "?subject=" + t);
			}
		};
		return c.jsxs(r("WAWebDrawer.react"), {
			tsNavigationData: {
				surface: "unknown",
				viewName: "biz-booking-confirmation"
			},
			children: [
				c.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
					onCancel: L,
					title: (a = (i = S.displayContent) == null ? void 0 : i.displayBottomSheetHeader) != null ? a : s._(
						/*BTDS*/
						""
					),
					type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL
				}),
				c.jsx(r("WAWebDrawerBody.react"), { children: c.jsxs(o("WAWebFlex.react").FlexColumn, {
					align: "stretch",
					xstyle: f.spacingHalf,
					children: [
						N != null && c.jsx(o("WAWebFlex.react").FlexColumn, {
							shrink: 0,
							xstyle: f.sectionTitleWrapper,
							children: c.jsx(r("WDSText.react"), {
								colorName: "contentDefault",
								type: "Headline2",
								children: N
							})
						}),
						c.jsx(y, {
							actionLabel: (l = (u = S.displayContent) == null ? void 0 : u.displayAddToCalendarCtaText) != null ? l : s._(
								/*BTDS*/
								""
							),
							description: A,
							icon: c.jsx(r("WDSIconIcCalendarMonth.react"), {
								height: 24,
								width: 24
							}),
							onActionClick: F,
							testid: "booking-confirmation-drawer-add-to-calendar"
						}),
						S.location != null && c.jsx(y, {
							actionLabel: (d = (p = S.displayContent) == null ? void 0 : p.displayViewOnMapsCtaText) != null ? d : s._(
								/*BTDS*/
								""
							),
							description: S.location,
							icon: c.jsx(r("WDSIconIcLocationOn.react"), {
								height: 24,
								width: 24
							}),
							textLimit: 200,
							onActionClick: O,
							testid: "booking-confirmation-drawer-view-on-maps"
						}),
						S.bookingUrl != null && c.jsx(C, {
							icon: c.jsx(r("WDSIconIcLink.react"), {
								testid: "ic-link",
								height: 24,
								width: 24
							}),
							label: S.bookingUrl,
							onActionClick: B,
							testid: "booking-confirmation-drawer-url"
						}),
						S.description != null && c.jsx(y, {
							description: S.description,
							icon: c.jsx(r("WDSIconIcStickyNote2.react"), {
								height: 24,
								width: 24
							}),
							testid: "booking-confirmation-drawer-description",
							textLimit: 200
						}),
						S.phoneNumber != null && ($ != null ? c.jsx(C, {
							icon: c.jsx(r("WDSIconIcCall.react"), {
								height: 24,
								width: 24
							}),
							label: o("WAWebPhoneUtils").formatPhone(S.phoneNumber),
							onActionClick: W,
							testid: "booking-confirmation-drawer-phone"
						}) : c.jsx(y, {
							description: o("WAWebPhoneUtils").formatPhone(S.phoneNumber),
							icon: c.jsx(r("WDSIconIcCall.react"), {
								height: 24,
								width: 24
							}),
							testid: "booking-confirmation-drawer-phone"
						})),
						S.email != null && c.jsx(C, {
							icon: c.jsx(r("WDSIconIcMail.react"), {
								height: 24,
								width: 24
							}),
							label: S.email,
							onActionClick: U,
							testid: "booking-confirmation-drawer-email"
						})
					]
				}) }),
				S.bookingManagementUrl != null && c.jsx("div", {
					className: "x1xrf6ya xde1mab xscbp6u x1iw51ew x178xt8z x13fuv20 xx42vgk x1280gxy",
					children: c.jsx(r("WDSButton.react"), {
						Icon: r("WDSIconIcOpenInNew.react"),
						label: (g = (v = S.displayContent) == null ? void 0 : v.displayManageBookingCtaText) != null ? g : s._(
							/*BTDS*/
							""
						),
						onPress: q,
						size: "medium",
						testid: "booking-confirmation-drawer-manage-button",
						variant: "filled",
						widthMode: "flexible"
					})
				})
			]
		});
	}
	v.displayName = v.name + " [from " + i.id + "]", l.default = v;
}), 226);
