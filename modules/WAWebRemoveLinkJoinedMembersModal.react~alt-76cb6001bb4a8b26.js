__d("WAWebRemoveLinkJoinedMembersModal.react", [
	"fbt",
	"WALogger",
	"WATimeUtils",
	"WAWebChatContact.react",
	"WAWebDrawer.react",
	"WAWebDrawerBody.react",
	"WAWebDrawerHeader.react",
	"WAWebGroupLinkJoinUtils",
	"WAWebLinkJoinedMembersUtils",
	"WAWebMembersRemovedAlert.react",
	"WAWebModal.react",
	"WAWebModalManager",
	"WAWebModifyParticipantsGroupAction",
	"WAWebSpinner.react",
	"WAWebWamEnumGroupBulkRemovalAction",
	"WAWebWidFactory",
	"WDSButton.react",
	"WDSText.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react")), d = u, m = d.useEffect, p = d.useMemo, _ = d.useState, f = o("WAWebChatContact.react").ContactFactory();
	function g(e) {
		var t = o("react-compiler-runtime").c(2), n = e.contact, r;
		return t[0] !== n ? (r = c.jsx(f, {
			contact: n,
			theme: "drawer-list",
			showNotifyName: !0,
			waitIdle: !0,
			idle: !0
		}), t[0] = n, t[1] = r) : r = t[1], r;
	}
	function h(e) {
		var t = e.chat, n = e.groupMetadata, a = e.messageTimestamp, i = _([]), l = i[0], u = i[1], d = _(!0), f = d[0], h = d[1];
		m(function() {
			var e = async function() {
				try {
					var e = a != null ? o("WATimeUtils").castToUnixTime(a - o("WAWebGroupLinkJoinUtils").JOIN_FLOOD_WINDOW_SECS) : void 0, r = a != null ? o("WATimeUtils").castToUnixTime(a + o("WAWebGroupLinkJoinUtils").JOIN_FLOOD_COOLDOWN_SECS) : void 0, i = await o("WAWebGroupLinkJoinUtils").getParticipantsJoinedViaLink(t.id.toString(), e, r), l = [], s = n.participants;
					for (var c of i) {
						var d = o("WAWebWidFactory").createWid(c), m = s.get(d);
						m != null && l.push(m);
					}
					u(l);
				} finally {
					h(!1);
				}
			};
			e();
		}, [
			t.id,
			n.participants,
			a
		]);
		var y = function() {
			o("WAWebLinkJoinedMembersUtils").openGroupPermissionsDrawer(t, n);
		}, C = function() {
			o("WAWebLinkJoinedMembersUtils").logGroupBulkRemovalWamEvent(o("WAWebWamEnumGroupBulkRemovalAction").GROUP_BULK_REMOVAL_ACTION.TAP_REMOVE_BUTTON, t.id, l.length), l.length > 0 && o("WAWebModifyParticipantsGroupAction").removeParticipants(t, l), o("WAWebModalManager").closeModalManager();
		}, b = l.length, v = p(function() {
			if (a == null) return null;
			var e = o("WAWebLinkJoinedMembersUtils").calculateTimeRange(a), t = e.endTime, n = e.startTime;
			return o("WAWebLinkJoinedMembersUtils").formatJoinTimeRange(n, t);
		}, [a]);
		return c.jsx(o("WAWebModal.react").Modal, {
			type: o("WAWebModal.react").ModalTheme.Tower,
			onOverlayClick: o("WAWebModalManager").closeModalManager,
			children: c.jsxs(r("WAWebDrawer.react"), {
				testid: "remove-link-joined-members-modal",
				tsNavigationData: {
					surface: "unknown",
					viewName: "remove-link-joined-members"
				},
				children: [
					c.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
						type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.POPUP,
						title: s._(
							/*BTDS*/
							""
						),
						onCancel: o("WAWebModalManager").closeModalManager
					}),
					c.jsxs("div", {
						className: "xdx6fka xvtqlqk x16ovd2e x12xbjc7 x2b8uid",
						children: [c.jsx(r("WDSText.react"), {
							type: "Body2",
							colorName: "contentDeemphasized",
							children: v != null ? s._(
								/*BTDS*/
								"",
								[s._param("timeRange", v)]
							) : s._(
								/*BTDS*/
								""
							)
						}), c.jsx("div", {
							className: "xav9cv8",
							children: c.jsx("span", {
								className: "x1ypdohk",
								onClick: y,
								role: "button",
								tabIndex: 0,
								onKeyDown: function(t) {
									(t.key === "Enter" || t.key === " ") && y();
								},
								children: c.jsx(r("WDSText.react"), {
									type: "Body2",
									colorName: "accent",
									children: s._(
										/*BTDS*/
										""
									)
								})
							})
						})]
					}),
					c.jsx(r("WAWebDrawerBody.react"), { children: f ? c.jsx("div", {
						className: "x78zum5 xl56j7k x6s0dn4 x1iyjqo2",
						children: c.jsx(o("WAWebSpinner.react").Spinner, {})
					}) : c.jsx("div", {
						className: "x1iyjqo2 x1odjw0f",
						children: l.map(function(e) {
							return c.jsx(g, { contact: e.contact }, e.id.toString());
						})
					}) }),
					c.jsx("div", {
						className: "xdx6fka xvtqlqk x1p57kb1 xvpt6g3 x178xt8z x13fuv20 xx42vgk",
						children: c.jsx(r("WDSButton.react"), {
							label: s._(
								/*BTDS*/
								"",
								[s._plural(b, "number")]
							),
							onPress: C,
							disabled: f || b === 0,
							type: "destructive",
							variant: "filled",
							widthMode: "flexible",
							testid: "remove-members-button"
						})
					})
				]
			})
		});
	}
	h.displayName = h.name + " [from " + i.id + "]";
	function y(t, n, r) {
		var a = async function() {
			try {
				var a = await o("WAWebLinkJoinedMembersUtils").fetchRemainingParticipants(t, n, r);
				if (a.length === 0) {
					o("WAWebMembersRemovedAlert.react").openMembersRemovedAlert(t, n, r);
					return;
				}
				o("WAWebModalManager").ModalManager.open(c.jsx(h, {
					chat: t,
					groupMetadata: n,
					messageTimestamp: r
				}));
			} catch (t) {
				o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[openRemoveLinkJoinedMembersModal] fetch failed: ", ""])), t);
			}
		};
		a();
	}
	l.openRemoveLinkJoinedMembersModal = y;
}), 226);
