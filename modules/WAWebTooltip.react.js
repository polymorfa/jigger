__d("WAWebTooltip.react", [
	"WAWebPopover.react",
	"react",
	"react-compiler-runtime",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e = [
		"arrowXStyle",
		"element",
		"onClick",
		"tooltipXStyle"
	], s, u, c = u || (u = o("react")), d = {
		tooltip: {
			display: "x1rg5ohu",
			maxWidth: "x1dc814f",
			fontSize: "x1nxh6w3",
			color: "xowaa7l",
			textAlign: "x2b8uid",
			textOverflow: "xlyipyv",
			textShadow: "x7opvkv",
			backgroundColor: "xpip370",
			borderStartStartRadius: "x12l2aii",
			borderStartEndRadius: "x1mbk4o",
			borderEndEndRadius: "x14vvt0a",
			borderEndStartRadius: "x1w3ol1v",
			$$css: !0
		},
		arrow: {
			backgroundColor: "xpip370",
			$$css: !0
		},
		paddingHoriz16: {
			paddingInlineStart: "xdx6fka",
			paddingInlineEnd: "xvtqlqk",
			$$css: !0
		},
		paddingVert8: {
			paddingTop: "x16ovd2e",
			paddingBottom: "x12xbjc7",
			$$css: !0
		}
	};
	function m(e) {
		var t = o("react-compiler-runtime").c(9), n = e.children, a = e.onClick, i = e.ref, l = e.tooltipXStyle, u;
		if (a != null) {
			var m;
			t[0] !== a ? (m = {
				onClick: a,
				role: "button",
				tabIndex: 0
			}, t[0] = a, t[1] = m) : m = t[1], u = m;
		}
		var p;
		t[2] !== l ? (p = (s || (s = r("stylex")))([
			d.tooltip,
			d.paddingHoriz16,
			d.paddingVert8,
			l
		]), t[2] = l, t[3] = p) : p = t[3];
		var _;
		return t[4] !== n || t[5] !== u || t[6] !== i || t[7] !== p ? (_ = c.jsx("div", babelHelpers.extends({
			ref: i,
			role: "tooltip",
			"data-testid": "tooltip",
			className: p
		}, u, { children: n })), t[4] = n, t[5] = u, t[6] = i, t[7] = p, t[8] = _) : _ = t[8], _;
	}
	function p(t) {
		var n = o("react-compiler-runtime").c(22), r, a, i, l, s;
		n[0] !== t ? (r = t.arrowXStyle, a = t.element, i = t.onClick, s = t.tooltipXStyle, l = babelHelpers.objectWithoutPropertiesLoose(t, e), n[0] = t, n[1] = r, n[2] = a, n[3] = i, n[4] = l, n[5] = s) : (r = n[1], a = n[2], i = n[3], l = n[4], s = n[5]);
		var u = !!i, p;
		n[6] !== a || n[7] !== i || n[8] !== s ? (p = c.jsx(m, {
			onClick: i,
			tooltipXStyle: s,
			children: a
		}), n[6] = a, n[7] = i, n[8] = s, n[9] = p) : p = n[9];
		var _;
		n[10] !== r ? (_ = [d.arrow, r], n[10] = r, n[11] = _) : _ = n[11];
		var f;
		n[12] !== l || n[13] !== u || n[14] !== p || n[15] !== _ ? (f = babelHelpers.extends({}, l, {
			dismissable: u,
			element: p,
			arrowXStyle: _
		}), n[12] = l, n[13] = u, n[14] = p, n[15] = _, n[16] = f) : f = n[16];
		var g = f, h = o("WAWebPopover.react").usePopoverElement(g), y = h.hidePopover, C = h.popover, b = h.popoverIsVisible, v = h.showPopover, S;
		return n[17] !== y || n[18] !== C || n[19] !== b || n[20] !== v ? (S = {
			tooltip: C,
			showTooltip: v,
			hideTooltip: y,
			tooltipIsVisible: b
		}, n[17] = y, n[18] = C, n[19] = b, n[20] = v, n[21] = S) : S = n[21], S;
	}
	function _(e) {
		var t = o("react-compiler-runtime").c(13), n = e.alignment, r = e.buffer, a = e.children, i = e.enableEnterTransition, l = e.name, s = e.openingDelay, u = e.position, c = e.showOnFocus, d = e.targetRef, m = e.testid, _ = r === void 0 ? 8 : r, f = i === void 0 ? !0 : i, g = c === void 0 ? !0 : c, h;
		t[0] !== g ? (h = g ? ["hover", "focus"] : "hover", t[0] = g, t[1] = h) : h = t[1];
		var y;
		t[2] !== n || t[3] !== _ || t[4] !== a || t[5] !== f || t[6] !== l || t[7] !== s || t[8] !== u || t[9] !== h || t[10] !== d || t[11] !== m ? (y = {
			target: d,
			position: u,
			alignment: n,
			element: a,
			buffer: _,
			name: l,
			enableEnterTransition: f,
			enableExitTransition: !1,
			initHandling: h,
			openingDelay: s,
			testid: m
		}, t[2] = n, t[3] = _, t[4] = a, t[5] = f, t[6] = l, t[7] = s, t[8] = u, t[9] = h, t[10] = d, t[11] = m, t[12] = y) : y = t[12];
		var C = p(y), b = C.tooltip;
		return b;
	}
	function f(e) {
		var t = p(e), n = t.tooltip;
		return n;
	}
	l.PopoverAlignment = o("WAWebPopover.react").PopoverAlignment, l.PopoverPosition = o("WAWebPopover.react").PopoverPosition, l.useTooltip = p, l.WAWebHoverTooltip = _, l.WAWebControllableTooltip = f;
}), 98);
