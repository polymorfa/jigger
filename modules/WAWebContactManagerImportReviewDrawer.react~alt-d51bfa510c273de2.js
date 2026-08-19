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
		var t = e.initialContacts, n = e.initialErrorList, a = e.onClose, i = e.saveContactsImpl, l = i === void 0 ? o("WAWebContactManagerImportSaveAction").saveImportedContacts : i, c = m(o("WAWebContactManagerImportReducer").reducer, {
			errorList: n,
			validContactsData: t
		}), f = c[0], g = c[1], h = f.errorList, y = f.validContactsData, C = p("review"), b = C[0], v = C[1], S = d(function() {
			o("WAWebContactManagerSMBUserJourneyLogger").ContactManagerUserJourneyLogger.dismissImportReview(y.length, h.length), a();
		}, [
			y.length,
			h.length,
			a
		]), R = d(function(e) {
			o("WAWebContactManagerSMBUserJourneyLogger").ContactManagerUserJourneyLogger.clickImportDeleteContact(), g({
				payload: { contact: e },
				type: "DELETE_CONTACT"
			});
		}, []), L = d(function(e) {
			o("WAWebContactManagerSMBUserJourneyLogger").ContactManagerUserJourneyLogger.clickImportDeleteError(), g({
				payload: { errorItem: e },
				type: "DELETE_ERROR_ITEM"
			});
		}, []), E = d(function() {
			o("WAWebContactManagerSMBUserJourneyLogger").ContactManagerUserJourneyLogger.clickImportDeleteAllErrors(), g({ type: "DELETE_ALL_ERROR_ITEMS" });
		}, []), k = d(async function() {
			if (b === "review") {
				o("WAWebContactManagerSMBUserJourneyLogger").ContactManagerUserJourneyLogger.clickImportSaveContacts(y.length), v("saving");
				var e = o("WATimeUtils").monotonicTime(), t;
				try {
					t = await l(y);
				} catch (e) {
					t = {
						failureCount: y.length,
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
				})), a();
			}
		}, [
			y,
			a,
			b,
			l
		]), I = h.length > 0 || y.length === 0 || b !== "review", T = b === "saving";
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
					onBack: T ? void 0 : S,
					focusBackOrCancel: !0
				}),
				u.jsx(r("WAWebDrawerBody.react"), {
					isRefresh: !0,
					xstyle: _.drawerBody,
					children: T ? u.jsx("div", {
						className: "x6s0dn4 x78zum5 x1iyjqo2 xl56j7k",
						"data-testid": "cm-import-review-saving",
						children: u.jsx(o("WAWebSpinner.react").Spinner, { size: 48 })
					}) : u.jsxs(u.Fragment, { children: [u.jsx(r("WAWebContactManagerImportErrorsList.react"), {
						errorList: h,
						onDeleteAllErrors: E,
						onDeleteErrorItem: L
					}), u.jsx(r("WAWebBizCard.react"), {
						testid: "cm-import-review-imported-card",
						header: s._(
							/*BTDS*/
							""
						),
						subtitle: s._(
							/*BTDS*/
							"",
							[s._plural(y.length, "number")]
						),
						children: u.jsx(r("WAWebContactManagerImportContactsTable.react"), {
							contacts: y,
							onDeleteContact: R
						})
					})] })
				}),
				T ? null : u.jsx("div", {
					className: "x6s0dn4 x178xt8z x13fuv20 xx42vgk xs2akgl x78zum5 x13a6bvl x1p57kb1 xvpt6g3 xb0esv5 xyo0t3i",
					children: u.jsx(r("WDSButton.react"), {
						variant: "filled",
						type: "default",
						disabled: I,
						label: s._(
							/*BTDS*/
							""
						),
						onPress: function() {
							k();
						},
						testid: "cm-import-review-save-btn"
					})
				})
			]
		});
	}
	f.displayName = f.name + " [from " + i.id + "]", l.default = f;
}), 226);
