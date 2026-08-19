__d("WAWebDeleteRevokeMsgFlow.react", [
	"fbt",
	"$InternalEnum",
	"WAArrayUtils",
	"WATimeUtils",
	"WAWebButton.react",
	"WAWebChatGetters",
	"WAWebCheckBox.react",
	"WAWebCmd",
	"WAWebConfirmPopup.react",
	"WAWebContactCollection",
	"WAWebDeleteNewsletterMsgModal.react",
	"WAWebDrawerManager",
	"WAWebDrawerManagerContext",
	"WAWebEnforcementActionLogging",
	"WAWebFrontendMsgGetters",
	"WAWebKeyboardHotKeys.react",
	"WAWebModal.react",
	"WAWebModalManager",
	"WAWebMsgActionCapability",
	"WAWebMsgGetters",
	"WAWebMsgType",
	"WAWebName.react",
	"WAWebRevokeMetricUtils",
	"react",
	"useWAWebFlow",
	"useWAWebListener",
	"useWAWebToggle"
], (function(t, n, r, o, a, i, l, s) {
	var e = ["ref"], u = ["ref"], c, d = c || (c = o("react")), m = n("$InternalEnum").Mirrored(["DeleteRevoke", "RevokeConfirm"]);
	function p(e) {
		var t = e.chat, n = e.chats, a = e.commentList, i = e.fromChannelAlerts, l = e.isMsgVisible, s = e.msgList, u = e.onDelete, c = e.onEnd, p = e.theme, f = e.toastPosition, g = o("useWAWebFlow").useFlow(m.DeleteRevoke), b = g[0], v = g[1], S = r("useWAWebToggle")(!0), R = S[0], L = S[1], E = o("WAWebDrawerManagerContext").useDrawerManagerContext("right"), k;
		a != null && a.length > 0 ? k = _(a) : k = _(s), o("useWAWebListener").useListener(o("WAWebModalManager").ModalManager, "close_modal", function() {
			r("WAWebEnforcementActionLogging").logDismissModalClick();
		});
		var I = o("WAArrayUtils").groupBy(s, function(e) {
			return o("WAWebFrontendMsgGetters").getChat(e);
		}), T = o("WAArrayUtils").groupBy(a != null ? a : [], function(e) {
			return o("WAWebFrontendMsgGetters").getChat(e);
		}), D = (n != null ? n : [t]).filter(Boolean), x = D.some(function(e) {
			return e != null ? o("WAWebChatGetters").getIsNewsletter(e) : !1;
		}), $ = function() {
			I.forEach(function(e, t) {
				if (e.length > 0) {
					var n;
					o("WAWebCmd").Cmd.sendDeleteMsgs(t, {
						type: "message",
						list: e
					}, R, null, f, p);
					var r = (n = E.existsDrawer()) != null ? n : !1;
					r && l && e.forEach(function(e) {
						l(e.id, !0) && o("WAWebDrawerManager").DrawerManager.closeDrawerRight();
					});
				}
			}), T.forEach(function(e, t) {
				e != null && e.length > 0 && o("WAWebCmd").Cmd.sendDeleteMsgs(t, {
					type: "addon",
					list: e
				}, R, null, f, p);
			}), u == null || u(), c == null || c(), v.end();
		}, P = function() {
			r("WAWebEnforcementActionLogging").isSessionStarted() && r("WAWebEnforcementActionLogging").logDeleteUpdateConfirmClick(), I.forEach(function(e, t) {
				k.admin > 0 && o("WAWebRevokeMetricUtils").UiRevokeActionHelper.revokeConfirmed(), e.length > 0 && o("WAWebCmd").Cmd.sendRevokeMsgs(t, {
					type: "message",
					list: e
				}, {
					clearMedia: R,
					toastPosition: f
				});
			}), T.forEach(function(e, t) {
				e != null && e.length > 0 && o("WAWebCmd").Cmd.sendRevokeMsgs(t, {
					type: "addon",
					list: e
				}, {
					clearMedia: R,
					toastPosition: f
				});
			}), c == null || c(), v.end();
		}, N = function() {
			k.admin === 0 && k.sender > 0 ? o("WAWebRevokeMetricUtils").UiRevokeActionHelper.senderRevoke() : k.admin > 0 && k.sender === 0 ? o("WAWebRevokeMetricUtils").UiRevokeActionHelper.adminRevoke() : o("WAWebRevokeMetricUtils").UiRevokeActionHelper.adminAndSenderRevoke(), k.admin > 0 && !x ? v.push(m.RevokeConfirm) : P();
		}, M = function() {
			o("WAWebRevokeMetricUtils").UiRevokeActionHelper.endSession(), v.end();
		}, w = v.step;
		if (w) {
			var A = a != null && a.length > 0 ? d.jsx(h, {
				commentList: a,
				revokable: k,
				onDelete: $,
				onRevoke: N,
				onCancel: v.end,
				theme: p
			}) : d.jsx(y, {
				msgList: s,
				revokable: k,
				clearMedia: R,
				onDelete: $,
				onRevoke: N,
				onCancel: v.end,
				onToggleClearMedia: L,
				theme: p
			}), F;
			switch (w) {
				case m.DeleteRevoke:
					F = x ? d.jsx(r("WAWebDeleteNewsletterMsgModal.react"), {
						msgList: s,
						onRevoke: N,
						onCancel: v.end,
						fromChannelAlerts: i
					}) : A;
					break;
				case m.RevokeConfirm: {
					var O;
					a != null && a.length > 0 ? O = a.filter(function(e) {
						return o("WAWebMsgActionCapability").canAdminRevokeMsg(e);
					})[0] : O = s.filter(function(e) {
						return o("WAWebMsgActionCapability").canAdminRevokeMsg(e);
					})[0];
					var B = o("WAWebMsgGetters").getSender(O);
					if (B == null) return;
					var W = o("WAWebContactCollection").ContactCollection.assertGet(B);
					F = d.jsx(C, {
						onConfirm: P,
						onCancel: function() {
							return v.pop();
						},
						contact: W
					});
					break;
				}
			}
			return d.jsx(b, {
				requestDismiss: M,
				flow: v,
				children: F
			});
		}
	}
	p.displayName = p.name + " [from " + i.id + "]";
	function _(e) {
		return e.reduce(function(e, t) {
			var n = o("WAWebMsgActionCapability").canSenderRevokeMsg(t), r = o("WAWebMsgActionCapability").canAdminRevokeMsg(t), a = o("WAWebMsgActionCapability").canBotResponseBeRevokeByInvoker(t), i = e.sender + (n || a ? 1 : 0), l = e.admin + (r && !a ? 1 : 0), s = n || r || a, u = e.canRevoke && s && l <= 1, c = [].concat(e.revokeDurations, [o("WATimeUtils").unixTime() - o("WAWebMsgGetters").getT(t)]);
			return {
				sender: i,
				admin: l,
				canRevoke: u,
				revokeDurations: c
			};
		}, {
			sender: 0,
			admin: 0,
			canRevoke: !0,
			revokeDurations: []
		});
	}
	var f = function(t, n) {
		var e;
		if (t.canRevoke && t.admin > 0) {
			var r = n.filter(function(e) {
				return o("WAWebMsgActionCapability").canAdminRevokeMsg(e);
			})[0], a = o("WAWebMsgGetters").getSender(r);
			if (a == null) return;
			var i = o("WAWebContactCollection").ContactCollection.assertGet(a);
			e = s._(
				/*BTDS*/
				"",
				[s._param("name", d.jsx(o("WAWebName.react").ContactName, { contact: i }))]
			);
		} else e = s._(
			/*BTDS*/
			"",
			[s._plural(n.length)]
		);
		return e;
	}, g = function(t) {
		var e = t.onCancel, n = t.onDelete, r = t.onRevoke, a = t.revokable, i = t.theme, l = null, u = null, c = i === "mediaHub" ? "negative-destructive" : "primary", m = d.jsx(o("WAWebButton.react").Button, {
			testid: "popup-controls-delete",
			type: a.canRevoke ? "secondary" : c,
			onClick: n,
			children: s._(
				/*BTDS*/
				""
			)
		}, 2), p = d.jsx(o("WAWebButton.react").Button, {
			type: "secondary",
			onClick: e,
			children: s._(
				/*BTDS*/
				""
			)
		}, 0);
		return a.canRevoke && (l = d.jsx(o("WAWebButton.react").Button, {
			testid: "popup-controls-revoke",
			type: "secondary",
			onClick: r,
			children: s._(
				/*BTDS*/
				""
			)
		}, 1)), l ? u = d.jsxs(o("WAWebButton.react").ButtonGroup, {
			direction: "vertical",
			align: "end",
			children: [
				l,
				m,
				p
			]
		}) : u = d.jsxs(o("WAWebButton.react").ButtonGroup, {
			direction: "horizontal",
			children: [p, m]
		}), u;
	};
	function h(t) {
		var n = t.ref, r = babelHelpers.objectWithoutPropertiesLoose(t, e), a = r.commentList, i = r.onCancel, l = r.onDelete, s = r.onRevoke, u = r.revokable, c = r.theme, m = f(u, a), p = g({
			onCancel: i,
			onDelete: l,
			onRevoke: s,
			revokable: u,
			theme: c
		}), _ = { escape: i };
		return d.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
			ref: n,
			handlers: _,
			children: d.jsx(o("WAWebModal.react").Modal, {
				actions: p,
				title: m,
				tsNavigationData: {
					surface: "delete-message",
					viewName: "delete-revoke-msg"
				}
			})
		});
	}
	h.displayName = h.name + " [from " + i.id + "]";
	function y(e) {
		var t = e.ref, n = babelHelpers.objectWithoutPropertiesLoose(e, u), r = n.clearMedia, a = n.msgList, i = n.onCancel, l = n.onDelete, c = n.onRevoke, m = n.onToggleClearMedia, p = n.revokable, _ = n.theme, f, h = function() {
			m();
		};
		if (a.some(function(e) {
			return o("WAWebFrontendMsgGetters").getAsMms(e) && e.type !== o("WAWebMsgType").MSG_TYPE.STICKER;
		})) {
			var y = s._(
				/*BTDS*/
				""
			);
			f = d.jsxs("div", {
				className: "x78zum5 x1f6kntn xo5v014 x14z9mp x14vqqas x18d9i69",
				children: [d.jsx("div", {
					"data-testid": "menu-icon-revoke-message",
					className: "x1rg5ohu x1c4vz4f x2lah0s xdl72j9 x1sa5p1d x1uuroth x19991ni x1d8287x xwji4o3",
					children: d.jsx(o("WAWebCheckBox.react").CheckBox, {
						ariaLabel: y,
						onChange: h,
						checked: r
					})
				}), d.jsx("div", {
					className: "x1iyjqo2 xs83m0k xdl72j9 xc26acl x19991ni x1d8287x xwji4o3",
					onClick: h,
					children: y
				})]
			}, 0);
		}
		var C;
		if (p.canRevoke && p.admin > 0) {
			var b = a.filter(function(e) {
				return o("WAWebMsgActionCapability").canAdminRevokeMsg(e);
			})[0], v = o("WAWebMsgGetters").getSender(b);
			if (v == null) return;
			var S = o("WAWebContactCollection").ContactCollection.assertGet(v);
			C = s._(
				/*BTDS*/
				"",
				[s._param("name", d.jsx(o("WAWebName.react").ContactName, { contact: S }))]
			);
		} else a.length === 1 && o("WAWebMsgGetters").getIsEdited(a[0]) && o("WAWebMsgGetters").getIsFailed(a[0]) ? C = s._(
			/*BTDS*/
			""
		) : C = s._(
			/*BTDS*/
			"",
			[s._plural(a.length)]
		);
		var R = g({
			onCancel: i,
			onDelete: l,
			onRevoke: c,
			revokable: p,
			theme: _
		}), L = { escape: i };
		return d.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
			ref: t,
			handlers: L,
			children: d.jsx(o("WAWebModal.react").Modal, {
				actions: R,
				title: C,
				tsNavigationData: {
					surface: "delete-message",
					viewName: "delete-revoke-msg"
				},
				children: f
			})
		});
	}
	y.displayName = y.name + " [from " + i.id + "]";
	function C(e) {
		var t = e.contact, n = e.onCancel, r = e.onConfirm, a = e.ref;
		return d.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			tsNavigationData: {
				surface: "delete-message",
				viewName: "revoke-confirm"
			},
			ref: a,
			okText: s._(
				/*BTDS*/
				""
			),
			onOK: r,
			okButtonType: "solid-warning",
			cancelText: s._(
				/*BTDS*/
				""
			),
			onCancel: n,
			children: s._(
				/*BTDS*/
				"",
				[s._param("name", d.jsx(o("WAWebName.react").ContactName, { contact: t }))]
			)
		});
	}
	C.displayName = C.name + " [from " + i.id + "]", l.default = p;
}), 226);
