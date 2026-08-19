__d("WAWebGroupMembershipApprovalRequestsDrawer.react", [
	"fbt",
	"WAWebClock",
	"WAWebDrawer.react",
	"WAWebDrawerBody.react",
	"WAWebDrawerHeader.react",
	"WAWebDrawerSection.react",
	"WAWebFlex.react",
	"WAWebFrontendContactGetters",
	"WAWebGroupGatingUtils",
	"WAWebGroupJoinRequestMetricUtils",
	"WAWebGroupMembershipApprovalRequest.react",
	"WAWebGroupMembershipApprovalRequestsDrawerMenu.react",
	"WAWebMembershipApprovalRequestsBanner.react",
	"WAWebMembershipApprovalRequestsOrder",
	"WAWebName.react",
	"WAWebRequestMethodType",
	"WAWebText_DONOTUSE.react",
	"WAWebUnstyledButton.react",
	"WAWebUserPrefsMeUser",
	"WDSMargins.stylex",
	"WDSPaddings.stylex",
	"nullthrows",
	"react",
	"react-compiler-runtime",
	"useLazyRef",
	"useWAWebGroupParticipantStatus",
	"useWAWebModelValues"
], (function(t, n, r, o, a, i, l, s) {
	var e = ["ref"], u, c = u || (u = o("react")), d = u.useEffect, m = {
		paddingBottom15: {
			paddingBottom: "xr1496l",
			$$css: !0
		},
		paddingBottom14: {
			paddingBottom: "x1g2khh7",
			$$css: !0
		}
	}, p = {
		disclaimer: {
			marginBottom: "x1ty9z65",
			$$css: !0
		},
		disclaimerText: {
			textAlign: "x2b8uid",
			lineHeight: "x16h55sf",
			$$css: !0
		},
		emptyStateTitle: {
			textAlign: "x2b8uid",
			lineHeight: "x37zpob",
			$$css: !0
		},
		button: {
			color: "x1v5yvga",
			$$css: !0
		},
		empty: {
			height: "x5yr21d",
			$$css: !0
		}
	};
	function _(t) {
		var n = t.ref, a = babelHelpers.objectWithoutPropertiesLoose(t, e), i = a.onBack, l = a.onGroupSettings, u = a.onRequestClick, _ = a.onSortBySource, y = a.onSortByTime, C = a.orderBy, b = o("useWAWebModelValues").useModelValues(a.chat, ["id", "groupMetadata"]), v = o("useWAWebModelValues").useModelValues(r("nullthrows")(b.groupMetadata), [
			"membershipApprovalRequests",
			"membershipApprovalMode",
			"participants"
		]), S = r("useWAWebGroupParticipantStatus")(v), R = S[0], L = S[1], E = v.participants.iAmAdmin(), k = r("useLazyRef")(function() {
			return v.membershipApprovalRequests.toArray();
		}), I = k.current, T;
		I.length > 0 && (T = c.jsx(r("WAWebGroupMembershipApprovalRequestsDrawerMenu.react"), {
			orderBy: C,
			onSortBySource: _,
			onSortByTime: y
		}));
		var D = o("WAWebMembershipApprovalRequestsBanner.react").useMembershipApprovalRequestsBanner(b), x = D[0], $ = D[1];
		d(function() {
			x && !o("WAWebGroupGatingUtils").isPersistentPendingJoinRequestsBannerEnabled() && $(), o("WAWebGroupJoinRequestMetricUtils").logViewPendingParticipant(b.id);
		}, []);
		var P;
		if (I.length > 0) {
			var N = [];
			switch (L && (I = I.filter(function(e) {
				return o("WAWebUserPrefsMeUser").isMeAccount(e.addedByContact.id);
			})), C) {
				case o("WAWebMembershipApprovalRequestsOrder").MembershipApprovalRequestsOrder.Source: {
					var M, w = (M = b.groupMetadata) == null ? void 0 : M.getParentGroupChat(), A = g(I, w == null ? void 0 : w.id), F = A.addedByOthers, O = A.contacts, B = A.fromCommunity, W = A.fromInviteLink, q = A.fromOtherCommunities;
					N.push({
						title: s._(
							/*BTDS*/
							""
						),
						requests: O,
						key: "contacts"
					}, {
						title: s._(
							/*BTDS*/
							""
						),
						requests: F,
						key: "added-by-others"
					}), w != null && N.push({
						title: s._(
							/*BTDS*/
							"",
							[s._param("community_name", c.jsx(o("WAWebName.react").Name, { chat: w }))]
						),
						requests: B,
						key: "from-community"
					}), N.push({
						title: s._(
							/*BTDS*/
							""
						),
						requests: W,
						key: "from-invite-link"
					}, {
						title: s._(
							/*BTDS*/
							""
						),
						requests: q,
						key: "from-other-communities"
					});
					break;
				}
				case o("WAWebMembershipApprovalRequestsOrder").MembershipApprovalRequestsOrder.Time: {
					N.push.apply(N, h(I).map(function(e) {
						return {
							title: e.date,
							requests: e.requests,
							key: e.key
						};
					}));
					break;
				}
			}
			var U = N.filter(function(e) {
				return e.requests.length > 0;
			}).map(function(e) {
				return c.jsx(f, {
					title: e.title,
					children: e.requests.map(function(e) {
						return c.jsx(r("WAWebGroupMembershipApprovalRequest.react"), {
							chat: b,
							request: e,
							onRequestClick: u,
							onBack: i
						}, e.id.toString());
					})
				}, e.key);
			});
			P = c.jsxs(c.Fragment, { children: [c.jsx(r("WAWebDrawerSection.react"), {
				xstyle: [
					p.disclaimer,
					o("WDSPaddings.stylex").wdsPaddings.paddingHor24,
					o("WDSPaddings.stylex").wdsPaddings.paddingTop24,
					m.paddingBottom15
				],
				animation: !1,
				children: c.jsx(o("WAWebFlex.react").FlexRow, {
					justify: "center",
					align: "center",
					children: c.jsx(o("WAWebText_DONOTUSE.react").TextDiv, {
						size: "14",
						color: "secondary",
						xstyle: p.disclaimerText,
						children: E ? s._(
							/*BTDS*/
							"",
							[s._implicitParam("=m2", c.jsx(r("WAWebUnstyledButton.react"), {
								onClick: l,
								xstyle: p.button,
								children: s._(
									/*BTDS*/
									""
								)
							}))]
						) : s._(
							/*BTDS*/
							""
						)
					})
				})
			}), U] });
		} else {
			var V = s._(
				/*BTDS*/
				""
			), H = v.membershipApprovalMode ? s._(
				/*BTDS*/
				""
			) : s._(
				/*BTDS*/
				"",
				[s._implicitParam("=m2", c.jsx(r("WAWebUnstyledButton.react"), {
					onClick: l,
					xstyle: p.button,
					children: s._(
						/*BTDS*/
						""
					)
				}))]
			);
			P = c.jsxs(o("WAWebFlex.react").FlexColumn, {
				xstyle: [p.empty, o("WDSPaddings.stylex").wdsPaddings.paddingHor24],
				justify: "center",
				align: "center",
				children: [c.jsx(o("WAWebText_DONOTUSE.react").TextDiv, {
					size: "20",
					color: "secondary",
					xstyle: [p.emptyStateTitle, m.paddingBottom14],
					children: V
				}), c.jsx(o("WAWebText_DONOTUSE.react").TextDiv, {
					size: "14",
					color: "secondary",
					xstyle: p.disclaimerText,
					children: H
				})]
			});
		}
		return c.jsxs(r("WAWebDrawer.react"), {
			ref: n,
			theme: "invite",
			tsNavigationData: {
				surface: "unknown",
				viewName: "group-membership-approval"
			},
			children: [c.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
				title: s._(
					/*BTDS*/
					""
				),
				type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
				onBack: i,
				menu: T
			}), c.jsx(r("WAWebDrawerBody.react"), { children: P })]
		});
	}
	_.displayName = _.name + " [from " + i.id + "]";
	function f(e) {
		var t = o("react-compiler-runtime").c(4), n = e.children, a = e.title, i;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (i = [
			o("WDSMargins.stylex").wdsMargins.marginBottom0,
			o("WDSPaddings.stylex").wdsPaddings.paddingHor16,
			o("WDSPaddings.stylex").wdsPaddings.paddingTop24,
			o("WDSPaddings.stylex").wdsPaddings.paddingBottom12
		], t[0] = i) : i = t[0];
		var l;
		return t[1] !== n || t[2] !== a ? (l = c.jsx(r("WAWebDrawerSection.react"), {
			title: a,
			animation: !1,
			xstyle: o("WDSMargins.stylex").wdsMargins.marginBottom0,
			titleXStyle: i,
			children: n
		}), t[1] = n, t[2] = a, t[3] = l) : l = t[3], l;
	}
	function g(e, t) {
		return e.reduce(function(e, n) {
			if (o("WAWebFrontendContactGetters").getIsMyContact(n.contact)) e.contacts.push(n);
			else switch (n.requestMethod) {
				case o("WAWebRequestMethodType").RequestMethod.NonAdminAdd:
					e.addedByOthers.push(n);
					break;
				case o("WAWebRequestMethodType").RequestMethod.InviteLink:
					e.fromInviteLink.push(n);
					break;
				case o("WAWebRequestMethodType").RequestMethod.LinkedGroupJoin:
					n.parentGroupId == null || n.parentGroupId.equals(t) ? e.fromCommunity.push(n) : e.fromOtherCommunities.push(n);
					break;
			}
			return e;
		}, {
			contacts: [],
			addedByOthers: [],
			fromInviteLink: [],
			fromCommunity: [],
			fromOtherCommunities: []
		});
	}
	function h(e) {
		var t = [], n;
		return e.forEach(function(e) {
			var r, a = o("WAWebClock").Clock.membershipApprovalRequestSectionDate(e.t), i = a.date, l = a.key;
			i !== ((r = n) == null ? void 0 : r.date) && (n = {
				date: i,
				requests: [],
				key: l
			}, t.push(n)), n.requests.push(e);
		}), t;
	}
	l.default = _;
}), 226);
