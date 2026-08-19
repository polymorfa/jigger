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
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = { headerText: {
		rowGap: "x1b73lln",
		$$css: !0
	} };
	function c(e) {
		var t = o("react-compiler-runtime").c(33), n = e.contacts, a = e.entryPoint, i = e.errorList, l = e.onDeleteAllErrorItems, c = e.onDeleteErrorItem, d = e.onUpdateContact;
		if (i.length === 0) return null;
		var m, p;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (m = { className: "x1280gxy xlr9sxt xvvg52n xwd4zgb xq8v1ta x1p57kb1 xvtqlqk xvpt6g3 xdx6fka" }, p = { className: "x7a106z x78zum5 x1qughib xdqhqc9" }, t[0] = m, t[1] = p) : (m = t[0], p = t[1]);
		var _;
		t[2] !== i.length ? (_ = o("WAWebBizBroadcastsAudienceSelectionStrings").getRecipientsNotImportedLabel(i.length), t[2] = i.length, t[3] = _) : _ = t[3];
		var f;
		t[4] !== _ ? (f = s.jsx(r("WDSText.react"), {
			testid: "biz-broadcasts-import-audience-errors-title",
			type: "Body1Emphasized",
			colorName: "secondaryNegativeEmphasized",
			children: _
		}), t[4] = _, t[5] = f) : f = t[5];
		var g;
		t[6] === Symbol.for("react.memo_cache_sentinel") ? (g = s.jsx(r("WDSText.react"), {
			testid: "biz-broadcasts-import-audience-errors-subtitle",
			type: "Body2",
			colorName: "contentDeemphasized",
			children: o("WAWebBizBroadcastsAudienceSelectionStrings").getUpdateRecipientErrorsLabel()
		}), t[6] = g) : g = t[6];
		var h;
		t[7] !== f ? (h = s.jsxs(o("WAWebFlex.react").FlexColumn, {
			xstyle: u.headerText,
			children: [f, g]
		}), t[7] = f, t[8] = h) : h = t[8];
		var y;
		t[9] === Symbol.for("react.memo_cache_sentinel") ? (y = o("WAWebBizBroadcastsAudienceSelectionStrings").getDeleteAllErrorsLabel(), t[9] = y) : y = t[9];
		var C;
		t[10] !== a || t[11] !== l ? (C = s.jsx(r("WDSButton.react"), {
			label: y,
			size: "small",
			type: "destructive",
			variant: "outline",
			onPress: function() {
				o("WAWebModalManager").ModalManager.open(s.jsx(o("WAWebBizBroadcastsConfirmDeleteDialogLoadable").WAWebBizBroadcastsConfirmDeleteDialogLoadable, {
					entryPoint: a,
					onPrimaryPress: function() {
						l(), o("WAWebModalManager").ModalManager.close();
					},
					onSecondaryPress: o("WAWebModalManager").closeModalManager
				}));
			}
		}), t[10] = a, t[11] = l, t[12] = C) : C = t[12];
		var b;
		t[13] !== h || t[14] !== C ? (b = s.jsxs("div", babelHelpers.extends({}, p, { children: [h, C] })), t[13] = h, t[14] = C, t[15] = b) : b = t[15];
		var v;
		t[16] === Symbol.for("react.memo_cache_sentinel") ? (v = { className: "x140o2bo xh8yej3" }, t[16] = v) : v = t[16];
		var S;
		if (t[17] !== n || t[18] !== a || t[19] !== i || t[20] !== c || t[21] !== d) {
			var R;
			t[23] !== n || t[24] !== a || t[25] !== c || t[26] !== d ? (R = function(t, i) {
				return s.jsxs("tr", { children: [
					s.jsx("td", {
						className: "x1m189uc x6ikm8r x10wlt62 xde1mab xxymvpz xz84dc7",
						children: s.jsx(r("WAWebBizBroadcastsContactChatCell.react"), {
							rowData: t.rowData,
							index: i
						})
					}),
					s.jsx("td", {
						className: "x1m189uc x6ikm8r x10wlt62 xlyipyv xxymvpz xu9fw5t",
						children: s.jsx(r("WDSText.react"), {
							testid: "biz-broadcasts-import-audience-phone-number-" + i,
							type: "Body1",
							colorName: "contentDeemphasized",
							maxLines: 1,
							children: o("WAWebContactImportTemplateParsingUtils").extractPhone(t.rowData)
						})
					}),
					s.jsx("td", {
						className: "x1m189uc x6ikm8r x10wlt62 xdx6fka xlyipyv xxymvpz xu9fw5t",
						children: (t == null ? void 0 : t.errorType) && s.jsx(r("WDSText.react"), {
							testid: "biz-broadcasts-import-audience-error-message-" + i,
							type: "Body3",
							maxLines: 1,
							colorName: "secondaryNegativeEmphasized",
							children: r("WAWebBizBroadcastsContactErrorMessage")(t == null ? void 0 : t.errorType)
						})
					}),
					s.jsx("td", {
						className: "xp4054r xxymvpz xuxw1ft xni59qk",
						children: s.jsxs("div", {
							className: "x78zum5 x7v6yn8",
							children: [s.jsx(r("WDSButton.react"), {
								testid: "biz-broadcasts-import-audience-edit-error-button-" + i,
								size: "medium",
								variant: "borderless",
								Icon: r("WDSIconIcEdit.react"),
								onPress: function() {
									o("WAWebModalManager").ModalManager.open(s.jsx(o("WAWebBizBroadcastsEditContactDialogLoadable").WAWebBizBroadcastsEditContactDialogLoadable, {
										entryPoint: a,
										validContactsData: n,
										item: t,
										onSave: function(n) {
											var e = babelHelpers.extends({}, n, { rowIndex: t.rowIndex });
											d(t, e, i), o("WAWebModalManager").ModalManager.close();
										},
										onCancel: o("WAWebModalManager").closeModalManager
									}));
								}
							}), s.jsx(r("WDSButton.react"), {
								testid: "biz-broadcasts-import-audience-delete-error-button-" + i,
								size: "medium",
								variant: "borderless",
								Icon: r("WDSIconIcDelete.react"),
								onPress: function() {
									return c(t);
								}
							})]
						})
					})
				] }, String(t.rowData.phone) + "-" + i);
			}, t[23] = n, t[24] = a, t[25] = c, t[26] = d, t[27] = R) : R = t[27], S = i.map(R), t[17] = n, t[18] = a, t[19] = i, t[20] = c, t[21] = d, t[22] = S;
		} else S = t[22];
		var L;
		t[28] !== S ? (L = s.jsx("table", babelHelpers.extends({}, v, { children: s.jsx("tbody", { children: S }) })), t[28] = S, t[29] = L) : L = t[29];
		var E;
		return t[30] !== L || t[31] !== b ? (E = s.jsxs("div", babelHelpers.extends({}, m, { children: [b, L] })), t[30] = L, t[31] = b, t[32] = E) : E = t[32], E;
	}
	l.default = c;
}), 98);
