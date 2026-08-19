__d("WAWebMixedMultiSelectBar.react", [
	"fbt",
	"WAWebBizChatAssignmentAiRepliesModal.react",
	"WAWebBizChatAssignmentForMultipleChatsAiRepliesModal.react",
	"WAWebBizChatAssignmentModal.react",
	"WAWebChatAssignmentLogEvents.flow",
	"WAWebChatAssignmentUtils",
	"WAWebChatModel",
	"WAWebCommonCTWADataSharing",
	"WAWebDeleteRefreshedIcon.react",
	"WAWebLabelOffRefreshedIcon.react",
	"WAWebListPeopleIcon.react",
	"WAWebListsGatingUtils",
	"WAWebManageLabelFlowLoadable",
	"WAWebModalManager",
	"WAWebMultiSelectEntryPointConstants",
	"WAWebQplFlowWrapper",
	"WAWebSmbDataSharingOptInModalDialog",
	"WAWebWamEnumSmbDataSharingConsentScreenEntryPoint",
	"WAWebWamEnumUpdateEntryPoint",
	"WDSIconIcClose.react",
	"WDSIconIcLabel.react",
	"WDSIconWdsIcTransferOwnership.react",
	"qpl",
	"react",
	"react-compiler-runtime",
	"stylex",
	"useWAWebForceUpdate",
	"useWAWebListener",
	"useWAWebStableCallback"
], (function(t, n, r, o, a, i, l, s) {
	var e = ["ref"], u, c, d = c || (c = o("react")), m = c.useEffect, p = {
		multiselectIcon: {
			flex: "x1okw0bk",
			paddingTop: "x1y1aw1k",
			paddingInlineEnd: "xf159sx",
			paddingBottom: "xwib8y2",
			paddingInlineStart: "xmzvs34",
			$$css: !0
		},
		multiselectIconChatList: {
			color: "xhslqc4 xg8cxui",
			$$css: !0
		},
		multiselectIconDrawerHeader: {
			color: "x1riek7e xmzs2yd xpcgjw",
			$$css: !0
		}
	}, _ = r("qpl")._(701183376, "3423");
	function f(t) {
		"use no forget";
		var n = t.ref, a = babelHelpers.objectWithoutPropertiesLoose(t, e), i = a.labelEditEnabled, l = i === void 0 ? !1 : i, u = a.multiSelectEntryPoint, c = a.onCancel, f = a.onDelete, h = a.onRemoveLabel, y = a.selectedModels, C = u === o("WAWebMultiSelectEntryPointConstants").MultiSelectEntryPoint.ChatAssignment, b = o("useWAWebForceUpdate").useForceUpdateDONOTUSE(), v = y.getSelected(), S = v.length, R = function() {
			o("WAWebModalManager").ModalManager.open(d.jsx(o("WAWebManageLabelFlowLoadable").ManageLabelFlowLoadable, {
				onLabelUpdateComplete: c,
				modelsToUpdate: v,
				onClose: o("WAWebModalManager").closeModalManager,
				entryPoint: o("WAWebWamEnumUpdateEntryPoint").UPDATE_ENTRY_POINT.CHAT_LONG_PRESS_OPTIONS
			}));
		}, L = function() {
			var e = v.reduce(function(e, t) {
				return t instanceof o("WAWebChatModel").Chat && e.push(t), e;
			}, []);
			r("WAWebSmbDataSharingOptInModalDialog").maybeShowLabelDataSharingDialog({
				cb: R,
				chats: e,
				entrypoint: o("WAWebWamEnumSmbDataSharingConsentScreenEntryPoint").SMB_DATA_SHARING_CONSENT_SCREEN_ENTRY_POINT.LABEL_CHAT,
				target: o("WAWebCommonCTWADataSharing").SmbDataSharingLabelTargetValues.CHAT
			});
		}, E = r("useWAWebStableCallback")(c);
		m(function() {
			S === 0 && E();
		}, [S, E]), o("useWAWebListener").useListener(y, "all", b);
		var k = v.length, I, T, D, x, $ = a.theme === "drawer-header", P = a.theme === "chatlist-panel", N = null;
		if ($ ? N = p.multiselectIconDrawerHeader : P && (N = p.multiselectIconChatList), C && k > 0) {
			var M = function() {
				var e = v;
				if (o("WAWebQplFlowWrapper").QPL.markerStart(_, { annotations: { string: { CHAT_ASSIGNMENT_ENTRY_POINT: "MULTI_SELECT" } } }), o("WAWebChatAssignmentUtils").canAssignAllChats(e) === !1) {
					if (e.length === 1) {
						o("WAWebModalManager").ModalManager.open(d.jsx(r("WAWebBizChatAssignmentAiRepliesModal.react"), { chat: e[0] }));
						return;
					}
					o("WAWebModalManager").ModalManager.open(d.jsx(r("WAWebBizChatAssignmentForMultipleChatsAiRepliesModal.react"), {}));
					return;
				}
				o("WAWebModalManager").ModalManager.open(d.jsx(r("WAWebBizChatAssignmentModal.react"), {
					chats: e,
					onSave: c,
					entryPoint: o("WAWebChatAssignmentLogEvents.flow").ChatAssignmentEntryPointType.MULTI_SELECT
				}));
			};
			I = d.jsx(g, {
				testid: "btn-icon-assign-chat",
				Icon: r("WDSIconWdsIcTransferOwnership.react"),
				disabled: !k,
				title: s._(
					/*BTDS*/
					""
				),
				onClick: M,
				xstyle: N
			});
		}
		var w = o("WAWebListsGatingUtils").isListsEnabled();
		if (l && k > 0) {
			var A = w ? s._(
				/*BTDS*/
				""
			) : s._(
				/*BTDS*/
				""
			);
			T = d.jsx(g, {
				testid: "btn-icon-add-label",
				Icon: w ? o("WAWebListPeopleIcon.react").ListPeopleIcon : void 0,
				wdsIcon: w ? void 0 : d.jsx(r("WDSIconIcLabel.react"), { testid: "label-refreshed-icon" }),
				disabled: !k,
				title: A,
				onClick: L,
				xstyle: N
			});
		}
		if (h && k > 0) {
			var F = w ? s._(
				/*BTDS*/
				""
			) : s._(
				/*BTDS*/
				""
			);
			x = d.jsx(g, {
				testid: "btn-icon-remove-label",
				Icon: o("WAWebLabelOffRefreshedIcon.react").LabelOffRefreshedIcon,
				disabled: !k,
				title: F,
				onClick: h,
				xstyle: N
			});
		}
		if (f && k > 0) {
			var O = w ? s._(
				/*BTDS*/
				""
			) : s._(
				/*BTDS*/
				""
			);
			D = d.jsx(g, {
				testid: "btn-icon-delete-label",
				Icon: o("WAWebDeleteRefreshedIcon.react").DeleteRefreshedIcon,
				disabled: !k,
				title: O,
				onClick: f,
				xstyle: N
			});
		}
		return d.jsxs("div", babelHelpers.extends({}, {
			0: { className: "x1n2onr6 xgxk9ee x1o0tod x1yg4o9v x9f619 x78zum5 x6s0dn4 xh8yej3 xdiz9cm x889kno x1a8lsjc xf7dkkf xv54qhq xjbqb8w" },
			1: { className: "x1n2onr6 xgxk9ee x1o0tod x1yg4o9v x9f619 x78zum5 x6s0dn4 xh8yej3 xsvpx8p x4i7bpe x18d9i69 x1xnnf8n x1gx403c x17t9dm2 x1280gxy" }
		}[!!$ << 0], {
			ref: n,
			children: [
				d.jsx(g, {
					testid: "btn-icon-cancel",
					Icon: r("WDSIconIcClose.react"),
					onClick: a.onCancel,
					xstyle: N
				}),
				d.jsx("div", babelHelpers.extends({}, {
					0: { className: "x12lumcd x1sa5p1d xyqm7xq x7yx35o xuxw1ft" },
					1: { className: "x12lumcd x1sa5p1d xyqm7xq x7yx35o xuxw1ft x17t9dm2" }
				}[!!$ << 0], { children: s._(
					/*BTDS*/
					"",
					[s._plural(k, "count")]
				) })),
				I,
				T,
				D,
				x
			]
		}));
	}
	f.displayName = f.name + " [from " + i.id + "]";
	function g(e) {
		var t = o("react-compiler-runtime").c(13), n = e.Icon, a = e.directional, i = e.disabled, l = e.onClick, s = e.testid, c = e.title, m = e.wdsIcon, _ = e.xstyle, f = s != null ? s : "btn-icon", g;
		t[0] !== _ ? (g = (u || (u = r("stylex"))).props(p.multiselectIcon, _), t[0] = _, t[1] = g) : g = t[1];
		var h = i === !0, y;
		t[2] !== n || t[3] !== a || t[4] !== m ? (y = m != null ? m : n != null && d.jsx(n, { directional: a }), t[2] = n, t[3] = a, t[4] = m, t[5] = y) : y = t[5];
		var C;
		return t[6] !== l || t[7] !== f || t[8] !== g || t[9] !== h || t[10] !== y || t[11] !== c ? (C = d.jsx("button", babelHelpers.extends({ "data-testid": f }, g, {
			title: c,
			onClick: l,
			disabled: h,
			children: y
		})), t[6] = l, t[7] = f, t[8] = g, t[9] = h, t[10] = y, t[11] = c, t[12] = C) : C = t[12], C;
	}
	l.default = f;
}), 226);
