__d("WAWebPrivacySettingsDrawer.react", [
	"fbt",
	"WALogger",
	"WAWebAccountSyncJob",
	"WAWebApiPrivacyDisallowedList",
	"WAWebBlocklistCollection",
	"WAWebChevronIcon.react",
	"WAWebClickableLink.react",
	"WAWebCmd",
	"WAWebContactCollection",
	"WAWebContextualBannerConfig",
	"WAWebContextualBannerWrapperLoadable",
	"WAWebDefenseModeLockedInterstitial.react",
	"WAWebDefenseModeUtils",
	"WAWebDisableLinkPreviewsAction",
	"WAWebDrawer.react",
	"WAWebDrawerBody.react",
	"WAWebDrawerHeader.react",
	"WAWebDrawerItem.react",
	"WAWebDrawerSection.react",
	"WAWebEphemeralityDurations",
	"WAWebExternalLink.react",
	"WAWebFaqUrl",
	"WAWebFbtCommon",
	"WAWebFbtIntlList",
	"WAWebKeyboardRotateFocus.react",
	"WAWebKeyboardTabUtils",
	"WAWebLoadingDrawer.react",
	"WAWebMiscGatingUtils",
	"WAWebPrivacyScreenModeToggle.react",
	"WAWebPrivacySettings",
	"WAWebPrivacySettingsClickWamEvent",
	"WAWebScreenLockTimerOptions",
	"WAWebSetPrivacyForOneCategoryAction",
	"WAWebSettingsFBT",
	"WAWebStatusPostingUtils",
	"WAWebTabOrder",
	"WAWebToast.react",
	"WAWebToastManager",
	"WAWebUserPrefsGeneral",
	"WAWebUserPrefsScreenLock",
	"WAWebVoipGatingUtils",
	"WAWebVoipRelayAllCallsAction",
	"WAWebWamEnumPrivacyControlEntryPointType",
	"WAWebWamEnumPrivacyControlItemType",
	"WDSSwitch.react",
	"err",
	"nullthrows",
	"react",
	"react-compiler-runtime",
	"useWAWebListener",
	"useWAWebModelValues",
	"useWAWebStatusPrivacySettingConfig"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c, d, m = d || (d = o("react")), p = d, _ = p.useEffect, f = p.useState, g = {
		drawerTitle: {
			paddingTop: "x134lwj9",
			paddingInlineEnd: "xyri2b",
			paddingBottom: "x1i2zvha",
			paddingInlineStart: "x1c1uobl",
			$$css: !0
		},
		chevronIcon: {
			color: "x1164gpu",
			height: "x17rw0jw",
			$$css: !0
		}
	};
	function h(e, t) {
		new (o("WAWebPrivacySettingsClickWamEvent")).PrivacySettingsClickWamEvent({
			privacyControlItem: e,
			privacyControlEntryPoint: t
		}).commit();
	}
	function y(e) {
		var t = e.url;
		return m.jsx(r("WAWebClickableLink.react"), {
			onClick: function(n) {
				o("WAWebExternalLink.react").openExternalLink(t), n.stopPropagation();
			},
			children: r("WAWebFbtCommon")("Learn more")
		});
	}
	y.displayName = y.name + " [from " + i.id + "]";
	function C(t) {
		var n, a, i, l, u = t.onClose, c = t.onOpenBlockedContacts, d = t.onOpenEphemeralityDrawer, p = t.onOpenPrivacyScreenCustomize, C = t.onOpenScreenLockDrawer, b = t.onOpenStatusPrivacySettingDrawer, k = t.onOpenVisibilityEditDrawer, I = t.ref, T = f(function() {
			return S(o("WAWebUserPrefsGeneral").getUserPrivacySettings());
		}), D = T[0], x = T[1], $ = f({
			about: null,
			groupadd: null,
			last: null,
			profile: null,
			pix: null
		}), P = $[0], N = $[1], M = o("useWAWebStatusPrivacySettingConfig").useWAWebStatusPrivacySettingConfig(), w = M.statusPostingPrivacyConfig, A = r("nullthrows")(o("WAWebContactCollection").ContactCollection.getMeContact()), F = o("useWAWebModelValues").useModelValues(A, ["disappearingModeDuration"]), O = F.disappearingModeDuration;
		function B(e) {
			var t = S(e.privacySettings);
			if (t == null) throw r("err")("Incomplete privacy settings: " + Object.keys(o("WAWebUserPrefsGeneral").getUserPrivacySettings()).join(", "));
			x(t), N(o("WAWebApiPrivacyDisallowedList").disallowedRowsToLists(e.privacyDisallowedRows));
		}
		_(function() {
			var t = new AbortController();
			return D == null && (async function() {
				try {
					var n = await o("WAWebAccountSyncJob").updatePrivacySettings();
					if (t.signal.aborted) return;
					B(n);
				} catch (t) {
					t instanceof Error && o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["privacy_settings_drawer: get privacy settings failed"]))).catching(t).sendLogs("privacy_settings_drawer: get privacy settings failed"), u(), o("WAWebToastManager").ToastManager.open(m.jsx(o("WAWebToast.react").Toast, { msg: s._(
						/*BTDS*/
						""
					) }));
				}
			})(), function() {
				return t.abort();
			};
		}, []), _(function() {
			var e = new AbortController();
			return (async function() {
				var t = await o("WAWebApiPrivacyDisallowedList").queryDisallowedLists();
				e.signal.aborted || N(t);
			})(), function() {
				return e.abort();
			};
		}, []), o("useWAWebListener").useListener(o("WAWebCmd").Cmd, "account_sync_for_privacy_from_bridge", function(e) {
			B(e);
		});
		var W = f(function() {
			return o("WAWebDefenseModeUtils").getWamEnumIfSettingLockedByDefenseMode("disableLinkPreviews");
		}), q = W[0], U = W[1], V = q != null, H = f(function() {
			return o("WAWebDefenseModeUtils").getWamEnumIfSettingLockedByDefenseMode("messages");
		}), G = H[0], z = H[1], j = G != null;
		o("useWAWebListener").useListener(o("WAWebUserPrefsGeneral").privacySettingsEventEmitter, "all", function() {
			var e = o("WAWebDefenseModeUtils").getWamEnumIfSettingLockedByDefenseMode("disableLinkPreviews");
			e !== q && U(e);
			var t = o("WAWebDefenseModeUtils").getWamEnumIfSettingLockedByDefenseMode("messages");
			t !== G && z(t);
			var n = S(o("WAWebUserPrefsGeneral").getUserPrivacySettings());
			n != null && n.disallowAllP2p !== (D == null ? void 0 : D.disallowAllP2p) && x(n);
		});
		var K = s._(
			/*BTDS*/
			""
		);
		if (!D) return m.jsx(r("WAWebLoadingDrawer.react"), {
			title: K,
			error: !1
		});
		var Q = o("WAWebMiscGatingUtils").isDefaultDisappearingMessagesEnabled(), X = D.about, Y = D.disableLinkPreviews, J = D.disallowAllP2p, Z = D.groupAdd, ee = D.lastSeen, te = D.messages, ne = D.online, re = D.profilePicture, oe = D.readReceipts, ae = [R(ee, (n = P.last) == null ? void 0 : n.disallowedList.length)];
		ee !== o("WAWebPrivacySettings").VISIBILITY.all && ne === o("WAWebPrivacySettings").ONLINE_VISIBILITY.all && ae.push(R(ne));
		var ie = r("WAWebFbtIntlList")(ae, r("WAWebFbtIntlList").CONJUNCTIONS.NONE, r("WAWebFbtIntlList").DELIMITERS.COMMA), le = m.jsx(v, {
			title: o("WAWebSettingsFBT").privacyLastSeenOnlineEnabledTitle(),
			onClick: function() {
				k("lastSeen"), h(o("WAWebWamEnumPrivacyControlItemType").PRIVACY_CONTROL_ITEM_TYPE.LAST_SEEN_AND_ONLINE, o("WAWebWamEnumPrivacyControlEntryPointType").PRIVACY_CONTROL_ENTRY_POINT_TYPE.PRIVACY_SETTINGS);
			},
			testid: "last-seen-and-online-privacy-settings-item",
			children: m.jsxs("span", { children: [" ", ie] })
		}), se = o("WAWebBlocklistCollection").BlocklistCollection.dedupedList().length, ue = s._(
			/*BTDS*/
			""
		), ce = s._(
			/*BTDS*/
			""
		), de = m.jsx(r("WAWebDrawerItem.react"), {
			title: o("WAWebSettingsFBT").antiBrigadingTitle(),
			tabIndex: -1,
			dataTab: o("WAWebTabOrder").TAB_ORDER.DRAWER_CONTENT,
			icon: m.jsx("div", {
				className: "x1849jeq x78zum5 xl56j7k",
				children: m.jsx(r("WDSSwitch.react"), {
					value: te === o("WAWebPrivacySettings").ALL_CONTACTS.contacts || j,
					disabled: j,
					"aria-label": o("WAWebSettingsFBT").antiBrigadingTitle().toString() + ". " + o("WAWebSettingsFBT").antiBrigadingDescription().toString()
				})
			}),
			theme: "privacy",
			isLastItem: !1,
			disableKeydownHandling: !1,
			disabled: j,
			onDisabledClick: function() {
				G != null && o("WAWebDefenseModeLockedInterstitial.react").openDefenseModeLockedInterstitialGlobal(G, te === o("WAWebPrivacySettings").ALL_CONTACTS.contacts ? "on" : "off");
			},
			onClick: function() {
				E({
					messages: te,
					privacySettings: D,
					setPrivacySettings: x
				});
			},
			testid: "anti-brigading-privacy-settings-item",
			children: m.jsxs("div", {
				className: "xcldk2z",
				children: [
					o("WAWebSettingsFBT").antiBrigadingDescription(),
					" ",
					m.jsx(y, { url: o("WAWebFaqUrl").getAntiBrigadingFaqUrl() })
				]
			})
		}), me = o("WAWebVoipGatingUtils").isCallingEnabled() ? m.jsx(r("WAWebDrawerItem.react"), {
			title: o("WAWebSettingsFBT").protectIpInCallsTitle(),
			tabIndex: -1,
			icon: m.jsx("div", {
				className: "x1849jeq x78zum5 xl56j7k",
				children: m.jsx(r("WDSSwitch.react"), {
					value: J,
					"aria-label": o("WAWebSettingsFBT").protectIpInCallsTitle().toString() + ". " + o("WAWebSettingsFBT").protectIpInCallsDescription().toString()
				})
			}),
			theme: "privacy",
			isLastItem: !1,
			disableKeydownHandling: !0,
			onClick: function() {
				h(o("WAWebWamEnumPrivacyControlItemType").PRIVACY_CONTROL_ITEM_TYPE.CALLS, o("WAWebWamEnumPrivacyControlEntryPointType").PRIVACY_CONTROL_ENTRY_POINT_TYPE.PRIVACY_SETTINGS);
				var e = !J, t = babelHelpers.extends({}, D, { disallowAllP2p: e });
				x(t), o("WAWebVoipRelayAllCallsAction").setRelayAllCalls(e);
			},
			testid: "protect-ip-in-calls-privacy-settings-item",
			children: m.jsxs("div", {
				className: "xcldk2z",
				children: [
					o("WAWebSettingsFBT").protectIpInCallsDescription(),
					" ",
					m.jsx(y, { url: o("WAWebFaqUrl").getProtectIpInCallsFaqUrl() })
				]
			})
		}) : null, pe = w ? m.jsx(v, {
			title: o("WAWebSettingsFBT").privacyStatusPostingTitle(),
			onClick: b,
			testid: "status-posting-privacy-settings-item",
			children: m.jsx("span", { children: o("WAWebStatusPostingUtils").formatStatusSetting(w) })
		}) : null, _e = async function(t) {
			x(babelHelpers.extends({}, D, { disableLinkPreviews: t })), o("WAWebDisableLinkPreviewsAction").setDisableLinkPreviews(t);
		};
		return m.jsx(r("WAWebDrawer.react"), {
			ref: I,
			theme: "striped",
			testid: "privacy-settings-drawer",
			tsNavigationData: {
				surface: "unknown",
				viewName: "privacy-settings"
			},
			children: m.jsx(o("WAWebKeyboardRotateFocus.react").RotateFocus, {
				focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE,
				children: m.jsxs("div", {
					className: "x5yr21d x78zum5 xdt5ytf x6ikm8r x10wlt62",
					children: [m.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
						testid: "drawer-title-privacy",
						title: K,
						onBack: u,
						type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
						focusBackOrCancel: !0
					}), m.jsxs(r("WAWebDrawerBody.react"), { children: [
						m.jsx(o("WAWebContextualBannerWrapperLoadable").ContextualBannerWrapperLoadable, { bannerListOrderedByPriority: [{
							id: o("WAWebContextualBannerConfig").ContextualBannerId.AppLockUpsell,
							onClick: C
						}] }),
						m.jsxs(r("WAWebDrawerSection.react"), {
							title: o("WAWebSettingsFBT").privacyPersonalInfoHeaderTitle(),
							titleXStyle: g.drawerTitle,
							theme: "padding-no-vertical",
							animation: !1,
							ellipsify: !1,
							children: [
								le,
								m.jsx(v, {
									title: o("WAWebSettingsFBT").privacyProfilePhotoTitle(),
									onClick: function() {
										k("profilePicture"), h(o("WAWebWamEnumPrivacyControlItemType").PRIVACY_CONTROL_ITEM_TYPE.PROFILE_PHOTO, o("WAWebWamEnumPrivacyControlEntryPointType").PRIVACY_CONTROL_ENTRY_POINT_TYPE.PRIVACY_SETTINGS);
									},
									testid: "profile-photo-privacy-settings-item",
									children: m.jsx("span", { children: R(re, (a = P.profile) == null ? void 0 : a.disallowedList.length) })
								}),
								m.jsx(v, {
									title: o("WAWebSettingsFBT").privacyAboutTitle(),
									onClick: function() {
										k("about"), h(o("WAWebWamEnumPrivacyControlItemType").PRIVACY_CONTROL_ITEM_TYPE.ABOUT, o("WAWebWamEnumPrivacyControlEntryPointType").PRIVACY_CONTROL_ENTRY_POINT_TYPE.PRIVACY_SETTINGS);
									},
									testid: "about-privacy-settings-item",
									children: m.jsx("span", { children: R(X, (i = P.about) == null ? void 0 : i.disallowedList.length) })
								}),
								pe,
								m.jsx(r("WAWebDrawerItem.react"), {
									title: o("WAWebSettingsFBT").privacyReadReceiptsTitle(),
									tabIndex: -1,
									dataTab: o("WAWebTabOrder").TAB_ORDER.DRAWER_CONTENT,
									icon: m.jsx("div", {
										className: "x1849jeq x78zum5 xl56j7k",
										children: m.jsx(r("WDSSwitch.react"), {
											value: oe === o("WAWebPrivacySettings").ALL_NONE.all,
											"aria-label": o("WAWebSettingsFBT").privacyReadReceiptsTitle().toString() + ". " + ue.toString()
										})
									}),
									theme: "privacy",
									isLastItem: !0,
									disableKeydownHandling: !0,
									onClick: function() {
										h(o("WAWebWamEnumPrivacyControlItemType").PRIVACY_CONTROL_ITEM_TYPE.READ_RECEIPT, o("WAWebWamEnumPrivacyControlEntryPointType").PRIVACY_CONTROL_ENTRY_POINT_TYPE.PRIVACY_SETTINGS), L(D, x, oe);
									},
									testid: "read-receipts-privacy-settings-item",
									children: m.jsx("div", {
										className: "xcldk2z",
										children: ue
									})
								})
							]
						}),
						Q && m.jsx(r("WAWebDrawerSection.react"), {
							theme: "padding-no-vertical",
							title: s._(
								/*BTDS*/
								""
							),
							titleXStyle: g.drawerTitle,
							animation: !1,
							children: m.jsx(v, {
								title: o("WAWebSettingsFBT").privacyDDMTitle(),
								onClick: function() {
									h(o("WAWebWamEnumPrivacyControlItemType").PRIVACY_CONTROL_ITEM_TYPE.DDM_TIMER, o("WAWebWamEnumPrivacyControlEntryPointType").PRIVACY_CONTROL_ENTRY_POINT_TYPE.PRIVACY_SETTINGS), d();
								},
								isLastItem: !0,
								testid: "ddm-settings-item",
								children: m.jsx("span", {
									"data-testid": "ddm-settings-item-value",
									children: o("WAWebEphemeralityDurations").durationToLabel(O)
								})
							})
						}),
						m.jsxs(r("WAWebDrawerSection.react"), {
							theme: Q ? "padding" : "padding-no-vertical",
							animation: !1,
							children: [
								m.jsx(v, {
									title: o("WAWebSettingsFBT").privacyGroupsTitle(),
									onClick: function() {
										h(o("WAWebWamEnumPrivacyControlItemType").PRIVACY_CONTROL_ITEM_TYPE.GROUPS, o("WAWebWamEnumPrivacyControlEntryPointType").PRIVACY_CONTROL_ENTRY_POINT_TYPE.PRIVACY_SETTINGS), k("groupAdd");
									},
									testid: "groups-privacy-settings-item",
									children: m.jsx("span", { children: R(Z, (l = P.groupadd) == null ? void 0 : l.disallowedList.length) })
								}),
								m.jsx(v, {
									title: o("WAWebSettingsFBT").privacyBlockedTitle(),
									onClick: function() {
										h(o("WAWebWamEnumPrivacyControlItemType").PRIVACY_CONTROL_ITEM_TYPE.BLOCKED, o("WAWebWamEnumPrivacyControlEntryPointType").PRIVACY_CONTROL_ENTRY_POINT_TYPE.PRIVACY_SETTINGS), c();
									},
									testid: "blocked-contacts-settings-item",
									children: m.jsx("span", { children: se === 0 ? s._(
										/*BTDS*/
										""
									) : se })
								}),
								m.jsx(v, {
									title: o("WAWebSettingsFBT").privacyScreenlockTitle(),
									isLastItem: !0,
									onClick: function() {
										h(o("WAWebWamEnumPrivacyControlItemType").PRIVACY_CONTROL_ITEM_TYPE.SCREEN_LOCK, o("WAWebWamEnumPrivacyControlEntryPointType").PRIVACY_CONTROL_ENTRY_POINT_TYPE.PRIVACY_SETTINGS), C();
									},
									testid: "screen-lock-settings-item",
									children: o("WAWebScreenLockTimerOptions").getScreenLockAutoTimerLabelForSummary(o("WAWebUserPrefsScreenLock").getScreenLockDurationInSeconds())
								})
							]
						}),
						m.jsxs(r("WAWebDrawerSection.react"), {
							theme: "padding-no-vertical",
							title: s._(
								/*BTDS*/
								""
							),
							titleXStyle: g.drawerTitle,
							animation: !1,
							children: [
								m.jsx(o("WAWebPrivacyScreenModeToggle.react").WAWebPrivacyScreenModeToggle, { onOpenCustomize: p }),
								de,
								me,
								m.jsx(r("WAWebDrawerItem.react"), {
									title: o("WAWebSettingsFBT").privacyLinkPreviewsTitle(),
									tabIndex: -1,
									dataTab: o("WAWebTabOrder").TAB_ORDER.DRAWER_CONTENT,
									icon: m.jsx("div", {
										className: "x1849jeq x78zum5 xl56j7k",
										children: m.jsx(r("WDSSwitch.react"), {
											value: Y || V,
											disabled: V,
											"aria-label": o("WAWebSettingsFBT").privacyLinkPreviewsTitle().toString() + ". " + ce.toString()
										})
									}),
									theme: "privacy",
									isLastItem: !0,
									disableKeydownHandling: !0,
									disabled: V,
									onDisabledClick: function() {
										q != null && o("WAWebDefenseModeLockedInterstitial.react").openDefenseModeLockedInterstitialGlobal(q, Y ? "on" : "off");
									},
									onClick: function() {
										_e(!Y);
									},
									testid: "disable-link-preview-privacy-settings-item",
									children: m.jsxs("div", {
										className: "xcldk2z",
										children: [
											ce,
											" ",
											m.jsx(y, { url: o("WAWebFaqUrl").getDisableLinkPreviewsFaqUrl() })
										]
									})
								})
							]
						})
					] })]
				})
			})
		});
	}
	C.displayName = C.name + " [from " + i.id + "]";
	function b() {
		return m.jsx(o("WAWebChevronIcon.react").ChevronIcon, {
			directional: !0,
			iconXstyle: g.chevronIcon
		});
	}
	b.displayName = b.name + " [from " + i.id + "]";
	function v(e) {
		var t = o("react-compiler-runtime").c(11), n = e.children, a = e.disabled, i = e.icon, l = e.isLastItem, s = e.onClick, u = e.tabIndex, c = e.testid, d = e.title, p = u === void 0 ? 0 : u, _;
		t[0] !== i ? (_ = i != null ? i : b(), t[0] = i, t[1] = _) : _ = t[1];
		var f = _, g;
		return t[2] !== n || t[3] !== a || t[4] !== l || t[5] !== f || t[6] !== s || t[7] !== p || t[8] !== c || t[9] !== d ? (g = m.jsx(r("WAWebDrawerItem.react"), {
			title: d,
			theme: "privacy",
			icon: f,
			onClick: s,
			disabled: a,
			isLastItem: l,
			tabIndex: p,
			dataTab: o("WAWebTabOrder").TAB_ORDER.DRAWER_CONTENT,
			testid: c,
			children: n
		}), t[2] = n, t[3] = a, t[4] = l, t[5] = f, t[6] = s, t[7] = p, t[8] = c, t[9] = d, t[10] = g) : g = t[10], g;
	}
	function S(e) {
		var t = e.about, n = e.groupAdd, r = e.lastSeen, a = e.online, i = a === void 0 ? "all" : a, l = e.profilePicture, s = e.readReceipts, u = e.disableLinkPreviews, c = u === void 0 ? !1 : u, d = e.messages, m = d === void 0 ? o("WAWebPrivacySettings").ALL_CONTACTS.all : d, p = e.disallowAllP2p, _ = p === void 0 ? !1 : p;
		if (t != null && n != null && r != null && l != null && s != null && m != null) return {
			about: t,
			groupAdd: n,
			lastSeen: r,
			online: i,
			profilePicture: l,
			readReceipts: s,
			disableLinkPreviews: c,
			messages: m,
			disallowAllP2p: _
		};
	}
	function R(e, t) {
		switch (e) {
			case o("WAWebPrivacySettings").VISIBILITY.all: return s._(
				/*BTDS*/
				""
			);
			case o("WAWebPrivacySettings").VISIBILITY.contacts: return s._(
				/*BTDS*/
				""
			);
			case o("WAWebPrivacySettings").VISIBILITY.contact_blacklist: return t == null ? "" : s._(
				/*BTDS*/
				"",
				[s._plural(t, "count")]
			);
			case o("WAWebPrivacySettings").VISIBILITY.none: return s._(
				/*BTDS*/
				""
			);
			case o("WAWebPrivacySettings").ONLINE_VISIBILITY.match_last_seen: return s._(
				/*BTDS*/
				""
			);
			default: return "";
		}
	}
	async function L(e, t, n) {
		var r = n === o("WAWebPrivacySettings").ALL_NONE.all ? o("WAWebPrivacySettings").ALL_NONE.none : o("WAWebPrivacySettings").ALL_NONE.all;
		t(babelHelpers.extends({}, e, { readReceipts: r }));
		try {
			r === o("WAWebPrivacySettings").ALL_NONE.none ? await o("WAWebSetPrivacyForOneCategoryAction").setPrivacyForOneCategory({
				name: "readreceipts",
				value: "none"
			}) : await o("WAWebSetPrivacyForOneCategoryAction").setPrivacyForOneCategory({
				name: "readreceipts",
				value: "all"
			});
		} catch (e) {
			e instanceof Error && o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose(["privacy_settings_drawer: set readreceipts failed ", ""])), e.stack).sendLogs("privacy_settings_drawer: set readreceipts failed"), o("WAWebToastManager").ToastManager.open(m.jsx(o("WAWebToast.react").Toast, { msg: s._(
				/*BTDS*/
				""
			) }));
		}
	}
	async function E(e) {
		var t = e.messages, n = e.privacySettings, r = e.setPrivacySettings, a = t === o("WAWebPrivacySettings").ALL_CONTACTS.all ? o("WAWebPrivacySettings").ALL_CONTACTS.contacts : o("WAWebPrivacySettings").ALL_CONTACTS.all;
		r(babelHelpers.extends({}, n, { messages: a }));
		try {
			a === o("WAWebPrivacySettings").ALL_CONTACTS.all ? await o("WAWebSetPrivacyForOneCategoryAction").setPrivacyForOneCategory({
				name: "messages",
				value: "all"
			}) : await o("WAWebSetPrivacyForOneCategoryAction").setPrivacyForOneCategory({
				name: "messages",
				value: "contacts"
			});
		} catch (e) {
			e instanceof Error && o("WALogger").WARN(c || (c = babelHelpers.taggedTemplateLiteralLoose(["privacy_settings_drawer: msg blocking set failed ", ""])), e.stack).sendLogs("privacy_settings_drawer: msg blocking set failed"), o("WAWebToastManager").ToastManager.open(m.jsx(o("WAWebToast.react").Toast, { msg: s._(
				/*BTDS*/
				""
			) }));
		}
	}
	l.PrivacySettingsDrawer = C;
}), 226);
