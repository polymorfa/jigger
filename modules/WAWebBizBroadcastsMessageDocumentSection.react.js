__d("WAWebBizBroadcastsMessageDocumentSection.react", [
	"WAWebBBLoggerTypes",
	"WAWebBizBroadcastsDocumentPreviewMetadata.react",
	"WAWebBizBroadcastsMessageSectionDocumentPreview.react",
	"WAWebBusinessBroadcastUserJourneyLogger",
	"WAWebDocumentFileIcon",
	"WAWebErrorBoundary.react",
	"WAWebFlex.react",
	"WAWebL10N",
	"WAWebModalManager",
	"WDSButton.react",
	"WDSIconIcClose.react",
	"WDSIconIcVisibility.react",
	"WDSText.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = e, c = u.useCallback, d = u.useState, m = {
		actionButtons: {
			alignItems: "x6s0dn4",
			columnGap: "x1trrmfo",
			top: "x1ngp85i",
			insetInlineEnd: "xe9xzdg",
			left: null,
			right: null,
			position: "x10l6tqk",
			transition: "xzdg38j",
			$$css: !0
		},
		row: {
			flexGrow: "x1iyjqo2",
			$$css: !0
		},
		text: {
			paddingInlineStart: "x1iw51ew",
			paddingInlineEnd: "xde1mab",
			paddingLeft: null,
			paddingRight: null,
			$$css: !0
		},
		textRTL: {
			textAlign: "xp4054r",
			$$css: !0
		}
	};
	function p(e) {
		var t = o("react-compiler-runtime").c(42), n = e.entryPoint, a = e.onRemoveMedia, i = e.selectedDocumentData, l = i.fileExt, u = i.fileName, c = i.mimetype, p = d(!1), f = p[0], g = p[1], h;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (h = function() {
			g(!0);
		}, t[0] = h) : h = t[0];
		var y = h, C;
		t[1] === Symbol.for("react.memo_cache_sentinel") ? (C = function() {
			g(!1);
		}, t[1] = C) : C = t[1];
		var b = C, v;
		t[2] !== a || t[3] !== i ? (v = function() {
			if (i != null) {
				var e = _;
				o("WAWebModalManager").ModalManager.openMedia(s.jsxs(s.Fragment, { children: [s.jsx("div", { className: "x1honnu5 x5yr21d x1o0tod xixxii4 x13vifvy xh8yej3 xbpklzw" }), s.jsx(r("WAWebBizBroadcastsMessageSectionDocumentPreview.react"), {
					selectedDocumentData: i,
					onRemoveMedia: a,
					onClose: e
				})] }));
			}
		}, t[2] = a, t[3] = i, t[4] = v) : v = t[4];
		var S = v, R;
		t[5] !== n ? (R = function() {
			return o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.attachmentSectionErrorRender(n);
		}, t[5] = n, t[6] = R) : R = t[6];
		var L;
		t[7] !== f ? (L = {
			0: { className: "xyi3aci xwf5gio x1p453bz x1suzm8a x78zum5 x1ncir08 x1n2onr6 x1bu39yj" },
			1: { className: "xyi3aci xwf5gio x1p453bz x1suzm8a x78zum5 x1ncir08 x1n2onr6 x1cbl2y9" }
		}[!!f << 0], t[7] = f, t[8] = L) : L = t[8];
		var E;
		t[9] !== f ? (E = {
			0: { className: "x1abdmlv xyi3aci xwf5gio x1p453bz x1suzm8a x1gnnpzl x1xrf6ya xde1mab xscbp6u x1iw51ew x23j0i4" },
			1: { className: "xyi3aci xwf5gio x1p453bz x1suzm8a x1gnnpzl x1xrf6ya xde1mab xscbp6u x1iw51ew x23j0i4 x1cbl2y9" }
		}[!!f << 0], t[9] = f, t[10] = E) : E = t[10];
		var k = l != null ? l : "", I;
		t[11] !== c || t[12] !== k ? (I = s.jsx(r("WAWebDocumentFileIcon"), {
			width: 24,
			mimeType: c,
			ext: k
		}), t[11] = c, t[12] = k, t[13] = I) : I = t[13];
		var T;
		t[14] !== E || t[15] !== I ? (T = s.jsx("div", babelHelpers.extends({}, E, { children: I })), t[14] = E, t[15] = I, t[16] = T) : T = t[16];
		var D;
		t[17] === Symbol.for("react.memo_cache_sentinel") ? (D = [m.text, r("WAWebL10N").isRTL() && m.textRTL], t[17] = D) : D = t[17];
		var x;
		t[18] !== u ? (x = s.jsx(r("WDSText.react"), {
			maxLines: 1,
			colorName: "contentDefault",
			type: "Body2Emphasized",
			testid: "biz-broadcast-creation-document-filename",
			children: u
		}), t[18] = u, t[19] = x) : x = t[19];
		var $;
		t[20] !== i ? ($ = s.jsx(r("WAWebBizBroadcastsDocumentPreviewMetadata.react"), { documentData: i }), t[20] = i, t[21] = $) : $ = t[21];
		var P;
		t[22] !== x || t[23] !== $ ? (P = s.jsxs(o("WAWebFlex.react").FlexColumn, {
			justify: "center",
			xstyle: D,
			children: [x, $]
		}), t[22] = x, t[23] = $, t[24] = P) : P = t[24];
		var N;
		t[25] !== P || t[26] !== T ? (N = s.jsxs(o("WAWebFlex.react").FlexRow, {
			align: "stretch",
			xstyle: m.row,
			children: [T, P]
		}), t[25] = P, t[26] = T, t[27] = N) : N = t[27];
		var M;
		t[28] !== n || t[29] !== f || t[30] !== a || t[31] !== S || t[32] !== i.fileExt || t[33] !== i.fileSize ? (M = f && s.jsxs(o("WAWebFlex.react").FlexRow, {
			xstyle: m.actionButtons,
			children: [s.jsx(r("WDSButton.react"), {
				size: "small",
				variant: "filled",
				Icon: r("WDSIconIcVisibility.react"),
				onPress: function() {
					o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.attachmentPreviewButtonClicked(n, o("WAWebBBLoggerTypes").UserActionTarget.ATTACHMENT_DOCUMENT_PREVIEW_BUTTON, i.fileExt, i.fileSize), S();
				},
				testid: "biz-broadcast-creation-document-preview-button"
			}), s.jsx(r("WDSButton.react"), {
				size: "small",
				variant: "filled",
				Icon: r("WDSIconIcClose.react"),
				onPress: function() {
					o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.attachmentRemoveButtonClicked(n, o("WAWebBBLoggerTypes").UserActionTarget.ATTACHMENT_DOCUMENT_REMOVE_BUTTON, i.fileExt, i.fileSize), a();
				},
				testid: "biz-broadcast-creation-document-remove-button"
			})]
		}), t[28] = n, t[29] = f, t[30] = a, t[31] = S, t[32] = i.fileExt, t[33] = i.fileSize, t[34] = M) : M = t[34];
		var w;
		t[35] !== N || t[36] !== M || t[37] !== L ? (w = s.jsxs("div", babelHelpers.extends({ role: "group" }, L, {
			onMouseEnter: y,
			onMouseLeave: b,
			children: [N, M]
		})), t[35] = N, t[36] = M, t[37] = L, t[38] = w) : w = t[38];
		var A;
		return t[39] !== w || t[40] !== R ? (A = s.jsx(o("WAWebErrorBoundary.react").ErrorBoundary, {
			name: "biz-broadcast-document-section",
			onError: R,
			children: w
		}), t[39] = w, t[40] = R, t[41] = A) : A = t[41], A;
	}
	function _() {
		return o("WAWebModalManager").ModalManager.closeMedia();
	}
	l.default = p;
}), 98);
