__d("WAWebGroupPastParticipantSearch.react", [
	"fbt",
	"WALogger",
	"WAWebElevatedPushNamesFlag",
	"WAWebExternalLink.react",
	"WAWebFaqUrl",
	"WAWebFbtCommon",
	"WAWebFlatList.react",
	"WAWebFlex.react",
	"WAWebGroupParticipantsFlow.react",
	"WAWebGroupPastParticipant.react",
	"WAWebL10NAccentFold",
	"WAWebModalManager",
	"WAWebModalsListModal.react",
	"WAWebPhoneNumberSearch",
	"WAWebSectionHeader.react",
	"WAWebUserPrefsMeUser",
	"react",
	"useWAWebDebouncedSearch",
	"useWAWebEventTargetValue"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = ["ref"], c, d = c || (c = o("react")), m = { paddingInline15: {
		paddingInlineStart: "x1gx403c",
		paddingInlineEnd: "x1q3ajuy",
		paddingLeft: null,
		paddingRight: null,
		$$css: !0
	} }, p = {
		HEADER: "HEADER",
		ROW: "ROW",
		DISCLAIMER: "DISCLAIMER"
	}, _ = o("WAWebModalsListModal.react").ListModalFactory();
	function f(e) {
		var t, n = e.ref, a = babelHelpers.objectWithoutPropertiesLoose(e, u), i = a.chat, l = a.onBack, c = a.onClose, m = a.onContactInfo, f = (t = i.groupMetadata) == null ? void 0 : t.pastParticipants, h = r("useWAWebDebouncedSearch")(), y = h[0], b = h[1], v = r("useWAWebEventTargetValue")(f, [
			"buld_add",
			"bulk_remove",
			"reset"
		], function() {
			var e, t = o("WAWebL10NAccentFold").accentFold(y), n = o("WAWebPhoneNumberSearch").numberSearch(t), r = (e = f == null ? void 0 : f.getValidRecords().filter(function(e) {
				var r = !t || e.contact.searchMatchExact(t, n);
				return !o("WAWebUserPrefsMeUser").isMeAccount(e.id) && r;
			})) != null ? e : [];
			if (!r.length) return [];
			var a = [];
			return a.push({
				type: p.HEADER,
				header: s._(
					/*BTDS*/
					""
				),
				itemKey: "list_header"
			}), r.forEach(function(e, t) {
				return a.push({
					type: p.ROW,
					participant: e,
					itemKey: e.id.toString() + "_" + t
				});
			}), a.push({
				type: p.DISCLAIMER,
				itemKey: "list_disclaimer"
			}), a;
		}, [y]), S = function(t) {
			if (m) {
				var e = o("WAWebGroupParticipantsFlow.react").getOneToOneContact(t.participant.contact);
				e && (o("WAWebModalManager").ModalManager.close(), m(e));
			}
		};
		return d.jsx(_, {
			ref: n,
			title: s._(
				/*BTDS*/
				""
			),
			data: v,
			renderItem: function(t) {
				return d.jsx(g, {
					data: t,
					elevatedPushNamesEnabled: o("WAWebElevatedPushNamesFlag").elevatedPushNamesM2Enabled(i),
					onClick: t.type === p.ROW ? function() {
						return S(t);
					} : void 0
				});
			},
			emptyState: d.jsx(C, {}),
			onSearch: b,
			searchPlaceholder: s._(
				/*BTDS*/
				""
			),
			onBack: l,
			onCancel: c
		});
	}
	f.displayName = f.name + " [from " + i.id + "]";
	function g(t) {
		var n, a = t.data, i = t.elevatedPushNamesEnabled, l = t.onClick;
		switch (a.type) {
			case p.HEADER: return d.jsx(r("WAWebSectionHeader.react"), {
				header: (n = a.header) != null ? n : "",
				uppercase: !1
			});
			case p.ROW: return d.jsx(r("WAWebGroupPastParticipant.react"), {
				participant: a.participant,
				elevatedPushNamesEnabled: i,
				onClick: l
			});
			case p.DISCLAIMER: return d.jsx(y, {});
			default: throw o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose(["UnknownDataError: WAWebGroupPastParticipantSearch"]))), new (o("WAWebFlatList.react")).UnknownDataError(a);
		}
	}
	g.displayName = g.name + " [from " + i.id + "]";
	var h = {
		row: {
			height: "xy75621",
			backgroundColor: "x1280gxy",
			$$css: !0
		},
		disclaimer: {
			fontSize: "x1f6kntn",
			color: "xhslqc4",
			$$css: !0
		},
		empty: {
			fontSize: "x1jchvi3",
			color: "x181ptb6",
			$$css: !0
		}
	};
	function y() {
		return d.jsx(o("WAWebFlex.react").FlexRow, {
			xstyle: [
				h.row,
				h.disclaimer,
				m.paddingInline15
			],
			align: "center",
			justify: "center",
			children: d.jsx("span", { children: s._(
				/*BTDS*/
				"",
				[s._implicitParam("=m2", d.jsx(o("WAWebExternalLink.react").ExternalLink, {
					href: o("WAWebFaqUrl").getHowToExitAndDeleteGroupsFaq(),
					children: s._(
						/*BTDS*/
						""
					)
				}))]
			) })
		});
	}
	y.displayName = y.name + " [from " + i.id + "]";
	function C() {
		return d.jsxs(d.Fragment, { children: [
			d.jsx(r("WAWebSectionHeader.react"), {
				header: s._(
					/*BTDS*/
					""
				),
				uppercase: !1
			}),
			d.jsx(o("WAWebFlex.react").FlexRow, {
				xstyle: [h.row, h.empty],
				align: "center",
				justify: "center",
				children: d.jsx("span", { children: r("WAWebFbtCommon")("No results found") })
			}),
			d.jsx(y, {})
		] });
	}
	C.displayName = C.name + " [from " + i.id + "]", l.default = f;
}), 226);
