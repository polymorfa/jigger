__d("WAWebAuraRingtoneDropdown.react", [
	"fbt",
	"WALogger",
	"WAWebAuraRingtoneDownloader",
	"WAWebAuraRingtonePrefs",
	"WAWebButton.react",
	"WAWebDropdownV2.react",
	"WAWebFlex.react",
	"WAWebIcChevronDownMenuIcon.react",
	"WAWebIcMusicNoteIcon.react",
	"WAWebIconButton.react",
	"WAWebMenuItems.react",
	"WAWebRingtoneScreenWamEvent",
	"WAWebSelectMenuItem.react",
	"WAWebText.react",
	"WDSIconIcCheck.react",
	"WDSIconIcPauseFilled.react",
	"WDSIconIcPlayArrowFilled.react",
	"bx",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u, c, d, m, p = m || (m = o("react")), _ = m, f = _.useCallback, g = _.useEffect, h = _.useRef, y = _.useState, C = {
		buttonTextContent: {
			overflowX: "x6ikm8r",
			overflowY: "x10wlt62",
			textOverflow: "xlyipyv",
			whiteSpace: "xuxw1ft",
			lineHeight: "x1o2sk6j",
			textAlign: "x1yc453h",
			color: "x14ug900",
			$$css: !0
		},
		menu: {
			overflowY: "x1odjw0f",
			paddingInlineStart: "x4tra6z",
			paddingInlineEnd: "x1j8ymqv",
			$$css: !0
		},
		button: {
			borderStartStartRadius: "xyi3aci",
			borderStartEndRadius: "xwf5gio",
			borderEndEndRadius: "x1p453bz",
			borderEndStartRadius: "x1suzm8a",
			borderTopWidth: "x178xt8z",
			borderInlineEndWidth: "x1lun4ml",
			borderBottomWidth: "xso031l",
			borderInlineStartWidth: "xpilrb4",
			borderTopStyle: "x13fuv20",
			borderInlineEndStyle: "x18b5jzi",
			borderBottomStyle: "x1q0q8m5",
			borderInlineStartStyle: "x1t7ytsu",
			borderTopColor: "xx42vgk",
			borderInlineEndColor: "xbogo7e",
			borderBottomColor: "x120ee7l",
			borderInlineStartColor: "x1vb5itz",
			$$css: !0
		},
		title: {
			marginBottom: "xcytdqz",
			$$css: !0
		},
		toneIcon: {
			color: "xhslqc4",
			$$css: !0
		},
		buttonContent: {
			marginTop: "xdj266r",
			marginInlineEnd: "x1ipd1wl",
			marginBottom: "xat24cr",
			marginInlineStart: "xto4ptb",
			$$css: !0
		},
		playButton: {
			color: "xhslqc4",
			height: "x1vqgdyp",
			maxHeight: "x18wx58x",
			width: "x100vrsf",
			maxWidth: "xo92w5m",
			paddingTop: "xexx8yu",
			paddingInlineEnd: "xyri2b",
			paddingBottom: "x18d9i69",
			paddingInlineStart: "x1c1uobl",
			borderStartStartRadius: "x1bczwif",
			borderStartEndRadius: "xvvg52n",
			borderEndEndRadius: "xwd4zgb",
			borderEndStartRadius: "x11o6v7j",
			":hover_backgroundColor": "x1ym48sb",
			$$css: !0
		},
		checkmarkIcon: {
			color: "x1du590y",
			$$css: !0
		},
		invisibleCheckmarkIcon: {
			opacity: "xg01cxk",
			$$css: !0
		},
		menuItemContainer: {
			paddingTop: "xexx8yu",
			paddingInlineEnd: "xyri2b",
			paddingBottom: "x18d9i69",
			paddingInlineStart: "x1c1uobl",
			$$css: !0
		},
		chevronIcon: {
			color: "xhslqc4",
			$$css: !0
		}
	}, b = r("bx").getURL(r("bx")("78755"));
	function v(t) {
		var n = t.disabled, a = t.initialToneId, i = t.isRingtonesBenefitActive, l = t.journeyLoggerRef, m = t.onToneSelect, _ = t.ringtoneSource, v = t.title, R = h(null), L = y(a != null ? a : o("WAWebAuraRingtonePrefs").DEFAULT_RINGTONE_ID), E = L[0], k = L[1], I = y(E), T = I[0], D = I[1], x = y([]), $ = x[0], P = x[1];
		g(function() {
			var e = !1;
			return o("WAWebAuraRingtoneDownloader").downloadPremiumRingtones().then(function() {
				if (!e) {
					var t = o("WAWebAuraRingtoneDownloader").getDownloadedRingtones();
					P(t);
				}
			}), function() {
				e = !0;
			};
		}, []);
		var N = h(!1), M = h(null), w = y(null), A = w[0], F = w[1];
		g(function() {
			return function() {
				var e = M.current;
				e != null && (e.pause(), M.current = null);
			};
		}, []);
		var O = function() {
			if (E === o("WAWebAuraRingtonePrefs").DEFAULT_RINGTONE_ID) return s._(
				/*BTDS*/
				""
			);
			if (E === o("WAWebAuraRingtonePrefs").NONE_RINGTONE_ID) return s._(
				/*BTDS*/
				""
			);
			var e = $.find(function(e) {
				return e.id === E;
			});
			return e != null ? S(e.displayName) : E;
		}, B = function() {
			var e = M.current;
			e != null && (e.pause(), e.currentTime = 0), M.current = null, F(null);
		}, W = function(n, r) {
			if (n.stopPropagation(), A === r) {
				o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[aura_ringtones] stopping tone ", ""])), r), B();
				return;
			}
			o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose(["[aura_ringtones] playing tone ", ""])), r), B();
			var t = null;
			if (r === o("WAWebAuraRingtonePrefs").DEFAULT_RINGTONE_ID) t = b;
			else {
				if (r === o("WAWebAuraRingtonePrefs").NONE_RINGTONE_ID) return;
				t = o("WAWebAuraRingtoneDownloader").getRingtoneBlobUrl(r);
			}
			if (t != null) {
				var a = new window.Audio(t);
				a.addEventListener("ended", function() {
					F(null), M.current = null;
				}), M.current = a, F(r), a.play().catch(function(e) {
					o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose(["[aura_ringtones] audio playback failed: ", ""])), String(e)), F(null), M.current = null;
				});
			}
		}, q = function(t) {
			o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose(["[aura_ringtones] selected tone ", ""])), t), B();
			var e = t !== o("WAWebAuraRingtonePrefs").DEFAULT_RINGTONE_ID && t !== o("WAWebAuraRingtonePrefs").NONE_RINGTONE_ID;
			!i && e || t !== E && (N.current = !0, l == null || l.current.logSelect({
				success: !0,
				actionTarget: t
			}), m(t), k(t), l == null || l.current.logApply({
				success: !0,
				actionTarget: t
			}), new (o("WAWebRingtoneScreenWamEvent")).RingtoneScreenWamEvent({
				ringtoneChangeApplied: !0,
				ringtoneId: t,
				ringtoneReset: t === o("WAWebAuraRingtonePrefs").DEFAULT_RINGTONE_ID,
				ringtoneSource: _,
				premiumRingtonesDownloadedCount: $.length
			}).commit());
		}, U = f(function() {
			B(), window.setTimeout(function() {
				N.current || new (o("WAWebRingtoneScreenWamEvent")).RingtoneScreenWamEvent({
					ringtoneChangeApplied: !1,
					ringtoneId: E,
					ringtoneReset: !1,
					ringtoneSelectionCancelled: !0,
					ringtoneSource: _,
					premiumRingtonesDownloadedCount: $.length
				}).commit(), N.current = !1;
			}, 0);
		}, [
			E,
			$.length,
			_
		]), V = function(t) {
			var e = t.id, n = t.isPremiumTone, a = t.label, l = n && !i;
			return p.jsx(o("WAWebMenuItems.react").SelectMenuItem, {
				optionId: e,
				primary: a,
				detailRight: null,
				disabled: l,
				onMouseEnter: function() {
					return D(e);
				},
				onMouseLeave: function() {
					return D(null);
				},
				middlecontainerXStyle: C.menuItemContainer,
				detailLeft: E === e ? p.jsx(r("WDSIconIcCheck.react"), {
					xstyle: C.checkmarkIcon,
					height: 24,
					width: 24
				}) : p.jsx(r("WDSIconIcCheck.react"), {
					xstyle: C.invisibleCheckmarkIcon,
					height: 24,
					width: 24
				}),
				primaryRight: e !== o("WAWebAuraRingtonePrefs").NONE_RINGTONE_ID && (T === e || A === e) && !l ? p.jsx(r("WAWebIconButton.react"), {
					xstyle: C.playButton,
					onClick: function(n) {
						return W(n, e);
					},
					ariaLabel: A === e ? s._(
						/*BTDS*/
						""
					) : s._(
						/*BTDS*/
						""
					),
					icon: A === e ? p.jsx(r("WDSIconIcPauseFilled.react"), {
						height: 24,
						width: 24
					}) : p.jsx(r("WDSIconIcPlayArrowFilled.react"), {
						directional: !0,
						height: 24,
						width: 24
					})
				}) : null
			}, e);
		};
		return p.jsxs("div", {
			className: "x78zum5 xdt5ytf",
			children: [
				p.jsx(o("WAWebText.react").WAWebTextTitleRefreshed, {
					color: "wdsContentDeemphasized",
					xstyle: C.title,
					children: v
				}),
				p.jsx(o("WAWebButton.react").WAWebButtonSecondary, {
					borderStyles: C.button,
					ref: R,
					testid: "aura-ringtone-dropdown-button",
					disabled: n,
					children: p.jsxs(o("WAWebFlex.react").FlexRow, {
						justify: "all",
						align: "center",
						grow: 1,
						xstyle: C.buttonContent,
						children: [
							p.jsx(o("WAWebIcMusicNoteIcon.react").IcMusicNoteIcon, {
								iconXstyle: C.toneIcon,
								height: 24,
								width: 24
							}),
							p.jsx(o("WAWebFlex.react").FlexItem, {
								marginStart: 2,
								grow: 1,
								justify: "stretch",
								align: "center",
								xstyle: C.buttonTextContent,
								children: O()
							}),
							p.jsx(o("WAWebIcChevronDownMenuIcon.react").IcChevronDownMenuIcon, { iconXstyle: C.chevronIcon })
						]
					})
				}),
				n !== !0 && p.jsxs(o("WAWebDropdownV2.react").DropdownV2Menu, {
					xstyle: C.menu,
					position: o("WAWebDropdownV2.react").PopoverPosition.Bottom,
					alignment: o("WAWebDropdownV2.react").PopoverAlignment.Center,
					minWidth: 320,
					maxHeight: 300,
					initHandling: "click",
					initialActiveOptionId: E,
					onClose: U,
					target: R,
					children: [p.jsxs(o("WAWebSelectMenuItem.react").SelectMenuItemGroup, {
						multiselect: !1,
						initialSelection: E,
						onSelect: q,
						children: [V({
							id: o("WAWebAuraRingtonePrefs").DEFAULT_RINGTONE_ID,
							isPremiumTone: !1,
							label: s._(
								/*BTDS*/
								""
							)
						}), V({
							id: o("WAWebAuraRingtonePrefs").NONE_RINGTONE_ID,
							isPremiumTone: !1,
							label: s._(
								/*BTDS*/
								""
							)
						})]
					}), $.length > 0 && p.jsx("div", {
						className: "x178xt8z x13fuv20 xx42vgk x1380le5 x16ovd2e",
						children: p.jsx(o("WAWebSelectMenuItem.react").SelectMenuItemGroup, {
							multiselect: !1,
							initialSelection: E,
							onSelect: q,
							children: [].concat($).sort(function(e, t) {
								return e.id.localeCompare(t.id);
							}).map(function(e) {
								return V({
									id: e.id,
									isPremiumTone: !0,
									label: S(e.displayName)
								});
							})
						})
					})]
				})
			]
		});
	}
	v.displayName = v.name + " [from " + i.id + "]";
	function S(e) {
		var t, n = e.toLowerCase(), r = {
			"aura-ringtone-01": s._(
				/*BTDS*/
				""
			),
			"aura-ringtone-02": s._(
				/*BTDS*/
				""
			),
			"aura-ringtone-03": s._(
				/*BTDS*/
				""
			),
			"aura-ringtone-04": s._(
				/*BTDS*/
				""
			),
			"aura-ringtone-05": s._(
				/*BTDS*/
				""
			),
			"aura-ringtone-06": s._(
				/*BTDS*/
				""
			),
			"aura-ringtone-07": s._(
				/*BTDS*/
				""
			),
			"aura-ringtone-08": s._(
				/*BTDS*/
				""
			),
			"aura-ringtone-09": s._(
				/*BTDS*/
				""
			),
			"aura-ringtone-10": s._(
				/*BTDS*/
				""
			)
		};
		return (t = r[n]) != null ? t : e;
	}
	l.default = v;
}), 226);
