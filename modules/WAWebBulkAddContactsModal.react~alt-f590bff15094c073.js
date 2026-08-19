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
	"nullthrows",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react")), d = u, m = d.useCallback, p = d.useMemo;
	function _(t) {
		var n = t.chat, a = t.onClose, i = r("nullthrows")(n.groupMetadata), l = i.participants, u = p(function() {
			return o("WAWebGroupBulkAddContactsEligibility").getBulkAddEligibleContacts(l);
		}, [l]), d = p(function() {
			var e = new Map();
			return u.forEach(function(t) {
				t.pushname && e.set(t.id.toString(), t.pushname);
			}), e;
		}, [u]), _ = m(function(e) {
			var t = d.get(e.toString());
			return t != null && t !== "" ? "~" + t : null;
		}, [d]), f = m(function(e) {
			return e.map(function(e) {
				return {
					itemKey: e.id.toString(),
					type: o("WAWebMultiSelectContactList.react").Row.ROW_CONTACTS,
					data: e,
					isUnknownContact: !1
				};
			});
		}, []), g = async function(n) {
			var t = n.selectedItems, r = t;
			if (r.length !== 0) try {
				var i = r.map(function(e) {
					var t, n, r = (t = e.pushname) != null ? t : "", a = e.id.isLid() ? o("WAWebApiContact").getPhoneNumber(e.id) : e.id;
					return {
						phoneNumber: (n = a == null ? void 0 : a.user) != null ? n : e.id.user,
						firstName: r,
						lastName: "",
						syncToAddressbook: !1
					};
				});
				await o("WAWebSaveContactAction").saveContactBatchAction(i);
				var l = i.length;
				o("WAWebToastManager").ToastManager.open(c.jsx(o("WAWebToast.react").Toast, { msg: s._(
					/*BTDS*/
					"",
					[s._plural(l, "number")]
				) })), a();
			} catch (t) {
				o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["Failed to bulk add contacts: ", ""])), t).sendLogs("bulk-add-contacts-from-groups"), o("WAWebToastManager").ToastManager.open(c.jsx(o("WAWebToast.react").Toast, { msg: s._(
					/*BTDS*/
					""
				) })), a();
			}
		}, h = s._(
			/*BTDS*/
			""
		);
		return c.jsx(o("WAWebSelectModal.react").SelectModal, {
			title: h,
			contacts: u,
			listType: o("WAWebSelectModal.react").ListType.ContactSelectModal,
			onConfirm: g,
			onBack: a,
			singleSelectionFooterType: o("WAWebSelectModalFooter.react").FooterType.CONFIRM,
			multipleSelectionFooterType: o("WAWebSelectModalFooter.react").FooterType.CONFIRM,
			shouldShowSelectionSummary: !1,
			enableSelectAll: !0,
			enableSearchBox: !0,
			allowUnknownContactSearch: !1,
			customSecondaryText: _,
			customGetKnownContacts: f,
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
