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
	"react",
	"react-compiler-runtime"
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
		var t = o("react-compiler-runtime").c(30), n = e.initialContacts, a = e.initialErrorList, i = e.onClose, l = e.saveContactsImpl, c = l === void 0 ? o("WAWebContactManagerImportSaveAction").saveImportedContacts : l, d;
		t[0] !== n || t[1] !== a ? (d = {
			errorList: a,
			validContactsData: n
		}, t[0] = n, t[1] = a, t[2] = d) : d = t[2];
		var f = m(o("WAWebContactManagerImportReducer").reducer, d), g = f[0], h = f[1], y = g.errorList, C = g.validContactsData, b = p("review"), v = b[0], S = b[1], R;
		t[3] !== C.length || t[4] !== y.length || t[5] !== i ? (R = function() {
			o("WAWebContactManagerSMBUserJourneyLogger").ContactManagerUserJourneyLogger.dismissImportReview(C.length, y.length), i();
		}, t[3] = C.length, t[4] = y.length, t[5] = i, t[6] = R) : R = t[6];
		var L = R, E;
		t[7] === Symbol.for("react.memo_cache_sentinel") ? (E = function(t) {
			o("WAWebContactManagerSMBUserJourneyLogger").ContactManagerUserJourneyLogger.clickImportDeleteContact(), h({
				payload: { contact: t },
				type: "DELETE_CONTACT"
			});
		}, t[7] = E) : E = t[7];
		var k = E, I;
		t[8] === Symbol.for("react.memo_cache_sentinel") ? (I = function(t) {
			o("WAWebContactManagerSMBUserJourneyLogger").ContactManagerUserJourneyLogger.clickImportDeleteError(), h({
				payload: { errorItem: t },
				type: "DELETE_ERROR_ITEM"
			});
		}, t[8] = I) : I = t[8];
		var T = I, D;
		t[9] === Symbol.for("react.memo_cache_sentinel") ? (D = function() {
			o("WAWebContactManagerSMBUserJourneyLogger").ContactManagerUserJourneyLogger.clickImportDeleteAllErrors(), h({ type: "DELETE_ALL_ERROR_ITEMS" });
		}, t[9] = D) : D = t[9];
		var x = D, $;
		t[10] !== C || t[11] !== i || t[12] !== v || t[13] !== c ? ($ = async function() {
			if (v === "review") {
				o("WAWebContactManagerSMBUserJourneyLogger").ContactManagerUserJourneyLogger.clickImportSaveContacts(C.length), S("saving");
				var e = o("WATimeUtils").monotonicTime(), t;
				try {
					t = await c(C);
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
		}, t[10] = C, t[11] = i, t[12] = v, t[13] = c, t[14] = $) : $ = t[14];
		var P = $, N = y.length > 0 || C.length === 0 || v !== "review", M = v === "saving", w;
		t[15] === Symbol.for("react.memo_cache_sentinel") ? (w = s._(
			/*BTDS*/
			""
		), t[15] = w) : w = t[15];
		var A = M ? void 0 : L, F;
		t[16] !== A ? (F = u.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
			testid: "cm-import-review-drawer-header",
			title: w,
			type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
			onBack: A,
			focusBackOrCancel: !0
		}), t[16] = A, t[17] = F) : F = t[17];
		var O;
		t[18] !== C || t[19] !== y || t[20] !== M ? (O = u.jsx(r("WAWebDrawerBody.react"), {
			isRefresh: !0,
			xstyle: _.drawerBody,
			children: M ? u.jsx("div", {
				className: "x6s0dn4 x78zum5 x1iyjqo2 xl56j7k",
				"data-testid": "cm-import-review-saving",
				children: u.jsx(o("WAWebSpinner.react").Spinner, { size: 48 })
			}) : u.jsxs(u.Fragment, { children: [u.jsx(r("WAWebContactManagerImportErrorsList.react"), {
				errorList: y,
				onDeleteAllErrors: x,
				onDeleteErrorItem: T
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
					onDeleteContact: k
				})
			})] })
		}), t[18] = C, t[19] = y, t[20] = M, t[21] = O) : O = t[21];
		var B;
		t[22] !== P || t[23] !== N || t[24] !== M ? (B = M ? null : u.jsx("div", {
			className: "x6s0dn4 x178xt8z x13fuv20 xx42vgk xs2akgl x78zum5 x13a6bvl x1p57kb1 xvpt6g3 xb0esv5 xyo0t3i",
			children: u.jsx(r("WDSButton.react"), {
				variant: "filled",
				type: "default",
				disabled: N,
				label: s._(
					/*BTDS*/
					""
				),
				onPress: function() {
					P();
				},
				testid: "cm-import-review-save-btn"
			})
		}), t[22] = P, t[23] = N, t[24] = M, t[25] = B) : B = t[25];
		var W;
		return t[26] !== F || t[27] !== O || t[28] !== B ? (W = u.jsxs(r("WAWebDrawer.react"), {
			testid: "cm-import-review-drawer",
			children: [
				F,
				O,
				B
			]
		}), t[26] = F, t[27] = O, t[28] = B, t[29] = W) : W = t[29], W;
	}
	l.default = f;
}), 226);
