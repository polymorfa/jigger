__d("WAWebSearchTheWebCommonUtils", [
	"fbt",
	"$InternalEnum",
	"WAWebCellV2.react",
	"WAWebExternalLink.react",
	"WAWebFaqUrl",
	"WAWebFlex.react",
	"WAWebHfmTextSearchCompleteWamEvent",
	"WAWebModalManager",
	"WAWebNetworkStatus",
	"WAWebSTWGatingUtils",
	"WAWebSearchTextIcon.react",
	"WAWebSearchTheWebEventLogger",
	"WAWebSpinner.react",
	"WAWebText.react",
	"WAWebToast.react",
	"WAWebToastManager",
	"WAWebWamEnumStwFormat",
	"WAWebWamEnumStwInteraction",
	"WDSIconIcGoogleLensIcon.react",
	"WDSIconIcInfo.react",
	"asyncToGeneratorRuntime",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = e.useState, d = {
		paddingEnd4: {
			paddingInlineEnd: "x1uc92m",
			$$css: !0
		},
		paddingVert4: {
			paddingTop: "x1tiyuxx",
			paddingBottom: "x1nbhmlj",
			$$css: !0
		}
	}, m = n("$InternalEnum").Mirrored([
		"TEXT",
		"URL",
		"IMAGE"
	]), p = 24, _ = 24;
	function f() {
		return s._(
			/*BTDS*/
			""
		);
	}
	f.displayName = f.name + " [from " + i.id + "]";
	function g(e) {
		var t = o("WAWebToast.react").genId();
		o("WAWebToastManager").ToastManager.open(u.jsx(o("WAWebToast.react").Toast, {
			msg: e,
			id: t
		}));
	}
	function h() {
		return s._(
			/*BTDS*/
			""
		);
	}
	h.displayName = h.name + " [from " + i.id + "]";
	function y() {
		return s._(
			/*BTDS*/
			""
		);
	}
	y.displayName = y.name + " [from " + i.id + "]";
	function C() {
		return s._(
			/*BTDS*/
			""
		);
	}
	C.displayName = C.name + " [from " + i.id + "]";
	function b() {
		return s._(
			/*BTDS*/
			""
		);
	}
	b.displayName = b.name + " [from " + i.id + "]";
	function v(e) {
		var t = e.entryPoint, n = e.isNewsletter, r = e.messageType, a = e.stwFormat, i = function() {
			o("WAWebSearchTheWebEventLogger").logSTWEvent({
				stwInteraction: o("WAWebWamEnumStwInteraction").STW_INTERACTION.LEARN_MORE_CLICKED,
				stwEntryPoint: t,
				stwFormat: a,
				messageType: r
			});
		};
		return n ? s._(
			/*BTDS*/
			"",
			[s._implicitParam("=m2", u.jsx(o("WAWebExternalLink.react").ExternalLink, {
				href: o("WAWebFaqUrl").getSearchTheWebFaqUrl(),
				onClick: i,
				children: s._(
					/*BTDS*/
					""
				)
			}))]
		) : s._(
			/*BTDS*/
			"",
			[s._implicitParam("=m2", u.jsx(o("WAWebExternalLink.react").ExternalLink, {
				href: o("WAWebFaqUrl").getSearchTheWebFaqUrl(),
				onClick: i,
				children: s._(
					/*BTDS*/
					""
				)
			}))]
		);
	}
	function S() {
		return s._(
			/*BTDS*/
			""
		);
	}
	S.displayName = S.name + " [from " + i.id + "]";
	function R(e) {
		switch (e) {
			case m.TEXT: return u.jsx(o("WAWebSearchTextIcon.react").SearchTextIcon, {
				height: p,
				width: _
			});
			case m.IMAGE: return u.jsx(r("WDSIconIcGoogleLensIcon.react"), {
				height: p,
				width: _
			});
			case m.URL: return u.jsx(r("WDSIconIcInfo.react"), {
				height: p,
				width: _
			});
		}
	}
	R.displayName = R.name + " [from " + i.id + "]";
	function L(e) {
		switch (e) {
			case m.TEXT: return s._(
				/*BTDS*/
				""
			);
			case m.IMAGE: return s._(
				/*BTDS*/
				""
			);
			case m.URL: return o("WAWebSTWGatingUtils").isSearchTheWebDesignExperimentV1Enabled() ? s._(
				/*BTDS*/
				""
			) : s._(
				/*BTDS*/
				""
			);
		}
	}
	function E(e) {
		var t = e.onSearchClick, a = e.searchType, i = c(!1), l = i[0], s = i[1];
		return u.jsx(o("WAWebFlex.react").FlexItem, {
			testid: "search-modal-row",
			paddingTop: 8,
			paddingBottom: 8,
			children: u.jsx(r("WAWebCellV2.react"), {
				detailLeft: R(a),
				containerXStyle: [d.paddingEnd4, d.paddingVert4],
				primaryRightXStyle: [d.paddingEnd4, d.paddingVert4],
				disabled: l,
				onClick: n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
					r("WAWebNetworkStatus").online ? (s(!0), yield t(), s(!1), new (o("WAWebHfmTextSearchCompleteWamEvent")).HfmTextSearchCompleteWamEvent().commit(), o("WAWebModalManager").ModalManager.close()) : g(f());
				}),
				primary: u.jsx(o("WAWebText.react").WAWebTextSectionTitle, {
					color: "primary",
					paddingStart: 12,
					children: L(a)
				}),
				alignDetailRight: "start",
				primaryRight: l ? u.jsx(o("WAWebSpinner.react").Spinner, {
					size: 20,
					color: "accent"
				}) : null
			})
		});
	}
	E.displayName = E.name + " [from " + i.id + "]";
	function k(e) {
		var t = Array.from(e.keys());
		if (t.length === 1) {
			var n = t[0];
			switch (n) {
				case m.TEXT: return o("WAWebWamEnumStwFormat").STW_FORMAT.SINGLE_TEXT;
				case m.URL: return o("WAWebWamEnumStwFormat").STW_FORMAT.SINGLE_LINK;
				case m.IMAGE: return o("WAWebWamEnumStwFormat").STW_FORMAT.SINGLE_IMAGE;
			}
		} else if (t.length === 2) {
			if (t.includes(m.URL) && t.includes(m.TEXT)) return o("WAWebWamEnumStwFormat").STW_FORMAT.MULTIPLE_LINK_TEXT;
			if (t.includes(m.URL) && t.includes(m.IMAGE)) return o("WAWebWamEnumStwFormat").STW_FORMAT.MULTIPLE_LINK_IMAGE;
			if (t.includes(m.TEXT) && t.includes(m.IMAGE)) return o("WAWebWamEnumStwFormat").STW_FORMAT.MULTIPLE_IMAGE_TEXT;
		}
		return o("WAWebWamEnumStwFormat").STW_FORMAT.MULTIPLE_LINK_IMAGE_TEXT;
	}
	l.SearchType = m, l.getNoInternetToastMsg = f, l.showSearchFailureToast = g, l.getHFMHeaderText = h, l.getHFMHeaderCTAText = y, l.getModalTitleText = C, l.getModalSearchActionText = b, l.getModalHeaderText = v, l.getModalHeaderSubtext = S, l.SearchModalRow = E, l.getSTWFormat = k;
}), 226);
