__d("WAWebContactManagerListViewColumns", [
	"fbt",
	"WAWebAcquisitionSourceNames",
	"WAWebChatCollection",
	"WAWebContactCollection",
	"WAWebContactManagerActionsCell.react",
	"WAWebContactManagerCustomerCell.react",
	"WAWebContactManagerListCell.react",
	"WAWebContactManagerListViewColumnWidths",
	"WAWebContactManagerNotesCell.react",
	"WAWebContactManagerSMBUserJourneyLogger",
	"WAWebCustomerDataFieldSaver",
	"WAWebFrontendContactGetters",
	"WAWebL10N",
	"WAWebLeadStageChip.react",
	"WAWebListsGatingUtils",
	"WAWebNoop",
	"WDSBaseCheckbox.react",
	"WDSFocusStateStyles",
	"WDSIconIcArrowDropDown.react",
	"WDSIconIcDragHandle.react",
	"WDSText.react",
	"react",
	"stylex",
	"useMergeRefs",
	"useWAWebFocusState",
	"useWAWebHover"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u, c = u || (u = o("react")), d = u, m = d.useMemo, p = d.useRef, _ = d.useState, f = {
		alignItems: "x6s0dn4",
		display: "x78zum5",
		flexShrink: "x2lah0s",
		justifyContent: "xl56j7k",
		marginInlineStart: "x15w1vwp",
		$$css: !0
	}, g = { center: function(t) {
		return [
			f,
			{
				width: t != null ? "x5lhr3w" : t,
				$$css: !0
			},
			{ "--x-width": (function(e) {
				return typeof e == "number" ? e + "px" : e != null ? e : void 0;
			})(t) }
		];
	} }, h = {
		wrapper: {
			display: "x78zum5",
			alignItems: "x6s0dn4",
			columnGap: "x1ned7t2",
			maxWidth: "x193iq5w",
			paddingTop: "x1tiyuxx",
			paddingBottom: "x1nbhmlj",
			position: "x1n2onr6",
			$$css: !0
		},
		sortable: {
			borderStartStartRadius: "xyi3aci",
			borderStartEndRadius: "xwf5gio",
			borderEndEndRadius: "x1p453bz",
			borderEndStartRadius: "x1suzm8a",
			cursor: "x1ypdohk",
			$$css: !0
		},
		draggableExpand: {
			boxSizing: "x9f619",
			cursor: "x1jm3nie",
			height: "xn3w4p2",
			marginTop: "xe3kor7",
			marginInlineStart: "x15w1vwp",
			marginInlineEnd: "x1olz2oy",
			marginLeft: null,
			marginRight: null,
			paddingTop: "x1p57kb1",
			paddingInlineStart: "x1phvje8",
			paddingInlineEnd: "xcldk2z",
			paddingLeft: null,
			paddingRight: null,
			$$css: !0
		},
		dragging: {
			opacity: "xti2d7y",
			$$css: !0
		}
	};
	function y(e, t, n) {
		return n == null || $.includes(e) ? null : {
			draggable: !0,
			onDragStart: function(r) {
				r.dataTransfer.setData("text/plain", e), r.dataTransfer.effectAllowed = "move", t(!0);
			},
			onDragEnd: function() {
				t(!1);
			},
			onDragOver: function(t) {
				t.preventDefault(), t.dataTransfer.dropEffect = "move";
			},
			onDrop: function(r) {
				r.preventDefault();
				var t = r.dataTransfer.getData("text/plain"), o = P.find(function(e) {
					return e === t;
				});
				o != null && o !== e && n(o, e);
			}
		};
	}
	function C() {
		var e = p(null), t = o("useWAWebHover").useWAWebHover(e), n = r("useWAWebFocusState")(), a = n[0], i = n[1], l = r("useMergeRefs")(e, a);
		return {
			revealed: t || i,
			setHeaderRef: l
		};
	}
	function b() {
		return s._(
			/*BTDS*/
			""
		);
	}
	function v(e) {
		var t = e.announcement;
		return c.jsx("span", {
			className: "x10l6tqk x1i1rx1s xjm9jq1 xexx8yu x18d9i69 x1c1uobl xyri2b x1y332i5 x1jyxor1 x1hb08if xjn30re x6ikm8r x10wlt62 x1hyvwdk xuxw1ft x972fbf x10w94by x1qhh985 x14e42zd",
			"aria-live": "assertive",
			"data-testid": "contact_manager_column_reorder_announcer",
			children: t
		});
	}
	v.displayName = v.name + " [from " + i.id + "]";
	function S(e, t, n, o, a, i) {
		var l = _(!1), u = l[0], c = l[1], d = p(null), m = p(0);
		function f(e) {
			m.current += 1;
			var t = m.current % 2 === 0 ? "" : "​";
			a(String(e) + t);
		}
		function g(e) {
			d.current = e, c(!0), f(s._(
				/*BTDS*/
				"",
				[
					s._param("column name", t),
					s._param("position", e + 1),
					s._param("total", n.length)
				]
			));
		}
		function h() {
			c(!1), d.current = null, f(s._(
				/*BTDS*/
				""
			));
		}
		function y(t) {
			var r = d.current;
			r != null && r !== t && i != null && i(e, n[r]), c(!1), d.current = null, f(s._(
				/*BTDS*/
				""
			));
		}
		function C(e) {
			f(e ? s._(
				/*BTDS*/
				""
			) : s._(
				/*BTDS*/
				""
			));
		}
		function b(t, o) {
			var a = r("WAWebL10N").isRTL() ? "ArrowLeft" : "ArrowRight", l = r("WAWebL10N").isRTL() ? "ArrowRight" : "ArrowLeft", u;
			if (t.key === a) u = o + 1;
			else if (t.key === l) u = o - 1;
			else return !1;
			return t.preventDefault(), u < 0 || u >= n.length ? (C(u < 0), !0) : (i != null && (i(e, n[u]), f(s._(
				/*BTDS*/
				"",
				[s._param("position", u + 1)]
			))), !0);
		}
		function v(e, t) {
			return e.key === "Enter" || e.key === " " ? (e.preventDefault(), h(), !0) : e.key === "Escape" ? (e.preventDefault(), y(t), !0) : b(e, t);
		}
		function S() {
			u && y(n.indexOf(e));
		}
		function R(t) {
			if (!o) return !1;
			var r = n.indexOf(e);
			return r === -1 ? !1 : u ? v(t, r) : t.key === " " ? (t.preventDefault(), g(r), !0) : !1;
		}
		return {
			handleReorderBlur: S,
			handleReorderKeyDown: R
		};
	}
	function R(e) {
		var t = e.revealed;
		return c.jsx("div", babelHelpers.extends({}, {
			0: { className: "x10l6tqk x1cfcev x13vifvy x1ey2m1c x6s0dn4 x78zum5 xg01cxk x1g2r6go x19991ni" },
			1: { className: "x10l6tqk x1cfcev x13vifvy x1ey2m1c x6s0dn4 x78zum5 x1g2r6go x19991ni x1hc1fzr" }
		}[!!t << 0], {
			"aria-hidden": !0,
			"data-testid": "contact_manager_column_drag_handle",
			children: c.jsx(r("WDSIconIcDragHandle.react"), {
				width: 12,
				height: 12
			})
		}));
	}
	R.displayName = R.name + " [from " + i.id + "]";
	function L(e) {
		var t = e.direction;
		return t == null ? null : c.jsx("div", babelHelpers.extends({}, {
			0: { className: "x78zum5" },
			1: { className: "x78zum5 x19jd1h0" }
		}[(t === "asc") << 0], { children: c.jsx(r("WDSIconIcArrowDropDown.react"), {
			width: 12,
			height: 12
		}) }));
	}
	L.displayName = L.name + " [from " + i.id + "]";
	function E(t) {
		var n = t.columnKey, a = t.label, i = t.onColumnReorder, l = t.onReorderAnnounce, s = t.onSort, u = t.reorderableColumnKeys, d = t.sortConfig, m = _(!1), p = m[0], f = m[1], g = y(n, f, i), v = String(a), E = g != null && u.includes(n), k = C(), I = k.revealed, T = k.setHeaderRef, D = S(n, v, u, E, l, i), x = D.handleReorderBlur, $ = D.handleReorderKeyDown, P = d != null && d.key === n ? d.direction : null;
		return c.jsxs("div", babelHelpers.extends({ ref: T }, (e || (e = r("stylex"))).props(h.wrapper, h.sortable, o("WDSFocusStateStyles").WDSFocusStateStyles.genericFocus, E && h.draggableExpand, p && h.dragging), {
			"aria-label": v,
			role: "button",
			tabIndex: 0,
			"aria-roledescription": E ? b() : void 0
		}, g != null ? g : {}, {
			onBlur: x,
			onClick: function() {
				return s(n);
			},
			onKeyDown: function(t) {
				$(t) || (t.key === "Enter" || t.key === " ") && (t.preventDefault(), s(n));
			},
			children: [
				E && c.jsx(R, { revealed: I }),
				c.jsx(r("WDSText.react"), {
					maxLines: 1,
					type: "Body2Emphasized",
					colorName: "contentDeemphasized",
					children: a
				}),
				c.jsx(L, { direction: P })
			]
		}));
	}
	E.displayName = E.name + " [from " + i.id + "]";
	function k(t) {
		var n = t.columnKey, a = t.label, i = t.onColumnReorder, l = t.onReorderAnnounce, s = t.reorderableColumnKeys, u = _(!1), d = u[0], m = u[1], p = y(n, m, i), f = String(a), g = p != null && s.includes(n), v = C(), L = v.revealed, E = v.setHeaderRef, k = S(n, f, s, g, l, i), I = k.handleReorderBlur, T = k.handleReorderKeyDown;
		return g ? c.jsxs("div", babelHelpers.extends({ ref: E }, (e || (e = r("stylex"))).props(h.wrapper, o("WDSFocusStateStyles").WDSFocusStateStyles.genericFocus, h.draggableExpand, d && h.dragging), {
			"aria-label": f,
			role: "button",
			tabIndex: 0,
			"aria-roledescription": b()
		}, p != null ? p : {}, {
			onBlur: I,
			onKeyDown: function(t) {
				T(t);
			},
			children: [c.jsx(R, { revealed: L }), c.jsx(r("WDSText.react"), {
				maxLines: 1,
				type: "Body2Emphasized",
				colorName: "contentDeemphasized",
				children: a
			})]
		})) : c.jsx("div", {
			className: "x78zum5 x6s0dn4 x1ned7t2 x193iq5w x1tiyuxx x1nbhmlj x1n2onr6",
			children: c.jsx(r("WDSText.react"), {
				maxLines: 1,
				type: "Body2Emphasized",
				colorName: "contentDeemphasized",
				children: a
			})
		});
	}
	k.displayName = k.name + " [from " + i.id + "]";
	function I(e, t, n, r, o, a, i) {
		return function() {
			return c.jsx(E, {
				label: e,
				columnKey: t,
				sortConfig: n,
				onSort: r,
				onColumnReorder: o,
				reorderableColumnKeys: a,
				onReorderAnnounce: i
			});
		};
	}
	function T(e, t, n, r, o) {
		return function() {
			return c.jsx(k, {
				label: e,
				columnKey: t,
				onColumnReorder: n,
				reorderableColumnKeys: r,
				onReorderAnnounce: o
			});
		};
	}
	function D(e) {
		var t = e.chatJid, n = m(function() {
			return o("WAWebContactCollection").ContactCollection.get(t);
		}, [t]), a = n != null ? o("WAWebFrontendContactGetters").getFormattedPhoneAndType(n).displayName : "—";
		return c.jsx(r("WDSText.react"), {
			type: "Body2",
			colorName: "contentDefault",
			maxLines: 1,
			children: a
		});
	}
	D.displayName = D.name + " [from " + i.id + "]";
	function x(e) {
		if (e == null || e === 0) return "—";
		try {
			return new Intl.DateTimeFormat(void 0, {
				day: "numeric",
				month: "short",
				year: "numeric"
			}).format(e * 1e3);
		} catch (e) {
			return "—";
		}
	}
	var $ = [
		"select",
		"customer",
		"actions"
	], P = [
		"customer",
		"phone",
		"leadStage",
		"list",
		"acquisitionSource",
		"email",
		"lastMessage",
		"lastOrder",
		"notes",
		"actions"
	], N = P;
	function M(e, t) {
		return e.filter(function(e) {
			return !$.includes(e) && t.includes(e);
		});
	}
	function w(e) {
		return e === "select" ? "Select" : e === "customer" ? s._(
			/*BTDS*/
			""
		) : e === "phone" ? s._(
			/*BTDS*/
			""
		) : e === "email" ? s._(
			/*BTDS*/
			""
		) : e === "leadStage" ? s._(
			/*BTDS*/
			""
		) : e === "list" ? o("WAWebListsGatingUtils").isListsEnabled() ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		) : e === "acquisitionSource" ? s._(
			/*BTDS*/
			""
		) : e === "lastMessage" ? s._(
			/*BTDS*/
			""
		) : e === "lastOrder" ? s._(
			/*BTDS*/
			""
		) : e === "notes" ? s._(
			/*BTDS*/
			""
		) : e === "actions" ? s._(
			/*BTDS*/
			""
		) : (function() {
			throw Error("Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " + e);
		})();
	}
	function A(e) {
		return e.isAllSelected ? !0 : e.isIndeterminate ? "indeterminate" : !1;
	}
	function F(t) {
		return {
			cell: function(a) {
				var n = o("WAWebContactCollection").ContactCollection.get(a.item.chatJid), i = n != null ? o("WAWebFrontendContactGetters").getFormattedPhoneAndType(n).displayName : null;
				return c.jsx("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(g.center(o("WAWebContactManagerListViewColumnWidths").SELECT_COLUMN_WIDTH_PX)), { children: c.jsx(r("WDSBaseCheckbox.react"), {
					"aria-label": i != null ? s._(
						/*BTDS*/
						"",
						[s._param("name", i)]
					) : s._(
						/*BTDS*/
						""
					),
					onChange: function(n) {
						n != null && n.stopPropagation(), t.toggle(a.item.chatJid);
					},
					testid: "customer_manager_select_row",
					value: t.isSelected(a.item.chatJid)
				}) }));
			},
			key: "select",
			renderHeader: function() {
				return c.jsx("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(g.center(o("WAWebContactManagerListViewColumnWidths").SELECT_COLUMN_WIDTH_PX)), { children: c.jsx(r("WDSBaseCheckbox.react"), {
					"aria-label": s._(
						/*BTDS*/
						""
					),
					onChange: function() {
						return t.toggleAll();
					},
					testid: "customer_manager_select_all",
					value: A(t)
				}) }));
			},
			stickyStart: !0,
			width: o("WAWebContactManagerListViewColumnWidths").contactManagerColumnWidths.select
		};
	}
	function O(e, t, n, a, i, l, u, d) {
		var m = u != null ? u : [], p = d != null ? d : r("WAWebNoop"), _ = function(t, r) {
			return a != null ? I(t, r, n, a, i, m, p) : void 0;
		}, f = s._(
			/*BTDS*/
			""
		), g = l != null ? F(l) : null;
		return [].concat(g != null ? [g] : [], [
			{
				cell: function(t) {
					return c.jsx(r("WAWebContactManagerCustomerCell.react"), { item: t.item });
				},
				header: f,
				key: "customer",
				renderHeader: _(f, "customer"),
				sortable: !0,
				width: o("WAWebContactManagerListViewColumnWidths").contactManagerColumnWidths.customer
			},
			{
				cell: function(t) {
					return c.jsx(D, { chatJid: t.item.chatJid });
				},
				header: s._(
					/*BTDS*/
					""
				),
				key: "phone",
				renderHeader: _(s._(
					/*BTDS*/
					""
				), "phone"),
				sortable: !0,
				width: o("WAWebContactManagerListViewColumnWidths").contactManagerColumnWidths.phone
			},
			{
				cell: function(t) {
					return c.jsx("div", {
						className: "x14ba6vc xrw3huk",
						children: c.jsx(r("WAWebLeadStageChip.react"), {
							customer: t.item,
							onPillClick: function(t) {
								return o("WAWebContactManagerSMBUserJourneyLogger").ContactManagerUserJourneyLogger.clickRowLeadStagePill(t);
							},
							onStageChange: function(n, r) {
								o("WAWebContactManagerSMBUserJourneyLogger").ContactManagerUserJourneyLogger.editLeadStage(r, n, "list_row"), o("WAWebCustomerDataFieldSaver").handleLeadStageTransition(t.item.chatJid, t.item, n, r);
							},
							showNoneOption: !0,
							testid: "customer-manager-lead-stage-cell"
						})
					});
				},
				header: s._(
					/*BTDS*/
					""
				),
				key: "leadStage",
				renderHeader: _(s._(
					/*BTDS*/
					""
				), "leadStage"),
				sortable: !0,
				width: o("WAWebContactManagerListViewColumnWidths").contactManagerColumnWidths.leadStage
			},
			{
				cell: function(t) {
					return c.jsx(r("WAWebContactManagerListCell.react"), { chatJid: t.item.chatJid });
				},
				header: o("WAWebListsGatingUtils").isListsEnabled() ? s._(
					/*BTDS*/
					""
				) : s._(
					/*BTDS*/
					""
				),
				key: "list",
				renderHeader: _(o("WAWebListsGatingUtils").isListsEnabled() ? s._(
					/*BTDS*/
					""
				) : s._(
					/*BTDS*/
					""
				), "list"),
				sortable: !0,
				width: o("WAWebContactManagerListViewColumnWidths").contactManagerColumnWidths.list
			},
			{
				cell: function(t) {
					var e = t.item.acquisitionSource, n = e != null ? o("WAWebAcquisitionSourceNames").getAcquisitionSourceDisplayName(e) : null;
					return n != null ? c.jsx(r("WDSText.react"), {
						type: "Body2",
						colorName: "contentDefault",
						maxLines: 1,
						children: n
					}) : c.jsx(r("WDSText.react"), {
						type: "Body2",
						colorName: "contentDeemphasized",
						maxLines: 1,
						children: o("WAWebAcquisitionSourceNames").getUnknownAcquisitionSourceLabel()
					});
				},
				header: s._(
					/*BTDS*/
					""
				),
				key: "acquisitionSource",
				renderHeader: _(s._(
					/*BTDS*/
					""
				), "acquisitionSource"),
				sortable: !0,
				width: o("WAWebContactManagerListViewColumnWidths").contactManagerColumnWidths.acquisitionSource
			},
			{
				cell: function(t) {
					var e;
					return c.jsx(r("WDSText.react"), {
						type: "Body2",
						colorName: "contentDefault",
						maxLines: 1,
						children: (e = t.item.email) != null ? e : "—"
					});
				},
				header: s._(
					/*BTDS*/
					""
				),
				key: "email",
				renderHeader: _(s._(
					/*BTDS*/
					""
				), "email"),
				sortable: !0,
				width: o("WAWebContactManagerListViewColumnWidths").contactManagerColumnWidths.email
			},
			{
				cell: function(t) {
					var e = o("WAWebChatCollection").ChatCollection.get(t.item.chatJid);
					return c.jsx(r("WDSText.react"), {
						type: "Body2",
						colorName: "contentDefault",
						maxLines: 1,
						children: x(e == null ? void 0 : e.t)
					});
				},
				header: s._(
					/*BTDS*/
					""
				),
				key: "lastMessage",
				renderHeader: _(s._(
					/*BTDS*/
					""
				), "lastMessage"),
				sortable: !0,
				width: o("WAWebContactManagerListViewColumnWidths").contactManagerColumnWidths.lastMessage
			},
			{
				cell: function(t) {
					return c.jsx(r("WDSText.react"), {
						type: "Body2",
						colorName: "contentDefault",
						maxLines: 1,
						children: x(t.item.lastOrder)
					});
				},
				header: s._(
					/*BTDS*/
					""
				),
				key: "lastOrder",
				renderHeader: _(s._(
					/*BTDS*/
					""
				), "lastOrder"),
				sortable: !0,
				width: o("WAWebContactManagerListViewColumnWidths").contactManagerColumnWidths.lastOrder
			},
			{
				cell: function(t) {
					return c.jsx(r("WAWebContactManagerNotesCell.react"), { chatJid: t.item.chatJid });
				},
				header: s._(
					/*BTDS*/
					""
				),
				key: "notes",
				renderHeader: T(s._(
					/*BTDS*/
					""
				), "notes", i, m, p),
				width: o("WAWebContactManagerListViewColumnWidths").contactManagerColumnWidths.notes
			},
			{
				cell: function(o) {
					return c.jsx(r("WAWebContactManagerActionsCell.react"), {
						chatJid: o.item.chatJid,
						onChatClick: e,
						onDelete: t
					});
				},
				key: "actions",
				stickyEnd: !0,
				width: o("WAWebContactManagerListViewColumnWidths").contactManagerColumnWidths.actions
			}
		]);
	}
	l.ColumnReorderAnnouncer = v, l.ALWAYS_VISIBLE_COLUMNS = $, l.ALL_COLUMN_KEYS = P, l.DEFAULT_VISIBLE_COLUMNS = N, l.getOrderedReorderableColumnKeys = M, l.getColumnLabel = w, l.getContactManagerListColumns = O;
}), 226);
