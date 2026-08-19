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
	"react",
	"react-compiler-runtime"
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
		var t = o("react-compiler-runtime").c(6), n = e.height, r = e.mediaQuality, a = e.size, i = e.title, l = e.width, c;
		return t[0] !== n || t[1] !== r || t[2] !== a || t[3] !== i || t[4] !== l ? (c = o("WAWebMediaGatingUtils").isStickyHQPhotoSettingEnabled() ? u.jsxs("div", { children: [u.jsx(o("WAWebText.react").WAWebTextTitle, { children: i }), r != null && u.jsxs(o("WAWebText_DONOTUSE.react").TextDiv, {
			theme: "plain",
			color: "secondary",
			xstyle: m.hintText,
			children: [r === o("WAWebAttachMediaModel").MediaQuality.Standard && s._(
				/*BTDS*/
				""
			), r === o("WAWebAttachMediaModel").MediaQuality.HD && s._(
				/*BTDS*/
				""
			)]
		})] }) : u.jsxs("div", { children: [u.jsx(o("WAWebText.react").WAWebTextTitle, { children: i }), a != null && l != null && n != null && u.jsx(o("WAWebText_DONOTUSE.react").TextDiv, {
			theme: "plain",
			color: "secondary",
			children: s._(
				/*BTDS*/
				"",
				[
					s._param("filesize", o("WAWebL10nFilesize").getL10nFilesize(a)),
					s._param("width", l),
					s._param("height", n)
				]
			)
		})] }), t[0] = n, t[1] = r, t[2] = a, t[3] = i, t[4] = l, t[5] = c) : c = t[5], c;
	}
	function f(e) {
		new (o("WAWebWebHdMediaAwarenessInteractionWamEvent")).WebHdMediaAwarenessInteractionWamEvent({ hdMediaSelected: e }).commit();
	}
	function g(e) {
		var t = o("react-compiler-runtime").c(30), n = e.onChangeQuality, r = e.selectedQuality, a;
		t[0] !== n || t[1] !== r ? (a = function() {
			r !== o("WAWebAttachMediaModel").MediaQuality.Standard && (n(o("WAWebAttachMediaModel").MediaQuality.Standard), f(!1));
		}, t[0] = n, t[1] = r, t[2] = a) : a = t[2];
		var i = a, l;
		t[3] !== n || t[4] !== r ? (l = function() {
			r !== o("WAWebAttachMediaModel").MediaQuality.HD && (n(o("WAWebAttachMediaModel").MediaQuality.HD), f(!0));
		}, t[3] = n, t[4] = r, t[5] = l) : l = t[5];
		var s = l, c;
		t[6] !== e.metadataByQuality ? (c = e.metadataByQuality.get(o("WAWebAttachMediaModel").MediaQuality.HD), t[6] = e.metadataByQuality, t[7] = c) : c = t[7];
		var g = c, h;
		t[8] !== e.metadataByQuality ? (h = e.metadataByQuality.get(o("WAWebAttachMediaModel").MediaQuality.Standard), t[8] = e.metadataByQuality, t[9] = h) : h = t[9];
		var y = h, C;
		t[10] === Symbol.for("react.memo_cache_sentinel") ? (C = [o("WDSPaddings.stylex").wdsPaddings.paddingTop16, o("WDSPaddings.stylex").wdsPaddings.paddingBottom16], t[10] = C) : C = t[10];
		var b = r === o("WAWebAttachMediaModel").MediaQuality.Standard, v;
		t[11] === Symbol.for("react.memo_cache_sentinel") ? (v = p.dropdownItemStandardQuality(), t[11] = v) : v = t[11];
		var S;
		t[12] !== y ? (S = u.jsx(_, babelHelpers.extends({}, y, {
			mediaQuality: o("WAWebAttachMediaModel").MediaQuality.Standard,
			title: v
		})), t[12] = y, t[13] = S) : S = t[13];
		var R;
		t[14] !== i || t[15] !== b || t[16] !== S ? (R = u.jsx(o("WAWebDropdownItem.react").DropdownItem, {
			addSpacing: !0,
			fixedHeight: !1,
			xstyle: C,
			selected: b,
			testid: "hd-photo-dropdown-item-standard-quality",
			action: i,
			children: S
		}), t[14] = i, t[15] = b, t[16] = S, t[17] = R) : R = t[17];
		var L;
		t[18] === Symbol.for("react.memo_cache_sentinel") ? (L = [o("WDSPaddings.stylex").wdsPaddings.paddingTop16, o("WDSPaddings.stylex").wdsPaddings.paddingBottom16], t[18] = L) : L = t[18];
		var E = r === o("WAWebAttachMediaModel").MediaQuality.HD, k;
		t[19] === Symbol.for("react.memo_cache_sentinel") ? (k = p.dropdownItemHDQuality(), t[19] = k) : k = t[19];
		var I;
		t[20] !== g ? (I = u.jsx(_, babelHelpers.extends({}, g, {
			mediaQuality: o("WAWebAttachMediaModel").MediaQuality.HD,
			title: k
		})), t[20] = g, t[21] = I) : I = t[21];
		var T;
		t[22] !== s || t[23] !== E || t[24] !== I ? (T = u.jsx(o("WAWebDropdownItem.react").DropdownItem, {
			addSpacing: !0,
			fixedHeight: !1,
			xstyle: L,
			selected: E,
			testid: "hd-photo-dropdown-item-hd-quality",
			action: s,
			children: I
		}), t[22] = s, t[23] = E, t[24] = I, t[25] = T) : T = t[25];
		var D;
		t[26] === Symbol.for("react.memo_cache_sentinel") ? (D = u.jsx(o("WAWebText.react").WAWebTextMuted, {
			xstyle: [
				m.dropdownInfo,
				o("WDSPaddings.stylex").wdsPaddings.paddingTop16,
				o("WDSPaddings.stylex").wdsPaddings.paddingStart16,
				o("WDSPaddings.stylex").wdsPaddings.paddingEnd16,
				d.paddingBottom7
			],
			children: p.dropdownInfo()
		}), t[26] = D) : D = t[26];
		var x;
		return t[27] !== T || t[28] !== R ? (x = u.jsxs(u.Fragment, { children: [
			R,
			T,
			D
		] }), t[27] = T, t[28] = R, t[29] = x) : x = t[29], x;
	}
	l.default = g;
}), 226);
