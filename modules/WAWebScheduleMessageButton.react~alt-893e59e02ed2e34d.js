__d("WAWebScheduleMessageButton.react", [
	"fbt",
	"WAWebIcChatlistClockIcon.react",
	"WAWebModalManager",
	"WAWebScheduleTimePickerLoadable",
	"WAWebTabOrder",
	"WAWebTooltip.react",
	"WDSMenuBarItem.react",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react")), d = u, m = d.useCallback, p = d.useRef, _ = { container: {
		alignSelf: "xpvyfi4",
		$$css: !0
	} }, f = 350;
	function g(t) {
		var n = t.atLimit, a = n === void 0 ? !1 : n, i = t.buttonSize, l = i === void 0 ? "medium" : i, u = t.disabled, d = u === void 0 ? !1 : u, g = t.isGroup, h = g === void 0 ? !1 : g, y = t.onScheduleSend, C = t.xstyle, b = C === void 0 ? null : C, v = p(null), S = m(function() {
			o("WAWebModalManager").ModalManager.open(c.jsx(o("WAWebScheduleTimePickerLoadable").WAWebScheduleTimePickerLoadable, {
				isGroup: h,
				onCancel: o("WAWebModalManager").closeModalManager,
				onSchedule: function(t) {
					o("WAWebModalManager").closeModalManager(), y(t);
				}
			}));
		}, [h, y]), R = s._(
			/*BTDS*/
			""
		), L = s._(
			/*BTDS*/
			""
		);
		return c.jsxs("div", babelHelpers.extends({ ref: v }, (e || (e = r("stylex"))).props(_.container, b), { children: [c.jsx(r("WDSMenuBarItem.react"), {
			buttonSize: l,
			buttonType: "default",
			disabled: d || a,
			icon: o("WAWebIcChatlistClockIcon.react").IcChatlistClockIcon,
			onClick: S,
			tabOrder: o("WAWebTabOrder").TAB_ORDER.SEND_BUTTON,
			testid: "scheduled_messages_compose_button",
			title: a ? "" : R
		}), a && c.jsx(o("WAWebTooltip.react").WAWebHoverTooltip, {
			targetRef: v,
			alignment: o("WAWebTooltip.react").PopoverAlignment.Center,
			position: o("WAWebTooltip.react").PopoverPosition.Top,
			openingDelay: f,
			testid: "scheduled_messages_limit_tooltip",
			children: L
		})] }));
	}
	g.displayName = g.name + " [from " + i.id + "]", l.default = g;
}), 226);
