__d("AbstractCalendarPager.react", [
	"fbt",
	"Focus",
	"react",
	"uniqueID"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = e.Component;
	function d(e, t) {
		if (!e) return !1;
		var n = t.focusDate.startOfMonth(), r = n.addMonths(t.count);
		return n.isBeforeOrEqual(e) && r.isAfter(e);
	}
	function m(e, t) {
		var n = e.focusDate, r = e.rangeSelectDate, o = e.selectDate;
		return {
			cursor: d(t.cursor, e) && t.cursor || d(o, e) && o || d(r, e) && r || n,
			buttonFocused: t.buttonFocused != null ? t.buttonFocused : !1,
			prevCount: t.prevCount,
			prevFocusDate: t.prevFocusDate,
			prevRangeSelectDate: t.prevRangeSelectDate,
			prevSelectDate: t.prevSelectDate
		};
	}
	function p(e, t) {
		return !!(e && t && e.equals(t));
	}
	function _(e, t) {
		return e.getMonth() === t.getMonth() && e.getYear() === t.getYear();
	}
	function f(e, t) {
		return t.count !== e.count || t.focusDate !== e.focusDate || t.rangeSelectDate !== e.rangeSelectDate || t.selectDate !== e.selectDate;
	}
	var g = (function(e) {
		function t(t) {
			var n;
			return n = e.call(this, t) || this, n.$5 = function(e) {
				n.setState({ cursor: e }), n.$4 = e, n.props.onSelectDateChange && n.props.onSelectDateChange(e);
			}, n.$6 = function(e) {
				if (!(n.props.limitPagerToRestraints && !n.$7(e))) {
					var t;
					if (!d(e, {
						focusDate: n.props.focusDate,
						count: n.props.count
					})) {
						t = n.$8(n.props.focusDate.isBefore(e) ? 1 : -1);
						var r = {
							focusDate: t,
							count: n.props.count
						};
						d(e, r) || (t = e);
					}
					n.setState({ cursor: e }, function() {
						t ? (n.$3 = t, n.props.onFocusDateChange(t)) : n.$1 && o("Focus").set(n.$1);
					});
				}
			}, n.$9 = function(e) {
				n.$1 = e, n.props.setupFocusRef && n.props.setupFocusRef(n.$1);
			}, n.$10 = function() {
				n.props.onFocusDateChange(n.$8(-1));
			}, n.$11 = function() {
				n.props.onFocusDateChange(n.$8(1));
			}, n.$12 = function(e) {
				e.preventDefault();
			}, n.$18 = function() {
				n.setState({ buttonFocused: !0 });
			}, n.$17 = function() {
				n.setState({ buttonFocused: !1 });
			}, n.$21 = function(e) {
				return u.jsxs("div", {
					className: n.props.classNames.calendarWrapper,
					children: [n.$14(e), n.$20(e)]
				}, e.key);
			}, n.$2 = r("uniqueID")(), n.state = m(t, {
				prevCount: t.count,
				prevFocusDate: t.focusDate,
				prevRangeSelectDate: t.rangeSelectDate,
				prevSelectDate: t.selectDate
			}), n;
		}
		babelHelpers.inheritsLoose(t, e), t.getDerivedStateFromProps = function(t, n) {
			var e = {
				count: n.prevCount,
				focusDate: n.prevFocusDate,
				rangeSelectDate: n.prevRangeSelectDate,
				selectDate: n.prevSelectDate
			};
			return f(t, e) ? m(t, babelHelpers.extends({}, n, {
				prevCount: t.count,
				prevFocusDate: t.focusDate,
				prevRangeSelectDate: t.rangeSelectDate,
				prevSelectDate: t.selectDate
			})) : null;
		};
		var n = t.prototype;
		return n.componentDidUpdate = function(t, n) {
			var e = this.props;
			if (f(t, e)) {
				var r = !_(e.focusDate, t.focusDate) && this.$3 && this.$3.equals(e.focusDate), a = !p(t.selectDate, e.selectDate) && p(this.$4, e.selectDate);
				this.$3 = null, this.$4 = null, r && this.$1 && o("Focus").set(this.$1), a && this.$1 && o("Focus").setWithoutOutline(this.$1);
			}
		}, n.$8 = function(t) {
			return this.props.focusDate.startOfMonth().addMonths(t);
		}, n.canPageByMonthDelta = function(t) {
			return this.props.limitPagerToRestraints ? this.$7(this.$8(t)) : !0;
		}, n.$7 = function(t) {
			for (var e = t.getMonth(), n = t; n.getMonth() === e;) {
				if (this.$13(n)) return !0;
				n = n.addDays(1);
			}
			return !1;
		}, n.$13 = function(t) {
			return !this.props.dateRestraints || this.props.dateRestraints.every(function(e) {
				return e(t);
			});
		}, n.canPagePrev = function() {
			return this.canPageByMonthDelta(-1);
		}, n.canPageNext = function() {
			return this.canPageByMonthDelta(1);
		}, n.$14 = function(t) {
			if (this.props.showMonthYearSelector) {
				var e = this.props.monthYearSelectorType;
				return u.jsx(e, {
					focusDate: t.focusDate,
					isPagerLimitRestrained: this.props.limitPagerToRestraints,
					isSinglePageCalendar: this.props.count === 1,
					isStartingMonth: t.isStartingMonth,
					justifyContent: t.isStartingMonth ? "end" : "start",
					numberOfMonths: this.props.monthYearSelectorNumberOfMonths,
					onFocusDateChange: this.props.onFocusDateChange,
					onSelectMonth: this.props.onSelectMonth,
					onSelectYear: this.props.onSelectYear,
					restraint: this.props.dateRestraints,
					yearDropdownOrder: this.props.monthYearSelectorYearDropdownOrder
				});
			} else return u.jsx("h2", {
				className: this.props.classNames.monthHeader,
				id: t.headerId,
				children: this.$15(t)
			}, t.key);
		}, n.$15 = function(t) {
			return s._(
				/*BTDS*/
				"",
				[s._param("month", u.jsx("span", {
					className: this.props.classNames.month,
					children: t.focusDate.format("F", { skipPatternLocalization: !0 })
				})), s._param("year", u.jsx("span", {
					className: this.props.classNames.year,
					children: t.focusDate.getYear()
				}))]
			);
		}, n.$16 = function() {
			return u.cloneElement(this.props.leftButton, {
				disabled: !this.canPagePrev(),
				label: s._(
					/*BTDS*/
					""
				),
				labelIsHidden: !0,
				onBlur: this.$17,
				onClick: this.$10,
				onFocus: this.$18,
				onMouseDown: this.$12,
				tabIndex: 0
			});
		}, n.$19 = function() {
			return u.cloneElement(this.props.rightButton, {
				disabled: !this.canPageNext(),
				label: s._(
					/*BTDS*/
					""
				),
				labelIsHidden: !0,
				onBlur: this.$17,
				onClick: this.$11,
				onFocus: this.$18,
				onMouseDown: this.$12,
				tabIndex: 0
			});
		}, n.$20 = function(t) {
			var e = this.props, n = e.calendarType;
			return u.jsx(n, {
				allowDuplicateSelection: e.allowDuplicateSelection,
				allowVariableRowCount: e.allowVariableRowCount,
				"aria-labelledby": t.headerId,
				dateRestraints: e.dateRestraints,
				dayInnerFormatter: e.dayInnerFormatter,
				dayRenderer: e.dayRenderer,
				defaultCursor: this.state.cursor,
				focusDate: t.focusDate,
				highlightedDates: e.highlightedDates,
				highlightedTimes: e.highlightedTimes,
				hoveredDates: e.hoveredDates,
				onCursorChange: this.$6,
				onFocusDateChange: e.onFocusDateChange,
				onMouseOutDay: e.onMouseOutDay,
				onMouseOverDay: e.onMouseOverDay,
				onSelectDateChange: this.$5,
				rangeSelectDate: e.rangeSelectDate,
				selectDate: e.selectDate,
				selectedWeekEnd: e.selectedWeekEnd,
				selectedWeekStart: e.selectedWeekStart,
				setupFocusRef: this.$9,
				showDaysOutsideOfMonth: e.showDaysOutsideOfMonth
			});
		}, n.$22 = function() {
			for (var e = [], t = this.props, n = t.count, r = t.showPreviousMonthByDefault, o = r && n > 1 ? n - 1 : n, a = r ? -1 : 0, i = a; i < o; i++) {
				var l = this.$8(i), s = l.getMonth() + "-" + l.getYear();
				e.push({
					focusDate: l,
					headerId: this.$2 + "-" + s,
					key: n > 1 ? s : "1",
					isStartingMonth: i === a
				});
			}
			return e;
		}, n.render = function() {
			var e = this.$22(), t = babelHelpers.extends({}, this.props);
			return delete t.allowDuplicateSelection, delete t.allowVariableRowCount, delete t.calendarType, delete t.monthYearSelectorType, delete t.monthYearSelectorNumberOfMonths, delete t.monthYearSelectorYearDropdownOrder, delete t.showMonthYearSelector, delete t.classNames, delete t.count, delete t.dateRestraints, delete t.dayInnerFormatter, delete t.dayRenderer, delete t.focusDate, delete t.highlightedTimes, delete t.highlightedDates, delete t.hoveredDates, delete t.leftButton, delete t.limitPagerToRestraints, delete t.onFocusDateChange, delete t.onSelectDateChange, delete t.onSelectMonth, delete t.onSelectYear, delete t.rangeSelectDate, delete t.rightButton, delete t.selectDate, delete t.selectedDateStart, delete t.selectedDateEnd, delete t.selectedWeekStart, delete t.selectedWeekEnd, delete t.setupFocusRef, delete t.showPreviousMonthByDefault, u.jsxs("div", babelHelpers.extends({}, t, {
				"data-count": this.props.count,
				children: [
					u.jsxs("div", {
						className: this.props.classNames.buttonsWrapper,
						children: [this.$16(), this.$19()]
					}),
					u.jsx("div", {
						className: this.props.classNames.main,
						children: e.map(this.$21, this)
					}),
					u.jsx("div", {
						"aria-atomic": "true",
						"aria-live": "polite",
						className: "accessible_elem",
						children: this.state.buttonFocused ? this.$15(e[0]) : ""
					})
				]
			}));
		}, t;
	})(c);
	g.defaultProps = {
		classNames: {},
		count: 1
	}, l.default = g;
}), 226);
