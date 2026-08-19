__d("WAWebBulkAddContactsModal.react", [
	"fbt",
	"WALogger",
	"WAWebApiContact",
	"WAWebGroupBulkAddContactsEligibility",
	"WAWebModalManager",
	"WAWebMultiSelectContactList.react",
	"WAWebSaveContactAction",
	"WAWebSelectModal.react",
	"WAWebSelectModalFooter.react",
	"WAWebToast.react",
	"WAWebToastManager",
	"asyncToGeneratorRuntime",
	"nullthrows",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react")), d = u, m = d.useCallback, p = d.useMemo;
	function _(t) {
		var a = t.chat, i = t.onClose, l = r("nullthrows")(a.groupMetadata), u = l.participants, d = p(function() {
			return o("WAWebGroupBulkAddContactsEligibility").getBulkAddEligibleContacts(u);
		}, [u]), _ = p(function() {
			var e = new Map();
			return d.forEach(function(t) {
				t.pushname && e.set(t.id.toString(), t.pushname);
			}), e;
		}, [d]), f = m(function(e) {
			var t = _.get(e.toString());
			return t != null && t !== "" ? "~" + t : null;
		}, [_]), g = m(function(e) {
			return e.map(function(e) {
				return {
					itemKey: e.id.toString(),
					type: o("WAWebMultiSelectContactList.react").Row.ROW_CONTACTS,
					data: e,
					isUnknownContact: !1
				};
			});
		}, []), h = (function() {
			var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
				var n = t.selectedItems, r = n;
				if (r.length !== 0) try {
					var a = r.map(function(e) {
						var t, n, r = (t = e.pushname) != null ? t : "", a = e.id.isLid() ? o("WAWebApiContact").getPhoneNumber(e.id) : e.id;
						return {
							phoneNumber: (n = a == null ? void 0 : a.user) != null ? n : e.id.user,
							firstName: r,
							lastName: "",
							syncToAddressbook: !1
						};
					});
					yield o("WAWebSaveContactAction").saveContactBatchAction(a);
					var l = a.length;
					o("WAWebToastManager").ToastManager.open(c.jsx(o("WAWebToast.react").Toast, { msg: s._(
						/*BTDS*/
						"",
						[s._plural(l, "number")]
					) })), i();
				} catch (t) {
					o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["Failed to bulk add contacts: ", ""])), t).sendLogs("bulk-add-contacts-from-groups"), o("WAWebToastManager").ToastManager.open(c.jsx(o("WAWebToast.react").Toast, { msg: s._(
						/*BTDS*/
						""
					) })), i();
				}
			});
			return function(n) {
				return t.apply(this, arguments);
			};
		})(), y = s._(
			/*BTDS*/
			""
		);
		return c.jsx(o("WAWebSelectModal.react").SelectModal, {
			title: y,
			contacts: d,
			listType: o("WAWebSelectModal.react").ListType.ContactSelectModal,
			onConfirm: h,
			onBack: i,
			singleSelectionFooterType: o("WAWebSelectModalFooter.react").FooterType.CONFIRM,
			multipleSelectionFooterType: o("WAWebSelectModalFooter.react").FooterType.CONFIRM,
			shouldShowSelectionSummary: !1,
			enableSelectAll: !0,
			enableSearchBox: !0,
			allowUnknownContactSearch: !1,
			customSecondaryText: f,
			customGetKnownContacts: g,
			tsNavigationData: {
				surface: "unknown",
				viewName: "bulk-add-contacts"
			}
		});
	}
	_.displayName = _.name + " [from " + i.id + "]";
	function f(e) {
		o("WAWebModalManager").ModalManager.open(c.jsx(_, {
			chat: e,
			onClose: o("WAWebModalManager").closeModalManager
		}));
	}
	l.WAWebBulkAddContactsModal = _, l.openBulkAddContactsModal = f;
}), 226);
