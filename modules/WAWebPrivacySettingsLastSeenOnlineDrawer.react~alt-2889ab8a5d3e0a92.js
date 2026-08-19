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
	"err",
	"getErrorSafe",
	"react",
	"react-compiler-runtime",
	"useWAWebListener"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c, d = c || (c = o("react")), m = c.useState;
	function p(t) {
		var n = t.onClose, a = t.ref, i = m(function() {
			var e, t = o("WAWebUserPrefsGeneral").getUserPrivacySettings();
			return (e = t.lastSeen) != null ? e : o("WAWebPrivacySettings").VISIBILITY.all;
		}), l = i[0], c = i[1], p = m(function() {
			var e, t = o("WAWebUserPrefsGeneral").getUserPrivacySettings();
			return (e = t.online) != null ? e : o("WAWebPrivacySettings").VISIBILITY.all;
		}), h = p[0], y = p[1], C = m(function() {
			return o("WAWebDefenseModeUtils").getWamEnumIfSettingLockedByDefenseMode("lastSeen");
		}), b = C[0], v = C[1], S = m(function() {
			return o("WAWebDefenseModeUtils").getWamEnumIfSettingLockedByDefenseMode("online");
		}), R = S[0], L = S[1], E = o("WAWebUseContactManagementAvailability").useAccountIntegrityState();
		o("useWAWebListener").useListener(o("WAWebUserPrefsGeneral").privacySettingsEventEmitter, "all", function() {
			var e, t, n = o("WAWebDefenseModeUtils").getWamEnumIfSettingLockedByDefenseMode("lastSeen"), r = o("WAWebDefenseModeUtils").getWamEnumIfSettingLockedByDefenseMode("online");
			n !== b && v(n), r !== R && L(r);
			var a = o("WAWebUserPrefsGeneral").getUserPrivacySettings();
			c((e = a.lastSeen) != null ? e : o("WAWebPrivacySettings").ONLINE_VISIBILITY.all), y((t = a.online) != null ? t : o("WAWebPrivacySettings").ONLINE_VISIBILITY.all);
		});
		async function k(t) {
			if (t !== h) {
				y(t);
				var n = o("WAWebSetPrivacyForOneCategoryAction").privacyWebNameToServerName("online");
				if (n !== "online") throw r("err")("privacy_settings_last_seen_online_drawer: category can only be online");
				try {
					switch (t) {
						case o("WAWebPrivacySettings").ONLINE_VISIBILITY.match_last_seen:
							await o("WAWebSetPrivacyForOneCategoryAction").setPrivacyForOneCategory({
								name: n,
								value: "match_last_seen"
							});
							return;
						case o("WAWebPrivacySettings").VISIBILITY.all:
							await o("WAWebSetPrivacyForOneCategoryAction").setPrivacyForOneCategory({
								name: n,
								value: "all"
							});
							return;
					}
				} catch (t) {
					var a = r("getErrorSafe")(t);
					y(h);
					var i = t instanceof o("WAWebBackendErrors").ServerStatusCodeError && t.statusCode === 409;
					i || o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose(["visibility_edit_drawer: set visibility option failed ", ""])), a.stack).sendLogs("visibility_edit_drawer: set visibility option failed"), _();
				}
			}
		}
		async function I(e) {
			if (e !== l) {
				c(e);
				var t = o("WAWebSetPrivacyForOneCategoryAction").privacyWebNameToServerName("lastSeen");
				if (t !== "last") throw r("err")("privacy_settings_last_seen_online_drawer: category can be only last");
				try {
					switch (e) {
						case o("WAWebPrivacySettings").VISIBILITY.none:
							await o("WAWebSetPrivacyForOneCategoryAction").setPrivacyForOneCategory({
								name: t,
								value: "none"
							});
							return;
						case o("WAWebPrivacySettings").VISIBILITY.contacts:
							await o("WAWebSetPrivacyForOneCategoryAction").setPrivacyForOneCategory({
								name: t,
								value: "contacts"
							});
							return;
						case o("WAWebPrivacySettings").VISIBILITY.all:
							await o("WAWebSetPrivacyForOneCategoryAction").setPrivacyForOneCategory({
								name: t,
								value: "all"
							});
							return;
					}
				} catch (e) {
					var n = r("getErrorSafe")(e);
					c(l);
					var a = e instanceof o("WAWebBackendErrors").ServerStatusCodeError && e.statusCode === 409;
					a || o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose(["visibility_edit_drawer: set visibility option failed ", ""])), n.stack).sendLogs("visibility_edit_drawer: set visibility option failed"), _();
				}
			}
		}
		var T = s._(
			/*BTDS*/
			""
		), D = s._(
			/*BTDS*/
			""
		), x = null;
		return E === o("WAWebUseContactManagementAvailability").AccountIntegrityState.TIMELOCK && (l === o("WAWebPrivacySettings").VISIBILITY.contacts || l === o("WAWebPrivacySettings").VISIBILITY.contact_blacklist) && (x = d.jsx(r("WAWebAccountTakeOverBanner.react"), { entryPoint: "privacy-settings" })), d.jsxs(r("WAWebDrawer.react"), {
			ref: a,
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
				onBack: n,
				type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
				focusBackOrCancel: !0
			}), d.jsxs(r("WAWebDrawerBody.react"), { children: [x, d.jsxs(r("WAWebDrawerSection.react"), {
				theme: "padding-no-vertical",
				animation: !1,
				children: [
					d.jsx(o("WAWebText.react").WAWebTextSectionTitle, {
						margin: [20, 0],
						color: "wdsContentDeemphasized",
						weight: "bold",
						children: T
					}),
					d.jsxs("div", {
						role: "radiogroup",
						"aria-label": T,
						children: [
							d.jsx(f, {
								text: s._(
									/*BTDS*/
									""
								),
								visibility: o("WAWebPrivacySettings").VISIBILITY.all,
								lastSeenChoice: l,
								lastSeenWamIfLocked: b,
								onClick: I
							}),
							d.jsx(f, {
								text: s._(
									/*BTDS*/
									""
								),
								visibility: o("WAWebPrivacySettings").VISIBILITY.contacts,
								lastSeenChoice: l,
								lastSeenWamIfLocked: b,
								onClick: I
							}),
							d.jsx(f, {
								text: s._(
									/*BTDS*/
									""
								),
								visibility: o("WAWebPrivacySettings").VISIBILITY.contact_blacklist,
								lastSeenChoice: l,
								lastSeenWamIfLocked: b,
								onClick: function() {
									o("WAWebModalManager").ModalManager.open(d.jsx(r("WAWebSelectContactsExceptModal.react"), {
										category: "lastSeen",
										onConfirm: function(t) {
											I(o("WAWebPrivacySettings").VISIBILITY.contact_blacklist);
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
								lastSeenChoice: l,
								lastSeenWamIfLocked: b,
								onClick: I
							})
						]
					}),
					d.jsx("div", { className: "x1qx5ct2 xso031l x1q0q8m5 x1rpwac6" }),
					d.jsx(o("WAWebText.react").WAWebTextSectionTitle, {
						margin: [20, 0],
						color: "wdsContentDeemphasized",
						weight: "bold",
						children: D
					}),
					d.jsxs("div", {
						role: "radiogroup",
						"aria-label": D,
						children: [d.jsx(g, {
							text: s._(
								/*BTDS*/
								""
							),
							visibility: o("WAWebPrivacySettings").ONLINE_VISIBILITY.all,
							onlineChoice: h,
							onlineWamIfLocked: R,
							onClick: k
						}), d.jsx(g, {
							text: s._(
								/*BTDS*/
								""
							),
							visibility: o("WAWebPrivacySettings").ONLINE_VISIBILITY.match_last_seen,
							onlineChoice: h,
							onlineWamIfLocked: R,
							onClick: k
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
		var t = o("react-compiler-runtime").c(13), n = e.lastSeenChoice, a = e.lastSeenWamIfLocked, i = e.onClick, l = e.text, s = e.visibility, u = a != null, c = n === s, m = u && !c, p = "last-seen-" + s, _;
		t[0] !== a || t[1] !== s ? (_ = function() {
			a != null && o("WAWebDefenseModeLockedInterstitial.react").openDefenseModeLockedInterstitialGlobal(a, s);
		}, t[0] = a, t[1] = s, t[2] = _) : _ = t[2];
		var f;
		t[3] !== i || t[4] !== s ? (f = function() {
			i(s);
		}, t[3] = i, t[4] = s, t[5] = f) : f = t[5];
		var g;
		return t[6] !== c || t[7] !== m || t[8] !== p || t[9] !== _ || t[10] !== f || t[11] !== l ? (g = d.jsx(r("WAWebPrivacyVisibilityOption.react"), {
			text: l,
			selected: c,
			disabled: m,
			testid: p,
			onDisabledClick: _,
			onClick: f
		}), t[6] = c, t[7] = m, t[8] = p, t[9] = _, t[10] = f, t[11] = l, t[12] = g) : g = t[12], g;
	}
	function g(e) {
		var t = o("react-compiler-runtime").c(13), n = e.onClick, a = e.onlineChoice, i = e.onlineWamIfLocked, l = e.text, s = e.visibility, u = i != null, c = a === s, m = "online-" + s, p = u && !c, _;
		t[0] !== i || t[1] !== s ? (_ = function() {
			i != null && o("WAWebDefenseModeLockedInterstitial.react").openDefenseModeLockedInterstitialGlobal(i, s);
		}, t[0] = i, t[1] = s, t[2] = _) : _ = t[2];
		var f;
		t[3] !== n || t[4] !== s ? (f = function() {
			n(s);
		}, t[3] = n, t[4] = s, t[5] = f) : f = t[5];
		var g;
		return t[6] !== c || t[7] !== m || t[8] !== p || t[9] !== _ || t[10] !== f || t[11] !== l ? (g = d.jsx(r("WAWebPrivacyVisibilityOption.react"), {
			text: l,
			selected: c,
			testid: m,
			disabled: p,
			onDisabledClick: _,
			onClick: f
		}), t[6] = c, t[7] = m, t[8] = p, t[9] = _, t[10] = f, t[11] = l, t[12] = g) : g = t[12], g;
	}
	l.default = p;
}), 226);
