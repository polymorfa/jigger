__d("WAWebEventsCreateEventModalInputs.react", [
	"fbt",
	"WALogger",
	"WAWebDateInput.react",
	"WAWebDropdownV2.react",
	"WAWebEventUtils",
	"WAWebEventsGatingUtils",
	"WAWebFlex.react",
	"WAWebL10N",
	"WAWebPlusIcon.react",
	"WAWebPopoverContext.react",
	"WAWebRichTextField.react",
	"WAWebRichTextInput.react",
	"WAWebSelectMenuItem.react",
	"WAWebText.react",
	"WAWebTimeInput.react",
	"WAWebUnstyledButton.react",
	"WAWebVelocityTransitionGroup",
	"WAWebWDSRichTextField.react",
	"WDSButton.react",
	"WDSIconIcCall.react",
	"WDSIconIcLocationOn.react",
	"WDSIconIcVideocam.react",
	"WDSMargins.stylex",
	"WDSPaddings.stylex",
	"WDSSwitch.react",
	"fbs",
	"react",
	"stylex",
	"useWAWebABPropConfigValue"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c, d = c || (c = o("react")), m = c, p = m.useCallback, _ = m.useRef, f = m.useState, g = {
		marginBlock5: {
			marginTop: "x1ok221b",
			marginBottom: "xu06os2",
			$$css: !0
		},
		marginBlock10: {
			marginTop: "x1anpbxc",
			marginBottom: "xyorhqc",
			$$css: !0
		},
		paddingBlock5: {
			paddingTop: "x123j3cw",
			paddingBottom: "xs9asl8",
			$$css: !0
		},
		marginInlineEnd5: {
			marginInlineEnd: "xf6vk7d",
			$$css: !0
		}
	}, h = {
		activeBorderBottom: {
			borderBottomColor: "x1rrvw3c",
			$$css: !0
		},
		iconColor: {
			color: "xhslqc4",
			$$css: !0
		},
		alignStart: {
			textAlign: "x1yc453h",
			$$css: !0
		},
		alignEnd: {
			textAlign: "xp4054r",
			$$css: !0
		}
	};
	function y(e) {
		var t = e.onChange, n = e.placeholder, r = e.title, a = e.value;
		return d.jsx(o("WAWebRichTextField.react").RichTextField, {
			testid: "event-name-input",
			title: r != null ? r : s._(
				/*BTDS*/
				""
			),
			focusOnMount: !0,
			fieldName: s._(
				/*BTDS*/
				""
			),
			emojiBtnPosition: "side",
			showRemaining: !0,
			textFormatEnabled: !1,
			maxLength: o("WAWebEventsGatingUtils").getEventsNameLengthLimit(),
			maxVisibleLines: 4,
			lineWrap: !0,
			value: a,
			onChange: function(n) {
				var e = n.text;
				return t(e);
			},
			placeholder: n != null ? n : s._(
				/*BTDS*/
				""
			)
		});
	}
	y.displayName = y.name + " [from " + i.id + "]";
	var C = { descriptionField: {
		borderStartStartRadius: "xyi3aci",
		borderStartEndRadius: "xwf5gio",
		borderEndEndRadius: "x1p453bz",
		borderEndStartRadius: "x1suzm8a",
		borderBottomWidth: "xso031l",
		borderBottomStyle: "x1q0q8m5",
		borderBottomColor: "x1dby8ki",
		$$css: !0
	} };
	function b(e) {
		var t = e.onChange, n = e.value, a = o("useWAWebABPropConfigValue").useABPropConfigValue("wds_web_rich_text_field"), i = f(!1), l = i[0], u = i[1], c = function() {
			u(!0);
		}, m = function() {
			u(!1);
		};
		if (a === !0) return d.jsx(r("WAWebWDSRichTextField.react"), {
			label: s._(
				/*BTDS*/
				""
			),
			placeholder: s._(
				/*BTDS*/
				""
			),
			initialText: n,
			onValueChange: t,
			maxLength: o("WAWebEventsGatingUtils").getEventsDescriptionLengthLimit(),
			rows: 4,
			testid: "events_description_textfield",
			emoji: {
				picker: { ariaLabel: s._(
					/*BTDS*/
					""
				) },
				keyboardShortcut: !0
			}
		});
		var p = [C.descriptionField, l && h.activeBorderBottom];
		return d.jsx(o("WAWebRichTextField.react").RichTextField, {
			testid: "events_description_textfield",
			title: s._(
				/*BTDS*/
				""
			),
			fieldName: s._(
				/*BTDS*/
				""
			),
			emojiBtnPosition: "side",
			showRemaining: !0,
			textFormatEnabled: !0,
			maxLength: o("WAWebEventsGatingUtils").getEventsDescriptionLengthLimit(),
			value: n,
			onChange: function(n) {
				var e = n.text;
				return t(e);
			},
			placeholder: s._(
				/*BTDS*/
				""
			),
			multiline: !0,
			maxVisibleLines: 4,
			minVisibleLines: 2,
			bulletPointsEnabled: !0,
			numberedListEnabled: !1,
			blockQuoteEnabled: !1,
			inlineCodeEnabled: !1,
			theme: "gray-background",
			hideFloatingLabel: !0,
			hideSpacer: !0,
			containerXstyle: p,
			onFocus: c,
			onBlur: m
		});
	}
	b.displayName = b.name + " [from " + i.id + "]";
	var v = {
		locationInputContainer: {
			width: "xh8yej3",
			position: "x1n2onr6",
			zIndex: "xhtitgo",
			display: "x78zum5",
			flex: "x1okw0bk",
			alignItems: "x1cy8zhl",
			borderBottomWidth: "xso031l",
			borderBottomStyle: "x1q0q8m5",
			borderBottomColor: "x1dby8ki",
			$$css: !0
		},
		locationPlaceholder: {
			insetInlineStart: "x1o0tod",
			left: null,
			right: null,
			$$css: !0
		}
	}, S = {
		plusIcon: {
			transition: "x1yssd5k",
			$$css: !0
		},
		rotated: {
			transform: "x1158fpu",
			$$css: !0
		},
		textBtn: {
			display: "x78zum5",
			alignItems: "x6s0dn4",
			columnGap: "xouci9l",
			cursor: "x1ypdohk",
			$$css: !0
		}
	}, R = function(t) {
		return o("WAWebEventUtils").getEventDateBoundaries(!1, t);
	};
	function L(e) {
		var t = e.dateValue, n = e.ephemeralDurationSeconds, a = e.isEndDateTimeEnabled, i = e.onDateChange, l = e.onTimeChange, u = e.setIsEndDateTimeEnabled, c = e.showRemoveEndTimeButton, m = e.timeValue, _ = r("WAWebL10N").isRTL() ? h.alignEnd : h.alignStart, f = p(function() {
			return R(n);
		}, [n]), y = a ? d.jsxs("div", { children: [d.jsx(o("WAWebText.react").WAWebTextMuted, {
			marginTop: 4,
			children: s._(
				/*BTDS*/
				""
			)
		}), d.jsxs(o("WAWebFlex.react").FlexRow, {
			xstyle: [o("WDSMargins.stylex").wdsMargins.marginStart4, _],
			dir: "ltr",
			columnGap: 16,
			children: [d.jsx(o("WAWebFlex.react").FlexItem, {
				grow: 1,
				basis: 0,
				children: d.jsx(o("WAWebDateInput.react").DateInput, {
					ariaLabel: s._(
						/*BTDS*/
						""
					),
					theme: "event",
					onChange: i,
					value: t,
					name: "event-date",
					getDateBoundaries: f
				})
			}), d.jsx(o("WAWebFlex.react").FlexItem, {
				grow: 1,
				basis: 0,
				children: d.jsx(o("WAWebTimeInput.react").TimeInput, {
					ariaLabel: s._(
						/*BTDS*/
						""
					),
					theme: "event",
					name: "event-time",
					value: m,
					onChange: l
				})
			})]
		})] }) : null, C = a ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		), b = a ? r("fbs")._(
			/*BTDS*/
			""
		) : r("fbs")._(
			/*BTDS*/
			""
		), v = d.jsx(o("WAWebPlusIcon.react").PlusIcon, {
			height: 19,
			"aria-hidden": !0,
			xstyle: [S.plusIcon, a && S.rotated]
		});
		return d.jsxs(d.Fragment, { children: [
			d.jsx(r("WAWebVelocityTransitionGroup"), {
				transitionName: "slide",
				children: y
			}),
			c ? d.jsx(o("WAWebFlex.react").FlexRow, {
				as: "section",
				justify: "all",
				xstyle: g.marginBlock5,
				children: d.jsxs(r("WAWebUnstyledButton.react"), {
					xstyle: S.textBtn,
					onClick: function() {
						return u(!a);
					},
					"aria-label": b,
					children: [v, d.jsx(o("WAWebText.react").WAWebTextSectionTitle, {
						color: "primary",
						children: C
					})]
				})
			}) : null,
			n != null && n > 0 ? d.jsx(o("WAWebText.react").WAWebTextSmall, {
				color: "secondary",
				xstyle: o("WDSMargins.stylex").wdsMargins.marginTop8,
				children: s._(
					/*BTDS*/
					""
				)
			}) : null
		] });
	}
	L.displayName = L.name + " [from " + i.id + "]";
	function E(e) {
		var t = e.onChange, n = e.value, a = o("useWAWebABPropConfigValue").useABPropConfigValue("wds_web_rich_text_field"), i = f(!1), l = i[0], c = i[1], m = _(), p = function() {
			var e;
			(e = m.current) == null || e.focus();
		}, y = function() {
			c(!0);
		}, C = function() {
			c(!1);
		};
		if (a === !0) return d.jsx(r("WAWebWDSRichTextField.react"), {
			label: s._(
				/*BTDS*/
				""
			),
			placeholder: s._(
				/*BTDS*/
				""
			),
			initialText: n,
			onValueChange: t,
			maxLength: o("WAWebEventsGatingUtils").getEventsDescriptionLengthLimit(),
			EndIcon: r("WDSIconIcLocationOn.react"),
			testid: "events_location_textfield"
		});
		var b = [
			v.locationInputContainer,
			g.marginBlock10,
			g.paddingBlock5,
			l && h.activeBorderBottom
		];
		return d.jsxs("section", babelHelpers.extends({}, (u || (u = r("stylex"))).props(b), { children: [d.jsx("div", {
			className: "x98rzlu xeuugli",
			children: d.jsx(r("WAWebRichTextInput.react"), {
				ref: m,
				placeholder: s._(
					/*BTDS*/
					""
				),
				ariaLabel: s._(
					/*BTDS*/
					""
				),
				placeholderTextXStyle: v.locationPlaceholder,
				maxLength: o("WAWebEventsGatingUtils").getEventsDescriptionLengthLimit(),
				maxVisibleLines: 1,
				lineWrap: !1,
				initialText: n,
				onChange: function(n) {
					var e = n.text;
					return t(e);
				},
				onFocus: y,
				onBlur: C
			})
		}), d.jsx(r("WAWebUnstyledButton.react"), {
			onClick: p,
			xstyle: g.marginInlineEnd5,
			"aria-label": s._(
				/*BTDS*/
				""
			),
			children: d.jsx(r("WDSIconIcLocationOn.react"), { xstyle: h.iconColor })
		})] }));
	}
	E.displayName = E.name + " [from " + i.id + "]";
	function k(e) {
		var t = e.icon, n = e.text;
		return d.jsxs(o("WAWebFlex.react").FlexRow, {
			align: "center",
			justify: "start",
			children: [d.jsx(o("WAWebFlex.react").FlexItem, { children: t }), d.jsx(o("WAWebFlex.react").FlexItem, {
				xstyle: [o("WDSPaddings.stylex").wdsPaddings.paddingVer12, o("WDSMargins.stylex").wdsMargins.marginStart8],
				align: "start",
				children: d.jsx(o("WAWebText.react").WAWebTextSectionTitle, {
					color: "primary",
					children: n
				})
			})]
		});
	}
	k.displayName = k.name + " [from " + i.id + "]";
	function I(e) {
		var t = e.callType, n = e.onCallTypeChange, a = d.createRef(), i = o("WAWebPopoverContext.react").useWAWebPopoverControllerRef(), l = function(t) {
			t === "voice" ? n("voice") : t === "video" && n("video");
		};
		return d.jsxs(d.Fragment, { children: [d.jsx(r("WDSButton.react"), {
			variant: "outline",
			size: "medium",
			type: "default",
			ref: a,
			xstyle: [o("WDSPaddings.stylex").wdsPaddings.paddingEnd0, o("WDSPaddings.stylex").wdsPaddings.paddingStart8],
			Icon: r(t === "video" ? "WDSIconIcVideocam.react" : "WDSIconIcCall.react"),
			label: s._(
				/*BTDS*/
				"",
				[s._enum(t != null ? t : "video", {
					video: "Video",
					voice: "Voice"
				})]
			),
			"aria-label": s._(
				/*BTDS*/
				"",
				[s._enum(t != null ? t : "video", {
					video: "video",
					voice: "voice"
				})]
			),
			showEndDropdownIcon: !0,
			onPress: function() {
				var e;
				(e = i.current) == null || e.showPopover();
			}
		}), d.jsx(o("WAWebDropdownV2.react").DropdownV2Menu, {
			controllerRef: i,
			position: o("WAWebDropdownV2.react").PopoverPosition.Bottom,
			alignment: o("WAWebDropdownV2.react").PopoverAlignment.Center,
			minWidth: 140,
			target: a,
			children: d.jsxs(o("WAWebSelectMenuItem.react").SelectMenuItemGroup, {
				multiselect: !1,
				initialSelection: t != null ? t : "video",
				onSelect: l,
				children: [d.jsx(o("WAWebSelectMenuItem.react").SelectMenuItem, {
					optionId: "video",
					primary: d.jsx(k, {
						icon: d.jsx(r("WDSIconIcVideocam.react"), {}),
						text: s._(
							/*BTDS*/
							""
						)
					})
				}), d.jsx(o("WAWebSelectMenuItem.react").SelectMenuItem, {
					optionId: "voice",
					primary: d.jsx(k, {
						icon: d.jsx(r("WDSIconIcCall.react"), {}),
						text: s._(
							/*BTDS*/
							""
						)
					})
				})]
			})
		})] });
	}
	I.displayName = I.name + " [from " + i.id + "]";
	function T(t) {
		var n = t.hideToggle, a = n === void 0 ? !1 : n, i = t.onChange, l = t.required, u = l === void 0 ? !1 : l, c = t.value, m = u;
		u && c == null && (o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[CallTypeInput] callType required but null"]))).sendLogs("call-type-required-but-not-set"), m = !1);
		var p = c != null, _ = function() {
			i(p ? null : "video");
		}, f = "calllink";
		return a && !m ? p ? d.jsx(o("WAWebFlex.react").FlexColumn, {
			as: "section",
			xstyle: g.marginBlock5,
			children: d.jsxs(o("WAWebFlex.react").FlexRow, {
				justify: "all",
				align: "center",
				alignSelf: "stretch",
				children: [d.jsx(o("WAWebFlex.react").FlexItem, { children: d.jsx(o("WAWebText.react").WAWebTextTitle, { children: s._(
					/*BTDS*/
					""
				) }) }), d.jsx(o("WAWebFlex.react").FlexItem, { children: d.jsx(I, {
					callType: c,
					onCallTypeChange: i
				}) })]
			})
		}) : null : d.jsxs(o("WAWebFlex.react").FlexColumn, {
			as: "section",
			xstyle: g.marginBlock5,
			children: [m ? null : d.jsxs(o("WAWebFlex.react").FlexRow, {
				justify: "all",
				xstyle: g.marginBlock10,
				alignSelf: "stretch",
				children: [d.jsx(o("WAWebFlex.react").FlexItem, { children: d.jsx(o("WAWebText.react").WAWebTextTitle, {
					as: "label",
					labelFor: f,
					children: s._(
						/*BTDS*/
						""
					)
				}) }), d.jsx(o("WAWebFlex.react").FlexItem, { children: d.jsx(r("WDSSwitch.react"), {
					value: p,
					onChange: _,
					id: f
				}) })]
			}), p && d.jsxs(o("WAWebFlex.react").FlexRow, {
				justify: "all",
				align: "center",
				alignSelf: "stretch",
				children: [d.jsx(o("WAWebFlex.react").FlexItem, { children: d.jsx(o("WAWebText.react").WAWebTextTitle, { children: s._(
					/*BTDS*/
					""
				) }) }), d.jsx(o("WAWebFlex.react").FlexItem, { children: d.jsx(I, {
					callType: c,
					onCallTypeChange: i
				}) })]
			})]
		});
	}
	T.displayName = T.name + " [from " + i.id + "]", l.NameInput = y, l.DescriptionInput = b, l.EndDateTimePicker = L, l.LocationInput = E, l.CallTypeInput = T;
}), 226);
