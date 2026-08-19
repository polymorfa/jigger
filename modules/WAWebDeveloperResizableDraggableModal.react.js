__d("WAWebDeveloperResizableDraggableModal.react", [
	"WAStringCapitalize",
	"WAWebFbtCommon",
	"WAWebFlexBox.react",
	"WAWebKeyboardHotKeys.react",
	"WAWebText.react",
	"WAWebUnstyledButton.react",
	"WAWebXIcon.react",
	"WDSPaddings.stylex",
	"react",
	"stylex",
	"useWAWebDeveloperDraggableWindow.react"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = s || (s = o("react")), c = {
		container: {
			backgroundColor: "x1280gxy",
			borderStartStartRadius: "xbrszos",
			borderStartEndRadius: "xea3l6g",
			borderEndEndRadius: "x18isctg",
			borderEndStartRadius: "x2q3nzr",
			color: "x14ug900",
			boxShadow: "xju5ss5",
			position: "xixxii4",
			width: "xa8ism5",
			height: "xqt63rz",
			overflowX: "x6ikm8r",
			overflowY: "x10wlt62",
			zIndex: "x16uhe5s",
			$$css: !0
		},
		resize: {
			resize: "x8za3yd",
			minWidth: "x13o0s5z",
			minHeight: "x1bifzbx",
			$$css: !0
		},
		secondaryColor: {
			color: "xhslqc4",
			$$css: !0
		}
	};
	function d(t) {
		var n = t.children, a = t.modalId, i = t.onClose, l = t.title, s = r("useWAWebDeveloperDraggableWindow.react")(a), d = s.dragEnd, m = s.dragging, p = s.dragStart, _ = s.dragStyles, f = s.resizeDetectorStyles, g = s.scroll;
		return u.jsxs("div", {
			className: (e || (e = r("stylex")))(c.container, c.resize, o("WDSPaddings.stylex").wdsPaddings.padding24),
			onWheel: g,
			style: babelHelpers.extends({}, _),
			children: [
				u.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
					onMouseDown: p,
					onMouseMove: m,
					onMouseUp: d,
					onScroll: g,
					children: u.jsx("div", {
						id: a,
						className: "x1qx5ct2 xv5twrn xh8yej3 x13vifvy x1o0tod x10l6tqk x17gydlx",
						children: u.jsxs(o("WAWebFlexBox.react").FlexRow, {
							align: "center",
							justify: "all",
							children: [i && u.jsx(r("WAWebUnstyledButton.react"), {
								onClick: i,
								testid: "close-button",
								title: r("WAWebFbtCommon")("Close"),
								children: u.jsx(o("WAWebXIcon.react").XIcon, {
									width: 20,
									iconXstyle: c.secondaryColor
								})
							}), u.jsx(o("WAWebFlexBox.react").FlexRow, {
								align: "center",
								grow: 1,
								justify: "center",
								children: u.jsx(o("WAWebText.react").WAWebTextTitle, {
									color: "secondary",
									children: o("WAStringCapitalize").capitalize(l)
								})
							})]
						})
					})
				}),
				u.jsx("div", {
					className: "x5yr21d x1rife3k x889kno x2vl965 x1a8lsjc xe2zdcy",
					children: n
				}),
				u.jsx("div", {
					className: "x10wjd1d x1pju0fl xpa5qit x1ey2m1c x10l6tqk",
					style: babelHelpers.extends({}, f)
				})
			]
		});
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);
