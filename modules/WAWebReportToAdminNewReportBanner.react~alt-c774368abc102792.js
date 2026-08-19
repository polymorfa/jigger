__d("WAWebReportToAdminNewReportBanner.react", [
	"fbt",
	"WATimeUtils",
	"WAWebConversationBanner.react",
	"WAWebDrawerManager",
	"WAWebFlex.react",
	"WAWebFlexItem.react",
	"WAWebKeyboardTabUtils",
	"WAWebMessageReportRefreshedIcon.react",
	"WAWebRevokeMsgConstants",
	"WAWebSendForAdminReviewUtils",
	"WAWebSentForAdminReviewFlow.react",
	"WAWebStateUtils",
	"WAWebText.react",
	"WAWebText_DONOTUSE.react",
	"WAWebUimUie.react",
	"WDSPaddings.stylex",
	"react",
	"useWAWebModelValues",
	"useWAWebUIM"
], (function(t, n, r, o, a, i, l, s) {
	var e = ["ref"], u, c = u || (u = o("react")), d = {
		marginTop6: {
			marginTop: "x1k70j0n",
			$$css: !0
		},
		marginBottom6: {
			marginBottom: "xzueoph",
			$$css: !0
		}
	}, m = {
		banner: {
			backgroundColor: "x1280gxy",
			$$css: !0
		},
		iconRefreshed: {
			color: "xhslqc4",
			$$css: !0
		}
	};
	function p(t) {
		var n = t.ref, a = babelHelpers.objectWithoutPropertiesLoose(t, e), i = a.chat, l = a.onClose, u = r("useWAWebUIM")(), p = function() {
			o("WAWebDrawerManager").DrawerManager.openDrawerRight(c.jsx(r("WAWebSentForAdminReviewFlow.react"), {
				chat: o("WAWebStateUtils").unproxy(i),
				ref: n,
				onClose: o("WAWebDrawerManager").closeDrawerRight
			}, "rta-" + i.id.toString()), {
				transition: "slide-left",
				uim: u,
				focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE
			}), l();
		};
		return c.jsx(o("WAWebUimUie.react").UIE, {
			displayName: "ReportToAdminNewReportBanner",
			escapable: !0,
			children: c.jsx(r("WAWebConversationBanner.react"), {
				ref: n,
				xstyle: m.banner,
				onClick: p,
				onClose: l,
				children: c.jsxs(o("WAWebFlex.react").FlexRow, {
					xstyle: d.marginTop6,
					align: "center",
					children: [c.jsx(r("WAWebFlexItem.react"), {
						xstyle: o("WDSPaddings.stylex").wdsPaddings.paddingEnd20,
						children: c.jsx(o("WAWebMessageReportRefreshedIcon.react").MessageReportRefreshedIcon, { iconXstyle: m.iconRefreshed })
					}), c.jsx(r("WAWebFlexItem.react"), {
						xstyle: d.marginBottom6,
						children: c.jsx(o("WAWebText.react").WAWebTextMuted, {
							as: "span",
							children: s._(
								/*BTDS*/
								"",
								[s._implicitParam("=m0", c.jsx(o("WAWebText_DONOTUSE.react").TextSpan, {
									color: "accent",
									weight: "semibold",
									children: s._(
										/*BTDS*/
										""
									)
								}))]
							)
						})
					})]
				})
			})
		});
	}
	p.displayName = p.name + " [from " + i.id + "]";
	function _(e) {
		var t = o("useWAWebModelValues").useModelValues(e, ["groupMetadata"]), n = o("useWAWebModelValues").useOptionalModelValues(t.groupMetadata, ["lastReportToAdminTimestamp"]), r = n == null ? void 0 : n.lastReportToAdminTimestamp;
		if (r == null) return !1;
		var a = o("WAWebRevokeMsgConstants").REVOKE_WINDOW + o("WAWebRevokeMsgConstants").REVOKE_WINDOW_RECEIVER_MARGIN, i = o("WATimeUtils").unixTime() - r <= a;
		return i;
	}
	function f(e) {
		var t = o("useWAWebModelValues").useOptionalModelValues(e.groupMetadata, ["reportToAdminMode"]);
		return (t == null ? void 0 : t.reportToAdminMode) === !0;
	}
	function g(e) {
		var t = o("useWAWebModelValues").useModelValues(e, ["id", "groupMetadata"]), n = _(t), r = f(t) && n;
		return [r, function() {
			o("WAWebSendForAdminReviewUtils").clearLastReportTimestamp(t);
		}];
	}
	l.ReportToAdminNewReportBanner = p, l.useReportToAdminNewReportBanner = g;
}), 226);
