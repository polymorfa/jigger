__d("WAWebMultiSelectDdm.react", [
	"fbt",
	"WALogger",
	"WAWebAfterReadDurationPopup.react",
	"WAWebAfterReadNux.react",
	"WAWebAfterReadNuxLogging",
	"WAWebAfterReadUtils",
	"WAWebChangeEphemeralDurationChatAction",
	"WAWebChatCollection",
	"WAWebChatEphemerality",
	"WAWebChatGetters",
	"WAWebChatModel",
	"WAWebChevronCustomIcons",
	"WAWebDisappearingMessageChatPickerWamEvent",
	"WAWebDrawer.react",
	"WAWebDrawerBody.react",
	"WAWebDrawerHeader.react",
	"WAWebDrawerSection.react",
	"WAWebDropdownItem.react",
	"WAWebEphemeralConstants",
	"WAWebEphemeralityDurations",
	"WAWebModal.react",
	"WAWebModalManager",
	"WAWebNux",
	"WAWebPrivacyVisibilityOption.react",
	"WAWebSelectModal.react",
	"WAWebSelectModalFooter.react",
	"WAWebText.react",
	"WAWebToast.react",
	"WAWebToastManager",
	"WAWebUimUie.react",
	"WAWebUimUieMenu.react",
	"WAWebUnstyledButton.react",
	"WAWebWamEnumAfterReadScreenEntryPointType",
	"WAWebWamEnumDmChatPickerEventNameType",
	"WAWebWamEnumEphemeralSettingEntryPointType",
	"WDSIconIcChevronRight.react",
	"countWhere",
	"err",
	"gkx",
	"react",
	"useWAWebNux"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react")), d = u, m = d.useCallback, p = d.useEffect, _ = d.useRef, f = d.useState, g = {
		durationCTA: {
			display: "x78zum5",
			justifyContent: "x1qughib",
			alignItems: "x6s0dn4",
			textAlign: "x1yc453h",
			borderBottomWidth: "xso031l",
			borderBottomStyle: "x1q0q8m5",
			borderBottomColor: "xee4sfp",
			borderTopWidth: "x178xt8z",
			borderTopStyle: "x13fuv20",
			borderTopColor: "x1y55ic2",
			backgroundColor: "x1280gxy",
			":hover_backgroundColor": "x17gydlx",
			$$css: !0
		},
		secondaryColor: {
			color: "xhslqc4",
			$$css: !0
		},
		paddingVert16: {
			paddingTop: "x1p57kb1",
			paddingBottom: "xvpt6g3",
			$$css: !0
		},
		paddingHoriz32: {
			paddingInlineStart: "x1m4z3lf",
			paddingInlineEnd: "x1evaxtz",
			paddingLeft: null,
			paddingRight: null,
			$$css: !0
		}
	};
	function h(e) {
		var t = e.initialDuration, n = e.onSelect, a = f(!1), i = a[0], l = a[1], u = f(t != null && t > 0 ? t : o("WAWebEphemeralConstants").NINETY_DAYS), d = u[0], m = u[1], p = _(), h;
		if (i) {
			var y = function(t) {
				m(t), n(t);
			}, C = {
				menu: o("WAWebEphemeralityDurations").getDefaultEphemeralityDurations().filter(function(e) {
					return e.value > 0;
				}).map(function(e) {
					return c.jsx(o("WAWebDropdownItem.react").DropdownItem, {
						action: function() {
							return y(e.value);
						},
						selected: d === e.value,
						testid: "dm-duration-dd-" + e.value,
						children: e.label
					}, "dm-duration-dd-" + e.value);
				}),
				anchor: p.current
			};
			h = c.jsx(o("WAWebUimUie.react").UIE, {
				dismissOnWindowResize: !0,
				displayName: "ChatContextMenu",
				escapable: !0,
				popable: !0,
				requestDismiss: function() {
					return l(!1);
				},
				children: c.jsx(r("WAWebUimUieMenu.react"), { contextMenu: C })
			});
		}
		return c.jsxs(r("WAWebUnstyledButton.react"), {
			onClick: function() {
				return l(!0);
			},
			ref: p,
			xstyle: [
				g.durationCTA,
				g.paddingVert16,
				g.paddingHoriz32
			],
			children: [
				c.jsxs("div", { children: [c.jsx(o("WAWebText.react").WAWebTextTitle, { children: s._(
					/*BTDS*/
					""
				) }), c.jsx(o("WAWebText.react").WAWebTextMuted, {
					as: "h1",
					children: o("WAWebEphemeralityDurations").durationToLabel(d)
				})] }),
				c.jsx(o("WAWebChevronCustomIcons").ChevronDownCustomIcon, {
					iconXstyle: g.secondaryColor,
					height: 24
				}),
				h
			]
		});
	}
	h.displayName = h.name + " [from " + i.id + "]";
	function y(e) {
		var t = e.duration, n = e.onClick;
		return c.jsxs(r("WAWebUnstyledButton.react"), {
			onClick: n,
			testid: "dm-duration-cta",
			xstyle: [
				g.durationCTA,
				g.paddingVert16,
				g.paddingHoriz32
			],
			children: [c.jsxs("div", { children: [c.jsx(o("WAWebText.react").WAWebTextTitle, { children: s._(
				/*BTDS*/
				""
			) }), c.jsx(o("WAWebText.react").WAWebTextMuted, {
				as: "h1",
				children: o("WAWebEphemeralityDurations").durationToLabel(t)
			})] }), c.jsx(r("WDSIconIcChevronRight.react"), {
				directional: !0,
				iconXstyle: g.secondaryColor,
				height: 24,
				width: 24
			})]
		});
	}
	y.displayName = y.name + " [from " + i.id + "]";
	function C(e) {
		var t = e.duration, n = e.onBack, a = e.onSelectDuration, i = m(function() {
			o("WAWebModalManager").ModalManager.openSupportModal(c.jsx(r("WAWebAfterReadDurationPopup.react"), {
				initialDuration: o("WAWebAfterReadUtils").isAfterReadDuration(t) ? t : 0,
				onDurationSelected: a
			}));
		}, [t, a]);
		return c.jsx(o("WAWebModal.react").Modal, {
			type: o("WAWebModal.react").ModalTheme.Tower,
			onOverlayClick: n,
			children: c.jsxs(r("WAWebDrawer.react"), {
				testid: "dm-chat-picker-duration-page",
				disableNavigationLogging: !0,
				tsNavigationData: {
					surface: "unknown",
					viewName: "dm-chat-picker-duration"
				},
				children: [c.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
					testid: "dm-chat-picker-duration-header",
					title: s._(
						/*BTDS*/
						""
					),
					onBack: n,
					focusBackOrCancel: !0,
					type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL
				}), c.jsx(r("WAWebDrawerBody.react"), { children: c.jsx(r("WAWebDrawerSection.react"), {
					theme: "padding-no-vertical",
					animation: !1,
					children: c.jsx("div", {
						role: "radiogroup",
						"aria-label": s._(
							/*BTDS*/
							""
						),
						children: o("WAWebEphemeralityDurations").getDefaultEphemeralityDurations().map(function(e) {
							var n = e.disabled, l = e.label, s = e.type, u = e.value;
							if (u === 0) return null;
							if (s === "after_reading") {
								var d = n === !0;
								return d ? null : c.jsx(r("WAWebPrivacyVisibilityOption.react"), {
									text: l,
									subText: o("WAWebAfterReadUtils").isAfterReadDuration(t) ? o("WAWebEphemeralityDurations").durationToLabel(t) : void 0,
									selected: o("WAWebAfterReadUtils").isAfterReadDuration(t),
									testid: "dm-chat-picker-duration-after-reading",
									onClick: i
								}, u);
							}
							return c.jsx(r("WAWebPrivacyVisibilityOption.react"), {
								text: l,
								selected: t === u,
								testid: "dm-chat-picker-duration-" + u,
								onClick: function() {
									return a(u);
								}
							}, u);
						})
					})
				}) })]
			})
		});
	}
	C.displayName = C.name + " [from " + i.id + "]";
	function b(e, t, n) {
		if (o("WAWebAfterReadUtils").isAfterReadDuration(e)) return s._(
			/*BTDS*/
			"",
			[s._plural(t, "appliedChatCount")]
		);
		switch (e) {
			case o("WAWebEphemeralConstants").ONE_DAY: return s._(
				/*BTDS*/
				"",
				[s._plural(t, "appliedChatCount")]
			);
			case o("WAWebEphemeralConstants").SEVEN_DAYS: return s._(
				/*BTDS*/
				"",
				[s._plural(t, "appliedChatCount")]
			);
			case o("WAWebEphemeralConstants").NINETY_DAYS: return s._(
				/*BTDS*/
				"",
				[s._plural(t, "appliedChatCount")]
			);
			default: throw r("err")("Duration passed to DM Chat Picker invalid " + e);
		}
	}
	function v(t) {
		var n = t.entryPoint, a = t.initialDuration, i = t.ref, l = o("WAWebAfterReadUtils").isAfterReadOptionAvailable(), u = f(0), d = u[0], _ = u[1], g = f(a != null && a > 0 && a !== o("WAWebEphemeralityDurations").AFTER_READING_VALUE ? a : o("WAWebEphemeralConstants").NINETY_DAYS), v = g[0], S = g[1], R = f(!1), L = R[0], E = R[1];
		p(function() {
			new (o("WAWebDisappearingMessageChatPickerWamEvent")).DisappearingMessageChatPickerWamEvent({
				dmChatPickerEntryPoint: n,
				dmChatPickerEventName: o("WAWebWamEnumDmChatPickerEventNameType").DM_CHAT_PICKER_EVENT_NAME_TYPE.CHAT_PICKER_TRAY_OPEN,
				ephemeralityDuration: v
			}).commit();
		}, []);
		var k = m(function() {
			E(!0);
		}, []), I = m(function() {
			E(!1);
		}, []), T = r("useWAWebNux")(o("WAWebNux").NUX.EPHEMERAL_AFTER_READ), D = T[0], x = m(function(e) {
			if (e <= 0 || e === o("WAWebEphemeralityDurations").AFTER_READING_VALUE) {
				E(!1);
				return;
			}
			S(e), E(!1), D && o("WAWebAfterReadUtils").isAfterReadDuration(e) && (o("WAWebAfterReadNuxLogging").logArInterstitialScreenImpression({
				accountAfterReadDuration: e,
				afterReadScreenEntryPoint: o("WAWebWamEnumAfterReadScreenEntryPointType").AFTER_READ_SCREEN_ENTRY_POINT_TYPE.CHAT_PICKER_SCREEN,
				nuxVersion: o("WAWebAfterReadNuxLogging").AR_NUX_VERSION_AFTER_READ
			}), o("WAWebModalManager").ModalManager.openSupportModal(c.jsx(r("WAWebAfterReadNux.react"), {})));
		}, [D]), $ = m(function() {
			return o("WAWebChatCollection").ChatCollection.filter(function(e) {
				var t;
				return o("WAWebChatEphemerality").isEphemeralSettingOn(e) && o("WAWebChatEphemerality").shouldShowEphemeralSetting(e) && !(o("WAWebChatGetters").getIsGroup(e) && !((t = e.groupMetadata) != null && t.canSetEphemeralSetting()));
			});
		}, []), P = l ? c.jsx(y, {
			duration: v,
			onClick: k
		}) : c.jsx(h, {
			initialDuration: v,
			onSelect: S
		}), N = function(t, a) {
			var e = r("countWhere")(t, function(e) {
				return o("WAWebChatGetters").getIsGroup(e);
			}), i = r("countWhere")(t, function(e) {
				return e instanceof o("WAWebChatModel").Chat ? !o("WAWebChatEphemerality").isEphemeralSettingOn(e) : !1;
			});
			new (o("WAWebDisappearingMessageChatPickerWamEvent")).DisappearingMessageChatPickerWamEvent({
				dmChatPickerEntryPoint: n,
				dmChatPickerEventName: a,
				ephemeralityDuration: v,
				chatsSelected: t.length,
				groupChatsSelected: e,
				totalChatsInChatPicker: d,
				newlyEphemeralChats: i
			}).commit();
		}, M = function(t) {
			_(t.length);
		}, w = function(t) {
			var e = t;
			N(e, o("WAWebWamEnumDmChatPickerEventNameType").DM_CHAT_PICKER_EVENT_NAME_TYPE.CHAT_PICKER_TRAY_EXIT), o("WAWebModalManager").ModalManager.close();
		}, A = async function(n) {
			var t = n.selectedItems, a = t;
			N(a, o("WAWebWamEnumDmChatPickerEventNameType").DM_CHAT_PICKER_EVENT_NAME_TYPE.CHAT_PICKER_CHATS_SELECTED), o("WAWebModalManager").ModalManager.close();
			var i = 0, l = 0, u = await o("WAWebChangeEphemeralDurationChatAction").bulkChangeEphemeralDuration(a, v, o("WAWebWamEnumEphemeralSettingEntryPointType").EPHEMERAL_SETTING_ENTRY_POINT_TYPE.CHAT_PICKER), m = [], p = 0;
			u.map(function(e) {
				switch (e.status) {
					case "fulfilled":
						i++;
						break;
					case "rejected":
						l++;
						break;
					default: p++, m.length < 3 && m.push(e.status);
				}
			}), p > 0 && o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
				"bulkChangeEphemeralDuration: ",
				" unknown status ",
				""
			])), p, m), r("gkx")("26258") || (i > 0 && o("WAWebToastManager").ToastManager.open(c.jsx(o("WAWebToast.react").Toast, { msg: b(v, i, d) })), l > 0 && o("WAWebToastManager").ToastManager.open(c.jsx(o("WAWebToast.react").Toast, { msg: s._(
				/*BTDS*/
				"",
				[s._plural(l, "errorCount")]
			) })));
		}, F = function(t) {
			var e;
			return !!(t instanceof o("WAWebChatModel").Chat && !o("WAWebChatEphemerality").shouldShowEphemeralSetting(t) || t instanceof o("WAWebChatModel").Chat && o("WAWebChatGetters").getIsGroup(t) && !((e = t.groupMetadata) != null && e.canSetEphemeralSetting()));
		}, O = function(t, n) {
			if (n) return s._(
				/*BTDS*/
				""
			);
		};
		return c.jsxs(c.Fragment, { children: [c.jsx(o("WAWebSelectModal.react").SelectModal, {
			customHeader: P,
			customItemSecondaryText: O,
			ephemeralIcon: "conversation-header",
			excludeContacts: !0,
			getInitialItems: $,
			getSelectionSummary: function(t) {
				return s._(
					/*BTDS*/
					"",
					[s._plural(t.length, "number")]
				);
			},
			isDisabled: F,
			listType: o("WAWebSelectModal.react").ListType.ChatSelectModal,
			multipleSelectionFooterType: o("WAWebSelectModalFooter.react").FooterType.CONFIRM,
			onCancel: w,
			onConfirm: A,
			onDataLoaded: M,
			ref: i,
			singleSelectionFooterType: o("WAWebSelectModalFooter.react").FooterType.CONFIRM,
			testid: "dm-chat-picker-modal",
			title: s._(
				/*BTDS*/
				""
			)
		}), l && L ? c.jsx(C, {
			duration: v,
			onBack: I,
			onSelectDuration: x
		}) : null] });
	}
	v.displayName = v.name + " [from " + i.id + "]", l.default = v;
}), 226);
