const WamTestAnonymousWeeklyId = 2956 // channel: private

type TestAnonymousWeeklyIdEvent struct {
	PsTimeSinceLastEventInMin int64 `wam:"ps_time_since_last_event_in_min"` // field 1
	PsTestBooleanField bool `wam:"ps_test_boolean_field"` // field 2
	PsTestStringField string `wam:"ps_test_string_field"` // field 3
}