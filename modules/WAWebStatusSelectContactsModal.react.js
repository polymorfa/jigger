__d("WAWebStatusSelectContactsModal.react", [
	"fbt",
	"$InternalEnum",
	"WALogger",
	"WAWebContactCollection",
	"WAWebLidMigrationUtils",
	"WAWebModalManager",
	"WAWebSelectModal.react",
	"WAWebSelectModalFooter.react",
	"WAWebStatusPrivacyContactsUtils",
	"WAWebStatusPrivacySettingAction",
	"WAWebToast.react",
	"WAWebToastManager",
	"WAWebUsernameWorkerCompatibleGatingUtils",
	"asyncToGeneratorRuntime",
	"compactMap",
	"getErrorSafe",
	"react",
	"useWAWebFilteredContacts"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react")), d = n("$InternalEnum")({
		AllowList: "allow-list",
		DenyList: "deny-list"
	}), m = 64e3;
	function p(t) {
		var a = t.list, i = t.onBack, l = t.onConfirm, u = t.onDismiss, p = t.onOverlayClick, g = t.setting, h = o("WAWebUsernameWorkerCompatibleGatingUtils").onlyShowLidContacts();
		function y(e) {
			return C.apply(this, arguments);
		}
		function C() {
			return C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
				try {
					var n = o("WAWebStatusPrivacyContactsUtils").convertPrivacyListContactsToWids(t);
					switch (g) {
						case d.AllowList:
							yield o("WAWebStatusPrivacySettingAction").setStatusPrivacyAllowList(n);
							break;
						case d.DenyList:
							yield o("WAWebStatusPrivacySettingAction").setStatusPrivacyDenyList(n);
							break;
					}
					l(n);
				} catch (t) {
					var a = r("getErrorSafe")(t);
					o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["error: ", ""])), String(a.stack)).sendLogs("SelectStatusContactsFlow:failed to set privacy settings"), o("WAWebToastManager").ToastManager.open(c.jsx(o("WAWebToast.react").Toast, { msg: s._(
						/*BTDS*/
						""
					) }));
				}
				u != null ? u() : o("WAWebModalManager").ModalManager.close();
			}), C.apply(this, arguments);
		}
		var b = r("compactMap")(a, function(e) {
			var t = h ? o("WAWebLidMigrationUtils").toLid(e) : o("WAWebLidMigrationUtils").toPn(e);
			return t ? o("WAWebContactCollection").ContactCollection.gadd(t) : null;
		}), v = r("useWAWebFilteredContacts")(), S = Array.from(new Set([].concat(v, b)));
		return c.jsx(o("WAWebSelectModal.react").SelectModal, {
			title: _(g),
			onBack: i,
			onOverlayClick: p,
			onConfirm: function(t) {
				var e = t.selectedItems;
				y(e);
			},
			getInitialItems: function() {
				return b;
			},
			listType: o("WAWebSelectModal.react").ListType.ContactSelectModal,
			maxItems: m,
			singleSelectionFooterType: o("WAWebSelectModalFooter.react").FooterType.CONFIRM,
			multipleSelectionFooterType: o("WAWebSelectModalFooter.react").FooterType.CONFIRM,
			allowUnknownContactSearch: !1,
			contacts: S,
			getSelectionSummary: function(t) {
				return f(g, t);
			},
			enableSelectAll: !0,
			activeWithoutSelection: g === d.DenyList,
			tsNavigationData: {
				surface: "unknown",
				viewName: "status-select-contacts"
			}
		});
	}
	p.displayName = p.name + " [from " + i.id + "]";
	function _(e) {
		switch (e) {
			case d.AllowList: return s._(
				/*BTDS*/
				""
			);
			case d.DenyList: return s._(
				/*BTDS*/
				""
			);
		}
	}
	function f(e, t) {
		var n = t.length;
		switch (e) {
			case d.AllowList: return s._(
				/*BTDS*/
				"",
				[s._plural(n, "allow-contacts")]
			);
			case d.DenyList: return s._(
				/*BTDS*/
				"",
				[s._plural(n, "allow-contacts")]
			);
		}
	}
	l.StatusPrivacySettingListType = d, l.SelectStatusContactsModal = p;
}), 226);
