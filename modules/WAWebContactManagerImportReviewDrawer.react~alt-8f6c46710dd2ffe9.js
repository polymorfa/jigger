__d("WAWebContactManagerImportReviewDrawer.react", [
	"fbt",
	"WATimeUtils",
	"WAWebBizCard.react",
	"WAWebContactManagerImportContactsTable.react",
	"WAWebContactManagerImportErrorsList.react",
	"WAWebContactManagerImportReducer",
	"WAWebContactManagerImportSaveAction",
	"WAWebContactManagerSMBUserJourneyLogger",
	"WAWebDrawer.react",
	"WAWebDrawerBody.react",
	"WAWebDrawerHeader.react",
	"WAWebSpinner.react",
	"WAWebToast.react",
	"WAWebToastManager",
	"WDSButton.react",
	"asyncToGeneratorRuntime",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e, d = c.useCallback, m = c.useReducer, p = c.useState, _ = { drawerBody: {
		backgroundColor: "x1h3rtpe",
		paddingTop: "x1p57kb1",
		paddingBottom: "xvpt6g3",
		paddingInlineStart: "xb0esv5",
		paddingInlineEnd: "xyo0t3i",
		paddingLeft: null,
		paddingRight: null,
		rowGap: "x1f0uite",
		display: "x78zum5",
		flexDirection: "xdt5ytf",
		$$css: !0
	} };
	function f(e) {
		var t = e.initialContacts, a = e.initialErrorList, i = e.onClose, l = e.saveContactsImpl, c = l === void 0 ? o("WAWebContactManagerImportSaveAction").saveImportedContacts : l, f = m(o("WAWebContactManagerImportReducer").reducer, {
			errorList: a,
			validContactsData: t
		}), g = f[0], h = f[1], y = g.errorList, C = g.validContactsData, b = p("review"), v = b[0], S = b[1], R = d(function() {
			o("WAWebContactManagerSMBUserJourneyLogger").ContactManagerUserJourneyLogger.dismissImportReview(C.length, y.length), i();
		}, [
			C.length,
			y.length,
			i
		]), L = d(function(e) {
			o("WAWebContactManagerSMBUserJourneyLogger").ContactManagerUserJourneyLogger.clickImportDeleteContact(), h({
				payload: { contact: e },
				type: "DELETE_CONTACT"
			});
		}, []), E = d(function(e) {
			o("WAWebContactManagerSMBUserJourneyLogger").ContactManagerUserJourneyLogger.clickImportDeleteError(), h({
				payload: { errorItem: e },
				type: "DELETE_ERROR_ITEM"
			});
		}, []), k = d(function() {
			o("WAWebContactManagerSMBUserJourneyLogger").ContactManagerUserJourneyLogger.clickImportDeleteAllErrors(), h({ type: "DELETE_ALL_ERROR_ITEMS" });
		}, []), I = d(n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
			if (v === "review") {
				o("WAWebContactManagerSMBUserJourneyLogger").ContactManagerUserJourneyLogger.clickImportSaveContacts(C.length), S("saving");
				var e = o("WATimeUtils").monotonicTime(), t;
				try {
					t = yield c(C);
				} catch (e) {
					t = {
						failureCount: C.length,
						successCount: 0
					};
				}
				o("WAWebContactManagerSMBUserJourneyLogger").ContactManagerUserJourneyLogger.importSaveResult(t.successCount, t.failureCount, o("WATimeUtils").monotonicTimeSince(e)), o("WAWebToastManager").ToastManager.open(u.jsx(o("WAWebToast.react").Toast, {
					id: o("WAWebToast.react").genId(),
					msg: s._(
						/*BTDS*/
						"",
						[s._plural(t.successCount, "number")]
					)
				})), i();
			}
		}), [
			C,
			i,
			v,
			c
		]), T = y.length > 0 || C.length === 0 || v !== "review", D = v === "saving";
		return u.jsxs(r("WAWebDrawer.react"), {
			testid: "cm-import-review-drawer",
			children: [
				u.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
					testid: "cm-import-review-drawer-header",
					title: s._(
						/*BTDS*/
						""
					),
					type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
					onBack: D ? void 0 : R,
					focusBackOrCancel: !0
				}),
				u.jsx(r("WAWebDrawerBody.react"), {
					isRefresh: !0,
					xstyle: _.drawerBody,
					children: D ? u.jsx("div", {
						className: "x6s0dn4 x78zum5 x1iyjqo2 xl56j7k",
						"data-testid": "cm-import-review-saving",
						children: u.jsx(o("WAWebSpinner.react").Spinner, { size: 48 })
					}) : u.jsxs(u.Fragment, { children: [u.jsx(r("WAWebContactManagerImportErrorsList.react"), {
						errorList: y,
						onDeleteAllErrors: k,
						onDeleteErrorItem: E
					}), u.jsx(r("WAWebBizCard.react"), {
						testid: "cm-import-review-imported-card",
						header: s._(
							/*BTDS*/
							""
						),
						subtitle: s._(
							/*BTDS*/
							"",
							[s._plural(C.length, "number")]
						),
						children: u.jsx(r("WAWebContactManagerImportContactsTable.react"), {
							contacts: C,
							onDeleteContact: L
						})
					})] })
				}),
				D ? null : u.jsx("div", {
					className: "x6s0dn4 x178xt8z x13fuv20 xx42vgk xs2akgl x78zum5 x13a6bvl x1p57kb1 xvpt6g3 xb0esv5 xyo0t3i",
					children: u.jsx(r("WDSButton.react"), {
						variant: "filled",
						type: "default",
						disabled: T,
						label: s._(
							/*BTDS*/
							""
						),
						onPress: function() {
							I();
						},
						testid: "cm-import-review-save-btn"
					})
				})
			]
		});
	}
	f.displayName = f.name + " [from " + i.id + "]", l.default = f;
}), 226);
