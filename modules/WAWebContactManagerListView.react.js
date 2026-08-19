__d("WAWebContactManagerListView.react", [
	"WALogger",
	"WAWebColumnSelector.react",
	"WAWebContactManagerBulkActionToolbar.react",
	"WAWebContactManagerBulkAddToListAction",
	"WAWebContactManagerEmptyState.react",
	"WAWebContactManagerListViewColumns",
	"WAWebContactManagerSMBUserJourneyLogger",
	"WAWebContactManagerSearchEmptyState.react",
	"WAWebContactManagerUserPrefs",
	"WAWebCustomerDataCollection",
	"WAWebCustomerDataFieldSaver",
	"WAWebLeadStage",
	"WAWebSMBTable.react",
	"react",
	"useWAWebStableCallback"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = s, d = c.useCallback, m = c.useEffect, p = c.useMemo, _ = c.useRef, f = c.useState, g = 1630, h = 1678;
	function y(t) {
		var n = t.bulkEditMode, a = t.customers, i = t.hasActiveFilter, l = t.onAddCustomer, s = t.onChatClick, c = t.onCustomerClick, g = t.onDeleteCustomer, h = t.onExitBulkEdit, y = t.onLearnMore, b = t.onManageLabels, v = t.selectedCustomerJid, S = t.selection, R = f(o("WAWebContactManagerUserPrefs").getVisibleColumns), L = R[0], E = R[1], k = f(o("WAWebContactManagerUserPrefs").getColumnOrder), I = k[0], T = k[1], D = f(null), x = D[0], $ = D[1], P = f(""), N = P[0], M = P[1], w = r("useWAWebStableCallback")(function(e) {
			var t, n = x, r = (t = n == null ? void 0 : n.key) != null ? t : null, a, i;
			n != null && n.key === e ? n.direction === "asc" ? (a = {
				key: e,
				direction: "desc"
			}, i = "desc") : (a = null, i = "clear") : (a = {
				key: e,
				direction: "asc"
			}, i = "asc"), $(a), o("WAWebContactManagerSMBUserJourneyLogger").ContactManagerUserJourneyLogger.clickColumnHeader(e, i, r);
		}), A = d(function(e, t) {
			T(function(n) {
				var r = [].concat(n), o = r.indexOf(e), a = r.indexOf(t);
				return o === -1 || a === -1 ? n : (r.splice(o, 1), r.splice(a, 0, e), r);
			});
		}, []), F = f(a), O = F[0], B = F[1], W = f(x), q = W[0], U = W[1], V = f(function() {
			return o("WAWebCustomerDataCollection").CustomerDataCollection.sortCustomers(a, x);
		}), H = V[0], G = V[1];
		if (x !== q) U(x), B(a), G(o("WAWebCustomerDataCollection").CustomerDataCollection.sortCustomers(a, x));
		else if (a !== O) {
			var z = new Set(O.map(function(e) {
				return String(e.id);
			})), j = z.size !== a.length || a.some(function(e) {
				return !z.has(String(e.id));
			});
			B(a), j && G(o("WAWebCustomerDataCollection").CustomerDataCollection.sortCustomers(a, x));
		}
		var K = d(function(e) {
			for (var t of Array.from(S.selectedJids)) {
				var n, r = o("WAWebCustomerDataCollection").CustomerDataCollection.maybeGetCustomerDataByChatJid(t), a = (n = o("WAWebLeadStage").getLeadStageFromNumber(r == null ? void 0 : r.leadStage)) != null ? n : o("WAWebLeadStage").LeadStage.NONE;
				o("WAWebContactManagerSMBUserJourneyLogger").ContactManagerUserJourneyLogger.editLeadStage(a, e, "bulk_toolbar"), o("WAWebCustomerDataFieldSaver").handleLeadStageTransition(t, r, e, a);
			}
			S.clear();
		}, [S]), Q = d(function(t) {
			var n = Array.from(S.selectedJids);
			o("WAWebContactManagerBulkAddToListAction").bulkAddCustomersToList(n, t).catch(function(t) {
				o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[ContactManager] Failed to bulk add to list: ", ""])), String(t)).sendLogs("customer-manager-bulk-add-to-list-handler-failed");
			}), S.clear();
		}, [S]), X = p(function() {
			return o("WAWebContactManagerListViewColumns").getOrderedReorderableColumnKeys(I, L);
		}, [I, L]), Y = o("WAWebContactManagerListViewColumns").getContactManagerListColumns(s, g, x, w, A, n === !0 ? S : null, X, M), J = d(function(e) {
			E(function(t) {
				var n = t.includes(e) ? t.filter(function(t) {
					return t !== e;
				}) : [].concat(t, [e]);
				return n;
			});
		}, []);
		m(function() {
			o("WAWebContactManagerUserPrefs").saveVisibleColumns(L);
		}, [L]), m(function() {
			o("WAWebContactManagerUserPrefs").saveColumnOrder(I);
		}, [I]);
		var Z = p(function() {
			var e = Y.filter(function(e) {
				return L.includes(e.key) || o("WAWebContactManagerListViewColumns").ALWAYS_VISIBLE_COLUMNS.includes(e.key);
			});
			return e.sort(function(e, t) {
				return e.key === "select" ? -1 : t.key === "select" ? 1 : e.key === "customer" ? -1 : t.key === "customer" || e.key === "actions" ? 1 : t.key === "actions" ? -1 : I.indexOf(e.key) - I.indexOf(t.key);
			});
		}, [
			Y,
			I,
			L
		]), ee = _(null);
		return a.length === 0 ? i === !0 ? u.jsx(r("WAWebContactManagerSearchEmptyState.react"), { testid: "customer-manager-list-search-empty" }) : u.jsx(r("WAWebContactManagerEmptyState.react"), {
			onAddCustomer: l,
			onLearnMore: y,
			onManageLabels: b
		}) : u.jsxs("div", {
			className: "x1c7u0tx x78zum5 xdt5ytf x5yr21d x6ikm8r x10wlt62",
			"data-testid": "customer-manager-list-view",
			children: [
				u.jsx(o("WAWebContactManagerListViewColumns").ColumnReorderAnnouncer, { announcement: N }),
				u.jsx("div", {
					className: "x78zum5 x13a6bvl xvtqlqk x1tiyuxx x1nbhmlj",
					children: u.jsx(r("WAWebColumnSelector.react"), {
						columnOrder: I,
						visibleColumns: L,
						onToggleColumn: J,
						testid: "customer_manager_column_selector_chip"
					})
				}),
				n === !0 && u.jsx(r("WAWebContactManagerBulkActionToolbar.react"), {
					onAddToList: Q,
					onExit: h,
					onSetStage: K,
					selectedCount: S.selectedCount
				}),
				u.jsx("div", {
					ref: ee,
					className: "x12lumcd x2lwn1j xw2csxc x1odjw0f",
					children: u.jsx("div", babelHelpers.extends({}, {
						0: { className: "xrnv6x6" },
						1: { className: "x1sg19dm" }
					}[(n === !0) << 0], { children: u.jsx(r("WAWebSMBTable.react"), {
						columns: Z,
						getItemKey: C,
						items: H,
						onRowClick: c,
						scrollContainerRef: ee,
						selectedKey: v
					}) }))
				})
			]
		});
	}
	y.displayName = y.name + " [from " + i.id + "]";
	function C(e) {
		return e.chatJid;
	}
	l.default = y;
}), 98);
