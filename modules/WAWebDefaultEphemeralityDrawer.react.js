__d("WAWebDefaultEphemeralityDrawer.react", [
	"fbt",
	"WALogger",
	"WATimeUtils",
	"WAWebAfterReadUtils",
	"WAWebClickableLink.react",
	"WAWebContactCollection",
	"WAWebDisappearingMessageChatPickerWamEvent",
	"WAWebDisappearingModeSettingChangeWamEvent",
	"WAWebDisappearingModeSettingEventsWamEvent",
	"WAWebDrawer.react",
	"WAWebDrawerBody.react",
	"WAWebDrawerHeader.react",
	"WAWebDrawerSection.react",
	"WAWebEphemeralKicNux.react",
	"WAWebEphemeralityDurations",
	"WAWebEphemeralityResolver",
	"WAWebExternalLink.react",
	"WAWebFaqUrl",
	"WAWebFlex.react",
	"WAWebModalManager",
	"WAWebMultiSelectDdm.react",
	"WAWebNux",
	"WAWebPrivacyVisibilityOption.react",
	"WAWebSetDisappearingModePrivacyAction",
	"WAWebText.react",
	"WAWebToast.react",
	"WAWebToastManager",
	"WAWebWamEnumDisappearingModeSettingEventNameType",
	"WAWebWamEnumDmChatPickerEntryPointType",
	"WAWebWamEnumDmChatPickerEventNameType",
	"WAWebWamEnumPreviousEphemeralityType",
	"nullthrows",
	"react",
	"useWAWebCallbackOnce",
	"useWAWebHandleAfterReadingClick",
	"useWAWebModelValues",
	"useWAWebNux",
	"useWAWebOnUnmount"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c, d = c || (c = o("react")), m = c, p = m.useEffect, _ = m.useMemo, f = m.useState, g = { learnMoreLink: {
		display: "x1rg5ohu",
		marginTop: "x1e1m7ul",
		fontSize: "x1f6kntn",
		$$css: !0
	} };
	function h(e) {
		return o("WAWebAfterReadUtils").isAfterReadEnabled() ? o("WAWebAfterReadUtils").isAfterReadDuration(e) : void 0;
	}
	function y(t) {
		var n, a, i = t.entryPoint, l = t.onClose, c = t.ref;
		o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[DM] DDM drawer opened"])));
		var m = _(function() {
			var e, t, n = o("WAWebEphemeralityResolver").getDisappearingModeSettingForUser(o("WAWebContactCollection").ContactCollection.getMeContact());
			return {
				duration: (e = n == null ? void 0 : n.duration) != null ? e : 0,
				settingTimestamp: (t = n == null ? void 0 : n.settingTimestamp) != null ? t : 0
			};
		}, []), y = r("nullthrows")(o("WAWebContactCollection").ContactCollection.getMeContact()), C = o("useWAWebModelValues").useModelValues(y, ["disappearingModeDuration", "disappearingModeSettingTimestamp"]), b = {
			duration: (n = C.disappearingModeDuration) != null ? n : 0,
			settingTimestamp: (a = C.disappearingModeSettingTimestamp) != null ? a : 0
		}, v = f(null), S = v[0], R = v[1], L = S != null ? S : b, E = L.duration > 0;
		p(function() {
			new (o("WAWebDisappearingModeSettingEventsWamEvent")).DisappearingModeSettingEventsWamEvent({
				disappearingModeSettingEventName: o("WAWebWamEnumDisappearingModeSettingEventNameType").DISAPPEARING_MODE_SETTING_EVENT_NAME_TYPE.DEFAULT_MESSAGE_TIMER_OPEN,
				disappearingModeEntryPoint: i,
				isAfterRead: h(m.duration)
			}).commit();
		}, []), p(function() {
			E && new (o("WAWebDisappearingMessageChatPickerWamEvent")).DisappearingMessageChatPickerWamEvent({
				dmChatPickerEntryPoint: o("WAWebWamEnumDmChatPickerEntryPointType").DM_CHAT_PICKER_ENTRY_POINT_TYPE.DEFAULT_MODE_SETTING,
				dmChatPickerEventName: o("WAWebWamEnumDmChatPickerEventNameType").DM_CHAT_PICKER_EVENT_NAME_TYPE.CHAT_PICKER_LINK_IMPRESSION,
				ephemeralityDuration: L.duration
			}).commit();
		}, [E]);
		var k = r("useWAWebNux")(o("WAWebNux").NUX.EPHEMERAL), I = k[0];
		p(function() {
			I && o("WAWebAfterReadUtils").isAfterReadOptionAvailable() && o("WAWebModalManager").ModalManager.openSupportModal(d.jsx(r("WAWebEphemeralKicNux.react"), { fromMe: !0 }));
		}, []);
		function T(e) {
			R({
				duration: e,
				settingTimestamp: o("WATimeUtils").unixTime()
			});
		}
		var D = r("useWAWebHandleAfterReadingClick")(L.duration, T);
		function x() {
			if (S != null) {
				var e = b.duration, t = b.settingTimestamp, n = S.duration;
				if (n !== e) {
					var r = o("WAWebAfterReadUtils").isAfterReadDuration(n) && o("WAWebAfterReadUtils").isAfterReadEnabled(), a;
					e > 0 && (a = o("WAWebAfterReadUtils").isAfterReadDuration(e) ? o("WAWebWamEnumPreviousEphemeralityType").PREVIOUS_EPHEMERALITY_TYPE.AFTER_READ : o("WAWebWamEnumPreviousEphemeralityType").PREVIOUS_EPHEMERALITY_TYPE.DISAPPEARING_MESSAGE), o("WAWebSetDisappearingModePrivacyAction").setDisappearingMode(n).then(function() {
						new (o("WAWebDisappearingModeSettingChangeWamEvent")).DisappearingModeSettingChangeWamEvent({
							disappearingModeEntryPoint: i,
							lastToggleTimestamp: t,
							newEphemeralityDuration: r ? void 0 : n,
							previousEphemeralityDuration: e,
							isAfterRead: h(n),
							afterReadDuration: r ? n : void 0,
							previousEphemeralityType: a,
							isSuccess: !0
						}).commit();
					}).catch(function() {
						new (o("WAWebDisappearingModeSettingChangeWamEvent")).DisappearingModeSettingChangeWamEvent({
							disappearingModeEntryPoint: i,
							lastToggleTimestamp: t,
							newEphemeralityDuration: r ? void 0 : n,
							previousEphemeralityDuration: e,
							isAfterRead: h(n),
							afterReadDuration: r ? n : void 0,
							previousEphemeralityType: a,
							isSuccess: !1
						}).commit(), o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
							"DDM duration change failed. Entry: ",
							" Previous: ",
							" New: ",
							""
						])), i, e, n).sendLogs("DDM-change-fail"), o("WAWebToastManager").ToastManager.open(d.jsx(o("WAWebToast.react").Toast, { msg: s._(
							/*BTDS*/
							""
						) }));
					});
				}
			}
		}
		var $ = r("useWAWebCallbackOnce")(x);
		r("useWAWebOnUnmount")(function() {
			$(), new (o("WAWebDisappearingModeSettingEventsWamEvent")).DisappearingModeSettingEventsWamEvent({
				disappearingModeSettingEventName: o("WAWebWamEnumDisappearingModeSettingEventNameType").DISAPPEARING_MODE_SETTING_EVENT_NAME_TYPE.DEFAULT_MESSAGE_TIMER_EXIT,
				disappearingModeEntryPoint: i,
				isAfterRead: h(L.duration)
			}).commit();
		});
		function P() {
			o("WAWebModalManager").ModalManager.open(d.jsx(r("WAWebMultiSelectDdm.react"), {
				initialDuration: L.duration,
				entryPoint: o("WAWebWamEnumDmChatPickerEntryPointType").DM_CHAT_PICKER_ENTRY_POINT_TYPE.DEFAULT_MODE_SETTING
			}));
		}
		function N() {
			new (o("WAWebDisappearingModeSettingEventsWamEvent")).DisappearingModeSettingEventsWamEvent({
				disappearingModeSettingEventName: o("WAWebWamEnumDisappearingModeSettingEventNameType").DISAPPEARING_MODE_SETTING_EVENT_NAME_TYPE.LEARN_MORE_CLICK,
				disappearingModeEntryPoint: i,
				isAfterRead: h(L.duration)
			}).commit();
		}
		function M(e) {
			$(), l(e);
		}
		return d.jsxs(r("WAWebDrawer.react"), {
			ref: c,
			testid: "ddm-drawer",
			tsNavigationData: {
				surface: "unknown",
				viewName: "default-ephemerality"
			},
			children: [d.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
				testid: "drawer-title-emphemerality",
				title: s._(
					/*BTDS*/
					""
				),
				onBack: M,
				focusBackOrCancel: !0,
				type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL
			}), d.jsx(r("WAWebDrawerBody.react"), { children: d.jsxs(r("WAWebDrawerSection.react"), {
				theme: "padding-no-vertical",
				animation: !1,
				children: [
					d.jsx(o("WAWebText.react").WAWebTextSectionTitle, {
						margin: [
							32,
							0,
							16,
							0
						],
						children: s._(
							/*BTDS*/
							""
						)
					}),
					d.jsx("div", {
						role: "radiogroup",
						"aria-label": s._(
							/*BTDS*/
							""
						),
						children: o("WAWebEphemeralityDurations").getDefaultEphemeralityDurations().map(function(e) {
							var t = e.disabled, n = e.label, a = e.type, i = e.value;
							if (a === "after_reading") {
								var l = t === !0;
								return l ? null : d.jsx(r("WAWebPrivacyVisibilityOption.react"), {
									text: n,
									subText: o("WAWebAfterReadUtils").isAfterReadDuration(L.duration) ? o("WAWebEphemeralityDurations").durationToLabel(L.duration) : void 0,
									selected: o("WAWebAfterReadUtils").isAfterReadDuration(L.duration),
									testid: "ddm-option-after-reading",
									onClick: D
								}, i);
							}
							return d.jsx(r("WAWebPrivacyVisibilityOption.react"), {
								text: n,
								selected: L.duration === i,
								testid: "ddm-option-" + i,
								onClick: function() {
									return T(i);
								}
							}, i);
						})
					}),
					d.jsxs(o("WAWebFlex.react").FlexColumn, {
						margin: [16, 0],
						children: [E ? d.jsx(o("WAWebText.react").WAWebTextMuted, { children: s._(
							/*BTDS*/
							"",
							[s._implicitParam("=m1", d.jsx(r("WAWebClickableLink.react"), {
								onClick: P,
								tabIndex: 0,
								children: s._(
									/*BTDS*/
									""
								)
							}))]
						) }) : d.jsx(o("WAWebText.react").WAWebTextMuted, { children: s._(
							/*BTDS*/
							""
						) }), d.jsx(o("WAWebExternalLink.react").ExternalLink, {
							href: o("WAWebFaqUrl").getEphemeralFaqUrl(),
							xstyle: g.learnMoreLink,
							onClick: N,
							children: s._(
								/*BTDS*/
								""
							)
						})]
					})
				]
			}) })]
		});
	}
	y.displayName = y.name + " [from " + i.id + "]", l.default = y;
}), 226);
