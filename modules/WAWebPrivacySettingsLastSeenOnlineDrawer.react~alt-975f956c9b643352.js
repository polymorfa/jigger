__d("WAWebPrivacySettingsLastSeenOnlineDrawer.react", [
	"fbt",
	"WALogger",
	"WAWebAccountTakeOverBanner.react",
	"WAWebBackendErrors",
	"WAWebDefenseModeLockedInterstitial.react",
	"WAWebDefenseModeUtils",
	"WAWebDrawer.react",
	"WAWebDrawerBody.react",
	"WAWebDrawerHeader.react",
	"WAWebDrawerSection.react",
	"WAWebModalManager",
	"WAWebPrivacySettings",
	"WAWebPrivacyVisibilityOption.react",
	"WAWebSelectContactsExceptModal.react",
	"WAWebSetPrivacyForOneCategoryAction",
	"WAWebText.react",
	"WAWebToast.react",
	"WAWebToastManager",
	"WAWebUseContactManagementAvailability",
	"WAWebUserPrefsGeneral",
	"asyncToGeneratorRuntime",
	"err",
	"getErrorSafe",
	"react",
	"useWAWebListener"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c, d = c || (c = o("react")), m = c.useState;
	function p(t) {
		var a = t.onClose, i = t.ref, l = m(function() {
			var e, t = o("WAWebUserPrefsGeneral").getUserPrivacySettings();
			return (e = t.lastSeen) != null ? e : o("WAWebPrivacySettings").VISIBILITY.all;
		}), c = l[0], p = l[1], h = m(function() {
			var e, t = o("WAWebUserPrefsGeneral").getUserPrivacySettings();
			return (e = t.online) != null ? e : o("WAWebPrivacySettings").VISIBILITY.all;
		}), y = h[0], C = h[1], b = m(function() {
			return o("WAWebDefenseModeUtils").getWamEnumIfSettingLockedByDefenseMode("lastSeen");
		}), v = b[0], S = b[1], R = m(function() {
			return o("WAWebDefenseModeUtils").getWamEnumIfSettingLockedByDefenseMode("online");
		}), L = R[0], E = R[1], k = o("WAWebUseContactManagementAvailability").useAccountIntegrityState();
		o("useWAWebListener").useListener(o("WAWebUserPrefsGeneral").privacySettingsEventEmitter, "all", function() {
			var e, t, n = o("WAWebDefenseModeUtils").getWamEnumIfSettingLockedByDefenseMode("lastSeen"), r = o("WAWebDefenseModeUtils").getWamEnumIfSettingLockedByDefenseMode("online");
			n !== v && S(n), r !== L && E(r);
			var a = o("WAWebUserPrefsGeneral").getUserPrivacySettings();
			p((e = a.lastSeen) != null ? e : o("WAWebPrivacySettings").ONLINE_VISIBILITY.all), C((t = a.online) != null ? t : o("WAWebPrivacySettings").ONLINE_VISIBILITY.all);
		});
		function I(e) {
			return T.apply(this, arguments);
		}
		function T() {
			return T = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
				if (t !== y) {
					C(t);
					var n = o("WAWebSetPrivacyForOneCategoryAction").privacyWebNameToServerName("online");
					if (n !== "online") throw r("err")("privacy_settings_last_seen_online_drawer: category can only be online");
					try {
						switch (t) {
							case o("WAWebPrivacySettings").ONLINE_VISIBILITY.match_last_seen:
								yield o("WAWebSetPrivacyForOneCategoryAction").setPrivacyForOneCategory({
									name: n,
									value: "match_last_seen"
								});
								return;
							case o("WAWebPrivacySettings").VISIBILITY.all:
								yield o("WAWebSetPrivacyForOneCategoryAction").setPrivacyForOneCategory({
									name: n,
									value: "all"
								});
								return;
						}
					} catch (t) {
						var a = r("getErrorSafe")(t);
						C(y);
						var i = t instanceof o("WAWebBackendErrors").ServerStatusCodeError && t.statusCode === 409;
						i || o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose(["visibility_edit_drawer: set visibility option failed ", ""])), a.stack).sendLogs("visibility_edit_drawer: set visibility option failed"), _();
					}
				}
			}), T.apply(this, arguments);
		}
		function D(e) {
			return x.apply(this, arguments);
		}
		function x() {
			return x = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
				if (e !== c) {
					p(e);
					var t = o("WAWebSetPrivacyForOneCategoryAction").privacyWebNameToServerName("lastSeen");
					if (t !== "last") throw r("err")("privacy_settings_last_seen_online_drawer: category can be only last");
					try {
						switch (e) {
							case o("WAWebPrivacySettings").VISIBILITY.none:
								yield o("WAWebSetPrivacyForOneCategoryAction").setPrivacyForOneCategory({
									name: t,
									value: "none"
								});
								return;
							case o("WAWebPrivacySettings").VISIBILITY.contacts:
								yield o("WAWebSetPrivacyForOneCategoryAction").setPrivacyForOneCategory({
									name: t,
									value: "contacts"
								});
								return;
							case o("WAWebPrivacySettings").VISIBILITY.all:
								yield o("WAWebSetPrivacyForOneCategoryAction").setPrivacyForOneCategory({
									name: t,
									value: "all"
								});
								return;
						}
					} catch (e) {
						var n = r("getErrorSafe")(e);
						p(c);
						var a = e instanceof o("WAWebBackendErrors").ServerStatusCodeError && e.statusCode === 409;
						a || o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose(["visibility_edit_drawer: set visibility option failed ", ""])), n.stack).sendLogs("visibility_edit_drawer: set visibility option failed"), _();
					}
				}
			}), x.apply(this, arguments);
		}
		var $ = s._(
			/*BTDS*/
			""
		), P = s._(
			/*BTDS*/
			""
		), N = null;
		return k === o("WAWebUseContactManagementAvailability").AccountIntegrityState.TIMELOCK && (c === o("WAWebPrivacySettings").VISIBILITY.contacts || c === o("WAWebPrivacySettings").VISIBILITY.contact_blacklist) && (N = d.jsx(r("WAWebAccountTakeOverBanner.react"), { entryPoint: "privacy-settings" })), d.jsxs(r("WAWebDrawer.react"), {
			ref: i,
			testid: "privacy-settings-drawer",
			tsNavigationData: {
				surface: "unknown",
				viewName: "privacy-last-seen"
			},
			children: [d.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
				testid: "drawer-title",
				title: s._(
					/*BTDS*/
					""
				),
				onBack: a,
				type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
				focusBackOrCancel: !0
			}), d.jsxs(r("WAWebDrawerBody.react"), { children: [N, d.jsxs(r("WAWebDrawerSection.react"), {
				theme: "padding-no-vertical",
				animation: !1,
				children: [
					d.jsx(o("WAWebText.react").WAWebTextSectionTitle, {
						margin: [20, 0],
						color: "wdsContentDeemphasized",
						weight: "bold",
						children: $
					}),
					d.jsxs("div", {
						role: "radiogroup",
						"aria-label": $,
						children: [
							d.jsx(f, {
								text: s._(
									/*BTDS*/
									""
								),
								visibility: o("WAWebPrivacySettings").VISIBILITY.all,
								lastSeenChoice: c,
								lastSeenWamIfLocked: v,
								onClick: D
							}),
							d.jsx(f, {
								text: s._(
									/*BTDS*/
									""
								),
								visibility: o("WAWebPrivacySettings").VISIBILITY.contacts,
								lastSeenChoice: c,
								lastSeenWamIfLocked: v,
								onClick: D
							}),
							d.jsx(f, {
								text: s._(
									/*BTDS*/
									""
								),
								visibility: o("WAWebPrivacySettings").VISIBILITY.contact_blacklist,
								lastSeenChoice: c,
								lastSeenWamIfLocked: v,
								onClick: function() {
									o("WAWebModalManager").ModalManager.open(d.jsx(r("WAWebSelectContactsExceptModal.react"), {
										category: "lastSeen",
										onConfirm: function(t) {
											D(o("WAWebPrivacySettings").VISIBILITY.contact_blacklist);
										}
									}));
								}
							}),
							d.jsx(f, {
								text: s._(
									/*BTDS*/
									""
								),
								visibility: o("WAWebPrivacySettings").VISIBILITY.none,
								lastSeenChoice: c,
								lastSeenWamIfLocked: v,
								onClick: D
							})
						]
					}),
					d.jsx("div", { className: "x1qx5ct2 xso031l x1q0q8m5 x1rpwac6" }),
					d.jsx(o("WAWebText.react").WAWebTextSectionTitle, {
						margin: [20, 0],
						color: "wdsContentDeemphasized",
						weight: "bold",
						children: P
					}),
					d.jsxs("div", {
						role: "radiogroup",
						"aria-label": P,
						children: [d.jsx(g, {
							text: s._(
								/*BTDS*/
								""
							),
							visibility: o("WAWebPrivacySettings").ONLINE_VISIBILITY.all,
							onlineChoice: y,
							onlineWamIfLocked: L,
							onClick: I
						}), d.jsx(g, {
							text: s._(
								/*BTDS*/
								""
							),
							visibility: o("WAWebPrivacySettings").ONLINE_VISIBILITY.match_last_seen,
							onlineChoice: y,
							onlineWamIfLocked: L,
							onClick: I
						})]
					}),
					d.jsx(o("WAWebText.react").WAWebTextMuted, {
						margin: [20, 0],
						color: "secondary",
						children: s._(
							/*BTDS*/
							"",
							[s._implicitParam("=m1", d.jsx("strong", { children: s._(
								/*BTDS*/
								""
							) })), s._implicitParam("=m4", d.jsx("strong", { children: s._(
								/*BTDS*/
								""
							) }))]
						)
					})
				]
			})] })]
		});
	}
	p.displayName = p.name + " [from " + i.id + "]";
	function _() {
		o("WAWebToastManager").ToastManager.open(d.jsx(o("WAWebToast.react").Toast, { msg: s._(
			/*BTDS*/
			""
		) }));
	}
	function f(e) {
		var t = e.lastSeenChoice, n = e.lastSeenWamIfLocked, a = e.onClick, i = e.text, l = e.visibility, s = n != null, u = t === l;
		return d.jsx(r("WAWebPrivacyVisibilityOption.react"), {
			text: i,
			selected: u,
			disabled: s && !u,
			testid: "last-seen-" + l,
			onDisabledClick: function() {
				n != null && o("WAWebDefenseModeLockedInterstitial.react").openDefenseModeLockedInterstitialGlobal(n, l);
			},
			onClick: function() {
				a(l);
			}
		});
	}
	f.displayName = f.name + " [from " + i.id + "]";
	function g(e) {
		var t = e.onClick, n = e.onlineChoice, a = e.onlineWamIfLocked, i = e.text, l = e.visibility, s = a != null, u = n === l;
		return d.jsx(r("WAWebPrivacyVisibilityOption.react"), {
			text: i,
			selected: u,
			testid: "online-" + l,
			disabled: s && !u,
			onDisabledClick: function() {
				a != null && o("WAWebDefenseModeLockedInterstitial.react").openDefenseModeLockedInterstitialGlobal(a, l);
			},
			onClick: function() {
				t(l);
			}
		});
	}
	g.displayName = g.name + " [from " + i.id + "]", l.default = p;
}), 226);
