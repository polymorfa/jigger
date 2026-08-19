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
		var t, n, a, i, l = e.chat, c = e.entryPoint, _ = e.onAudienceUpdate, f = e.onClose, g = e.surface, h = o("useWAWebModelValues").useModelValues(l, ["id", "name"]), y = m((t = (n = h.name) == null ? void 0 : n.trim()) != null ? t : ""), C = y[0], b = y[1], v = o("WAWebWidToJid").widToBroadcastJid(h.id), S = d(function(e) {
			v != null && (o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.undoRenameAudienceClicked(c, g, v != null ? v : ""), o("WAWebBroadcastListAction").renameBroadcastListAction(v, e).then(function() {
				_ == null || _();
			}).catch(r("WAWebNoop")));
		}, [
			v,
			c,
			_,
			g
		]), R = function() {
			var e, t, n = C.trim();
			if (n !== "" && v != null) {
				var a = (e = (t = h.name) == null ? void 0 : t.trim()) != null ? e : "";
				o("WAWebBroadcastListAction").renameBroadcastListAction(v, n).then(function() {
					o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.renameAudienceResult(c, g, v != null ? v : "", "success"), _ == null || _(), o("WAWebToastManager").ToastManager.open(u.jsx(o("WAWebToast.react").Toast, {
						msg: o("WAWebBizBroadcastsHomeStrings").getAudienceRenamedToastMessage(),
						action: {
							actionText: r("WAWebFbtCommon")("Undo"),
							onAction: function() {
								return S(a);
							}
						}
					}));
				}).catch(function(e) {
					var t = e instanceof Error ? e.message : String(e);
					o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.renameAudienceResult(c, g, v != null ? v : "", "failure", t), o("WAWebToastManager").ToastManager.open(u.jsx(o("WAWebToast.react").Toast, { msg: o("WAWebBizBroadcastsHomeStrings").getAudienceRenameFailedToastMessage() }));
				}).finally(function() {
					f();
				});
			}
		}, L = (a = (i = h.name) == null ? void 0 : i.trim()) != null ? a : "", E = C.trim() === "" || C.trim() === L;
		return u.jsx(o("WAWebModal.react").Modal, {
			type: o("WAWebModal.react").ModalTheme.Auto,
			onOverlayClick: f,
			children: u.jsxs(o("WAWebFlex.react").FlexColumn, {
				align: "stretch",
				xstyle: p.root,
				children: [
					u.jsxs(o("WAWebFlex.react").FlexRow, {
						align: "center",
						xstyle: p.header,
						children: [u.jsx(r("WDSButton.react"), {
							Icon: r("WDSIconIcClose.react"),
							onPress: f,
							size: "medium",
							testid: "close-rename-modal-button",
							variant: "borderless"
						}), u.jsx(r("WDSText.react"), {
							colorName: "contentDefault",
							type: "Body1",
							children: s._(
								/*BTDS*/
								""
							)
						})]
					}),
					u.jsx(r("WAWebBroadcastAudienceNameField.react"), {
						onValueChange: b,
						testid: "business_broadcasts_audience_rename_textfield",
						value: C
					}),
					u.jsx(o("WAWebFlex.react").FlexRow, {
						align: "center",
						justify: "end",
						xstyle: p.footer,
						children: u.jsx(r("WDSButton.react"), {
							disabled: E,
							label: s._(
								/*BTDS*/
								""
							),
							onPress: R,
							size: "medium",
							testid: "broadcast-rename-save-button",
							variant: "filled"
						})
					})
				]
			})
		});
	}
	_.displayName = _.name + " [from " + i.id + "]", l.default = _;
}), 226);
