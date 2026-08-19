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
		var n = t.list, a = t.onBack, i = t.onConfirm, l = t.onDismiss, u = t.onOverlayClick, p = t.setting, g = o("WAWebUsernameWorkerCompatibleGatingUtils").onlyShowLidContacts();
		async function h(t) {
			try {
				var n = o("WAWebStatusPrivacyContactsUtils").convertPrivacyListContactsToWids(t);
				switch (p) {
					case d.AllowList:
						await o("WAWebStatusPrivacySettingAction").setStatusPrivacyAllowList(n);
						break;
					case d.DenyList:
						await o("WAWebStatusPrivacySettingAction").setStatusPrivacyDenyList(n);
						break;
				}
				i(n);
			} catch (t) {
				var a = r("getErrorSafe")(t);
				o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["error: ", ""])), String(a.stack)).sendLogs("SelectStatusContactsFlow:failed to set privacy settings"), o("WAWebToastManager").ToastManager.open(c.jsx(o("WAWebToast.react").Toast, { msg: s._(
					/*BTDS*/
					""
				) }));
			}
			l != null ? l() : o("WAWebModalManager").ModalManager.close();
		}
		var y = r("compactMap")(n, function(e) {
			var t = g ? o("WAWebLidMigrationUtils").toLid(e) : o("WAWebLidMigrationUtils").toPn(e);
			return t ? o("WAWebContactCollection").ContactCollection.gadd(t) : null;
		}), C = r("useWAWebFilteredContacts")(), b = Array.from(new Set([].concat(C, y)));
		return c.jsx(o("WAWebSelectModal.react").SelectModal, {
			title: _(p),
			onBack: a,
			onOverlayClick: u,
			onConfirm: function(t) {
				var e = t.selectedItems;
				h(e);
			},
			getInitialItems: function() {
				return y;
			},
			listType: o("WAWebSelectModal.react").ListType.ContactSelectModal,
			maxItems: m,
			singleSelectionFooterType: o("WAWebSelectModalFooter.react").FooterType.CONFIRM,
			multipleSelectionFooterType: o("WAWebSelectModalFooter.react").FooterType.CONFIRM,
			allowUnknownContactSearch: !1,
			contacts: b,
			getSelectionSummary: function(t) {
				return f(p, t);
			},
			enableSelectAll: !0,
			activeWithoutSelection: p === d.DenyList,
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
