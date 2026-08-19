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
	"react-compiler-runtime",
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
		var t = o("react-compiler-runtime").c(48), n = e.chat, a = e.onBack, i = e.onCommunityEventsClick, l = e.onEventClick, m = e.ref, f = o("useWAWebAllEvents").useAllEvents(n), g, h;
		if (t[0] !== f || t[1] !== l) {
			var y = f.reduce(_, [[], []]), C = y[0], b = y[1], v = b.sort(p), S;
			t[4] !== l ? (S = function(t) {
				return u.jsx(r("WAWebEventsDrawerEventCell.react"), {
					msg: t.msg,
					chat: t.chat,
					onClick: l
				}, "event-cell-" + t.msg.id.toString());
			}, t[4] = l, t[5] = S) : S = t[5], g = C.map(S);
			var R;
			t[6] !== l ? (R = function(t) {
				return u.jsx(r("WAWebEventsDrawerEventCell.react"), {
					msg: t.msg,
					chat: t.chat,
					passed: !0,
					onClick: l
				}, "event-cell-" + t.msg.id.toString());
			}, t[6] = l, t[7] = R) : R = t[7], h = v.map(R), t[0] = f, t[1] = l, t[2] = g, t[3] = h;
		} else g = t[2], h = t[3];
		var L = h, E;
		t[8] !== L ? (E = L.length > 0 ? u.jsxs(u.Fragment, { children: [u.jsx(o("WAWebText.react").WAWebTextMuted, {
			xstyle: o("WDSPaddings.stylex").wdsPaddings.paddingStart16,
			children: s._(
				/*BTDS*/
				""
			)
		}), L] }) : null, t[8] = L, t[9] = E) : E = t[9];
		var k = E, I, T, D, x, $, P, N;
		if (t[10] !== n.groupMetadata || t[11] !== i || t[12] !== m) {
			var M = o("WAWebGroupType").getGroupTypeFromGroupMetadata(o("WAWebStateUtils").unproxy(r("nullthrows")(n.groupMetadata)));
			e: switch (M) {
				case o("WAWebGroupType").GroupType.COMMUNITY: {
					var w;
					t[20] === Symbol.for("react.memo_cache_sentinel") ? (w = s._(
						/*BTDS*/
						""
					), t[20] = w) : w = t[20], N = w;
					break e;
				}
				case o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP: {
					var A;
					t[21] === Symbol.for("react.memo_cache_sentinel") ? (A = s._(
						/*BTDS*/
						""
					), t[21] = A) : A = t[21], N = A;
					var F;
					t[22] === Symbol.for("react.memo_cache_sentinel") ? (F = [
						d.footer,
						o("WDSPaddings.stylex").wdsPaddings.padding16,
						c.paddingBottom6
					], t[22] = F) : F = t[22];
					var O;
					t[23] === Symbol.for("react.memo_cache_sentinel") ? (O = s._(
						/*BTDS*/
						""
					), t[23] = O) : O = t[23];
					var B;
					t[24] !== i ? (B = u.jsx(r("WAWebDrawerSection.react"), {
						theme: "full-height",
						animation: !1,
						xstyle: F,
						children: u.jsx(o("WAWebFlex.react").FlexRow, {
							justify: "center",
							xstyle: d.footerRow,
							children: u.jsx(o("WAWebButton.react").WAWebButtonPrimary, {
								testid: "see-community-events-button",
								onClick: i,
								children: O
							})
						})
					}), t[24] = i, t[25] = B) : B = t[25], T = B;
					break e;
				}
				default: {
					var W;
					t[26] === Symbol.for("react.memo_cache_sentinel") ? (W = s._(
						/*BTDS*/
						""
					), t[26] = W) : W = t[26], N = W;
				}
			}
			I = r("WAWebDrawer.react"), $ = "striped", P = m, x = "events-in-group", D = o("WAWebGroupType").groupTypeToWamEnum(M), t[10] = n.groupMetadata, t[11] = i, t[12] = m, t[13] = I, t[14] = T, t[15] = D, t[16] = x, t[17] = $, t[18] = P, t[19] = N;
		} else I = t[13], T = t[14], D = t[15], x = t[16], $ = t[17], P = t[18], N = t[19];
		var q;
		t[27] !== D ? (q = { typeOfGroup: D }, t[27] = D, t[28] = q) : q = t[28];
		var U;
		t[29] !== x || t[30] !== q ? (U = {
			surface: x,
			extras: q
		}, t[29] = x, t[30] = q, t[31] = U) : U = t[31];
		var V;
		t[32] !== a || t[33] !== N ? (V = u.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
			title: N,
			type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
			onBack: a
		}), t[32] = a, t[33] = N, t[34] = V) : V = t[34];
		var H;
		t[35] !== g || t[36] !== k ? (H = u.jsxs(r("WAWebDrawerSection.react"), {
			animation: !1,
			theme: "full-height",
			children: [g, k]
		}), t[35] = g, t[36] = k, t[37] = H) : H = t[37];
		var G;
		t[38] !== T || t[39] !== H ? (G = u.jsxs(r("WAWebDrawerBody.react"), { children: [H, T] }), t[38] = T, t[39] = H, t[40] = G) : G = t[40];
		var z;
		return t[41] !== I || t[42] !== G || t[43] !== $ || t[44] !== P || t[45] !== U || t[46] !== V ? (z = u.jsxs(I, {
			theme: $,
			ref: P,
			tsNavigationData: U,
			children: [V, G]
		}), t[41] = I, t[42] = G, t[43] = $, t[44] = P, t[45] = U, t[46] = V, t[47] = z) : z = t[47], z;
	}
	function p(e, t) {
		return o("WAWebMsgGetters").getEventStartTime(t.msg) - o("WAWebMsgGetters").getEventStartTime(e.msg);
	}
	function _(e, t) {
		var n = t.msg;
		return n.isEventCanceled || o("WAWebEventUtils").shouldShowEventAsPassed(n.eventStartTime, n.eventEndTime) ? e[1].push(t) : e[0].push(t), e;
	}
	l.default = m;
}), 226);
