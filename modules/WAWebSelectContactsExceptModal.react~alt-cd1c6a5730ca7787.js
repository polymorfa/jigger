__d("WAWebSelectContactsExceptModal.react", [
	"fbt",
	"WAArrayDifferenceBy",
	"WACustomError",
	"WALogger",
	"WAPromiseTimeout",
	"WAWebBackendErrors",
	"WAWebConsumerPixStrings",
	"WAWebContactCollection",
	"WAWebLidMigrationUtils",
	"WAWebModalManager",
	"WAWebQueryPrivacyDisallowedListUtil",
	"WAWebSchemaPrivacyDisallowedList",
	"WAWebSelectModal.react",
	"WAWebSelectModalFooter.react",
	"WAWebSetPrivacyForOneCategoryAction",
	"WAWebSetPrivacyJob",
	"WAWebSettingsConst",
	"WAWebSyncPrivacyDisallowedLists",
	"WAWebToast.react",
	"WAWebToastManager",
	"WAWebUsernameWorkerCompatibleGatingUtils",
	"WAWebWidFactory",
	"err",
	"getErrorSafe",
	"react",
	"useWAWebAsync",
	"useWAWebFilteredContacts"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c, d, m, p = m || (m = o("react")), _ = 64e3;
	function f(e) {
		return e === "about" ? o("WAWebSchemaPrivacyDisallowedList").PrivacyDisallowedListType.About : e === "profilePicture" ? o("WAWebSchemaPrivacyDisallowedList").PrivacyDisallowedListType.ProfilePicture : e === "lastSeen" ? o("WAWebSchemaPrivacyDisallowedList").PrivacyDisallowedListType.LastSeen : e === "groupAdd" ? o("WAWebSchemaPrivacyDisallowedList").PrivacyDisallowedListType.GroupAdd : e === "pix" ? o("WAWebSchemaPrivacyDisallowedList").PrivacyDisallowedListType.Pix : (function() {
			throw Error("Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " + e);
		})();
	}
	function g(e) {
		switch (e) {
			case "about": return s._(
				/*BTDS*/
				""
			);
			case "profilePicture": return s._(
				/*BTDS*/
				""
			);
			case "lastSeen": return s._(
				/*BTDS*/
				""
			);
			case "groupAdd": return s._(
				/*BTDS*/
				""
			);
			case "pix": return o("WAWebConsumerPixStrings").getConsumerPixVisibilityMyContactsExcept();
		}
	}
	function h(t) {
		var n, a, i, l, c, d = t.category, m = t.onBack, h = t.onConfirm, v = t.onDismiss, S = (n = m != null ? m : v) != null ? n : b, R = r("useWAWebAsync")(function() {
			var t = async function() {
				try {
					var t = async function() {
						var e = f(d);
						await o("WAWebSyncPrivacyDisallowedLists").syncSinglePrivacyDisallowedList(e);
						var t = await o("WAWebSchemaPrivacyDisallowedList").getPrivacyDisallowedListTable().get(e);
						if (t != null) {
							var n = C(t);
							return {
								excludedContacts: n,
								dhash: t.dhash
							};
						}
					};
					return await o("WAPromiseTimeout").promiseTimeout(t(), o("WAWebSettingsConst").WAIT_FOR_PRIVACY_LIST_SYNC_TIMEOUT_MS);
				} catch (t) {
					var n = r("getErrorSafe")(t);
					throw t instanceof o("WACustomError").TimeoutError || o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["error: ", ""])), String(n.stack)).sendLogs("SelectContactsExceptModal:failed to get privacyDisallowedList"), o("WAWebToastManager").ToastManager.open(p.jsx(o("WAWebToast.react").Toast, { msg: s._(
						/*BTDS*/
						""
					) })), S(), t;
				}
			};
			return t();
		}, [d]), L = r("useWAWebFilteredContacts")();
		if (R.error != null) return null;
		var E = (a = (i = R.value) == null ? void 0 : i.excludedContacts) != null ? a : [], k = (l = (c = R.value) == null ? void 0 : c.dhash) != null ? l : null, I = async function(t, n) {
			var e = E.map(function(e) {
				return {
					wid: e.id,
					username: e.username
				};
			}), a = t.map(function(e) {
				return {
					wid: e.id,
					username: e.username
				};
			}), i = o("WAArrayDifferenceBy").differenceBy(a, e, function(e) {
				return e.wid.toString();
			}).map(function(e) {
				return {
					action: o("WAWebSetPrivacyJob").PrivacyUserAction.Add,
					wid: e.wid,
					username: e.username
				};
			}), l = o("WAArrayDifferenceBy").differenceBy(e, a, function(e) {
				return e.wid.toString();
			}).map(function(e) {
				return {
					action: o("WAWebSetPrivacyJob").PrivacyUserAction.Remove,
					wid: e.wid,
					username: e.username
				};
			}), c = [].concat(i, l), m = o("WAWebSetPrivacyForOneCategoryAction").privacyWebNameToServerName(d);
			if (m === "readreceipts" || m === "online" || m === "calladd" || m === "messages") throw r("err")("select_contacts_except_modal: name can not be " + m);
			try {
				await o("WAWebSetPrivacyForOneCategoryAction").setPrivacyForOneCategory({
					value: "contact_blacklist",
					users: c,
					dhash: n,
					name: m
				}, a.map(function(e) {
					return e.wid;
				})), h();
			} catch (e) {
				var _ = r("getErrorSafe")(e), f = e instanceof o("WAWebBackendErrors").ServerStatusCodeError && e.statusCode === 409;
				f || o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose(["select_contacts_except_modal: set visibility option failed ", ""])), _.stack).sendLogs("select_contacts_except_modal: set visibility option failed"), o("WAWebToastManager").ToastManager.open(p.jsx(o("WAWebToast.react").Toast, { msg: s._(
					/*BTDS*/
					""
				) }));
			}
			S();
		}, T = Array.from(new Set([].concat(L, E)));
		return p.jsx(o("WAWebSelectModal.react").SelectModal, babelHelpers.extends({ title: g(d) }, m != null ? { onBack: S } : { onCancel: S }, {
			onConfirm: function(t) {
				var e = t.selectedItems;
				return I(e, k);
			},
			allowUnknownContactSearch: !1,
			getInitialItems: function() {
				return E;
			},
			loadingInitialItems: R.loading,
			listType: o("WAWebSelectModal.react").ListType.ContactSelectModal,
			maxItems: _,
			singleSelectionFooterType: o("WAWebSelectModalFooter.react").FooterType.CONFIRM,
			multipleSelectionFooterType: o("WAWebSelectModalFooter.react").FooterType.CONFIRM,
			contacts: T,
			getSelectionSummary: y,
			enableSelectAll: !0,
			activeWithoutSelection: !0,
			tsNavigationData: {
				surface: "unknown",
				viewName: "select-contacts-except"
			}
		}));
	}
	h.displayName = h.name + " [from " + i.id + "]";
	function y(e) {
		var t = e.length;
		return s._(
			/*BTDS*/
			"",
			[s._plural(t, "count")]
		).toString();
	}
	function C(e) {
		if (o("WAWebQueryPrivacyDisallowedListUtil").isPrivacyDisallowedListTypeLidMigrated()) {
			var t = o("WAWebUsernameWorkerCompatibleGatingUtils").onlyShowLidContacts(), n = o("WAWebLidMigrationUtils").toAddressingModeFactory(t);
			return e.disallowedList.map(function(e) {
				var r = o("WAWebWidFactory").createWid(e), a = n(r);
				return a == null ? (t ? o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose(["id is null for lid in privacy list"]))).sendLogs("missing-id-for-lid-in-privacy-list") : o("WALogger").ERROR(d || (d = babelHelpers.taggedTemplateLiteralLoose(["pn is null for lid in privacy list"]))).sendLogs("missing-pn-for-lid-in-privacy-list"), o("WAWebContactCollection").ContactCollection.gadd(r)) : o("WAWebContactCollection").ContactCollection.gadd(a);
			});
		}
		return e.disallowedList.map(function(e) {
			return o("WAWebContactCollection").ContactCollection.gadd(o("WAWebWidFactory").createWid(e));
		});
	}
	function b() {
		o("WAWebModalManager").ModalManager.close();
	}
	l.default = h;
}), 226);
