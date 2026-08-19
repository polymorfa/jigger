__d("MAWEphemeralSettingsDialog.react", [
	"fbt",
	"MWDialogText.react",
	"MWVerticalRhythm",
	"MWXColumn.react",
	"MWXColumnItem.react",
	"MWXDialog.react",
	"MWXDialogFooter.react",
	"MWXDialogHeader.react",
	"MWXLink.react",
	"MWXRadio.react",
	"MWXScrollableArea.react",
	"QPLUserFlow",
	"XMessengerDotComHelpContentControllerRouteBuilder",
	"getMAWEphemeralSettingsOptionsWithTitle",
	"promiseDone",
	"qpl",
	"react",
	"updateEphemeralDuration",
	"useMAWEphemeralDurationInSec"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = e, d = c.useMemo, m = c.useState, p = { scrollableArea: {
		maxHeight: "xq3t0pi",
		$$css: !0
	} }, _ = s._(
		/*BTDS*/
		""
	);
	function f(e) {
		var t = e.getThreadJid, n = e.onClose, o = e.threadKey, a = m(!1), i = a[0], l = a[1], c = r("useMAWEphemeralDurationInSec")(t, o), f = c.ephemeralDurationInSec, g = c.initialDuration, h = c.isLoadingEphemeralDuration, y = c.setEphemeralDurationInSec, C = d(function() {
			return r("getMAWEphemeralSettingsOptionsWithTitle")(g);
		}, [g]), b = r("qpl")._(1056845690, "2034"), v = function() {
			l(!1), r("QPLUserFlow").endSuccess(b, {}), n();
		}, S = function() {
			l(!1), r("QPLUserFlow").endFailure(b, "Failure setting ephemeral duration", {}), y(g);
		};
		return u.jsx(r("MWXDialog.react"), {
			footer: u.jsx(r("MWXDialogFooter.react"), {
				callToActionGroupDirection: "backward",
				primaryCallToAction: {
					disabled: f === g || i,
					label: s._(
						/*BTDS*/
						""
					),
					loading: i,
					onPress: function() {
						var e;
						r("QPLUserFlow").addPoint(b, "confirm_button_click", {}), l(!0), r("promiseDone")(r("updateEphemeralDuration")((e = t()) != null ? e : void 0, f, !1, v, S, o));
					},
					testid: "maw-ephemeral-messages-settings-dialog_submit"
				},
				secondaryCallToAction: {
					label: s._(
						/*BTDS*/
						""
					),
					onPress: function() {
						r("QPLUserFlow").endCancel(b), n();
					}
				}
			}),
			hasTextOnlyContent: !1,
			header: u.jsx(r("MWXDialogHeader.react"), {
				onClose: n,
				title: _,
				withCloseButton: !0
			}),
			onClose: function() {
				r("QPLUserFlow").endCancel(r("qpl")._(1056845690, "2034"), {}), n();
			},
			size: "small",
			testid: void 0,
			children: u.jsx(r("MWXColumn.react"), {
				paddingTop: 4,
				children: u.jsxs(r("MWXColumnItem.react"), { children: [
					u.jsx(r("MWDialogText.react"), {
						align: "center",
						color: "secondary",
						numberOfLines: 3,
						type: "body",
						children: s._(
							/*BTDS*/
							"",
							[s._param("learn_more_link", u.jsx(r("MWXLink.react"), {
								"aria-label": s._(
									/*BTDS*/
									""
								),
								href: r("XMessengerDotComHelpContentControllerRouteBuilder").buildUri({ cms_id: "1039542879410863" }).toString(),
								target: "_blank",
								children: s._(
									/*BTDS*/
									""
								)
							}))]
						)
					}),
					u.jsx(r("MWVerticalRhythm"), { height: 8 }),
					u.jsx(r("MWXScrollableArea.react"), {
						horizontal: !1,
						xstyle: p.scrollableArea,
						children: u.jsx(r("MWXColumn.react"), {
							"aria-label": s._(
								/*BTDS*/
								""
							),
							paddingHorizontal: 16,
							paddingVertical: 8,
							role: "radiogroup",
							children: C.map(function(e) {
								return u.jsx(r("MWXColumnItem.react"), { children: u.jsx(r("MWXRadio.react"), {
									checked: f === e.timeInSeconds,
									disabled: h,
									label: e.title,
									name: e.title.toString(),
									onChange: function() {
										r("QPLUserFlow").addPoint(b, "duration_selected", { data: { string: { selected_duration: e.title.toString() } } }), y(e.timeInSeconds);
									},
									reduceEmphasis: f !== e.timeInSeconds,
									size: "medium",
									value: e.timeInSeconds
								}) }, String(e.timeInSeconds));
							})
						})
					})
				] })
			})
		});
	}
	f.displayName = f.name + " [from " + i.id + "]", l.default = f;
}), 226);
