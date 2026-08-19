__d("WAWebDeveloperToolsPopoverPill.react", [
	"WAWebDeveloperToolsDBViewerButton.react",
	"WAWebDropdownV2.react",
	"WAWebPopover.react",
	"react"
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
		var t = e.active, n = e.children, o = e.disabled, a = o === void 0 ? !1 : o, i = e.label, l = e.xstyle, c = u(null);
		return s.jsxs(r("WAWebDeveloperToolsDBViewerButton.react"), {
			fixedHeight: !0,
			light: !0,
			disabled: a,
			buttonRef: c,
			xstyle: d.paddingHoriz12,
			isActive: t,
			children: [s.jsx(p, {
				buttonRef: c,
				xstyle: l,
				children: n
			}), i]
		});
	}
	m.displayName = m.name + " [from " + i.id + "]";
	function p(e) {
		var t, n = e.buttonRef, r = e.children, a = e.xstyle, i = (t = document.getElementById(c)) != null ? t : void 0;
		return s.jsx(o("WAWebDropdownV2.react").DropdownV2, {
			dismissable: !0,
			popoverPortal: i,
			xstyle: [
				d.popover,
				d.popoverContainer,
				d.paddingAll12,
				a
			],
			target: n,
			alignment: o("WAWebPopover.react").PopoverAlignment.Start,
			position: o("WAWebPopover.react").PopoverPosition.Bottom,
			buffer: 12,
			material: !1,
			children: r
		});
	}
	p.displayName = p.name + " [from " + i.id + "]", l.DEVELOPER_TOOLS_PORTAL_ID = c, l.DeveloperToolsPopoverPill = m, l.CustomWAWebDropdown = p;
}), 98);
