__d("WAWebVoipUiDebugDrawer.react", [
	"fbt",
	"WATimeUtils",
	"WAWebButton.react",
	"WAWebCallCollection",
	"WAWebCallLogMsgData.flow",
	"WAWebCallModel",
	"WAWebChatCollection",
	"WAWebContactCollection",
	"WAWebDrawer.react",
	"WAWebDrawerBody.react",
	"WAWebDrawerHeader.react",
	"WAWebFlex.react",
	"WAWebMenuItems.react",
	"WAWebMsgCollection",
	"WAWebMsgKey",
	"WAWebMsgModel",
	"WAWebMsgType",
	"WAWebSelect.react",
	"WAWebUserPrefsMeUser",
	"WAWebViewMode.flow",
	"WAWebVoipEventConstants",
	"WAWebVoipUiManager",
	"WAWebVoipWaCallEnums",
	"nullthrows",
	"react",
	"useWAWebEventTargetValue",
	"useWAWebListener",
	"useWAWebStableCallback"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e = ["ref"], u, c = u || (u = o("react")), d = u, m = d.useEffect, p = d.useState, _ = [
		o("WAWebVoipWaCallEnums").CallState.Calling,
		o("WAWebVoipWaCallEnums").CallState.PreacceptReceived,
		o("WAWebVoipWaCallEnums").CallState.CallActive,
		o("WAWebVoipWaCallEnums").CallState.AcceptSent,
		o("WAWebVoipWaCallEnums").CallState.CallStateEnding
	], f = 3, g = 16;
	function h(t) {
		var n = t.ref, a = babelHelpers.objectWithoutPropertiesLoose(t, e), i = a.onBack;
		return c.jsxs(r("WAWebDrawer.react"), {
			ref: n,
			theme: "settings",
			testid: "voip-ui-debug-drawer",
			children: [c.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
				title: s._(
					/*BTDS*/
					""
				),
				onBack: i,
				type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL
			}), c.jsxs(r("WAWebDrawerBody.react"), { children: [
				c.jsx(y, {
					title: "1:1 Audio Call",
					isVideoCall: !1
				}),
				c.jsx(y, {
					title: "1:1 Video Call",
					isVideoCall: !0
				}),
				c.jsx(y, {
					title: "Group Audio Call",
					isVideoCall: !1,
					isGroupCall: !0
				}),
				c.jsx(y, {
					title: "Group Video Call",
					isVideoCall: !0,
					isGroupCall: !0
				})
			] })]
		});
	}
	h.displayName = h.name + " [from " + i.id + "]";
	function y(e) {
		var t, n, a = e.isGroupCall, i = a === void 0 ? !1 : a, l = e.isVideoCall, u = e.title, d = r("useWAWebEventTargetValue")(r("WAWebCallCollection"), o("WAWebVoipEventConstants").getChangeEvent(o("WAWebVoipEventConstants").VoipCallCollectionEvents.ACTIVE_CALL), function() {
			return r("WAWebCallCollection").activeCall != null;
		}), h = p(null), y = h[0], v = h[1], S = p(null), R = S[0], L = S[1], E = p(f), k = E[0], I = E[1], T = r("useWAWebStableCallback")(function() {
			R != null && o("WAWebMsgCollection").MsgCollection.remove(R.id), r("WAWebCallCollection").setActiveCall(null), L(null), v(null);
		});
		m(function() {
			return function() {
				T();
			};
		}, [T]), m(function() {
			var e = i ? o("WAWebVoipWaCallEnums").CallState.CallActive : o("WAWebVoipWaCallEnums").CallState.Calling;
			if (y !== e) return;
			var t = null;
			async function n() {
				var e = C(i ? k : 1);
				if (e.length !== 0) {
					var n = r("nullthrows")(e[0]), a = new (o("WAWebMsgModel")).Msg({
						id: new (r("WAWebMsgKey"))({
							remote: n.id,
							fromMe: !0,
							id: await r("WAWebMsgKey").newId()
						}),
						from: o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE(),
						type: o("WAWebMsgType").MSG_TYPE.CALL_LOG,
						kind: o("WAWebMsgType").MsgKind.CallLog,
						viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE,
						callCreator: o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE(),
						t: o("WATimeUtils").unixTime(),
						callOutcome: o("WAWebCallLogMsgData.flow").CallOutcome.Ongoing,
						isVideoCall: l
					});
					t = a.id, o("WAWebMsgCollection").MsgCollection.add([a]), L(a);
					var s = new (r("WAWebCallModel"))();
					if (s.id = a.id.id, s.peerJid = n.contact.id, s.isVideo = l, s.isGroup = i, s.groupJid = null, s.msg = a, i) {
						var u = e.map(function(e) {
							return e.contact.id;
						});
						s.groupCallParticipantsConnected = u;
					}
					o("WAWebVoipUiManager").setupVoipActiveCallChangeListener(), r("WAWebCallCollection").setActiveCall(s), s.setState(i ? o("WAWebVoipWaCallEnums").CallState.CallActive : r("nullthrows")(y));
				}
			}
			return n(), function() {
				t != null && y == null && (o("WAWebMsgCollection").MsgCollection.remove(t), r("WAWebCallCollection").setActiveCall(null));
			};
		}, [
			y,
			l,
			i,
			k
		]), o("useWAWebListener").useListener(r("WAWebCallCollection").activeCall, o("WAWebVoipEventConstants").getChangeEvent(o("WAWebVoipEventConstants").VoipCallModelEvents.STATE), function() {
			if (y != null && r("WAWebCallCollection").activeCall) {
				var e;
				v((e = r("WAWebCallCollection").activeCall) == null ? void 0 : e.getState());
			}
		});
		var D = r("useWAWebStableCallback")(function() {
			var e, t = r("WAWebCallCollection").activeCall;
			if (!(t == null || !i)) {
				var n = (e = t.groupCallParticipantsConnected) != null ? e : [];
				if (!(n.length >= g)) {
					var a = b(n);
					if (a != null) {
						var l = [].concat(n, [a]);
						t.groupCallParticipantsConnected = l, t.trigger(o("WAWebVoipEventConstants").getChangeEvent(o("WAWebVoipEventConstants").VoipCallModelEvents.GROUP_CALL_PARTICIPANTS_CONNECTED)), I(l.length);
					}
				}
			}
		}), x = r("useWAWebStableCallback")(function() {
			var e, t = r("WAWebCallCollection").activeCall;
			if (!(t == null || !i)) {
				var n = (e = t.groupCallParticipantsConnected) != null ? e : [];
				if (!(n.length <= 1)) {
					var a = n.slice(0, -1);
					t.groupCallParticipantsConnected = a, t.trigger(o("WAWebVoipEventConstants").getChangeEvent(o("WAWebVoipEventConstants").VoipCallModelEvents.GROUP_CALL_PARTICIPANTS_CONNECTED)), I(a.length);
				}
			}
		});
		if (y == null) {
			if (i) {
				var $;
				return c.jsx("div", {
					className: "xso031l x1q0q8m5 x120ee7l x16ovd2e x12xbjc7 xb0esv5 x1nzty39",
					children: c.jsxs(($ = o("WAWebFlex.react")).FlexColumn, {
						gap: 12,
						children: [
							c.jsx($.FlexItem, { children: c.jsx("span", {
								className: "x117nqv4",
								children: u
							}) }),
							c.jsx($.FlexItem, { children: s._(
								/*BTDS*/
								""
							) }),
							c.jsxs($.FlexRow, {
								gap: 12,
								align: "center",
								children: [c.jsx(o("WAWebSelect.react").Select, {
									width: 100,
									menuMaxHeight: 200,
									initialSelection: String(k),
									onChange: function(t) {
										return I(parseInt(t, 10));
									},
									children: Array.from({ length: g }, function(e, t) {
										return t + 1;
									}).map(function(e) {
										return c.jsx(o("WAWebMenuItems.react").SelectMenuItem, {
											optionId: String(e),
											primary: String(e)
										}, e);
									})
								}), c.jsx(o("WAWebButton.react").Button, {
									onClick: function() {
										return v(o("WAWebVoipWaCallEnums").CallState.CallActive);
									},
									disabled: d,
									children: s._(
										/*BTDS*/
										""
									)
								})]
							})
						]
					})
				});
			}
			return c.jsx("div", {
				className: "xso031l x1q0q8m5 x120ee7l x16ovd2e x12xbjc7 xb0esv5 x1nzty39",
				children: c.jsxs(o("WAWebFlex.react").FlexColumn, {
					gap: 12,
					children: [c.jsx(o("WAWebFlex.react").FlexItem, { children: c.jsx("span", {
						className: "x117nqv4",
						children: u
					}) }), c.jsx(o("WAWebFlex.react").FlexItem, { children: c.jsx(o("WAWebButton.react").Button, {
						onClick: function() {
							return v(o("WAWebVoipWaCallEnums").CallState.Calling);
						},
						disabled: d,
						children: s._(
							/*BTDS*/
							""
						)
					}) })]
				})
			});
		}
		var P = (t = (n = r("WAWebCallCollection").activeCall) == null || (n = n.groupCallParticipantsConnected) == null ? void 0 : n.length) != null ? t : k;
		return c.jsx("div", {
			className: "xso031l x1q0q8m5 x120ee7l x16ovd2e x12xbjc7 xb0esv5 x1nzty39",
			children: c.jsxs(o("WAWebFlex.react").FlexColumn, {
				gap: 12,
				children: [
					c.jsx(o("WAWebFlex.react").FlexItem, { children: c.jsx("span", {
						className: "x117nqv4",
						children: u
					}) }),
					c.jsx(o("WAWebFlex.react").FlexItem, { children: s._(
						/*BTDS*/
						""
					) }),
					c.jsx(o("WAWebSelect.react").Select, {
						width: 200,
						initialSelection: String(y),
						onChange: function(t) {
							var e;
							return (e = r("WAWebCallCollection").activeCall) == null ? void 0 : e.setState(r("nullthrows")(o("WAWebVoipWaCallEnums").CallState.cast(parseInt(t, 10))));
						},
						children: _.map(function(e) {
							return c.jsx(o("WAWebMenuItems.react").SelectMenuItem, {
								optionId: String(e),
								primary: o("WAWebVoipWaCallEnums").CallState.getName(e)
							}, o("WAWebVoipWaCallEnums").CallState.getName(e));
						})
					}),
					i && c.jsxs(c.Fragment, { children: [c.jsx(o("WAWebFlex.react").FlexItem, { children: s._(
						/*BTDS*/
						"",
						[s._param("count", P)]
					) }), c.jsxs(o("WAWebFlex.react").FlexRow, {
						gap: 8,
						children: [c.jsx(o("WAWebButton.react").Button, {
							onClick: D,
							disabled: P >= g,
							children: s._(
								/*BTDS*/
								""
							)
						}), c.jsx(o("WAWebButton.react").Button, {
							onClick: x,
							disabled: P <= 1,
							children: s._(
								/*BTDS*/
								""
							)
						})]
					})] }),
					c.jsx(o("WAWebButton.react").Button, {
						onClick: T,
						type: "negative-destructive",
						children: s._(
							/*BTDS*/
							""
						)
					})
				]
			})
		});
	}
	y.displayName = y.name + " [from " + i.id + "]";
	function C(e) {
		for (var t = o("WAWebContactCollection").ContactCollection.getModelsArray(), n = [], a = new Set(); n.length < e && a.size < t.length;) {
			var i = Math.floor(Math.random() * (t.length - 1));
			if (!a.has(i)) {
				a.add(i);
				var l = r("nullthrows")(t.at(i)), s = o("WAWebChatCollection").ChatCollection.get(l.id);
				s && s.id.isUser() && n.push(s);
			}
		}
		return n;
	}
	function b(e) {
		var t, n = new Set(e.map(function(e) {
			return e != null && typeof e == "object" && "toString" in e ? e.toString() : String(e);
		})), r = o("WAWebContactCollection").ContactCollection.getModelsArray().filter(function(e) {
			var t = o("WAWebChatCollection").ChatCollection.get(e.id);
			return (t == null ? void 0 : t.id.isUser()) && !n.has(e.id.toString());
		});
		if (r.length === 0) return null;
		var a = Math.floor(Math.random() * r.length), i = r[a];
		return (t = i == null ? void 0 : i.id) != null ? t : null;
	}
	l.default = h;
}), 226);
