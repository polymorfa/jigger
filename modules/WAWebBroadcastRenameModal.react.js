__d("WAWebBroadcastRenameModal.react", [
	"fbt",
	"WAWebBizBroadcastsHomeStrings",
	"WAWebBroadcastAudienceNameField.react",
	"WAWebBroadcastListAction",
	"WAWebBusinessBroadcastUserJourneyLogger",
	"WAWebFbtCommon",
	"WAWebFlex.react",
	"WAWebModal.react",
	"WAWebNoop",
	"WAWebToast.react",
	"WAWebToastManager",
	"WAWebWidToJid",
	"WDSButton.react",
	"WDSIconIcClose.react",
	"WDSText.react",
	"react",
	"react-compiler-runtime",
	"useWAWebModelValues"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e, d = c.useCallback, m = c.useState, p = {
		root: {
			paddingTop: "x1xrf6ya",
			paddingInlineEnd: "xde1mab",
			paddingBottom: "xscbp6u",
			paddingInlineStart: "x1iw51ew",
			rowGap: "x1f0uite",
			width: "x1czfd9k",
			$$css: !0
		},
		header: {
			columnGap: "xs2akgl",
			$$css: !0
		},
		footer: {
			paddingTop: "x1p57kb1",
			$$css: !0
		}
	};
	function _(e) {
		var t = o("react-compiler-runtime").c(42), n = e.chat, a = e.entryPoint, i = e.onAudienceUpdate, l = e.onClose, c = e.surface, d;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (d = ["id", "name"], t[0] = d) : d = t[0];
		var _ = o("useWAWebModelValues").useModelValues(n, d), f;
		if (t[1] !== _.name) {
			var g, h;
			f = (g = (h = _.name) == null ? void 0 : h.trim()) != null ? g : "", t[1] = _.name, t[2] = f;
		} else f = t[2];
		var y = m(f), C = y[0], b = y[1], v;
		t[3] !== _.id ? (v = o("WAWebWidToJid").widToBroadcastJid(_.id), t[3] = _.id, t[4] = v) : v = t[4];
		var S = v, R;
		t[5] !== S || t[6] !== a || t[7] !== i || t[8] !== c ? (R = function(t) {
			S != null && (o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.undoRenameAudienceClicked(a, c, S != null ? S : ""), o("WAWebBroadcastListAction").renameBroadcastListAction(S, t).then(function() {
				i == null || i();
			}).catch(r("WAWebNoop")));
		}, t[5] = S, t[6] = a, t[7] = i, t[8] = c, t[9] = R) : R = t[9];
		var L = R, E;
		t[10] !== S || t[11] !== _.name || t[12] !== a || t[13] !== L || t[14] !== C || t[15] !== i || t[16] !== l || t[17] !== c ? (E = function() {
			var e, t, n = C.trim();
			if (n !== "" && S != null) {
				var s = (e = (t = _.name) == null ? void 0 : t.trim()) != null ? e : "";
				o("WAWebBroadcastListAction").renameBroadcastListAction(S, n).then(function() {
					o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.renameAudienceResult(a, c, S != null ? S : "", "success"), i == null || i(), o("WAWebToastManager").ToastManager.open(u.jsx(o("WAWebToast.react").Toast, {
						msg: o("WAWebBizBroadcastsHomeStrings").getAudienceRenamedToastMessage(),
						action: {
							actionText: r("WAWebFbtCommon")("Undo"),
							onAction: function() {
								return L(s);
							}
						}
					}));
				}).catch(function(e) {
					var t = e instanceof Error ? e.message : String(e);
					o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.renameAudienceResult(a, c, S != null ? S : "", "failure", t), o("WAWebToastManager").ToastManager.open(u.jsx(o("WAWebToast.react").Toast, { msg: o("WAWebBizBroadcastsHomeStrings").getAudienceRenameFailedToastMessage() }));
				}).finally(function() {
					l();
				});
			}
		}, t[10] = S, t[11] = _.name, t[12] = a, t[13] = L, t[14] = C, t[15] = i, t[16] = l, t[17] = c, t[18] = E) : E = t[18];
		var k = E, I;
		if (t[19] !== _.name) {
			var T, D;
			I = (T = (D = _.name) == null ? void 0 : D.trim()) != null ? T : "", t[19] = _.name, t[20] = I;
		} else I = t[20];
		var x = I, $;
		t[21] !== x || t[22] !== C ? ($ = C.trim() === "" || C.trim() === x, t[21] = x, t[22] = C, t[23] = $) : $ = t[23];
		var P = $, N;
		t[24] !== l ? (N = u.jsx(r("WDSButton.react"), {
			Icon: r("WDSIconIcClose.react"),
			onPress: l,
			size: "medium",
			testid: "close-rename-modal-button",
			variant: "borderless"
		}), t[24] = l, t[25] = N) : N = t[25];
		var M;
		t[26] === Symbol.for("react.memo_cache_sentinel") ? (M = u.jsx(r("WDSText.react"), {
			colorName: "contentDefault",
			type: "Body1",
			children: s._(
				/*BTDS*/
				""
			)
		}), t[26] = M) : M = t[26];
		var w;
		t[27] !== N ? (w = u.jsxs(o("WAWebFlex.react").FlexRow, {
			align: "center",
			xstyle: p.header,
			children: [N, M]
		}), t[27] = N, t[28] = w) : w = t[28];
		var A;
		t[29] !== C ? (A = u.jsx(r("WAWebBroadcastAudienceNameField.react"), {
			onValueChange: b,
			testid: "business_broadcasts_audience_rename_textfield",
			value: C
		}), t[29] = C, t[30] = A) : A = t[30];
		var F;
		t[31] === Symbol.for("react.memo_cache_sentinel") ? (F = s._(
			/*BTDS*/
			""
		), t[31] = F) : F = t[31];
		var O;
		t[32] !== k || t[33] !== P ? (O = u.jsx(o("WAWebFlex.react").FlexRow, {
			align: "center",
			justify: "end",
			xstyle: p.footer,
			children: u.jsx(r("WDSButton.react"), {
				disabled: P,
				label: F,
				onPress: k,
				size: "medium",
				testid: "broadcast-rename-save-button",
				variant: "filled"
			})
		}), t[32] = k, t[33] = P, t[34] = O) : O = t[34];
		var B;
		t[35] !== A || t[36] !== O || t[37] !== w ? (B = u.jsxs(o("WAWebFlex.react").FlexColumn, {
			align: "stretch",
			xstyle: p.root,
			children: [
				w,
				A,
				O
			]
		}), t[35] = A, t[36] = O, t[37] = w, t[38] = B) : B = t[38];
		var W;
		return t[39] !== l || t[40] !== B ? (W = u.jsx(o("WAWebModal.react").Modal, {
			type: o("WAWebModal.react").ModalTheme.Auto,
			onOverlayClick: l,
			children: B
		}), t[39] = l, t[40] = B, t[41] = W) : W = t[41], W;
	}
	l.default = _;
}), 226);
