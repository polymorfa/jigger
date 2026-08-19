__d("WAWebCommunityRemoveSubgroup", [
	"fbt",
	"WAWebChatCollection",
	"WAWebCheckBox.react",
	"WAWebConfirmPopup.react",
	"WAWebEmojiText.react",
	"WAWebFlex.react",
	"WAWebModalManager",
	"WAWebText.react",
	"WAWebUnlinkSubgroupsAction",
	"WDSMargins.stylex",
	"WDSPaddings.stylex",
	"asyncToGeneratorRuntime",
	"react",
	"useWAWebToggle"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = { checkboxContainer: {
		fontSize: "x1f6kntn",
		lineHeight: "x16h55sf",
		borderTopWidth: "x178xt8z",
		borderTopStyle: "x13fuv20",
		borderTopColor: "xx42vgk",
		$$css: !0
	} };
	function d(e) {
		var t = e.handleRemove, n = e.removeDisclaimer, a = e.removeParticipantOption, i = a === void 0 ? !1 : a, l = r("useWAWebToggle")(!1), d = l[0], m = l[1], p, _ = s._(
			/*BTDS*/
			""
		);
		if (i) {
			var f = u.jsx("div", {
				"data-testid": "checkbox-remove-orphan-members",
				className: "x1rg5ohu x1okw0bk x1uuroth x19991ni x1d8287x xwji4o3 x1sa5p1d",
				children: u.jsx(o("WAWebCheckBox.react").CheckBox, {
					onChange: m,
					checked: d,
					id: "checkbox-remove-orphan-members"
				})
			}), g = s._(
				/*BTDS*/
				""
			);
			p = u.jsxs(u.Fragment, { children: [u.jsx(o("WAWebText.react").WAWebTextMuted, {
				xstyle: o("WDSPaddings.stylex").wdsPaddings.paddingBottom20,
				children: n
			}), u.jsxs(o("WAWebFlex.react").FlexRow, {
				xstyle: [
					c.checkboxContainer,
					o("WDSPaddings.stylex").wdsPaddings.paddingTop20,
					o("WDSMargins.stylex").wdsMargins.marginEnd0
				],
				children: [f, g]
			})] });
		}
		return u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			onOK: function() {
				return t(d);
			},
			okButtonType: "solid-warning",
			okText: s._(
				/*BTDS*/
				""
			),
			onCancel: o("WAWebModalManager").closeModalManager,
			title: _,
			children: i ? p : n
		});
	}
	d.displayName = d.name + " [from " + i.id + "]";
	function m(e) {
		var t, a = e.iAmCommunityAdmin, i = a === void 0 ? !0 : a, l = e.parentId, c = e.removedSubgroupTitle, m = e.removedSubgroupWid, p = e.setLoading, _ = (t = o("WAWebChatCollection").ChatCollection.get(l)) == null ? void 0 : t.formattedTitle, f, g = (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
				e === void 0 && (e = !1), o("WAWebModalManager").ModalManager.close(), p(!0), yield r("WAWebUnlinkSubgroupsAction")(l, [m], e), p(!1);
			});
			return function(n) {
				return e.apply(this, arguments);
			};
		})();
		if (i) {
			f = s._(
				/*BTDS*/
				"",
				[s._param("group_title", u.jsx(o("WAWebEmojiText.react").EmojiText, { text: c }))]
			), o("WAWebModalManager").ModalManager.open(u.jsx(d, {
				removeDisclaimer: f,
				handleRemove: g,
				removeParticipantOption: !0
			}));
			return;
		}
		f = _ != null ? s._(
			/*BTDS*/
			"",
			[s._param("group_title", u.jsx(o("WAWebEmojiText.react").EmojiText, { text: c })), s._param("community_title", u.jsx(o("WAWebEmojiText.react").EmojiText, { text: _ }))]
		) : s._(
			/*BTDS*/
			"",
			[s._param("group_title", u.jsx(o("WAWebEmojiText.react").EmojiText, { text: c }))]
		), o("WAWebModalManager").ModalManager.open(u.jsx(d, {
			removeDisclaimer: f,
			handleRemove: g
		}));
	}
	l.handleRemoveSubgroup = m;
}), 226);
