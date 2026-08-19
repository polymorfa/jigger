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
		var t = o("react-compiler-runtime").c(30), a = e.initialContacts, i = e.initialErrorList, l = e.onClose, c = e.saveContactsImpl, d = c === void 0 ? o("WAWebContactManagerImportSaveAction").saveImportedContacts : c, f;
		t[0] !== a || t[1] !== i ? (f = {
			errorList: i,
			validContactsData: a
		}, t[0] = a, t[1] = i, t[2] = f) : f = t[2];
		var g = m(o("WAWebContactManagerImportReducer").reducer, f), h = g[0], y = g[1], C = h.errorList, b = h.validContactsData, v = p("review"), S = v[0], R = v[1], L;
		t[3] !== b.length || t[4] !== C.length || t[5] !== l ? (L = function() {
			o("WAWebContactManagerSMBUserJourneyLogger").ContactManagerUserJourneyLogger.dismissImportReview(b.length, C.length), l();
		}, t[3] = b.length, t[4] = C.length, t[5] = l, t[6] = L) : L = t[6];
		var E = L, k;
		t[7] === Symbol.for("react.memo_cache_sentinel") ? (k = function(t) {
			o("WAWebContactManagerSMBUserJourneyLogger").ContactManagerUserJourneyLogger.clickImportDeleteContact(), y({
				payload: { contact: t },
				type: "DELETE_CONTACT"
			});
		}, t[7] = k) : k = t[7];
		var I = k, T;
		t[8] === Symbol.for("react.memo_cache_sentinel") ? (T = function(t) {
			o("WAWebContactManagerSMBUserJourneyLogger").ContactManagerUserJourneyLogger.clickImportDeleteError(), y({
				payload: { errorItem: t },
				type: "DELETE_ERROR_ITEM"
			});
		}, t[8] = T) : T = t[8];
		var D = T, x;
		t[9] === Symbol.for("react.memo_cache_sentinel") ? (x = function() {
			o("WAWebContactManagerSMBUserJourneyLogger").ContactManagerUserJourneyLogger.clickImportDeleteAllErrors(), y({ type: "DELETE_ALL_ERROR_ITEMS" });
		}, t[9] = x) : x = t[9];
		var $ = x, P;
		t[10] !== b || t[11] !== l || t[12] !== S || t[13] !== d ? (P = (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				if (S === "review") {
					o("WAWebContactManagerSMBUserJourneyLogger").ContactManagerUserJourneyLogger.clickImportSaveContacts(b.length), R("saving");
					var e = o("WATimeUtils").monotonicTime(), t;
					try {
						t = yield d(b);
					} catch (e) {
						t = {
							failureCount: b.length,
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
					})), l();
				}
			});
			return function() {
				return e.apply(this, arguments);
			};
		})(), t[10] = b, t[11] = l, t[12] = S, t[13] = d, t[14] = P) : P = t[14];
		var N = P, M = C.length > 0 || b.length === 0 || S !== "review", w = S === "saving", A;
		t[15] === Symbol.for("react.memo_cache_sentinel") ? (A = s._(
			/*BTDS*/
			""
		), t[15] = A) : A = t[15];
		var F = w ? void 0 : E, O;
		t[16] !== F ? (O = u.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
			testid: "cm-import-review-drawer-header",
			title: A,
			type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
			onBack: F,
			focusBackOrCancel: !0
		}), t[16] = F, t[17] = O) : O = t[17];
		var B;
		t[18] !== b || t[19] !== C || t[20] !== w ? (B = u.jsx(r("WAWebDrawerBody.react"), {
			isRefresh: !0,
			xstyle: _.drawerBody,
			children: w ? u.jsx("div", {
				className: "x6s0dn4 x78zum5 x1iyjqo2 xl56j7k",
				"data-testid": "cm-import-review-saving",
				children: u.jsx(o("WAWebSpinner.react").Spinner, { size: 48 })
			}) : u.jsxs(u.Fragment, { children: [u.jsx(r("WAWebContactManagerImportErrorsList.react"), {
				errorList: C,
				onDeleteAllErrors: $,
				onDeleteErrorItem: D
			}), u.jsx(r("WAWebBizCard.react"), {
				testid: "cm-import-review-imported-card",
				header: s._(
					/*BTDS*/
					""
				),
				subtitle: s._(
					/*BTDS*/
					"",
					[s._plural(b.length, "number")]
				),
				children: u.jsx(r("WAWebContactManagerImportContactsTable.react"), {
					contacts: b,
					onDeleteContact: I
				})
			})] })
		}), t[18] = b, t[19] = C, t[20] = w, t[21] = B) : B = t[21];
		var W;
		t[22] !== N || t[23] !== M || t[24] !== w ? (W = w ? null : u.jsx("div", {
			className: "x6s0dn4 x178xt8z x13fuv20 xx42vgk xs2akgl x78zum5 x13a6bvl x1p57kb1 xvpt6g3 xb0esv5 xyo0t3i",
			children: u.jsx(r("WDSButton.react"), {
				variant: "filled",
				type: "default",
				disabled: M,
				label: s._(
					/*BTDS*/
					""
				),
				onPress: function() {
					N();
				},
				testid: "cm-import-review-save-btn"
			})
		}), t[22] = N, t[23] = M, t[24] = w, t[25] = W) : W = t[25];
		var q;
		return t[26] !== O || t[27] !== B || t[28] !== W ? (q = u.jsxs(r("WAWebDrawer.react"), {
			testid: "cm-import-review-drawer",
			children: [
				O,
				B,
				W
			]
		}), t[26] = O, t[27] = B, t[28] = W, t[29] = q) : q = t[29], q;
	}
	l.default = f;
}), 226);
