__d("WAWebVoipCallingNuxCoachmark.react", [
	"WAWebBox.react",
	"WAWebClickable.react",
	"WAWebFbtCommon",
	"WAWebFlex.react",
	"WAWebPopoverContext.react",
	"WAWebTooltip.react",
	"WAWebUimUie.react",
	"WDSIconIcClose.react",
	"WDSText.react",
	"react",
	"useWAWebStableCallback"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = e.useEffect, c = {
		row: {
			minHeight: "xu0aao5",
			$$css: !0
		},
		tooltip: {
			paddingTop: "x1xrf6ya",
			paddingInlineEnd: "xde1mab",
			paddingBottom: "xscbp6u",
			paddingInlineStart: "x1iw51ew",
			borderStartStartRadius: "xlr9sxt",
			borderStartEndRadius: "xvvg52n",
			borderEndEndRadius: "xwd4zgb",
			borderEndStartRadius: "xq8v1ta",
			maxWidth: "xw5ewwj",
			textAlign: "x1yc453h",
			$$css: !0
		},
		button: {
			borderStartStartRadius: "xt8t1vi",
			borderStartEndRadius: "x1xc408v",
			borderEndEndRadius: "x129tdwq",
			borderEndStartRadius: "x15urzxu",
			$$css: !0
		},
		content: {
			rowGap: "x1b73lln",
			columnGap: "x46w9ns",
			$$css: !0
		},
		closeButton: {
			marginInlineStart: "x150mmf0",
			$$css: !0
		}
	}, d = 600;
	function m(e) {
		var t = e.alignment, n = e.arrowXStyle, a = e.buffer, i = e.cardXStyle, l = e.displayName, m = e.isVisible, p = e.onDismiss, _ = e.onVisibilityChange, f = e.position, g = e.subtitle, h = e.subtitleType, y = h === void 0 ? "Body3" : h, C = e.targetRef, b = e.testid, v = e.title, S = o("WAWebPopoverContext.react").useWAWebPopoverControllerRef(), R = r("useWAWebStableCallback")(function(e) {
			_ == null || _(e);
		});
		u(function() {
			if (m) {
				var e = null, t = null, n = null, r = function(a) {
					var o, i = t != null ? t : a;
					t = i;
					var l = (o = C.current) == null ? void 0 : o.getBoundingClientRect(), s = l != null && l.width > 0 && l.height > 0 ? l.top + "," + l.left + "," + l.width : null, u = s != null && s === n;
					if (u) {
						var c;
						(c = S.current) == null || c.showPopover(), R(!0);
						return;
					}
					if (a - i >= d) {
						if (s != null) {
							var m;
							(m = S.current) == null || m.showPopover(), R(!0);
						} else R(!1);
						return;
					}
					n = s, e = window.requestAnimationFrame(r);
				};
				return e = window.requestAnimationFrame(r), function() {
					e != null && window.cancelAnimationFrame(e), R(!1);
				};
			}
		}, [
			m,
			S,
			R,
			C
		]);
		var L = r("useWAWebStableCallback")(function() {
			var e;
			p(), (e = S.current) == null || e.hidePopover(), R(!1);
		});
		return m ? s.jsx(o("WAWebUimUie.react").UIE, {
			popable: !0,
			escapable: !0,
			dismissOnWindowResize: !0,
			displayName: l,
			requestDismiss: L,
			children: s.jsx(r("WAWebBox.react"), {
				testid: b,
				children: s.jsx(o("WAWebPopoverContext.react").WAWebPopoverController, {
					targetRef: C,
					controllerRef: S,
					popover: s.jsx(o("WAWebTooltip.react").WAWebControllableTooltip, {
						target: "context",
						alignment: t,
						position: f,
						buffer: a,
						enableEnterTransition: !0,
						enableExitTransition: !0,
						tooltipXStyle: [c.tooltip, i],
						arrowXStyle: n,
						includeArrow: !0,
						element: s.jsxs(o("WAWebFlex.react").FlexRow, {
							xstyle: c.row,
							align: "center",
							justify: "all",
							children: [s.jsxs(o("WAWebFlex.react").FlexColumn, {
								xstyle: c.content,
								children: [v != null && s.jsx(r("WDSText.react"), {
									type: "Body2Emphasized",
									colorName: "contentInverse",
									children: v
								}), s.jsx(r("WDSText.react"), {
									type: y,
									colorName: "contentInverse",
									children: g
								})]
							}), s.jsx(o("WAWebClickable.react").Clickable, {
								as: "button",
								onClick: L,
								dataTestId: b + "-close",
								xstyle: [c.button, c.closeButton],
								ariaLabel: r("WAWebFbtCommon")("Close"),
								children: s.jsx(r("WDSIconIcClose.react"), {
									colorName: "contentInverse",
									width: 20,
									height: 20
								})
							})]
						})
					})
				})
			})
		}) : null;
	}
	m.displayName = m.name + " [from " + i.id + "]", l.default = m;
}), 98);
