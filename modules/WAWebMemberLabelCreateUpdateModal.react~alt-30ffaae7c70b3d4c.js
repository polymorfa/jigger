__d("WAWebMemberLabelCreateUpdateModal.react", [
	"fbt",
	"$InternalEnum",
	"WAWebCloseRefreshedIcon.react",
	"WAWebDeleteRefreshedIcon.react",
	"WAWebExternalLink.react",
	"WAWebFaqUrl",
	"WAWebFlex.react",
	"WAWebGroupMemberTagUpdateLogger",
	"WAWebMemberLabelCommonUtils",
	"WAWebMemberLabelCreateUpdateModalPreview.react",
	"WAWebMemberLabelDeleteModal.react",
	"WAWebMemberLabelsFrontendUtils",
	"WAWebModal.react",
	"WAWebModalManager",
	"WAWebSendMemberLabelAction",
	"WAWebSendMsgResultAction",
	"WAWebToast.react",
	"WAWebToastManager",
	"WAWebWamEnumTsSurface",
	"WDSButton.react",
	"WDSText.react",
	"WDSTextField.react",
	"WDSTooltip.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e, d = c.useId, m = c.useState, p = n("$InternalEnum").Mirrored(["CREATE", "UPDATE"]), _ = {
		headerRow: {
			boxSizing: "x9f619",
			columnGap: "x1aj3ljl",
			height: "x1peatla",
			paddingInlineStart: "x12w63v0",
			paddingInlineEnd: "x1nzty39",
			$$css: !0
		},
		chatTitle: {
			height: "x1vqgdyp",
			paddingInlineStart: "x1phvje8",
			paddingInlineEnd: "xcldk2z",
			$$css: !0
		},
		descriptionText: {
			paddingBottom: "x12xbjc7",
			paddingTop: "x16ovd2e",
			paddingInlineEnd: "xcldk2z",
			paddingInlineStart: "x1phvje8",
			$$css: !0
		},
		modalWrapper: {
			boxSizing: "x9f619",
			width: "x1czfd9k",
			$$css: !0
		},
		saveButton: {
			marginTop: "x1nmyh1g",
			marginInlineEnd: "xd6izgl",
			marginBottom: "xdqhqc9",
			marginInlineStart: "x6pxu1d",
			$$css: !0
		},
		textFieldContainer: {
			paddingBottom: "x1l90r2v",
			paddingTop: "xyamay9",
			paddingInlineEnd: "x1xnnf8n",
			paddingInlineStart: "x106a9eq",
			$$css: !0
		}
	};
	function f(e) {
		var t, n = o("react-compiler-runtime").c(60), a = e.chat, i = e.entryPoint, l = e.uiSurface, c = l === void 0 ? o("WAWebWamEnumTsSurface").TS_SURFACE.CHAT_INFO_PAGE : l, f, g;
		n[0] !== a ? (f = o("WAWebMemberLabelsFrontendUtils").getMyMemberLabelStringForChat(a), g = f != null && f.trim() !== "", n[0] = a, n[1] = f, n[2] = g) : (f = n[1], g = n[2]);
		var h = g, y = h ? p.UPDATE : p.CREATE, C;
		n[3] !== a.id ? (C = a.id.toString(), n[3] = a.id, n[4] = C) : C = n[4];
		var b = C, v = h, S;
		n[5] !== i || n[6] !== b || n[7] !== v || n[8] !== c ? (S = {
			groupId: b,
			hasMemberTagAtStart: v,
			memberTagEntryPoint: i,
			uiSurface: c
		}, n[5] = i, n[6] = b, n[7] = v, n[8] = c, n[9] = S) : S = n[9];
		var R = S, L;
		n[10] !== R ? (L = function() {
			o("WAWebGroupMemberTagUpdateLogger").GroupMemberTagUpdateLogger.logError(R);
		}, n[10] = R, n[11] = L) : L = n[11];
		var E = L, k = m(f != null ? f : ""), I = k[0], T = k[1], D = m(!1), x = D[0], $ = D[1], P;
		n[12] !== a || n[13] !== I || n[14] !== R || n[15] !== E ? (P = function() {
			I.trim() && ($(!0), o("WAWebSendMemberLabelAction").sendMemberLabelMsg(a, I.trim()).then(function(e) {
				e.messageSendResult === o("WAWebSendMsgResultAction").SendMsgResult.OK ? (o("WAWebGroupMemberTagUpdateLogger").GroupMemberTagUpdateLogger.logUpdateClick(R), o("WAWebModalManager").ModalManager.close()) : (E(), o("WAWebToastManager").ToastManager.open(u.jsx(o("WAWebToast.react").Toast, { msg: s._(
					/*BTDS*/
					""
				) })));
			}).catch(function() {
				E(), o("WAWebToastManager").ToastManager.open(u.jsx(o("WAWebToast.react").Toast, { msg: s._(
					/*BTDS*/
					""
				) }));
			}).finally(function() {
				$(!1);
			}));
		}, n[12] = a, n[13] = I, n[14] = R, n[15] = E, n[16] = P) : P = n[16];
		var N = P, M;
		n[17] !== a || n[18] !== R || n[19] !== E ? (M = function() {
			o("WAWebModalManager").ModalManager.openSupportModal(u.jsx(r("WAWebMemberLabelDeleteModal.react"), { onDelete: async function() {
				$(!0), await o("WAWebSendMemberLabelAction").sendMemberLabelMsg(a, "").then(function(e) {
					e.messageSendResult === o("WAWebSendMsgResultAction").SendMsgResult.OK && (o("WAWebGroupMemberTagUpdateLogger").GroupMemberTagUpdateLogger.logDeleteConfirm(R), T(""), o("WAWebModalManager").ModalManager.closeSupportModal(), o("WAWebModalManager").ModalManager.close());
				}).catch(function() {
					E(), o("WAWebToastManager").ToastManager.open(u.jsx(o("WAWebToast.react").Toast, { msg: s._(
						/*BTDS*/
						""
					) }));
				}).finally(function() {
					$(!1);
				});
			} }), { transition: "modal" });
		}, n[17] = a, n[18] = R, n[19] = E, n[20] = M) : M = n[20];
		var w = M, A;
		n[21] === Symbol.for("react.memo_cache_sentinel") ? (A = s._(
			/*BTDS*/
			""
		), n[21] = A) : A = n[21];
		var F;
		n[22] !== I || n[23] !== x ? (F = x || I.trim() === "" || !o("WAWebMemberLabelCommonUtils").isMemberLabelStrValid(I), n[22] = I, n[23] = x, n[24] = F) : F = n[24];
		var O;
		n[25] !== N || n[26] !== F ? (O = u.jsx(r("WDSButton.react"), {
			label: A,
			onPress: N,
			size: "medium",
			variant: "filled",
			xstyle: _.saveButton,
			disabled: F
		}), n[25] = N, n[26] = F, n[27] = O) : O = n[27];
		var B = O, W;
		n[28] !== y ? (W = y === p.CREATE ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		), n[28] = y, n[29] = W) : W = n[29];
		var q = W, U = d(), V = y === p.CREATE, H;
		n[30] === Symbol.for("react.memo_cache_sentinel") ? (H = u.jsx(r("WDSButton.react"), {
			Icon: o("WAWebCloseRefreshedIcon.react").CloseRefreshedIcon,
			onPress: o("WAWebModalManager").closeModalManager,
			variant: "borderless"
		}), n[30] = H) : H = n[30];
		var G;
		n[31] !== q ? (G = u.jsx(o("WAWebFlex.react").FlexRow, {
			grow: 1,
			children: u.jsx(r("WDSText.react"), {
				type: "Body1",
				colorName: "contentDefault",
				children: q
			})
		}), n[31] = q, n[32] = G) : G = n[32];
		var z;
		n[33] === Symbol.for("react.memo_cache_sentinel") ? (z = s._(
			/*BTDS*/
			""
		), n[33] = z) : z = n[33];
		var j;
		n[34] !== w || n[35] !== V ? (j = u.jsx(r("WDSButton.react"), {
			Icon: o("WAWebDeleteRefreshedIcon.react").DeleteRefreshedIcon,
			onPress: w,
			variant: "borderless",
			disabled: V
		}), n[34] = w, n[35] = V, n[36] = j) : j = n[36];
		var K;
		n[37] !== U || n[38] !== V || n[39] !== j ? (K = u.jsx(r("WDSTooltip.react"), {
			id: U,
			label: z,
			disabled: V,
			children: j
		}), n[37] = U, n[38] = V, n[39] = j, n[40] = K) : K = n[40];
		var Q;
		n[41] !== G || n[42] !== K ? (Q = u.jsxs(o("WAWebFlex.react").FlexRow, {
			xstyle: _.headerRow,
			align: "center",
			children: [
				H,
				G,
				K
			]
		}), n[41] = G, n[42] = K, n[43] = Q) : Q = n[43];
		var X = (t = a.formattedTitle) != null ? t : a.name, Y;
		n[44] !== X ? (Y = u.jsx(o("WAWebFlex.react").FlexRow, {
			xstyle: _.chatTitle,
			align: "center",
			children: u.jsx(r("WDSText.react"), {
				type: "Body2Emphasized",
				colorName: "contentDeemphasized",
				maxLines: 1,
				children: X
			})
		}), n[44] = X, n[45] = Y) : Y = n[45];
		var J;
		n[46] === Symbol.for("react.memo_cache_sentinel") ? (J = s._(
			/*BTDS*/
			""
		), n[46] = J) : J = n[46];
		var Z;
		n[47] === Symbol.for("react.memo_cache_sentinel") ? (Z = u.jsx(o("WAWebFlex.react").FlexRow, {
			xstyle: _.descriptionText,
			children: u.jsxs(r("WDSText.react"), {
				type: "Body1",
				colorName: "contentDefault",
				children: [
					J,
					" ",
					u.jsx(o("WAWebExternalLink.react").ExternalLink, {
						href: o("WAWebFaqUrl").getGroupMemberTagUrl(),
						children: u.jsx("span", {
							className: "xo1mcw5 xk50ysn",
							children: s._(
								/*BTDS*/
								""
							)
						})
					})
				]
			})
		}), n[47] = Z) : Z = n[47];
		var ee;
		n[48] === Symbol.for("react.memo_cache_sentinel") ? (ee = { className: "xh8yej3" }, n[48] = ee) : ee = n[48];
		var te, ne;
		n[49] !== I ? (te = u.jsx(o("WAWebFlex.react").FlexRow, {
			xstyle: _.textFieldContainer,
			children: u.jsx("div", babelHelpers.extends({}, ee, { children: u.jsx(r("WDSTextField.react"), {
				label: "Member tag",
				maxCharacterCount: 30,
				value: I,
				onValueChange: T,
				testid: "chat_info_member_tag_textfield"
			}) }))
		}), ne = u.jsx(r("WAWebMemberLabelCreateUpdateModalPreview.react"), { memberLabel: I }), n[49] = I, n[50] = te, n[51] = ne) : (te = n[50], ne = n[51]);
		var re;
		n[52] !== Q || n[53] !== Y || n[54] !== te || n[55] !== ne ? (re = u.jsxs(o("WAWebFlex.react").FlexColumn, {
			xstyle: _.modalWrapper,
			align: "stretch",
			children: [
				Q,
				Y,
				Z,
				te,
				ne
			]
		}), n[52] = Q, n[53] = Y, n[54] = te, n[55] = ne, n[56] = re) : re = n[56];
		var oe;
		return n[57] !== B || n[58] !== re ? (oe = u.jsx(o("WAWebModal.react").Modal, {
			actions: B,
			type: o("WAWebModal.react").ModalTheme.Auto,
			children: re
		}), n[57] = B, n[58] = re, n[59] = oe) : oe = n[59], oe;
	}
	l.MemberLabelCreateUpdateModal = f;
}), 226);
