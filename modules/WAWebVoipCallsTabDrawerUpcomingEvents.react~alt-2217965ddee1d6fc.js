__d("WAWebVoipCallsTabDrawerUpcomingEvents.react", [
	"fbt",
	"WATimeUtils",
	"WAWebCmd",
	"WAWebDrawer.react",
	"WAWebDrawerBody.react",
	"WAWebDrawerHeader.react",
	"WAWebDrawerSection.react",
	"WAWebEventResponseCollection",
	"WAWebEventUtils",
	"WAWebFlex.react",
	"WAWebFrontendMsgGetters",
	"WAWebKeyboardHotKeys.react",
	"WAWebMsgCollection",
	"WAWebMsgGetters",
	"WAWebPreCallUserJourneyLogger",
	"WAWebSectionHeader.react",
	"WAWebSingleSelection",
	"WAWebText.react",
	"WAWebUpcomingEventCell.react",
	"WAWebWamEnumLobbyEntryPointType",
	"WAWebWamEnumSubSurface",
	"WDSIconIcCalendarMonth.react",
	"react",
	"useWAWebListener",
	"useWAWebStableCallback",
	"useWAWebThrottledCallback"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = e, d = c.useEffect, m = c.useRef, p = c.useState, _ = {
		container: {
			overflowX: "xw2csxc",
			overflowY: "x1odjw0f",
			height: "x5yr21d",
			$$css: !0
		},
		emptyState: {
			display: "x78zum5",
			flexDirection: "xdt5ytf",
			alignItems: "x6s0dn4",
			justifyContent: "x1nhvcw1",
			height: "xt7dq6l",
			paddingTop: "x15uerrv",
			paddingInlineEnd: "xx281p9",
			paddingBottom: "x1j3kn9t",
			paddingInlineStart: "x67w97k",
			textAlign: "x2b8uid",
			$$css: !0
		},
		titleSpacing: {
			marginTop: "x9u28bd",
			marginBottom: "xat24cr",
			$$css: !0
		},
		textSpacing: {
			marginTop: "x1380le5",
			$$css: !0
		},
		upcomingEventsContainer: {
			width: "xh8yej3",
			$$css: !0
		},
		upcomingEventItem: {
			width: "xh8yej3",
			$$css: !0
		},
		sectionContainer: {
			width: "xh8yej3",
			$$css: !0
		}
	};
	function f(e) {
		"use no forget";
		var t = e.onBack, n = e.ref, a = m(), i = m(new (o("WAWebPreCallUserJourneyLogger")).PreCallUserJourneyLogger()), l = new (r("WAWebSingleSelection"))([], function() {
			return "";
		}), c = p([]), f = c[0], g = c[1], h = r("useWAWebStableCallback")(function() {
			(async function() {
				try {
					var e = await o("WAWebEventUtils").getUpcomingEvents();
					g(e);
				} catch (e) {
					g([]);
				}
			})();
		}), y = r("useWAWebThrottledCallback")(h, 500, { leading: !0 });
		o("useWAWebListener").useListener(o("WAWebMsgCollection").MsgCollection, "add remove", y), o("useWAWebListener").useListener(o("WAWebEventResponseCollection").EventResponseCollection, "add remove change", y);
		var C = u.jsx(o("WAWebText.react").WAWebTextTitle, {
			weight: "semibold",
			children: s._(
				/*BTDS*/
				""
			)
		}), b = s._(
			/*BTDS*/
			""
		);
		d(function() {
			i.current.clickEventMore(o("WAWebWamEnumSubSurface").SUB_SURFACE.NONE), (async function() {
				try {
					var e = await o("WAWebEventUtils").getUpcomingEvents();
					g(e);
				} catch (e) {
					g([]);
				}
			})();
		}, []);
		var v = function(t) {
			i.current.clickEventMoreDetail(o("WAWebWamEnumSubSurface").SUB_SURFACE.NONE);
			var e = o("WAWebFrontendMsgGetters").getChat(t), n = o("WAWebFrontendMsgGetters").getAsEventCreation(t);
			n != null && o("WAWebCmd").Cmd.openEventInfoDrawer(e, n);
		}, S = function(t) {
			var e = o("WATimeUtils").unixTime(), n = new Date(e * 1e3), r = new Date(t * 1e3), a = new Date(n.getFullYear(), n.getMonth(), n.getDate()), i = new Date(r.getFullYear(), r.getMonth(), r.getDate()), l = i.getTime() - a.getTime(), s = l >= 0 ? o("WATimeUtils").daysDiff(i.getTime(), a.getTime()) : -o("WATimeUtils").daysDiff(a.getTime(), i.getTime());
			return s === -1 ? "Yesterday" : s === 0 ? "Today" : s === 1 ? "Tomorrow" : r.toLocaleDateString("en-US", {
				year: "numeric",
				month: "long",
				day: "numeric"
			});
		}, R = f.reduce(function(e, t) {
			var n = o("WAWebMsgGetters").getEventStartTime(t);
			if (n != null) {
				var r = S(n);
				e[r] || (e[r] = []), e[r].push(t);
			}
			return e;
		}, {}), L = [
			"Yesterday",
			"Today",
			"Tomorrow"
		], E = Object.keys(R).sort(function(e, t) {
			var n = L.indexOf(e), r = L.indexOf(t);
			if (n !== -1 && r !== -1) return n - r;
			if (n !== -1) return -1;
			if (r !== -1) return 1;
			var o = new Date(e).getTime(), a = new Date(t).getTime();
			return o - a;
		}), k = f.length > 0 ? u.jsx(o("WAWebFlex.react").FlexColumn, {
			xstyle: _.upcomingEventsContainer,
			children: E.map(function(e) {
				return u.jsxs(o("WAWebFlex.react").FlexColumn, {
					xstyle: _.sectionContainer,
					children: [u.jsx(r("WAWebSectionHeader.react"), { header: s._(
						/*BTDS*/
						"",
						[s._param("date-section", e)]
					) }), R[e].map(function(e) {
						return u.jsx(o("WAWebFlex.react").FlexItem, {
							shrink: 0,
							xstyle: _.upcomingEventItem,
							children: u.jsx(r("WAWebUpcomingEventCell.react"), {
								eventMessage: e,
								active: l,
								onClick: function() {
									return v(e);
								},
								lobbyEntryPointType: o("WAWebWamEnumLobbyEntryPointType").LOBBY_ENTRY_POINT_TYPE.UPCOMING_SCHEDULE_CALL_LIST
							})
						}, e.id.toString());
					})]
				}, e);
			})
		}) : u.jsxs(o("WAWebFlex.react").FlexColumn, {
			align: "center",
			justify: "start",
			xstyle: _.emptyState,
			children: [
				u.jsx(r("WDSIconIcCalendarMonth.react"), {
					width: 120,
					height: 120
				}),
				u.jsx(o("WAWebText.react").WAWebTextLarge, {
					weight: "semibold",
					xstyle: _.titleSpacing,
					children: s._(
						/*BTDS*/
						""
					)
				}),
				u.jsx(o("WAWebText.react").WAWebTextMuted, {
					xstyle: _.textSpacing,
					children: s._(
						/*BTDS*/
						""
					)
				})
			]
		});
		return u.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
			ref: a,
			"aria-label": b,
			"data-testid": "upcoming-events-drawer",
			children: u.jsxs(r("WAWebDrawer.react"), {
				ref: n,
				theme: "striped",
				testid: "upcoming-events-drawer",
				tsNavigationData: { surface: "status" },
				children: [u.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
					title: C,
					type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
					onBack: t
				}), u.jsx(r("WAWebDrawerBody.react"), { children: u.jsx(r("WAWebDrawerSection.react"), {
					theme: "full-height",
					animation: !1,
					xstyle: _.container,
					children: k
				}) })]
			})
		});
	}
	f.displayName = f.name + " [from " + i.id + "]", l.default = f;
}), 226);
