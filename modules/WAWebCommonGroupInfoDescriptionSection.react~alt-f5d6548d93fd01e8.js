__d("WAWebCommonGroupInfoDescriptionSection.react", [
	"WAWebChatInfoDescriptionSection.react",
	"WAWebCmd",
	"WAWebSetDescAction",
	"nullthrows",
	"react",
	"useWAWebEventTargetValue",
	"useWAWebListener",
	"useWAWebModelValues"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = e.useState;
	function c(e) {
		var t, n = o("useWAWebModelValues").useModelValues(e.chat, ["groupMetadata"]), a = o("useWAWebModelValues").useModelValues(r("nullthrows")(n.groupMetadata), [
			"displayedDesc",
			"groupType",
			"restrict",
			"support"
		]), i = r("useWAWebEventTargetValue")(a, ["change:desc"], function() {
			return a.displayedDesc;
		}), l = u((t = e.focusOnMount) != null ? t : !1), c = l[0], d = l[1];
		o("useWAWebListener").useListener(o("WAWebCmd").Cmd, "edit_group_description", function() {
			d(!0);
		});
		var m = function() {
			d(!1);
		};
		return s.jsx(r("WAWebChatInfoDescriptionSection.react"), {
			description: i,
			chat: e.chat,
			showFullDescription: e.showFullDescription,
			editRestrictionText: e.editRestrictionText,
			testid: e.testid,
			containerTestId: e.containerTestId,
			emptyValuePlaceholder: e.emptyValuePlaceholder,
			canSetDescription: a.canSetDescription(),
			setDescriptionAction: o("WAWebSetDescAction").setDesc,
			bulletPointsEnabled: !0,
			expandedFormattingEnabled: !1,
			onSave: m,
			onBlur: m,
			onCancel: m,
			setIsEditing: c,
			focusOnMount: e.focusOnMount === !0 || c
		});
	}
	c.displayName = c.name + " [from " + i.id + "]", l.default = c;
}), 98);
