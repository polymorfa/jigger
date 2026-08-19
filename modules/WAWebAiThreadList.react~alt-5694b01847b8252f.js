__d("WAWebAiThreadList.react", [
	"WAWeb-moment",
	"WAWebAiThreadCell.react",
	"WAWebAiThreadContextMenu",
	"WAWebAiThreadListMonthDivider.react",
	"WAWebBotGating",
	"WAWebEmptyState.react",
	"WAWebFlatList.react",
	"WAWebFlatListContainer.react",
	"WAWebFlatListController",
	"WAWebResolveThreadForEntryPoint",
	"WAWebUimUie.react",
	"WAWebUimUieMenu.react",
	"react"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = e, c = u.useMemo, d = u.useState, m = 76, p = 28;
	function _(e) {
		return e.isPending === !0;
	}
	function f(e, t) {
		return e.filter(function(e) {
			return !_(e);
		}).reduce(function(e, n) {
			var o = r("WAWeb-moment").unix(n.lastMessageTimestamp).startOf("month").unix();
			return (e.lastRenderedMonth == null || o !== e.lastRenderedMonth) && o !== t && e.result.push({
				itemKey: "month-divider-" + o,
				type: "month_divider",
				timestamp: n.lastMessageTimestamp,
				height: p
			}), e.result.push({
				itemKey: n.id.toString(),
				type: "thread",
				thread: n,
				height: m
			}), e.lastRenderedMonth = o, e;
		}, {
			currentMonth: t,
			lastRenderedMonth: null,
			result: []
		}).result;
	}
	var g = function(t) {
		var e = [], n = [];
		for (var r of t) {
			var o = r.pinThreadTimestamp;
			o != null && o > 0 ? e.push(r) : n.push(r);
		}
		return {
			pinnedThreads: e,
			unpinnedThreads: n
		};
	}, h = function(t, n) {
		var e = r("WAWeb-moment")().startOf("month").unix(), a = [];
		n != null && a.push({
			itemKey: n.id.toString(),
			type: "thread",
			thread: n,
			height: m
		});
		var i = n != null ? t.filter(function(e) {
			return e !== n;
		}) : t;
		if (o("WAWebBotGating").isAiThreadPinEnabled()) {
			var l = g(i), s = l.pinnedThreads, u = l.unpinnedThreads;
			for (var c of s) _(c) || a.push({
				itemKey: c.id.toString(),
				type: "thread",
				thread: c,
				height: m
			});
			a.push.apply(a, f(u, e));
		} else a.push.apply(a, f(i, e));
		return a;
	};
	function y(e) {
		var t = e.activeThreadId, n = e.chat, a = e.multiSelection, i = e.onThreadClick, l = e.selectableState, u = e.threads, m = c(function() {
			return new (r("WAWebFlatListController"))();
		}, []), p = d(null), _ = p[0], f = p[1], g = d(null), y = g[0], C = g[1], b = t, v = c(function() {
			var e, t = o("WAWebBotGating").isDefaultThreadRoutingEnabled() && (e = u.find(function(e) {
				return o("WAWebResolveThreadForEntryPoint").isDefaultThread(e.id);
			})) != null ? e : null;
			return h(u, t);
		}, [u]);
		if (v.length === 0) return s.jsx(o("WAWebEmptyState.react").ListChats, {});
		var S = function(t, r) {
			if (_) {
				f(null), C(null);
				return;
			}
			var e = o("WAWebAiThreadContextMenu").getAiThreadContextMenuItems({
				thread: t,
				chat: n,
				activeThreadId: b
			});
			f({
				menu: e,
				event: r.event,
				anchor: r.anchor instanceof HTMLElement ? r.anchor : null
			}), C(t.id.toString());
		}, R = function() {
			f(null), C(null);
		}, L;
		return _ && (L = s.jsx(o("WAWebUimUie.react").UIE, {
			displayName: "AiThreadContextMenu",
			escapable: !0,
			popable: !0,
			dismissOnWindowResize: !0,
			requestDismiss: R,
			children: s.jsx(r("WAWebUimUieMenu.react"), { contextMenu: _ })
		})), s.jsxs(s.Fragment, { children: [s.jsx(r("WAWebFlatListContainer.react"), {
			flatListControllers: [m],
			children: s.jsx(o("WAWebFlatList.react").FlatList, {
				flatListController: m,
				direction: "vertical",
				data: v,
				handleKeyboardNavigation: !0,
				focusableItemSelector: "[data-testid='cell-frame-container']",
				tabIndex: -1,
				role: "list",
				renderItem: function(t) {
					var e = t.type === "thread" ? t.thread.id.toString() : null, u = b == null ? void 0 : b.toString();
					return (function(t) {
						if ((typeof t == "object" && t !== null || typeof t == "function") && t.type === "month_divider" && "timestamp" in t) {
							var c = t.timestamp;
							return s.jsx(r("WAWebAiThreadListMonthDivider.react"), { timestamp: c });
						}
						if ((typeof t == "object" && t !== null || typeof t == "function") && t.type === "thread" && "thread" in t) {
							var d = t.thread;
							return s.jsx("div", {
								className: "x12w63v0 x1nzty39 x1tiyuxx x1nbhmlj",
								children: s.jsx(o("WAWebAiThreadCell.react").WAWebAiThreadCell, {
									selectableState: l,
									multiSelection: a,
									thread: d,
									chat: n,
									onContext: S,
									isContextMenuOpen: y === e,
									onThreadClick: i,
									isActive: u === e
								})
							});
						}
						throw Error("Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " + t);
					})(t);
				}
			})
		}), L] });
	}
	y.displayName = y.name + " [from " + i.id + "]", l.processThreadList = f, l.WAWebAiThreadList = y;
}), 98);
