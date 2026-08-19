__d("WAWebAboutEditModal.react", [
	"fbt",
	"$InternalEnum",
	"WALogger",
	"WATimeUtils",
	"WAWeb-moment",
	"WAWebAboutDailyUtils",
	"WAWebAboutPrompts",
	"WAWebAboutWamLogger",
	"WAWebApiPrivacyDisallowedList",
	"WAWebClickable.react",
	"WAWebClock",
	"WAWebContactCollection",
	"WAWebContactStatusBridge",
	"WAWebDateInput.react",
	"WAWebDivider.react",
	"WAWebDrawerBody.react",
	"WAWebDrawerHeader.react",
	"WAWebDropdownItemSeparator.react",
	"WAWebEditGroupProfileDrawerEmojiStickerPanelPopup.react",
	"WAWebEmoji",
	"WAWebEmoji.react",
	"WAWebEphemeralAboutDurationsUtils",
	"WAWebFlex.react",
	"WAWebFrontendContactGetters",
	"WAWebModal.react",
	"WAWebModalManager",
	"WAWebPrivacySettings",
	"WAWebPrivacyVisibilityEditDrawer.react",
	"WAWebSelect.react",
	"WAWebSelectContactsExceptModal.react",
	"WAWebSelectMenuItem.react",
	"WAWebStatusClockIcon.react",
	"WAWebTextStatusAction",
	"WAWebTextStatusGatingUtils",
	"WAWebTextStatusUtils",
	"WAWebTimeInput.react",
	"WAWebUserPrefsGeneral",
	"WAWebUserPrefsMeUser",
	"WAWebWebIcCheckIcon.react",
	"WDSButton.react",
	"WDSIconIcCheck.react",
	"WDSIconIcChevronRight.react",
	"WDSIconIcClose.react",
	"WDSIconIcDelete.react",
	"WDSIconIcLock.react",
	"WDSIconIcMood.react",
	"WDSMenu.react",
	"WDSMenuItem.react",
	"WDSText.react",
	"WDSTextField.react",
	"asyncToGeneratorRuntime",
	"fbs",
	"react",
	"useWAWebContactValues",
	"useWAWebFlow",
	"useWAWebListener",
	"useWAWebUnmountSignal",
	"useWDSMenu"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c, d, m, p = m || (m = o("react")), _ = m, f = _.useCallback, g = _.useEffect, h = _.useRef, y = _.useState, C = n("$InternalEnum")({
		Edit: "edit",
		Privacy: "privacy",
		ContactsExcept: "contacts_except"
	}), b = 50, v = [
		{
			emoji: "🟢",
			text: r("fbs")._(
				/*BTDS*/
				""
			).toString()
		},
		{
			emoji: "⏰",
			text: r("fbs")._(
				/*BTDS*/
				""
			).toString()
		},
		{
			emoji: "🤣",
			text: r("fbs")._(
				/*BTDS*/
				""
			).toString()
		},
		{
			emoji: "✈️",
			text: r("fbs")._(
				/*BTDS*/
				""
			).toString()
		},
		{
			emoji: "🔥",
			text: r("fbs")._(
				/*BTDS*/
				""
			).toString()
		}
	], S = v.length, R = [
		o("WAWebAboutWamLogger").PRESET_TYPE.FREE_TO_CHAT,
		o("WAWebAboutWamLogger").PRESET_TYPE.SLOW_TO_RESPOND,
		o("WAWebAboutWamLogger").PRESET_TYPE.HANGING_WITH_FRIENDS,
		o("WAWebAboutWamLogger").PRESET_TYPE.TRAVELING,
		o("WAWebAboutWamLogger").PRESET_TYPE.EXCITED
	], L = {
		textEmojiContainer: {
			width: "xh8yej3",
			$$css: !0
		},
		moodIcon: {
			color: "x1v5yvga",
			$$css: !0
		},
		grayColor: {
			color: "xhslqc4",
			$$css: !0
		},
		timerIcon: {
			minWidth: "x1fns5xo",
			height: "x1vqgdyp",
			display: "x78zum5",
			alignItems: "x6s0dn4",
			justifyContent: "xl56j7k",
			paddingInlineEnd: "x1uc92m",
			$$css: !0
		},
		paddingTop: {
			paddingTop: "x1p57kb1",
			$$css: !0
		},
		customDateTimeRow: {
			paddingInlineStart: "x1g7keqi",
			paddingTop: "x1p57kb1",
			$$css: !0
		},
		privacyIcon: {
			minWidth: "x1fns5xo",
			height: "x1vqgdyp",
			display: "x78zum5",
			alignItems: "x6s0dn4",
			justifyContent: "xl56j7k",
			paddingInlineEnd: "xvtqlqk",
			$$css: !0
		},
		privacyChevron: {
			flexShrink: "x2lah0s",
			color: "xo1mcw5",
			$$css: !0
		},
		drawerBodyScroll: {
			flexBasis: "xdl72j9",
			minHeight: "x2lwn1j",
			$$css: !0
		}
	};
	function E(e) {
		var t = e.emoji, n = e.onSave, a, i = y(!1), l = i[0], s = i[1], u = h(), c = function() {
			s(!0);
		};
		if (t != null) {
			var d = o("WAWebEmoji").EmojiUtil.normalizeEmojiFromString(t);
			d != null && (a = p.jsx(r("WAWebEmoji.react"), { emoji: d }, "low-res"));
		}
		return p.jsxs("div", {
			className: "x1uc92m xdqhqc9",
			children: [p.jsx("button", {
				className: "x78zum5 x6s0dn4 xl56j7k x100vrsf x1vqgdyp xyi3aci xwf5gio x1p453bz x1suzm8a xnj1f2r x2uibgs xkveyfu x12llq9 x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x178xt8z x1lun4ml xso031l xpilrb4 xjbqb8w x1ypdohk x18z0m94 x7s97pk",
				onClick: c,
				ref: u,
				children: a || p.jsx(r("WDSIconIcMood.react"), { xstyle: L.moodIcon })
			}), l && p.jsx(o("WAWebEditGroupProfileDrawerEmojiStickerPanelPopup.react").EmojiPanelPopup, {
				anchorRef: u,
				onClose: function() {
					s(!1);
				},
				onSelect: function(t) {
					n(t), s(!1);
				}
			})]
		});
	}
	E.displayName = E.name + " [from " + i.id + "]";
	function k(e) {
		var t = e.onClear, n = e.onSave, a = e.promptKey, i = e.text, l = y(function() {
			return a != null ? o("WAWebAboutPrompts").getAboutPromptText(a) : o("WAWebAboutPrompts").getRandomAboutPrompt();
		}), s = l[0], u = function(t) {
			n(t);
		};
		return p.jsx("div", {
			className: "xh8yej3",
			children: p.jsx(r("WDSTextField.react"), {
				EndIcon: r("WDSIconIcClose.react"),
				label: s,
				value: i != null ? i : "",
				onEndIconClick: t,
				onValueChange: u,
				maxCharacterCount: b,
				testid: "self_profile_about_text_textfield"
			})
		});
	}
	k.displayName = k.name + " [from " + i.id + "]";
	function I(e) {
		var t = e.onClick, a = y(function() {
			var e;
			return (e = o("WAWebUserPrefsGeneral").getUserPrivacySettings().about) != null ? e : o("WAWebPrivacySettings").VISIBILITY.all;
		}), i = a[0], l = a[1], u = y(0), c = u[0], d = u[1], m = f(function() {
			var e, t = (e = o("WAWebUserPrefsGeneral").getUserPrivacySettings().about) != null ? e : o("WAWebPrivacySettings").VISIBILITY.all;
			l(t);
		}, []);
		o("useWAWebListener").useListener(o("WAWebUserPrefsGeneral").privacySettingsEventEmitter, "all", m), g(function() {
			if (i === o("WAWebPrivacySettings").VISIBILITY.contact_blacklist) {
				var e = !1;
				return n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
					var t = yield o("WAWebApiPrivacyDisallowedList").queryDisallowedLists();
					if (!e) {
						var n, r;
						d((n = (r = t.about) == null ? void 0 : r.disallowedList.length) != null ? n : 0);
					}
				})(), function() {
					e = !0;
				};
			}
		}, [i]);
		var _ = i === o("WAWebPrivacySettings").VISIBILITY.all ? s._(
			/*BTDS*/
			""
		) : i === o("WAWebPrivacySettings").VISIBILITY.contacts ? s._(
			/*BTDS*/
			""
		) : i === o("WAWebPrivacySettings").VISIBILITY.contact_blacklist ? s._(
			/*BTDS*/
			"",
			[s._param("excluded_count", c)]
		) : i === o("WAWebPrivacySettings").VISIBILITY.none ? s._(
			/*BTDS*/
			""
		) : (function() {
			throw Error("Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " + i);
		})(), h = p.jsxs("span", {
			className: "x3nfvp2 x6s0dn4",
			children: [p.jsx(r("WDSText.react"), {
				type: "Body3Emphasized",
				colorName: "contentActionEmphasized",
				children: _
			}), p.jsx(r("WDSIconIcChevronRight.react"), {
				height: 20,
				width: 20,
				xstyle: L.privacyChevron
			})]
		});
		return p.jsxs("div", {
			className: "x78zum5 x6s0dn4 x1tiyuxx x1nxh6w3 xhslqc4",
			"data-testid": "privacy-info",
			children: [p.jsx(r("WDSIconIcLock.react"), {
				iconXstyle: L.grayColor,
				xstyle: L.privacyIcon
			}), p.jsx(o("WAWebClickable.react").Clickable, {
				onClick: t,
				children: p.jsx("span", { children: s._(
					/*BTDS*/
					"",
					[s._param("privacy_setting", h)]
				) })
			})]
		});
	}
	I.displayName = I.name + " [from " + i.id + "]";
	var T = "custom", D = 30, x = function() {
		var e = r("WAWeb-moment")().format("YYYY-MM-DD"), t = r("WAWeb-moment")().add(D, "days").format("YYYY-MM-DD");
		return [e, t];
	};
	function $(e, t) {
		var n = r("WAWeb-moment")(e + " " + t);
		return Math.max(0, n.diff(r("WAWeb-moment")(), "seconds"));
	}
	function P(e) {
		var t = e.duration, n = e.onSave, a = o("WAWebEphemeralAboutDurationsUtils").getTextStatusEphemeralityDurations(), i = a.some(function(e) {
			return e.value === t;
		}), l = y(!i), u = l[0], c = l[1], d = y(function() {
			return r("WAWeb-moment")().add(1, "day").format("YYYY-MM-DD");
		}), m = d[0], _ = d[1], f = y(function() {
			return r("WAWeb-moment")().format("HH:mm");
		}), g = f[0], h = f[1], C = y(t), b = C[0], v = C[1];
		if (t !== b) {
			v(t);
			var S = a.some(function(e) {
				return e.value === t;
			});
			if (S && u) c(!1);
			else if (!S && !u) {
				c(!0);
				var R = r("WAWeb-moment")().add(t, "seconds");
				_(R.format("YYYY-MM-DD")), h(R.format("HH:mm"));
			}
		}
		var E = function(t) {
			t === T ? (c(!0), n($(m, g))) : (c(!1), n(Number(t)));
		}, k = function(t) {
			_(t), n($(t, g));
		}, I = function(t) {
			h(t), n($(m, t));
		}, D = u ? T : t.toString();
		return p.jsxs(p.Fragment, { children: [
			p.jsxs(o("WAWebFlex.react").FlexRow, {
				align: "center",
				xstyle: L.paddingTop,
				children: [p.jsx(o("WAWebStatusClockIcon.react").StatusClockIcon, {
					iconXstyle: L.grayColor,
					xstyle: L.timerIcon
				}), p.jsxs(o("WAWebSelect.react").Select, {
					defaultLabel: s._(
						/*BTDS*/
						""
					),
					initialSelection: u ? T : t.toString(),
					label: s._(
						/*BTDS*/
						""
					),
					onChange: E,
					testid: "text-status-ephemeral-durations-dropdown",
					theme: "about-20-screen",
					width: "100%",
					children: [
						a.map(function(e) {
							return p.jsx(o("WAWebSelectMenuItem.react").SelectMenuItem, {
								optionId: "" + e.value,
								primary: e.label.toString()
							}, "duration-" + e.value);
						}),
						p.jsx(r("WAWebDropdownItemSeparator.react"), {}),
						p.jsx(o("WAWebSelectMenuItem.react").SelectMenuItem, {
							optionId: T,
							primary: s._(
								/*BTDS*/
								""
							).toString()
						}, "duration-custom")
					]
				}, D)]
			}),
			u && p.jsxs(o("WAWebFlex.react").FlexRow, {
				xstyle: L.customDateTimeRow,
				dir: "ltr",
				columnGap: 8,
				children: [p.jsx(o("WAWebFlex.react").FlexItem, {
					grow: 1,
					basis: 0,
					children: p.jsx(o("WAWebDateInput.react").DateInput, {
						name: "about-custom-date",
						value: m,
						onChange: k,
						getDateBoundaries: x,
						theme: "about",
						label: s._(
							/*BTDS*/
							""
						)
					})
				}), p.jsx(o("WAWebFlex.react").FlexItem, {
					grow: 1,
					basis: 0,
					children: p.jsx(o("WAWebTimeInput.react").TimeInput, {
						name: "about-custom-time",
						value: g,
						onChange: I,
						theme: "about",
						label: s._(
							/*BTDS*/
							""
						)
					})
				})]
			}),
			!u && p.jsx("div", {
				className: "x16zwnhg x16ovd2e",
				"data-testid": "expiry-preview",
				children: p.jsx(r("WDSText.react"), {
					type: "Body3",
					colorName: "contentDeemphasized",
					children: o("WAWebClock").Clock.textStatusExpiryStr(o("WATimeUtils").castToUnixTime(o("WATimeUtils").unixTime() + t))
				})
			})
		] });
	}
	P.displayName = P.name + " [from " + i.id + "]";
	function N(e) {
		var t = e.emojiKey, n = e.isDeletable, a = e.onDelete, i = e.onSelect, l = e.textVal, u = h(null), c = o("WAWebEmoji").EmojiUtil.normalizeEmojiFromString(t != null ? t : ""), d = p.jsxs(r("WDSMenu.react"), { children: [p.jsx(r("WDSMenuItem.react"), {
			Icon: r("WDSIconIcCheck.react"),
			title: s._(
				/*BTDS*/
				""
			),
			onPress: i,
			testid: "mi-suggestion-select"
		}), n === !0 && p.jsx(r("WDSMenuItem.react"), {
			Icon: r("WDSIconIcDelete.react"),
			title: s._(
				/*BTDS*/
				""
			),
			onPress: a,
			destructive: !0,
			testid: "mi-suggestion-delete"
		})] }), m = r("useWDSMenu")({
			targetRef: u,
			menu: d,
			contextMenuArea: !0,
			enableUIM: !1
		}), _ = m.menuPortal, f = m.openMenu, g = function(t) {
			t.preventDefault(), t.stopPropagation(), f(t);
		};
		return p.jsxs("div", {
			ref: u,
			className: "x78zum5 x6s0dn4 x1qughib x1ypdohk x16ovd2e xb0esv5 xs723ss x18z0m94 x1bqaal",
			onClick: i,
			onContextMenu: g,
			onKeyDown: function(t) {
				t.key === "Enter" && i();
			},
			role: "button",
			tabIndex: 0,
			children: [p.jsxs(o("WAWebFlex.react").FlexRow, {
				align: "center",
				children: [p.jsx("div", {
					className: "x78zum5 x6s0dn4 xl56j7k x100vrsf x1vqgdyp x2lah0s",
					children: c != null ? p.jsx(r("WAWebEmoji.react"), { emoji: c }, "low-res") : p.jsx(r("WDSIconIcMood.react"), {
						height: 20,
						width: 20,
						xstyle: L.moodIcon
					})
				}), p.jsx("span", {
					className: "x12w63v0",
					children: l
				})]
			}), _]
		});
	}
	N.displayName = N.name + " [from " + i.id + "]";
	function M(e) {
		var t = e.handleDeleteSuggestion, n = e.onSave, o = e.suggestions, a = o.length > S;
		return p.jsxs("div", {
			className: "x1xrf6ya",
			children: [p.jsx(r("WAWebDivider.react"), { direction: "horizontal" }), p.jsx("div", { children: o.map(function(e, o) {
				var i = e.duration, l = e.emoji, s = e.text;
				return p.jsxs(p.Fragment, { children: [o === S && a && p.jsx("div", {
					className: "x16ovd2e x12xbjc7",
					children: p.jsx(r("WAWebDivider.react"), { direction: "horizontal" })
				}), p.jsx(N, {
					emojiKey: l,
					isDeletable: o >= S,
					textVal: s,
					onSelect: function() {
						return n({
							selectedDur: i,
							selectedEmoji: l,
							selectedText: s
						});
					},
					onDelete: function() {
						t(o);
					}
				})] }, o);
			}) })]
		});
	}
	M.displayName = M.name + " [from " + i.id + "]";
	function w(t) {
		var a, i, l, m = y(function() {
			return o("WAWebAboutDailyUtils").incrementAboutCreationVisit(), Date.now();
		}), _ = m[0], f = h(!1), T = r("useWAWebUnmountSignal")(), D = y([]), x = D[0], $ = D[1], N = function(t) {
			if (t == null || t.length === 0) {
				$(v);
				return;
			}
			var e = new Set(v.map(function(e) {
				var t, n;
				return ((t = e.emoji) != null ? t : "") + "|" + ((n = e.text) != null ? n : "");
			})), n = t.filter(function(t) {
				var n, r, o = ((n = t.emoji) != null ? n : "") + "|" + ((r = t.text) != null ? r : "");
				return e.has(o) ? !1 : (e.add(o), !0);
			});
			$([].concat(v, n));
		}, w = o("WAWebUserPrefsMeUser").getMeUserOrThrow(), A = o("WAWebContactCollection").ContactCollection.assertGet(w), F = o("useWAWebContactValues").useContactValues(A.id, [
			(l = o("WAWebFrontendContactGetters")).getTextStatusString,
			l.getTextStatusEmoji,
			l.getTextStatusEphemeralDuration,
			l.getTextStatusExpiryTs,
			l.getTextStatusLastUpdateTime
		]), O = F[0], B = F[1], W = F[2], q = F[3], U = F[4], V = o("WAWebTextStatusUtils").hasTextStatusSet({
			textStatusEmoji: B,
			textStatusEphemeralDuration: W,
			textStatusExpiryTs: q,
			textStatusLastUpdateTime: U,
			textStatusString: O
		}), H = y(V ? O : null), G = H[0], z = H[1], j = y(V ? B : null), K = j[0], Q = j[1], X = y(V && W != null ? W : o("WAWebEphemeralAboutDurationsUtils").defaultTextStatusEphemeralDuration), Y = X[0], J = X[1];
		g(function() {
			n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				if (!(!o("WAWebTextStatusGatingUtils").sendTextStatusEnabled() || T.aborted)) {
					var e = yield o("WAWebTextStatusAction").getSuggestions();
					T.aborted || N(e);
				}
			})();
		}, [T.aborted]);
		var Z = o("useWAWebFlow").useFlow(C.Edit, {
			transitions: o("useWAWebFlow").FlowTransitions.None,
			onEnd: o("WAWebModalManager").closeModalManager
		}), ee = Z[1], te = h(null), ne = ee.step;
		if (ne == null) return null;
		var re = function() {
			f.current || (f.current = !0, o("WAWebAboutDailyUtils").incrementAboutCreationStarted());
		}, oe = function(t) {
			re(), z(t);
		}, ae = function(t) {
			re(), Q(t);
		}, ie = function() {
			z(null), Q(null), J(o("WAWebEphemeralAboutDurationsUtils").defaultTextStatusEphemeralDuration);
		}, le = function(t) {
			J(t);
		}, se = function() {
			return x == null ? void 0 : x.some(function(e) {
				return e.emoji === K && e.text === G;
			});
		}, ue = function() {
			var e = x == null ? void 0 : x.findIndex(function(e) {
				return e.emoji === K && e.text === G;
			});
			if (e != null && e >= 0 && e < S) return R[e];
		}, ce = function(t) {
			var e = t.selectedDur, n = t.selectedEmoji, r = t.selectedText;
			re(), Q(n), z(r), e != null && J(e);
		}, de = (function() {
			var r = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				var n, r = G != null && G.trim() ? G : null;
				if (!(r != null && r.length > b)) {
					if (r === O && K === B && Y === W) {
						o("WAWebModalManager").closeModalManager();
						return;
					}
					try {
						yield o("WAWebTextStatusAction").setMyTextStatus(r, K, Y);
					} catch (t) {
						o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[handleSave] failed to save About status: ", ""])), t), o("WAWebAboutDailyUtils").incrementAboutFailure();
						return;
					}
					try {
						var a = [K, r].filter(Boolean).join(" ");
						if (yield o("WAWebContactStatusBridge").setMyStatus(a), (r || K) && !se()) {
							var i = (x != null ? x : []).slice(S);
							yield o("WAWebTextStatusAction").setSuggestions([{
								emoji: K,
								text: r,
								duration: Y
							}].concat(i));
						}
					} catch (e) {
						o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose(["[handleSave] secondary operations failed: ", ""])), e);
					}
					var l = (r == null || r === "") && K == null, s;
					l ? s = o("WAWebAboutWamLogger").ABOUT_REQUEST_TYPE.CLEAR_EXISTING : V ? s = o("WAWebAboutWamLogger").ABOUT_REQUEST_TYPE.UPDATE_EXISTING : s = o("WAWebAboutWamLogger").ABOUT_REQUEST_TYPE.CREATE_NEW, o("WAWebAboutWamLogger").logAboutCreation({
						aboutDuration: Y,
						aboutEntrypoint: t.entrypoint,
						aboutLength: (n = r == null ? void 0 : r.length) != null ? n : 0,
						aboutOverallT: Math.round((Date.now() - _) / 1e3),
						aboutPresetSelected: se(),
						aboutPromptKey: t.promptKey,
						aboutRequestType: s,
						preset: ue()
					}), o("WAWebAboutDailyUtils").incrementAboutSuccess(), o("WAWebModalManager").closeModalManager();
				}
			});
			return function() {
				return r.apply(this, arguments);
			};
		})(), me = (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
				if (!(e == null || x == null)) {
					var t = [].concat(x);
					t.splice(e, 1);
					try {
						var n = t.slice(S);
						yield o("WAWebTextStatusAction").setSuggestions(n), N(n);
					} catch (e) {
						o("WALogger").WARN(c || (c = babelHelpers.taggedTemplateLiteralLoose(["[handleDeleteSuggestion] failed to update suggestions"])));
					}
				}
			});
			return function(n) {
				return e.apply(this, arguments);
			};
		})(), pe = s._(
			/*BTDS*/
			""
		), _e = (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				try {
					yield o("WAWebTextStatusAction").setMyTextStatus(null, null, o("WAWebEphemeralAboutDurationsUtils").defaultTextStatusEphemeralDuration), yield o("WAWebContactStatusBridge").setMyStatus("");
				} catch (e) {
					o("WALogger").ERROR(d || (d = babelHelpers.taggedTemplateLiteralLoose(["[handleDelete] failed to clear About status: ", ""])), e), o("WAWebAboutDailyUtils").incrementAboutFailure();
					return;
				}
				o("WAWebAboutWamLogger").logAboutCreation({
					aboutDuration: o("WAWebEphemeralAboutDurationsUtils").defaultTextStatusEphemeralDuration,
					aboutEntrypoint: t.entrypoint,
					aboutLength: 0,
					aboutOverallT: Math.round((Date.now() - _) / 1e3),
					aboutPresetSelected: !1,
					aboutRequestType: o("WAWebAboutWamLogger").ABOUT_REQUEST_TYPE.CLEAR_EXISTING
				}), o("WAWebAboutDailyUtils").incrementAboutSuccess(), o("WAWebModalManager").closeModalManager();
			});
			return function() {
				return e.apply(this, arguments);
			};
		})(), fe = function() {
			_e();
		}, ge = function() {
			de();
		}, he = (a = V ? O : null) != null ? a : null, ye = (i = V ? B : null) != null ? i : null, Ce = V && W != null ? W : o("WAWebEphemeralAboutDurationsUtils").defaultTextStatusEphemeralDuration, be = G != null && G.trim() ? G : null, ve = be === he && (K != null ? K : null) === ye && Y === Ce, Se = ve || !!K && be == null || G != null && G.length > b;
		return ne === C.Edit ? p.jsx(o("WAWebModal.react").Modal, {
			type: o("WAWebModal.react").ModalTheme.EditAbout,
			children: p.jsxs("div", {
				className: "x1280gxy x78zum5 xdt5ytf x1iyjqo2 x2lwn1j",
				children: [
					p.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
						title: pe,
						type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.POPUP,
						onCancel: o("WAWebModalManager").closeModalManager
					}),
					p.jsxs(r("WAWebDrawerBody.react"), {
						theme: "padding",
						xstyle: L.drawerBodyScroll,
						children: [p.jsxs("div", {
							className: "xb0esv5 xyo0t3i",
							children: [
								p.jsxs(o("WAWebFlex.react").FlexRow, {
									align: "center",
									xstyle: L.textEmojiContainer,
									children: [p.jsx(E, {
										emoji: K,
										onSave: ae
									}), p.jsx(k, {
										onClear: ie,
										onSave: oe,
										promptKey: t.promptKey,
										text: G
									})]
								}),
								p.jsx(I, { onClick: function() {
									return ee.push(C.Privacy);
								} }),
								p.jsx(P, {
									duration: Y,
									onSave: le
								})
							]
						}), p.jsx(M, {
							handleDeleteSuggestion: me,
							onSave: ce,
							suggestions: x
						})]
					}),
					p.jsxs("div", {
						className: "x78zum5 x6s0dn4 x1p57kb1 xvpt6g3 xvtqlqk x1m4z3lf x1od0jb8",
						children: [V && p.jsx(o("WAWebClickable.react").Clickable, {
							ariaLabel: s._(
								/*BTDS*/
								""
							),
							onClick: fe,
							children: p.jsx(r("WDSIconIcDelete.react"), { xstyle: L.grayColor })
						}), p.jsx("div", {
							className: "xvc5jky",
							children: p.jsx(r("WDSButton.react"), {
								variant: "filled",
								size: "medium",
								type: "default",
								Icon: o("WAWebWebIcCheckIcon.react").WebIcCheckIcon,
								disabled: Se,
								onPress: ge,
								testid: "popup-controls-ok",
								"aria-label": s._(
									/*BTDS*/
									""
								)
							})
						})]
					})
				]
			})
		}) : ne === C.Privacy ? p.jsx(o("WAWebModal.react").Modal, {
			type: o("WAWebModal.react").ModalTheme.EditAbout,
			children: p.jsx("div", {
				className: "x1n2onr6 x16nrsnc",
				children: p.jsx(r("WAWebPrivacyVisibilityEditDrawer.react"), {
					category: "about",
					onClose: function() {
						return ee.pop();
					},
					onOpenContactsExceptModal: function(t) {
						te.current = t, ee.push(C.ContactsExcept);
					}
				})
			})
		}) : ne === C.ContactsExcept ? p.jsx(r("WAWebSelectContactsExceptModal.react"), {
			category: "about",
			onConfirm: function() {
				te.current == null || te.current();
			},
			onBack: function() {
				return ee.pop();
			}
		}) : (function() {
			throw Error("Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " + ne);
		})();
	}
	w.displayName = w.name + " [from " + i.id + "]", l.default = w;
}), 226);
