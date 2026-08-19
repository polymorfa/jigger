__d("WAWebBizBroadcastsImportAudienceErrorsList.react", [
	"WAWebBizBroadcastsAudienceSelectionStrings",
	"WAWebBizBroadcastsConfirmDeleteDialogLoadable",
	"WAWebBizBroadcastsContactChatCell.react",
	"WAWebBizBroadcastsContactErrorMessage",
	"WAWebBizBroadcastsEditContactDialogLoadable",
	"WAWebContactImportTemplateParsingUtils",
	"WAWebFlex.react",
	"WAWebModalManager",
	"WDSButton.react",
	"WDSIconIcDelete.react",
	"WDSIconIcEdit.react",
	"WDSText.react",
	"react"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = { headerText: {
		rowGap: "x1b73lln",
		$$css: !0
	} };
	function c(e) {
		var t = e.contacts, n = e.entryPoint, a = e.errorList, i = e.onDeleteAllErrorItems, l = e.onDeleteErrorItem, c = e.onUpdateContact;
		return a.length === 0 ? null : s.jsxs("div", {
			className: "x1280gxy xlr9sxt xvvg52n xwd4zgb xq8v1ta x1p57kb1 xvtqlqk xvpt6g3 xdx6fka",
			children: [s.jsxs("div", {
				className: "x7a106z x78zum5 x1qughib xdqhqc9",
				children: [s.jsxs(o("WAWebFlex.react").FlexColumn, {
					xstyle: u.headerText,
					children: [s.jsx(r("WDSText.react"), {
						testid: "biz-broadcasts-import-audience-errors-title",
						type: "Body1Emphasized",
						colorName: "secondaryNegativeEmphasized",
						children: o("WAWebBizBroadcastsAudienceSelectionStrings").getRecipientsNotImportedLabel(a.length)
					}), s.jsx(r("WDSText.react"), {
						testid: "biz-broadcasts-import-audience-errors-subtitle",
						type: "Body2",
						colorName: "contentDeemphasized",
						children: o("WAWebBizBroadcastsAudienceSelectionStrings").getUpdateRecipientErrorsLabel()
					})]
				}), s.jsx(r("WDSButton.react"), {
					label: o("WAWebBizBroadcastsAudienceSelectionStrings").getDeleteAllErrorsLabel(),
					size: "small",
					type: "destructive",
					variant: "outline",
					onPress: function() {
						o("WAWebModalManager").ModalManager.open(s.jsx(o("WAWebBizBroadcastsConfirmDeleteDialogLoadable").WAWebBizBroadcastsConfirmDeleteDialogLoadable, {
							entryPoint: n,
							onPrimaryPress: function() {
								i(), o("WAWebModalManager").ModalManager.close();
							},
							onSecondaryPress: o("WAWebModalManager").closeModalManager
						}));
					}
				})]
			}), s.jsx("table", {
				className: "x140o2bo xh8yej3",
				children: s.jsx("tbody", { children: a.map(function(e, a) {
					return s.jsxs("tr", { children: [
						s.jsx("td", {
							className: "x1m189uc x6ikm8r x10wlt62 xde1mab xxymvpz xz84dc7",
							children: s.jsx(r("WAWebBizBroadcastsContactChatCell.react"), {
								rowData: e.rowData,
								index: a
							})
						}),
						s.jsx("td", {
							className: "x1m189uc x6ikm8r x10wlt62 xlyipyv xxymvpz xu9fw5t",
							children: s.jsx(r("WDSText.react"), {
								testid: "biz-broadcasts-import-audience-phone-number-" + a,
								type: "Body1",
								colorName: "contentDeemphasized",
								maxLines: 1,
								children: o("WAWebContactImportTemplateParsingUtils").extractPhone(e.rowData)
							})
						}),
						s.jsx("td", {
							className: "x1m189uc x6ikm8r x10wlt62 xdx6fka xlyipyv xxymvpz xu9fw5t",
							children: (e == null ? void 0 : e.errorType) && s.jsx(r("WDSText.react"), {
								testid: "biz-broadcasts-import-audience-error-message-" + a,
								type: "Body3",
								maxLines: 1,
								colorName: "secondaryNegativeEmphasized",
								children: r("WAWebBizBroadcastsContactErrorMessage")(e == null ? void 0 : e.errorType)
							})
						}),
						s.jsx("td", {
							className: "xp4054r xxymvpz xuxw1ft xni59qk",
							children: s.jsxs("div", {
								className: "x78zum5 x7v6yn8",
								children: [s.jsx(r("WDSButton.react"), {
									testid: "biz-broadcasts-import-audience-edit-error-button-" + a,
									size: "medium",
									variant: "borderless",
									Icon: r("WDSIconIcEdit.react"),
									onPress: function() {
										o("WAWebModalManager").ModalManager.open(s.jsx(o("WAWebBizBroadcastsEditContactDialogLoadable").WAWebBizBroadcastsEditContactDialogLoadable, {
											entryPoint: n,
											validContactsData: t,
											item: e,
											onSave: function(n) {
												var t = babelHelpers.extends({}, n, { rowIndex: e.rowIndex });
												c(e, t, a), o("WAWebModalManager").ModalManager.close();
											},
											onCancel: o("WAWebModalManager").closeModalManager
										}));
									}
								}), s.jsx(r("WDSButton.react"), {
									testid: "biz-broadcasts-import-audience-delete-error-button-" + a,
									size: "medium",
									variant: "borderless",
									Icon: r("WDSIconIcDelete.react"),
									onPress: function() {
										return l(e);
									}
								})]
							})
						})
					] }, String(e.rowData.phone) + "-" + a);
				}) })
			})]
		});
	}
	c.displayName = c.name + " [from " + i.id + "]", l.default = c;
}), 98);
