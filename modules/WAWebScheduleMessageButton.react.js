__d("WAWebScheduleMessageButton.react", [
	"fbt",
	"WAWebIcChatlistClockIcon.react",
	"WAWebModalManager",
	"WAWebScheduleTimePickerLoadable",
	"WAWebTabOrder",
	"WAWebTooltip.react",
	"WDSMenuBarItem.react",
	"react",
	"react-compiler-runtime",
	"stylex"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react")), d = u, m = d.useCallback, p = d.useRef, _ = { container: {
		alignSelf: "xpvyfi4",
		$$css: !0
	} }, f = 350;
	function g(t) {
		var n = o("react-compiler-runtime").c(18), a = t.atLimit, i = t.buttonSize, l = t.disabled, u = t.isGroup, d = t.onScheduleSend, m = t.xstyle, g = a === void 0 ? !1 : a, h = i === void 0 ? "medium" : i, y = l === void 0 ? !1 : l, C = u === void 0 ? !1 : u, b = m === void 0 ? null : m, v = p(null), S;
		n[0] !== C || n[1] !== d ? (S = function() {
			o("WAWebModalManager").ModalManager.open(c.jsx(o("WAWebScheduleTimePickerLoadable").WAWebScheduleTimePickerLoadable, {
				isGroup: C,
				onCancel: o("WAWebModalManager").closeModalManager,
				onSchedule: function(t) {
					o("WAWebModalManager").closeModalManager(), d(t);
				}
			}));
		}, n[0] = C, n[1] = d, n[2] = S) : S = n[2];
		var R = S, L;
		n[3] === Symbol.for("react.memo_cache_sentinel") ? (L = s._(
			/*BTDS*/
			""
		), n[3] = L) : L = n[3];
		var E = L, k;
		n[4] === Symbol.for("react.memo_cache_sentinel") ? (k = s._(
			/*BTDS*/
			""
		), n[4] = k) : k = n[4];
		var I = k, T;
		n[5] !== b ? (T = (e || (e = r("stylex"))).props(_.container, b), n[5] = b, n[6] = T) : T = n[6];
		var D = y || g, x = g ? "" : E, $;
		n[7] !== h || n[8] !== R || n[9] !== D || n[10] !== x ? ($ = c.jsx(r("WDSMenuBarItem.react"), {
			buttonSize: h,
			buttonType: "default",
			disabled: D,
			icon: o("WAWebIcChatlistClockIcon.react").IcChatlistClockIcon,
			onClick: R,
			tabOrder: o("WAWebTabOrder").TAB_ORDER.SEND_BUTTON,
			testid: "scheduled_messages_compose_button",
			title: x
		}), n[7] = h, n[8] = R, n[9] = D, n[10] = x, n[11] = $) : $ = n[11];
		var P;
		n[12] !== g ? (P = g && c.jsx(o("WAWebTooltip.react").WAWebHoverTooltip, {
			targetRef: v,
			alignment: o("WAWebTooltip.react").PopoverAlignment.Center,
			position: o("WAWebTooltip.react").PopoverPosition.Top,
			openingDelay: f,
			testid: "scheduled_messages_limit_tooltip",
			children: I
		}), n[12] = g, n[13] = P) : P = n[13];
		var N;
		return n[14] !== $ || n[15] !== P || n[16] !== T ? (N = c.jsxs("div", babelHelpers.extends({ ref: v }, T, { children: [$, P] })), n[14] = $, n[15] = P, n[16] = T, n[17] = N) : N = n[17], N;
	}
	l.default = g;
}), 226);
