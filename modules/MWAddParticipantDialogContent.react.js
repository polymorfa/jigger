__d("MWAddParticipantDialogContent.react", [
	"fbt",
	"CometScrollableArea.react",
	"FBLogger",
	"FocusRegionStrictMode.react",
	"I64",
	"LSClearTablesStoredProcedure",
	"LSContactBitOffset",
	"LSContactReachabilityStatusType",
	"LSFactory",
	"LSIntEnum",
	"LSIssueSearchQueryStoredProcedure",
	"LSMessagingThreadTypeUtil",
	"LSThreadBitOffset",
	"LSVec",
	"MWAddParticipantDialogSearchResults.react",
	"MWAddParticipantDialogSelectedParticipants.react",
	"MWAddParticipantDialogSubmitButton.react",
	"MWAddParticipantDialogSuggestedContacts.react",
	"MWLSSearchIssueSearchQuerySupportedTypes",
	"MWVerticalRhythm",
	"MWXButton.react",
	"MWXCardedDialog_DEPRECATED.react",
	"MWXCircleButton.react",
	"MWXColumn.react",
	"MWXColumnItem.react",
	"MWXIconCross",
	"MWXIconMagnifyingGlass",
	"MWXIconStrict.react",
	"MWXRoundedTextInput.react",
	"MWXText.react",
	"MWXacGating",
	"MessengerWebEventsFalcoEvent",
	"ReQL",
	"ReQLSuspense",
	"cr:19926",
	"focusScopeQueries",
	"gkx",
	"goURIOnWindow",
	"isGroupInvitesEnabled",
	"promiseDone",
	"react",
	"requestIdleCallback",
	"useDebouncedValue",
	"useMWXAlertDialogCenteredContent",
	"useMWXConfirmationDialog",
	"useMessengerGenId",
	"useReStore",
	"useXacGroupBehavior"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u, c, d, m = d || (d = o("react")), p = d, _ = p.useCallback, f = p.useEffect, g = p.useId, h = p.useMemo, y = p.useState, C = { root: {
		height: "x1egiwwb",
		$$css: !0
	} };
	function b(t) {
		var a, l = t.onAddParticipants, d = t.onClose, p = t.thread, b = (e || (e = r("useReStore")))(), v = p.threadKey, S = y(""), R = S[0], L = S[1], E = R.trim(), k = r("useDebouncedValue")(E, 200), I = y([]), T = I[0], D = I[1], x = r("useMWXConfirmationDialog")(), $ = r("useMWXAlertDialogCenteredContent")(), P = T.filter(function(e) {
			var t = e[0], n = e[1];
			return !n.isTombstoned;
		}).map(function(e) {
			var t = e[0];
			return t;
		}), N = r("useMessengerGenId")(), M = g(), w = _(function() {
			return b.runInTransaction(function(e) {
				return r("LSClearTablesStoredProcedure")(r("LSFactory")(e));
			}, "readwrite", void 0, void 0, i.id + ":122");
		}, [b]);
		f(function() {
			return r("promiseDone")(w()), function() {
				r("requestIdleCallback")(function() {
					r("promiseDone")(w());
				});
			};
		}, [w]);
		var A = o("LSMessagingThreadTypeUtil").isArmadilloSecure(p.threadType), F = h(function() {
			return P.map(function(e) {
				return e.contactId;
			});
		}, [P]), O = h(function() {
			return P.some(function(e) {
				return e.isViewerUnconnected;
			});
		}, [P]), B = _(function() {
			A && O && r("isGroupInvitesEnabled")(), r("promiseDone")(l(F)), r("MessengerWebEventsFalcoEvent").log(function() {
				return {
					event_name: "add_participant",
					thread_fbid: (u || (u = o("I64"))).to_string(v)
				};
			}), d();
		}, [
			l,
			A,
			F,
			O,
			d,
			v
		]), W = _(function(e) {
			return b.runInTransaction(function(t) {
				return r("LSIssueSearchQueryStoredProcedure")(r("LSFactory")(t), {
					query: e,
					sessionId: M,
					supportedTypes: r("LSVec").ofArray(o("MWXacGating").isGroupsEnabled() && !A ? o("MWLSSearchIssueSearchQuerySupportedTypes").addParticipantXac : o("MWLSSearchIssueSearchQuerySupportedTypes").addParticipantBase),
					surfaceType: (c || (c = o("LSIntEnum"))).ofNumber(5)
				});
			}, "readwrite", void 0, void 0, i.id + ":167");
		}, [
			b,
			M,
			A
		]);
		f(function() {
			k !== "" && r("promiseDone")(W(k));
		}, [k, W]);
		var q = o("ReQLSuspense").useArray(function() {
			return o("ReQL").fromTableAscending(b.tables.participants, ["contactId"]).getKeyRange(v);
		}, [b, v], i.id + ":189"), U = function(t) {
			return D(function(e) {
				return e.map(function(e) {
					var n = e[0];
					return (u || (u = o("I64"))).equal(n.contactId, t) ? [n, {
						isTombstoned: !0,
						key: e[1].key
					}] : e;
				});
			});
		}, V = function(t, n) {
			var e = P.some(function(e) {
				return (u || (u = o("I64"))).equal(e.contactId, t);
			});
			if (e) return n ? U(t) : D(function(e) {
				return e.filter(function(e) {
					var n = e[0];
					return !(u || (u = o("I64"))).equal(n.contactId, t);
				});
			});
			r("FBLogger")("messenger_web_ia").mustfix("tried to remove non-selected participant");
		}, H = function(t) {
			var e = P.some(function(e) {
				return (u || (u = o("I64"))).equal(e.contactId, t.contactId);
			});
			if (e) return U(t.contactId);
			if (r("gkx")("4446")) {
				if (t.reachabilityStatus === r("LSContactReachabilityStatusType").UNREACHABLE_TO_R_RATED_ACCOUNT_INTERACTION) {
					x({
						body: s._(
							/*BTDS*/
							""
						),
						cancel: s._(
							/*BTDS*/
							""
						),
						confirm: s._(
							/*BTDS*/
							""
						),
						title: s._(
							/*BTDS*/
							""
						)
					}, function() {}, function() {
						r("goURIOnWindow")(window.open("", "_blank"), "https://www.messenger.com/help/1105851604342488?ref=lm");
					});
					return;
				}
				if (t.reachabilityStatus === r("LSContactReachabilityStatusType").UNREACHABLE_FROM_R_RATED_ACCOUNT_INTERACTION) {
					$({
						body: s._(
							/*BTDS*/
							""
						),
						close: s._(
							/*BTDS*/
							""
						)
					});
					return;
				}
			}
			return D(function(e) {
				return e.concat([[t, {
					isTombstoned: !1,
					key: N()
				}]]);
			});
		}, G = s._(
			/*BTDS*/
			""
		), z = s._(
			/*BTDS*/
			""
		), j = o("ReQLSuspense").useFirst(function() {
			return o("ReQL").mergeJoin(o("ReQL").fromTableAscending(b.tables.participants, []).getKeyRange(v), o("ReQL").fromTableAscending(b.tables.contacts, o("LSContactBitOffset").contactCapabilityFields)).filter(function(e) {
				var t = e[1];
				return o("LSContactBitOffset").has(68, t) !== !0;
			});
		}, [b, v], i.id + ":314") != null, K = (a = n("cr:19926") == null ? void 0 : n("cr:19926")(p.threadKey, P)) != null ? a : [!1, !1], Q = K[0], X = K[1], Y = X || j || !o("MWXacGating").isGroupsEnabled(), J = h(function() {
			return P.some(function(e) {
				return e.isInstagramAccount;
			});
		}, [P]), Z = r("useXacGroupBehavior")(p, J, F, q, d), ee = o("LSThreadBitOffset").has(97, p) || J, te = _(function() {
			if (F.length === 0) return void d();
			x({
				body: s._(
					/*BTDS*/
					""
				),
				cancel: s._(
					/*BTDS*/
					""
				),
				confirm: s._(
					/*BTDS*/
					""
				),
				title: s._(
					/*BTDS*/
					""
				)
			}, function() {
				return void d();
			});
		}, [
			d,
			F.length,
			x
		]);
		return m.jsx(r("MWXCardedDialog_DEPRECATED.react"), {
			onClose: te,
			title: G,
			withCloseButton: !0,
			children: m.jsxs(r("MWXColumn.react"), {
				xstyle: C.root,
				children: [
					m.jsxs(r("MWXColumnItem.react"), { children: [m.jsx(o("FocusRegionStrictMode.react").FocusRegion, {
						autoFocusQuery: o("focusScopeQueries").inputFirstTabbbableScopeQuery,
						children: m.jsx(r("MWXRoundedTextInput.react"), {
							addOnEnd: R !== "" ? m.jsx(r("MWXCircleButton.react"), {
								"aria-label": s._(
									/*BTDS*/
									""
								),
								color: "primary",
								icon: r("MWXIconCross"),
								onPress: function() {
									return L("");
								},
								size: 32
							}) : null,
							icon: m.jsx(r("MWXIconStrict.react"), {
								color: "secondary",
								icon: r("MWXIconMagnifyingGlass"),
								size: 20
							}),
							label: z,
							onChange: function(t) {
								var e;
								return L((e = t.target.value) != null ? e : "");
							},
							placeholder: z,
							spellCheck: !1,
							value: R
						})
					}), Q && o("MWXacGating").isGroupsEnabled() ? m.jsxs(m.Fragment, { children: [m.jsx(r("MWVerticalRhythm"), { height: 10 }), m.jsx(r("MWXText.react"), {
						color: "secondary",
						testid: void 0,
						type: "body4",
						children: s._(
							/*BTDS*/
							""
						)
					})] }) : null] }),
					m.jsx(r("MWXColumnItem.react"), {
						paddingHorizontal: 16,
						paddingTop: 16,
						children: m.jsx(r("MWAddParticipantDialogSelectedParticipants.react"), {
							onRemoveParticipant: V,
							participantsAndTombstones: T
						})
					}),
					m.jsx(r("MWXColumnItem.react"), {
						expanding: !0,
						children: m.jsx(r("CometScrollableArea.react"), {
							expanding: !0,
							horizontal: !1,
							children: E !== "" ? m.jsx(r("MWAddParticipantDialogSearchResults.react"), {
								disableAllUsers: Q,
								disableXACUsers: Y,
								hasIgUsers: ee,
								isSecure: A,
								onToggleParticipant: H,
								searchQueryTrimmed: E,
								selectedParticipants: P,
								threadParticipants: q
							}) : m.jsx(o("MWAddParticipantDialogSuggestedContacts.react").MWAddParticipantDialogSuggestedContacts, {
								disableAllUsers: Q,
								disableXACUsers: Y,
								hasIgUsers: ee,
								isSecure: A,
								onToggleParticipant: H,
								selectedParticipants: P,
								threadParticipants: q
							})
						})
					}),
					m.jsx(r("MWXColumnItem.react"), {
						paddingTop: 16,
						children: Z != null ? m.jsx(r("MWXButton.react"), {
							disabled: P.length === 0,
							label: s._(
								/*BTDS*/
								""
							),
							onPress: Z,
							testid: void 0
						}) : m.jsx(r("MWAddParticipantDialogSubmitButton.react"), {
							disabled: P.length === 0,
							label: G,
							onSubmit: B,
							participants: q,
							thread: p
						})
					})
				]
			})
		});
	}
	b.displayName = b.name + " [from " + i.id + "]", l.default = b;
}), 226);
