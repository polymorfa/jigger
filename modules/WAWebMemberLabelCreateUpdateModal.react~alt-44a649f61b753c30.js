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
	"react"
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
		var t, n = e.chat, a = e.entryPoint, i = e.uiSurface, l = i === void 0 ? o("WAWebWamEnumTsSurface").TS_SURFACE.CHAT_INFO_PAGE : i, c = o("WAWebMemberLabelsFrontendUtils").getMyMemberLabelStringForChat(n), f = c != null && c.trim() !== "", g = f ? p.UPDATE : p.CREATE, h = n.id.toString(), y = f, C = {
			groupId: h,
			hasMemberTagAtStart: y,
			memberTagEntryPoint: a,
			uiSurface: l
		}, b = function() {
			o("WAWebGroupMemberTagUpdateLogger").GroupMemberTagUpdateLogger.logError(C);
		}, v = m(c != null ? c : ""), S = v[0], R = v[1], L = m(!1), E = L[0], k = L[1], I = function() {
			S.trim() && (k(!0), o("WAWebSendMemberLabelAction").sendMemberLabelMsg(n, S.trim()).then(function(e) {
				e.messageSendResult === o("WAWebSendMsgResultAction").SendMsgResult.OK ? (o("WAWebGroupMemberTagUpdateLogger").GroupMemberTagUpdateLogger.logUpdateClick(C), o("WAWebModalManager").ModalManager.close()) : (b(), o("WAWebToastManager").ToastManager.open(u.jsx(o("WAWebToast.react").Toast, { msg: s._(
					/*BTDS*/
					""
				) })));
			}).catch(function() {
				b(), o("WAWebToastManager").ToastManager.open(u.jsx(o("WAWebToast.react").Toast, { msg: s._(
					/*BTDS*/
					""
				) }));
			}).finally(function() {
				k(!1);
			}));
		}, T = function() {
			o("WAWebModalManager").ModalManager.openSupportModal(u.jsx(r("WAWebMemberLabelDeleteModal.react"), { onDelete: async function() {
				k(!0), await o("WAWebSendMemberLabelAction").sendMemberLabelMsg(n, "").then(function(e) {
					e.messageSendResult === o("WAWebSendMsgResultAction").SendMsgResult.OK && (o("WAWebGroupMemberTagUpdateLogger").GroupMemberTagUpdateLogger.logDeleteConfirm(C), R(""), o("WAWebModalManager").ModalManager.closeSupportModal(), o("WAWebModalManager").ModalManager.close());
				}).catch(function() {
					b(), o("WAWebToastManager").ToastManager.open(u.jsx(o("WAWebToast.react").Toast, { msg: s._(
						/*BTDS*/
						""
					) }));
				}).finally(function() {
					k(!1);
				});
			} }), { transition: "modal" });
		}, D = u.jsx(r("WDSButton.react"), {
			label: s._(
				/*BTDS*/
				""
			),
			onPress: I,
			size: "medium",
			variant: "filled",
			xstyle: _.saveButton,
			disabled: E || S.trim() === "" || !o("WAWebMemberLabelCommonUtils").isMemberLabelStrValid(S)
		}), x = g === p.CREATE ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		), $ = d(), P = g === p.CREATE;
		return u.jsx(o("WAWebModal.react").Modal, {
			actions: D,
			type: o("WAWebModal.react").ModalTheme.Auto,
			children: u.jsxs(o("WAWebFlex.react").FlexColumn, {
				xstyle: _.modalWrapper,
				align: "stretch",
				children: [
					u.jsxs(o("WAWebFlex.react").FlexRow, {
						xstyle: _.headerRow,
						align: "center",
						children: [
							u.jsx(r("WDSButton.react"), {
								Icon: o("WAWebCloseRefreshedIcon.react").CloseRefreshedIcon,
								onPress: o("WAWebModalManager").closeModalManager,
								variant: "borderless"
							}),
							u.jsx(o("WAWebFlex.react").FlexRow, {
								grow: 1,
								children: u.jsx(r("WDSText.react"), {
									type: "Body1",
									colorName: "contentDefault",
									children: x
								})
							}),
							u.jsx(r("WDSTooltip.react"), {
								id: $,
								label: s._(
									/*BTDS*/
									""
								),
								disabled: P,
								children: u.jsx(r("WDSButton.react"), {
									Icon: o("WAWebDeleteRefreshedIcon.react").DeleteRefreshedIcon,
									onPress: T,
									variant: "borderless",
									disabled: P
								})
							})
						]
					}),
					u.jsx(o("WAWebFlex.react").FlexRow, {
						xstyle: _.chatTitle,
						align: "center",
						children: u.jsx(r("WDSText.react"), {
							type: "Body2Emphasized",
							colorName: "contentDeemphasized",
							maxLines: 1,
							children: (t = n.formattedTitle) != null ? t : n.name
						})
					}),
					u.jsx(o("WAWebFlex.react").FlexRow, {
						xstyle: _.descriptionText,
						children: u.jsxs(r("WDSText.react"), {
							type: "Body1",
							colorName: "contentDefault",
							children: [
								s._(
									/*BTDS*/
									""
								),
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
					}),
					u.jsx(o("WAWebFlex.react").FlexRow, {
						xstyle: _.textFieldContainer,
						children: u.jsx("div", {
							className: "xh8yej3",
							children: u.jsx(r("WDSTextField.react"), {
								label: "Member tag",
								maxCharacterCount: 30,
								value: S,
								onValueChange: R,
								testid: "chat_info_member_tag_textfield"
							})
						})
					}),
					u.jsx(r("WAWebMemberLabelCreateUpdateModalPreview.react"), { memberLabel: S })
				]
			})
		});
	}
	f.displayName = f.name + " [from " + i.id + "]", l.MemberLabelCreateUpdateModal = f;
}), 226);
