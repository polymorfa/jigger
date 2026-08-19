__d("WAWebGroupCallDropdownWithTrigger.react", [
	"WAWebDropdownV2.react",
	"WAWebGroupCallParticipantSelector.react",
	"WAWebPopoverContext.react",
	"WAWebWamEnumSubSurface",
	"react"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = e, c = u.useCallback, d = u.useRef, m = u.useState, p = { callDropdownShadow: {
		boxShadow: "xvktan5",
		$$css: !0
	} }, _ = 488, f = 20;
	function g(e) {
		var t = e.chat, n = e.initialSubtext, a = e.isVideo, i = e.logger, l = e.onDropdownClose, u = e.onDropdownOpen, f = e.trigger, g = d(null), y = o("WAWebPopoverContext.react").useWAWebPopoverControllerRef(), C = d(!1), b = m(_), v = b[0], S = b[1], R = function(t) {
			var e;
			(e = y.current) == null || e.hidePopover();
		}, L = c(function(e) {
			g.current = e;
		}, []);
		return s.jsxs(s.Fragment, { children: [f(L), s.jsx(o("WAWebDropdownV2.react").DropdownV2Menu, {
			xstyle: p.callDropdownShadow,
			controllerRef: y,
			position: o("WAWebDropdownV2.react").PopoverPosition.Bottom,
			alignment: o("WAWebDropdownV2.react").PopoverAlignment.Start,
			target: g,
			maxHeight: v,
			onOpen: function() {
				S(h(g.current)), u == null || u();
			},
			onClose: function() {
				C.current || i.dismissChatThread(o("WAWebWamEnumSubSurface").SUB_SURFACE.ADD_PARTICIPANT_PICKER), C.current = !1, l == null || l();
			},
			children: s.jsx(r("WAWebGroupCallParticipantSelector.react"), {
				chat: t,
				hideActions: !0,
				initialSubtext: n,
				isCallingDisabled: !1,
				isVideo: a,
				logger: i,
				onActionTaken: function() {
					C.current = !0;
				},
				onCallStart: R
			}, t.id.toString())
		})] });
	}
	g.displayName = g.name + " [from " + i.id + "]";
	function h(e) {
		if (e == null) return _;
		var t = e.getBoundingClientRect(), n = t.bottom, r = t.top, o = Math.max(r, window.innerHeight - n) - f;
		return Math.max(120, Math.min(_, o));
	}
	l.default = g;
}), 98);
