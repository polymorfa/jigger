__d("WAWebPrivacyVisibilityEditDrawer.react", [
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
	"useWAWebListener"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react")), d = u.useState;
	function m(t) {
		var n = t.category, a = t.onClose, i = t.onOpenContactsExceptModal, l = t.ref, u = d(function() {
			var e, t, r, a = o("WAWebUserPrefsGeneral").getUserPrivacySettings();
			switch (n) {
				case "about": return (e = a.about) != null ? e : o("WAWebPrivacySettings").VISIBILITY.all;
				case "profilePicture": return (t = a.profilePicture) != null ? t : o("WAWebPrivacySettings").VISIBILITY.all;
				case "groupAdd": return (r = a.groupAdd) != null ? r : o("WAWebPrivacySettings").VISIBILITY.all;
			}
		}), m = u[0], f = u[1], g = d(function() {
			return o("WAWebDefenseModeUtils").getWamEnumIfSettingLockedByDefenseMode(n);
		}), h = g[0], y = g[1], C = o("WAWebUseContactManagementAvailability").useAccountIntegrityState();
		async function b(t) {
			if (t !== o("WAWebPrivacySettings").VISIBILITY.contact_blacklist && t !== m) {
				f(t);
				var a = o("WAWebSetPrivacyForOneCategoryAction").privacyWebNameToServerName(n);
				if (a === "readreceipts" || a === "online" || a === "calladd" || a === "messages") throw r("err")("visibility_edit_drawer: category can not be " + a);
				try {
					switch (t) {
						case o("WAWebPrivacySettings").VISIBILITY.none:
							if (a === "groupadd") throw r("err")("visibility_edit_drawer: groupadd can not be none");
							await o("WAWebSetPrivacyForOneCategoryAction").setPrivacyForOneCategory({
								name: a,
								value: "none"
							});
							return;
						case o("WAWebPrivacySettings").VISIBILITY.contacts:
							await o("WAWebSetPrivacyForOneCategoryAction").setPrivacyForOneCategory({
								name: a,
								value: "contacts"
							});
							return;
						case o("WAWebPrivacySettings").VISIBILITY.all:
							await o("WAWebSetPrivacyForOneCategoryAction").setPrivacyForOneCategory({
								name: a,
								value: "all"
							});
							return;
					}
				} catch (t) {
					var i = r("getErrorSafe")(t);
					f(m);
					var l = t instanceof o("WAWebBackendErrors").ServerStatusCodeError && t.statusCode === 409;
					l || o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose(["visibility_edit_drawer: set visibility option failed ", ""])), i.stack).sendLogs("visibility_edit_drawer: set visibility option failed"), o("WAWebToastManager").ToastManager.open(c.jsx(o("WAWebToast.react").Toast, { msg: s._(
						/*BTDS*/
						""
					) }));
				}
			}
		}
		var v = function() {
			var e = function() {
				f(o("WAWebPrivacySettings").VISIBILITY.contact_blacklist);
			};
			i != null ? i(e) : o("WAWebModalManager").ModalManager.open(c.jsx(r("WAWebSelectContactsExceptModal.react"), {
				category: n,
				onConfirm: e
			}));
		};
		o("useWAWebListener").useListener(o("WAWebUserPrefsGeneral").privacySettingsEventEmitter, "all", function() {
			var e, t = o("WAWebDefenseModeUtils").getWamEnumIfSettingLockedByDefenseMode(n);
			y(t);
			var r = o("WAWebUserPrefsGeneral").getUserPrivacySettings(), a = (e = n === "about" ? r.about : n === "profilePicture" ? r.profilePicture : n === "groupAdd" ? r.groupAdd : (function() {
				throw Error("Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " + n);
			})()) != null ? e : o("WAWebPrivacySettings").VISIBILITY.all;
			a !== m && f(a);
		});
		var S = function(t) {
			return h == null ? t : babelHelpers.extends({}, t, {
				disabled: !0,
				onDisabledClick: function() {
					o("WAWebDefenseModeLockedInterstitial.react").openDefenseModeLockedInterstitialGlobal(h, t.value);
				}
			});
		}, R = [
			S({
				value: o("WAWebPrivacySettings").VISIBILITY.all,
				label: s._(
					/*BTDS*/
					""
				),
				testid: "everyone"
			}),
			S({
				value: o("WAWebPrivacySettings").VISIBILITY.contacts,
				label: s._(
					/*BTDS*/
					""
				),
				testid: "my-contacts"
			}),
			S({
				value: o("WAWebPrivacySettings").VISIBILITY.contact_blacklist,
				label: s._(
					/*BTDS*/
					""
				),
				testid: "my-contacts-except",
				onChange: v,
				onClickSelected: v
			}),
			n === "groupAdd" ? null : S({
				value: o("WAWebPrivacySettings").VISIBILITY.none,
				label: s._(
					/*BTDS*/
					""
				),
				testid: "nobody"
			})
		].filter(Boolean), L = n === "groupAdd" ? c.jsx(o("WAWebText.react").WAWebTextMuted, {
			margin: [20, 0],
			children: s._(
				/*BTDS*/
				""
			)
		}) : null, E = n === "groupAdd" ? c.jsx(o("WAWebText.react").WAWebTextMuted, {
			margin: [20, 0],
			children: s._(
				/*BTDS*/
				""
			)
		}) : null, k = null;
		return C === o("WAWebUseContactManagementAvailability").AccountIntegrityState.TIMELOCK && (m === o("WAWebPrivacySettings").VISIBILITY.contacts || m === o("WAWebPrivacySettings").VISIBILITY.contact_blacklist) && (k = c.jsx(r("WAWebAccountTakeOverBanner.react"), { entryPoint: "privacy-settings" })), c.jsxs(r("WAWebDrawer.react"), {
			ref: l,
			testid: "privacy-settings-drawer",
			tsNavigationData: {
				surface: "unknown",
				viewName: "privacy-visibility-edit"
			},
			children: [c.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
				testid: "drawer-title-" + n,
				title: p(n),
				onBack: a,
				focusBackOrCancel: !0,
				type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL
			}), c.jsxs(r("WAWebDrawerBody.react"), { children: [k, c.jsxs(r("WAWebDrawerSection.react"), {
				theme: "padding-no-vertical",
				animation: !1,
				children: [
					c.jsx(o("WAWebText.react").WAWebTextSectionTitle, {
						margin: [20, 0],
						color: "wdsContentDeemphasized",
						weight: "bold",
						children: _(n)
					}),
					c.jsx("div", {
						role: "radiogroup",
						"aria-label": _(n),
						children: R.map(function(e) {
							return c.jsx(r("WAWebPrivacyVisibilityOption.react"), {
								text: e.label,
								selected: m === e.value,
								disabled: e.disabled === !0 && m !== e.value,
								testid: e.testid,
								onDisabledClick: e.onDisabledClick,
								onClick: function() {
									e.onChange != null ? e.onChange() : b(e.value);
								}
							}, e.value);
						})
					}),
					c.jsxs("div", { children: [L, E] })
				]
			})] })]
		});
	}
	m.displayName = m.name + " [from " + i.id + "]";
	function p(e) {
		switch (e) {
			case "about": return s._(
				/*BTDS*/
				""
			);
			case "profilePicture": return s._(
				/*BTDS*/
				""
			);
			case "groupAdd": return s._(
				/*BTDS*/
				""
			);
		}
	}
	function _(e) {
		switch (e) {
			case "about": return s._(
				/*BTDS*/
				""
			);
			case "profilePicture": return s._(
				/*BTDS*/
				""
			);
			case "groupAdd": return s._(
				/*BTDS*/
				""
			);
		}
	}
	l.default = m;
}), 226);
