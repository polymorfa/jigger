__d("WAWebEventsInChatDrawer.react", [
	"fbt",
	"WAWebButton.react",
	"WAWebDrawer.react",
	"WAWebDrawerBody.react",
	"WAWebDrawerHeader.react",
	"WAWebDrawerSection.react",
	"WAWebEventUtils",
	"WAWebEventsDrawerEventCell.react",
	"WAWebFlex.react",
	"WAWebGroupType",
	"WAWebMsgGetters",
	"WAWebStateUtils",
	"WAWebText.react",
	"WDSPaddings.stylex",
	"nullthrows",
	"react",
	"useWAWebAllEvents"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = { paddingBottom6: {
		paddingBottom: "x10b6aqq",
		$$css: !0
	} }, d = {
		footer: {
			position: "x7wzq59",
			bottom: "x1ey2m1c",
			flexGrow: "x1iyjqo2",
			display: "x78zum5",
			alignItems: "xuk3077",
			$$css: !0
		},
		footerRow: {
			width: "xh8yej3",
			$$css: !0
		}
	};
	function m(e) {
		var t = e.chat, n = e.onBack, a = e.onCommunityEventsClick, i = e.onEventClick, l = e.ref, m = o("useWAWebAllEvents").useAllEvents(t), p = m.reduce(function(e, t) {
			var n = t.msg;
			return n.isEventCanceled || o("WAWebEventUtils").shouldShowEventAsPassed(n.eventStartTime, n.eventEndTime) ? e[1].push(t) : e[0].push(t), e;
		}, [[], []]), _ = p[0], f = p[1], g = f.sort(function(e, t) {
			return o("WAWebMsgGetters").getEventStartTime(t.msg) - o("WAWebMsgGetters").getEventStartTime(e.msg);
		}), h = _.map(function(e) {
			return u.jsx(r("WAWebEventsDrawerEventCell.react"), {
				msg: e.msg,
				chat: e.chat,
				onClick: i
			}, "event-cell-" + e.msg.id.toString());
		}), y = g.map(function(e) {
			return u.jsx(r("WAWebEventsDrawerEventCell.react"), {
				msg: e.msg,
				chat: e.chat,
				passed: !0,
				onClick: i
			}, "event-cell-" + e.msg.id.toString());
		}), C = y.length > 0 ? u.jsxs(u.Fragment, { children: [u.jsx(o("WAWebText.react").WAWebTextMuted, {
			xstyle: o("WDSPaddings.stylex").wdsPaddings.paddingStart16,
			children: s._(
				/*BTDS*/
				""
			)
		}), y] }) : null, b = o("WAWebGroupType").getGroupTypeFromGroupMetadata(o("WAWebStateUtils").unproxy(r("nullthrows")(t.groupMetadata))), v, S;
		switch (b) {
			case o("WAWebGroupType").GroupType.COMMUNITY:
				v = s._(
					/*BTDS*/
					""
				);
				break;
			case o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP:
				v = s._(
					/*BTDS*/
					""
				), S = u.jsx(r("WAWebDrawerSection.react"), {
					theme: "full-height",
					animation: !1,
					xstyle: [
						d.footer,
						o("WDSPaddings.stylex").wdsPaddings.padding16,
						c.paddingBottom6
					],
					children: u.jsx(o("WAWebFlex.react").FlexRow, {
						justify: "center",
						xstyle: d.footerRow,
						children: u.jsx(o("WAWebButton.react").WAWebButtonPrimary, {
							testid: "see-community-events-button",
							onClick: a,
							children: s._(
								/*BTDS*/
								""
							)
						})
					})
				});
				break;
			default:
				v = s._(
					/*BTDS*/
					""
				);
				break;
		}
		return u.jsxs(r("WAWebDrawer.react"), {
			theme: "striped",
			ref: l,
			tsNavigationData: {
				surface: "events-in-group",
				extras: { typeOfGroup: o("WAWebGroupType").groupTypeToWamEnum(b) }
			},
			children: [u.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
				title: v,
				type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
				onBack: n
			}), u.jsxs(r("WAWebDrawerBody.react"), { children: [u.jsxs(r("WAWebDrawerSection.react"), {
				animation: !1,
				theme: "full-height",
				children: [h, C]
			}), S] })]
		});
	}
	m.displayName = m.name + " [from " + i.id + "]", l.default = m;
}), 226);
