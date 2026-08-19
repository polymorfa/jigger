__d("WAWebDeveloperToolsPopoverPill.react", [
	"WAWebDeveloperToolsDBViewerButton.react",
	"WAWebDropdownV2.react",
	"WAWebPopover.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = e.useRef, c = "developer-tools-popovers", d = {
		popover: {
			backgroundColor: "xy57btm",
			overflowY: "x1rife3k",
			borderTopColor: "xx42vgk",
			borderInlineEndColor: "xbogo7e",
			borderBottomColor: "x120ee7l",
			borderInlineStartColor: "x1vb5itz",
			borderTopStyle: "x13fuv20",
			borderInlineEndStyle: "x18b5jzi",
			borderBottomStyle: "x1q0q8m5",
			borderInlineStartStyle: "x1t7ytsu",
			borderTopWidth: "x1ktv7sr",
			borderInlineEndWidth: "x142x0oa",
			borderBottomWidth: "xv7zg05",
			borderInlineStartWidth: "x12dgle5",
			$$css: !0
		},
		popoverContainer: {
			maxHeight: "xuyqlj2",
			$$css: !0
		},
		paddingHoriz12: {
			paddingInlineStart: "x1iw51ew",
			paddingInlineEnd: "xde1mab",
			paddingLeft: null,
			paddingRight: null,
			$$css: !0
		},
		paddingAll12: {
			paddingTop: "x1xrf6ya",
			paddingInlineEnd: "xde1mab",
			paddingBottom: "xscbp6u",
			paddingInlineStart: "x1iw51ew",
			$$css: !0
		}
	};
	function m(e) {
		var t = o("react-compiler-runtime").c(8), n = e.active, a = e.children, i = e.disabled, l = e.label, c = e.xstyle, m = i === void 0 ? !1 : i, _ = u(null), f;
		t[0] !== a || t[1] !== c ? (f = s.jsx(p, {
			buttonRef: _,
			xstyle: c,
			children: a
		}), t[0] = a, t[1] = c, t[2] = f) : f = t[2];
		var g;
		return t[3] !== n || t[4] !== m || t[5] !== l || t[6] !== f ? (g = s.jsxs(r("WAWebDeveloperToolsDBViewerButton.react"), {
			fixedHeight: !0,
			light: !0,
			disabled: m,
			buttonRef: _,
			xstyle: d.paddingHoriz12,
			isActive: n,
			children: [f, l]
		}), t[3] = n, t[4] = m, t[5] = l, t[6] = f, t[7] = g) : g = t[7], g;
	}
	function p(e) {
		var t = o("react-compiler-runtime").c(7), n = e.buttonRef, r = e.children, a = e.xstyle, i;
		if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
			var l;
			i = (l = document.getElementById(c)) != null ? l : void 0, t[0] = i;
		} else i = t[0];
		var u = i, m;
		t[1] !== a ? (m = [
			d.popover,
			d.popoverContainer,
			d.paddingAll12,
			a
		], t[1] = a, t[2] = m) : m = t[2];
		var p;
		return t[3] !== n || t[4] !== r || t[5] !== m ? (p = s.jsx(o("WAWebDropdownV2.react").DropdownV2, {
			dismissable: !0,
			popoverPortal: u,
			xstyle: m,
			target: n,
			alignment: o("WAWebPopover.react").PopoverAlignment.Start,
			position: o("WAWebPopover.react").PopoverPosition.Bottom,
			buffer: 12,
			material: !1,
			children: r
		}), t[3] = n, t[4] = r, t[5] = m, t[6] = p) : p = t[6], p;
	}
	l.DEVELOPER_TOOLS_PORTAL_ID = c, l.DeveloperToolsPopoverPill = m, l.CustomWAWebDropdown = p;
}), 98);
