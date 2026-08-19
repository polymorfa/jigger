__d("WAWebBizBroadcastExistingAudienceModalAudienceItem.react", [
	"WAWebBizBroadcastsCreationStrings",
	"WAWebBroadcastConsts",
	"WAWebDefaultProfilePicture.react",
	"WAWebFlex.react",
	"WAWebKeyboardListHotKeys.react",
	"WDSBaseCheckbox.react",
	"WDSText.react",
	"react"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = { listItemRow: {
		rowGap: "x8a3fw1",
		columnGap: "x1aj3ljl",
		$$css: !0
	} };
	function c(e) {
		var t = e.audience, n = e.isSelected, a = e.onToggle, i = function(t) {
			(t.key === "Enter" || t.key === " ") && (t.preventDefault(), t.stopPropagation(), a());
		};
		return s.jsx("div", {
			className: o("WAWebKeyboardListHotKeys.react").LIST_FOCUSABLE_ITEM_CLASS_NAME + " xyi3aci xwf5gio x1p453bz x1suzm8a x1ypdohk x16ovd2e x1nzty39 x12xbjc7 x12w63v0 x1vsz0ew x1n67ipk",
			onClick: a,
			onKeyDown: i,
			role: "option",
			"aria-selected": n,
			tabIndex: -1,
			children: s.jsxs(o("WAWebFlex.react").FlexRow, {
				align: "center",
				xstyle: u.listItemRow,
				children: [
					s.jsx("div", {
						className: "x2lah0s",
						children: s.jsx(r("WDSBaseCheckbox.react"), {
							value: n,
							"aria-label": t.name,
							tabIndex: -1,
							testid: "audience-checkbox"
						})
					}),
					s.jsx(o("WAWebFlex.react").FlexItem, {
						shrink: 0,
						children: s.jsx(r("WAWebDefaultProfilePicture.react"), {
							type: "business-broadcast",
							size: o("WAWebBroadcastConsts").DEFAULT_PROFILE_PICTURE_SIZE
						})
					}),
					s.jsxs(o("WAWebFlex.react").FlexColumn, { children: [s.jsx(r("WDSText.react"), {
						type: "Body2",
						colorName: "contentDefault",
						children: t.name
					}), s.jsx(r("WDSText.react"), {
						type: "Body3",
						colorName: "contentDeemphasized",
						children: o("WAWebBizBroadcastsCreationStrings").getExistingAudienceRecipientsLabel(t.recipientCount)
					})] })
				]
			})
		});
	}
	c.displayName = c.name + " [from " + i.id + "]", l.default = c;
}), 98);
