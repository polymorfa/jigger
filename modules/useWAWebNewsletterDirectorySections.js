__d("useWAWebNewsletterDirectorySections", [
	"fbt",
	"WAWebChatEntryPoint",
	"WAWebNetworkStatus",
	"WAWebNewsletterDirectoryCategoryUtils",
	"WAWebNewsletterDirectoryFilterUtils",
	"WAWebNewsletterDirectorySearchAction",
	"WAWebNewsletterGatingUtils",
	"react",
	"useWAWebEventTargetValue",
	"useWAWebUnmountSignal"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = u.useCallback, d = u.useRef, m = u.useState, p = {
		NEWSLETTER_DIRECTORY_SECTION_HEADER: "NEWSLETTER_DIRECTORY_SECTION_HEADER",
		NEWSLETTER_DIRECTORY_CELL: "NEWSLETTER_DIRECTORY_CELL"
	}, _ = 56, f = 18, g = {
		searchText: "",
		view: o("WAWebNewsletterDirectoryFilterUtils").NewsletterDirectoryListView.Recommended,
		categories: [],
		skipSubscribedNewsletters: !0
	}, h = function(t) {
		var e = t.directoryFunnelLogger, n = t.newsletters, r = t.offset, a = r === void 0 ? 0 : r, i = t.section, l = t.sectionIndex;
		if (n == null) return [];
		var s = n.map(function(t, n) {
			return {
				type: p.NEWSLETTER_DIRECTORY_CELL,
				itemKey: "newsletter-" + t.id.toString(),
				newsletter: t,
				chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint.NewsletterDirectoryCategory,
				index: n + a,
				directoryFunnelLogger: e,
				section: i,
				sectionIndex: l
			};
		});
		return s;
	}, y = function(t, n, r) {
		var e = [], a = new Set();
		return t.forEach(function(t, i) {
			if (t.newsletters.length !== 0) {
				var l = i + 1;
				e.push({
					type: p.NEWSLETTER_DIRECTORY_SECTION_HEADER,
					section: o("WAWebNewsletterDirectoryCategoryUtils").getNewsletterSectionFromCategoryType(t.category.type),
					itemKey: "newsletter-category-header-" + t.category.name,
					title: t.category.name,
					height: _,
					sectionIndex: l,
					directoryFunnelLogger: n
				});
				var s = t.newsletters.filter(function(e) {
					return !r.has(e.id.user);
				}).slice(0, o("WAWebNewsletterGatingUtils").getDisplayNewsletterPerCategoryLimit()).reduce(function(e, t) {
					return a.add(t.id.user), e.push(t), e;
				}, []);
				e.push.apply(e, h({
					newsletters: s,
					directoryFunnelLogger: n,
					section: o("WAWebNewsletterDirectoryCategoryUtils").getNewsletterSectionFromCategoryType(t.category.type),
					sectionIndex: l
				}));
			}
		}), e.push({
			type: "NEWSLETTER_DIRECTORY_SECTION_HEADER",
			section: "EXPLORE_MORE",
			itemKey: "newsletter-category-header-explore-more",
			title: s._(
				/*BTDS*/
				""
			),
			subtitle: s._(
				/*BTDS*/
				""
			),
			height: _ + f,
			sectionIndex: t.length + 1,
			directoryFunnelLogger: n
		}), {
			rowCells: e,
			excludedNewsletters: a
		};
	};
	function C(e) {
		var t = e.countryCode, n = e.newsletterDirectoryFunnelLogger, a = e.onCategoriesLoad, i = d(""), l = d(!1), u = m([]), p = u[0], f = u[1], C = m(new Set()), b = C[0], v = C[1], S = m(0), R = S[0], L = S[1], E = m(0), k = E[0], I = E[1], T = m(!1), D = T[0], x = T[1], $ = m(!1), P = $[0], N = $[1], M = m(!1), w = M[0], A = M[1], F = r("useWAWebEventTargetValue")(r("WAWebNetworkStatus"), "change:online", function() {
			return !r("WAWebNetworkStatus").online;
		}), O = r("useWAWebUnmountSignal")(), B = c(function() {
			var e = new Set();
			return o("WAWebNewsletterDirectorySearchAction").fetchNewsletterDirectories(babelHelpers.extends({}, g, {
				countryCodes: t === "" ? [] : [t],
				cursorToken: i.current
			})).then(function(t) {
				var n, r = t.newsletters, a = t.pageInfo;
				i.current = (n = a == null ? void 0 : a.endCursor) != null ? n : "", l.current = (a == null ? void 0 : a.hasNextPage) === !0;
				var s = r.slice(0, o("WAWebNewsletterGatingUtils").getDisplayNewsletterPerCategoryLimit());
				s.forEach(function(t) {
					e.add(t.id.user);
				});
				var u = r.slice(o("WAWebNewsletterGatingUtils").getDisplayNewsletterPerCategoryLimit());
				return {
					recommendedNewsletters: s,
					exploreMoreNewsletters: u,
					recommendedNewslettersIds: e
				};
			}).catch(function(e) {
				throw n.logServerError(), e;
			});
		}, [t, n]), W = c(function() {
			return o("WAWebNewsletterDirectorySearchAction").fetchNewsletterDirectories(babelHelpers.extends({}, g, {
				countryCodes: t === "" ? [] : [t],
				cursorToken: i.current
			})).then(function(e) {
				var t, r = e.newsletters, o = e.pageInfo;
				return i.current = (t = o == null ? void 0 : o.endCursor) != null ? t : "", l.current = (o == null ? void 0 : o.hasNextPage) === !0, h({
					newsletters: r.filter(function(e) {
						return !b.has(e.id.user);
					}),
					directoryFunnelLogger: n,
					section: "EXPLORE_MORE",
					sectionIndex: k + 1,
					offset: R
				});
			}).catch(function(e) {
				throw n.logServerError(), e;
			});
		}, [
			t,
			n,
			k,
			R,
			b
		]), q = c(function(e, t) {
			if (t === void 0 && (t = new Set()), O.aborted) return {
				rowCells: [],
				excludedNewsletters: new Set()
			};
			var r = e.map(function(e) {
				return e.category;
			});
			return I(r.length), a(r), y(e, n, t);
		}, [
			O.aborted,
			n,
			a
		]), U = c(function() {
			!F && !D && (A(!0), i.current = "", l.current = !1, B().then(function(e) {
				o("WAWebNewsletterDirectorySearchAction").getNewsletterDirectoryCategoriesPreviewAction(t).then(function(t) {
					var r = q(t, e.recommendedNewslettersIds);
					v(r.excludedNewsletters);
					var o = e.exploreMoreNewsletters.filter(function(e) {
						return !r.excludedNewsletters.has(e.id.user);
					});
					f([{
						type: "NEWSLETTER_DIRECTORY_SECTION_HEADER",
						section: "EXPLORE",
						itemKey: "newsletter-category-header-explore",
						title: s._(
							/*BTDS*/
							""
						),
						height: _,
						sectionIndex: 0,
						directoryFunnelLogger: n
					}].concat(h({
						newsletters: e.recommendedNewsletters,
						directoryFunnelLogger: n,
						section: "EXPLORE",
						sectionIndex: 0
					}), r.rowCells, h({
						newsletters: o,
						directoryFunnelLogger: n,
						section: "EXPLORE_MORE",
						sectionIndex: t.length + 1
					}))), L(o.length);
				}).catch(function(e) {
					throw e;
				});
			}).catch(function() {
				n.logServerError(), x(!0);
			}).finally(function() {
				A(!1);
			}));
		}, [
			F,
			D,
			t,
			q,
			B,
			n
		]), V = c(function() {
			N(!0), W().then(function(e) {
				f([].concat(p, e)), L(R + e.length);
			}).finally(function() {
				N(!1);
			});
		}, [
			R,
			W,
			p
		]), H = c(function() {
			return l.current === !0 && !P;
		}, [P]);
		return [
			p,
			H,
			U,
			V,
			w,
			P,
			D,
			x
		];
	}
	l.TabCellDataType = p, l.useNewsletterDirectorySections = C;
}), 226);
