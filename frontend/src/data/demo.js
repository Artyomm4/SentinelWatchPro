export const fallbackSummary={risk_score:32,devices:4,open_alerts:2,critical_alerts:0};
export const fallbackDevices=[
{id:1,name:"OFFICE-01",type:"Windows PC",status:"Protected",ip:"192.168.10.21",last_check:"8 min ago"},
{id:2,name:"OFFICE-02",type:"Windows PC",status:"Protected",ip:"192.168.10.22",last_check:"12 min ago"},
{id:3,name:"NAS-01",type:"Network storage",status:"Protected",ip:"192.168.10.50",last_check:"14 min ago"},
{id:4,name:"LAPTOP-07",type:"Laptop",status:"Protected",ip:"192.168.10.77",last_check:"18 min ago"}];
export const fallbackAlerts=[
{id:1,severity:"High",title:"Repeated login failures",description:"Multiple failed login attempts were recorded for an administrator account.",device:"OFFICE-02",time:"41 min ago"},
{id:2,severity:"Medium",title:"Unusual outbound connection",description:"A device contacted an address outside the normal activity pattern.",device:"LAPTOP-07",time:"1 hr ago"},
{id:3,severity:"Low",title:"Update available",description:"A recommended operating-system update has not been installed yet.",device:"OFFICE-01",time:"3 hrs ago"}];
export const fallbackReports=[
{id:1,name:"Weekly Security Summary",period:"Aug 3 – Aug 9, 2026",size:"420 KB",type:"PDF"},
{id:2,name:"Monthly Risk Overview",period:"July 2026",size:"1.2 MB",type:"PDF"},
{id:3,name:"Device Health Report",period:"July 2026",size:"680 KB",type:"PDF"}];
