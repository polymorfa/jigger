const WamPathfinderFrameworkHealth = 7688 // channel: regular

type PathfinderFrameworkHealthEvent struct {
	PathfinderHealthEventData string `wam:"pathfinder_health_event_data"` // field 1
	PathfinderHealthEventType PATHFINDERHEALTHEVENTTYPE `wam:"pathfinder_health_event_type"` // field 2
}