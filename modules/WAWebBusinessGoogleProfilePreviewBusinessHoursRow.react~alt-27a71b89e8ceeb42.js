__d("WAWebBusinessGoogleProfilePreviewBusinessHoursRow.react", [
	"WAWebFlex.react",
	"WAWebGoogleBusinessHours.react",
	"WDSIconIcSchedule.react",
	"react"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = {
		hoursControl: {
			minHeight: "x2lwn1j",
			paddingTop: "xexx8yu",
			paddingBottom: "x18d9i69",
			paddingInlineEnd: "xyri2b",
			paddingInlineStart: "x1c1uobl",
			$$css: !0
		},
		hoursExpandIconColumn: {
			flexShrink: "x2lah0s",
			height: "x1nqnulx",
			width: "x1xvr5cs",
			$$css: !0
		},
		hoursIcon: {
			color: "xhslqc4",
			$$css: !0
		},
		hoursRow: {
			alignItems: "x1cy8zhl",
			boxSizing: "x9f619",
			columnGap: "xs2akgl",
			paddingTop: "x1xrf6ya",
			paddingBottom: "xscbp6u",
			paddingInlineStart: "xdx6fka",
			paddingInlineEnd: "xvtqlqk",
			paddingLeft: null,
			paddingRight: null,
			width: "xh8yej3",
			$$css: !0
		}
	};
	function c(e) {
		var t = e.weekdayHours;
		return t == null || t.length === 0 ? null : s.jsxs(o("WAWebFlex.react").FlexRow, {
			testid: "biz-profile-google-business-hours-row",
			xstyle: u.hoursRow,
			children: [s.jsx("div", {
				className: "x6s0dn4 x78zum5 x2lah0s x1nqnulx xl56j7k x1xvr5cs",
				"data-testid": "biz-profile-google-business-hours-icon",
				children: s.jsx(r("WDSIconIcSchedule.react"), {
					height: 24,
					iconXstyle: u.hoursIcon,
					width: 24
				})
			}), s.jsx("div", {
				className: "x1iyjqo2 xeuugli",
				children: s.jsx(r("WAWebGoogleBusinessHours.react"), {
					iconColumnXstyle: u.hoursExpandIconColumn,
					weekdayHours: t,
					xstyle: u.hoursControl
				})
			})]
		});
	}
	c.displayName = c.name + " [from " + i.id + "]", l.default = c;
}), 98);
