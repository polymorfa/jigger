__d("WAWebBizChatAssignmentModal.react", [
	"fbt",
	"WALogger",
	"WAWebAgentCollection",
	"WAWebAgentModelUtils",
	"WAWebBizChatAssignmentAction",
	"WAWebButton.react",
	"WAWebChatAssignmentCollection",
	"WAWebConfirmPopup.react",
	"WAWebFlex.react",
	"WAWebFlexItem.react",
	"WAWebModal.react",
	"WAWebModalManager",
	"WAWebQplFlowWrapper",
	"WAWebText.react",
	"WAWebText_DONOTUSE.react",
	"WAWebUserPrefsMeUser",
	"nullthrows",
	"qpl",
	"react",
	"useWAWebListener"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react")), d = u, m = d.useEffect, p = d.useState, _ = {
		helperText: {
			marginInlineStart: "x150mmf0",
			whiteSpace: "xuxw1ft",
			$$css: !0
		},
		label: {
			cursor: "x1ypdohk",
			display: "x1rg5ohu",
			height: "xmix8c7",
			overflowX: "x6ikm8r",
			overflowY: "x10wlt62",
			paddingTop: "x1yrsyyn",
			paddingInlineEnd: "xyri2b",
			paddingBottom: "x10b6aqq",
			paddingInlineStart: "x1c1uobl",
			textOverflow: "xlyipyv",
			whiteSpace: "xuxw1ft",
			$$css: !0
		}
	};
	function f(e) {
		var t = o("WAWebUserPrefsMeUser").getMeDevicePnOrThrow_DO_NOT_USE().getDeviceId();
		return e.deviceId === t ? 0 : e.deviceId === o("WAWebAgentModelUtils").PRIMARY_DEVICE_ID ? 1 : 2;
	}
	function g(e, t) {
		return f(e) - f(t);
	}
	function h() {
		var e = o("WAWebAgentCollection").AgentCollection.filter(function(e) {
			return !e.isDeleted;
		});
		return e.sort(g), e;
	}
	function y(e) {
		var t = o("WAWebUserPrefsMeUser").getMeDevicePnOrThrow_DO_NOT_USE().getDeviceId(), n;
		return e.deviceId === t ? n = s._(
			/*BTDS*/
			""
		) : n = null, c.jsx(o("WAWebText_DONOTUSE.react").Text, {
			as: "span",
			color: "secondary",
			xstyle: _.helperText,
			children: n
		});
	}
	y.displayName = y.name + " [from " + i.id + "]";
	function C() {
		return c.jsx(r("WAWebFlexItem.react"), { grow: 1 });
	}
	C.displayName = C.name + " [from " + i.id + "]";
	var b = r("qpl")._(701185297, "3420"), v = r("qpl")._(701183376, "3423");
	function S(t) {
		var n = t.chats, a = t.entryPoint, i = t.onSave, l = function() {
			return new Map(n.map(function(e) {
				var t = o("WAWebChatAssignmentCollection").ChatAssignmentCollection.getAgentCollectionForChatId(e.id);
				return [e.id.toString(), t.length > 0 ? r("nullthrows")(t.head()).id : null];
			}));
		}, u = p(l), d = u[0], f = u[1];
		o("useWAWebListener").useListener(o("WAWebChatAssignmentCollection").ChatAssignmentCollection, "add change remove", function() {
			f(l());
		});
		var g = function() {
			var e = d.get(n[0].id.toString()), t = !0;
			return d.forEach(function(n) {
				n !== e && (e = null), n != null && (t = !1);
			}), {
				areAllChatsUnassigned: t,
				commonlyAssignedAgentId: e
			};
		}, S = p(g().commonlyAssignedAgentId), R = S[0], L = S[1], E = p(h()), k = E[0], I = E[1];
		o("useWAWebListener").useListener(o("WAWebAgentCollection").AgentCollection, "add change remove", function() {
			I(h());
		});
		var T = function() {
			L(null);
		}, D = c.jsxs(o("WAWebFlex.react").FlexRow, {
			justify: "all",
			align: "center",
			children: [c.jsx(o("WAWebText.react").WAWebTextLarge, {
				as: "span",
				weight: "medium",
				children: s._(
					/*BTDS*/
					""
				)
			}), c.jsx(o("WAWebButton.react").WAWebButtonSimplified, {
				nowrap: !0,
				disabled: !R,
				testid: "chat-assignment-unassign-button",
				onClick: T,
				children: s._(
					/*BTDS*/
					""
				)
			})]
		}), x = async function() {
			try {
				o("WAWebQplFlowWrapper").QPL.markerStart(b, { annotations: { int: { chats_count: n.length } } }), await o("WAWebBizChatAssignmentAction").changeChatAssignment(n.map(function(e) {
					return {
						agentId: R,
						chat: e
					};
				}), a), o("WAWebQplFlowWrapper").QPL.markerEnd(b, 2), i == null || i();
			} catch (t) {
				o("WAWebQplFlowWrapper").QPL.markerEnd(b, 3), o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["chat_assignment_modal: handleOk error ", ""])), t);
			} finally {
				o("WAWebModalManager").ModalManager.close();
			}
		}, $ = function(t) {
			L(t.target.value);
		}, P = k.map(function(e) {
			return c.jsx("li", { children: c.jsxs(o("WAWebFlex.react").FlexRow, {
				align: "center",
				children: [
					c.jsx("input", {
						id: e.id,
						"data-testid": "chat-assignment-agent-radio",
						className: "x2lah0s xmix8c7 xqf2s3x x1xp8n7a",
						type: "radio",
						name: "agent",
						checked: e.id === R,
						value: e.id,
						onChange: $
					}),
					c.jsx(o("WAWebText_DONOTUSE.react").TextLabel, {
						htmlFor: e.id,
						size: "16",
						color: "secondary",
						xstyle: _.label,
						children: e.name
					}),
					c.jsx(C, {}),
					y(e)
				]
			}) }, e.id);
		}), N = function() {
			var e = g(), t = e.areAllChatsUnassigned, r = e.commonlyAssignedAgentId;
			return n.length > 1 && R == null ? t : R === r;
		};
		return m(function() {
			o("WAWebQplFlowWrapper").QPL.markerEnd(v, 2);
		}, []), c.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			tsNavigationData: {
				surface: "unknown",
				viewName: "chat-assignment"
			},
			title: D,
			okText: s._(
				/*BTDS*/
				""
			),
			type: o("WAWebModal.react").ModalTheme.ChatAssignment,
			onCancel: o("WAWebModalManager").closeModalManager,
			onOK: x,
			okDisabled: N(),
			children: c.jsx("form", {
				method: "POST",
				children: c.jsx("ol", { children: P })
			})
		});
	}
	S.displayName = S.name + " [from " + i.id + "]", l.default = S;
}), 226);
