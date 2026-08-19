__d("WAWebHDPhotoMediaEditorDropdown.react", [
	"fbt",
	"WAWebAttachMediaModel",
	"WAWebDropdownItem.react",
	"WAWebL10nFilesize",
	"WAWebMediaGatingUtils",
	"WAWebText.react",
	"WAWebText_DONOTUSE.react",
	"WAWebWebHdMediaAwarenessInteractionWamEvent",
	"WDSPaddings.stylex",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e.useCallback, d = { paddingBottom7: {
		paddingBottom: "x1ykpatu",
		$$css: !0
	} }, m = {
		dropdownInfo: {
			borderTopWidth: "x178xt8z",
			borderTopStyle: "x13fuv20",
			borderTopColor: "xx42vgk",
			$$css: !0
		},
		hintText: {
			textWrap: "xk4td0m",
			maxWidth: "x1ncir08",
			$$css: !0
		}
	}, p = {
		dropdownItemStandardQuality: function() {
			return s._(
				/*BTDS*/
				""
			);
		},
		dropdownItemHDQuality: function() {
			return s._(
				/*BTDS*/
				""
			);
		},
		dropdownInfo: function() {
			return o("WAWebMediaGatingUtils").isStickyHQPhotoSettingEnabled() ? s._(
				/*BTDS*/
				""
			) : s._(
				/*BTDS*/
				""
			);
		}
	};
	function _(e) {
		var t = e.height, n = e.mediaQuality, r = e.size, a = e.title, i = e.width;
		return o("WAWebMediaGatingUtils").isStickyHQPhotoSettingEnabled() ? u.jsxs("div", { children: [u.jsx(o("WAWebText.react").WAWebTextTitle, { children: a }), n != null && u.jsxs(o("WAWebText_DONOTUSE.react").TextDiv, {
			theme: "plain",
			color: "secondary",
			xstyle: m.hintText,
			children: [n === o("WAWebAttachMediaModel").MediaQuality.Standard && s._(
				/*BTDS*/
				""
			), n === o("WAWebAttachMediaModel").MediaQuality.HD && s._(
				/*BTDS*/
				""
			)]
		})] }) : u.jsxs("div", { children: [u.jsx(o("WAWebText.react").WAWebTextTitle, { children: a }), r != null && i != null && t != null && u.jsx(o("WAWebText_DONOTUSE.react").TextDiv, {
			theme: "plain",
			color: "secondary",
			children: s._(
				/*BTDS*/
				"",
				[
					s._param("filesize", o("WAWebL10nFilesize").getL10nFilesize(r)),
					s._param("width", i),
					s._param("height", t)
				]
			)
		})] });
	}
	_.displayName = _.name + " [from " + i.id + "]";
	function f(e) {
		new (o("WAWebWebHdMediaAwarenessInteractionWamEvent")).WebHdMediaAwarenessInteractionWamEvent({ hdMediaSelected: e }).commit();
	}
	function g(e) {
		var t, n, r = e.onChangeQuality, a = e.selectedQuality, i = c(function() {
			a !== o("WAWebAttachMediaModel").MediaQuality.Standard && (r(o("WAWebAttachMediaModel").MediaQuality.Standard), f(!1));
		}, [r, a]), l = c(function() {
			a !== o("WAWebAttachMediaModel").MediaQuality.HD && (r(o("WAWebAttachMediaModel").MediaQuality.HD), f(!0));
		}, [r, a]), s = e.metadataByQuality.get((t = o("WAWebAttachMediaModel")).MediaQuality.HD), g = e.metadataByQuality.get(t.MediaQuality.Standard);
		return u.jsxs(u.Fragment, { children: [
			u.jsx(o("WAWebDropdownItem.react").DropdownItem, {
				addSpacing: !0,
				fixedHeight: !1,
				xstyle: [(n = o("WDSPaddings.stylex")).wdsPaddings.paddingTop16, n.wdsPaddings.paddingBottom16],
				selected: a === t.MediaQuality.Standard,
				testid: "hd-photo-dropdown-item-standard-quality",
				action: i,
				children: u.jsx(_, babelHelpers.extends({}, g, {
					mediaQuality: t.MediaQuality.Standard,
					title: p.dropdownItemStandardQuality()
				}))
			}),
			u.jsx(o("WAWebDropdownItem.react").DropdownItem, {
				addSpacing: !0,
				fixedHeight: !1,
				xstyle: [n.wdsPaddings.paddingTop16, n.wdsPaddings.paddingBottom16],
				selected: a === t.MediaQuality.HD,
				testid: "hd-photo-dropdown-item-hd-quality",
				action: l,
				children: u.jsx(_, babelHelpers.extends({}, s, {
					mediaQuality: t.MediaQuality.HD,
					title: p.dropdownItemHDQuality()
				}))
			}),
			u.jsx(o("WAWebText.react").WAWebTextMuted, {
				xstyle: [
					m.dropdownInfo,
					n.wdsPaddings.paddingTop16,
					n.wdsPaddings.paddingStart16,
					n.wdsPaddings.paddingEnd16,
					d.paddingBottom7
				],
				children: p.dropdownInfo()
			})
		] });
	}
	g.displayName = g.name + " [from " + i.id + "]", l.default = g;
}), 226);
